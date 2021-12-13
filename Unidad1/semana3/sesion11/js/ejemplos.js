// DECLARACIÓN DE VARIABLES
// Declaración de variables
var edad = "2";
console.log(typeof(edad));

// Inicialización de variables
edad = 18;

// Se pueden declarar e inicializar variables en una sola línea 
var mensaje = "Hola Mundo!";
mensaje;

// TIPOS DE DATOS PRIMITIVOS
// Undefined
var nota_ciencias;
typeof nota_ciencias;

// Boolean
var esAdulto = true;
typeof(esAdulto);


// Number
var precio_unitario = 100.5;
typeof(precio_unitario);

// String
var estrofa = "Nuestras vidas son los ríos"
    + "\nque van a dar al mar,"
    + "\nque es el morir;"
    + "\nallí van los señoríos"
    + "\nderechos a se acabar"
    + "\ne consumir;"
    + "\nallí los ríos caudales,"
    + "\nallí los otros medianos"
    + "\ne más chicos;"
    + "\ni llegados, son iguales"
    + "\nlos que viven por sus manos"
    + "\ne los ricos.";
estrofa; // Mencionar el uso de \n para agregar saltos de línea en JS
typeof estrofa;

// EXTRA: Métodos útiles para manejo de String
console.log(estrofa.length);
console.log(estrofa.toUpperCase());
console.log(estrofa.toLowerCase());

var palabra = "Paralelepípedo";
console.log(palabra[2]);
console.log(palabra[0,4]);

var operacion = 2 + 6;
console.log(eval(operacion));


//Estas variables son de ejemplo
var perro=false;
console.log(typeof(perro));

var decimal = 2.5;
console.log(typeof(decimal));

var entero = 2;
console.log(typeof(entero));

var palabra = "Hola Mundo" + 
"\nComo estan";
console.log(typeof(palabra));
console.log(palabra);

//Esto es un comentario 
/*asdasdasd
asdasdasdasd
asdasdasdasda*/
/*Hola que TreeWalkerq haces xd:V*/ 