// Data untuk modal detail
const loginData = [
  {
    date: "15 Okt 2023, 10:30:45 WIB",
    status: "Berhasil",
    browser: "Chrome 117.0.5938.92",
    os: "Windows 11 Pro",
    location: "Jakarta, Indonesia",
    ip: "192.168.1.101",
    details:
      "Login dari jaringan kantor, menggunakan authentication two-factor",
    deviceType: "Desktop",
  },
  {
    date: "14 Okt 2023, 20:15:32 WIB",
    status: "Berhasil",
    browser: "Safari 16.6",
    os: "iPhone 13 iOS 16.6",
    location: "Bandung, Indonesia",
    ip: "192.168.43.26",
    details:
      "Login dari jaringan seluler Telkomsel, menggunakan fingerprint authentication",
    deviceType: "Mobile",
  },
  {
    date: "12 Okt 2023, 15:45:21 WIB",
    status: "Berhasil",
    browser: "Firefox 118.0.1",
    os: "macOS Ventura 13.5.2",
    location: "Surabaya, Indonesia",
    ip: "10.25.136.42",
    details: "Login dari jaringan wifi kafe, menggunakan password dan kode OTP",
    deviceType: "Laptop",
  },
  {
    date: "10 Okt 2023, 09:20:15 WIB",
    status: "Gagal",
    browser: "Chrome Mobile 116.0.5845.163",
    os: "Samsung Galaxy S21",
    location: "Yogyakarta, Indonesia",
    ip: "172.16.254.12",
    details: "Percobaan login dengan password yang salah sebanyak 3 kali",
    deviceType: "Mobile",
  },
];

// Fungsi menampilkan modal
function showDetailModal(index) {
  const data = loginData[index];
  const modal = document.getElementById("detailModal");
  const modalContent = document.getElementById("modalContent");

  if (!modal || !modalContent) {
    console.error("Modal atau modalContent tidak ditemukan");
    return;
  }

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h4 class="font-medium text-gray-700">Tanggal & Waktu</h4>
        <p class="text-gray-900">${data.date}</p>
      </div>
      <div>
        <h4 class="font-medium text-gray-700">Status</h4>
        <span class="px-2 py-1 rounded-full text-xs ${
          data.status === "Berhasil"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }">${data.status}</span>
      </div>
      <div>
        <h4 class="font-medium text-gray-700">Browser</h4>
        <p class="text-gray-900">${data.browser}</p>
      </div>
      <div>
        <h4 class="font-medium text-gray-700">Sistem Operasi</h4>
        <p class="text-gray-900">${data.os}</p>
      </div>
      <div>
        <h4 class="font-medium text-gray-700">Lokasi</h4>
        <p class="text-gray-900">${data.location}</p>
      </div>
      <div>
        <h4 class="font-medium text-gray-700">Alamat IP</h4>
        <p class="text-gray-900">${data.ip}</p>
      </div>
      <div>
        <h4 class="font-medium text-gray-700">Tipe Perangkat</h4>
        <p class="text-gray-900">${data.deviceType}</p>
      </div>
      <div class="md:col-span-2">
        <h4 class="font-medium text-gray-700">Detail</h4>
        <p class="text-gray-900">${data.details}</p>
      </div>
    </div>
    <div class="pt-4 flex justify-end">
      <button id="closeModalBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Tutup</button>
    </div>
  `;

  modal.style.display = "flex";

  // Event listener untuk tombol tutup di modal
  const closeModalBtn = document.getElementById("closeModalBtn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  } else {
    console.error('Element with ID "closeModalBtn" not found');
  }
}

// Fungsi menutup modal
function closeModal() {
  const modal = document.getElementById("detailModal");
  if (modal) modal.style.display = "none";
  else
    console.error('Element with ID "detailModal" not found saat menutup modal');
}

// Gunakan event delegation untuk menangani elemen yang dimuat dinamis
document.addEventListener('click', function(event) {
  // Handle tombol detail
  if (event.target.closest('.detail-btn')) {
    const button = event.target.closest('.detail-btn');
    const index = button.getAttribute('data-index');
    showDetailModal(index);
    event.preventDefault();
  }
  
  // Handle tombol close modal
  if (event.target.closest('#closeModal')) {
    closeModal();
    event.preventDefault();
  }
});

// Tutup modal jika klik di luar area modal
document.addEventListener('click', function(event) {
  const modal = document.getElementById('detailModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Inisialisasi saat konten dimuat (untuk elemen yang sudah ada)
document.addEventListener('DOMContentLoaded', function() {
  // Tambahkan event listener untuk tombol yang sudah ada
  const detailButtons = document.querySelectorAll('.detail-btn');
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      showDetailModal(index);
    });
  });
  
  const closeModalButton = document.getElementById('closeModal');
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }
});
