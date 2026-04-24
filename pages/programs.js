export const programs = {
  render() {
    return /* html */`
<section class="page-hero">
  <div class="container" style="position:relative;z-index:1;">
    <div class="page-hero-eyebrow">
      <div class="section-label" style="justify-content:center;">What We Do</div>
    </div>
    <h1>Programs That <em>Protect</em> Newborns</h1>
    <p>From essential supplies to nurse referrals, every program NBBI runs is designed to give newborns and their families the strongest possible start.</p>
  </div>
</section>

<!-- ── Program Cards ─────────────────────────────── -->
<section class="programs">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:48px;">
      ${[
        {
          icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
          color: '#C47B55',
          bg:    'var(--blush-light)',
          title: 'Essential Supply Bundles',
          text:  'We provide newborn clothing, diapers, formula, and hygiene supplies directly to families identified through our referral network. Every bundle is assembled with care.',
        },
        {
          icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
          color: '#8FA688',
          bg:    'var(--sage-light)',
          title: 'Medical Support &amp; Referrals',
          text:  'Through partnerships with nurses, health centres, and hospitals, we connect vulnerable mothers to the medical care they need — before and after delivery.',
        },
        {
          icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
          color: '#BF9248',
          bg:    'var(--gold-light)',
          title: 'Community Outreach',
          text:  'NBBI works through churches, community leaders, and local organisations to identify families who need support — ensuring no one is missed.',
        },
        {
          icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>`,
          color: '#C47B55',
          bg:    'var(--blush-light)',
          title: 'Mother Wellness Programme',
          text:  'New and expectant mothers receive emotional support, wellness check-ins, and guidance on infant care — because a supported mother raises a thriving child.',
        },
      ].map(({ icon, color, bg, title, text }) => `
      <div class="mission-card reveal">
        <div class="mission-card-icon" style="background:${bg};">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
        </div>
        <div class="mission-card-title">${title}</div>
        <div class="mission-card-text">${text}</div>
      </div>`).join('')}
    </div>

    <!-- Who We Serve -->
    <div class="cta-inner reveal" style="background:var(--cream);border-radius:var(--radius-lg);padding:64px;margin-top:0;">
      <div class="section-label" style="justify-content:center;">Who We Serve</div>
      <h2 style="color:var(--warm-brown);">Reaching those who need us <em>most</em></h2>
      <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin-top:32px;">
        ${['Newborn families', 'Low-income households', 'Single mothers', 'Teenage parents', 'Families in Manchester', 'Families in Clarendon', 'Families in St. Elizabeth'].map(tag => `
        <span style="background:var(--warm-white);color:var(--mid-brown);border:1.5px solid var(--cream-deep);border-radius:var(--radius-xl);padding:8px 20px;font-size:13px;font-weight:600;">${tag}</span>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ───────────────────────────────────────── -->
<section class="cta">
  <div class="container">
    <div class="cta-inner reveal">
      <div class="cta-orb cta-orb-1"></div>
      <div class="cta-orb cta-orb-2"></div>
      <h2>Support our programs <em>today</em></h2>
      <p class="cta-text">Your donation funds these programs directly. Every dollar reaches a family in need.</p>
      <div class="cta-actions">
        <a href="#/donate" class="btn-cta-primary">Donate Now</a>
        <a href="#/contact" class="btn-cta-outline">Get Involved</a>
      </div>
    </div>
  </div>
</section>
    `;
  },

  init() {}
};
