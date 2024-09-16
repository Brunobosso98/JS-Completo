fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((r) => r.json())
  .then((pokemon) => {
    console.log(pokemon);
  });

// Método POST, utilizado pelo backend
const url = "https://jsonplaceholder.typicode.com/posts/";
const option = {
  method: "POST",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, option)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

// GET
// Puxa informação, utilizado para pegar posts, usuários e etc.

// POST
// Utilizado para criar posts, usuários e etc.

// PUT
// Geralmente utilizado para atualizar informações.

// DELETE
// Deleta uma informação.

// HEAD
// Puxa apenas os headers.
