export const about = {
  render() {
    return /* html */`
<section class="page-hero">
  <div class="container" style="position:relative;z-index:1;">
    <div class="page-hero-eyebrow">
      <div class="section-label" style="justify-content:center;">Our Story</div>
    </div>
    <h1>Nurturing Every <em>Beginning</em></h1>
    <p>
      Founded in the heart of Central Jamaica, the Newborn Baby Initiative exists to ensure that no family faces the
      first days of their child's life without the essentials they need to thrive.
    </p>
  </div>
</section>

<!-- ── Full Mission ──────────────────────────────── -->
<section class="mission">
  <div class="container">
    <div class="mission-grid">
      <div class="mission-content reveal">
        <div class="section-label">Mission &amp; Vision</div>
        <h2>Built on <em>compassion,</em> sustained by community</h2>
        <p class="mission-body">
          Our mission is to empower communities and provide holistic support to families with newborn babies,
          enabling them to thrive during one of life's most transformative times. Our vision is to alleviate the
          day-to-day stress for vulnerable expectant mothers by contributing necessities for safe delivery and
          healthy early development.
        </p>
        <p class="mission-body">
          We believe that by giving to others, we can create a kinder and gentler society — one where every child,
          regardless of circumstance, has the chance to thrive from their very first breath.
        </p>
        <ul class="mission-list">
          <li><span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>Newborn clothing, formula, and diapers for families in need</li>
          <li><span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>Medical screenings and emotional support for new mothers</li>
          <li><span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>Referrals through nurses, health centres, hospitals &amp; churches</li>
          <li><span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>Supporting low-income, single, and teenage parents</li>
        </ul>
      </div>

      <div class="mission-visual reveal reveal-delay-2">
        <div class="mission-card">
          <img src="images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.31%20PM.jpeg" alt="NBBI team delivering care" style="width:100%;height:200px;object-fit:cover;border-radius:var(--radius-md);margin-bottom:28px;">
          <div class="mission-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C47B55" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div class="mission-card-title">Founded with Purpose</div>
          <div class="mission-card-text">NBBI was founded to address a real and urgent need — the lack of support for newborn families in Jamaica's rural and underserved communities.</div>
        </div>
        <div class="mission-card">
          <div class="mission-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C47B55" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          </div>
          <div class="mission-card-title">Operating Since Day One</div>
          <div class="mission-card-text">From Manchester to Clarendon to St. Elizabeth, NBBI has been on the ground delivering care directly to the families who need it most.</div>
        </div>
        <div class="mission-card">
          <div class="mission-card-icon" style="background:var(--sage-light);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5a7254" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="mission-card-title">Community Partnerships</div>
          <div class="mission-card-text">We partner with nurses, health centres, hospitals, and churches to identify and reach the families who need us most.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Values ────────────────────────────────────── -->
<section style="padding:0 0 120px; background:var(--cream);">
  <div class="container" style="padding-top:80px;">
    <div style="text-align:center; margin-bottom:60px;" class="reveal">
      <div class="section-label" style="justify-content:center;">Our Values</div>
      <h2>What drives <em>everything</em> we do</h2>
    </div>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:24px;">
      ${[
        ['Compassion', 'We approach every family with empathy, dignity, and genuine care — because every mother and child deserves to be seen.', '#C47B55'],
        ['Integrity',  'Every donation goes where we say it goes. Full transparency, zero overhead waste. Families first, always.', '#8FA688'],
        ['Community',  'We are rooted in the parishes we serve. Local knowledge, local partnerships, and lasting local impact.', '#BF9248'],
      ].map(([title, text, color]) => `
      <div class="mission-card reveal">
        <div class="mission-card-icon" style="background:${color}22;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <div class="mission-card-title">${title}</div>
        <div class="mission-card-text">${text}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ── CTA ───────────────────────────────────────── -->
<section class="cta">
  <div class="container">
    <div class="cta-inner reveal">
      <div class="cta-orb cta-orb-1"></div>
      <div class="cta-orb cta-orb-2"></div>
      <h2>Ready to make a <em>difference?</em></h2>
      <p class="cta-text">Your support, no matter the size, changes lives in Central Jamaica. Join us.</p>
      <div class="cta-actions">
        <a href="#/donate" class="btn-cta-primary">Donate Now</a>
        <a href="#/contact" class="btn-cta-outline">Contact Us</a>
      </div>
    </div>
  </div>
</section>
    `;
  },

  init() {}
};
