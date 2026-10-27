const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "img");
  },
  filename: (req, file, callback) => {
    const esImagen = file.mimetype.includes("image");

    if (!esImagen) {
      callback(new Error("No es imagen"));
      return;
    }

    const extension = file.mimetype.split("/")[1]; //     [image, png] "image/jpg"

    const nombreFinal = `${Date.now()}-perfil.${extension}`;

    callback(null, nombreFinal);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 } }); // Defino que guardo las imagenes en /img

module.exports = upload;
