// card-toggle.js
document.addEventListener("click", function (e) {
  // Tombol Card View
  if (e.target.id === "cardViewBtn" || e.target.closest("#cardViewBtn")) {
    const cardBtn = document.getElementById("cardViewBtn");
    const tableBtn = document.getElementById("tableViewBtn");

    if (!cardBtn || !tableBtn) return;

    cardBtn.classList.add("bg-indigo-600", "text-white");
    cardBtn.classList.remove("bg-gray-200", "text-gray-700");

    tableBtn.classList.add("bg-gray-200", "text-gray-700");
    tableBtn.classList.remove("bg-indigo-600", "text-white");

    const cardView = document.querySelector(".card-view");
    const tableView = document.querySelector(".table-view");

    if (cardView) cardView.style.display = "block";
    if (tableView) tableView.style.display = "none";
  }

  // Tombol Table View
  if (e.target.id === "tableViewBtn" || e.target.closest("#tableViewBtn")) {
    const cardBtn = document.getElementById("cardViewBtn");
    const tableBtn = document.getElementById("tableViewBtn");

    if (!cardBtn || !tableBtn) return;

    tableBtn.classList.add("bg-indigo-600", "text-white");
    tableBtn.classList.remove("bg-gray-200", "text-gray-700");

    cardBtn.classList.add("bg-gray-200", "text-gray-700");
    cardBtn.classList.remove("bg-indigo-600", "text-white");

    const cardView = document.querySelector(".card-view");
    const tableView = document.querySelector(".table-view");

    if (cardView) cardView.style.display = "none";
    if (tableView) tableView.style.display = "block";
  }
});
