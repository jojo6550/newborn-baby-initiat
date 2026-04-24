import { paypalUrl } from '../assets/js/paypal.js';

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
        <p style="font-size:14px;color:var(--mid-brown);line-height:1.75;margin-bottom:36px;">
          No tiers, no minimums — just a direct gift to families who need it most.
        </p>

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

        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:32px;">
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

        <button id="customDonateBtn" class="btn-primary" style="width:100%;justify-content:center;font-size:15px;padding:18px 24px;">
          Donate via PayPal
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </button>

        <p style="font-size:12px;color:var(--muted-brown);margin-top:20px;line-height:1.6;">
          Securely processed by PayPal &middot; 100% goes to families
        </p>
      </div>

    </div>
  </div>
</section>
    `;
  },

  init() {
    const input  = document.getElementById('customAmount');
    const btn    = document.getElementById('customDonateBtn');
    const qBtns  = document.querySelectorAll('.quick-amount-btn');

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
        input.value = b.dataset.val;
      });
    });

    btn?.addEventListener('click', () => {
      const amount = input?.value;
      if (!amount || Number(amount) < 1) { input?.focus(); return; }
      window.open(paypalUrl(amount, 'NBBI Custom Donation'), '_blank', 'noopener,noreferrer');
    });
  }
};
