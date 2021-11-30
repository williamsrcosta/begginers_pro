function Pessoa(nome, idade) { 

    let id = Math.random() * 10;

    this.nome = nome;
    this.idade = idade;
    this.id = id.toFixed(4).replace('.', '');
}

const lucao = new Pessoa("Lucas", 23);

Object.keys(lucao).forEach(function(prop) {
    if(prop != "id") {
        console.log(`${prop}: ${lucao[prop]}`);
    };
});