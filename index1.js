const fs =require('fs');
console.log("1")
function fileread(cb){
    fs.readFile("main.js","utf-8",(err,data)=>{
        cb(data);
    })
}
console.log("2")

function onDone(data){
    console.log(data)
}
console.log("3")
fileread(onDone);
console.log("4")