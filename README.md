# Desafios CoderHouse - Programación Backend

Recopilación de todos los desafíos resueltos en la camada de Programación Backend en NodeJS/ExpressJS de CoderHouse

## Clase 01: Principios de Programación en JS y ES6+

1. Declarar una función constructora llamada Usuario que reciba: nombre (string), apellido (string), libros (array de objetos) y mascotas (array de strings).
   Implementar las propiedades instancia desde los valores recibidos como argumento y los siguientes métodos en su prototipo:
   -getFullName: debe retornar un string con el nombre y apellido del usuario. (utilizar template string).
   -addMascota: debe agregar una mascota (mascota) al arreglo de mascotas del usuario. no debe retornar nada.
   -getMascotas: debe retornar la cantidad de mascotas que tiene el usuario.
   -addBook: recibe un string 'book' y un string 'autor' y debe agregar un objeto: { nombre: book, autor: autor} al arreglo de libros del usuario. No debe retornar nada.  
   -getBooks: debe retornar un arreglo con sólo los nombres del arreglo de libros del usuario.  
   Crear un objeto llamado usuario a partir de la función constructora, con valores que permitan probar todos sus métodos. Hacer el test completo empleando la consola del navegador.

2. Realizar todo lo anterior utilizando el constructor class de ES6

## Clase 05: Nuestro Primer Servidor en NodeJS

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

## Clase 06: Manejo de Archivos

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

## Clase 07: Introduccion a ExpressJS

Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080:
-Ruta get '/items' que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }
-Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo 'productos.json'. El formato de respuesta será: { item: {producto} }
-La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 2. Contestar con el formato: { visitas : { items: cantidad, item: cantidad } }

## Clase 08: ExpressJS Avanzado

Realizar un proyecto de servidor basado en node.js que permita listar e incorporar ítems dentro de un array de productos en memoria.

Cada producto estará representado por un objeto con el siguiente formato:

```
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url al logo o foto del producto)
}
```

1. Implementar las rutas get y post en conjunto con las funciones necesarias.
2. Cada ítem almacenado dispondrá de un id proporcionado por el backend, que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que ve a ser listado en forma individual.
   Las rutas propuestas serían las siguientes:
   A. Listar en forma total (get) : '/api/productos' -> devuelve array de productos
   B. Listar en forma individual (get) (por id): '/api/productos/:id' -> devuelve producto listado
   C. Almacenar un producto (post) : '/api/productos/' -> devuelve producto incorporado
