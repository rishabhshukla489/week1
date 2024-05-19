function rf(){
    return new Promise((cb)=>{
       cb("hi")
    })
}
console.log(2)
var a=rf()
console.log(a)
a.then((v)=>{

    console.log(v)
})
console.log(a)