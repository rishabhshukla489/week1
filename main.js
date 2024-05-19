function sum(a,b,fn){
    fn(a*b)

}
function pr(data){
    console.log(data)
}
function gre(){
    console.log(1)
}
setInterval(gre,3*1000)
sum(2,5,pr)