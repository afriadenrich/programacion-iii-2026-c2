const z = require("zod");

const CursoCrear = z.object({
  nombre: z.string().min(3).max(20),
  cuatrimestre: z.number().int().min(1).max(4),
  idProfesor: z.number().int().min(1),
});

const crearCursoMW = (req, res, next) => {
  try {
    console.log("Validando body crear curso");

    req.body = CursoCrear.parse(req.body);

    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json(error.issues);
    }
  }
};

const atraparErrorMW = (err, req, res, next) => {
  console.log("Hubo un error", err);

  res.status(400).json({ mensaje: "ID Porfesor no válido" });
};

module.exports = { crearCursoMW, atraparErrorMW };
