const btn = document.getElementById("add");
const input = document.querySelector("input");
const li = document.querySelector(".li")

 //A array which has all index to access iteams from localStorage
let all = []
//if have any iteam then show 

btn.addEventListener("click",()=>{
    //if input has value then exixute the code
    if(input.value){
    //getting value from input
    let iteam = input.value;
    //assin a index for that input
    let id = 
        console.log(id)
    //Adding key(id) and value(iteam) in localStorage
    localStorage.setItem(id, iteam);
    //push same key in All array
    all.push(id)
            let newIteam;
            newIteam += `
            <li>
                <div class="box" accesskey=${id}>
                    <div class="iteam">${iteam}</div>
                    <button class="delete">Delete</button>
                </div>
            </li>`
            li.innerHTML += newIteam;
            input.value = '';
    }else{
        console.log("Please Enter Some Text")
    }
    


    if(all.length >= 1){
        all.forEach((el)=>{
            let OneByOne = localStorage.getItem(el)
           li.innerHTML +=  `<
           li accesskey=${el}>
            <div class="box">
                <div class="iteam">${OneByOne}</div>
                <button class="delete">Delete</button>
            </div>
        </li>`
        })
    }
    

    if(li.childNodes.length>5){
        const Delete = document.querySelectorAll(".delete");
       
        Delete.forEach((el)=>{
            el.addEventListener("click",()=>{
                localStorage.removeItem(el.parentElement.parentNode.accessKey);
               el.parentElement.parentNode.remove()
            all.splice(el.parentElement.parentNode.accessKey-1,1)

        })
        })
    }
    
})


 



