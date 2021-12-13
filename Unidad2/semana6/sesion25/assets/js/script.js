/*
let number = 0;
while(number <= 5) {  
  console.log(number);
  number += 1; //explicar a las estudiantes que esta linea de lee de izquierda a derecha  
}
*/

//comentario de una linea

/*
comentario
de
varias 
lineas
*/

/*

//solucion reto 1
let number = 0;
while (number <= 100) {
  console.log(number);
  number += 2;
}
// → 0
// → 2
//   … etcetera hasta 100
*/
/*
//solucion reto 2
let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 1
// → 3
//   … etcetera hasta 11
8/
*/
/*
////solucion reto 3
let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 1;
}

// → 1
// → 2
//   … etcetera hasta 12
*/

/*
//recorriendo arreglos
const paises = ['peru', 'uruguay', 'chile','venezuela'];
let i = 0;
while (i < paises.length) {
  
  console.log(paises[i]);
  i = i+1;
}

*/
/*

let i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);

*/


//ejercicio de expresiones regulares
//const patron = /hola/;
//const patron = /hola[0-9]mundo/;
//const patron = /hola[0-9]+mundo/;
//const patron = /^hola$/;
//const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato));


