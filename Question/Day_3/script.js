/*
Question for --------------------- 17/01/2025
1. Sequential Promise Execution
Write a function runInSequence(functions) that takes an array of promise-returning functions and executes them one after the other in sequence. Each function should only execute after the previous one has resolved. Return a promise that re-solve-s when all function-s have been executed.*/
 
function runInSequence(functions){

}

let arr = ["a","b","a","c","c"]
let a  = arr.reduce(countt)
function countt(total, currentValue,currentIndex,arr){
    num = 0
    total = currentValue
    if(total == currentValue){
        num++
        
    }else{
        num = 0
        total = currentValue
    }
    return(currentValue)
  }

console.log(a)
   

    



/*2. Timeout for a Promise
Write a function promiseWithTimeout(promise, timeout) that takes a promise and a timeout (in milliseconds). If the promise resolves or rejects before the timeout, return the result of the promise. Otherwise, reject with a timeout error.*/

    function promiseWithTimeout(promise,timeout){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                promise.then((value)=>{return true}).catch((resion)=>{return false})
            },timeout)
        })
       
    }


/*3. Parallel Promise Execution with a Limit
Write a function limitConcurrency(tasks, limit) where:

tasks is an array of promise-returning functions.
limit is the maximum number of tasks that can run concurrently.
Return a promise that resolves when all tasks are completed.

4. Retrying a Promise with Exponential Backoff
Write a function retryWithBackoff(fn, retries, delay) where:

fn is a promise-returning function.
retries is the maximum number of retries.
delay is the initial delay in milliseconds.
After each failure, double the delay and retry the function. Reject the promise if all retries are exhausted.*/