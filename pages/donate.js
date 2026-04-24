import { initPaypalButtons } from '../assets/js/paypal.js';

const tiers = [
  {
    tag:      'One-Time',
    title:    'Seedling',
    text:     'A small, meaningful gift that puts essentials directly into the hands of a family in need.',
    price:    '$10',
    sub:      'or any amount',
    features: ['Diapers for a week', 'Baby clothing items', 'Formula supplement', 'Direct family impact'],
    amount:   10,
    item:     'NBBI Seedling Donation',
    btnClass: 'btn-program-outline',
    featured: false,
  },
  {
    tag:      'Most Impact',
    title:    'Nurturer',
    text:     'Provide a full care package — clothing, formula, medical supply, and ongoing support for one family.',
    price:    '$50',
    sub:      'per family bundle',
    features: ['Full clothing bundle', 'One month of formula', 'Medical supply kit', 'Nurse referral support', 'Mother wellness check'],
    amount:   50,
    item:     'NBBI Nurturer Donation',
    btnClass: 'btn-program-white',
    featured: true,
  },
  {
    tag:      'Monthly',
    title:    'Sustainer',
    text:     'Commit monthly and become a lifeline — your recurring gift lets us plan and expand our reach.',
    price:    '$25',
    sub:      '/ month',
    features: ['Recurring family support', 'Quarterly impact updates', 'Named on donor wall', 'Community membership'],
    amount:   25,
    item:     'NBBI Monthly Sustainer',
    btnClass: 'btn-program-outline',
    featured: false,
  },
];

export const donate = {
  render() {
    return /* html */`
<section class="page-hero">
  <div class="container" style="position:relative;z-index:1;">
    <div class="page-hero-eyebrow">
      <div class="section-label" style="justify-content:center;">Make a Difference</div>
    </div>
    <h1>Your Donation <em>Changes</em> a Life</h1>
    <p>Every contribution directly provides essentials to newborns and their families across Central Jamaica. No amount is too small.</p>
  </div>
</section>

<section class="programs">
  <div class="container">
    <div class="programs-grid">
      ${tiers.map((t, i) => `
      <div class="program-card ${t.featured ? 'program-card-featured' : ''} reveal reveal-delay-${i + 1}">
        <div class="program-card-accent"></div>
        <div class="program-tag" ${t.featured ? 'style="background:rgba(232,200,178,0.2);color:var(--blush);"' : ''}>${t.tag}</div>
        <div class="program-title">${t.title}</div>
        <div class="program-text">${t.text}</div>
        <div class="program-price">${t.price} <span>${t.sub}</span></div>
        <div class="program-divider"></div>
        <ul class="program-features">
          ${t.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a class="btn-program ${t.btnClass}"
           data-paypal
           data-amount="${t.amount}"
           data-item="${t.item}"
           href="#">
          Donate via PayPal
        </a>
      </div>`).join('')}
    </div>

    <!-- Custom amount -->
    <div class="contact-form reveal" style="max-width:560px;margin:60px auto 0;">
      <div style="font-family:var(--font-display);font-size:26px;font-weight:500;color:var(--warm-brown);margin-bottom:8px;">Custom Amount</div>
      <p style="font-size:14px;color:var(--mid-brown);margin-bottom:28px;">Give any amount you choose — every dollar goes directly to families.</p>
      <div class="form-row" style="align-items:flex-end;">
        <div class="form-group">
          <label class="form-label">Amount (USD)</label>
          <input id="customAmount" type="number" min="1" class="form-input" placeholder="e.g. 30">
        </div>
        <div>
          <button id="customDonateBtn" class="btn-primary" style="width:100%;">
            Donate via PayPal
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    `;
  },

  init() {
    initPaypalButtons();

    document.getElementById('customDonateBtn')?.addEventListener('click', () => {
      const input  = document.getElementById('customAmount');
      const amount = input?.value;
      if (!amount || Number(amount) < 1) { input?.focus(); return; }
      import('../assets/js/paypal.js').then(({ paypalUrl }) => {
        window.open(paypalUrl(amount, 'NBBI Custom Donation'), '_blank', 'noopener,noreferrer');
      });
    });
  }
};
