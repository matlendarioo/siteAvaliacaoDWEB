document.getElementById('clientForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                nomeCompleto: document.getElementById('nomeCompleto').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                empresa: document.getElementById('empresa').value,
                cargo: document.getElementById('cargo').value || 'Não informado',
                segmento: document.getElementById('segmento').value,
                faturamento: document.getElementById('faturamento').value || 'Não informado',
                servicos: document.getElementById('servicos').value,
                observacoes: document.getElementById('observacoes').value || 'Nenhuma observação'
            };

            exibirDados(formData);
            
            document.getElementById('resultContainer').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });

        function exibirDados(dados) {
            const resultContainer = document.getElementById('resultContainer');
            const resultContent = document.getElementById('resultContent');
            
            const html = `
                <section class="result-item">
                    <strong>Nome Completo:</strong>
                    <p>${dados.nomeCompleto}</p>
                </section>
                <section class="result-item">
                    <strong>E-mail:</strong>
                    <p>${dados.email}</p>
                </section>
                <section class="result-item">
                    <strong>Telefone:</strong>
                    <p>${dados.telefone}</p>
                </section>
                <section class="result-item">
                    <strong>Empresa:</strong>
                    <p>${dados.empresa}</p>
                </section>
                <section class="result-item">
                    <strong>Cargo:</strong>
                    <p>${dados.cargo}</p>
                </section>
                <section class="result-item">
                    <strong>Segmento:</strong>
                    <p>${dados.segmento}</p>
                </section>
                <section class="result-item">
                    <strong>Faturamento:</strong>
                    <p>${dados.faturamento}</p>
                </section>
                <section class="result-item">
                    <strong>Serviços de Interesse:</strong>
                    <p>${dados.servicos}</p>
                </section>
                <section class="result-item">
                    <strong>Observações:</strong>
                    <p>${dados.observacoes}</p>
                </section>
            `;
            
            resultContent.innerHTML = html;
            resultContainer.classList.add('show');
        }

        function limparFormulario() {
            document.getElementById('clientForm').reset();
            
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.classList.remove('show');
            
            document.getElementById('nomeCompleto').focus();
            
            alert('Formulário limpo com sucesso!');
        }

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

        document.getElementById('email').addEventListener('blur', function() {
            const email = this.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailPattern.test(email)) {
                this.style.borderColor = '#dc3545';
                alert('Por favor, digite um e-mail válido!');
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });