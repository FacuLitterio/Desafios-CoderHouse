# Desafios CoderHouse - Programación Backend

Recopilación de todos los desafíos resueltos en la camada de Programación Backend en NodeJS/ExpressJS de CoderHouse

> ### Clase 05: Nuestro Primer Servidor en NodeJS
>
> Desarrollar un servidor en node.js que con cada requerimiento devuelva como resultado un objeto con las siguientes características:

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
>
> Implementar programa que contenga una clase llamada Archivo que reciba el nombre del archivo con el que va a trabajar e implemente los métodos leer, guardar, borrar.

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
