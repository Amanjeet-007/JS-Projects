
// function findmostfreq(arr){
//     const setofdemo = new Set(arr)
//     const setvalue = []
//     setofdemo.forEach((el)=>{
//     let times = 0
//     demo.forEach((dm)=>{
//         if(el===dm){
//             times++
//         }
//     }) 
//     setvalue.push({[el]:times})
//     times = 0
//      })
// }


// const demo = [1,2,3,4,2,1,1]




// console.log(findmostfreq(demo))

// function math(a,b){
//     a =  parseInt(a)
//     b =  parseInt(b)
//     return ((a*a)+(b*b)+(2*a*b))
// }
// console.log(math("6y","2x"))

// console.log(a)
// if(true){
 
//     console.log(a)

//      var a = 12
// }

// function reverseStr(str){
//     if(typeof(str)=="string"){
//         str = str.split("").reverse().join("")
//        return str
//     }else{
//         console.log("try to send string")
//     }
    
// }
// reverseStr("Hello")

// function factorial(n){
//     let factor = 1;
//     do{
//         factor *= n
//         n--
//     }while(n>1)
//     return factor
// }
// factorial(4)

// function Book(title,author,pages){
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     // getDiscribtion = ()=>{ //this is wrong way
//     //     return(`${this.title} book by ${this.author} which have ${this.pages}`)
//     // }
//     //instead of doing this you can do this
//     this.getDiscribtion = function(){
//         return(`${this.title} book by ${this.author} which have ${this.pages} pages`)
//     }

// }

// let onj = {
//     name:"amanjeet",
//     age:21
// }
// function getProp(obj){
//    return Object.keys(obj).forEach(el=>console.log(el,obj[el]))
   
    
// }
// getProp(onj)

// const playlist = {
//     songs:[],
//     add: function(song){
//         this.songs.push(song)
//     }
// }

// Array.prototype.lastElement = function(){
//     return(this[this.length-1])
// }

// function Shape(width,height){
//     this.width = width,
//     this.height = height
// }
// Shape.prototype.getArea = function(){
//     return(this.width*this.height)
// }

// Number.prototype.isEven = function(){
//     return((this%2==0)?true:false)
// }

// String.prototype.toArr = function(){
//     return(this.split(""))
// }

// ;((a,b)=>{(a?b++:b++);console.log(b)})(0,1)

// let arr = [1,2,3,4]
// // let a = arr.shift()
// // console.log(a)

// Array.prototype.shif = function(){
//     if(this.length === 0) return undefined;
//     let lastValue = this[0]
//     delete this[0]
//     for(let i = 0 ; i < this.length-1; i++ ){
//         this[i] = this[i+1]     
//     } 
//     this.length--
//     return(lastValue)
// }
// let a = arr.shif()
// let b = arr.shif()
// let a = arr.shift()
// console.log(arr)

//question now
// 1. Two Sum Difficulty: Easy Prompt: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Example Input: nums = [2,7,11,15], target = 9 Expected Output: [0,1] Hint: Try using a hash map for constant-time lookup.




const arr = [1,5,2,7];
let a = 8;
function answer(arr,target){
    let r = []
    let add = 0
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i]==target){
            return i
        }
        for(let j = i ; j < arr.length; j++){
            add += arr[j]
            r.push(j)
            let len = r.length-1
            if(add == target){
                r = r.filter((a,b)=>{
                    if(b==0||b==len){
                        return `${a}`
                    }
                })
                return (r)
            }
        }
        r = []
        add = 0   
    }
    return -1
} //solved i think

let b = answer(arr,a)
console.log(b)

/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * @param {number[]} nums The array of integers.
 * @param {number} target The target sum.
 * @returns {number[]} An array containing the indices of the two numbers,
 * or an empty array if no such pair is found.
 */
function twoSum(nums, target) {
  // Create a hash map (JavaScript object) to store numbers and their indices.
  // The key will be the number, and the value will be its index in the array.
  const numMap = {};

  // Iterate through the array with both the index (i) and the current number.
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // Calculate the 'complement' needed to reach the target.
    // If currentNum + complement = target, then complement = target - currentNum.
    const complement = target - currentNum;

    // Check if this 'complement' already exists as a key in our numMap.
    // If it does, it means we have previously encountered a number that,
    // when added to the currentNum, equals the target.
    if (numMap.hasOwnProperty(complement)) {
      // If the complement is found, we have our two numbers.
      // numMap[complement] gives the index of the complement number,
      // and 'i' is the index of the current number.
      return [numMap[complement], i];
    }

    // If the complement is not found, add the current number and its index
    // to the map. This prepares the map for future iterations, where the
    // currentNum might be the complement for a later number.
    numMap[currentNum] = i;
  }

  // If the loop completes and no pair is found, return an empty array.
  // (Note: The problem statement usually guarantees that exactly one solution exists).
  return [];
}

// --- Test Cases ---

// Example from the prompt:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Input: nums = [${nums1}], target = ${target1}`);
console.log(`Output: [${twoSum(nums1, target1)}]`); // Expected: [0, 1]

// Your example:
const nums2 = [1, 5, 2, 7];
const target2 = 8;
console.log(`\nInput: nums = [${nums2}], target = ${target2}`);
console.log(`Output: [${twoSum(nums2, target2)}]`); // Expected: [0, 3]

// Another example:
const nums3 = [3, 2, 4];
const target3 = 6;
console.log(`\nInput: nums = [${nums3}], target = ${target3}`);
console.log(`Output: [${twoSum(nums3, target3)}]`); // Expected: [1, 2]

// Example with no solution (if problem allowed):
const nums4 = [1, 2, 3];
const target4 = 10;
console.log(`\nInput: nums = [${nums4}], target = ${target4}`);
console.log(`Output: [${twoSum(nums4, target4)}]`); // Expected: []
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// create a constructor
const product  = function(name,disc,price){
    this.name = name,
    this.price = price,
    this.disc = disc
}
// //making a prototype function
product.prototype.getInfo= function (){
    return(`Name:${this.name},price:${this.price},about:${this.disc}`)
}
// //create a object using constructor
// const toy = new product("Car","nice Car",200)
// console.log(toy);
// console.log(toy.getInfo())

const electric = function (name,price,disc,brand){
    product.call(this,name,price,disc)
    this.brand = brand
    
}
electric.prototype = Object.create(product.prototype);

electric.prototype.constructor = electric

const mobile = new electric("i",2,"asd","b")
// console.log(mobile.getInfo())





