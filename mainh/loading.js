document.addEventListener("DOMContentLoaded", function () {
    // Simulasikan pemuatan halaman dengan timeout
    setTimeout(function () {
      // Sembunyikan loader
      document.querySelector(".loader-wrapper").style.display = "none";
  
      // Tampilkan konten website
      document.querySelector(".content").style.display = "block";
    }, 3000); // Ganti angka ini sesuai kebutuhan, dalam milidetik
  });
  