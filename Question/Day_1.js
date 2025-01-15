// 1. Write a function called delay(ms) that takes a number ms (milliseconds) as an argument and returns a promise. The promise should resolve after the specified number of milliseconds have passed.

function delay(ms){
    return new Promise((res)=>setTimeout(()=>{res()},ms))
}

// 2. Write a function retry(fn, retries) that takes a promise-returning function fn and a number retries as arguments. The function should attempt to call fn and, if it fails, retry up to retries times before finally rejecting.

 {
    // let attempt = 0;
// const exampleFunction = () => {
//   attempt++;
//   return new Promise((resolve, reject) => {
//     if (attempt < 3) {
//       reject('Failed attempt ' + attempt);
//     } else {
//       resolve('Success on attempt ' + attempt);
//     }
//   });
// };

// retry(exampleFunction, 4).then(result => {
//   console.log(result); // Outputs: Success on attempt 3
// }).catch(error => {
//   console.error(error); // Will only happen if retries are exhausted
// });

 } //<-----example
 

