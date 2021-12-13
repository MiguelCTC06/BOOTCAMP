/*Metodos para seleccionar elementos del DOM(nodos de tipo 1)
document.getElementById() //Nodo del tipo elemento que coincida con el id indicado
document.getElementsByTagName() //Colección de elementos HTML
document.getElementsByClassName() //Colección de elementos HTML
document.querySelector() // Primer elemtno que cumpla la condición
document.querySelectorAll() //Todos los elementos que cumplan la condición */
var title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);

var linksList = document.getElementsByTagName("a");
console.log(linksList);
console.log(linksList[0]);
console.log(linksList[0].firstChild);

var itemsList = document.getElementsByClassName("item");
console.log(itemsList);
console.log(itemsList[4]);
console.log(itemsList[4].firstElementChild);
console.log(itemsList[4].firstElementChild.firstChild);

var titleQ = document.querySelector("#title");
console.log(titleQ);
console.log(titleQ.firstChild);

var navBar = document.querySelector("#navbar");
console.log(navBar);

var item = document.querySelector(".item");
console.log(item);

var listItem = document.querySelectorAll(".item");
console.log(listItem);


console.log(document.childNodes);