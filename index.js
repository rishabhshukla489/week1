const fs = require("fs")
fs.readFile("main.js","utf-8", (err,data)=>{
    console.log(data)
})

console.log("gi theres")

for(let i=0;i<10000000000;i++){
    i++;
}
console.log("complete")