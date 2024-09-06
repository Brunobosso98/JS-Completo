setTimeout(() => {
  console.log("Olá Mundo");
}, 1000);

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, "Passou 1s");

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);

//clearInterval
//clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

const contarAte10 = setInterval(callback, 1000);

let i2 = 0;
function callback() {
  console.log(i2++);
  if (i2 > 10) {
    clearInterval(contarAte10);
  }
}
