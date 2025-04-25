//importar as coisas em primeiro lugar....
let readlineSync = require('readline-sync');

console.log("Programa que soma dois numeros");

//ler o numero da tabuada com o usuário
let num1 = Number(readlineSync.question('Informe o 1 numero: '));
let num2 = Number(readlineSync.question('Informe o 2 numero: '));

total = num1 + num2;
console.log(`${num1} + ${num2} = ${total}`);
