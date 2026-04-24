export const home = {
  render() {
    return /* html */`
<!-- ── Hero ─────────────────────────────────────── -->
<section class="hero">
  <div class="hero-bg-blob hero-bg-blob-1"></div>
  <div class="hero-bg-blob hero-bg-blob-2"></div>

  <div class="hero-content">
    <div class="hero-eyebrow"><span></span> Newborn Baby Initiative</div>
    <h1>Give the Gift of <em>Life</em> and Love</h1>
    <p class="hero-sub">
      Supporting newborn babies and their families in Manchester, Clarendon, and St. Elizabeth, Jamaica —
      providing essentials for a healthy, happy start to life.
    </p>
    <div class="hero-actions">
      <a href="#/donate" class="btn-primary">
        Donate with PayPal
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </a>
      <a href="#/about" class="btn-ghost">
        <span class="btn-ghost-dot"></span>
        Learn Our Story
      </a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <div class="stat-num">3</div>
        <div class="stat-label">Jamaican Parishes</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">100%</div>
        <div class="stat-label">Goes to Families</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">NbBI</div>
        <div class="stat-label">Est. Central Jamaica</div>
      </div>
    </div>
  </div>

  <div class="hero-visual">
    <div style="position:relative;">
      <div class="hero-card-main">
        <div class="hero-card-img">
          <img src="images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.27%20PM.jpeg" alt="NbBI family" style="width:100%;height:100%;object-fit:cover;">
          <div class="hero-card-badge">New Arrivals</div>
        </div>
        <div class="hero-card-title">Welcome to NbBI</div>
        <div class="hero-card-text">A dedicated team offering wholesome service to new mothers, parents, and their newborn babies across Central Jamaica.</div>
        <div class="hero-card-tag">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
          Accepting Donations
        </div>
      </div>
      <div class="floating-pill floating-pill-1">
        <div class="pill-dot"></div>
        <div>
          <div style="font-size:10px;color:var(--muted-brown);font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:2px;">Serving</div>
          <div style="font-size:13px;font-weight:600;color:var(--warm-brown);">Manchester · Clarendon · St. Elizabeth</div>
        </div>
      </div>
      <div class="floating-pill floating-pill-2">
        <div class="pill-dot pill-dot-green"></div>
        <div>
          <div style="font-size:10px;color:var(--muted-brown);font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:2px;">Mission</div>
          <div style="font-size:13px;font-weight:600;color:var(--warm-brown);">Every newborn deserves to thrive</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Mission Preview ───────────────────────────── -->
<section class="mission">
  <div class="container">
    <div class="mission-grid">
      <div class="mission-content reveal">
        <div class="section-label">About Us</div>
        <h2>Committed to every <em>newborn's</em> bright beginning</h2>
        <p class="mission-body">
          Jamaica faces significant challenges for newborns and their families. Thousands face difficulties ranging from lack
          of essential medical care and supplies to inadequate nutrition and unstable living conditions. NBBI seeks to address
          these issues by providing critical resources to mothers and families during the first crucial months of a baby's life.
        </p>
        <ul class="mission-list">
          <li>
            <span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>
            Newborn clothing, formula, and diapers for families in need
          </li>
          <li>
            <span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>
            Medical screenings and emotional support for new mothers
          </li>
          <li>
            <span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>
            Referrals through nurses, health centres, hospitals &amp; churches
          </li>
          <li>
            <span class="check-icon"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2.5 2.5L8 3"/></svg></span>
            Supporting low-income, single, and teenage parents
          </li>
        </ul>
        <div style="margin-top:40px;">
          <a href="#/about" class="btn-ghost">Read Our Full Story</a>
        </div>
      </div>
      <div class="mission-visual reveal reveal-delay-2">
        <div class="mission-card">
          <img src="images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.28%20PM.jpeg" alt="NBBI community" style="width:100%;height:180px;object-fit:cover;border-radius:var(--radius-md);margin-bottom:28px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div class="mission-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C47B55" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div class="mission-card-title">Our Mission &amp; Vision</div>
          <div class="mission-card-text">Our mission is to empower communities and provide support to families with newborn babies, enabling them to thrive.</div>
        </div>
        <div class="mission-card">
          <div class="mission-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C47B55" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div class="mission-card-title">Our Purpose</div>
          <div class="mission-card-text">By giving to others, we create a kinder and gentler society — ensuring every newborn has the chance to thrive.</div>
        </div>
        <div class="mission-card">
          <div class="mission-card-icon" style="background:var(--sage-light);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5a7254" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="mission-card-title">Who We Serve</div>
          <div class="mission-card-text">New parents, low-income families, single parents, and teenage parents across Central Jamaica.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Testimonials ──────────────────────────────── -->
<section class="testimonials">
  <div class="testimonials-bg">NbBI</div>
  <div class="container">
    <div class="testimonials-header reveal">
      <div class="section-label" style="justify-content:center;">Voices</div>
      <h2>Families we've <em>touched</em></h2>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card reveal reveal-delay-1">
        <div class="testimonial-stars">${'<div class="star"></div>'.repeat(5)}</div>
        <div class="testimonial-quote">"NBBI gave us everything we needed when we had nothing. The diapers, formula, and love they showed us — I'll never forget it."</div>
        <div class="testimonial-author">
          <div class="author-avatar">M</div>
          <div><div class="author-name">Maria T.</div><div class="author-role">Manchester Parish</div></div>
        </div>
      </div>
      <div class="testimonial-card reveal reveal-delay-2">
        <div class="testimonial-stars">${'<div class="star"></div>'.repeat(5)}</div>
        <div class="testimonial-quote">"As a teenage mother, I felt alone. NBBI connected me to nurses, gave me supplies, and made me feel like my baby deserved a chance."</div>
        <div class="testimonial-author">
          <div class="author-avatar">J</div>
          <div><div class="author-name">Janelle K.</div><div class="author-role">Clarendon Parish</div></div>
        </div>
      </div>
      <div class="testimonial-card reveal reveal-delay-3">
        <div class="testimonial-stars">${'<div class="star"></div>'.repeat(5)}</div>
        <div class="testimonial-quote">"The initiative supported my twin girls with clothing and essentials. Their work is God-sent for families like mine."</div>
        <div class="testimonial-author">
          <div class="author-avatar">D</div>
          <div><div class="author-name">Diane W.</div><div class="author-role">St. Elizabeth Parish</div></div>
        </div>
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
      <h2>Help us give every newborn a <em>chance</em> to thrive</h2>
      <p class="cta-text">
        By giving to others, we create a kinder and gentler society. Your donation reaches families in Manchester,
        Clarendon, and St. Elizabeth — right when they need it most.
      </p>
      <div class="cta-actions">
        <a href="#/donate" class="btn-cta-primary">
          Donate with PayPal
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
        <a href="#/contact" class="btn-cta-outline">Get in Touch</a>
      </div>
    </div>
  </div>
</section>
    `;
  },

  init() {}
};
