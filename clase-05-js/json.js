// Qué es JSON?
// JavaScript Object Notation

const objteo = {
  clave: "valor",
  numero: 9,
  array: [1, 2, 3],
  mostrar: function () {
    console.log(this.clave);
  },
};

objteo.otraCosa = "otraCosa";

objteo.clave = "clave";

console.log(objteo);

objteo.mostrar();

const data = [
  { id: 1, nombre: "A", apellido: "F" },
  { id: 1, nombre: "A", apellido: "F" },
  { id: 1, nombre: "A", apellido: "F" },
  { id: 1, nombre: "A", apellido: "F" },
  { id: 1, nombre: "A", apellido: "F" },
];

console.log(JSON.stringify(objteo));

console.log(
  JSON.parse(
    '{"clave":"clave","numero":9,"array":[1,2,3],"otraCosa":"otraCosa"}',
  ),
);
