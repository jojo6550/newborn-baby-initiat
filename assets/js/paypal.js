// PayPal donation config — update BUSINESS_EMAIL and RETURN_BASE to match your setup
const BUSINESS_EMAIL = 'newbornbabyinitiative@gmail.com';
const RETURN_BASE     = 'https://jojo6550.github.io/newborn-baby-initiat';

/**
 * Build a PayPal donation URL that redirects back to the site after payment.
 * @param {number|string} amount  - Pre-filled amount (USD). '' for open amount.
 * @param {string}        itemName - Description shown on PayPal receipt.
 */
export function paypalUrl(amount = '', itemName = 'NBBI Donation') {
  const params = new URLSearchParams({
    cmd:           '_donations',
    business:      BUSINESS_EMAIL,
    item_name:     itemName,
    currency_code: 'USD',
    return:        `${RETURN_BASE}/#/thank-you`,
    cancel_return: `${RETURN_BASE}/#/donate`,
    no_shipping:   '1',
  });
  if (amount) params.set('amount', String(amount));
  return `https://www.paypal.com/cgi-bin/webscr?${params}`;
}

/**
 * Wire up all [data-paypal] elements on the page.
 * Usage in HTML: <a data-paypal data-amount="25" data-item="Seedling Gift">Donate</a>
 */
export function initPaypalButtons() {
  document.querySelectorAll('[data-paypal]').forEach(el => {
    const amount = el.dataset.amount || '';
    const item   = el.dataset.item   || 'NBBI Donation';
    el.href   = paypalUrl(amount, item);
    el.target = '_blank';
    el.rel    = 'noopener noreferrer';
  });
}
