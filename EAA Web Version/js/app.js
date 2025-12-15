/**
 * ERPL Testing Analysis App - Main Application Script
 * Handles navigation, shared utilities, and global state
 */

// Toast notification system
class ToastManager {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
      <span>${this.getIcon(type)}</span>
      <span>${message}</span>
    `;
        this.container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    getIcon(type) {
        const icons = {
            success: '✓',
            error: '✗',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }

    success(message) { this.show(message, 'success'); }
    error(message) { this.show(message, 'error'); }
    warning(message) { this.show(message, 'warning'); }
    info(message) { this.show(message, 'info'); }
}

// Modal manager
class ModalManager {
    static open(modalId) {
        const overlay = document.getElementById(modalId);
        if (overlay) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    static close(modalId) {
        const overlay = document.getElementById(modalId);
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    static closeAll() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
}

// Prompt dialog helper
class PromptDialog {
    static async show(title, message, defaultValue = '') {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay active';
            overlay.innerHTML = `
        <div class="modal" style="width: 400px;">
          <div class="modal-header">
            <h3 class="modal-title">${title}</h3>
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
          </div>
          <div class="modal-body">
            <p style="margin-bottom: var(--spacing-md);">${message}</p>
            <input type="number" step="any" class="form-input" id="promptInput" value="${defaultValue}" autofocus>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" id="promptCancel">Cancel</button>
            <button class="btn btn-primary" id="promptConfirm">Confirm</button>
          </div>
        </div>
      `;

            document.body.appendChild(overlay);

            const input = overlay.querySelector('#promptInput');
            input.focus();
            input.select();

            const cleanup = (value) => {
                overlay.remove();
                resolve(value);
            };

            overlay.querySelector('#promptConfirm').onclick = () => {
                const value = parseFloat(input.value);
                cleanup(isNaN(value) ? null : value);
            };

            overlay.querySelector('#promptCancel').onclick = () => cleanup(null);

            input.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    const value = parseFloat(input.value);
                    cleanup(isNaN(value) ? null : value);
                } else if (e.key === 'Escape') {
                    cleanup(null);
                }
            };
        });
    }
}

// Initialize global toast manager
window.toast = new ToastManager();
window.ModalManager = ModalManager;
window.PromptDialog = PromptDialog;

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        ModalManager.closeAll();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        ModalManager.closeAll();
    }
});

console.log('ERPL Testing Analysis App initialized');
