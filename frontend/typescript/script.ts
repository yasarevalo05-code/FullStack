/*
---------------------- EJERCICIOS DE TYPESCRIPT --------------------------------- 
--------------------------- YASMIN AREVALO --------------------------------------
*/

// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
const nombre: string = "Yasmin";
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
const edad: number = 20;
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
const esEstudiante: boolean = true;
// Imprimir en consola el valor de cada variable usando console.log()
console.log("Mi nombre es:",nombre, "mi edad:",edad,"soy estudiente:", esEstudiante);




// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
function Sumar (a:number, b:number):number{
    return a + b;
};
console.log("5 + 6 = ", Sumar(5, 6));

// Realizar otra función que reste dos números.
function Restar (a:number, b:number):number{
    return a - b;
};
console.log("15 - 6 = ", Restar(15, 6));

// Realizar otra función que multiplique dos números.
function Multiplicar (a:number, b:number):number{
    return a * b;
};
console.log("5 * 6 = ", Multiplicar(5, 6));



// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
const  numeros: number[] = [1,2,3,4,5,6,7,8,9,10];

// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
let numeros2 = [1,2,3,4,5,6];
numeros2.forEach(num =>{
    console.log(num * 2);
});


// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
interface Persona{
    nombre: string;
    edad: number;
    esEstudiante: boolean;
};
// Crear tres objetos que sigan la estructura de la interfaz.
const persona1: Persona ={
    nombre: "Yasmin",
    edad: 20,
    esEstudiante: true
};
const persona2: Persona ={
    nombre: "Dylan",
    edad: 15,
    esEstudiante: true
};
const persona3: Persona ={
    nombre: "Gabriela",
    edad: 30,
    esEstudiante: false
};

// Imprimir en consola.
console.log("El nombre es:", persona1.nombre, "su edad:", persona1.edad, "es estudiante:", persona1.esEstudiante);
console.log("El nombre es:", persona2.nombre, "su edad:", persona2.edad, "es estudiante:", persona2.esEstudiante);
console.log("El nombre es:", persona3.nombre, "su edad:", persona3.edad, "es estudiante:", persona3.esEstudiante);


// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.
let mujer: string | number;
mujer = "Yasmin";
console.log("La variable mujer vale: ", mujer);
mujer = 20;
console.log("La variable mujer ahora vale: ", mujer);



// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
};
// Crear un array de "productos" con seis objetos que sigan la interfaz.
const productos: Producto[] = [{nombre:"Azúcar", precio:1000, enStock:true},
                            {nombre:"Pan", precio:2000, enStock:true},
                            {nombre:"Sal", precio:2100, enStock:false},
                            {nombre:"Leche", precio:2500, enStock:false},
                            {nombre:"Chocolatada", precio:3000, enStock:true},
                            {nombre:"Crema de Leche", precio:3800, enStock:false}];
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock).
function ProductosEnStock(productos:Producto[]): Producto[]{
    return productos.filter(productos => productos.enStock);
};
const disponibles = ProductosEnStock(productos);
console.log("Los productos disponibles son: ", disponibles);

// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock).
function ProductosNoEnStock(productos:Producto[]): Producto[]{
    return productos.filter(productos => !productos.enStock);
};
const nodisponibles = ProductosNoEnStock(productos);
console.log("Los productos que no estan disponibles son: ", nodisponibles);
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter



// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
interface Cliente {
    nombre: string;
    apellido: string;
    tel: number;
    esDeudor: boolean;
};
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
const clientes: Cliente[] = [{nombre:"Kevin", apellido:"Chipana",tel:3411111111, esDeudor:true},
                            {nombre:"Lautaro", apellido:"Perez",tel:3411111221, esDeudor:false},
                            {nombre:"Gonzalo", apellido:"Valor",tel:3411111771, esDeudor:true},
                            {nombre:"Dylan", apellido:"Arevalo",tel:3411789111, esDeudor:false},
                            {nombre:"Delfina", apellido:"Espindola",tel:3411119911, esDeudor:true},
                            {nombre:"Ana", apellido:"Espindola",tel:3411895111, esDeudor:false}];
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado).
function ClientesEsDeudor(clientes:Cliente[]): Cliente[]{
    return clientes.filter(clientes => clientes.esDeudor);
};
const deudor = ClientesEsDeudor(clientes);
console.log("Los clientes que son deudores son: ", deudor);

// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido).
function ClientesNoEsDeudor(clientes:Cliente[]): Cliente[]{
    return clientes.filter(clientes => !clientes.esDeudor);
};
const noDeudor = ClientesNoEsDeudor(clientes);
console.log("Los clientes que NO son deudores son: ", noDeudor);
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Ejercicio 8: Catálogo de Productos - forEach
// Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
let catalogo = [{nombre:"Remera",precio: 80},
                {nombre:"Campera",precio: 18},
                {nombre:"Buzo",precio: 30},
                {nombre:"Jean",precio: 28},
                {nombre:"Short",precio: 15},
                {nombre:"Calza",precio: 90}];
// Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
catalogo.forEach(item => {
    console.log(item);
});

// Ejercicio 9: Catálogo de Productos - filter
// Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Imprimor productosBaratos en la consola.
const productosBaratos = catalogo.filter(item => item.precio < 50);
console.log("Los items con precio mas baratos y valen menos de 50 son: ", productosBaratos);


// Ejercicio 10: Actualización de Inventario - map
// Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Imprimir catalogoConDescuento en la consola.

const catalogoConDescuento = catalogo.map(item => {
    return {
        nombre: item.nombre,
        precioOriginal: item.precio,
        precioConDescuento: item.precio * 0.9
    };
});

console.log("El catalogo con el descuento del 10%: ", catalogoConDescuento);

// Ejercicio 11: Búsqueda de Usuario - find
// Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
let usuarios = [{id: 1, nombre: "JM", activo: true},
                {id: 2, nombre: "JK", activo: false},
                {id: 3, nombre: "V", activo: true},
                {id: 4, nombre: "J", activo: false},
                {id: 5, nombre: "SG", activo: true},
                {id: 6, nombre: "JH", activo: false},
                {id: 7, nombre: "RM", activo: true}];
// Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const buscarUsuario = usuarios.find(usuario => usuario.id === 3);
// Imprimir en la consola el objeto del usuario encontrado.
console.log("El usuario con el id 3 es: ", buscarUsuario);


// Ejercicio 12: Contador de Usuarios Activos - filter y length
// Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
const usuariosActivos = usuarios.filter(usuario => usuario.activo);
// Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
console.log("Los usuarios Activos son:", usuariosActivos.length);



// Ejercicio 13: Actualización de Estado de Usuarios
// Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
usuarios.forEach(usuario => {
    usuario.activo = false;
});
// Imprimir el array usuarios para verificar que todos los usuarios están inactivos.
console.log("Cambio de estado a los usuarios de true a false:", usuarios);



// Ejercicio 14: Formateo de Productos para Mostrar - map
// Usar el array catalogo.
// Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
// Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Imprimir el array productosFormato en la consola.
const productosFormato = catalogo.map(item => 
    `Producto: ${item.nombre}, Precio: $${item.precio}`
);
console.log("Los items con el cambio de formato: ",productosFormato);



// Ejercicio 15:
// Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:


interface User {
    name: string;
    age: number;
    occupation: string;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];


function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}


console.log('Users:');
users.forEach(logPerson);


// Ejercicio 16:
// Vamos a volver a usar la interfaz User del ejercicio anterior.
// Crear una nueva interfaz Admin segun los datos que tenemos.
// Corregir el type Person para que acepte dos tipos: User y la nueva interfaz.
// Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores.

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


function logPerson1(person:Person) {
    console.log(` - ${person.name}, ${person.age}`);
}
persons.forEach(logPerson1);
