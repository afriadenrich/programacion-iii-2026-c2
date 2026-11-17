// Docs de errorTraducido: https://zod.dev/error-customization
// Propiedades de cada tipo de error (code, origin, exact, inclusive, minimum, etc.): https://zod.dev/packages/core#issue-types

const tipoRecibido = (input) => {
  if (input === null) return "null";
  if (Array.isArray(input)) return "array";
  return typeof input;
};

// Propiedades del objeto `error` que Zod le pasa a esta función:
//   code      -> tipo de fallo: "invalid_type", "invalid_format", "too_small", "too_big", etc.
//   input     -> el valor que mandó el usuario (undefined si el campo no vino)
//   expected  -> el tipo que se esperaba: "string", "number", etc.
//   format    -> qué formato falló: "email", "url", etc.
//   origin    -> de qué tipo de dato es el límite:
//                "string" (largo del texto), "number", "array", "date", etc.
//                Sirve para distinguir "al menos 2 caracteres" de "mayor o igual a 18".
//   minimum   -> el valor mínimo configurado, ej: min(2) -> 2
//   maximum   -> el valor máximo configurado, ej: max(10) -> 10
//   inclusive -> si el límite incluye al valor:
//                min(18) -> true (18 es válido), gt(18) -> false (18 no es válido)
//   exact     -> true si se pidió un valor exacto,
//                ej: length(5) en vez de min(5) o max(5)

const errorTraducido = (error) => {
  console.log("error", error);
  switch (error.code) {
    // Tipo incorrecto o campo faltante
    case "invalid_type":
      if (error.input === undefined) {
        return "Este campo es requerido";
      }
      return `Se esperaba ${error.expected}, pero se recibió ${tipoRecibido(error.input)}`;

    // Formato inválido (email, url, etc.)
    case "invalid_format":
      if (error.format === "email") {
        return "El correo electrónico no es válido";
      }
      if (error.format === "url") {
        return "La URL no es válida";
      }
      return "Formato no válido";

    // Valor por debajo del mínimo (texto muy corto o número muy bajo)
    case "too_small":
      if (error.origin === "string") {
        return error.exact
          ? `Debe tener exactamente ${error.minimum} caracteres`
          : `Debe tener al menos ${error.minimum} caracteres`;
      }
      if (error.origin === "number") {
        return error.inclusive === false
          ? `Debe ser mayor a ${error.minimum}`
          : `Debe ser mayor o igual a ${error.minimum}`;
      }
      return `Demasiado corto (mínimo ${error.minimum})`;

    // Valor por encima del máximo (texto muy largo o número muy alto)
    case "too_big":
      if (error.origin === "string") {
        return error.exact
          ? `Debe tener exactamente ${error.maximum} caracteres`
          : `Debe tener como máximo ${error.maximum} caracteres`;
      }
      if (error.origin === "number") {
        return error.inclusive === false
          ? `Debe ser menor a ${error.maximum}`
          : `Debe ser menor o igual a ${error.maximum}`;
      }
      return `Demasiado largo (máximo ${error.maximum})`;

    case "not_multiple_of":
      return `El número enviado es ${error.input}, pero debe ser múltiplo de ${error.divisor}`;
      break;

    // Si no lo contemplamos, Zod usa su mensaje por defecto
    default:
      return undefined;
  }
};

module.exports = errorTraducido;
