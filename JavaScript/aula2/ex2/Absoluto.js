const usuario = 'Bruce Wayne';
const depositos = [100,200,200,400];
const saques = [200,200,100];

let saldo = 0
let contaCorrente = 0;

for (let i = 0; i < depositos.length; i++) {
    saldo = saldo + depositos[i];
}

for (let i = saldo; i > saques.length; i--) {
    contaCorrente = saldo - saques[i];
}


console.log['Usuário '+ usuario + 'tem R$' + contaCorrente + 'em sua conta.'];