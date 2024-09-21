// São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new.

function createButton(text) {
  const numeroSecreto = "sadhduah213";

  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({
    text: text,
    element: element,
  });
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

// Possibilidade de iniciar uma Factory Function ou Constructor Function sem a palavra chave NEW.
function Pessoa(nome) {
  if (!(this instanceof Pessoa))
    // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa("André");
s;
