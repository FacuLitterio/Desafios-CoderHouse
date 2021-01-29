# Desafios CoderHouse - Programación Backend
Recopilación de todos los desafíos resueltos en la camada de Programación Backend de CoderHouse

> ### Clase 05: Nuestro Primer Servidor en NodeJS

Desarrollar un servidor en node.js que con cada requerimiento devuelva como resultado un objeto con las siguientes características:

```
{
    id: (número aleatorio entre 1 y 10),
    title: "Producto " + (número aleatorio entre 1 y 10),
    price: (número aleatorio entre 0.00 y 9999.99),
    thumbnail: "Foto " + (número aleatorio entre 1 y 10)
}
```

1. Serializar el objeto (con JSON.stringify()) antes de enviarlo al frontend
2. El servidor debe estar creado en una cuenta no anónima para que su código sea persistente luego de los 5 días de creado.
