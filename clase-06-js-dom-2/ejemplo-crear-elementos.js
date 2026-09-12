/*
HTML

  <div id="lista" style="background-color: #fff; height: 100px">
      <!-- Vacío -->
    </div>
    <div id="caja" style="background-color: #f00; height: 100px">
      <!-- Vacío -->
    </div>

*/
// ============================================================================
// Crear un párrafo dentro de #lista con DOM
/*

<div id="lista">
    <p>Hola mundo</p>
</div> 

*/
// 1. Crearlo
const parrafo = document.createElement("p");
// 2. Configurarlo
parrafo.textContent = "Hola mundo";
// 3. UBICARLO en el DOCUMENTO. NO COPIA, NO CLONA
lista.appendChild(parrafo);
// 4. REUBICAR ?
document.getElementById("caja").appendChild(parrafo);

// 4. REUBICAR
lista.insertAdjacentElement("afterbegin", parrafo);

lista.insertAdjacentHTML("beforeend", "<p>Hola mundo con HTML</p>"); // No lo usamos :p

// NO por motivos de seguridad. Hace que nuestro código sea vulnerable a inyección de scripts
// lista.innerHTML = "<p id='hola'>Hola mundo</p>";

// ============================================================================
