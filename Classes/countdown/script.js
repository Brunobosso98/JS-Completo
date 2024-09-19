import Countdown from "./countdown.js";

const diasParaNatal = new Countdown("24 December 2024 23:59:59 GMT-0300");
const tempoParaAniversario = new Countdown(
  "23 November 2024 23:59:59 GMT-0300"
);

setInterval(() => {
  console.log(diasParaNatal.total);
}, 1000);
console.log(tempoParaAniversario.total);
