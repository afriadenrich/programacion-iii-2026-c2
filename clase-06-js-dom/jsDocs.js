// js DOCS es una sintaxis que lee mi visual a partir de comentarios la cuál me permite decirle al visual (o a alguien que lea mi código) qué tipo de dato es cada variable, qué retorna cada función o qué parámetros recibe cada función. Entre otras cosas relacionadas a documentar.

/**
 * @type { number }
 */
const numero;

/**
 * @type { string }
 */
const cadena;

/**
 * @type { Array }
 */
const array;

/**
 * @type { Object }
 */
const objeto;

/**
 * Esta función suma dos digitos, a y b.
 * @param {number} a
 * @param {number} b
 * @returns {number} es la súma de a + b
 */
function sumar(a, b) {
  return a + b;
}
