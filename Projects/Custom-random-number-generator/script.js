const form = document.querySelector("form");
const start = document.querySelector(".start");
const end = document.querySelector(".end");
const btn = document.querySelector("btn");
function customRandom(min, max) {
    min = Number(min)
    max = Number(max)
   count = (max-min)+1
   console.log(count)
   let range = (max-min+1)
   if(count>(max)){
    throw new Error("Count is greater then the maximum num");
   }
   let nums = new Set()
//    while(count>0){
//     let num = Math.floor((Math.random()*range)+min)
//     nums.add(num)
//     count--
//    }
   for(let i = 0 ; i <= count; i++){
    console.log(i)
    let num = Math.floor((Math.random()*range)+min)
    nums.add(num)
   }
   return [...nums]
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(start.value < 1){
        console.log("minimum range should be start from 1")
    }
    if(start==end){
        console.log("you have only one number to continue..")
    }
   let arr = customRandom(start.value,end.value)
   console.log(arr)
})