import { PAYPAL_CLIENT_ID } from './config.js';

const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture&enable-funding=card&disable-funding=venmo`;

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

export async function initPaypalButtons(getAmount) {
  try {
    await loadSdk();
  } catch {
    const c = document.getElementById('paypal-button-container');
    if (c) c.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">Could not load PayPal. Check your connection and refresh.</p>';
    return;
  }

  if (typeof window.paypal === 'undefined') {
    const c = document.getElementById('paypal-button-container');
    if (c) c.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">PayPal unavailable. Check Client ID configuration.</p>';
    return;
  }

  const container = document.getElementById('paypal-button-container');
  if (!container) return;
  container.innerHTML = '';

  paypal.Buttons({
    style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'donate' },
    createOrder: (data, actions) => {
      const amount = parseFloat(getAmount());
      if (!amount || amount < 1) {
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
      .then(() => { window.location.hash = '/thank-you'; })
      .catch(() => {
        const c = document.getElementById('paypal-button-container');
        if (c) c.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">Payment captured but confirmation failed. Contact us at newbornbabyinitiative@gmail.com.</p>';
      }),
    onCancel: () => {},
    onError: (err) => {
      if (err?.message === 'invalid-amount') return;
      console.error('PayPal error', err);
      const c = document.getElementById('paypal-button-container');
      if (c) c.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">Payment failed. Please try again or contact us.</p>';
    }
  }).render('#paypal-button-container');
}
