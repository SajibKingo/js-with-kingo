// for each

const coding = ["js", "py", "cpp", "rb", "swift"]

coding.forEach( function (val) {
    //console.log(val); 
})

coding.forEach( (item) => {
    //console.log(item);
})

function printme(value){
    //console.log(value);
}
coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
    
})


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },

    {
        languageName: "python",
        languageFile: "py"
    },

    {
        languageName: "java",
        languageFile: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName, ":", item.languageFile);
    
})