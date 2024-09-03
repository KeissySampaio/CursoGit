
            function preencherCampo() {
                const meuCampo = document.getElementById('meuCampo').value;
                const artilheirosPorAno = {
                    2003: 'Dimba com 31 gols jogando pelo Goiás.',
                    2004: 'Washington com 34 gols jogando pelo A.Paranaense.',
                    2005: 'Romário com 22 gols jogando pelo Vasco.',
                    2006: 'Souza com 17 gols jogando pelo Goiás.',
                    2007: 'Josiel com 20 gols jogando pelo Paraná.',
                    2008: 'Washington com 21 gols jogando pelo Fluminense.',
                    2009: 'Adriano com 19 gols jogando pelo Flamengo.',
                    2010: 'Jonas com 23 gols jogando pelo Grêmio.',
                    2011: 'Borges com 23 gols jogando pelo Santos.',
                    2012: 'Fred com 20 gols jogando pelo Fluminense.',
                    2013: 'Ederson com 21 gols jogando pelo A.Paranaense.',
                    2014: 'Fred com 18 gols jogando pelo Fluminense.',
                    2015: 'Ricardo Oliveira com 20 gols jogando pelo Santos.',
                    2016: 'Fred com 14 gols jogando pelo A.Mineiro.',
                    2017: 'Jô com 18 gols jogando pelo Corinthians.',
                    2018: 'Gabigol com 18 gols jogando pelo Santos.',
                    2019: 'Gabigol com 25 gols jogando pelo Flamengo',
                    2020: 'Luciano com 18 gols jogando pelo São Paulo F. C.',
                    2021: 'Hulk com 19 gols jogando pelo A.Mineiro.',
                    2022: 'German Cano com 26 gols jogando pelo Fluminense.',
                    2023: 'Paulinho com 20 gols jogando pelo A.Mineiro.',
                    2024: 'No brasileirão atual o artilheiro é o Pedro do Flamengo com 11 gols.',
                };
                const resultado = artilheirosPorAno[meuCampo];
                document.getElementById('resultado').textContent = resultado || 'Ano não encontrado';
            }
        