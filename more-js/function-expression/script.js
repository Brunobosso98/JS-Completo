// Function Declaration
function somar(a, b) {
  return a + b;
}

// Function Expression
const somar1 = function (a, b) {
  return a + b;
};

// Arrow Function
const somar2 = (c, d) => c + d;

//
const instrumento = "Violao";

(function () {
  const instrumento = "Guitarra";
  console.log(instrumento);
})();
console.log(instrumento);
