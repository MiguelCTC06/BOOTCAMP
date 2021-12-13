
arr = [1, 2, 3];

arr.push(4);
console.log(arr);


arr.pop();
console.log(arr);


arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);


arr2 = [0,1,2,3,4,5,6,7,8];
console.log(arr2);
console.log(arr2.slice(0,3));
console.log(arr2);
// Método splice()
// Eliminar 0 elementos desde el índice 2 e insertar "drum"
myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum');
console.log(myFish);
// Eliminar 1 elemento desde el índice 3
myFish.splice(3, 1);
console.log(myFish);
// Eliminar 2 elementos desde el índice 0 e insertar "parrot", "anemone" y "blue"
myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(myFish);

// Aplicando lo aprendido 4
// Metodo concat
// Utilizando concat para unir dos arreglos
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// salida esperada: Array ["a", "b", "c", "d", "e", "f"]
// Utilizando concat para unir mas de dos arreglos
const array4 = ['a', 'b', 'c'];
const array5 = ['d', 'e', 'f'];
const array6 = ['g', 'h', 'i'];
const array7 = array4.concat(array5,array6);
console.log(array7);