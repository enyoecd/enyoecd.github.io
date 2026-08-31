(function () {
        var toggle = document.getElementById('menu-toggle');
        var menu = document.getElementById('mobile-menu');
        if (toggle && menu) {
                toggle.addEventListener('click', function () {
                        var isOpen = menu.classList.toggle('open');
                        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                        toggle.querySelector('.material-symbols-outlined').textContent = isOpen ? 'close' : 'menu';
                });
                menu.querySelectorAll('a').forEach(function (link) {
                        link.addEventListener('click', function () {
                                menu.classList.remove('open');
                                toggle.setAttribute('aria-expanded', 'false');
                                toggle.querySelector('.material-symbols-outlined').textContent = 'menu';
                        });
                });
        }

        var form = document.getElementById('contactForm');
        if (!form) return;

        var nombre = document.getElementById('nombre');
        var mensaje = document.getElementById('mensaje');
        var mensajeContador = document.getElementById('mensaje-contador');
        var maxLength = 500;

        function clearFieldError(field) {
                if (!field) return;
                field.classList.remove('border-red-500');
                field.setAttribute('aria-invalid', 'false');
                var errorElement = document.getElementById(field.id + '-error');
                if (errorElement) {
                        errorElement.textContent = '';
                        errorElement.style.display = 'none';
                }
        }

        function showFieldError(field, message) {
                if (!field) return;
                field.classList.add('border-red-500');
                field.setAttribute('aria-invalid', 'true');
                var errorElement = document.getElementById(field.id + '-error');
                if (!errorElement) {
                        errorElement = document.createElement('p');
                        errorElement.id = field.id + '-error';
                        errorElement.className = 'mt-2 text-xs md:text-sm text-red-400';
                        field.parentNode.appendChild(errorElement);
                }
                errorElement.textContent = message;
                errorElement.style.display = 'block';
        }

        function validateRequiredFields() {
                var valid = true;

                if (!nombre || !nombre.value.trim()) {
                        showFieldError(nombre, 'El nombre es obligatorio.');
                        valid = false;
                } else {
                        clearFieldError(nombre);
                }

                if (!mensaje || !mensaje.value.trim()) {
                        showFieldError(mensaje, 'El mensaje es obligatorio.');
                        valid = false;
                } else {
                        clearFieldError(mensaje);
                }

                return valid;
        }

        function actualizarContadorMensaje() {
                if (!mensaje || !mensajeContador) return;
                var remaining = maxLength - mensaje.value.length;
                mensajeContador.textContent = remaining + ' caracteres restantes';

                if (remaining <= 10) {
                        mensajeContador.classList.remove('text-on-surface-variant');
                        mensajeContador.classList.add('text-red-500');
                } else {
                        mensajeContador.classList.remove('text-red-500');
                        mensajeContador.classList.add('text-on-surface-variant');
                }
        }

        if (nombre) {
                nombre.addEventListener('input', function () {
                        if (nombre.value.trim()) {
                                clearFieldError(nombre);
                        }
                });
        }

        if (mensaje && mensajeContador) {
                mensaje.addEventListener('input', function () {
                        if (mensaje.value.length > maxLength) {
                                mensaje.value = mensaje.value.slice(0, maxLength);
                        }
                        if (mensaje.value.trim()) {
                                clearFieldError(mensaje);
                        }
                        actualizarContadorMensaje();
                });

                actualizarContadorMensaje();
        }

        var modal = document.getElementById('success-modal');
        var closeButton = document.getElementById('close-success-modal');

        function openSuccessModal() {
                if (!modal) return;
                modal.style.display = 'flex';
                requestAnimationFrame(function () {
                        modal.style.opacity = '1';
                        var dialog = modal.querySelector('div[role="dialog"]');
                        if (dialog) {
                                dialog.style.transform = 'translateY(0) scale(1)';
                        }
                });
                modal.setAttribute('aria-hidden', 'false');
        }

        function closeSuccessModal() {
                if (!modal) return;
                modal.style.opacity = '0';
                var dialog = modal.querySelector('div[role="dialog"]');
                if (dialog) {
                        dialog.style.transform = 'translateY(-10px) scale(0.98)';
                }
                setTimeout(function () {
                        modal.style.display = 'none';
                        modal.setAttribute('aria-hidden', 'true');
                }, 220);
        }

        if (closeButton) {
                closeButton.addEventListener('click', closeSuccessModal);
        }

        if (modal) {
                modal.addEventListener('click', function (event) {
                        if (event.target === modal) {
                                closeSuccessModal();
                        }
                });
        }

        var statusMessage = document.getElementById('form-status');
        if (!statusMessage) {
                statusMessage = document.createElement('p');
                statusMessage.id = 'form-status';
                statusMessage.className = 'mt-4 font-body-md text-body-md';
                form.parentNode.appendChild(statusMessage);
        }

        form.addEventListener('submit', function (event) {
                event.preventDefault();

                if (!validateRequiredFields()) {
                        return;
                }

                statusMessage.textContent = '';
                statusMessage.className = 'mt-4 font-body-md text-body-md text-on-surface-variant';

                fetch('https://formspree.io/f/xeaqondy', {
                        method: 'POST',
                        headers: {
                                'Accept': 'application/json'
                        },
                        body: new FormData(form)
                }).then(function (response) {
                        if (response.ok) {
                                form.reset();
                                if (nombre) {
                                        clearFieldError(nombre);
                                }
                                if (mensaje) {
                                        clearFieldError(mensaje);
                                        mensaje.value = '';
                                        actualizarContadorMensaje();
                                }
                                openSuccessModal();
                                return;
                        }

                        throw new Error('Formspree error');
                }).catch(function () {
                        statusMessage.textContent = 'No se pudo enviar el mensaje. Inténtalo nuevamente.';
                        statusMessage.className = 'mt-4 font-body-md text-body-md text-red-400';
                });
        });
})();
