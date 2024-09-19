// Extends: irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar(); // Acessa elementos da classe pai
    console.log("Acelerou demais");
  }
  empinar() {
    console.log("Moto empinou com ", this.rodas, " rodas");
  }
}

const honda = new Moto(2);
const civic = new Veiculo(4);

// Pode se escrever por cima de um método herdado

// Super e Constructor
// Deve ser utilizado super para puxar o elemento da classe pai
