// NO reversible. TRANSFORMAR. Si solo tengo el hash, no puedo obtener el valor original

// 123456 -> $2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW

// 123456 -> $2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW
const contraseñaDelUsuario = "123asd123";

const bcrypt = require("bcrypt");

const rondas = 16;
5;
console.time();

const sal = bcrypt.genSaltSync(rondas, "b"); // Aleatorio que toma tiempo en generar

console.log("SAL:", sal);

const hash = bcrypt.hashSync(contraseñaDelUsuario, sal);

console.log(hash);
console.timeEnd();

const validar = bcrypt.compareSync("123asd123", hash);

console.log(validar);
