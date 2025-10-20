function limpaFormularioCep() {
    document.getElementById('logradouro').value = "";
    document.getElementById('complemento').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('localidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
    document.getElementById('gia').value = "";
    document.getElementById('ddd').value = "";
    document.getElementById('siafi').value = "";
    document.getElementById('unidade').value = "";
    document.getElementById('estado').value = "";
    document.getElementById('regiao').value = "";
}

function pesquisacep(valor) {
    let cep = valor.replace(/\D/g, '');

    if (cep !== "" && /^[0-9]{8}$/.test(cep)) {
        document.getElementById('logradouro').value = "...";
        document.getElementById('complemento').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('localidade').value = "...";
        document.getElementById('uf').value = "...";
        document.getElementById('ibge').value = "...";
        document.getElementById('gia').value = "...";
        document.getElementById('ddd').value = "...";
        document.getElementById('siafi').value = "...";

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(dados => {
                if (!("erro" in dados)) {
                    document.getElementById('logradouro').value = dados.logradouro;
                    document.getElementById('complemento').value = dados.complemento;
                    document.getElementById('bairro').value = dados.bairro;
                    document.getElementById('localidade').value = dados.localidade;
                    document.getElementById('uf').value = dados.uf;
                    document.getElementById('ibge').value = dados.ibge;
                    document.getElementById('gia').value = dados.gia;
                    document.getElementById('ddd').value = dados.ddd;
                    document.getElementById('siafi').value = dados.siafi;

                    document.getElementById('estado').value = nomeDoEstado(dados.uf);
                    document.getElementById('regiao').value = regiaoPorUF(dados.uf);
                } else {
                    limpaFormularioCep();
                    alert("CEP não encontrado.");
                }
            })
            .catch(error => {
                limpaFormularioCep();
                alert("Erro ao buscar o CEP.");
                console.error(error);
            });
    } else {
        limpaFormularioCep();
        alert("CEP inválido.");
    }
}

function nomeDoEstado(uf) {
    const estados = {
        "AC": "Acre", "AL": "Alagoas", "AP": "Amapá", "AM": "Amazonas",
        "BA": "Bahia", "CE": "Ceará", "DF": "Distrito Federal", "ES": "Espírito Santo",
        "GO": "Goiás", "MA": "Maranhão", "MT": "Mato Grosso", "MS": "Mato Grosso do Sul",
        "MG": "Minas Gerais", "PA": "Pará", "PB": "Paraíba", "PR": "Paraná",
        "PE": "Pernambuco", "PI": "Piauí", "RJ": "Rio de Janeiro", "RN": "Rio Grande do Norte",
        "RS": "Rio Grande do Sul", "RO": "Rondônia", "RR": "Roraima", "SC": "Santa Catarina",
        "SP": "São Paulo", "SE": "Sergipe", "TO": "Tocantins"
    };
    return estados[uf] || "";
}

function regiaoPorUF(uf) {
    const regioes = {
        "Norte": ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
        "Nordeste": ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
        "Centro-Oeste": ["DF", "GO", "MT", "MS"],
        "Sudeste": ["ES", "MG", "RJ", "SP"],
        "Sul": ["PR", "RS", "SC"]
    };
    for (let regiao in regioes) {
        if (regioes[regiao].includes(uf)) {
            return regiao;
        }
    }
    return "";
}