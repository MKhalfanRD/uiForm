function initNavigation() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.addEventListener("click", function (e) {
    const item = e.target.closest(".nav-item");
    if (!item) return;

    e.preventDefault();

    // Hapus active class di semua
    sidebar.querySelectorAll(".nav-item").forEach((navItem) => {
      navItem.classList.remove("active");
    });

    // Tambah active ke yang diklik
    item.classList.add("active");

    // Sembunyikan semua content-section
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active");
    });

    // Tampilkan yang sesuai
    const sectionId = item.getAttribute("data-section");
    const target = document.getElementById(sectionId);
    if (target) target.classList.add("active");
  });
}

// Jalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", initNavigation);
