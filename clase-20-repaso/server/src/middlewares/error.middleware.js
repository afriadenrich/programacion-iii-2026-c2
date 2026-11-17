// 2 (req, res)
// 3 (req, res, next)
// 4 (err, req, res, next)

const z = require("zod");
const errorTraducido = require("../utils/zodTranslate");

z.config({
  customError: errorTraducido,
});

/**
 *
 * @param {*} err
 * @param {*} req
 * @param {Response} res
 * @param {*} next
 */
const errorMW = (err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    throw err;
  }

  if (err instanceof z.ZodError) {
    return res.status(400).json(err.issues);
  }

  return res.status(500).json({ mensaje: "Error desconocido" });
};

module.exports = errorMW;
