const express = require("express");
const app = express();

//Productos Random
const Productos = require("./productos.json");

//Settings
app.set("PORT", process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Routes
app.get("/API/productos/", (req, res) => {
  res.status(201).json(Productos);
});

app.get("/API/productos/:id", (req, res) => {
  const { id } = req.params;
  const ProductoBuscado = Productos.filter((producto) => producto.id === id);

  if (ProductoBuscado) {
    res.status(201).json(ProductoBuscado);
  } else {
    res.status(500).json({ Mensaje: "Producto no encontrado" });
  }
});

app.post("/API/productos", (req, res) => {
  let id = Productos.length + 1;

  const NuevoProducto = {
    ...req.body,
    id: id,
  };

  res.status(201).json(NuevoProducto);
});

//Server Listening
app.listen(app.get("PORT"), () => console.log(`Server on Port ${app.get("PORT")}`));
