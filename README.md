# Desafios CoderHouse - Programación Backend

Recopilación de todos los desafíos resueltos en la camada de Programación Backend en NodeJS/ExpressJS de CoderHouse

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

> ### Clase 06: Manejo de Archivos

Implementar programa que contenga una clase llamada Archivo que reciba el nombre del archivo con el que va a trabajar e implemente los métodos leer, guardar, borrar.

Utilizar guardar para incorporar productos al archivo "productos.txt"
El formato de cada producto será :

```
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url de la foto)
}
```

La función guardar incorporará al producto un id, el cual se obtendrá de la longitud total del array actual más 1.
Con el método leer se mostrará en consola el listado total (si el archivo existe) como un array de productos. Si el archivo no existe, se retornará un array vacío.
El método borrar elimina el archivo completo.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async await y manejo de errores.

> ### Clase 07: Introduccion a ExpressJS

Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080:
-Ruta get '/items' que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }
-Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo 'productos.json'. El formato de respuesta será: { item: {producto} }
-La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 2. Contestar con el formato: { visitas : { items: cantidad, item: cantidad } }
