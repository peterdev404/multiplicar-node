const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }

    if (!Number(limite)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }

    console.log("=============".green);
    console.log(`Tabla del  ${base}  `.green);
    console.log("=============".green);

    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
    }
  });
};

let crearArchivo = (base, limite = 10) => {
  let data = "";
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    let nombre = `tablas/tabla-${base}-al-${limite}.txt`;
    fs.writeFile(nombre, data, (err) => {
      if (err) reject(err);
      else resolve(nombre);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
