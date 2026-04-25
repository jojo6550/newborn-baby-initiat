export const thankYou = {
  render() {
    return /* html */`
<section class="thank-you">
  <div class="thank-you-inner">
    <div class="thank-you-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
    </div>

    <div class="section-label" style="justify-content:center;margin-bottom:16px;">Donation Received</div>
    <h1 style="font-family:var(--font-display);font-size:clamp(36px,5vw,60px);font-weight:300;line-height:1.1;color:var(--warm-brown);margin-bottom:20px;letter-spacing:-0.02em;">
      Thank you for your <em style="font-style:italic;color:var(--terracotta);">generosity</em>
    </h1>
    <p style="font-size:16px;color:var(--mid-brown);line-height:1.8;margin-bottom:44px;">
      Your contribution goes directly to newborn families across Manchester, Clarendon, and St. Elizabeth, Jamaica.
      You're helping give every baby the warmest possible welcome into the world.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:48px;">
      <a href="#/" class="btn-primary">
        Back to Home
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
      <a href="#/donate" class="btn-ghost">Donate Again</a>
    </div>

    <div style="border-top:1px solid var(--cream-deep);padding-top:32px;display:flex;flex-wrap:wrap;gap:20px;justify-content:center;">
      <a href="https://www.instagram.com/newbornbabyinitiative?utm_source=qr&igsh=dmhvdDlkN2tjMDR6" target="_blank" rel="noopener noreferrer"
         style="font-size:13px;font-weight:600;color:var(--terracotta);text-decoration:underline;text-underline-offset:3px;">
        Follow us on Instagram
      </a>
      <span style="color:var(--cream-deep);">·</span>
      <a href="mailto:newbornbabyinitiative@gmail.com"
         style="font-size:13px;font-weight:600;color:var(--terracotta);text-decoration:underline;text-underline-offset:3px;">
        Contact Us
      </a>
    </div>
  </div>
</section>
    `;
  },

  init() {
    if (!sessionStorage.getItem('nbbi_donated')) {
      window.location.hash = '/donate';
      return;
    }
    sessionStorage.removeItem('nbbi_donated');
  }
};
