const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

//Settings
app.set("PORT", process.env.PORT || 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/API/productos", require("./Routes/ProductsRoutes"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//Server Listening
app.listen(app.get("PORT"), () => console.log(`Server on Port ${app.get("PORT")}`));
