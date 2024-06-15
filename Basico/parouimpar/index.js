//includes ou imports
// instalar os pacotes antes exemplo: npm install readline-sync
let readline = require("readline-sync"); 
//variaveis
let num = 6;
//funçoes
function numeroPar(num){
    let retorno =  false;
    if(num%2==0) retorno = true;
    return retorno;
}

console.log("Programa que verifica se um numero e par ou impar");
num = parseInt(readline.question("Digite um numero: "));
if(numeroPar(num)==true){
    console.log("Numero Par");
} else {
    console.log("Numero Impar");
}
/*
if(num%2==0){
    console.log("Numero Par");
} else {
    console.log("Numero Impar");
}
*/