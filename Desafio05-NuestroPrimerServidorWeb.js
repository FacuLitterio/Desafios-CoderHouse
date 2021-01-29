const http = require("http");
const os = require("os");

//Función que me devuelve un numero Random
const NumeroAleatorio = (Min, Max) => Math.random() * (Max - Min) + Min;

//Puerto
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.setHeader({});

  //Objeto con numeros al azar
  let Object = {
    id: NumeroAleatorio(1, 20000),
    title: NumeroAleatorio(1, 9),
    price: NumeroAleatorio(10, 50),
    thumbnail: NumeroAleatorio(5, 10),
  };

  res.end(JSON.stringify(Object));
});

//Server Listening
server.listen(PORT, () => {
  console.log(`Server on Port ${PORT}`);
  console.log(os.platform());
});
