// THEN() O Callback deste método só será ativado quando a promise for resolvida.
const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve("Brunao");
    }, 1000);
  } else {
    reject(Error("Um erro deu ai mano"));
  }
});

const retorno = promesa
  .then((resolucao) => {
    console.log(resolucao);
    return "Teste";
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  //CATCH() adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
  //Também é possível passar direto no segundo argumento de then
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  // FINALLY(), ocorre sempre, sendo true ou false
  .finally(() => {
    console.log("Acabou");
  });

// PROMISE.ALL(), Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.
const login = new Promise((resolve1) => {
  setTimeout(() => {
    resolve1("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve1) => {
  setTimeout(() => {
    resolve1("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolucao1) => {
  console.log(resolucao1);
});

// PROMISE.RACE(), igual .ALL, porém terá a resposta da primeira promise resolvida
const login1 = new Promise((resolve1) => {
  setTimeout(() => {
    resolve1("Usuário Logado");
  }, 1000);
});

const dados1 = new Promise((resolve1) => {
  setTimeout(() => {
    resolve1("Dados Carregados");
  }, 800);
});

const carregouTudo1 = Promise.race([login1, dados1]);
carregouTudo1.then((resolucao1) => {
  console.log(resolucao1);
});
