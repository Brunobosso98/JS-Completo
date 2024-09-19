// Get é um valor estático, não da pra mudar
// Set você seta um novo valor

const button = {
  get tamanho() {
    return this._numero || 50;
  },
  set tamanho(numero) {
    this._numero = numero;
  },
};

// Set pode ser usado tanto com get tanto com objeto
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = "Banana";
frutas.nova = "Morango";

//Set e CLASS
class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._element.type = type;
  }
}

const redButton = new Button("Comprar aqui", "red");
redButton._elementType = "div";
console.log(redButton.element);
