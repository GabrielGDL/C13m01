console.clear();
const prompt = require('prompt-sync')();


// let per2 = prompt('Vocês tava no local do crime?');
// let per3 = prompt('Você tem um alibi para o dia e horário do crime?');
// let per4 = prompt('Você e a vitima tinham um histórico ?');
// let per5 = prompt('Esse carro filmado no dia do crime é seu?');

// let suspeita = 0;
// let resposta = prompt('Responda somente com sim ou nao');




// while (resposta != 'nao' && resposta != 'sim' ){

//     resposta = prompt('Responda somente com sim ou nao ')
//     if (resposta == 'sim') {
//         suspeita++ 
//     }    
    
// }




//  let per1 = prompt('Essas digitais são suas? ');
//  if (per1 == 'sim'){
//      suspeita++
//     console.log('nod')
//  } else if (per1 == 'nao'){
//      console.log('Uhum')
//  }

//  let per2 = prompt('Vocês tava no local do crime?');
//  if (per2 == 'sim'){
//      suspeita++
//      console.log('Certo')
//  }  else if (per2 == 'nao'){
//      console.log('entendo')
//  }

//  let per3 = prompt('É o seu veiculo filmado nas proximidades?');
//  if (per3 == 'sim'){
//      suspeita++
//      console.log('OK')
//  }  else if (per3 == 'nao'){
//      console.log('Vamos prosseguir')
//  }

//  let per4 = prompt('Você e a vitima tinham um histórico?');
//  if (per4 == 'sim'){
//      suspeita++
//      console.log('OK')
//  }  else if (per4 == 'nao'){
//      console.log('Vamos prosseguir')
//  }


//  let per5 = prompt('Você é familiar com a região?');
//  if (per5 == 'sim'){
//      suspeita++
//      console.log('OK')
//  }  else if (per5 == 'nao'){
//      console.log('Vamos prosseguir')
//  }


//  if (suspeita >= 4){
//      console.log('Sabemos que você é culpado, confesse que será mais fácil');
//  }  else if (suspeita == 3){
//      console.log('Você é nosso principal suspeito');
//  }  else if (suspeita <=2){
//      console.log('Você é inocente')
//  }




let suspeita = 0
let resposta = prompt('Responde com sim ou não ')

while (resposta != 'sim' && resposta != 'nao'){
   resposta = prompt('Por favor responda apenas com sim ou não ')
   if (resposta == 'sim'){
       suspeita++
   }
}




 let ask1 = prompt('Hoje é terça feira? ');
 if (ask1 == 'sim'){
     suspeita++
    console.log('nod')
 } else if (ask1 == 'nao'){
     console.log('Uhum')
 }

 let ask2 = prompt('Está chovendo?  ');
 if (ask2 == 'sim'){
     suspeita++
    console.log('nod')
 } else if (ask2 == 'nao'){
     console.log('Uhum')
 }

 let ask3 = prompt('É noite? ');
 if (ask3 == 'sim'){
     suspeita++
    console.log('nod')
 } else if (ask3 == 'nao'){
     console.log('Uhum')
 }

 let ask4 = prompt('Você está fora de casa? ');
 if (ask4 == 'sim'){
     suspeita++
    console.log('nod')
 } else if (ask4 == 'nao'){
     console.log('Uhum')
 }

 let ask5 = prompt('Está calor? ');
 if (ask5 == 'sim'){
     suspeita++
    console.log('nod')
 } else if (ask5 == 'nao'){
     console.log('Uhum')
 }


 if (suspeita >= 4){
     console.log('Sabemos que você é culpado, confesse que será mais fácil');
 }  else if (suspeita == 3){
     console.log('Você é nosso principal suspeito');
 }  else if (suspeita <=2){
     console.log('Você é inocente')
 }

