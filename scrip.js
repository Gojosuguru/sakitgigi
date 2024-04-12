// Ambil referensi ke ikon hati
var heartIcon = document.getElementById('heart');

// Tambahkan event listener untuk saat ikon hati diklik
heartIcon.addEventListener('click', function() {
    // Lakukan transisi memudar
    fadeOutAndRedirect();
});

// Fungsi untuk efek fading dan pengalihan halaman
function fadeOutAndRedirect() {
    var opacity = 1;
    var fadeOutInterval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            heartIcon.style.opacity = opacity;
        } else {
            clearInterval(fadeOutInterval);
            // Setelah selesai fading, pindahkan ke halaman lain
            window.location.href = 'mainh/index.html';
        }
    }, 100); // Waktu interval untuk fading (dalam milidetik)
}
