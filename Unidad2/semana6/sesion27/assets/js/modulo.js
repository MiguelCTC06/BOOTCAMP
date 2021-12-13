

/*
function areaCircunferencia(r){
    const pi = 3.14;
    area = pi*(r*r);
    return area    
}

let radio = prompt('Ingresa el valor del radio: ');
resultado = areaCircunferencia(radio);
console.log(resultado); 

*/

/*

let nota = prompt("Introduce tu nota: ");
if (nota <= 10) {
        alert("Te recomiendo estudiar un poco más.");
}else if (nota > 10) {
        alert("Aprobaste!");
}
*/



/*

//se usa "valor" para que ellas no crean que deberia de llamarse igual que "nota" al crear la funcion
function estadoEstudiante(valor){
  if (valor <= 10) {
          alert("Te recomiendo estudiar un poco más.");
  }else if (valor > 10) {
          alert("Aprobaste!");
  }
}
let nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota); 
*/
/*

function estadoEstudiante(valor){
  if(valor < 0){
    alert("Debes de ingresar una nota igual o superior a cero.")
  }else{
    if (valor <= 10) {
          alert("Te recomiendo estudiar un poco más.");
    }else if (valor > 10) {
          alert("Aprobaste!");
    }  
  }
}
let nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota); 
*/



/*
function estadoEstudiante(valor){      
      if(valor < 0){
      alert("Debes de ingresar una nota igual o superior a cero.")
      }else{
        if (valor <= 10) {
            alert("Te recomiendo estudiar un poco más.");
        }else if (valor > 10) {
            alert("Aprobaste!");
        }  
     }    
}

let nota;
do{
  nota = prompt("Introduce tu nota: ");
  estadoEstudiante(nota);   
}while(nota < 0); 


*/


//para validar si un valor es un número entero.
//Este método devuelve verdadero si el valor es del tipo Número y un entero (un número sin decimales). De lo contrario, devuelve falso.

//res = Number.isInteger(20);
//console.log(res); 

//let nota = 16; 
//let res = Number.isInteger(nota);
//console.log(res);

function estadoEstudiante(valor){      
  if(valor < 0){
  alert("Debes de ingresar una nota igual o superior a cero.")
  }else{
    if (valor <= 10) {
      if(Number.isInteger(valor)==false){
        alert("Coloca un numero entero");
        
      }else{
        alert("Te recomiendo estudiar un poco más.");
      }
        
    }else if (valor > 10) {
      if(Number.isInteger(valor)===false){
        alert("Coloca un numero entero");
         
      }else{
        alert("Aprobaste!")
      }
        console.log(Number.isInteger(valor))
    }  
 }    

 
}

export {estadoEstudiante};




