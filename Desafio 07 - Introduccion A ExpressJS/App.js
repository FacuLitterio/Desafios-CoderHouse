const express = require("express");
const Productos = require("./productos.json");
const RandomNumber = require("./RandomNumber");

const app = express();

let CantidadVisitasItems = 0;
let CantidadVisitasItem = 0;

//Settings
app.set("PORT", process.env.PORT || 8080);

//Rutas
app.get("/items", (req, res) => {
  CantidadVisitasItems++;
  res.json({ Items: Productos, Cantidad: Productos.length });
});

app.get("/item-random", (req, res) => {
  CantidadVisitasItem++;

  //Numero Aleatorio entre 1 y la cantidad de productos
  const Num = RandomNumber(1, Productos.length);
  res.json({ Item: Productos[Num] });
});

app.get("/visitas", (req, res) => {
  res.json({
    visitas: {
      items: CantidadVisitasItems,
      item: CantidadVisitasItem,
    },
  });
});

//Server Listening
app.listen(app.get("PORT"), () => console.log(`Server on Port ${app.get("PORT")}`));
