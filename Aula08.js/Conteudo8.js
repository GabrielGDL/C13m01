console.clear();
const prompt = require('prompt-sync')();

// || = OU, uma ou outra   && = SE, se uma ou outra

//let lista = ['A','B','C','D'];

//let i = 0;


// i = i + 1
//while (i < lista.length) {
 //   console.log('Repetiu');
//   i++
//}   

//console.log(lista[i]);

//let filmes = [];
//let quantidade = prompt('Quantos cadastros deseja realizar? ')


//while (filmes.length < quantidade){
//    let filmenovo = prompt('Digite um filme novo')
 //   filmes.push(filmenovo)
//}


//for ( let i = 0; i <5; i++){
//    console.log('Repetiu', i)
//}

//let filmesCadastrados = [];

// for ( let i = 0; i <5; i++){
//     novofilme = prompt('Digite o nome do filme: ');
//     while (filmesCadastrados.includes(novofilme)){
//         console.log('Filmes já cadastrados');
//         novofilme = prompt('Digite o nome do filme');
//     }

//         filmesCadastrados.push(novofilme);

// }

let numero = +prompt('Digite um numero : ')

for (let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i }`);
}


