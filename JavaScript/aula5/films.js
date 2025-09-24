const filmes = [

    {
        nome: "Perdido en Marte",
        DataDeLançamento: 1_10_2015,
        Faturamento: "630,6 Milhões de dolares",
        nota: [9, 10, 9.5, 10],
        genero: ["ficção cientifica"]
    },

    {
        nome: "Os caras malvados",
        DataDeLançamento: 17_3_2022,
        Faturamento: "250,6 Milhões de dolares",
        nota: [7, 9, 8, 10],
        genero: ["Animação"]
    },

    {
        nome: "Os caras malvados 2",
        DataDeLançamento: 14_8_2025,
        Faturamento: "178 Milhões de dolares",
        nota: [9, 9, 8, 10],
        genero: ["Animação"]
    },

    {
        nome: "Como Treinar seu Dragão",
        DataDeLançamento: 12_6_2025,
        Faturamento: "632,1 Milhões de dolares",
        nota: [9, 9, 8, 10],
        genero: ["Fantasia", "live action"]
    }

]

/*function listaFilms(){
const filme = filmes.forEach(filme, index => {
    filme[index] = {
        Nome : filme.nome,
        datadelancamento : filme.DataDeLançamento,}
    })
};*/

//1

function listaFilms() {
    const filmeLista = [];

    filmes.forEach((filme, index) => {

        filmeLista[index] = {
            nome: filme.nome,
            datadelancamento: filme.DataDeLançamento
        };
    });

    return filmeLista;

}

console.log(listaFilms());

//2

function two() {
    const filmetwo = [];

    filmes.forEach((filme,index) => {

        filmetwo[index] = {
            nome : filme.nome,
            id : index +1,
        };
    })

    return filmetwo;
}

console.log(two());

//3

const fantasy = filmes.filter( filme => filme.genero = "Fantasia");

console.log(fantasy);