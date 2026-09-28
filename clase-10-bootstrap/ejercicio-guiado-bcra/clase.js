const URL_BASE = "https://api.bcra.gob.ar/estadisticas/v4.0/monetarias";

// Qué mostrar en las tarjetas y en la tabla (el id sale de la lista del BCRA)
const indicadores = [
  { id: 1, titulo: "Reservas internacionales (millones)", icono: "bi-safe" },
  { id: 27, titulo: "Inflación mensual", icono: "bi-graph-up-arrow" },
  { id: 28, titulo: "Inflación interanual", icono: "bi-calendar3" },
  { id: 15, titulo: "Base monetaria (millones)", icono: "bi-cash-stack" },
  { id: 31, titulo: "Valor de la UVA", icono: "bi-house" },
  { id: 29, titulo: "Inflación esperada a 12 meses", icono: "bi-eye" },
];

const tasas = [
  { id: 7, nombre: "BADLAR de bancos privados" },
  { id: 8, nombre: "TM20 de bancos privados" },
  { id: 44, nombre: "TAMAR de bancos privados" },
  { id: 12, nombre: "Depósitos a 30 días" },
  { id: 13, nombre: "Adelantos en cuenta corriente" },
  { id: 14, nombre: "Préstamos personales" },
];

// Helper: 1518.7415 -> "1.518,74" (formato argentino)
function formatearNumero(numero) {
  return numero.toLocaleString("es-AR", { maximumFractionDigits: 2 });
}

// Helper: "2026-09-24" -> "24/09/2026" (la API manda año-mes-día)
function formatearFecha(fecha) {
  return fecha.split("-").reverse().join("/");
}

// Helper: le pone el símbolo según la unidad que trae la API ("En porcentaje", "En ARS", "En millones de USD"...)
// 22.5 -> "22,5 %"   1538.39 -> "$ 1.538,39"   49412 -> "US$ 49.412"
function formatearValor(variable) {
  const numero = formatearNumero(variable.ultValorInformado);
  const unidad = variable.unidadExpresion;

  if (unidad.includes("porcentaje")) return `${numero} %`;
  if (unidad.includes("USD")) return `US$ ${numero}`;
  if (unidad.includes("ARS")) return `$ ${numero}`;
  return numero;
}

// Trae las variables de la categoría "Principales Variables" (son pocas y sin filtro la API manda 1000)
// Las devuelve en un objeto, para buscar cada una por su id
async function obtenerVariables() {
  const respuesta = await fetch(`${URL_BASE}?categoria=Principales Variables`);
  const datos = await respuesta.json();
  console.log("Respuesta completa del BCRA:", datos);
  console.log("Cantidad de variables:", datos.results.length);

  const variables = {};
  datos.results.forEach((variable) => {
    variables[variable.idVariable] = variable;
  });
  console.log("Una variable (id 4, dólar minorista):", variables[4]);

  return variables;
}

// Completa los valores y fechas del dólar en el hero
function completarDolar(variables) {
  const minorista = variables[4];
  const mayorista = variables[5];

  document.getElementById("minorista-valor").textContent = formatearNumero(
    minorista.ultValorInformado,
  );
  document.getElementById("minorista-fecha").textContent = formatearFecha(
    minorista.ultFechaInformada,
  );
  document.getElementById("mayorista-valor").textContent = formatearNumero(
    mayorista.ultValorInformado,
  );
  document.getElementById("mayorista-fecha").textContent = formatearFecha(
    mayorista.ultFechaInformada,
  );
}

// Arma una tarjeta por cada indicador
function crearIndicadores(variables) {
  let html = "";

  indicadores.forEach((indicador) => {
    const variable = variables[indicador.id];
    html += `
      <div class="col">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title text-secondary"><i class="bi ${indicador.icono} me-2"></i>${indicador.titulo}</h5>
            <p class="display-6 fw-bold mb-0">${formatearValor(variable)}</p>
          </div>
          <div class="card-footer text-secondary small">Al ${formatearFecha(variable.ultFechaInformada)}</div>
        </div>
      </div>
    `;
  });

  document.getElementById("indicadores-lista").innerHTML = html;
}

// Arma una fila de la tabla por cada tasa
function crearTabla(variables) {
  let html = "";

  tasas.forEach((tasa) => {
    const variable = variables[tasa.id];
    html += `
      <tr>
        <td>${tasa.nombre}</td>
        <td class="text-end">${formatearValor(variable)}</td>
        <td class="text-end">${formatearFecha(variable.ultFechaInformada)}</td>
      </tr>
    `;
  });

  document.getElementById("tasas-cuerpo").innerHTML = html;
}

// Trae los últimos valores de una variable y los dibuja con Chart.js
async function crearGrafico(
  canvasId,
  tipo,
  idVariable,
  cantidad,
  color,
  formatoFecha,
) {
  const respuesta = await fetch(`${URL_BASE}/${idVariable}?limit=${cantidad}`);
  const datos = await respuesta.json();
  const detalle = datos.results[0].detalle;
  console.log(
    `Variable ${idVariable}, así llega (primero lo más nuevo):`,
    detalle[0].fecha,
    "...",
    detalle[detalle.length - 1].fecha,
  );

  // Chart.js dibuja en el orden del array, de izquierda a derecha.
  // Como la API manda lo más nuevo primero, hay que darlo vuelta (reverse).
  const puntos = detalle.reverse();
  console.log(
    `Variable ${idVariable}, después del reverse (primero lo más viejo):`,
    puntos[0].fecha,
    "...",
    puntos[puntos.length - 1].fecha,
  );

  return new Chart(document.getElementById(canvasId), {
    type: tipo,
    data: {
      labels: puntos.map((punto) =>
        new Date(punto.fecha + "T00:00").toLocaleDateString(
          "es-AR",
          formatoFecha,
        ),
      ),
      datasets: [
        {
          label: "Valor",
          data: puntos.map((punto) => punto.valor),
          borderColor: color,
          backgroundColor: color,
          tension: 0.3,
        },
      ],
    },
    options: {
      aspectRatio: window.innerWidth < 768 ? 1.2 : 1.6, // más alto en el celular
      plugins: { legend: { display: false } },
    },
  });
}

// Los dos botones cambian el mismo gráfico entre línea y barras (los datos son una serie en el tiempo, se pueden mostrar de las dos formas)
function conectarBotones(grafico, idBotonLinea, idBotonBarras) {
  const botonLinea = document.getElementById(idBotonLinea);
  const botonBarras = document.getElementById(idBotonBarras);

  botonLinea.addEventListener("click", () => {
    grafico.config.type = "line";
    grafico.update();
    botonLinea.classList.add("active");
    botonBarras.classList.remove("active");
  });

  botonBarras.addEventListener("click", () => {
    grafico.config.type = "bar";
    grafico.update();
    botonBarras.classList.add("active");
    botonLinea.classList.remove("active");
  });
}

async function iniciar() {
  try {
    const variables = await obtenerVariables();
    completarDolar(variables);
    crearIndicadores(variables);
    crearTabla(variables);

    const graficoDolar = await crearGrafico(
      "grafico-dolar",
      "line",
      5,
      30,
      "#0d6efd",
      { day: "numeric", month: "short" },
    );
    conectarBotones(graficoDolar, "dolar-linea", "dolar-barras");

    const graficoInflacion = await crearGrafico(
      "grafico-inflacion",
      "bar",
      27,
      12,
      "#dc3545",
      { month: "short", year: "2-digit" },
    );
    conectarBotones(graficoInflacion, "inflacion-linea", "inflacion-barras");
  } catch (error) {
    console.error("Algo falló:", error);
    document.getElementById("error").classList.remove("d-none");
  }
}

iniciar();
