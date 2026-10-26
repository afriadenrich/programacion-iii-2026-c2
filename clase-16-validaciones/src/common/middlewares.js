const { default: z } = require("zod");

const validarID = (req, res, next) => {
  z.coerce.number().int().min(1).parse(req.params.id);

  next();
};

module.exports = { validarID };
