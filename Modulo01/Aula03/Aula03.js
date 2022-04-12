console.clear()
const prompt = require('prompt-sync')();

let n1 = +prompt('informe o primeiro numero');
let n2 = +prompt('informe o segundo numero');
 if(n1>n2) {
     console.log(n1);
 } else if(n2>n1) {
     console.log(n2);
 } else {
    console.log(`Ambos são iguais com o valor de ${n1}`);
}