//Funcion que devuelve la parte entera de un numero aleatorio entre dos numeros dados.
module.exports = NumeroAleatorio = (Min, Max) =>
  Math.trunc(Math.random() * (Max - Min) + Min);
