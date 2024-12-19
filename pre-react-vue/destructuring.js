// Without destructuring
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

document.documentElement.addEventListener('mousemove', handleMouseMove);

// With destructuring
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// Array destructuring
const frutas = ['Banana', 'Uva'];

const [frutas1, frutas2] = frutas;
console.log(frutas1, frutas2);
