import { PAYPAL_CLIENT_ID } from './config.js';

const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture&enable-funding=card&disable-funding=venmo`;
const MAX_AMOUNT = 25000;

let sdkPromise = null;

function loadSdk() {
  if (sdkPromise) return sdkPromise;
  if (document.querySelector('[data-paypal-sdk]')) {
    sdkPromise = Promise.resolve();
    return sdkPromise;
  }
  sdkPromise = new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = SDK_URL;
    s.dataset.paypalSdk = '';
    s.onload = res;
    s.onerror = () => { sdkPromise = null; rej(new Error('PayPal SDK failed to load')); };
    document.head.appendChild(s);
  });
  return sdkPromise;
}

function showError(msg) {
  const el = document.getElementById('paypal-error-msg');
  if (el) {
    el.textContent = msg;
    el.style.display = 'block';
  }
}

function clearError() {
  const el = document.getElementById('paypal-error-msg');
  if (el) {
    el.textContent = '';
    el.style.display = 'none';
  }
}

export async function initPaypalButtons(getAmount) {
  const container = document.getElementById('paypal-button-container');

  try {
    if (container) container.innerHTML = '<p style="text-align:center;color:var(--muted-brown);font-size:13px;padding:12px 0;">Loading payment options…</p>';
    await loadSdk();
  } catch {
    if (container) container.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">Could not load PayPal. Check your connection and refresh.</p>';
    return;
  }

  if (typeof window.paypal === 'undefined') {
    if (container) container.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">PayPal unavailable. Check Client ID configuration.</p>';
    return;
  }

  if (!container) return;
  container.innerHTML = '';

  paypal.Buttons({
    style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'donate' },
    createOrder: (data, actions) => {
      clearError();
      const raw = getAmount();
      const amount = parseFloat(raw);
      if (!amount || isNaN(amount) || amount < 1 || amount > MAX_AMOUNT) {
        return Promise.reject(new Error('invalid-amount'));
      }
      return actions.order.create({
        purchase_units: [{
          amount: { value: amount.toFixed(2), currency_code: 'USD' },
          description: 'NBBI Donation'
        }]
      });
    },
    onApprove: (data, actions) => actions.order.capture()
      .then(() => {
        sessionStorage.setItem('nbbi_donated', '1');
        window.location.hash = '/thank-you';
      })
      .catch(() => {
        showError('Payment was not completed. No charge was made. Please try again or contact newbornbabyinitiative@gmail.com.');
      }),
    onCancel: () => { clearError(); },
    onError: (err) => {
      if (err?.message === 'invalid-amount') return;
      console.error('PayPal error', err);
      showError('Payment failed. Please try again or contact newbornbabyinitiative@gmail.com.');
    }
  }).render('#paypal-button-container');
}
