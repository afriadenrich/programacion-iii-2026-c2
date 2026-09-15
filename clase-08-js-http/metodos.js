/**
 * Métodos HTTP: (son acciones)
 * GET -> TRAER información
 * POST -> CREAR
 * PUT -> MODIFICAR UN OBJETO ENTERO
 * PATCH -> MODIFICAR UNA PARTE
 * DELETE -> BORRAR
 * OPTIONS -> Obtener info (interno)
 */
const API_URL = "https://final-labo-3.vercel.app/";

const traerPorId = async (id) => {
  const res = await fetch(`${API_URL}${id}`, {
    method: "GET",
  });

  if (res.ok) {
    // 200 - 299
    const json = await res.json();

    if (json.error) {
      console.error("Falló la búsqueda");
    } else {
      console.log(json);
    }

    //
  } else {
    // 400 / 499 y 500 / 599
    console.error("Falló la búsqueda");
  }
};

traerPorId(90);

// CREAR
const autoACrear = {
  marca: "Todavia no renuncié",
  modelo: "2026",
  precio: 999999,
  fechaSalida: "2026-01-01",
};

async function crearAuto() {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(autoACrear), // TENGO QUE ENVIAR TEXTO
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  console.log(json);
}

// crearAuto();

// MODIFICAR -> PUT

// ELIMINAR -> DELETE -> NO PERMITE BODY
// /?id=90 o /90
