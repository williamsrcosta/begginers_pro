const filmes = [
    {
        nome: 'Avatar',
        ano: 2009,
        genero: 'Ficção científica'
    },
    {
        nome: 'Titanic',
        ano: 1997,
        genero: 'Romance/Drama'
    },
    {
        nome: 'Prenda-Me se For Capaz',
        ano: 2002,
        genero: 'Drama/Crime'
    },
    {
        nome: 'Django Livre',
        ano: 2012,
        genero: 'Ação/Aventura'
    },
    {
        nome: 'O procurado',
        ano: 2008,
        genero: 'Ação/Suspense'
    },
];

let sectionFilmes = document.createElement('section');
document.body.appendChild(sectionFilmes);

function listaFilmesForEach() {
    filmes.forEach(function (filme) {
        sectionFilmes.innerHTML += `
            <div>
                <h3>${filme.nome}</h3>
                <p>${filme.ano}</p>
                <p>${filme.genero}</p>
            </div>
        `;
    });
};

function listaFilmesFor() {
    for (let i = 0; i < filmes.length; i++) {
        sectionFilmes.innerHTML += `
            <div>
                <h3>${filmes[i].nome}</h3>
                <p>${filmes[i].ano}</p>
                <p>${filmes[i].genero}</p>
            </div>
        `;
    };
};

function listaFilmesForOf()  {
    for (filme of filmes) {
        sectionFilmes.innerHTML += `
            <div>
                <h3>${filme.nome}</h3>
                <p>${filme.ano}</p>
                <p>${filme.genero}</p>
            </div>
        `;
    };
};

function listaFilmesForIn() {
    for (i in filmes) {
        sectionFilmes.innerHTML += `
            <div>
                <h3>${filmes[i].nome}</h3>
                <p>${filmes[i].ano}</p>
                <p>${filmes[i].genero}</p>
            </div>
        `;
    };
};
