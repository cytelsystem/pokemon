async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);


  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.


  let elemento = document.getElementById(`imagen-pokemon-${order}`)
  elemento.src = pokemonData.imagen

  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css

  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:

   const tiempoDeCarga = 5000;

  let hpElement = document.getElementById(`barra-hp-${order}`);
  let ataqueElement = document.getElementById(`barra-ataque-${order}`);
  let defensaElement = document.getElementById(`barra-defensa-${order}`);
  let velocidadElement = document.getElementById(`barra-velocidad-${order}`);


  function habilidades() {

    pokemonData.stats.forEach(elementos => {

      function barracolorear(elementoColorear) {
        if (elementos.amount < 35){
          elementoColorear.classList.add('rojo');
        } else if (elementos.amount >= 35 && elementos.amount < 70) {
          elementoColorear.classList.add('amarillo');
        } else if (elementos.amount > 70) {
          elementoColorear.classList.add('verde');
        }
      }


      if (elementos.name == "hp") {
        let habilidad = elementos.amount;
        animarBarra(hpElement, habilidad)
        barracolorear(hpElement)
      }
      if (elementos.name == "ataque") {
        let habilidad = elementos.amount;
        animarBarra(ataqueElement, habilidad)
        barracolorear(ataqueElement)
      }
      if (elementos.name == "defensa") {
        let habilidad = elementos.amount;
        animarBarra(defensaElement, habilidad)
        barracolorear(defensaElement)
      }
      if (elementos.name == "velocidad") {
        let habilidad = elementos.amount;
        animarBarra(velocidadElement, habilidad)
        barracolorear(velocidadElement)
      }

    })

  }

  habilidades()


  function animarBarra(elem, habilidad) {

    let width = 0;
    const progresoSobreTiempoTotal = tiempoDeCarga / 100;
    let id = setInterval(incrementarProgreso, progresoSobreTiempoTotal);

    function incrementarProgreso() {

      if (width >= habilidad) {
        clearInterval(id);
      } else {
        width++;

        elem.style.width = width + "%";
        elem.style.fontSize = '50%';
        elem.style.textAlign = "center";
        elem.innerHTML = width + "%";
      }
    }
  }

}



//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett", "caterpie", "wartortle", "metapod", "ekans"];


//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});
