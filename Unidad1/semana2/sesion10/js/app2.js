var title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);
console.log(typeof(toString(title.firstChild)));
console.log(typeof(parseInt(title.firstChild)));
console.log(parseInt(title.firstChild)+1);
var prueba = document.getElementById("title");
console.log(title);


var linksList = document.getElementsByTagName("a");
console.log(linksList);
console.log(linksList[0]);
console.log(linksList[0].firstChild);

var itemList = document.getElementsByClassName("item");
console.log(itemList);
console.log(itemList[4]);
console.log(itemList[4].firstElementChild);
console.log(itemList[4].firstElementChild.firstChild);

var navBar = document.querySelector("#navbar");
console.log(navBar);

var item = document.querySelector(".item");
console.log(item);

var listItem = document.querySelectorAll(".item");
console.log(listItem);
console.log(listItem[0].firstElementChild.firstChild);