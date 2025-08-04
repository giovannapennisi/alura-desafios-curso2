function exibirSaudacao(){
    console.log('Olá, mundo!');
}
exibirSaudacao();


function exibirNome(nome){
    console.log(`Olá, ${nome}!`);
}
exibirNome('Giovanna');


function realizarDobro(numero){
    return numero * 2;
}
let numDobro = realizarDobro(3);
console.log(`O dobro é igual a ${numDobro}.`);


function realizarMedia(n1, n2, n3){
    return (n1 + n2 + n3)/3;
}
let media = realizarMedia(10, 8, 6);
console.log(`A média é igual a ${media}.`);

function verificarMaior(n1, n2){
    return n1 > n2 ? n1 : n2;
    //n1 é maior do que n2? se sim, retorne n1.
    // se nao, retorne n2.
}
let numMaior = verificarMaior(3, 5);
console.log(`O maior número encontrado foi ${numMaior}.`);

function realizarQuadrado(numero){
    return numero * numero;
}
let numQuadrado = realizarQuadrado(3);
console.log(`O quadrado desse número é igual a ${numQuadrado}.`);