// "use strict";
/*
*((find and see the solution)
duplicate value 
bubbleSort
linearSearch
binarySearch
selection sorting
 */


// //-----------------------------------------linear search
// function linearSearch(arr, target) {
//     //we have to find n number from arr using linear search
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1;

// }

// //--------------------------------------------binary search
// function binarySearch(sortedArr, target) {
//     let left = 0, right = sortedArr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((right + left) / 2)
//         if (sortedArr[mid] === target) { return mid }
//         else if (sortedArr[mid] < target) { left = mid + 1 }
//         else { right = mid - 1 }
//     }
//     return -1
// }


// function bs(arr, target) {
//     let a = 0, c = arr.length;
//     function half(arr, f, l) {
//         let b = Math.floor((f + l) / 2)
//         if (f > l) { return -1 }
//         if (arr[b] === target) {
//             return b
//         }
//         else if (arr[b] > target) {
//             half(arr, f, b - 1)
//         }
//         else {
//             half(arr, b + 1, l)
//         }


//     }

//     return half(arr, a, c)
// }


// function accurance(arr, target) {
//     let half = Math.floor(arr.length / 2)
//     function next(target, start, end) {

//     }
//     if (arr[half] === target) {
//         next(target, 0, half - 1)
//         next(target, half + 1, arr.length - 1)

//     }
// }
// // console.log(accurance([1,2,2,3,4],2))


// //bubble sort example
// function bubbleSort(arr) {
//     const check = function () {
//         let swap = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 swap = true
//             }
//         }
//         return swap
//     }
//     let times = 0;
//     while (times < arr.length - 1) {
//         if (!check()) break; // If no swaps, break early
//         times++;
//     }

//     return arr
// }

// //-------------------------------------------------------->selection sorting
// function selectionSorting(arr) {
//     let len = arr.length;
//     let index = 0

//    function Do() {
//         let min = arr[index]
//         for (let i = index; i < len; i++) {
//             if (arr[i] < min) {
//                 min = arr[i]
//                 [arr[index], arr[i]] = [arr[i], arr[index]]
//             }


//         }
//         while (index != len) {
//             console.log(Do())
//             index++
//         }
//         return min
//     }
// }
// // console.log(selectionSorting([22, 32, 1, 45, 6, 0])) solve me

// function cash(num){
//     let notes = [500,200,100,50,20,10,5,2,1]
//     let newArr = []
//     let remaining = num
//     for(let i = 0 ; i < notes.length; i++){
//         if(remaining >=notes[i]){
//            newArr[i] =  Math.floor(remaining/notes[i])
//            remaining = remaining%notes[i]
//         }
//     }
//     function show(cash,times){
//         this.cash = cash,
//         this.times = times
//     }
//     for(let i = 0 ; i < newArr.length ; i++){
//         if(newArr[i] != undefined){
//              console.log(new show(notes[i],newArr[i]))
//         }else{

//             console.log(new show(notes[i],0))
//         }

//     }
//     return "Done"
// }


// // linked list signle

// class node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// // class LinkedList{
// //     constructor(){
// //         this.head = null;
// //     }

// //     // methods
// //     append(data){
// //         const newNode = new Node(data)
// //         if(this.head){
// //             this.head = newNode;
// //             return;
// //         }
// //         let current = this.head;
// //         while(current.next){
// //             current = current.next;
// //         }
// //     }
// // }
// // const list  = new LinkedList()
// // console.log(list.head)


// // let name = "Amanjeet"

// // let arr = name.split("");
// // arr = arr.reverse()
// // name = arr.join("")

// // console.log(name)


// // class Car {
// //     constructor(name, position, time, speed) {
// //         this.name = name;
// //         this.position = Number(position);
// //         this.speed = speed;
// //         this.time = time;
// //     }

// //     showName() {
// //         console.log(this.name);
// //     }

// //     drive() {
// //         let elapsedTime = 0; // Track how many intervals have passed
// //         console.log(`🚗 ${this.name} started at position ${this.position}`);

// //         let start = setInterval(() => {
// //             this.position += this.speed;
// //             console.clear(); // --------------------------------------------Clears the console to simulate movement
// //             console.log(`🚗 ${this.name} is at position ${this.position}`);
// //             elapsedTime++;
// //         }, 1000); // Updates every second for a clearer effect

// //         setTimeout(() => {
// //             clearInterval(start);
// //             console.log(`🚗 ${this.name} stopped at position ${this.position}`);
// //         }, this.time * 1000); // Stops after the specified time
// //     }
// // }

// // // Create cars
// // const one = new Car("Mustang", 0, 10, 4);
// // const two = new Car("A", 5, 8, 3);

// // one.drive();
// // two.drive();

// ----------------------------------------> duplicate value 
// function Find_Dublicate(arr) {
//     const uniqueValues = new Set();
//     const duplicateValues = new Set();
//     for (let i = 0; i < arr.length; i++) {
//        if(uniqueValues.has(arr[i])){
//         duplicateValues.add(arr[i])
//        }else{
//         uniqueValues.add(arr[i])
//        }
//     }
    
//     return Array.from(duplicateValues)
// }
// console.log(Find_Dublicate([2, 6, 4, 2, 7, 8, 8, 8, 5, 3, 4]))
//learnings >
/*
SET have a has() method which returns true/false nice hai ki nahi bina koi loop layaye which helps me to solve the find Duplicate problem 😊
 */

// function sort_ReZero(arr) {
//   let left = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[left] = arr[i];
//       left++;
//     }
//   }
//   for (let j = left; j < arr.length; j++) {
//     arr[j] = 0;
//   }

//   return arr;
// }
// console.log(sort_ReZero([1,0,5,3,0,6,2]))

/*
  Function: moveZeros
  Input: An array of numbers.
  Output: A new array with zeros moved to the end.
*/
function moveZeros(arr) {
  // your code here with the "two-pass" logic
}

// Example usage:
const numbers = [0, 1, 0, 3, 12];
console.log(moveZeros(numbers)); // Expected output: [1, 3, 12, 0, 0]