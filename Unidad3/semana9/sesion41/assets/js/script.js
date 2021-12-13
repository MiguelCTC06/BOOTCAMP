// Aplicando lo aprendido 1
// Método indexOf
//El siguiente ejemplo usa indexof() para localizar valores en un array 
var array = [2, 9, 9];
a=array.indexOf(2);     
b=array.indexOf(7);     // Acá se busca el elemento 7, por lo tanto el elemento no se encontro en el arreglo, por ende el resultado de esa búsqueda es -1
c=array.indexOf(9, 2);  // Acá se busca el elemento 9 en el índice 2, por lo tanto el elemento se encontro en el índice 2
d=array.indexOf(2, -1); // Acá se busca el elemento 2 en el índice -1, por lo tanto el elemento no se encontro en el arreglo, por ende el resultado de esa búsqueda es -1
e=array.indexOf(2, -3); // Acá se busca el elemento 2 en el índice -3, por lo tanto el elemento se encontro en el índice 0
console.log(e);
// Aplicando lo aprendido 2
// Método lastIndexOf
// El siguiente ejemplo usa lastIndexOf para encontrar valores en un arreglo.
var array = [2, 5, 9, 2];
f=array.lastIndexOf(2);     // Acá se busca el elemento 2 en el arreglo, por lo tanto el elemento se encontro en el índice 3
g=array.lastIndexOf(7);     // Acá se busca el elemento 7 en el arreglo, por lo tanto el elemento no se encontro en el arreglo, por ende el resultado de esa búsqueda es -1
h=array.lastIndexOf(2, 3);  // 
i=array.lastIndexOf(2, 2);  // 
j=array.lastIndexOf(2, -2); //
k=array.lastIndexOf(2, -1); //
console.log(k);
// Aplicando lo aprendido 3
// Método includes
// Los siguientes ejemplos, muestra el resultado si el elemento a buscar es encontrado en el arreglo (Ese valor puede ser true para verdadero o false para falso)
l=[1, 2, 3].includes(2);     // 
m=[1, 2, 3].includes(4);     //
n=[1, 2, 3].includes(3, 3);  // 
ñ=[1, 2, 3].includes(3, -1); // 
o=[1, 2, NaN].includes(NaN); //
console.log(o);

// Aplicando lo aprendido 4
// Método find
// El siguiente ejemplo utiliza una función para buscar si hay algun numero primo dentro del array
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // 
console.log([4, 5, 8, 12].find(isPrime)); // 

// Aplicando lo aprendido 5
// Encontrar el índice de un número primo en un array
// El siguiente ejemplo encuentra el índice de un elemento en el array que sea número primo (o devuelve -1 si no hay ningún número primo).

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start < 1) {
            return false;
        } else {
            start++;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
console.log(7%2);

// Aplicando lo aprendido 6
// Filtrando todos los valores pequeños
// El siguiente ejemplo usa filter() para crear un array filtrado que excluye todos los elementos con valores inferiores a 10.

function esSuficientementeGrande(elemento) {
    return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]