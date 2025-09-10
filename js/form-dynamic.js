document.addEventListener("DOMContentLoaded", () => {
  console.log("JS siap, menunggu event di index.html...");

  // Definisikan form untuk setiap kegiatan
  const formTemplates = {
    kegiatan1: `
            <div class="mt-6 p-6 border rounded-lg bg-blue-50 border-blue-200 space-y-6">
                <h2 class="text-lg font-bold text-blue-800 mb-4">Form Monitoring Harian Bendungan</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Tanggal Monitoring <span class="text-red-500">*</span>
                        </label>
                        <input type="date" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" required>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Petugas Pengawas <span class="text-red-500">*</span>
                        </label>
                        <input type="text" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Nama petugas" required>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Elevasi Muka Air (m) <span class="text-red-500">*</span>
                        </label>
                        <input type="number" step="0.01" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Contoh: 125.75" required>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Debit Inflow (m³/s) <span class="text-red-500">*</span>
                        </label>
                        <input type="number" step="0.01" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Contoh: 12.5" required>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Debit Outflow (m³/s) <span class="text-red-500">*</span>
                        </label>
                        <input type="number" step="0.01" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Contoh: 8.2" required>
                    </div>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Kondisi Cuaca <span class="text-red-500">*</span>
                    </label>
                    <select class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" required>
                        <option value="">Pilih kondisi cuaca...</option>
                        <option value="cerah">Cerah</option>
                        <option value="berawan">Berawan</option>
                        <option value="hujan-ringan">Hujan Ringan</option>
                        <option value="hujan-sedang">Hujan Sedang</option>
                        <option value="hujan-lebat">Hujan Lebat</option>
                    </select>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Catatan Harian <span class="text-red-500">*</span>
                    </label>
                    <textarea class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" rows="4" placeholder="Catatan kondisi bendungan, perawatan, dan temuan..." required></textarea>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Foto Dokumentasi
                    </label>
                    <input type="file" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" accept="image/*" multiple>
                    <p class="text-xs text-gray-500 mt-1">Unggah foto kondisi bendungan (maks. 5 file)</p>
                </div>
                <button
                    type="submit" class="bg-indigo-600 text-white px-6 py-2 mt-6 rounded-lg font-medium hover:bg-indigo-700 transition"> Submit
                </button>
            </div>
        `,
    kegiatan2: `
            <div class="mt-6 p-6 border rounded-lg bg-green-50 border-green-200 space-y-6">
                <h2 class="text-lg font-bold text-green-800 mb-4">Form Pemeliharaan Rutin</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Jenis Pemeliharaan <span class="text-red-500">*</span>
                        </label>
                        <select class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" required>
                            <option value="">Pilih jenis pemeliharaan...</option>
                            <option value="pembersihan">Pembersihan Saluran</option>
                            <option value="vegetasi">Pengendalian Vegetasi</option>
                            <option value="struktural">Pemeriksaan Struktural</option>
                            <option value="mekanikal">Pemeliharaan Peralatan Mekanikal</option>
                            <option value="elektrikal">Pemeliharaan Peralatan Elektrikal</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Lokasi Pemeliharaan <span class="text-red-500">*</span>
                        </label>
                        <input type="text" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" placeholder="Lokasi spesifik di bendungan" required>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Tanggal Mulai <span class="text-red-500">*</span>
                        </label>
                        <input type="date" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" required>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Tanggal Selesai <span class="text-red-500">*</span>
                        </label>
                        <input type="date" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" required>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Jumlah Personil <span class="text-red-500">*</span>
                        </label>
                        <input type="number" min="1" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" required>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Estimasi Biaya (Rp) <span class="text-red-500">*</span>
                        </label>
                        <input type="number" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" placeholder="Contoh: 5000000" required>
                    </div>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Peralatan yang Digunakan
                    </label>
                    <div class="space-y-2">
                        <div class="flex items-center">
                            <input type="checkbox" id="alat1" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                            <label for="alat1" class="ml-2 block text-sm text-gray-700">Alat Berat</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="alat2" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                            <label for="alat2" class="ml-2 block text-sm text-gray-700">Peralatan Keselamatan</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="alat3" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                            <label for="alat3" class="ml-2 block text-sm text-gray-700">Peralatan Survey</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="alat4" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                            <label for="alat4" class="ml-2 block text-sm text-gray-700">Peralatan khusus lainnya</label>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Deskripsi Pekerjaan <span class="text-red-500">*</span>
                    </label>
                    <textarea class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none" rows="4" placeholder="Jelaskan detail pekerjaan pemeliharaan yang dilakukan..." required></textarea>
                </div>
                <button
                    type="submit" class="bg-indigo-600 text-white px-6 py-2 mt-6 rounded-lg font-medium hover:bg-indigo-700 transition"> Submit
                </button>
            </div>
        `,
    kegiatan3: `
            <div class="mt-6 p-6 border rounded-lg bg-purple-50 border-purple-200 space-y-6">
                <h2 class="text-lg font-bold text-purple-800 mb-4">Form Pelaporan Insiden</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Tanggal Insiden <span class="text-red-500">*</span>
                        </label>
                        <input type="date" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" required>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Waktu Insiden <span class="text-red-500">*</span>
                        </label>
                        <input type="time" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" required>
                    </div>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Jenis Insiden <span class="text-red-500">*</span>
                    </label>
                    <select class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" required>
                        <option value="">Pilih jenis insiden...</option>
                        <option value="kerusakan">Kerusakan Peralatan</option>
                        <option value="kebocoran">Kebocoran</option>
                        <option value="longsoran">Longsoran</option>
                        <option value="banjir">Banjir/Banjir Bandang</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Lokasi Insiden <span class="text-red-500">*</span>
                    </label>
                    <input type="text" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" placeholder="Lokasi spesifik kejadian insiden" required>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Deskripsi Insiden <span class="text-red-500">*</span>
                    </label>
                    <textarea class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" rows="4" placeholder="Jelaskan kronologi insiden secara detail..." required></textarea>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Tingkat Keparahan <span class="text-red-500">*</span>
                        </label>
                        <select class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" required>
                            <option value="">Pilih tingkat keparahan...</option>
                            <option value="ringan">Ringan</option>
                            <option value="sedang">Sedang</option>
                            <option value="berat">Berat</option>
                            <option value="kritis">Kritis</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-gray-700 text-sm font-medium mb-2">
                            Pelapor <span class="text-red-500">*</span>
                        </label>
                        <input type="text" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" placeholder="Nama pelapor" required>
                    </div>
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Dokumen Pendukung
                    </label>
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 hover:border-purple-400 bg-white">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Klik untuk upload</span> atau drag and drop</p>
                                <p class="text-xs text-gray-500">PDF, DOC, atau Gambar (MAX. 10MB)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" multiple />
                        </label>
                    </div> 
                </div>
                
                <div class="flex flex-col">
                    <label class="text-gray-700 text-sm font-medium mb-2">
                        Tindakan Darurat yang Dilakukan <span class="text-red-500">*</span>
                    </label>
                    <textarea class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none" rows="3" placeholder="Jelaskan langkah-langkah penanganan darurat yang sudah dilakukan..." required></textarea>
                </div>
                <button
                    type="submit" class="bg-indigo-600 text-white px-6 py-2 mt-6 rounded-lg font-medium hover:bg-indigo-700 transition"> Submit
                </button>
            </div>
        `,
  };

  // Event delegation: dengarkan perubahan pada select kegiatan
  document.addEventListener("change", (event) => {
    if (event.target && event.target.id === "kegiatan-select") {
      const selectedValue = event.target.value;
      console.log("Kegiatan dipilih:", selectedValue);

      const container = document.getElementById("dynamic-form-container");
      container.innerHTML = ""; // reset isi dulu

      if (selectedValue && formTemplates[selectedValue]) {
        container.innerHTML = formTemplates[selectedValue];
      }
    }
  });

  // Jika ada nilai yang sudah dipilih sebelumnya, tampilkan form yang sesuai
  const kegiatanSelect = document.getElementById("kegiatan-select");
  const dynamicFormContainer = document.getElementById(
    "dynamic-form-container"
  );

  if (kegiatanSelect.value && formTemplates[kegiatanSelect.value]) {
    dynamicFormContainer.innerHTML = formTemplates[kegiatanSelect.value];
  }
});
