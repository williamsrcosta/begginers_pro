const casas             = [];
const main              = document.querySelector('main');
const div               = document.createElement('div');
let casa1               = {}
let casa2               = {}
let casa3               = {}
let casa4               = {}
let casa5               = {}
let casa6               = {}
let casa7               = {}
let elementotBodyResult = document.querySelector('#tbodyResult');

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

casas.forEach((casa, i) => {

    elementotBodyResult.innerHTML += `<tr>
                                        <td>${1 + [i] * 1}</td>
                                        <td>${casa.carro}</td>
                                        <td>${casa.chuveiro}</td>
                                        <td>${casa.cozinha}</td>
                                        <td>${casa.radio}</td>
                                        <td>${casa.cama}</td>
                                        <td>${casa.cadeira}</td>
                                        <td>${casa.rack}</td>
                                      </tr> `

})
  
//main.append(div);