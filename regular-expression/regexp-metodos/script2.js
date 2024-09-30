// Métodos de String

// Match(), pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.
const regexp = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase = "JavaScript, TypeScript e CoffeeScript";

console.log(frase.match(regexp));
// ['JavaScript', 'TypeScript', 'CoffeeScript']

console.log(frase.match(regexpSemG));
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]

// Split(), serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.
const frase1 = "JavaScript, TypeScript, CoffeeScript";

frase1.split(", ");
// ["JavaScript", "TypeScript", "CoffeeScript"]
frase1.split(/Script/g);
// ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.split(/(?<=<\/?)\w+/g).join("div");
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

// Replace(), é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.
const tags2 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags2.replace(/(?<=<\/?)\w+/g, "div");
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

// Captura, fazer uma referência ao grupo de captura dentro do argumento do replace. Então podemos utilizar $&, $1 e mais.
const tags3 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags3.replace(/<li/g, '$& class="ativo"');
// <ul>
//   <li class="ativo">Item 1</li>
//   <li class="ativo">Item 2</li>
// </ul>

// Grupos de captura.
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, "$1gmail.com");
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com

// Callback
const regexp2 = /(\w+)(@[\w]+)/g;
const emails1 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;

emails1.replace(regexp2, function (...args) {
  console.log(args);
  if (args[2] === "@homail") {
    return `${args[1]}@hotmail`;
  } else if (args[2] === "@ggmail") {
    return `${args[1]}@gmail`;
  } else if (args[2] === "@oulook") {
    return `${args[1]}@outlook`;
  } else {
    return "x";
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br
