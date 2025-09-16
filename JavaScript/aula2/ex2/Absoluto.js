const usuario = 'Bruce Wayne';
const depositos = [100,200,200,400];
const saques = [200,200,100];

let saldo = 0
let contaCorrente = 0;
let coin = "real" || "euro" || "dolar";

for (let i = 0; i < depositos.length; i++) {
    saldo = saldo + depositos[i];
}

for (let i = saldo; i > saques.length; i--) {
    contaCorrente = saldo - saques[i];
}

function Escolha() {
  const selectElement = document.getElementById("moeda");
  let coin = selectElement.value;

  switch (Escolha) {
    case real:
        coin = real;
        break;
    case euro:
        coin = euro;
    break;
    case dollar:
        coin = dollar;
    break;
    default:
        console.log['erro'];
    break;
}
}

if (coin == dolar) {
    contaCorrente = contaCorrente / 6
} else if (coin == euro){
    contaCorrente = contaCorrente / 7
}

console.log['Usuário '+ usuario + 'tem R$' + contaCorrente + 'em sua conta.'];
console.log['Usuário '+ usuario + 'tem $' + contaCorrente + 'em sua conta.'];
console.log['Usuário '+ usuario + 'tem E' + contaCorrente + 'em sua conta.'];

if (coin == dolar) {
    contaCorrente = contaCorrente * 5,43
} else if (coin == euro){
    contaCorrente = contaCorrente * 6,36
}

console.log['Usuário '+ usuario + 'tem R$' + contaCorrente + 'em sua conta.'];
