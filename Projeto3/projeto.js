console.clear();
const prompt = require('prompt-sync')();



console.log('Seu nome é Phil, você é um jornalista e metereologista  de uma grande emissora e há 4 anos você é enviado para cobrir o dia da marmota./nUm pequeno festival que celebra a crença regional de que as marmotas podem prever a duração do inverno.');
console.log();
console.log(`Você acorda no hotel e se prepara para cobrir o dia da marmota, são ${horas} do primero dia`);
console.log();



const personagem = "Phil"

let op11 = "Ir trabalhar"
let op12 = "ir para o café do hotel"
let op13 = "ir para o festival da marmota e conhecer a cidade, ao final do festival você retorna para o hotel e dorme"
let op21 = "Aprender a tocar piano"
let op22 = "Aprender frances"
let op23 = 'ir a biblioteca'
let op31 = "jantar com rita"
let op32 = "Andar pela cidade com rita, ir ao festival."


let opcoes = ['op11', 'op12', 'op13', 'op21', 'op22', 'op23', 'op3', 'op32'];





let duracaoDoFestival = {
    dEnd: function(dia){
        if(dia ==1){
            console.log(op11)
        }
        if(dia==1){
            console.log(op12)
        }
        if(dia==1){
            console.log(op13)
        }
        if(dia==2){
            console.log(op21)
        }
        if(dia==2){
            console.log(op22)
        }
        if(dia==2){
            console.log(op23)
        }
        if(dia==3){
           console.log(op31) 
        }
        if(dia==3){
            console.log(op32)
        }
    }
}


function primeirodia(op11, op12, op13) {
    let op = prompt(`Você acordou no primeiro dia do festival da marmota. Escolha entre ${op11} ou ${op12}`)
    if (op == `${op11}`) {
        console.log('Você foi trabalhar, algumas horas se passaram e depois você foi assistir o festival');

    } else (op == `${op12}`) {
        console.log(`Você decide que ainda está cedo para o trabalho e decide ao inves disso ir ao café do hotel e socializar. \nalgumas horas depois você vai para o trabalho`);
    

    }
}
primeirodia()

// calculaIMC: function(){
//     let imc = this.peso / (this.altura**2);
//     console.log(`O IMC de ${this.nome} é: ${imc}`);

//     if (imc <= 18.5){
//         console.log(`${this.nome} está um pouco magro(a)`);
//     } else if (imc <= 24.9){
//         console.log(`${this.nome} está com o peso ideal`);
//     } else if (imc <= 30){
//         console.log(`${this.nome} está um pouco acima do peso`);
//     } else if (imc > 30){
//         console.log(`${this.nome} está com obesidade`);       
//     }

//     return imc;
// },






let tempo = {
    dia: 1,
    horas: 7,
    periodo = ['manhã', 'tarde', 'noite']
}

function dormir() {
    if (tempo.horas > 20) {
        tempo.dia++;
        console.log(`Você acorda no quarto do hotel e é o dia ${dia}`);
    }

}

function passagemTempo (dia, horas, periodo) {
    tempo.dia += day
    tempo.horas += horas
}

while (tempo.horas > 24) {
    tempo.dia++;
    tempo.horas -= 24;
    if (tempo.horas < 24)
    break;
}



function rest() {
    if (tempo.horas > 18){
        
    }
}






















// while (true){
//     if (mainCharacter.cansaco <= 5){
//         mainCaracter.descansar();
//     }
// }







// function subtrair(num){
//     const listarandom = [5, 10, 15]
//     let numrandom = listarandom[Math.floor(Math.random() * listarandom.length)];

//     let total = num - numrandom
//     return total;
// }
// let fome = +prompt('Digite a fome atual: ')

// fome = subtrair(fome);

// console.log(fome);

// function escolhas(){
//     console.log(`Escolha a sua ação: 
//     1 - trabalhar,
//     2 -  ir a padaria
//     3 - estudar piano`);
//     let escolha = +prompt();
// }