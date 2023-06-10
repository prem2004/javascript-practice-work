/// question create memoized function so expensive funtion will not execute if argument are same 

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


//Q2 impliment this code
//const result=calc.add(10).miltiply(5).substract(30).add(10)
//console.log(result.totle)

const calc={
    result:0,
    add:function(num){
        this.result+=num
        return this
    },
    multiply:function(num){
        this.result=this.result * num
        return this
    },
    substract:function(num){
        this.result=this.result - num
        return this
    }
}

calc.add(10).multiply(10).substract(30).add(10)
console.log(calc.result)

//Q 3 flaten below array

function customFlat(arr,dept=1){
    let result=[]
    arr.forEach(el => {
        if(Array.isArray(el) && dept>0)
        {
            result.push(...customFlat(el,dept-1))
        }else{
            result.push(el)
        }
    });

    return result
}


let arr=[
    [1,2],
    [3,4,[5,6,[7,8],200]],
    [9,10]
]

console.log(customFlat(arr,3))
//output : [1, 2, 3, 4, 5, 6, 7, 8, 200, 9, 10]