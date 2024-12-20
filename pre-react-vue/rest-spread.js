// Rest
function showList(empresa, ...clients) {
  console.log(empresa);
  console.log(clients);
}

showList('CR Martins', 'Bruno', 'Carlos');

// Spread
const numeros = [1, 2, 3, 65, 12, 87, 0, 4];

console.log(Math.max(...numeros));

// Transformar em Array
const items = document.querySelectorAll('li');

[...items].map((item) => {
  console.log(item);
});

console.log(items);

// Clone
const carro = { cor: 'Azul', portas: 4, ano: 2020 };

const cloneCarro = { ...carro, turbo: true };

// Perde o protótipo ao clonar
class Transporte {
  constructor() {
    this.terrestre = true;
  }
  correr() {
    console.log('Andou');
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro1 = new Carro('vermelho', 4);

const cloneCarro1 = { ...carro1 };

console.log(carro);
console.log(cloneCarro1);
