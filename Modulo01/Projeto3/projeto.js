console.clear();
const prompt = require('prompt-sync')();



console.log('Seu nome é Phil, você é um jornalista e metereologista  de uma grande emissora e há 4 anos você é enviado para cobrir o dia da marmota./nUm pequeno festival que celebra a crença regional de que as marmotas podem prever a duração do inverno.');
console.log();
console.log(`Você acorda no hotel e se prepara para cobrir o dia da marmota, são 7 do primero dia`);
console.log();


let personagem = {
    nome: 'Phil',
    carisma: 10,
    inteligencia: 10,
    sanidade: 100,
    surto: 0,
    fome: 0,
    sano: true,



    aumentaSanidade: function(restaura){
        console.log(`Você sente um alivio imediato e restaura um pouco de sua sanidade. ${restaura} pontos de sanidade`);
        this.restaura += this.sanidade;
    },


    diminuiSanidade: function(dano){
        console.log(`Você tomou ${dano} de ''dano'' a sua sanidade!`);
        this.sanidade -= dano;
        if (this.sanidade <= 0){
            this.fimdejogo();
        }
    },

   

    
    exibirsan: function(){
        console.log('Sanidade:', this.sanidade);
    },

    fimdejogo: function(){
        console.log('O loop infinito te enloqueceu. A repetição incenssante do mesmo dia sem fim foi demais para seu psicológico ');
        this.sano = false;
    },







    insanidade: function(){
        if (this.surto >= 10 && this.surto < 40){
            this.sanidade -= 20;
            console.log('A repetição apesar de apresentar algumas curiosidades, é inegavelmente maçante e pesa em seu psicológico');
        }   else if (this.surto >= 40 && this.surto < 80){
            this.sanidade -=40;
            console.log('Os dias não mais parecem ter diferença e você está sendo esmagado pelo loop. Sua conexão com a realidade está tenua');
        }   else if (this.surto >= 80 ){
            this.sanidade -=80;
            console.log('O peso da repetição infinita está a ponto de te enloquecer! De alguma forma você deve achar uma saida ');
    
        }
    }
    




}



let tempo = {
    dia: 1,
    horas: 7,
    periodo : ['manhã', 'tarde', 'noite']
};


while (tempo.horas > 24) {
    tempo.dia++;
    tempo.horas -= 24;
    if (tempo.horas < 24)
    break;
};

let loop = 20;

function maxloop(){
    if (loop <= 0){
        return 0;
    }
};






let itinerario;


for (i = 0; i < 2; i++){
    itinerario = prompt('Você deseja ir trabalhar ou ir ao saguao do hotel? ').toLowerCase();
    console.log();

    while (!itinerario.includes(itinerario)){
        itinerario = prompt('Suas opções nesse primeiro dia de trabalho são limitadas, você precisa cobrir sua matéria ou comer no saguao do hotel antes: ');
    }   if (itinerario == 'trabalho'){
        tempo += 5;
        personagem.inteligencia += 5;
        personagem.carisma += 5;
        personagem.fome += 10;
        personagem.surto += 10;
        personagem.insanidade();
    }   else if (itinerario == 'saguão'){
        tempo += 3;
        personagem.fome -= 20;
        personagem.surto -= 10;
        personagem.carisma += 10;
        break;
    }
        personagem.insanidade(); 
        
    };


for (i = 0; i < 3; i++){
    itinerario = prompt('Você acorda no segundo dia e percebe que as coias estão iguais, e decide investigar. Deseja ir trabalhar, ir no saguao do hotel, ou it estudar piano');
    console.log();

    while (!itinerario.includes(itinerario)){
        itinerario = prompt('Suas opções se abrem mais agora, podendo fazer o mesmo mas com a estranheza da repetição. Ou experimentando coisas novas: escolha entre trabalhar, saguao do hotal ou estudar piano ');

        if (itinerario == 'trabalho'){
            tempo += 5;
            personagem.inteligencia += 5;
            personagem.carisma += 5;
            personagem.fome += 10;
            personagem.surto += 10;
            personagem.insanidade();
        } else if (itinerario == 'saguão'){
            tempo += 3;
            personagem.fome -= 20;
            personagem.surto -= 10;
            personagem.carisma += 10;
                break;
         } else if (itinerario == 'piano'){
             tempo += 3;
             personagem.fome += 20;
             personagem.surto -= 30;
             personagem.carisma += 10;
             personagem.inteligencia += 20;
         }
          




}


};
   
for (i = 0; i < 5; i++){
    itinerario = prompt('Você acorda no terceiro dia, não existem mais duvidas em relação a sua situação. Sua conduta a partir de então fica a se critério. \n Deseja ir trabalhar, ir no saguao do hotel, ir estudar piano, ver o festival ou tentar conhecer rita?');
    console.log();

    while (!itinerario.includes(itinerario)){
        itinerario = prompt('Você não sente mais necessidade alguma de seguir regras. Porém, ainda existe uma necessidade de planejar o que fazer. Escolha entre as opções te apresentadas. ');

        if (itinerario == 'trabalho'){
            tempo += 5;
            personagem.inteligencia += 5;
            personagem.carisma += 5;
            personagem.fome += 10;
            personagem.surto += 10;
            personagem.insanidade();
        }   else if (itinerario == 'saguão'){
            tempo += 3;
            personagem.fome -= 20;
            personagem.surto -= 10;
            personagem.carisma += 10;
                break;
        }    else if (itinerario == 'piano'){
             tempo += 3;
             personagem.fome += 20;
             personagem.surto -= 30;
             personagem.carisma += 10;
             personagem.inteligencia += 20;
        }   else if (itinerario == 'festival'){
            tempo += 6;
            personagem.fome -= 20;
            personagem.surto += 20;
            personagem.carisma += 10;
            personagem.inteligencia += 0;
        }    else if (itinerario == 'Rita'){
            tempo += 4;
            personagem.fome -= 0;
            personagem.surto -= 30;
            personagem.carisma += 20;
            personagem.inteligencia += 10;
        } 
          




}


};






while (sanidade <= 30){
    personagem.exibirstatus();

    console.log(`Escolha o que fazer em um momento de exaustão do Loop:
    1 - dormir ( +10 de sanidade )
    2 - comer desenfreadamente ( +10 de sanidade )
    3 - fazer aula de frances (+20 de surto)
    4 - fazer aula de piano ( +20 de surto )`);
    let escolha = +prompt();

    if (escolha == 1){
        personagem.aumentaSanidade(10);
        break;
    } else if (escolha == 2){
        personagem.aumentaSanidade(10);
    } else if (escolha == 3){
        personagem.aumentaSanidade(20);
    } else if (escolha == 4){
        personagem.aumentaSanidade(20);
    }
}




while(true){
    let primeiroDia = prompt('O que você deseja fazer ao acordar? Escolha trabalhar ou café ');
    if (primeiroDia == 'trabalhar') {
        console.log('Você foi trabalhar na matéria do dia da marmota, terminando o trabalho já é hora do festival e você vai até lá. Algumas horas de passaram ');
        console.log('Chegando no festival você encontra Rita, lá vocês socializam e se conhecem um pouco melhor. Sua disposições mudam um para o outro. Após você volta para o hotel e dorme');
        
        
    }   else if (primeiroDia == 'cafe') {
        console.log('Você decide que está cedo para ir trabalhar e resolve tomar um café,logo após se dirigir para o trabalho ');
        console.log('Ao termino da reportagem você vai para o festival e se encontra com Rita,\nvocês socializam e se conhecem um pouco melhor. Sua disposições mudam um para o outro. Após você volta para o hotel e dorme');
    }
        console.log('Começa o segundo dia e você percebe que as coisas não estão "normais", decidindo verificar melhor você decide fazer algo novo.\n escolha entre tocar piano, fazer aula de frances,ou ir a biblioteca');
    let segundoDia = prompt('piano, frances, biblioteca');
    if (segundoDia == 'piano ') {
        console.log('Você decide aprender piano, em partes por tédio emn partes para impressionar Rita. Algumas horas se passam e ainda é cedo');
    }   else if (segundoDia == 'frances ') {
        console.log('Começam as aulas de francês. É o primeiro dia e você ainda não faz ideia do que está fazendo, porém o processo é agradavel');
    }   else {
        console.log('Você decide ir a biblioteca, acreditando que seus dias estão se repetindo você aproveita para começar a ler tudo que está disponivel.');
    }
        console.log('É o terceiro dia. Agora você já percebe que os seus dias se repetem e que nada muda, a curiosidade inicial é seguida por desespero');
    let terceiroDia = prompt('jantar', 'Passear');
    if (terceiroDia == 'jantar') {
        console.log('Você janta com Rita. Apesar dos dias se repetirem você conseguiu criar um laço com ela em um periodo de apenas 24 horas.');
    }   else if(terceiroDia == 'Passear') {
        console.log('Você passea pelo centro da cidade com Rita, e visitam o parque para ver as esculturas de neve');
    }





};
   



















