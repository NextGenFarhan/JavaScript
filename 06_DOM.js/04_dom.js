// let div = document.querySelector("div");             // access karenge
// console.log(div);

// ATTRIBUTES

// // get attribute
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);
// // set attribute
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));    // class ki value me newClass aayega
// // Style
// div.style.backgroundColor = "palegreen";
// div.style.fontSize = "25px";
// div.innerText = "Hello! ";
// // div.style.visibility = "hidden";


// INSERT ELEMENT
let newBtn = document.createElement("button");    // naya element banayenge
newBtn.innerText = "click me";
console.log(newBtn);

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);
let name = document.createElement("h1")
name.innerText = "Farhan khan"

let div = document.querySelector("div");
div.append(newBtn);      // end pe add karne ko
div.prepend(name);       // start me add karne ko
div.before(name)         // div ke upar aajayega
div.after(name)          // div ke baahar aajayega bahar
div.remove(name)         // remove hojaayega