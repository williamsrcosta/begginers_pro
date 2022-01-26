const buscaCEP = () => {
    
    let carregando = '<img src="loading.gif" width="50">';
    document.getElementById('exemplo').innerHTML = carregando;
    
    setTimeout(() => {
        fetch("https://viacep.com.br/ws/13211413/json/")
        .then(enderecoJSON => enderecoJSON.json())
        .then(endereco => {

            let resultado = `
                <div>
                    <p>
                        ${endereco.logradouro}
                    </p>
                </div>
            `;
            
            document.getElementById('exemplo').innerHTML = resultado;
        });
    }, 3000);
};

document.onload = buscaCEP();