const contactForm = document.getElementById('contact-form');
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const formWidth = contactForm.offsetWidth;
const formHeight = contactForm.offsetHeight;
const margin = 20;
contactForm.style.right = margin + 'px';
contactForm.style.bottom = margin + 'px';

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (mouseX > pageWidth - formWidth - margin && mouseY > pageHeight - formHeight - margin) {
        contactForm.style.opacity = '1';
        contactForm.style.transition = 'opacity 0.3s ease';
    } else {
        contactForm.style.opacity = '0';
        contactForm.style.transition = 'opacity 0.3s ease';
    }
});


document.getElementById('confirmSubmit').addEventListener('click', function () {
    document.getElementById('feedback-form').submit();
});  //  Kırmızı: Gönder butonuna tıklanma olayını yakalama ve form gönderimi
