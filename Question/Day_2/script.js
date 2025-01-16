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
//   console.log(result); // Outputs: Success on attempt 3// }).catch(error => {
//   console.error(error); // Will only happen if retries are exhausted
// });

} 
 
 function retry(fn, retries) {
  
 }