# EXPORT 

## archivo.js

export const PI = 3.14;

export function calcular(a, b) {
    return a + b;
}

const ALGO = 123;

export ALGO;

export default const Swal = {};

### export:

{ PI, calcular, ALGO }

o 

Swal

## otroArchivo.js

import { ALGO, PI } from "archivo.js"
import Swal from "archivo.js"; // trae el por defecto

const nombre = objeto.nombre
const { nombre } = objeto