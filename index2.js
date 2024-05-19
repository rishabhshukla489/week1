const fs =require('fs');
console.log("1")
function fr(){
    return new Promise((resolve)=>{
        console.log(2)
        fs.readFile("main.js","utf-8",(err,data)=>{
            console.log(3)
            resolve(data)
        })
    })
}
console.log(4)
function onDone(data){
    console.log(4)
    console.log(data)
}
console.log(5)
var a=fr()
console.log(a);
a.then(onDone);

console.log(a);
console.log(6)