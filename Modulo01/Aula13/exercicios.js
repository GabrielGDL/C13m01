console.clear();
const prompt = require('prompt-sync')();

let quantidade = +prompt('Quantos funcionários serão cadastrados?');
let listafuncionarios = [];

for( let i =0; i <quantidade; i++){
    let funcionario = {
        nome:'',
        cargo:'',
        salario:''
    }

    funcionario.nome = prompt('Qual o nome do(a) funcionário(a)?');
    funcionario.cargo = prompt('Qual é o cargo?');
    funcionario.salario = prompt('Qual é o salário?');

    listafuncionarios.push(funcionario);
    
    console.log(funcionario);
    console.log();
}

