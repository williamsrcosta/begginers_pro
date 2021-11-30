const pessoas = {
    "Lucas": {
        profissao: "Instrutor",
        idade: 23
    },
    "Claudemir": {
        profissao: "Gamer",
        idade: 20
    },
    "Marcela": {
        profissao: "Head de Marketing",
        idade: 27
    },
};

const animais = {
    "Leão": "Africa",
    "Capivara": "Brasil",
    "Canguru": "Austrália",
    "Tigre": "Índia"
};

const carros = {
    Vectra: {
        cor: "preto",
        ano: 2002
    },
    Civic: {
        cor: "cinza",
        ano: 1995
    },
    Passat: {
        cor: "preto",
        ano: 2008
    },
};

const baresJundiai = {
    "Pé na Jaca Bar": {
        local: "R. Rodrigo Soares de Oliveira, 526 - Anhangabaú, Jundiaí - SP",
        nota: 4.5
    },
    "The Champions Sports Bar": {
        local: "Av. 9 de Julho, 1700 - Anhangabaú, Jundiaí - SP",
        nota: 4.5
    },
    "O Santuário": {
        local: "R. Barão de Teffé, 318 - Parque do Colégio, Jundiaí - SP",
        nota: 4.5
    }
};

Object.keys(pessoas).forEach(function(pessoa) {
    console.log(
        `${pessoa} é ${pessoas[pessoa].profissao} e tem ${pessoas[pessoa].idade} anos`
    );
});

Object.keys(animais).forEach(function(animal) {
    console.log(`Nome Animal: ${animal}`);
});

Object.keys(carros).forEach(function(carro) {
    console.log(
        `${carro} tem a cor ${carros[carro].cor} e o ano de ${carros[carro].ano}`
    );
});

