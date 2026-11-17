const bcrpyt = require("bcrypt");

function hashear(val) {
  const sal = bcrpyt.genSaltSync(14);
  const hash = bcrpyt.hashSync(val, sal);

  return hash;
}

function validar(val, hash) {
  return bcrpyt.compareSync(val, hash);
}

module.exports = { hashear, validar };
