const pessoa = {nome: "Otávio",
	            idade: 23,
	            profissao: "Desenvolvedor"
}

console.log(pessoa)

Object.keys(pessoa).forEach(function(chave) { 
    console.log('chave:'         + chave)
    console.log('pessoa[chave]:' + pessoa[chave])
	delete pessoa[chave]
});

console.log('pessoa: ' + pessoa)

