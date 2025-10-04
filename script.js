// ====== AYARLAR ======
const BUSINESS_PHONE = '90xxxxxxxxxx';
const BUSINESS_MAIL  = 'info@ornek.com';
const BUSINESS_TEL_DISPLAY = '(+90) xxx xxx xx xx';

// ====== NAV ======
const burger = document.querySelector('.hamburger');
const mobile = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => mobile.classList.toggle('open'));

// ====== YIL ======
document.getElementById('y').textContent = new Date().getFullYear();

// ====== İLETİŞİM BUTONLARI ======
const telBtn = document.getElementById('telBtn');
const telDisp = document.getElementById('tel-display');
const mailDisp = document.getElementById('mail-display');
const waFloat = document.getElementById('waFloat');

if (BUSINESS_PHONE && BUSINESS_PHONE.includes('90')) {
  telBtn.href = `tel:+${BUSINESS_PHONE}`;
  waFloat.href = `https://wa.me/${BUSINESS_PHONE}`;
  telDisp.textContent = `+${BUSINESS_PHONE}`;
} else {
  waFloat.style.display = 'none';
  telBtn.style.display = 'none';
  telDisp.textContent = BUSINESS_TEL_DISPLAY;
}
if (BUSINESS_MAIL) mailDisp.textContent = BUSINESS_MAIL;

// ====== FORM ======
const form = document.getElementById('quoteForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();

  const msg = `Merhaba, teklif talebi:%0A- Ad: ${encodeURIComponent(name)}%0A- Tel: ${encodeURIComponent(phone)}%0A- Hizmet: ${encodeURIComponent(service)}%0A- Detay: ${encodeURIComponent(details)}`;

  if (BUSINESS_PHONE && BUSINESS_PHONE.includes('90')) {
    window.open(`https://wa.me/${BUSINESS_PHONE}?text=${msg}`, '_blank');
  } else if (BUSINESS_MAIL) {
    window.location.href = `mailto:${BUSINESS_MAIL}?subject=Teklif Talebi – Kaynak Dükkanı&body=${msg}`;
  } else {
    alert('Teşekkürler! Bilgileriniz alındı. Kısa sürede dönüş yapacağız.');
  }

  form.reset();
});

// ====== SCROLL REVEAL ======
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .18 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ====== VIDEO PLAY/PAUSE ======
const videoIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: .35 });
document.querySelectorAll('video.vid[autoplay]').forEach(v => videoIO.observe(v));
