console.clear();
const prompt = require('prompt-sync')();

let nome = prompt ('Digite seu nome : ');
let senha = prompt ('Digite sua senha : ');

 while (nome == senha); {
    console.log ('Seu nome de usuario e senha não podem ser os mesmos');
    let nome = prompt ('digite outro nome');
    let senha = prompt ('digite outra senha');
}