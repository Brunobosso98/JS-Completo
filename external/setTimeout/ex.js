// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const tela = document.querySelector("body");

// setInterval(() => {
//   tela.classList.toggle("active");
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
let comecar = document.querySelector(".comecar");
let parar = document.querySelector(".parar");
let cronometro;
let numero = document.querySelector("h1");
let i = 0;

function handleComecar() {
  cronometro = setInterval(() => {
    numero.innerText = i++;
  }, 1000);
  comecar.setAttribute("disabled", "");
}

function handleStop() {
  clearInterval(cronometro);
  comecar.removeAttribute("disabled");
}

function handleReset() {
  numero.innerText = 0;
  i = 0;
}

parar.addEventListener("click", handleStop);
comecar.addEventListener("click", handleComecar);
parar.addEventListener("dblclick", handleReset);
