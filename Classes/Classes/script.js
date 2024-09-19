// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static createButton(text, background) {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const blueOptions = {
//   backgroudColor: "blue",
//   color: "white",
//   text: "Clique",
//   borderRadius: "4px",
// };

// const blueButton = new Button(blueOptions);
// console.log(blueButton.options);

// const blueButtonStatic = Button.createButton("Clique aqui", "blue");
// console.log(blueButtonStatic);

// Static
class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const elementButton = document.createElement("button");
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    elementButton.style.color = this.color;
    return elementButton;
  }
  static createBlue(text) {
    return new Button(text, "blue", "white");
  }
}

const blueButton = Button.createBlue("Clica pai");
