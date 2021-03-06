const { Router } = require("express");
const router = Router();

//Productos Random
const Productos = require("../productos.json");

router.get("/", (req, res) => {
  res.status(200).json(Productos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const ProductoBuscado = Productos.find((producto) => producto.id == id);

  if (ProductoBuscado) {
    res.status(200).json(ProductoBuscado);
  } else {
    res.status(500).json({ Mensaje: "Producto no encontrado" });
  }
});

//SOLO AGREGA PRODUCTOS EN MEMORIA
router.post("/", (req, res) => {
  let id = Productos.length + 1;

  const NuevoProducto = {
    ...req.body,
    id: id,
  };

  res.status(201).json([...Productos, NuevoProducto]);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, thumbnail } = req.body;

  if (id >= Productos.length) {
    res.status(500).json({ Mensaje: "Producto no encontrado" });
  }

  let newArray = Productos.filter((producto) => producto.id != id);
  let newProduct = {
    id,
    title,
    price,
    thumbnail,
  };

  res.status(201).json([...newArray, newProduct]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (id >= Productos.length) {
    res.status(500).json({ Mensaje: "Producto no encontrado" });
  }

  const newArray = Productos.filter((producto) => producto.id != id);

  res.status(200).json(newArray);
});

module.exports = router;
