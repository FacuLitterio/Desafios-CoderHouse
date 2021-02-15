const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const app = express();

//Settings
app.set("PORT", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", ".hbs");
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    partialsDir: path.join(app.get("views"), "Partials"),
    layoutsDir: path.join(app.get("views"), "Layouts"),
    defaultLayout: "main",
  })
);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/API/Products", require("./Routes/ProductsRoutes"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//Server Listening
app.listen(app.get("PORT"), () => console.log(`Server on Port ${app.get("PORT")}`));
