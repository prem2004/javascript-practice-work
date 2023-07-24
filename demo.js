/// question create memoized function so expensive funtion will not execute if argument are same 

const multiplfun = (a, b) => {
    for (let i = 0; i < 100000; i++) {

    }
    return a + b
}


function myMemoize(fn, context) {
    let res = {}
    return function (...args) {
        var argsCache = JSON.stringify(args)

        if (!res[argsCache]) {
            return res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache]
    }
}


console.time();
let ss = myMemoize(multiplfun)
console.log(ss(10, 20))
console.timeEnd()



console.time();
console.log(ss(10, 20))
console.timeEnd()


//Q2 impliment this code
//const result=calc.add(10).miltiply(5).substract(30).add(10)
//console.log(result.totle)

const calc = {
    result: 0,
    add: function (num) {
        this.result += num
        return this
    },
    multiply: function (num) {
        this.result = this.result * num
        return this
    },
    substract: function (num) {
        this.result = this.result - num
        return this
    }
}

calc.add(10).multiply(10).substract(30).add(10)
console.log(calc.result)

//Q 3 flaten below array

function customFlat(arr, dept = 1) {
    let result = []
    arr.forEach(el => {
        if (Array.isArray(el) && dept > 0) {
            result.push(...customFlat(el, dept - 1))
        } else {
            result.push(el)
        }
    });

    return result
}


let arr = [
    [1, 2],
    [3, 4, [5, 6, [7, 8], 200]],
    [9, 10]
]

console.log(customFlat(arr, 3))
//output : [1, 2, 3, 4, 5, 6, 7, 8, 200, 9, 10]


// Q create custome promise ALL method

/**--------------START PROMISE ALL METHOD--------------------------- */

function show(myname) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(myname)
        }, 1000)
    })
}

   const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise2 is resolved")
    }, 2000)
})



function customeAll(promises) {
    let result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            p.then((res) => {
                count += 1
                result.push(res)
                if (count === promises.length) {
                    resolve(result)
                }
            }).catch(er => {
                reject(er)
            })
        });
    })

}


customeAll([show("Hello"), p4]).then(res => console.log(res)).catch((er) => {
    console.error(er)
})

/**-------------END PROMISE ALL METHOD------------------------------------ */

// Q write funtion Check array are qual or not

/**---------------start array equal----------------------------------------*/
function checkArray(a, b) {
    let ln = a.length;
    if (a.length !== b.length) {
        return false
    }
    a.sort();
    b.sort();

    for (let i = 0; i < ln; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true

}

let a = [5, 4, 3, 2, 1]
let b = [1, 2, 3, 4, 5]

console.log(checkArray(a, b))

/**--------------end array equal-------------------------------------------*/

// Q why we need arrow funtion 


const person={
    ename:"Prem mokashe",
    display:function(){
      setTimeout(function(){
         console.log(this.ename)
      }.bind(this))
    }
  }
  
  person.display()

  /*---------------------end arrrow funtion need example--------------------------- */

  /** Q 1 : Promise.All polifil method */
     let p1=new Promise(((resolve,reject)=>{
       setTimeout(()=>{
         reject([10,20])
       },1000)
      }))
    
     let p2=new Promise(((resolve)=>{
       setTimeout(()=>{
         resolve([30,40])
       },5000)
      }))
    
    
    Promise.customAll=function(prom){
      return new Promise((resolve,reject)=>{
       let result=[];
       total=0;
       prom.forEach(pr => {
        pr.then((res,i)=>{
          result[i]=res;
          total++;
          if(total===prom.length) resolve(result)
         }).catch((er)=>{
          reject(er)
         })
       });
     })
    }
    
     Promise.customAll([p1,p2]).then(res=>console.log(res))
    .catch((er)=>console.error(er))


  /** end Promise.all polifill */

/* Q2  Create Debouncing in javascript  */


const apicall=()=>{
    console.log("api called")
  }
  
  
  function deboucing(callbackfun)
  {
    let timer;
    return function(){
      clearTimeout(timer)
      timer=setTimeout(()=>{
        callbackfun()
      },2000)
    }
  }
  
  fun=deboucing(apicall)
  
  let btn=document.querySelector('#btn')
  console.log(btn)
  
  btn.addEventListener('click',()=>{
   fun();
  })
  


/*------------------------------Debouncing end----------------------*/

/* Q3: write JavaScript Throttling function */
 
const apicall3=(a)=>{
    console.log("API is called")
  }
  
  const throtling=(fun,delay)=>{
    let flag=true;
    return function(){
      let context=this;
      let args=arguments
      console.log(flag) 
      if(flag){
        flag=false
         apicall3.apply(context,args)
        setTimeout(()=>{
          flag=true
        },3000)
      }
    }
  }
  
  let callthrot=throtling(apicall3,1000,20)
  
  let btn2=document.querySelector('#btn2')
  btn2.addEventListener('click',()=>{
    callthrot(10)
  })

/*----------------------Throttling end here--------------------- */

// Q1 number is Palindrome 

function isPalindrome(x){
  return x===Number(x.toString().split("").reverse().join(""))
}

console.log(isPalindrome(121))

/**------------------End Palidrome---------------------- */