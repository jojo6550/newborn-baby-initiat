import { STRIPE_PAYMENT_LINK } from './config.js';

const MAX_AMOUNT = 10000;

function showError(msg) {
  const el = document.getElementById('stripe-error-msg');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearError() {
  const el = document.getElementById('stripe-error-msg');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}

export function processStripePayment(amount, email) {
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

  if (!STRIPE_PAYMENT_LINK) {
    showError('Card payment unavailable. Please try PayPal or contact newbornbabyinitiative@gmail.com.');
    return;
  }

  const amountCents = Math.round(amountNum * 100);
  const url = new URL(STRIPE_PAYMENT_LINK);
  url.searchParams.set('prefilled_amount', amountCents);
  url.searchParams.set('prefilled_email', email);

  sessionStorage.setItem('nbbi_donated', '1');
  window.location.href = url.toString();
}
