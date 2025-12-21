/* 
Window object represents the open window in browser. 
It is browser's object and is automatically creater by the browser 
It  is a global with lots of proerties and methods 
*/

/* DOM = Document Object Model */
console.dir(window.document)        /* dir is used to print properties and methods of the object */
console.log(window.document)        /* tags dega bus */

console.log(document.body.childNodes)

// changing style
document.body.style.backgroundColor = "palegreen";
// changing text                    /* USED TO MAKE DYNAMIC CHANGES */
document.body.childNodes[3].innerText = "Document Object Model";