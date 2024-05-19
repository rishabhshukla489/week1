function rf(){
    return new Promise((cb)=>{
       setTimeout(()=>{cb("hi")},2000)
    })
}

async function r(){
    let v=await rf()
    console.log(v)
}
console.log(0)
r()