function rf(){
    return new Promise((cb)=>{
        console.log(1)
        setTimeout(cb,2000)
    })
}
console.log(2)
var a=rf()
console.log(a)
a.then(()=>{

    console.log("hi")
})
console.log(a)