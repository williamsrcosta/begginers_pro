const casas = [];

function Casa(carro, sofa, armario, tv, colchao, geladeira, mesa) {
  this.carro = carro;
  this.sofa = sofa;
  this.armario = armario;
  this.tv = tv;
  this.colchao = colchao;
  this.geladeira = geladeira;
  this.mesa = mesa;
};

let itens1 = new Casa (
  'Ford Ka',
  'Sofá de 3 lugares',
  'Armário planejado',
  'Samsung',
  'Box King Size',
  'Electrolux',
  'Madeira Madeira'
);
casas.push(itens1);

let itens2 = new Casa(
  'Camaro Amarelo',
  'Sofá de 1 lugar',
  'Armário Casas Bahia',
  'LG',
  'Solteiro',
  'Samsung',
  'Mercado Livre'
);
casas.push(itens2);

let itens3 = new Casa('Civic', 'Sofá de 5 lugares', 'Armário Magazine Luiza', 'Philips', 'Casal', 'Brastemp', 'Magazine Luiza');
casas.push(itens3);

const main = document.querySelector('main');
const div = document.createElement('div');

casas.forEach((casa, i) => {
  const titulo = document.createElement('h1');
  const carro = document.createElement('p');
  const sofa = document.createElement('p');
  const armario = document.createElement('p');
  const tv = document.createElement('p');
  const colchao = document.createElement('p');
  const geladeira = document.createElement('p');
  const mesa = document.createElement('p');

  titulo.append(`Casa: ${1 + [i] * 1}`);
  carro.append(`Carro: ${casa.carro}`);
  sofa.append(`Sofá: ${casa.sofa}`);
  armario.append(`Armário: ${casa.armario}`);
  tv.append(`TV: ${casa.tv}`);
  colchao.append(`Colchão: ${casa.colchao}`);
  geladeira.append(`Geladeira: ${casa.geladeira}`);
  mesa.append(`Mesa: ${casa.mesa}`);

  div.append(titulo, carro, sofa, armario, tv, colchao, geladeira, mesa);
})

main.append(div);