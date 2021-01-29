const fs = require("fs");

//Nombre del Archivo
const FILENAME = "./productos.txt";

class Archivo {
  constructor(Filename) {
    this._Filename = Filename;
  }

  //Leer Archivo
  leer = async () => await fs.promises.readFile(this._Filename, "utf-8");

  //Guardar Archivo
  guardar = async (newProduct) => {
    const Lectura = await this.leer();
    Lectura.push({ ...newProduct, id: Lectura.length + 1 });
    await fs.promises.writeFile(this._Filename, JSON.stringify(Lectura), "utf-8");
  };

  //Borrar Archivo
  borrar = async () => {
    await fs.promises.unlink(this._Filename);
    console.log(`The file ${this._Filename} was deleted successfully`);
  };
}

(async function () {
  //Instanciando un nuevo archivo
  const newFile = new Archivo(FILENAME);

  //Leyendo el Archivo
  const Lectura = await newFile.leer();
  console.log(Lectura);

  //Guardando un nuevo producto en el Archivo
  const newProduct = {
    title: "Testeando",
    price: 12.1,
    thumbnail: "https://www.test.com",
  };
  await newFile.guardar(newProduct);

  //Eliminando el Archivo
  //newFile.borrar();
})();
