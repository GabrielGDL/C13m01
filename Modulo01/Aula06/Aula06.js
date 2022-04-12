console.clear();
const prompt = require('prompt-sync')();

let lista = [];
let numero;
let pares = [];
let impares = [];

while (lista.length < 20){
    numero = +prompt('Digite um número: ');
    lista.push(numero);
    
    if (numero % 2 ==0){
        pares.push(numero);
    }   else {
        impares.push(numero);
    }
}
   