var inOut = 0;
function soma(n1, n2) {
    return n1 + n2;
}
function subtração(n1, n2) {
    return n1 - n2;
}
function multiplicação(n1, n2) {
    return n1 * n2;
}
function divisão(n1, n2) {
    return n1 / n2;
}
function potenciação(n1, n2) {
    return Math.pow(n1, n2);
}
function raiz(n1) {
    return Math.sqrt(n1);
}
function opcao() {
    var teclado = require("prompt-sync")();
    console.log(tabela);
    var opcao = parseFloat(teclado("Digite qual opera\u00E7\u00E3o deseja:  "));
    var n1 = parseFloat(teclado("Digite o primeiro n\u00FAmero:  "));
    var n2 = parseFloat(teclado("Digite o segundo n\u00FAmero:  "));
    switch (opcao) {
        case 1:
            console.log(soma(n1, n2));
            break;
        case 2:
            console.log(subtração(n1, n2));
            break;
        case 3:
            console.log(multiplicação(n1, n2));
            break;
        case 4:
            console.log(divisão(n1, n2));
            break;
        case 5:
            console.log(potenciação(n1, n2));
            break;
        case 6:
            console.log(raiz(n1));
            break;
        default: break;
    }
}
function tabela() {
    return "+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+\n            |       Qual opera\u00E7\u00E3o deseja?       |\n            |            1 --> Adi\u00E7\u00E3o           |\n            |            2 --> Subtra\u00E7\u00E3o        |\n            |            3 --> Multiplica\u00E7\u00E3o    |\n            |            4 --> Divis\u00E3o          |\n            |            5 --> Potencia\u00E7\u00E3o      |\n            |            6 --> raiz             |\n            +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+";
}
function sim() {
    console.clear();
    console.log(tabela());
    opcao();
    continuar();
}
function continuar() {
    var teclado = require("prompt-sync")();
    console.log("0 ---> Sair ");
    console.log("1 ---> Continuar");
    var inOut = parseFloat(teclado("Deseja continuar? "));
    switch (inOut) {
        case 1:
            console.log(sim());
            break;
        default: break;
    }
}
console.log(tabela());
opcao();
continuar();
