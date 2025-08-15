// // function change(int){
    
// //     if(int <= 99 || int > 999){
// //         console("Use Three digit number only, Try again ")
// //     }else{
// //         let arr = [...String(int)]
// //         let temp = arr[1];
// //         arr[1] = arr[2]
// //         arr[2] = temp
// //         int = arr.join('')
// //         console.log(int)
// //     }
// // }
// // // change(134)

// // let str = "Hello my name is Amanjeet"

// // // let ind = str.includes("name is")?(str.lastIndexOf("is")):console.log("Nothing")
// // // console.log(str[ind+3])
// // // console.log(str.slice(ind+3))

// // // console.log(str.lastIndexOf("m")-str.indexOf("m"))




// // function memoize(fn) {
// //     const memo = [] 
    
// //     return function(...args){



// //         memo.push({arg:[...args],answer:fn(...args)})
       
// //     }
// // }

// // memoize("sum")

// // let arr = [ 1,2,3,4,5]

// // // console.log(arr.entries(1))

// // let a = 2;
// // let b = 3;

// // function foo(x, y = b) {
// //     return x + y;
// // }

// // b = 5;
// // console.log(foo(a));

// // 2024 != 2025


//  function merge_sort(arr,starting,len){
//     //conqor   --it's need arr,starting-index,middle-index and last index
//     function conqor(arr,starting,mid,len){
//         let newArr = []
//         let index = 0
//         let s = starting
//         let middle = mid+1 

//         while(s<=mid && middle <= len){
//             if(arr[starting]<arr[middle]){
//                 newArr[index++] = arr[s++]
//             }else{
//                 newArr[index++] = arr[middle++]
//             }
//         }
//         while(s<=mid){
//             newArr[index++] = arr[s++]
//         }
//         while(middle<=len){
//             newArr[index++] = arr[middle++]
//         }

//        console.log(newArr)

        

//     }
//     //devide  -- it's need array,array-length-1 ,starting-index
//     function divide(arr,starting,len){
//         if(starting>=len){
//             return
//         }
//         let half = Math.floor((len+starting)/2);   // returns middle index
//         divide(arr,starting,half)
//         divide(arr,half+1,len)
//         conqor(arr,starting,half,len)
        
//     }
    
//     divide(arr,starting,len)

//  }

// function main(arr){
//     if(arr.length <= 1){
//         return;
//     }
//     else{
//         let len = arr.length-1
//         let starting = 0 
//         merge_sort(arr,starting,len)
       
//     }
// }
// main([2,1,5,4])

let arr = [0,1,2]
let b = arr.filter((e,i)=>{
    if(i==0||i==arr.length-1){
        console.log(e)
        return `${e}`
    }
})
console.log(b)