console.clear();
const prompt = require('prompt-sync')();



let num1 = 1
let num2 = 2

if (num1 > num2) {
    console.log('Não acontecerá')
} else if (num1 < num2) {
    console.log ('Deve acontecer')
} else { (num1 == num2) 
    console.log('Batata')
}










//npm i install prompt-sync

// // || = OU, uma ou outra   && = SE, se uma ou outra

// .pop() remove o ultimo elemento da lista
// .splice(1,2,X) remove elementos especificos na lista e na quantidade desejada
// 1 é a partir de que indice ira remover 
// 2 é a quantidade a ser removida
// X é o que sera adicionado



// i++ adiciona 1 a variavel


//let listaRemovidos = []
// listaRemovidos.push(lista.pop());


// .includes() = determina se um array contém um determinado elemento,
// e retorna True ou False caso tenha ou nao

// for (let exemplo = 0 ; exemplo < 4; exemplo++){
//    console.log('Funciona');
// }

//for ()



// let jogo = ['pedra', 'papel', 'tesoura'];
// let player = ''
// let computador = '';
// let escolha = false;
// console.log('JOKENPO');
// while (escolha == false){
//     player = prompt('Escolha "Pedra", "Papel" ou "Tesoura"]": ').toLowerCase();
//     if(player == 'pedra'  player == 'papel'  player == 'tesoura'){
//         escolha = true;
//     }
// console.log();
// }
// computador = jogo[Math.floor(Math.random() * jogo.length)];
// console.log(computador);
// console.log();
// if((player == 'pedra' && computador == 'tesoura')  (player == 'papel' && computador == 'pedra')  (player == 'tesoura' && computador == 'papel')) {
//     console.log('Você ganhou!!!');
// } else if (player == computador) {
//     console.log('Vocês empataram ¬¬');
// } else {
//     console.log('Você perdeu! :(')
//}