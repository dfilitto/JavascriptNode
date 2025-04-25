//importar as coisas em primeiro lugar....
let readlineSync = require('readline-sync');

console.log("Programa que exibi uma tabuada");
let num = 0;

//ler o numero da tabuada com o usuário
num = readlineSync.question('Informe um numero: ');

//exibir a tabuada
for (let i = 0; i<11; i++){
    console.log(`${num} * ${i} = ${num*i}`);
}