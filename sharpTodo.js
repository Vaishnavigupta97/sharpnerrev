// var header_title = document.getElementById("header-title");
// header_title.style.border = "1px solid black";

// var title = document.getElementsByClassName("title");
// title[0].style.color = "green"

// const listGroupItem = document.querySelectorAll(".list-group-item");
// // listGroupItem[1].style.backgroundColor = "green";
// // listGroupItem[2].style.visibility = "hidden";

// const abc = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");
// even[0].style.color = "green"
// for(let i = 0; i < abc.length; i++){
//     abc[i].style.backgroundColor = "green";
// }


// Traverse the DOM 
var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "red";
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

// Parent Element 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "red";
// console.log(itemList.parentElement.parentElement);

// childNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[0]);

//first child
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);

//nextSiblings
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);


//createElement
var newDiv = document.createElement("div");

//add class
newDiv.className = "hello";
//add id
newDiv.id = "hello1";
//add attribute
newDiv.setAttribute("title", "Hello Div");
//create Text Node
var newDivText = document.createTextNode("hello world")
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
console.log(newDiv);
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);