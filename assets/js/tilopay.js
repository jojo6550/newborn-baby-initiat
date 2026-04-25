import { TILOPAY_API_KEY } from './config.js';

const JQUERY_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
const SDK_URL = 'https://app.tilopay.com/sdk/v1/sdk.min.js';
const MAX_AMOUNT = 25000;

let sdkPromise = null;

function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.onload = res;
    s.onerror = () => rej(new Error(`Failed to load: ${src}`));
    document.head.appendChild(s);
  });
}

export function preloadTilopaySdk() {
  if (!sdkPromise) {
    sdkPromise = loadScript(JQUERY_URL)
      .then(() => loadScript(SDK_URL))
      .catch(err => { sdkPromise = null; throw err; }); // reset on failure so next call retries
  }
  return sdkPromise;
}

function showError(msg) {
  const el = document.getElementById('tilopay-error-msg');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearError() {
  const el = document.getElementById('tilopay-error-msg');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}

export async function processTilopayPayment(amount, email) {
  clearError();

  const amountNum = parseFloat(amount);
  if (!amountNum || isNaN(amountNum) || amountNum < 1 || amountNum > MAX_AMOUNT) {
    showError('Please enter a valid donation amount ($1–$25,000).');
    return;
  }
  if (!email || !email.includes('@') || !email.includes('.')) {
    showError('Please enter a valid email address.');
    return;
  }

  try {
    await preloadTilopaySdk();
  } catch {
    showError('Could not load card payment. Check your connection and refresh.');
    return;
  }

  if (!window.Tilopay) {
    showError('Card payment unavailable. Please try PayPal or contact newbornbabyinitiative@gmail.com.');
    return;
  }

  // orderNumber must be unique per transaction
  const orderNumber = `NBBI${Date.now()}`;
  // Redirect to thank-you route after Tilopay completes
  const redirectUrl = `${location.origin}${location.pathname}#/thank-you`;

  const init = window.Tilopay.Init({
    token: TILOPAY_API_KEY,
    currency: 'USD',
    language: 'en',
    amount: amountNum,
    billToEmail: email,
    orderNumber,
    capture: 1,
    redirect: redirectUrl,
    subscription: 0
  });

  if (!init || init.message !== 'Success') {
    showError(init?.message || 'Card payment setup failed. Please try PayPal or contact newbornbabyinitiative@gmail.com.');
    return;
  }

  // Auto-select first available card payment method
  const cardMethod = (init.methods || []).find(m => m.type === 'card');
  if (cardMethod) {
    const methodEl = document.getElementById('method');
    if (methodEl) methodEl.value = cardMethod.id;
  }

  sessionStorage.setItem('nbbi_donated', '1');

  const payResult = window.Tilopay.startPayment();
  // startPayment returns an error object on failure; success triggers redirect (no return value)
  if (payResult?.message && payResult.message !== 'Success') {
    sessionStorage.removeItem('nbbi_donated');
    showError(payResult.message);
  }
}
