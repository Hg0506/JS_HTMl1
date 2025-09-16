let nome = 'Henrique';
const anoNascimento = 2006;
let idadeAtual = 2025 - anoNascimento;

if (anoNascimento < 18) {
    console.log('Usuário ${nome} não autorizado para fazer a compra')
} else {
    console.log('Usuário ${nome} autorizado a fazer a compra')
}