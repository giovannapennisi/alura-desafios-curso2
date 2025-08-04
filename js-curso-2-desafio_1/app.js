let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio.';

function verConsole(){
    console.log('O botão foi clicado.');
}

function verAlerta(){
    alert('Eu amo JS!');
}

function verPrompt(){
    let cidade = prompt('Digite uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function realizarSoma(){
    let n1 = parseInt(prompt('Digite o primeiro número: '));
    let n2 = parseInt(prompt('Digite o segundo número: '));
    let soma = n1 + n2;
    alert(`A soma de ${n1} + ${n2} é igual a ${soma}.`);
}