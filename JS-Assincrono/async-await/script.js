// Await, espera a resolução antes de continuar (resultado da promise)
//Para lidar com erros, utilizamos try e catch

async function puxarDados() {
  try {
    const responseDados = await fetch("./dados.json");
    const jsonDados = await responseDados.json();
    document.body.innerText = jsonDados.aula;

    console.log(jsonDados);
  } catch (erro) {
    console.log(erro);
  }
}

puxarDados();

// Iniciar Fetch ao Mesmo Tempo

async function puxarDados1() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados, jsonClientes);
}
puxarDados1();

// O resultado à frente do AWAIT deve ser uma promise

// acabou aparecerá primeiro
async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log("Depois de 1s"), 1000);
  console.log("acabou");
}
asyncSemPromise();

//acabou aparecerá depois de 1s
async function iniciarAsync() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Acabou");
      resolve();
    }, 1000);
  });
  console.log("Depois de 1s");
}
iniciarAsync();
