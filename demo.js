
const multiplfun=(a,b)=>{
    for(let i=0;i<100000;i++)
    {

    }
    return a+b
}


function myMemoize(fn,context){
    let res={}
  return function(...args){
   var argsCache=JSON.stringify(args)
   
    if(!res[argsCache]){
       return res[argsCache]=fn.call(context || this, ...args)
    }
    return res[argsCache]
  }
}


console.time();
let ss=myMemoize(multiplfun)
console.log(ss(10,20))
console.timeEnd()



console.time();
console.log(ss(10,20))
console.timeEnd()
