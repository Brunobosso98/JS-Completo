// Função para selecionar
function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  // Função para esconder os botões
  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }

  // Função para mostrar os botões
  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }

  // Função para adicionar um eventListener
  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  // Função para adicionar uma classe
  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }

  // Função para remover uma classe
  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

//  Diz para a função de selecionar para selecionar (button)
const btns = $$("button");

console.log(btns.hide().show());

// Faz algo quando a função ON ativar
function handleClick(event) {
  console.log(event.target);
  btns.addClass("active");
}

// Adiciona o evento de CLICK na função de eventListener
btns.on("click", handleClick);
