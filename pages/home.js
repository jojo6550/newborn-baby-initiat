const galleryImages = [
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.27%20PM.jpeg',    caption: 'Delivering love and essentials',     label: 'In the Field'  },
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.27%20PM(1).jpeg', caption: 'Every family deserves support',      label: 'Family Care'   },
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.28%20PM.jpeg',    caption: 'Care packages for new arrivals',     label: 'Newborn Kits'  },
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.31%20PM.jpeg',    caption: 'Building stronger communities',      label: 'Community'     },
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%207.08.31%20PM.jpeg',    caption: 'Supporting mothers across parishes', label: 'Manchester'    },
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.33%20PM.jpeg',    caption: 'From Clarendon with care',           label: 'Clarendon'     },
  { src: 'images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.36%20PM.jpeg',    caption: 'NBBI — nurturing every beginning',  label: 'Our Mission'   },
];

export const home = {
  render() {
    return /* html */`
<!-- ── Hero ─────────────────────────────────────── -->
<section class="hero">
  <div class="hero-bg-blob hero-bg-blob-1"></div>
  <div class="hero-bg-blob hero-bg-blob-2"></div>

  <div class="hero-content">
    <div class="hero-eyebrow"><span></span> Newborn Baby Initiative</div>
    <h1>Give the Gift of a <em>Better</em> Life</h1>
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
        <div class="stat-num">NBBI</div>
        <div class="stat-label">Est. Central Jamaica</div>
      </div>
    </div>
  </div>

  <div class="hero-visual">
    <div style="position:relative;">
      <div class="hero-card-main">
        <div class="hero-card-img">
          <img src="images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.27%20PM.jpeg" alt="NBBI family receiving support in Jamaica" style="width:100%;height:100%;object-fit:cover;" fetchpriority="high" loading="eager">
          <div class="hero-card-badge">New Arrivals</div>
        </div>
        <div class="hero-card-title">Welcome to NBBI</div>
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
          Jamaica faces significant challenges for newborns and their families. Thousands face difficulties ranging from a lack
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
            Referrals through nurses, health centres, hospitals, and churches
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
          <img src="images/gallery/WhatsApp%20Image%202026-04-24%20at%203.35.28%20PM.jpeg" alt="NBBI community work" style="width:100%;height:180px;object-fit:cover;border-radius:var(--radius-md);margin-bottom:20px;">
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

<!-- ── Gallery ────────────────────────────────────── -->
<section class="gallery-section">
  <div class="gallery-header reveal">
    <div class="section-label">Our Work</div>
    <h2>See <em>NBBI</em> in action</h2>
    <p>Real moments, real families, real impact — across Manchester, Clarendon, and St. Elizabeth.</p>
  </div>
  <div class="gallery-carousel-wrap reveal reveal-delay-1">
    <div class="gallery-overflow">
      <div class="gallery-track" id="galleryTrack">
        ${galleryImages.map(img => `
        <div class="gallery-slide">
          <img src="${img.src}" alt="${img.caption}" loading="lazy">
          <div class="gallery-slide-caption">
            <div class="gallery-caption-text">${img.caption}</div>
            <div class="gallery-caption-tag">${img.label}</div>
          </div>
        </div>`).join('')}
      </div>
      <div class="gallery-counter" id="galleryCounter">1 / ${galleryImages.length}</div>
    </div>
    <button class="gallery-nav gallery-prev" id="galleryPrev" aria-label="Previous image">
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 14l-5-5 5-5"/>
      </svg>
    </button>
    <button class="gallery-nav gallery-next" id="galleryNext" aria-label="Next image">
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 4l5 5-5 5"/>
      </svg>
    </button>
  </div>
  <div class="gallery-dots" id="galleryDots">
    ${galleryImages.map((_, i) => `<button class="gallery-dot${i === 0 ? ' active' : ''}" aria-label="Go to image ${i + 1}"></button>`).join('')}
  </div>
</section>

<!-- ── Testimonials ──────────────────────────────── -->
<section class="testimonials">
  <div class="testimonials-bg">NBBI</div>
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
        <div class="testimonial-quote">"The initiative supported my twin girls with clothing and essentials. Their work is a godsend for families like mine."</div>
        <div class="testimonial-author">
          <div class="author-avatar">D</div>
          <div><div class="author-name">Diane W.</div><div class="author-role">St. Elizabeth Parish</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Where Proceeds Go ────────────────────────── -->
<section class="proceeds">
  <div class="container">
    <div class="proceeds-header reveal">
      <div class="section-label">Transparency</div>
      <h2>Where do the <em>proceeds</em> go?</h2>
      <p>Every donation directly supports families. No hidden costs — 100% of your giving reaches those who need it most.</p>
    </div>
    <div class="proceeds-grid">
      <div class="proceeds-item reveal">
        <div class="proceeds-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M12 1v6m0 6v6"/><path d="M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24"/><path d="M19.78 4.22l-4.24 4.24m-2.12 2.12l-4.24 4.24"/></svg>
        </div>
        <div class="proceeds-title">Diapers & Hygiene</div>
        <div class="proceeds-text">Essential supplies for newborns and families to ensure clean, healthy care during infancy.</div>
      </div>
      <div class="proceeds-item reveal reveal-delay-1">
        <div class="proceeds-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9h12M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/><path d="M10 5a2 2 0 0 1 4 0"/></svg>
        </div>
        <div class="proceeds-title">Child Care Supplies</div>
        <div class="proceeds-text">Clothing, formula, medical essentials, and other items to support newborn growth and wellness.</div>
      </div>
      <div class="proceeds-item reveal reveal-delay-2">
        <div class="proceeds-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l12 0M6 9l.5 11a2 2 0 0 0 2 1.85h6a2 2 0 0 0 2-1.85l.5-11M6 9l1-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1l1 3"/><line x1="10" y1="5" x2="10" y2="2"/><line x1="14" y1="5" x2="14" y2="2"/></svg>
        </div>
        <div class="proceeds-title">Food & Nutrition</div>
        <div class="proceeds-text">Meals and beverages for parents and caregivers, supporting their health as they care for newborns.</div>
      </div>
    </div>
    <div class="proceeds-highlight reveal">
      <div class="highlight-icon"><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
      <div class="highlight-content">
        <div class="highlight-label">Direct Support</div>
        <div class="highlight-amount">Each family receives up to <strong>65,000 JMD</strong> worth of <strong>baby supplies</strong>(<strong>$415 USD</strong>)</div>
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

  init() {
    const track   = document.getElementById('galleryTrack');
    const counter = document.getElementById('galleryCounter');
    const dots    = document.querySelectorAll('.gallery-dot');
    const total   = galleryImages.length;
    let current   = 0;
    let timer;

    function goTo(idx) {
      current = ((idx % total) + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      counter.textContent = `${current + 1} / ${total}`;
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 4000);
    }

    document.getElementById('galleryPrev').addEventListener('click', () => { goTo(current - 1); startTimer(); });
    document.getElementById('galleryNext').addEventListener('click', () => { goTo(current + 1); startTimer(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startTimer(); }));

    const wrap = document.querySelector('.gallery-overflow');
    wrap.addEventListener('mouseenter', () => clearInterval(timer));
    wrap.addEventListener('mouseleave', startTimer);

    let touchStartX = 0;
    wrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; clearInterval(timer); }, { passive: true });
    wrap.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
      startTimer();
    }, { passive: true });

    goTo(0);
    startTimer();
  }
};
