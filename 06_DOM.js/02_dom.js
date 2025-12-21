// // Get Elements  DOM MANIPULATION
// console.log(document.getElementById("hello"));
// console.log(document.getElementsByClassName("intro"));   // elements ***
// console.log(document.getElementsByTagName("span"))

// // QUERY SELECTOR   (returns node list)
// console.log(document.querySelectorAll("#hello"));   // to get first id
// console.log(document.querySelectorAll("#hello"));   // to get all the id
// console.log(document.querySelector(".intro"));      // to get first class
// console.log(document.querySelectorAll(".intro"));   // to get all the class
// console.log(document.querySelector("p"));           // to get the first p element
// console.log(document.querySelectorAll("p"));        // to get all the p elements

// // PROPERTIES
let intro = document.querySelector(".intro");
console.log(intro)   
// intro.tagName
// intro.innertext
// intro.innerHTML
// intro.textContent

let header = document.querySelector("div")     //pehla div dega
console.log(header)
// header.innerHTML
// header.innerText
header.innerHTML = "<div>Inner HTML </div>"