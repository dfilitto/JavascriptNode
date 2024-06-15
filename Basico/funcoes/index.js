//exemplo com variáveis globais
function exibirMensagemGlobal(){
    console.log(msgGlobal);
}
//exemplo sem variavel global
function exibirMensagemLocal(msg){
    console.log(msg);
}
var msgGlobal = "Ola Mundo Global!!!!";
let msgLocal = "Ola Mundo Local!!!!";
exibirMensagemGlobal();
exibirMensagemLocal(msgLocal);
