const pessoa = {
	nome: "Otávio",
	idade: 23,
	profissao: "Desenvolvedor"
};

console.log(pessoa);

Object.keys(pessoa).forEach(function(chave) { 
	delete pessoa[chave]
});

console.log(pessoa);