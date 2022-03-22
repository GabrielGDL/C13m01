console.clear();
const prompt = require('prompt-sync')();

// let numero = +prompt('Digite 1:')
// while (true) {
//     console.log('It is true')

//    if (numero != 1) {
//         console.log('It is false');
//     }    break;
// } 

// nesse momento estou ensinando o pc a função 'tomarbanho'. Não foi executada ainda.

// function tomarbanho() {
//     console.log('Tirar a Roupa')
//     console.log('Abrir o chuveiro')
//     console.log('Se lavar')
//     console.log('Se enxaguar')
//     console.log('Fechar o chuveiro')
//     console.log('Se secar')
//     console.log('Colocar uma roupa')
    
// }

// //isso executa a função
// tomarbanho();

// let atividades = ['Jogou bola', 'andou de skate', 'Foi ao parque'];

// for (let i of atividades){
//     console.log(`O Oliver ${i}?`);

//     let resposta = prompt();
// }


// function calculototal(){
//     let quantidade = +prompt('Digite a quantidade: ');
//     let valor = +prompt('Digite o valor unitário: ');
//     let total = quantidade * valor;
//     console.log(`O valor total é ${total}`);
// }

//calculototal();


function calculatotal(quantidade,valor) {
    let total = quantidade * valor;
    console.log(`O valor total é ${total}`);
    return total;
}

calculatotal(15, 3.50)