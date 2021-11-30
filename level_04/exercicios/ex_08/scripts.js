const casas  = [];
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

// INICIO FOR EACH
casas.forEach((casa, i) => {

    let titulo   = document.createElement('h1');
    let carro    = document.createElement('p');
    let chuveiro = document.createElement('p');
    let cozinha  = document.createElement('p');
    let radio    = document.createElement('p');
    let cama     = document.createElement('p');
    let cadeira  = document.createElement('p');
    let rack     = document.createElement('p');

    //div.innerHTML = ''
    document.querySelector('main').innerHTML += `<div>
                        <h1>Casa: ${1 + [i] * 1}</h1>
                        <p>Carro: ${casa.carro}</p>
                        <p>Chuveiro: ${casa.chuveiro}</p>
                        <p>Cozinha: ${casa.cozinha}</p>
                        <p>Radio: ${casa.radio}</p>
                        <p>Cama: ${casa.cama}</p>
                        <p>Cadeira: ${casa.cadeira}</p>
                        <p>Rack: ${casa.rack}</p>
                      </div> `
})

// FINAL FOR EACH