// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll("li");

for (const classLi of lis) {
  classLi.classList.add("ativo");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const tudo in window) {
  console.log(tudo, window[tudo]);
}
