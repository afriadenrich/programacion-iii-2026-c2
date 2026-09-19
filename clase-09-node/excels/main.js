// const XLSX = window.XLSX; innecesaria, la variable XLSX ya es global

document.getElementById("guardar").onclick = () => {
  var libro = XLSX.utils.book_new();

  var hoja = XLSX.utils.aoa_to_sheet([
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
  ]);

  XLSX.utils.book_append_sheet(libro, hoja, "DATOS");

  XLSX.writeFile(libro, "excel.xlsx");
};
