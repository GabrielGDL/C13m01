console.clear();
const prompt = require('prompt-sync')();



// 1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros)
// mostre no console a soma, subtração, multiplicação e divisão desses valores.

// function valores(num1, num2 ){
//    let mult = num1 * num2
//    console.log(`O valor é :${mult}`);  // console.log(`O valor é ${ num1 *num2 }`)
//    let soma = num1 + num2
//    console.log(`O valor é :${soma}`);  // console.log(`O valor é ${ num1 + num2 }`)
//    let div = num1 / num2
//    console.log(`O valor é :${div}`);
//    let sub = num1 - num2
//    console.log(`O valor é :${sub}`);
// }



// let valor1 = +prompt('Digite o numero : ');
// let valor2 = +prompt('Digite o segundo numero: ');
// valores(valor1, valor2); 


let idade = prompt('Digite a sua idade : ');
validanumero(idade);