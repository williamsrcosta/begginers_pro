let arr = [ {
                nome: "Otávio"
            },
            {
                nome: "Lucas"
            },
            {
                nome: "Gabriel"
            }
          ]

const nomeResultado = arr.filter(function(pessoa) {

    return pessoa.nome == "Otávio"

});

console.log(nomeResultado)          

