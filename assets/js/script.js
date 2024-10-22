// Secciones del documento que reaccionarán al mouseenter
let seccion1 = document.querySelector("#first-div");
let seccion2 = document.querySelector("#second-div");
let seccion3 = document.querySelector("#third-div");

// Función generadora que consume la API
async function* getData(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${i}/`);
      const result = await response.json();
      yield result;
    } catch (error) {
      alert(`No se encontró el personaje con id ${i}`);
      console.log(error);
    }
  }
}

// Inicialización de la función generadora con los parámetros correspondientes a id's de personajes
const personaje_1_5 = getData(1, 5);
const personaje_6_10 = getData(6, 10);
const personaje_11_15 = getData(11, 15);

// Inicio funcionalidad de sección personajes 1 a 5 con mouseenter
let contador = 0;

seccion1.addEventListener("mouseenter", async () => {
  contador++;
  let respuesta = await personaje_1_5.next();
  if (respuesta.done) {
    return;
  }
  let html = `<div class="div_1_5" style="margin-left: ${
    contador == 1
      ? 66
      : contador == 2
      ? 78
      : contador == 3
      ? 90
      : contador == 4
      ? 102
      : 114
  }rem;">
        <p>${respuesta.value.name}</p>
        <small>Estatura: ${respuesta.value.height} cm, Peso: ${
    respuesta.value.mass
  } Kg</small>
    </div>`;
  document.querySelector(
    `#${
      contador == 1
        ? `uno`
        : contador == 2
        ? `dos`
        : contador == 3
        ? `tres`
        : contador == 4
        ? `cuatro`
        : `cinco`
    }`
  ).innerHTML = html;
});

// Inicio funcionalidad de sección personajes 6 a 10 con mouseenter
let contador2 = 0;

seccion2.addEventListener("mouseenter", async () => {
  contador2++;
  let respuesta = await personaje_6_10.next();
  if (respuesta.done) {
    return;
  }
  let html = `<div class="div_6_10" style="margin-left: ${
    contador2 == 1
      ? 66
      : contador2 == 2
      ? 78
      : contador2 == 3
      ? 90
      : contador2 == 4
      ? 102
      : 114
  }rem;">
          <p>${respuesta.value.name}</p>
          <small>Estatura: ${respuesta.value.height} cm, Peso: ${
    respuesta.value.mass
  } Kg</small>
      </div>`;
  document.querySelector(
    `#${
      contador2 == 1
        ? `seis`
        : contador2 == 2
        ? `siete`
        : contador2 == 3
        ? `ocho`
        : contador2 == 4
        ? `nueve`
        : `diez`
    }`
  ).innerHTML = html;
});

// Inicio funcionalidad de sección personajes 11 a 15 con mouseenter
let contador3 = 0;

seccion3.addEventListener("mouseenter", async () => {
  contador3++;
  let respuesta = await personaje_11_15.next();
  if (respuesta.done) {
    return;
  }
  let html = `<div class="div_11_15" style="margin-left: ${
    contador3 == 1
      ? 66
      : contador3 == 2
      ? 78
      : contador3 == 3
      ? 90
      : contador3 == 4
      ? 102
      : 114
  }rem;">
            <p>${respuesta.value.name}</p>
            <small>Estatura: ${respuesta.value.height} cm, Peso: ${
    respuesta.value.mass
  } Kg</small>
        </div>`;
  document.querySelector(
    `#${
      contador3 == 1
        ? `once`
        : contador3 == 2
        ? `doce`
        : contador3 == 3
        ? `trece`
        : contador3 == 4
        ? `catorce`
        : `quince`
    }`
  ).innerHTML = html;
});
