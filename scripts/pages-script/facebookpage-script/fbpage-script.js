function openModal() {
            document.getElementById('modal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        function limparFormulario() {
            document.getElementById('facebookAdsForm').reset();
            document.getElementById('successMessage').classList.remove('show');
        }

        document.getElementById('facebookAdsForm').addEventListener('submit', function(e) {
            e.preventDefault();

            setTimeout(() => {
                document.getElementById('successMessage').classList.add('show');
                
                // Limpar formulário após 3 segundos
                setTimeout(() => {
                    limparFormulario();
                    closeModal();
                }, 3000);
            }, 1000);
        });

        document.getElementById('telefone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                if (value.length < 14) {
                    value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                }
                e.target.value = value;
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });