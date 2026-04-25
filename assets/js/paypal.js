// To go live: replace YOUR_CLIENT_ID with your Live Client ID from developer.paypal.com
// Sandbox Client ID (for testing without real money) also available at developer.paypal.com
const CLIENT_ID = 'YOUR_CLIENT_ID';
const SDK_URL   = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=USD&intent=capture&enable-funding=card&disable-funding=venmo`;

let sdkLoaded = false;

function loadSdk() {
  if (sdkLoaded || document.querySelector('[data-paypal-sdk]')) {
    return Promise.resolve();
  }
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = SDK_URL;
    s.dataset.paypalSdk = '';
    s.onload = () => { sdkLoaded = true; res(); };
    s.onerror = rej;
    document.head.appendChild(s);
  });
}

export async function initPaypalButtons(getAmount) {
  try {
    await loadSdk();
  } catch {
    const c = document.getElementById('paypal-button-container');
    if (c) c.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">Could not load PayPal. Check your connection and refresh.</p>';
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
    onApprove: (data, actions) => actions.order.capture().then(() => {
      window.location.hash = '/thank-you';
    }),
    onCancel: () => {},
    onError: (err) => {
      console.error('PayPal error', err);
      const c = document.getElementById('paypal-button-container');
      if (c) c.innerHTML = '<p style="color:red;text-align:center;font-size:13px;">Payment failed. Please try again or contact us.</p>';
    }
  }).render('#paypal-button-container');
}
