// Function untuk toggle row collapse/expand
function toggleRow(row) {
  const detailRow = row.nextElementSibling;
  if (!detailRow) return;

  // Toggle class expanded
  detailRow.classList.toggle("expanded");

  // Toggle ikon
  const icon = row.querySelector("i");
  if (icon) {
    if (detailRow.classList.contains("expanded")) {
      icon.classList.add("fa-chevron-up");
      icon.classList.remove("fa-chevron-down");
    } else {
      icon.classList.add("fa-chevron-down");
      icon.classList.remove("fa-chevron-up");
    }
  }

  // Tutup baris detail lain
  document.querySelectorAll(".detail-row.expanded").forEach((otherRow) => {
    if (otherRow !== detailRow) {
      otherRow.classList.remove("expanded");
      const otherIcon = otherRow.previousElementSibling.querySelector("i");
      if (otherIcon) {
        otherIcon.classList.add("fa-chevron-down");
        otherIcon.classList.remove("fa-chevron-up");
      }
    }
  });
}

// Event delegation untuk klik row
document.addEventListener("click", function (e) {
  const row = e.target.closest(".main-row");
  const button = e.target.closest(".expand-btn");

  // Klik tombol expand
  if (button && row) {
    e.stopPropagation();
    toggleRow(row);
  }
  // Klik row (bukan tombol di dalamnya)
  else if (row && !e.target.closest("button")) {
    toggleRow(row);
  }
});
