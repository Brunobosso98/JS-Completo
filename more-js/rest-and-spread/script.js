// Default parameter, é possível definirmos o valor de um parâmetro direto na declaração do mesmo

// Arguments: esse objeto contém todos os valores dos argumentos.
function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  console.log(argArray);
  return lado * totalLados;
}

console.log(perimetroForma(1));

// Parâmetro Rest: todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro. (Sempre no final, e retornará apenas argumentos não "utilizados")
function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}

anunciarGanhadores("Carro", "Pedro", "Marta", "Maria");

// Spread: distribui um item iterável (item por item de uma array por exemplo)
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Carne", "Frango", "Chocolate"];

console.log(...frutas, "Pizza", ...comidas);

// Spread argument
const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

// Transformando em array
const btns = document.querySelectorAll("button");
const botao = [...btns];
console.log(botao);

const frase = "Isso é JavaScript";
const fraseArray = [...frase];
console.log(fraseArray);
