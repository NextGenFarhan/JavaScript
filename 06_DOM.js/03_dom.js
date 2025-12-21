// append anything to the heading 
let appended = document.querySelector("#hello");
console.dir(appended.innerText);
appended.innerText = appended.innerText + " This is the program to understand DOM"


// create 3 divs with same class ad change the inneretxt of it'
let  divs = document.querySelectorAll(".exer");
// divs[0].innerText = " value 1"
// divs[1].innerText = " value 2"
// divs[2].innerText = " value 3"
// OR
let idx = 1;
for (const div of divs) {      // naya div banaye of divs object
    div.innerText = `value ${idx}`;
    idx++;
}