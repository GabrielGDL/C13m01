console.clear();
const prompt = require('prompt-sync')();

let pedra = 0;
let papel = 1;
let tesoura = 2;
let rodadas = [];

let escolhas = ['pedra', 'papel', 'tesoura'];

console.log(Math.floor(Math.random()*3));