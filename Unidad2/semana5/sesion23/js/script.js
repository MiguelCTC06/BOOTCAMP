

//explicar despacio y paso a paso este ejercicio sobre todo
/*var i = 0;
for (i; i < 10; i++) {
  alert(i);
  console.log(i);
}*/


//mismo resultado pero con una cambio:

//explicar despacio y paso a paso este ejercicio sobre todo
/*for (var i = 0; i < 10; i++) {
  alert(i)
}*/


/*
for (var a = 1; a <= 20; a++) {
  console.log(a);
}*/



/*
for (var a = 20; a >= 0; a--) {
  console.log(a);
}*/


/*
for (var a = 1; a <= 10;a+=2) {
  console.log(a);
}*/

/*
for (var i = 20;i >= 0;i-=2) {
  console.log(i);
}*/



var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//console.log(cars); //primero programamos y ejecutamos esto

var cantidad = cars.length;
console.log(cantidad);

//console.log(cantidad); //luego  programamos y ejecutamos esto

//como harian si debemos de mostrar el primer dato?
console.log(cars[0])
//el segundo dato?
console.log(cars[1])

//todos a la vez uno debajo de otro? Esto lo hace sólo el profesor y ellas observan
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])

//la forma más rapida de hacerlo es con un bucle del tipo for:
//al final programamos y ejecutamos esto para mostrar como obtener todos los datos
for (var i = 0; i < cantidad; i++) {
  console.log(cars[i]);
}




