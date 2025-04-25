//importar as coisas em primeiro lugar....
let readlineSync = require('readline-sync');

console.log("Programa que calcula  media de matematica de um aluno");

//ler o numero da tabuada com o usuário
let num1 = Number(readlineSync.question('Informe a 1 nota: '));
let num2 = Number(readlineSync.question('Informe a 2 nota: '));

media = (num1 + num2)/2;

console.log(`1 Nota: ${num1} - 2 Nota:  ${num2} - Media: ${media}`);

if(media >= 5){
    console.log("Aluno aprovado");
}
else{
    console.log("Aluno reprovado");
}