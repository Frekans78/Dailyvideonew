
// İletişim Formu Gösterme ve Gizleme
const contactForm = document.getElementById('contact-form');

// Sayfanın sağ alt kısmındaki koordinatlar
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const formWidth = contactForm.offsetWidth;
const formHeight = contactForm.offsetHeight;
const margin = 20;

// İletişim formunun başlangıç konumu
contactForm.style.right = margin + 'px';
contactForm.style.bottom = margin + 'px';

// Fare hareketlerini dinleme
document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Sağ alt köşede ise formu göster
    if (mouseX > pageWidth - formWidth - margin && mouseY > pageHeight - formHeight - margin) {
        contactForm.style.opacity = '1';
        contactForm.style.transition = 'opacity 0.3s ease';
    } else {
        // Diğer durumlarda formu gizle
        contactForm.style.opacity = '0';
        contactForm.style.transition = 'opacity 0.3s ease';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("feedback-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "mail.php", true); // E-posta gönderme betiğinin yolunu belirtin

        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("Mesajınız başarıyla gönderildi. Teşekkür ederiz!");
                form.reset(); // Formu sıfırla
            } else {
                alert("Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            }
        };

        xhr.onerror = function() {
            alert("Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        };

        xhr.send(formData);
    });
});

