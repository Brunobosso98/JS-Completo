export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const weekDays = funcionamento.dataset.semana.split(",").map(Number);
  const hourWeek = funcionamento.dataset.horario.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const timeNow = dateNow.getHours();

  const openWeek = weekDays.indexOf(dayNow) !== -1;
  const openHour = timeNow >= hourWeek[0] && timeNow < hourWeek[1];

  if (openHour && openWeek) {
    funcionamento.classList.add("aberto");
  }
}
