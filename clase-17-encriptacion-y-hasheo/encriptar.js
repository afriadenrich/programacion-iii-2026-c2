// Encriptación "Es reversible" busca ser matemáticamente imposible de revertir. Requiere una contraseña privada
// Hashing != Encriptar

// Ocultar la información

const crypto = require("crypto");

// const paquetesDeNode = require("node:nombre")

// Algoritmo de encriptación
// AES -> Advanced Encryption Standard
// GCM (Galois/Counter Mode)
// CCM (Counter with CBC-MAC)
// GCM y CCM son similares porque vienen de algoritmos similares
// OCB (OCB Authenticated Encryption) -> pensado para mensajes

// IV -> Vector de inclinación

const CLAVE_SECRETA = "12345678901234567890123456789012"; // 32 caracteres

const contraseñaDelUsuario = "123asd123";

function encriptar(contraseña) {
  console.time();
  const iv = crypto.randomBytes(8);

  const encriptador = crypto.createCipheriv("aes-256-gcm", CLAVE_SECRETA, iv);

  const resultado = encriptador.update(contraseña, "utf-8", "base64");

  console.log(iv.toString("base64"), resultado);
  console.timeEnd();
}

// PassOriginal + IV + PassServidor + Algoritmo ==> ENCRIPTADO

encriptar(contraseñaDelUsuario);
