// Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.
const carro = {
  marca: "Honda",
  modelo: "Civic",
  rodas: 4,
};

const { rodas, marca, modelo } = carro;

console.log(modelo);

// Exemplo real
const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

//console.log(cliente.compras.digitais.livros);
//console.log(cliente.compras.digitais.videos);
const {
  fisicas,
  digitais,
  digitais: { livros, videos },
} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);

// Mudar nome das variáveis e valor inicial
const cliente1 = {
  nome: "Andre",
  compras: 10,
};

const { nome: nomeCliente, compras, email = "teste@gmail.com" } = cliente1;

console.log(email);

// Destructuring Arrays: colocar dentro de colchetes []
const frutas = ["Banana", "Uva", "Morango"];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira, quarta = "Mexerica"] = frutas;
console.log(frutas[3]);

// Declarando variáveis
const primeiro1 = "Item 1";
const segundo1 = "Item 2";
const terceiro1 = "Item 3";
// ou
const [primeiro2, segundo2, terceiro2] = ["Item 1", "Item 2", "Item 3"];

//
function handleKeyboard({ key, keyCode }) {
  console.log(key);
}

document.addEventListener("keyup", handleKeyboard);
