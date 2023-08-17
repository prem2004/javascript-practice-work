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

//Q find some of two number equal to trarget value 

var twoSum = function(nums, target) {
 
  for(let i=0;i<nums.length;i++){
    if(i==nums.length-1){
        for(let j=0;j<nums.length-1;i++)
        {
         if (nums[i]+nums[j]===target) 
         {
         return [i,j]
          
         }
        }
    }else{
      for(let m=i+1;m<nums.length;m++){
        if (nums[i]+nums[m]===target) 
        {
          return [i,m]
        }
      }
    }
  }
  
};

 
console.log(twoSum([3,2,4,15,15],30))
/*-------------------- end some to two number --------------------- */

/* Q write a program for anagram/
/**An anagram of a string is another string that contains the same characters, only the order of characters can be different */

let s="anagram"
let t="nagaram"

function check(m,n){
  if(m.length!==n.length) return false
  m=m.split("").sort().join("");
  n=n.split("").sort().join("");
 return m==n
}

console.log(check(s,t))
/*-----------end anagram---------------------- */

/** write a program to show output as below */
/*
[
  { stock: 'FB', name: [ 'Mark' ], count: 1 },
  { stock: 'APPL', name: [ 'Stev', 'Tim', 'Bill' ], count: 3 },
  { stock: 'MSFT', name: [ 'Stev', 'Bill' ], count: 2 }
]

*/

const portfollio=[
  {name:"Mark", stock:"FB"},
  {name:"Stev", stock:"APPL"},
  {name:"Tim", stock:"APPL"},
  {name:"Stev", stock:"MSFT"},
  {name:"Bill", stock:"MSFT"},
  {name:"Bill", stock:"APPL"},
]

function show(p){
  let ss=new Set(p.map((i)=>i.stock))
  let shareholder=[]
  ss.forEach(stockval => {
    let obj={'stock':'', name:[],count:0}
     p.forEach(p=>{
      
      if(stockval==p.stock)
      {
        obj.stock=stockval;
        obj.name.push(p.name);
        obj.count=obj.count+1
      }
     })
     shareholder.push(obj)
     obj={'stock':'', name:[],count:0}
    
  });
  return shareholder
}


console.log(show(portfollio))

/**----------------------------------end----------------------------------------------------- */

/* wtire a program to  return number in woord 0-99 */

let ar1=["zero","one", "two", "three", "four", "five","six", "seven", "eight", "nine",'ten', 'eleven', 'tweal', 'thirteen','fourteen','fifteen', 'sixteen','seventen', 'nineteen']
let ar2=["0","ten","twenty", "thirty", 'fourty',"fifty", "sixty", "senty", "eighty", "ninty" ]


function giveword(n){
  if(n<0 || n>100) return
  const numar=String(n).split("")
    
  if(numar.length<=1)
  {
    return ar1[n]
  }else if(numar[1]==0){
    return ar2[numar[0]]
  }else{
    if(n>=10 && n<=19)
    {
      return ar1[n] 
    }else
    {
      return ar2[numar[0]] + ar1[numar[1]]
    }
    
  }

}

console.log(giveword(101))



/**------------------------------end---------------------------------------------- */

/** find max number from array, below is find second max from array */

let ar=[4,5,4,7,4,9,9]

 new Set(ar.sort((a,b)=>a-b))[ar.length-2]


function findNumber(n){
   let result=ar.filter((a,i,aa)=>aa.indexOf(a)===i).sort((a,b)=>a-b)
   return result[result.length-n]
}
console.log(findNumber(1))

/*-----------------------end-------------------------------*/

/** Remove duplicate from array */


let ar3=[0,0,1,1,1,1,1,1,2,2,3,4]

function removeDuplicate(a)
{
   for(let i=0;i<a.length;i++){
     for(let j=i+1;j<a.length;j++)
     {
        if(a[i]==a[j])
        {
            a.splice(j,1)
            j--
        }
     }
   }
   return a
}

console.log(removeDuplicate(ar3))


/* end remove duplicate */