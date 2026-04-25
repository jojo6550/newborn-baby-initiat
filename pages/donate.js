import { initPaypalButtons } from '../assets/js/paypal.js';
import { preloadTilopaySdk, processTilopayPayment } from '../assets/js/tilopay.js';

const TAB_ACTIVE = `
  flex:1;padding:10px 0;border-radius:var(--radius-xl);border:1.5px solid var(--terracotta);
  background:var(--terracotta);font-family:var(--font-body);font-size:13px;font-weight:700;
  color:#fff;cursor:pointer;transition:all var(--transition);letter-spacing:0.03em;
`;
const TAB_INACTIVE = `
  flex:1;padding:10px 0;border-radius:var(--radius-xl);border:1.5px solid var(--cream-deep);
  background:transparent;font-family:var(--font-body);font-size:13px;font-weight:700;
  color:var(--mid-brown);cursor:pointer;transition:all var(--transition);letter-spacing:0.03em;
`;
const FIELD_STYLE = `
  width:100%;padding:13px 16px;font-size:15px;font-family:var(--font-body);
  color:var(--warm-brown);background:var(--cream);border:2px solid var(--cream-deep);
  border-radius:var(--radius-md);outline:none;transition:border-color var(--transition);
  box-sizing:border-box;-moz-appearance:textfield;
`;
const LABEL_STYLE = `
  display:block;font-size:11px;font-weight:700;letter-spacing:0.07em;
  text-transform:uppercase;color:var(--mid-brown);margin-bottom:6px;
`;

export const donate = {
  render() {
    return /* html */`
<section class="page-hero">
  <div class="container" style="position:relative;z-index:1;">
    <div class="page-hero-eyebrow">
      <div class="section-label" style="justify-content:center;">Make a Difference</div>
    </div>
    <h1>Your Donation <em>Changes</em> a Life</h1>
    <p>Every dollar goes directly to newborns and their families across Central Jamaica.</p>
  </div>
</section>

<section style="padding:80px 0 100px;">
  <div class="container">
    <div style="max-width:520px;margin:0 auto;">

      <div style="
        background:#fff;
        border-radius:var(--radius-lg);
        box-shadow:var(--shadow-lift);
        padding:52px 48px 48px;
        border:1px solid var(--cream-deep);
        text-align:center;
      " class="reveal">

        <div style="
          width:64px;height:64px;border-radius:50%;
          background:var(--cream);
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 28px;
        ">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.91 3 10 3C11.04 3 12 3.31 12 3.31C12 3.31 12.96 3 14 3C17.09 3 20 5.42 20 8.5C20 13.5 12 21 12 21Z"/>
          </svg>
        </div>

        <h2 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--warm-brown);line-height:1.2;margin-bottom:12px;">
          Give What You Can
        </h2>
        <p style="font-size:14px;color:var(--mid-brown);line-height:1.75;margin-bottom:28px;">
          No tiers, no minimums — just a direct gift to families who need it most.
        </p>

        <!-- Payment method tabs -->
        <div style="display:flex;gap:8px;margin-bottom:28px;">
          <button id="tab-paypal" style="${TAB_ACTIVE}">PayPal</button>
          <button id="tab-card" style="${TAB_INACTIVE}">Pay by Card</button>
        </div>

        <!-- Amount input (shared between both tabs) -->
        <div style="position:relative;margin-bottom:20px;">
          <span style="
            position:absolute;left:20px;top:50%;transform:translateY(-50%);
            font-size:22px;font-family:var(--font-display);font-weight:500;
            color:var(--terracotta);pointer-events:none;
          ">$</span>
          <input
            id="customAmount"
            type="number"
            min="1"
            max="25000"
            step="0.01"
            placeholder="0.00"
            style="
              width:100%;
              padding:18px 20px 18px 44px;
              font-size:24px;
              font-family:var(--font-display);
              font-weight:500;
              color:var(--warm-brown);
              background:var(--cream);
              border:2px solid var(--cream-deep);
              border-radius:var(--radius-md);
              outline:none;
              transition:border-color var(--transition);
              -moz-appearance:textfield;
            "
            onfocus="this.style.borderColor='var(--terracotta)'"
            onblur="this.style.borderColor='var(--cream-deep)'"
          >
        </div>

        <!-- Quick-select amounts (shared) -->
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:28px;">
          ${[10, 25, 50, 100].map(v => `
          <button
            class="quick-amount-btn"
            data-val="${v}"
            style="
              padding:8px 18px;
              border-radius:var(--radius-xl);
              border:1.5px solid var(--cream-deep);
              background:transparent;
              font-family:var(--font-body);
              font-size:13px;
              font-weight:600;
              color:var(--mid-brown);
              cursor:pointer;
              transition:all var(--transition);
            "
          >$${v}</button>`).join('')}
        </div>

        <!-- ── PayPal panel ── -->
        <div id="panel-paypal">
          <p id="paypal-error-msg" style="display:none;color:red;font-size:13px;text-align:center;margin-bottom:12px;line-height:1.5;"></p>
          <div id="paypal-button-container" style="min-height:55px;margin-top:8px;"></div>
        </div>

        <!-- ── Card panel (Tilopay) ── -->
        <div id="panel-card" style="display:none;">
          <p id="tilopay-error-msg" style="display:none;color:red;font-size:13px;text-align:center;margin-bottom:12px;line-height:1.5;"></p>

          <!-- Email (required by Tilopay for transaction record) -->
          <div style="margin-bottom:16px;text-align:left;">
            <label for="tilopay-email" style="${LABEL_STYLE}">Email</label>
            <input
              type="email"
              id="tilopay-email"
              name="tilopay-email"
              autocomplete="email"
              placeholder="your@email.com"
              style="${FIELD_STYLE}"
              onfocus="this.style.borderColor='var(--terracotta)'"
              onblur="this.style.borderColor='var(--cream-deep)'"
            >
          </div>

          <!-- Tilopay required form structure — hidden selects, visible card fields -->
          <div class="payFormTilopay" style="text-align:left;">
            <select id="method" name="method" style="display:none;"><option value="">Select method</option></select>
            <select id="cards" name="cards" style="display:none;"><option value="">Select card</option></select>

            <div style="margin-bottom:16px;">
              <label for="ccnumber" style="${LABEL_STYLE}">Card Number</label>
              <input
                type="text"
                id="ccnumber"
                name="ccnumber"
                autocomplete="cc-number"
                placeholder="1234 5678 9012 3456"
                maxlength="19"
                style="${FIELD_STYLE}"
                onfocus="this.style.borderColor='var(--terracotta)'"
                onblur="this.style.borderColor='var(--cream-deep)'"
              >
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;">
              <div>
                <label for="expdate" style="${LABEL_STYLE}">Expiry</label>
                <input
                  type="text"
                  id="expdate"
                  name="expdate"
                  autocomplete="cc-exp"
                  placeholder="MM / YY"
                  maxlength="7"
                  style="${FIELD_STYLE}"
                  onfocus="this.style.borderColor='var(--terracotta)'"
                  onblur="this.style.borderColor='var(--cream-deep)'"
                >
              </div>
              <div>
                <label for="cvv" style="${LABEL_STYLE}">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  autocomplete="cc-csc"
                  placeholder="123"
                  maxlength="4"
                  style="${FIELD_STYLE}"
                  onfocus="this.style.borderColor='var(--terracotta)'"
                  onblur="this.style.borderColor='var(--cream-deep)'"
                >
              </div>
            </div>
          </div>

          <!-- Required by Tilopay for 3DS verification flow -->
          <div id="result"></div>

          <button
            id="tilopay-pay-btn"
            style="
              width:100%;
              padding:16px 24px;
              background:var(--terracotta);
              color:#fff;
              border:none;
              border-radius:var(--radius-md);
              font-family:var(--font-body);
              font-size:15px;
              font-weight:700;
              letter-spacing:0.03em;
              cursor:pointer;
              transition:opacity var(--transition);
            "
            onmouseover="this.style.opacity='0.88'"
            onmouseout="this.style.opacity='1'"
          >Donate by Card</button>
        </div>

        <p style="font-size:12px;color:var(--muted-brown);margin-top:20px;line-height:1.6;">
          Securely processed by PayPal &middot; Tilopay &middot; 100% goes to families
        </p>
      </div>

    </div>
  </div>
</section>
    `;
  },

  init() {
    const amountInput = document.getElementById('customAmount');
    const qBtns = document.querySelectorAll('.quick-amount-btn');

    // Quick-amount buttons
    qBtns.forEach(b => {
      b.addEventListener('mouseenter', () => {
        b.style.background = 'var(--cream)';
        b.style.borderColor = 'var(--terracotta)';
        b.style.color = 'var(--terracotta)';
      });
      b.addEventListener('mouseleave', () => {
        if (b.dataset.active !== 'true') {
          b.style.background = 'transparent';
          b.style.borderColor = 'var(--cream-deep)';
          b.style.color = 'var(--mid-brown)';
        }
      });
      b.addEventListener('click', () => {
        qBtns.forEach(x => {
          x.dataset.active = 'false';
          x.style.background = 'transparent';
          x.style.borderColor = 'var(--cream-deep)';
          x.style.color = 'var(--mid-brown)';
        });
        b.dataset.active = 'true';
        b.style.background = 'var(--terracotta)';
        b.style.borderColor = 'var(--terracotta)';
        b.style.color = '#fff';
        amountInput.value = b.dataset.val;
        updateCardBtnText(b.dataset.val);
      });
    });

    // Update card button text when amount changes
    function updateCardBtnText(val) {
      const btn = document.getElementById('tilopay-pay-btn');
      if (!btn) return;
      const n = parseFloat(val);
      btn.textContent = n >= 1 ? `Donate $${n % 1 === 0 ? n : n.toFixed(2)} by Card` : 'Donate by Card';
    }

    amountInput?.addEventListener('input', () => {
      updateCardBtnText(amountInput.value);
      // deselect quick-amount buttons when user types manually
      qBtns.forEach(x => {
        if (x.dataset.active === 'true') {
          x.dataset.active = 'false';
          x.style.background = 'transparent';
          x.style.borderColor = 'var(--cream-deep)';
          x.style.color = 'var(--mid-brown)';
        }
      });
    });

    // Tab switching
    const tabPaypal = document.getElementById('tab-paypal');
    const tabCard = document.getElementById('tab-card');
    const panelPaypal = document.getElementById('panel-paypal');
    const panelCard = document.getElementById('panel-card');

    function setActive(activeTab, inactiveTab, showPanel, hidePanel) {
      activeTab.style.cssText = TAB_ACTIVE;
      inactiveTab.style.cssText = TAB_INACTIVE;
      showPanel.style.display = '';
      hidePanel.style.display = 'none';
    }

    tabPaypal.addEventListener('click', () => {
      setActive(tabPaypal, tabCard, panelPaypal, panelCard);
    });

    tabCard.addEventListener('click', () => {
      setActive(tabCard, tabPaypal, panelCard, panelPaypal);
      preloadTilopaySdk().catch(() => {}); // warm up SDK; errors surface later on pay click
    });

    // Tilopay pay button
    document.getElementById('tilopay-pay-btn').addEventListener('click', async () => {
      const btn = document.getElementById('tilopay-pay-btn');
      const amount = amountInput?.value;
      const email = document.getElementById('tilopay-email')?.value;

      const originalText = btn.textContent;
      btn.disabled = true;
      btn.style.opacity = '0.6';
      btn.textContent = 'Processing…';

      await processTilopayPayment(amount, email);

      btn.disabled = false;
      btn.style.opacity = '1';
      btn.textContent = originalText;
    });

    // PayPal buttons
    function getAmount() {
      const v = amountInput?.value;
      if (!v || Number(v) < 1) {
        amountInput?.focus();
        amountInput?.style.setProperty('border-color', 'var(--terracotta)');
        setTimeout(() => amountInput?.style.setProperty('border-color', 'var(--cream-deep)'), 1200);
        return '';
      }
      return v;
    }

    initPaypalButtons(getAmount);
  }
};
