class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName = () => `Nombre Completo: ${this.nombre} ${this.apellido}`;
  addMascota = (nuevaMascota) => this.mascotas.push(nuevaMascota);
  getMascotas = () => this.mascotas.length;
  addBook = (nombre, autor) => this.libros.push({ nombre, autor });
  getBooks = () => this.libros.map((libro) => libro.nombre);
}

let Libros = [
  { nombre: "El Señor de los Anillos", autor: "J. R. R. Tolkien" },
  { nombre: "Harry Potter", autor: "J. K. Rowling" },
];
let Mascotas = ["Perro", "Gato"];

const User = new Usuario("Facundo", "Litterio", Libros, Mascotas);
console.log(User.getFullName());
console.log(User.addMascota("Cocodrilo"));
console.log(User.getMascotas());
console.log(User.addBook("Titanic", "Ni idea"));
console.log(User.getBooks());
