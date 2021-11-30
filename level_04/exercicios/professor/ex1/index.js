// Primeiro Objeto:
function percorrerObjeto1() {
  const animais = {
    "Leão": "Africa",
    "Capivara": "Brasil",
    "Canguru": "Austrália",
    "Tigre": "Índia"
  };
  
  for (let [propriedade, valor] of Object.entries(animais)) {
    console.log(`O(a) ${propriedade} costuma habitar no(a) ${valor}`);
  }

}
// percorrerObjeto1();


















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Segundo Objeto:
function percorrerObjeto2() {
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
  
  Object.entries(carros).forEach(
    function ([chave, valor]) {
      console.log(`O ${chave} é do ano ${valor.ano} e é da cor ${valor.cor}.`);
    }
  );
}  
// percorrerObjeto2();



















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Terceiro Objeto:
function percorrerObjeto3() {
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

  for(const [chave, valor] of Object.entries(baresJundiai)) {
    console.log(
      `O bar ${chave} fica localizano na ${valor.local} e possui uma nota de ${valor.nota};`
    );
  }
}
percorrerObjeto3();