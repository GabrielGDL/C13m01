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


// function calculatotal(quantidade,valor) {
//     let total = quantidade * valor;
//     console.log(`O valor total é ${total}`);
//     return total;
// }

// calculatotal(15, 3.50)


// let forcapika = 15;
// let forcasqu = 12;
// let vidapika = 80;
// let vidasqu = 60;

// let ataque = prompt('Escolha seu ataque: ');

// if (ataque ==1 ){
//     // Quando uma var chama uma função o que sera armazenado nela é o return
//     console.log('Você usou o choque do trovão: ');
//     vidasqu = vidasqu - forcapika;
//     console.log(`A vida do squir é ${vidasqu}`);
// }


// function meuataque(vidaOponente, forcaMeuPokemon){
//     vidaOponente = vidaOponente - forcaMeuPokemon;
//     console.log(`Você causou ${forcaMeuPokemon} de dano`);
//     console.log(`O oponente ficou com ${vidaOponente} de vida`)
//     return;
// }


// aspas duplas e simples
//console.log('Nós somos da turma: "C13" ');

//  OBJETO

// let pikachu = {forca: 15, vida: 80, ataques: ['choque do trovão', 'ataque']}


// MÉTODO
// Uma função dentro de uma propriedade

let pessoa = {
    nome: 'Pedra ',
    idade: 20,
    peso: 80,

    saudacao: function(){
        console.log('Olá! eu sou um método');
        console.log(`meu nome é ${this.nome}, eu tenho ${this.idade} anos e  peso ${this.peso} Kg` )
        
        
    },
    envelhecer: function(){
        this.idade++;
        
    }
}
console.log(pessoa.envelhecer);
console.log(pessoa);
console.log(pessoa.nome);
console.log();

// para chamar um método basta usar objeto.metodo()
pessoa.saudacao();



    

