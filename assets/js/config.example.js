// Copy this file to config.js and fill in your values.
// config.js is gitignored — never commit real credentials.
// PayPal Client IDs are public keys (safe in source) but keeping them
// out of git history is good practice.

export const PAYPAL_CLIENT_ID = 'YOUR_CLIENT_ID';
// Sandbox ID for testing: get from developer.paypal.com → Apps & Credentials → Sandbox tab
// Live ID for production: get from developer.paypal.com → Apps & Credentials → Live tab

export const TILOPAY_API_KEY = 'YOUR_TILOPAY_SDK_TOKEN';
// Get your SDK token from: tilopay.com/developers → GetTokenSdk API call
// This is the session token returned by the GetTokenSdk endpoint, NOT your admin password
