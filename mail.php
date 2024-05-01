<?php
// Form verilerini al
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Gönderen ve alıcı e-posta adresleri
$to = "ayhantastekin@hotmail.com"; // Alıcı e-posta adresini buraya yazın
$subject = "Geri Bildirim Formu Mesajı";

// E-posta başlığı oluştur
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// E-posta içeriğini oluştur
$body = "Gönderen: $name\n";
$body .= "E-posta: $email\n";
$body .= "Mesaj:\n$message";

// E-postayı gönder
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "E-posta başarıyla gönderildi.";
} else {
    http_response_code(500);
    echo "E-posta gönderilirken bir hata oluştu: " . error_get_last()['message'];
}
?>
