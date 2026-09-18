// VARIABLES

/** * @type {{ marcaInput: HTMLInputElement, modeloInput: HTMLInputElement, precioInput: HTMLInputElement }} */
const formInputs = {
  marcaInput: document.querySelector("input#marca"),
  modeloInput: document.getElementById("modelo"),
  precioInput: document.querySelector("input#precio"),
};

/** * @type { HTMLFormElement } */
const formElement = document.getElementById("crear");

/** * @type { HTMLButtonElement } */
const formButton = document.getElementById("crearBtn");

// EJECUCIONES DE ARRANQUE

formInputs.marcaInput.value = "Marca";
formInputs.modeloInput.value = "Normal";
formInputs.precioInput.value = 999;

// EVENTOS (También se crean cuando arranca, pero su contenido se ejecuta con los eventos)

//  Solo cuando Haya sido tocado el botón o el input sea tocado o modificado, y además sea invalido, que se ponga el borde rojo

formButton.onclick = (ev) => {
  // ¿Cómo transformo un type object en un iterable?
  for (const [clave, valor] of Object.entries(formInputs)) {
    mostrarValidaciones(valor);
  }
};

for (const [clave, valor] of Object.entries(formInputs)) {
  valor.onblur = (ev) => {
    mostrarValidaciones(valor);
  };

  valor.oninput = (ev) => {
    mostrarValidaciones(valor);
  };
}

formElement.onsubmit = (ev) => {
  ev.preventDefault();

  if (!formElement.checkValidity()) return;

  const auto = new Auto(
    formInputs.marcaInput.value,
    formInputs.modeloInput.value,
    formInputs.precioInput.value,
  );

  Auto.crear(auto);
};

// DESESTRUCTURAR VARIABLES
// const marcaInput = formInputs.marcaInput;
// const { marcaInput } = formInputs;

// FUNCIONES AUX
/** * @param {HTMLInputElement} inputEl */
function mostrarValidaciones(inputEl) {
  if (inputEl.checkValidity()) {
    inputEl.style.border = "#0F0 solid 1px";
    inputEl.style.outline = "#0F0";
  } else {
    inputEl.style.border = "#f00 solid 1px";
    inputEl.style.outline = "#f00";
  }
}
