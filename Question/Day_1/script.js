// basic of promise
new Promise((resolve,reject)=>{
    //resolve or reject 
})
// if resolve the return value comes in .then(value=>console.log(value)
// or if rejected the returned value comes in .catch(err=>console.log(err))


// --------Write a Promise that resolves with the message "Hello, World!" after 2 seconds
new Promise(res=>setTimeout(()=>res("Hello, World!"),2000)).then((messase)=>{
    console.log(messase)
}).catch(err=>console.log(err)).finally(()=>{"Done! i maked a Promise:)"})



//--------------Write a function that fetches user details from an API and then fetches their posts using the user ID. Use .then for chaining.
function fetchData() {
    let userData = {
      userId: 2,
      userName: "amanjeet",
    };
    return new Promise((resolve, reject) => {
      resolve(userData);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("User Data:", data); // Logs the user data
      return new Promise((resolve) => {
        resolve(`Fetched posts for user: ${data.userName}`);
      });
    })
    .then((message) => {
      console.log(message); // Logs: Fetched posts for user: amanjeet
    })
    .catch((err) => {
      console.error(err);
    });
  


//----------Write a Promise that randomly resolves or rejects. Handle the rejection using .catch.
    function random(){
        let num = Math.floor(Math.random()*10)
        new Promise((res,rej)=>{
            if(num%2==0){
                res()
            }else{
                rej()
            }
        }).then(()=>{console.log("promise is resolve")}).catch(()=>{console.log("Promise is not resolve")})
    }
    random() //this example of error handling

// 1. Write a function called delay(ms) that takes a number ms (milliseconds) as an argument and returns a promise. The promise should resolve after the specified number of milliseconds have passed.

function delay(ms){
    return new Promise((res)=>setTimeout(()=>{res()},ms))
}


