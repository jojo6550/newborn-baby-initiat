// Copy this file to config.js and fill in your values.
// config.js is gitignored — never commit real credentials.
// PayPal Client IDs are public keys (safe in source) but keeping them
// out of git history is good practice.

export const PAYPAL_CLIENT_ID = 'YOUR_CLIENT_ID';
// Sandbox ID for testing: get from developer.paypal.com → Apps & Credentials → Sandbox tab
// Live ID for production: get from developer.paypal.com → Apps & Credentials → Live tab

export const STRIPE_PAYMENT_LINK = 'YOUR_STRIPE_PAYMENT_LINK_URL';
// Create at: dashboard.stripe.com → Payment Links → + New
// Enable "Let customers decide what to pay" (custom amount)
// Copy the full URL e.g. https://buy.stripe.com/xxxxxxxx
