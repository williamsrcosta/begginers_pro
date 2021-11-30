const casas  = [];
const main   = document.querySelector('main');
const div    = document.createElement('div');
let casa     = null
let casa1    = {}
let casa2    = {}
let casa3    = {}
let casa4    = {}
let casa5    = {}
let casa6    = {}
let casa7    = {}

casa1 = new Casa ('Ford Ka',
                  'Lorenzetti',
                  'Cozinha planejada',
                  'Samsung',
                  'Box King Size',
                  'Madeira',
                  'Rack Grande de Madeira'
);

casa2 = new Casa ('Fox',
                  'Chuveiro Forte',
                  'Cozinha Casas Bahia',
                  'Apple',
                  'Box King ',
                  'Aço',
                  'Rack Médio de Madeira'
);                

casa3 = new Casa ('Gol',
                  'Chuveiro de Mercado',
                  'Cozinha de Pobre',
                  'Electrolux',
                  'Box',
                  'Madeira',
                  'Rack Pequeno de Madeira'
);                

casa4 = new Casa ('Sandeiro',
                  'Chuveiro',
                  'Cozinha de Rico',
                  'Mundial',
                  'Cama Normal',
                  'Madeira',
                  'Rack'
);                

casa5 = new Casa ('Ford Ka',
                  'Lorenzetti',
                  'Cozinha planejada',
                  'Samsung',
                  'Box King Size',
                  'Madeira',
                  'Rack Grande de Madeira'
);                

casa6 = new Casa ('Ford Ka',
                  'Lorenzetti',
                  'Cozinha planejada',
                  'Samsung',
                  'Box King Size',
                  'Madeira',
                  'Rack Grande de Madeira'
);                

casa7 = new Casa ('Ford Ka',
                  'Lorenzetti',
                  'Cozinha planejada',
                  'Samsung',
                  'Box King Size',
                  'Madeira',
                  'Rack Grande de Madeira'
);   

casas.push(casa1);
casas.push(casa2);
casas.push(casa3);
casas.push(casa4);
casas.push(casa5);
casas.push(casa6);
casas.push(casa7);

function Casa(carro, chuveiro, cozinha, radio, cama, cadeira, rack) {
    this.carro    = carro;
    this.chuveiro = chuveiro;
    this.cozinha  = cozinha;
    this.radio    = radio;
    this.cama     = cama;
    this.cadeira  = cadeira;
    this.rack     = rack;
};

// INICIO FOR IN
for (const i in casas) {

    if (Object.hasOwnProperty.call(casas, i)) {

        casa = casas[i];

        if (i === "0"){

            let titulo   = document.createElement('h1');
            let carro    = document.createElement('p');
            let chuveiro = document.createElement('p');
            let cozinha  = document.createElement('p');
            let radio    = document.createElement('p');
            let cama     = document.createElement('p');
            let cadeira  = document.createElement('p');
            let rack     = document.createElement('p');

            titulo.append(`Casa: ${1 + [Number(i)] * 1}`);
            carro.append(`Carro: ${casa.carro}`);
            chuveiro.append(`Chuveiro: ${casa.chuveiro}`);
            cozinha.append(`Cozinha: ${casa.cozinha}`);
            radio.append(`Radio: ${casa.radio}`);
            cama.append(`Cama: ${casa.cama}`);
            cadeira.append(`Cadeira: ${casa.cadeira}`);
            rack.append(`Rack: ${casa.rack}`);
        
            div.append(titulo, carro, chuveiro, cozinha, radio, cama, cadeira, rack);
        }
    }
}

main.append(div);

// FINAL FOR IN

// INICIO FOR OF

for (const [i, casa] of casas.entries()) {

    console.log('i: ' + i)

    if (i === 1){

        let titulo   = document.createElement('h1');
        let carro    = document.createElement('p');
        let chuveiro = document.createElement('p');
        let cozinha  = document.createElement('p');
        let radio    = document.createElement('p');
        let cama     = document.createElement('p');
        let cadeira  = document.createElement('p');
        let rack     = document.createElement('p');

        titulo.append(`Casa: ${1 + [Number(i)] * 1}`);
        carro.append(`Carro: ${casa.carro}`);
        chuveiro.append(`Chuveiro: ${casa.chuveiro}`);
        cozinha.append(`Cozinha: ${casa.cozinha}`);
        radio.append(`Radio: ${casa.radio}`);
        cama.append(`Cama: ${casa.cama}`);
        cadeira.append(`Cadeira: ${casa.cadeira}`);
        rack.append(`Rack: ${casa.rack}`);
    
        div.append(titulo, carro, chuveiro, cozinha, radio, cama, cadeira, rack);
    }
    
}

main.append(div);

// FINAL FOR OF

// INICIO FOR 
for (let i = 0; i < casas.length; i++) {

    const casa = casas[i];

    console.log('i: ' + i)

    if (i === 2){

        let titulo   = document.createElement('h1');
        let carro    = document.createElement('p');
        let chuveiro = document.createElement('p');
        let cozinha  = document.createElement('p');
        let radio    = document.createElement('p');
        let cama     = document.createElement('p');
        let cadeira  = document.createElement('p');
        let rack     = document.createElement('p');

        titulo.append(`Casa: ${1 + [Number(i)] * 1}`);
        carro.append(`Carro: ${casa.carro}`);
        chuveiro.append(`Chuveiro: ${casa.chuveiro}`);
        cozinha.append(`Cozinha: ${casa.cozinha}`);
        radio.append(`Radio: ${casa.radio}`);
        cama.append(`Cama: ${casa.cama}`);
        cadeira.append(`Cadeira: ${casa.cadeira}`);
        rack.append(`Rack: ${casa.rack}`);
    
        div.append(titulo, carro, chuveiro, cozinha, radio, cama, cadeira, rack);
    }

    
}

main.append(div);
// FINAL FOR 

// INICIO FOR EACH
casas.forEach((casa, i) => {

    if (i === 3){

        let titulo   = document.createElement('h1');
        let carro    = document.createElement('p');
        let chuveiro = document.createElement('p');
        let cozinha  = document.createElement('p');
        let radio    = document.createElement('p');
        let cama     = document.createElement('p');
        let cadeira  = document.createElement('p');
        let rack     = document.createElement('p');

        titulo.append(`Casa: ${1 + [i] * 1}`);
        carro.append(`Carro: ${casa.carro}`);
        chuveiro.append(`Chuveiro: ${casa.chuveiro}`);
        cozinha.append(`Cozinha: ${casa.cozinha}`);
        radio.append(`Radio: ${casa.radio}`);
        cama.append(`Cama: ${casa.cama}`);
        cadeira.append(`Cadeira: ${casa.cadeira}`);
        rack.append(`Rack: ${casa.rack}`);
    
        div.append(titulo, carro, chuveiro, cozinha, radio, cama, cadeira, rack);
    }

})

main.append(div);
// FINAL FOR EACH