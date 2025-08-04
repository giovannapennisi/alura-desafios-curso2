function calcularIMC(altura, peso){
    let numIMC = (peso / (altura * altura));
    console.log(`O IMC é igual a: ${numIMC.toFixed(2)}.`);
}
calcularIMC(1.65, 60);

function calcularFatorial(numero){
    if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  let aux = 2;
  while(aux <= numero){
    fatorial *= aux;
    aux++;
  }
  return fatorial;
}
let numFat = calcularFatorial(4);
console.log(`O fatorial é: ${numFat}.`);

function converterDolarParaReal(valor){
    return valor * 4.80;
}
let dolar = 75;
let real = converterDolarParaReal(dolar);
console.log(`O valor de $${dolar} equivale a R$${real.toFixed(2)}.`)

function calcularAreaPerimetroRet(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`O valor da área é de ${area} metros quadrados.`);
    console.log(`O valor do perímetro é de ${perimetro} metros.`);

}
let altura = 5;
let largura = 10;
calcularAreaPerimetroRet(altura, largura);

function calcularAreaPerimetroCirc(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI *raio;
    
    console.log(`O valor da área é de ${area.toFixed(2)} metros quadrados.`);
    console.log(`O valor do perímetro é de ${perimetro.toFixed(2)} metros.`);

}
let raio = 5;
calcularAreaPerimetroCirc(raio);

function calcularTabuada(numero){
    let i = 1;
    let aux = numero;

    console.log(`A tabuada do número ${numero} é assim:`);
    while (i <= 10){
        numero = aux * i;
        console.log(`${aux} * ${i} = ${numero}`);
        i++;
    }
}
calcularTabuada(4);
