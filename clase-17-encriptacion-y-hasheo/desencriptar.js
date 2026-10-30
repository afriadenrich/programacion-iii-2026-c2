const crypto = require("node:crypto");

const CLAVE_SECRETA = "12345678901234567890123456789012"; // 32 caracteres

const contraseñaDelUsuario = "123asd123";

const IVguardado = "42F/6tyW17c=";
const encriptadoguardado = "HhoMxQIGA6Ci";

function desencriptar(contraseña, IVGuardado, encriptado) {
  const iv = Buffer.from(IVGuardado, "base64");

  console.log(iv);

  const desencriptador = crypto.createDecipheriv(
    "aes-256-gcm",
    CLAVE_SECRETA,
    iv,
  );

  const resultado = desencriptador.update(encriptado, "base64", "utf-8");

  console.log("Resultado: ", resultado);

  console.log("Coinciden?: ", resultado === contraseña);
}

function encriptar(contraseña) {
  const iv = Buffer.from(IVguardado, "base64");

  const encriptador = crypto.createCipheriv("aes-256-gcm", CLAVE_SECRETA, iv);

  const resultado = encriptador.update(contraseña, "utf-8", "base64");

  console.log(resultado === encriptadoguardado);
}

desencriptar(contraseñaDelUsuario, IVguardado, encriptadoguardado);
encriptar(contraseñaDelUsuario);
