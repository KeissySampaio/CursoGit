
            function preencherCampo() {
                const meuCampo = document.getElementById('meuCampo').value;
                const resultado = artilheirosPorAno[meuCampo];
                document.getElementById('resultado').textContent = resultado || 'Ano não encontrado';
                console.log(dados);
            }
