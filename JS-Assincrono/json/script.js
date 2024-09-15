fetch("./dados.json").then((r) =>
  r.json().then((json) => {
    console.log(json);
    json.forEach((materia) => {
      console.log(materia.aula);
    });
  })
);

const configuraçoes = {
  player: "Google",
  tempo: 25.5,
  aula: "Aulao JS",
};

localStorage.config = JSON.stringify(configuraçoes);

const stringConfig = JSON.stringify(configuraçoes);
console.log(JSON.parse(localStorage.config));
