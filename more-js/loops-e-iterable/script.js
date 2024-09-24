// Iterable: são objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like

// for of: possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of.
const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

for (const fruta of frutas) {
  console.log(fruta);
}

// for (const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.style.color = "Blue";
}

console.log(...buttons);

// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
//   console.log(headers)
// );

// for in: este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

const carro = {
  marca: "Honda",
  ano: 2008,
};

for (const key in carro) {
  console.log(key, carro[key]);
}

for (const index in frutas) {
  console.log(index, frutas[index]);
}

// Chave e valor
const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

// Do e while (loop)

let i = 0;
do {
  console.log(i++);
} while (i <= 5);
