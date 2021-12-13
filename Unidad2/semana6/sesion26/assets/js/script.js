/*
function suma(a, b) {
  resultado = a+b
  return resultado;  
}

let respuesta = suma(1,7);
alert(respuesta);
*/

/*
function resta(a, b) {
  r= a-b
  return r;  
}

let dato = resta(6,2);
alert(dato);
*/


/*
function producto(a, b) {
  r= a*b
  return r;  
}

let res = producto(6,2);
alert(res);

function division(a, b) {
  r= a/b
  return r;  
}

let valor = division(5,3);
alert(valor); 
*/
/*
//*****formas de hacer las funciones: funcion flecha
//----Función tradicional

function add(a){
  resultado = a + 100;
  return resultado;
}
alert(add(5));
*/

// ECMAScript 6
//----Función flecha: mismo resultado otra forma de hacer. Una forma más "moderna" de hacer
/*
let add = a => a + 100;
alert(add(5));

*/
// Otro ejemplo:
/*
const add = (x, y) => { return x + y };
console.log(add(3, 7));

//**************
*/
//mas ejemplos de funciones para hacer con las estudiantes:
//recordar que las funciones sólo devuelven un return.
/*
const medallas = function(puntaje){
  if (puntaje < 3) {
    return 'Bronce';
  }
  if (puntaje < 7) {
    return 'Plata';
  }
  return 'Oro';
};

alert(medallas(1));
*/
let emoji = ':D';
const greet =(name)=>{
  emoji =':)';
  const mygreet=()=>`Hola${name} ${emoji}`;
  return mygreet();
}
console.log(greet('Laboratoria'));