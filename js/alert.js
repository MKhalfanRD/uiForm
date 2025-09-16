// ==== ALERT ====
function showAlert(message, type = 'success', duration = 5000) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;

    let icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-times-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    if (type === 'info') icon = 'fa-info-circle';

    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas ${icon} alert-icon"></i>
            <div class="alert-message">${message}</div>
        </div>
        <button class="alert-close"><i class="fas fa-times"></i></button>
        <div class="alert-progress"></div>
    `;

    alertContainer.appendChild(alert);

    // progress bar
    const progressBar = alert.querySelector('.alert-progress');
    progressBar.style.animation = `progress ${duration}ms linear forwards`;

    const closeAlert = () => {
        alert.style.transform = 'translateX(100%)';
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 300);
    };

    alert.querySelector('.alert-close').addEventListener('click', closeAlert);
    setTimeout(closeAlert, duration);
}

// ==== MODAL CONFIRM ====
function showConfirm(title = 'Konfirmasi Hapus', message = 'Apakah Anda yakin?') {
    return new Promise((resolve) => {
        // Pastikan DOM sudah ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initModal();
            });
        } else {
            initModal();
        }

        function initModal() {
            const modalOverlay = document.getElementById('delete-modal-overlay');
            const confirmBtn = document.getElementById('delete-modal-confirm');
            const cancelBtn = document.getElementById('delete-modal-cancel');

            if (!modalOverlay || !confirmBtn || !cancelBtn) {
                console.error('Modal elements not found!');
                resolve(false); // Fallback jika element tidak ditemukan
                return;
            }

            // set content
            document.getElementById('delete-modal-title').textContent = title;
            document.getElementById('delete-modal-message').textContent = message;

            // tampilkan modal
            modalOverlay.classList.add('active');

            const cleanup = () => {
                modalOverlay.classList.remove('active');
                confirmBtn.removeEventListener('click', onConfirm);
                cancelBtn.removeEventListener('click', onCancel);
            };

            const onConfirm = () => { cleanup(); resolve(true); };
            const onCancel = () => { cleanup(); resolve(false); };

            confirmBtn.addEventListener('click', onConfirm);
            cancelBtn.addEventListener('click', onCancel);
        }
    });
}
