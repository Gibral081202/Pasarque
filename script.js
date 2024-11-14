function beliProduk(url) {
  window.location.href = url;
}
// Menjalankan animasi untuk seluruh halaman saat pertama kali halaman dimuat
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
// Fungsi untuk mengecek apakah elemen berada di dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Fungsi untuk menambahkan efek muncul pada produk dan tentang card saat di-scroll
function handleScroll() {
  const produkCards = document.querySelectorAll(".produk-card");
  const tentangCards = document.querySelectorAll(".tentang-cards .card");

  produkCards.forEach((card, index) => {
    if (isInViewport(card)) {
      setTimeout(() => {
        card.classList.add("card-visible");
      }, index * 150); // Mengatur jeda 150ms antara setiap card
    }
  });

  tentangCards.forEach((card, index) => {
    if (isInViewport(card)) {
      setTimeout(() => {
        card.classList.add("card-visible");
      }, index * 150); // Mengatur jeda 150ms antara setiap card
    }
  });
}

// Event listener untuk mendeteksi scroll
window.addEventListener("scroll", handleScroll);

// Menjalankan handleScroll saat pertama kali halaman dimuat
document.addEventListener("DOMContentLoaded", handleScroll);
