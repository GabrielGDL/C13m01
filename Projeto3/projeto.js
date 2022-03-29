console.clear();
const prompt = require('prompt-sync')();



while (true){
    if (mainCharacter.cansaco <= 5){
        mainCaracter.descansar();
    }
}







// function subtrair(num){
//     const listarandom = [5, 10, 15]
//     let numrandom = listarandom[Math.floor(Math.random() * listarandom.length)];

//     let total = num - numrandom
//     return total;
// }
// let fome = +prompt('Digite a fome atual: ')

// fome = subtrair(fome);

// console.log(fome);

function escolhas(){
    console.log(`Escolha a sua ação: 
    1 - trabalhar,
    2 -  ir a padaria
    3 - estudar piano`);
    let escolha = +prompt();
}