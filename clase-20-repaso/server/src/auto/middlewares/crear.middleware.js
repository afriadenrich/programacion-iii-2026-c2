const z = require("zod");

const Validador = z.object({
  marca: z.string().min(3).max(25).toUpperCase(),
  modelo: z
    .string()
    .min(3)
    .max(25)
    .transform((modeloRecibido) => {
      const caracter = modeloRecibido.charAt(0).toUpperCase();

      const resultado = caracter.concat(modeloRecibido.slice(1));
      return resultado;
    }),
  precio: z.int32().min(1).nonnegative().multipleOf(5),
  fechaDeSalida: z.iso.date(),
});

const validarAutoCrear = (req, res, next) => {
  req.body = Validador.parse(req.body);

  next();
};

module.exports = validarAutoCrear;
