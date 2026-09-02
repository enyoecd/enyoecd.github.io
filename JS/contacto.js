window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'on-surface-variant': '#c3c6d7',
        'on-tertiary': '#003640',
        'on-error-container': '#ffdad6',
        'on-secondary-fixed-variant': '#004c69',
        'surface-dim': '#11131b',
        'on-secondary': '#00354a',
        'on-primary-container': '#eeefff',
        'secondary-container': '#00a6e0',
        'on-background': '#e1e2ed',
        'on-surface': '#e1e2ed',
        'tertiary-fixed-dim': '#4cd7f6',
        outline: '#8d90a0',
        'surface-container-lowest': '#0c0e16',
        'on-primary': '#002a78',
        'surface-container-highest': '#32343d',
        'on-secondary-fixed': '#001e2c',
        'outline-variant': '#434655',
        'on-primary-fixed-variant': '#003ea8',
        'tertiary-fixed': '#acedff',
        error: '#ffb4ab',
        secondary: '#7bd0ff',
        'surface-container-low': '#191b23',
        primary: '#b4c5ff',
        'on-secondary-container': '#00374d',
        'primary-fixed-dim': '#b4c5ff',
        'surface-container': '#1d1f27',
        'primary-container': '#2563eb',
        'surface-bright': '#373942',
        'inverse-surface': '#e1e2ed',
        'secondary-fixed': '#c4e7ff',
        'inverse-primary': '#0053db',
        'on-tertiary-container': '#d7f6ff',
        'error-container': '#93000a',
        background: '#11131b',
        'on-primary-fixed': '#00174b',
        'secondary-fixed-dim': '#7bd0ff',
        'primary-fixed': '#dbe1ff',
        'tertiary-container': '#00788c',
        'on-tertiary-fixed-variant': '#004e5c',
        'surface-tint': '#b4c5ff',
        'surface-variant': '#32343d',
        surface: '#11131b',
        tertiary: '#4cd7f6',
        'surface-container-high': '#282a32',
        'inverse-on-surface': '#2e3039',
        'on-error': '#690005',
        'on-tertiary-fixed': '#001f26'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        base: '8px',
        gutter: '24px',
        'container-max-width': '1280px',
        'margin-mobile': '20px',
        'section-gap-desktop': '120px',
        'section-gap-mobile': '64px'
      },
      fontFamily: {
        'body-md': ['Inter'],
        'headline-lg-mobile': ['Manrope'],
        'label-sm': ['Inter'],
        'body-lg': ['Inter'],
        'label-md': ['Inter'],
        'headline-md': ['Manrope'],
        'headline-lg': ['Manrope'],
        'headline-xl': ['Manrope']
      },
      fontSize: {
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'label-sm': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }]
      }
    }
  }
};

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

        var submitButton = form.querySelector('button[type="submit"]');
        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var telefono = document.getElementById('telefono');
        var mensaje = document.getElementById('mensaje');
        var mensajeContador = document.getElementById('mensaje-contador');
        var mensajeError = document.getElementById('mensaje-error');
        var maxLength = 500;

        function isValidEmail(value) {
                if (!value) return false;
                return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
        }

        function sanitizePhone(value) {
                if (value === null || value === undefined) return '';

                var rawValue = String(value).replace(/[^\d+]/g, '');
                var plusCount = (rawValue.match(/\+/g) || []).length;
                var digitsOnly = rawValue.replace(/\+/g, '').replace(/\D/g, '');

                if (plusCount > 0) {
                        return ('+' + digitsOnly).slice(0, 16);
                }

                return digitsOnly.slice(0, 16);
        }

        function triggerSubmitAlert() {
                if (!submitButton) return;
                submitButton.classList.remove('submit-alert');
                void submitButton.offsetWidth;
                submitButton.classList.add('submit-alert');
                clearTimeout(submitButton.submitAlertTimeout);
                submitButton.submitAlertTimeout = setTimeout(function () {
                        submitButton.classList.remove('submit-alert');
                }, 1000);
        }

        function focusFirstInvalidField() {
                if (!nombre || !nombre.value.trim()) {
                        if (nombre) {
                                nombre.focus({ preventScroll: true });
                                nombre.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                        return;
                }

                if (!mensaje || !mensaje.value.trim()) {
                        if (mensaje) {
                                mensaje.focus({ preventScroll: true });
                                mensaje.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                }
        }

        function clearFieldError(field) {
                if (!field) return;
                field.classList.remove('border-red-500');
                field.setAttribute('aria-invalid', 'false');

                if (field === mensaje && mensajeError) {
                        mensajeError.textContent = '';
                        mensajeError.classList.add('hidden');
                        return;
                }

                if (field === email) {
                        var emailError = document.getElementById('email-error');
                        if (emailError) {
                                emailError.textContent = '';
                                emailError.style.display = 'none';
                        }
                        return;
                }

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

                if (field === mensaje && mensajeError) {
                        mensajeError.textContent = message;
                        mensajeError.classList.remove('hidden');
                        return;
                }

                if (field === email) {
                        var emailError = document.getElementById('email-error');
                        if (!emailError) {
                                emailError = document.createElement('p');
                                emailError.id = 'email-error';
                                emailError.className = 'mt-2 text-xs md:text-sm text-red-400';
                                field.parentNode.appendChild(emailError);
                        }
                        emailError.textContent = message;
                        emailError.style.display = 'block';
                        return;
                }

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

                if (email && email.value.trim() && !isValidEmail(email.value)) {
                        showFieldError(email, 'Verifica tu correo electrónico.');
                        valid = false;
                } else if (email) {
                        clearFieldError(email);
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

        if (email) {
                email.addEventListener('input', function () {
                        if (email.value.trim() && isValidEmail(email.value)) {
                                clearFieldError(email);
                        } else if (email.value.trim() && !isValidEmail(email.value)) {
                                showFieldError(email, 'Verifica tu correo electrónico.');
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

        if (telefono) {
                telefono.addEventListener('input', function () {
                        telefono.value = sanitizePhone(telefono.value);
                });
                telefono.addEventListener('paste', function (event) {
                        event.preventDefault();
                        var pastedText = (event.clipboardData || window.clipboardData).getData('text');
                        telefono.value = sanitizePhone((telefono.value || '') + pastedText);
                });
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
                        focusFirstInvalidField();
                        triggerSubmitAlert();
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
                                // Capturar valores antes de reset para enviarlos también al Worker
                                var payloadForWorker = {
                                        asunto: (document.getElementById('asunto') && document.getElementById('asunto').value) ? document.getElementById('asunto').value.trim() : '',
                                        nombre: (nombre && nombre.value) ? nombre.value.trim() : '',
                                        email: (email && email.value) ? email.value.trim() : '',
                                        telefono: (telefono && telefono.value) ? telefono.value.trim() : '',
                                        mensaje: (mensaje && mensaje.value) ? mensaje.value.trim() : ''
                                };

                                // Comportamiento existente: reset del formulario y mostrar modal
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

                                // Envío secundario al Worker (Telegram) — no bloquear la UX ni interferir con el envío por correo
                                try {
                                        fetch('https://formulario-contacto-enyoecd-github-io.enyoecd.workers.dev/', {
                                                method: 'POST',
                                                headers: {
                                                        'Content-Type': 'application/json',
                                                        'Accept': 'application/json'
                                                },
                                                body: JSON.stringify(payloadForWorker)
                                        }).then(function (workerResp) {
                                                if (!workerResp.ok) {
                                                        // registrar el error del Worker pero no alterar la UX
                                                        workerResp.text().then(function (text) {
                                                                console.error('Worker error:', workerResp.status, text);
                                                        }).catch(function (err) {
                                                                console.error('Worker response read error:', err);
                                                        });
                                                } else {
                                                        // opcional: leer respuesta para debug
                                                        workerResp.text().then(function (text) {
                                                                console.log('Worker enviado correctamente:', text);
                                                        }).catch(function (err) {
                                                                console.log('Worker respuesta lectura error:', err);
                                                        });
                                                }
                                        }).catch(function (err) {
                                                console.error('Error enviando al Worker (Telegram):', err);
                                        });
                                } catch (ex) {
                                        console.error('Error construyendo payload para Worker:', ex);
                                }

                                return;
                        }

                        throw new Error('Formspree error');
                }).catch(function () {
                        statusMessage.textContent = 'No se pudo enviar el mensaje. Inténtalo nuevamente.';
                        statusMessage.className = 'mt-4 font-body-md text-body-md text-red-400';
                });
        });
})();
