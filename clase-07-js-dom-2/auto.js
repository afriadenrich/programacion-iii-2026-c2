class Auto {
  marca;
  modelo;
  precio;

  /**
   * Crear un AUTO
   * @constructor
   * @param {string} marca
   * @param {string} modelo
   * @param {number} precio
   */
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  /**
   * Crea y guarda un auto
   * Guardar en el Almacenamiento local -> local storage
   * @param {Auto} auto
   */
  static crear(autoNuevo) {
    // Revisar si hay una lista
    const listaGuardadaString = localStorage.getItem("autos");

    // si hay lista
    if (listaGuardadaString) {
      const listaGuardada = JSON.parse(listaGuardadaString);

      // si hay lista
      if (Array.isArray(listaGuardada)) {
        // agrego a la lista y guardo de nuevo
        listaGuardada.push(autoNuevo);

        const nuevaListaString = JSON.stringify(listaGuardada);

        localStorage.setItem("autos", nuevaListaString);
        return;
      }
    }

    const autos = [];

    autos.push(autoNuevo);

    const autosArrayString = JSON.stringify(autos);
    localStorage.setItem("autos", autosArrayString);
  }

  /**
   * Edita y guarda un auto
   * @param {Auto} auto
   */
  static editar(auto) {
    throw new Error("Sin implementar");
  }

  /**
   * Trae los autos guardados y los lista
   * @returns { Auto[] }
   */
  static listar() {
    // Revisar si hay una lista
    const listaGuardadaString = localStorage.getItem("autos");

    // si hay lista
    if (listaGuardadaString) {
      const listaGuardada = JSON.parse(listaGuardadaString);

      if (Array.isArray(listaGuardada)) {
        return listaGuardada;
      }
    }

    return [];
  }
}

// GUARDAR
// JOSN.stringify(obj) -> string
// localStorage.set(clave, string)

// OBTENER
// localStorage.get(clave)
// JSON.parse(string) -> obj
