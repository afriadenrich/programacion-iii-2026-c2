const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // lógica

    callback(null, "public");
  },
  filename: (req, file, callback) => {
    const esImagen = file.mimetype.includes("image");
    if (!esImagen) {
      callback(new Error("No es imagen"));
      return;
    }

    const extension = file.mimetype.split("/")[1];

    callback(null, `${req.body.email}.${extension}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 2 },
});

module.exports = upload;
