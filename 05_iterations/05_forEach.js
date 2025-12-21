const coding = ["js", "java", "html", "css", "c", "react", "springboot"]

// coding.forEach( function(val) {console.log(val)} );
// coding.forEach( (val) => {console.log(val)});

function printMe(item){console.log(item)}
// coding.forEach(printMe)


// for each me aur bhi parameters pass hote hai 
coding.forEach( (item, index, array) => {
    // console.log(item, index, array)
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "html",
        languageFileName: "html"
    },
    {
        languageName: "css",
        languageFileName: "css"
    },
    {
        languageName: "c",
        languageFileName: "c"
    }
];
myCoding.forEach( (item) => {
    // console.log(item.languageName)
    // console.log(item.languageFileName)
} );