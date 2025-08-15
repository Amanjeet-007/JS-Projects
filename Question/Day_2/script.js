// 1.Write a function retry(fn, retries) that takes a promise-returning function fn and a number retries as arguments. The function should attempt to call fn and, if it fails, retry up to retries times before finally rejecting.

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
//   console.log(result); // Outputs: Success on attempt 3// }).catch(error => {
//   console.error(error); // Will only happen if retries are exhausted
// });
function retry(fn, retries) {
    return new Promise((resolve, reject) => {
      function solve() {
        fn()
          .then((result) => {
            console.log("Solved");
            resolve(result); 
          })
          .catch((err) => {
            if (retries > 0) {
              retries--; 
              solve(); 
            } else {
              reject(err); 
            }
          });
      }
      solve(); 
    });
  }


//2. Write a function that takes an array of Promises and logs the results only when all Promises are resolved. What happens if one of the Promises rejects?

 function allSolve(arr){
    Promise.all(arr).then(()=>{
        //we can also get input here:)
        return(
            console.log("Solved")
        )
    }).catch(err=console.log(err))//if any of promises is reject then it will exicute
 }

//3. Write a function that uses Promise.any to return the first successfully resolved Promise from an array of Promises. How is it different from Promise.race?

//       *>assume a have a array of promises called arr
Promise.any(arr).then(value=>{
    return(value)
})
//and the .any() or .race() are almost same but in .any()  if all promises are rejct it will return a aggriation err




  