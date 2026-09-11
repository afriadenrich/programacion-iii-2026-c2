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
   * @param {Auto} auto
   */
  static crear(auto) {
    console.log(auto);

    // Guardar en el Almacenamiento local -> local storage

    // cosnt autoString = `{'marca': ${auto.marca}, 'modelo': '${auto.modelo}`

    const autoString = JSON.stringify(auto);

    localStorage.setItem("AutoCreado", autoString);

    const autoGuardado = localStorage.getItem("AutoCreado");

    console.log(autoGuardado);
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
   */
  static listar() {
    throw new Error("Sin implementar");
  }
}
