const filmes = [

{
    nome : "Perdido en Marte",
    DataDeLançamento : 1/10/2015,
    Faturamento : "630,6 Milhões de dolares",
    nota : [9,10,9.5,10]
},

{
    nome : "Os caras malvados",
    DataDeLançamento : 17/3/2022,
    Faturamento : "250,6 Milhões de dolares",
    nota : [7,9,8,10]
},

{
    nome : "Os caras malvados 2",
    DataDeLançamento : 14/8/2025,
    Faturamento : "178 Milhões de dolares",
    nota : [9,9,8,10]
},
]

const notas = filmes.filter( filmes => filmes.nome.DataDeLançamento);