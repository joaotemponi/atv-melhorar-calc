let inOut: Number = 0
function soma(n1: number, n2: number): number {
    return n1 + n2
}
function subtração(n1: number, n2: number): number {
    return n1 - n2
}
function multiplicação(n1: number, n2: number): number {
    return n1 * n2
}
function divisão(n1: number, n2: number): number {
    return n1 / n2
}
function potenciação(n1: number, n2: number) {
    return n1 ** n2
}
function raiz(n1: number): number {
    return Math.sqrt(n1)
}
function opcao(): void {
    const teclado = require(`prompt-sync`)();
    console.log(tabela)
    let opcao: number = parseFloat(teclado(`Digite qual operação deseja:  `));
    let n1: number = parseFloat(teclado(`Digite o primeiro número:  `));
    let n2: number = parseFloat(teclado(`Digite o segundo número:  `));
    switch (opcao) {
        case 1: console.log(soma(n1, n2)); break;
        case 2: console.log(subtração(n1, n2)); break;
        case 3: console.log(multiplicação(n1, n2)); break;
        case 4: console.log(divisão(n1, n2)); break;
        case 5: console.log(potenciação(n1, n2)); break;
        case 6: console.log(raiz(n1)); break;
        default: break;
    }
}
function tabela(): string {
    return `+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+
            |       Qual operação deseja?       |
            |            1 --> Adição           |
            |            2 --> Subtração        |
            |            3 --> Multiplicação    |
            |            4 --> Divisão          |
            |            5 --> Potenciação      |
            |            6 --> raiz             |
            +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+`;
}
function sim(): void {
    console.clear();
    console.log(tabela());
    opcao();
    continuar();
}
function continuar(): void {
    const teclado = require(`prompt-sync`)();
    console.log(`0 ---> Sair `);
    console.log(`1 ---> Continuar`);
    let inOut: Number = parseFloat(teclado(`Deseja continuar? `));
    switch (inOut) {
        case 1: console.log(sim()); break;
        default: break;
    }
}
console.log(tabela());
opcao();
continuar();