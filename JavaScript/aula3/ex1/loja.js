/*Faça uma função de nome calcularValorCompra que irá receber três parâmetros. 
O primeiro será um número que representa o valor de uma compra. 
O segundo parâmetro é um boolean que representa se o usuário possui ou não convênio com o estabelecimento e o último parâmetro representa se
a compra está sendo feita ou não com o cartão da loja.

Desconto de 15%

Se a pessoa que estiver fazendo a compra possuir o cartão da loja e possui convênio

Desconto de 10%

Se o usuário possuir convênio ou estiver fazendo a compra pelo cartão da loja

Sem Desconto

Caso o usuário não tenha nenhum desses benefícios não existe desconto para a compra
*/

function calcularValorCompra( valorC, convenio, cardLoja) {
    
    if (convenio == true && cardLoja == true) {
        /*desconto*/
        desconto1 = valorC * 0.15
        totalCompra = valorC - desconto1
        console.log ['com seu desconto p total a pagar é: ' + totalCompra]
    } else if (convenio == true || cardLoja == true) {
        /*desconto pouco */
        desconto2 = valorC * 0.10
        totalCompra = valorC - desconto2
        console.log ['com seu desconto o total a pagar é: ' + totalCompra]
    } else {
        /* paga tudo pobre */
        console.log ['total a pagar: ' + totalCompra]
    }
}