console.clear();
const prompt = require('prompt-sync')();

let lista = ['pedra', 'papel', 'tesoura'];
let escolha = [];
let player = '';
let pc = [];
let pontosplayer = 0;
let pontospc = 0;
let empate = 0;
let rejogar = 0;
let escolhapc;

let ini


console.log('JOKENPO');




do {
    let partidas = +prompt('Quantas partidas iremos jogar?')
    for (let i = 0; i <= partidas; i++){
        while (escolhaplayer == false){
            escolhaplayer = prompt(`Escolha : ${lista[0]}, ${lista[1]}, ${lista[2]} : `).toLowerCase();
        } if (escolhaplayer == prompt(`Escolha : ${lista[0]}, ${lista[1]}, ${lista[2]} : `)) {
            escolhaplayer == true
        } console.log(escolhaplayer);
        escolhapc = lista[Math.floor(Math.random()*3)];
        console.log(escolhapc);
    } if (escolhapc == 'pedra' && escolhaplayer == 'tesoura'){
        console.log('Você Perdeu!');
        pontospc++
    } if (escolhapc == 'papel' && escolhaplayer == 'pedra'){
        console.log('Você Perdeu!');
        pontospc++
    } if (escolhapc == 'tesoura' && escolhaplayer == 'papel'){
        console.log('Você Perdeu!');
        pontospc++
    } if (escolhaplayer == 'pedra' && escolhapc == 'tesoura'){
        console.log('Você Ganhou!');
        pontosplayer++
    } if (escolhaplayer == 'papel' && escolhapc == 'pedra'){
        console.log('Você Ganhou!');
        pontosplayer++
    } if (escolhaplayer == 'tesoura' && escolhapc == 'papel'){
        console.log('Você Ganhou!');
        pontosplayer++
    }
}


    








// do {
//     let partidas = +prompt('Quantas partidas iremos jogar?')
//     for (let i = 1; i <= partidas; i++){
//         escolhaplayer = prompt(`Escolha : ${lista[0]}, ${lista[1]}, ${lista[2]} : `);
//        console.log(escolhaplayer);
//        escolhapc = lista[Math.floor(Math.random()*3)];
//        console.log(escolhapc);
//        if (escolhapc == 'pedra' && escolhajogador == 'tesoura'){
//         console.log('Você Perdeu!');
//         pontospc++
//         if (escolhapc == 'papel' && escolhajogador == 'pedra'){
//             console.log('Você Perdeu!')
//         pontospc++
//         if (escolhapc == 'tesoura' && escolhajogador == 'papel'){
//             console.log('Você Perdeu!');
//             pontospc++
//             if (escolhapc == escolhaplayer){
//                 console.log('Empatou!');
//                 empate++
//                 if (escolhapc == 'pedra' && escolhajogador == 'papel'){
//                     console.log('Você Ganhou!');
//                     pontosplayer++
//                     if (escolhapc == 'papel' && escolhajogador == 'tesoura'){
//                         console.log('Você Ganhou!');
//                         pontosplayer++
//                         if (escolhapc == 'tesoura' && escolhajogador == 'pedra'){
//                             console.log('Você Ganhou!');
//                             pontosplayer++
//                         }
//                     }
//                 }
                
//             }
//         }
//         }
//        }
//     }
     
     
     


    










//     if (escolhapc == 'pedra' && escolhajogador == 'tesoura'){
//         console.log('Você Perdeu!')
//         pontospc++ }
//         if 
    
// }

// for (let i = 1; i <= partidas; i++)





// escolha.push(escolhaplayer);

// while (escolha != 'pedra' && escolha != 'papel' && escolha != 'tesoura' ){
//     console.log('Por favor escolha uma opção válida');
//     escolhaplayer = prompt(`Escolha : ${lista[0]}, ${lista[1]}, ${lista[2]} : `);
   
// }





// pc.push(escolhapc);








// while (escolhaplayer == 'pedra' && escolhapc == 'papel') (escolhaplayer== 'papel' && escolhapc == 'tesoura')  (escolhaplayer == 'tesoura' && escolhapc == 'pedra') {
//     console.log('Você perdeu!');
//     pontospc++
//    if (escolhaplayer == 'pedra' && escolhapc == 'tesoura') (escolhaplayer == 'tesoura' && escolhapc == 'papel') (escolhaplayer == 'papel' && escolhapc == 'pedra') {
//        console.log('Você ganhou!');
//        pontosplayer++
//        if (escolhaplayer == 'pedra' && escolhapc == 'pedra') (escolhaplayer == 'tesoura' && escolhapc == 'tesoura') (escolhaplayer == 'papel' && escolhapc == 'papel') {
//            console.log('Empate!');
//        }
//     }
// }
 
 

