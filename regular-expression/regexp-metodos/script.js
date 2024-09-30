// Regexp Constructor
const regexp = /\w+/gi;
const regexp1 = new RegExp("\\w+", "gi");

const frase = "JavaScript Linguagem 101";
console.log(frase.replace(regexp, "X"));

// Propriedades
regexp.flags; // 'gi'
regexp.global; // true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // '\w+'

// Métodos
// Regexp.test(), verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.
const regexp3 = /Java/g;
const frase1 = "JavaScript e Java";

regexp3.lastIndex; // 0
regexp3.test(frase); // true
regexp3.lastIndex; // 4
regexp3.test(frase); // true
regexp3.lastIndex; // 17
regexp3.test(frase); // false
regexp3.lastIndex; // 0
regexp3.test(frase); // true (Reinicia
regexp3.lastIndex; // 4

let i = 1;
while (regexp3.test(frase1)) {
  console.log(i++, regexp3.lastIndex);
}

// Exec(): diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.
const regexp4 = /\w{2,}/g;
const frase2 = "JavaScript, TypeScript e CoffeeScript";

console.log(regexp4.exec(frase2));
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
regexp4.exec(frase2);
// ["TypeScript", index: 12, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
regexp4.exec(frase2);
// ["CoffeeScript", index: 25, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
regexp4.exec(frase2);
// null
regexp4.exec(frase2); // Reinicia
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
let regexpResult;

while ((regexpResult = regexp4.exec(frase2)) !== null) {
  console.log(regexpResult);
}
