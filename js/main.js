/* ════════════════════════════════════════════════════════════
   YADAV DUDH — Interactivity
   WhatsApp ordering, dynamic products/plans, FAQ, animations
   ════════════════════════════════════════════════════════════ */
'use strict';

/* ── Config (placeholder number — apna real number yahan daalein) ── */
const WA_NUMBER = '916205419987';
const BUSINESS_NAME = 'Yadav Dudh';

/* ── Product catalog ── */
const PRODUCTS = [
  { id: 'gai-dudh',  name: 'Gai Ka Dudh (A2)',   desc: 'Desi gaon ki gayo ka pure A2 milk — roz subah fresh.', price: 60,  unit: '₹60 / litre',   img: 'images/products/gai-dudh.jpg',  badge: 'Bestseller' },
  { id: 'bhains-dudh', name: 'Bhains Ka Dudh',   desc: 'Rich, creamy buffalo milk — chai, dahi aur makhan ke liye perfect.', price: 70, unit: '₹70 / litre', img: 'images/products/bhains-dudh.jpg', badge: 'Rich & Creamy' },
  { id: 'desi-ghee', name: 'Shudh Desi Ghee',    desc: 'Bilona method se bana 100% pure cow ghee. No additives, no vanaspati.', price: 650, unit: '₹650 / kg', img: 'images/products/ghee.jpg', badge: '100% Pure' },
  { id: 'taaza-dahi', name: 'Taaza Dahi',        desc: 'Roz fresh churned thick curd — set at home taste, daily delivery.', price: 50, unit: '₹50 / kg', img: 'images/products/dahi.jpg', badge: 'Fresh Daily' },
  { id: 'fresh-paneer', name: 'Fresh Paneer',    desc: 'Malai-dar, soft paneer — same-day made, no preservatives.', price: 320, unit: '₹320 / kg', img: 'images/products/paneer.jpg', badge: null },
  { id: 'desi-makhan', name: 'Desi Makhan',      desc: 'Haath se gata makhan — bilkul ghar jaisa. Bread pe ya tadka me.', price: 450, unit: '₹450 / kg', img: 'images/products/makhan.jpg', badge: 'Homemade' },
];

/* ── Monthly subscription plans ── */
const PLANS = [
  { name: 'Half-Litre Daily', qty: '500 ml × 30 din = 15 Litres', price: '₹850', period: '/month', save: '₹50 ki bachat vs daily rate', popular: false,
    features: ['Roz subah 6–8 AM delivery', 'Koi delivery charge nahi', 'Pause anytime via WhatsApp', 'Month ke end pe bill settle'] },
  { name: '1-Litre Daily', qty: '1 Litre × 30 din = 30 Litres', price: '₹1,650', period: '/month', save: '₹150 ki bachat vs daily rate', popular: true,
    features: ['Roz subah 6–8 AM delivery', 'Koi delivery charge nahi', 'Free: 250g dahi har Sunday', 'Pause anytime via WhatsApp', 'Priority customer support'] },
  { name: '2-Litre Daily', qty: '2 Litres × 30 din = 60 Litres', price: '₹3,200', period: '/month', save: '₹400 ki bachat vs daily rate', popular: false,
    features: ['Roz subah 6–8 AM delivery', 'Koi delivery charge nahi', 'Free: 500g fresh paneer har month', 'Pause anytime via WhatsApp', 'Priority support + festival gifts'] },
];

/* ── Testimonials ── */
const REVIEWS = [
  { stars: 5, text: '3 saal se Yadav Dudh le rahe hain. Dudh bilkul ghar jaisa fresh hota hai — chai me laal malai aati hai!', name: 'Ritu Sharma', loc: 'Model Town, Phagwara', initials: 'RS' },
  { stars: 5, text: 'Ghee to next level hai. Parivaar me sabko pasand aaya. Delivery bhi punctual — subah 7 baje tak aata hai.', name: 'Harpreet Singh', loc: 'Hargobindpur Road', initials: 'HS' },
  { stars: 5, text: 'Monthly plan liya hai — bill tension khatam. Ek baar WhatsApp pe bol diya chhutti, bas delivery ruk jaati hai.', name: 'Sunita Devi', loc: 'Bhogapur Village', initials: 'SD' },
  { stars: 4, text: 'Paneer aur dahi dono mast hain. Occasionally ek-do din late hota hai, but quality hamesha consistent rehti hai.', name: 'Amit Verma', loc: 'Industrial Area', initials: 'AV' },
];

/* ── FAQs ── */
const FAQS = [
  { q: 'Delivery kahan-kahan hoti hai?', a: 'Phagwara city, Bhogapur, Hargobindpur Road, Model Town, Industrial Area aur 5 km radius ke villages — sab jagah roz subah 6 se 8 baje tak delivery hoti hai. Evening slot (6–8 PM) limited areas me available hai.' },
  { q: 'Dudh ki purity kaise guarantee karte ho?', a: 'Har collection batch ka fat %, SNF aur adulteration test hota hai. Aap ghar pe bhi alcohol ya boiling test karke dekh sakte hain — hamara dudh kabhi curdle nahi karta. Purity guarantee: fail ho to full refund + us batch ka collection band.' },
  { q: 'Paise kaise dene hain? Advance lagta hai?', a: 'Koi advance nahi! Cash on delivery, UPI (GPay/PhonePe/Paytm) ya monthly billing — jo aapko convenient ho. Monthly plan customers month-end pe ek saath settle kar sakte hain.' },
  { q: 'Chhutti pe jaoon to delivery kaise band karoon?', a: 'Bas WhatsApp pe "pause kal se" likhiye — delivery turant pause ho jayegi. Wapas aane pe "resume" likhna hai. Koi penalty nahi, koi form nahi.' },
  { q: 'Cancel ya refund policy kya hai?', a: 'One-time orders: delivery se pehle kabhi bhi cancel kar sakte hain. Monthly plan: kabhi bhi cancel — unused days ke paise wapas. Opened packet me gaurantee nahi, isliye unopened delivery instantly check kar lijiye.' },
  { q: 'Kya ghee aur paneer ghar par banaye jaate hain?', a: 'Haan! Ghee traditional bilona method se (curd se makhan nikal kar) banaya jaata hai. Paneer same-day fresh banta hai. Koi preservative, color ya artificial additive nahi.' },
];

/* ══════════ Helpers ══════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const waLink = (message) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4200);
}
const savePref = (k, v) => { try { localStorage.setItem('yadavdudh_' + k, v); } catch (_) { /* private mode */ } };
const loadPref = (k) => { try { return localStorage.getItem('yadavdudh_' + k) || ''; } catch (_) { return ''; } };

/* ══════════ 1. Ticker — duplicate for seamless loop ══════════ */
(function duplicateTicker() {
  const track = $('#tickerTrack');
  if (track) track.innerHTML += track.innerHTML;
})();

/* ══════════ 2. Navbar — scroll shadow + hamburger ══════════ */
const navBar = $('#navBar');
const hamburger = $('#hamburger');
const mobileMenu = $('#mobileMenu');

window.addEventListener('scroll', () => {
  navBar.classList.toggle('scrolled', window.scrollY > 24);
  $('#backTop').classList.toggle('visible', window.scrollY > 420);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', String(open));
});
closeMobileMenuOnNav();
function closeMobileMenuOnNav() {
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }));
}

/* ══════════ 3. Reveal on scroll ══════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════ 4. Animated counters ══════════ */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.counter || 0);
    const duration = 1600, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      el.textContent = String(Math.round(target * (p === 1 ? 1 : eased)));
      if (p < 1) requestAnimationFrame(tick); else el.textContent = String(target);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });
$$('[data-counter]').forEach(el => counterObserver.observe(el));

/* ══════════ 5. Render products ══════════ */
const productGrid = $('#productGrid');
productGrid.innerHTML = PRODUCTS.map(p => `
  <article class="product-card">
    <div class="product-img-wrap">
      <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.name)} — Yadav Dudh" loading="lazy" width="600" height="450" />
      ${p.badge ? `<span class="product-badge">${escapeHtml(p.badge)}</span>` : ''}
    </div>
    <div class="product-body">
      <h3 class="product-name">${escapeHtml(p.name)}</h3>
      <p class="product-desc">${escapeHtml(p.desc)}</p>
      <div class="product-foot">
        <div class="product-price">${escapeHtml(p.unit.split(' / ')[0])}<small>per ${escapeHtml(p.unit.split(' / ')[1])}</small></div>
        <button class="order-btn" data-product-id="${escapeHtml(p.id)}">Order →</button>
      </div>
    </div>
  </article>`).join('');

/* footer product list */
$('#footerProductList').innerHTML = PRODUCTS.map(p => `<li>${escapeHtml(p.name)}</li>`).join('');

/* ══════════ 6. Render plans ══════════ */
$('#plansGrid').innerHTML = PLANS.map(plan => `
  <article class="plan-card${plan.popular ? ' popular' : ''}">
    ${plan.popular ? '<span class="plan-flag">★ Most Popular</span>' : ''}
    <h3 class="plan-name">${escapeHtml(plan.name)}</h3>
    <p class="plan-qty">${escapeHtml(plan.qty)}</p>
    <div class="plan-price">${escapeHtml(plan.price)}<span>${escapeHtml(plan.period)}</span></div>
    <span class="plan-save">${escapeHtml(plan.save)}</span>
    <ul class="plan-list">${plan.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
    <button class="btn ${plan.popular ? 'btn-gold' : 'btn-outline'} btn-block plan-cta" data-plan="${escapeHtml(plan.name)}">Plan Book Karein</button>
  </article>`).join('');

/* ══════════ 7. Render testimonials ══════════ */
$('#reviewGrid').innerHTML = REVIEWS.map(r => `
  <figure class="review-card">
    <div class="review-stars" aria-label="${r.stars} star rating">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
    <blockquote class="review-text">“${escapeHtml(r.text)}”</blockquote>
    <figcaption class="review-foot">
      <span class="review-avatar" aria-hidden="true">${escapeHtml(r.initials)}</span>
      <span><span class="review-name">${escapeHtml(r.name)}</span><br/><span class="review-loc">${escapeHtml(r.loc)}</span></span>
    </figcaption>
  </figure>`).join('');

/* ══════════ 8. Render FAQ + accordion ══════════ */
$('#faqList').innerHTML = FAQS.map((item, i) => `
  <div class="faq-item${i === 0 ? ' open' : ''}">
    <button class="faq-q" aria-expanded="${i === 0 ? 'true' : 'false'}" aria-controls="faq-a-${i}" id="faq-q-${i}">
      <span>${escapeHtml(item.q)}</span><span class="chev" aria-hidden="true">+</span>
    </button>
    <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><p>${escapeHtml(item.a)}</p></div>
  </div>`).join('');

$('#faqList').addEventListener('click', (e) => {
  const btn = e.target.closest('.faq-q');
  if (!btn) return;
  const item = btn.closest('.faq-item');
  item.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(item.classList.contains('open')));
});

/* ══════════ 9. Product select options ══════════ */
const productSelect = $('#productSelect');
productSelect.innerHTML = PRODUCTS.map(p => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)} — ${escapeHtml(p.unit)}</option>`).join('');

/* ══════════ 10. Order buttons → preselect product & scroll ══════════ */
const orderForm = $('#orderForm');
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.order-btn');
  if (!btn) return;
  const product = PRODUCTS.find(p => p.id === btn.dataset.productId);
  if (!product) return;
  productSelect.value = product.name;
  $('#deliveryType').value = 'One-time order';
  $('#order').scrollIntoView({ behavior: 'smooth', block: 'start' });
  orderForm.classList.remove('flash');
  void orderForm.offsetWidth; /* restart animation */
  orderForm.classList.add('flash');
  showToast(`${product.name} selected — form bharke WhatsApp pe bhejein!`);
});

/* ══════════ 11. Plan CTA → WhatsApp message ══════════ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.plan-cta');
  if (!btn) return;
  const plan = btn.dataset.plan;
  const msg = `Namaste ${BUSINESS_NAME}! 🙏\nMujhe "${plan}" subscription plan book karna hai.\n\nNaam: \nDelivery Address: \nStarting Date: `;
  window.open(waLink(msg), '_blank', 'noopener');
  showToast('WhatsApp khul raha hai — details bhej dijiye!');
});

/* ══════════ 12. Quantity stepper ══════════ */
const qtyInput = $('#quantity');
$('#qtyMinus').addEventListener('click', () => { qtyInput.value = Math.max(1, Number(qtyInput.value || 1) - 1); });
$('#qtyPlus').addEventListener('click', () => { qtyInput.value = Math.min(100, Number(qtyInput.value || 1) + 1); });

/* ══════════ 13. Order form submit → WhatsApp ══════════ */
const phoneRegex = /^[6-9]\d{9}$/;

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#customerName');
  const phone = $('#customerPhone');
  const address = $('#address');
  const notes = $('#notes');
  const errorBox = $('#formError');
  const fields = [name, phone, address, productSelect, qtyInput];

  /* reset invalid state */
  fields.forEach(f => f.classList.remove('invalid'));
  errorBox.hidden = true;

  const cleanPhone = phone.value.replace(/\D/g, '');
  let error = '';
  if (name.value.trim().length < 2) error = 'Sahi naam likhiye (kam se kam 2 letters).';
  else if (!phoneRegex.test(cleanPhone)) error = 'Sahi 10-digit Indian mobile number daaliye (6-9 se shuru).';
  else if (Number(qtyInput.value) < 1) error = 'Quantity kam se kam 1 honi chahiye.';
  else if (address.value.trim().length < 8) error = 'Poora delivery address likhiye (kam se kam 8 characters).';

  if (error) {
    errorBox.textContent = '⚠️ ' + error;
    errorBox.hidden = false;
    if (name.value.trim().length < 2) name.classList.add('invalid');
    else if (!phoneRegex.test(cleanPhone)) phone.classList.add('invalid');
    else if (address.value.trim().length < 8) address.classList.add('invalid');
    errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  /* remember customer details for next time */
  savePref('name', name.value.trim());
  savePref('phone', cleanPhone);
  savePref('address', address.value.trim());

  const message =
`🥛 *Naya Order — ${BUSINESS_NAME}*
━━━━━━━━━━━━━━
*Naam:* ${name.value.trim()}
*Phone:* +91 ${cleanPhone}
*Product:* ${productSelect.value}
*Quantity:* ${qtyInput.value}
*Order Type:* ${$('#deliveryType').value}
*Delivery Time:* ${$('#deliveryTime').value}
*Address:* ${address.value.trim()}${notes.value.trim() ? `\n*Notes:* ${notes.value.trim()}` : ''}
━━━━━━━━━━━━━━
_Form website se aaya hai_`;

  window.open(waLink(message), '_blank', 'noopener');
  showToast('WhatsApp khul raha hai — message bhej dijiye, hum turant confirm karenge! 🥛');
  orderForm.querySelector('button[type="submit"]').blur();
});

/* restore saved customer details */
(function restorePrefs() {
  const n = loadPref('name'), p = loadPref('phone'), a = loadPref('address');
  if (n) $('#customerName').value = n;
  if (p) $('#customerPhone').value = p;
  if (a) $('#address').value = a;
})();

/* phone input — digits only */
$('#customerPhone').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
});

/* ══════════ 14. Newsletter ══════════ */
$('#newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = $('#nlEmail');
  const value = email.value.trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(value)) { showToast('Sahi email daaliye 🙏'); return; }
  savePref('newsletter', value);
  email.value = '';
  showToast('Shukriya! Aap newsletter join ho gaye 🎉');
});

/* ══════════ 15. Back to top + footer year ══════════ */
$('#backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
$('#currentYear').textContent = String(new Date().getFullYear());
