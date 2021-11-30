const pessoas = [
    {
        nome: "Otávio",
        idade: 23,
        gostos: ["Rave", "Comida mineira", "Suco de Laranja sem açúcar e sem gelo"]
    },
    {
        nome: "Lucas",
        idade: 23,
        gostos: ["iPhone 12", "Dexter", "Monitor Curvo 27' 240HZ"]
    },
    {
        nome: "Gabriel",
        idade: 18,
        gostos: ["Floripa forma", "identação", "João Dória"]
    },
    {
        nome: "Claudemir",
        idade: 38,
        gostos: ["Burguer King", "Alienware", "iFood"]
    }
];

pessoas.forEach(function (pessoa) {
    pessoa.gostos.forEach(function (gosto) {
        console.log(
            `Um dos gostos de ${pessoa.nome} é "${gosto}"`
        );
    });
});