function initTablePerencanaan() {
  // Fitur select row
  const selectAllCheckbox = document.getElementById("select-all");
  const rowCheckboxes = document.querySelectorAll(".row-select");
  const batchActions = document.getElementById("batch-actions");
  const selectedCount = document.getElementById("selected-count");

  if (!selectAllCheckbox) return; // kalau table belum ada, keluar

  selectAllCheckbox.addEventListener("change", function () {
    const isChecked = this.checked;
    rowCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
      const row = checkbox.closest("tr");
      if (isChecked) {
        row.classList.add("selected");
      } else {
        row.classList.remove("selected");
      }
    });
    updateSelectedCount();
  });

  rowCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const row = this.closest("tr");
      if (this.checked) {
        row.classList.add("selected");
      } else {
        row.classList.remove("selected");
        selectAllCheckbox.checked = false;
      }
      updateSelectedCount();
    });
  });

  function updateSelectedCount() {
    const selectedRows = document.querySelectorAll(".row-select:checked");
    selectedCount.textContent = `${selectedRows.length} item dipilih`;
    if (selectedRows.length > 0) {
      batchActions.classList.add("active");
    } else {
      batchActions.classList.remove("active");
    }
  }

  // Fitur batch delete
  const batchDeleteBtn = document.getElementById("batch-delete");
  batchDeleteBtn?.addEventListener("click", function () {
    const selectedRows = document.querySelectorAll(".row-select:checked");
    if (selectedRows.length > 0) {
      showConfirm(
        "Konfirmasi Hapus",
        `Apakah Anda yakin ingin menghapus ${selectedRows.length} data?`
      ).then((ok) => {
        if (ok) {
          const loadingIndicator = document.getElementById("loading-indicator");
          loadingIndicator.style.display = "block";

          setTimeout(() => {
            selectedRows.forEach((checkbox) => {
              const row = checkbox.closest("tr");
              row.style.opacity = "0.5";
              row.style.pointerEvents = "none";
            });

            selectAllCheckbox.checked = false;
            batchActions.classList.remove("active");
            loadingIndicator.style.display = "none";

            showAlert(`${selectedRows.length} data berhasil dihapus`);
          }, 1000);
        }
      });
    }
  });

  // Fitur sorting
  const sortHeaders = document.querySelectorAll("th[data-sort]");
  let currentSort = { column: "id", direction: "asc" };

  sortHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const sortBy = this.getAttribute("data-sort");
      const icon = this.querySelector("i");

      document.querySelectorAll("th i").forEach((i) => {
        i.className = "fas fa-sort";
      });

      let direction = "asc";
      if (currentSort.column === sortBy) {
        direction = currentSort.direction === "asc" ? "desc" : "asc";
      }

      currentSort = { column: sortBy, direction: direction };

      if (direction === "asc") {
        icon.className = "fas fa-sort-up";
      } else {
        icon.className = "fas fa-sort-down";
      }

      sortTable(sortBy, direction);
    });
  });

  function sortTable(column, direction) {
    const loadingIndicator = document.getElementById("loading-indicator");
    loadingIndicator.style.display = "block";

    setTimeout(() => {
      const rows = Array.from(document.querySelectorAll("tbody tr"));

      rows.sort((a, b) => {
        let aValue, bValue;
        switch (column) {
          case "id":
            aValue = a.cells[1].textContent;
            bValue = b.cells[1].textContent;
            break;
          case "nama":
            aValue = a.cells[2].textContent;
            bValue = b.cells[2].textContent;
            break;
          case "balai":
            aValue = a.cells[3].textContent;
            bValue = b.cells[3].textContent;
            break;
          case "periode":
            aValue = a.cells[4].textContent;
            bValue = b.cells[4].textContent;
            break;
          case "tahun":
            aValue = a.cells[5].textContent;
            bValue = b.cells[5].textContent;
            break;
          case "status":
            aValue = a.cells[6].textContent;
            bValue = b.cells[6].textContent;
            break;
          default:
            aValue = a.cells[1].textContent;
            bValue = b.cells[1].textContent;
        }
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });

      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";
      rows.forEach((row) => tbody.appendChild(row));

      loadingIndicator.style.display = "none";
    }, 500);
  }

  // Fitur pencarian
  const searchInput = document.getElementById("search-input");
  searchInput?.addEventListener("keyup", function () {
    const searchText = this.value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(searchText) ? "" : "none";
    });
  });

  // Fitur filter
  const statusFilter = document.getElementById("status-filter");
  const periodeFilter = document.getElementById("periode-filter");

  statusFilter?.addEventListener("change", applyFilters);
  periodeFilter?.addEventListener("change", applyFilters);

  function applyFilters() {
    const statusValue = statusFilter.value;
    const periodeValue = periodeFilter.value;

    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const statusCell = row.querySelector(".status-badge");
      const status = statusCell ? statusCell.textContent.toLowerCase() : "";
      const periode = row.cells[4].textContent;

      const statusMatch =
        !statusValue ||
        (statusValue === "active" && status === "aktif") ||
        (statusValue === "inactive" && status === "tidak aktif") ||
        (statusValue === "pending" && status === "tertunda");

      const periodeMatch = !periodeValue || periode === periodeValue;

      row.style.display = statusMatch && periodeMatch ? "" : "none";
    });
  }

  // Aksi tombol row
  document.querySelectorAll(".btn-view").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const projectId = row.cells[1].textContent;
      const projectName = row.cells[2].textContent;
      showAlert(`Melihat detail proyek: ${projectName} (${projectId})`);
    });
  });

  document.querySelectorAll(".btn-edit").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const projectId = row.cells[1].textContent;
      const projectName = row.cells[2].textContent;
      showAlert(`Mengedit proyek: ${projectName} (${projectId})`);
    });
  });

  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const projectId = row.cells[1].textContent;
      const projectName = row.cells[2].textContent;

      showConfirm(
        "Konfirmasi Hapus",
        `Apakah Anda yakin ingin menghapus proyek ${projectName}?`
      ).then((ok) => {
        if (ok) {
          showAlert(`Proyek ${projectName} berhasil dihapus`, "success");
        } else {
          showAlert("Dibatalkan", "info");
        }
      });
    });
  });
}
