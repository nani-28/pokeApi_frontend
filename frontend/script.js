const container = document.getElementById("pokemon-container");

// Función principal
async function getPokemons() {
  try {
    // Llamada a la API (primeros 12 pokemons)
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    if (!response.ok) {
      throw new Error("Error en la petición: " + response.status);
    }

    const data = await response.json();

    // Obtener detalles de cada pokemon
    for (let pokemon of data.results) {
      const res = await fetch(pokemon.url);
      const pokeData = await res.json();

      // Crear card
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
        <h3>${pokeData.name.toUpperCase()}</h3>
        <p>Experiencia base: ${pokeData.base_experience}</p>
        <p>Altura: ${pokeData.height}</p>
      `;

      container.appendChild(card);
    }
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    console.error(error);
  }
}

getPokemons();
