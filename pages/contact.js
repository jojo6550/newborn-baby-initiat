export const contact = {
  render() {
    return /* html */`
<section class="page-hero">
  <div class="container" style="position:relative;z-index:1;">
    <div class="page-hero-eyebrow">
      <div class="section-label" style="justify-content:center;">Get in Touch</div>
    </div>
    <h1>We'd Love to <em>Hear</em> From You</h1>
    <p>Whether you want to donate, refer a family, volunteer, or simply learn more — reach out. We're here.</p>
  </div>
</section>

<section class="contact">
  <div class="container">
    <div class="contact-grid">

      <div class="contact-info reveal">
        <div class="section-label">Reach Us</div>
        <h2>Let's start a <em>conversation</em></h2>
        <p class="contact-info-text">
          Interested in learning more about NBBI, want to contribute, or looking to refer a family?
          Reach out — we're here and we respond promptly.
        </p>
        <div class="contact-methods">
          <div class="contact-method">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div class="contact-method-label">Email</div>
              <a href="mailto:newbornbabyinitiative@gmail.com" class="contact-method-value" style="text-decoration:underline;text-underline-offset:3px;">newbornbabyinitiative@gmail.com</a>
            </div>
          </div>
          <div class="contact-method">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z"/>
              </svg>
            </div>
            <div>
              <div class="contact-method-label">Phone / WhatsApp</div>
              <a href="tel:+18765636391" class="contact-method-value">876-563-6391</a>
            </div>
          </div>
          <div class="contact-method">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div>
              <div class="contact-method-label">Instagram</div>
              <a href="https://www.instagram.com/newbornbabyinitiative?utm_source=qr&igsh=dmhvdDlkN2tjMDR6" target="_blank" rel="noopener noreferrer" class="contact-method-value">@newbornbabyinitiative</a>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form reveal reveal-delay-2">
        <div style="font-family:var(--font-display);font-size:26px;font-weight:500;color:var(--warm-brown);margin-bottom:28px;">Send a Message</div>
        <div id="formMsg" style="display:none;padding:12px 16px;border-radius:var(--radius-sm);margin-bottom:20px;font-size:14px;font-weight:600;"></div>
        <form id="contactForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" class="form-input" placeholder="Sarah" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" class="form-input" placeholder="Johnson" required>
            </div>
          </div>
          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label" for="email">Email Address</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="sarah@email.com" required>
          </div>
          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label" for="topic">What can we help with?</label>
            <select id="topic" name="topic" class="form-select">
              <option value="" disabled selected>Select a topic...</option>
              <option>Donation inquiry</option>
              <option>Family referral</option>
              <option>Volunteer interest</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label" for="message">Message</label>
            <textarea id="message" name="message" class="form-textarea" placeholder="Tell us what's on your mind..." required></textarea>
          </div>
          <div class="form-submit-row">
            <button type="submit" class="btn-primary">
              Send Message
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>
    `;
  },

  init() {
    document.getElementById('contactForm')?.addEventListener('submit', e => {
      e.preventDefault();
      const msg    = document.getElementById('formMsg');
      const form   = e.currentTarget;
      const first  = form.firstName.value.trim();
      const last   = form.lastName.value.trim();
      const email  = form.email.value.trim();
      const body   = form.message.value.trim();

      if (!first || !last || !email || !body) {
        msg.style.cssText = 'display:block;background:var(--blush-light);color:var(--terracotta-d);';
        msg.textContent   = 'Please fill in all required fields.';
        return;
      }

      // mailto: fallback — works without a server
      const subject  = encodeURIComponent(`[NBBI Website] ${form.topic.value || 'Message'} from ${first} ${last}`);
      const bodyText = encodeURIComponent(`Name: ${first} ${last}\nEmail: ${email}\n\n${body}`);
      window.location.href = `mailto:newbornbabyinitiative@gmail.com?subject=${subject}&body=${bodyText}`;
    });
  }
};
