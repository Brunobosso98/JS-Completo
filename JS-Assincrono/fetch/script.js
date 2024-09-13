// REQUISIÇÃO HTTP
const doc = fetch("./doc.txt");

doc.then((resolucao) => {
  resolucao.text().then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
    console.log(body);
  });
});

// SEGUNDA ALTERNATIVA
// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     console.log(body);
//   });

// REQUISIÇÃO .JSON
const doc1 = fetch("https://viacep.com.br/ws/01001000/json/");

doc1.then((resolucao) => {
  resolucao.json().then((body) => {
    const conteudo = document.querySelector(".conteudo1");
    console.log(body);
    conteudo.innerText = body.logradouro;
  });
});

// TESTE COM CSS
const background = fetch("./style.css");

background.then((resolucao) => {
  resolucao.text().then((body) => {
    const conteudo = document.querySelector(".conteudo1");
    const style = document.createElement("style");
    style.innerHTML = body;
    console.log(style);
    conteudo.appendChild(style);
  });
});

const sobre = fetch("./sobre.html");
const div = document.createElement("div");

sobre
  .then((resolucao) => resolucao.text())
  .then((body) => {
    console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
    console.log(titulo);
  });
