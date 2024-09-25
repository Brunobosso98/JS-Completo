// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

const frase = "JavaScript";
const regexp = /J/;
const novaFrase = frase.replace(regexp, "B");

console.log(novaFrase);

// Flag: g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

// Procura: Todo a
const regexp1 = /a/g;

"JavaScript".replace(regexp, "i");
// JiviScript

// Flag: i, informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

// Procura: Todo PE, Pe, pE e pe
const regexp2 = /Pe/gi;

"Perdeu perdido".replace(regexp, "Ba");
// Bardeu Bardido

//Character Class
//Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

// Procura: Todo a, A, i, I
const regexp3 = /[ai]/gi;

"JavaScript".replace(regexp, "u");
// JuvuScrupt

//Character Class e Especiais
//Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

// Procura: - ou .
const regexp4 = /[-.]/g;

"111.222-333-44".replace(regexp, "");
// 11122233344

//Um ou Outro
//Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexp5 = /Bra[sz]il/g;

"Brasil é com z: Brazil".replace(regexp, "Prazer");
// Prazer é com z: Prazer

//De A à Z
//O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

// Busca por itens de a à z
const regexp6 = /[a-z]/g;

"JavaScript é a linguagem.".replace(regexp, "0");
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
const regexp7 = /[a-zA-Z]/g;

"JavaScript é a linguagem.".replace(regexp, "1");
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;

"123.333.333-33".replace(regexpNumero, "X");
// XXX.XXX.XXX-XX

//Negar
//Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

// Procura: tudo que não estiver entre a e z
const regexp8 = /[^a-z]/g;

"Brasil é com z: Brazil".replace(regexp, " ");
// rasil   com z   razil
