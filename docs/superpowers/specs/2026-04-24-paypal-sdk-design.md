# PayPal JS SDK Integration — NBBI

**Date:** 2026-04-24
**Status:** Approved

## Context

The site uses an outdated PayPal Donations URL redirect (`paypal.com/cgi-bin/webscr`). This opens a new tab, provides no card payment option, and gives no control over UX. Goal: upgrade to the official PayPal JS SDK for in-page checkout with PayPal wallet + debit/credit card support.

**Scope:** One-time donations only. No recurring/subscriptions.

## Architecture

**Before:**
```
User clicks button → window.open(paypal.com URL) → external page → return URL redirect
```

**After:**
```
Donate page init → SDK loads dynamically → paypal.Buttons() render in #paypal-button-container
User clicks → PayPal modal → onApprove → window.location.hash = '/thank-you'
```

SDK script injected dynamically from `paypal.js` — only when the donate page is visited.

## SDK Configuration

```
https://www.paypal.com/sdk/js?client-id=CLIENT_ID&currency=USD&intent=capture&enable-funding=card&disable-funding=venmo
```

- `enable-funding=card` — debit/credit card option
- `disable-funding=venmo` — hides Venmo

## Files Changed

| File | Change |
|------|--------|
| `assets/js/paypal.js` | Full rewrite: dynamic SDK loader + Buttons renderer |
| `pages/donate.js` | Replace button with `#paypal-button-container`, wire `initPaypalButtons()` |
| `index.html` | No changes |

## Going Live

Replace `YOUR_CLIENT_ID` in `assets/js/paypal.js` with a Live Client ID from developer.paypal.com:
1. Log in → Apps & Credentials → Create App
2. Switch to Live tab → copy Client ID
3. Paste into the `CLIENT_ID` constant

For sandbox testing, use the Sandbox Client ID from the same page.
