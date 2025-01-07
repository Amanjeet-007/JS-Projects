const btn = document.getElementById("add");
const input = document.querySelector("input");
const li = document.querySelector(".li")

 //A array which has all index to access iteams from localStorage
let all = []
//if have any iteam then show
if(all.length >= 1){
    all.forEach((el)=>{
        let All = localStorage.getItem(el)
        AllIteam += `<li accesskey=${el}>
        <div class="box">
            <div class="iteam">${localStorage.getItem(All)}</div>
            <button class="delete">Delete</button>
        </div>
    </li>`
    li.innerHTML = AllIteam;

    })
}



btn.addEventListener("click",()=>{
    // iteams.push({[id]:iteam}) if iteams variable is avilable

    //if input has value then exixute the code
    if(input.value){
    //getting value from input
    let iteam = input.value;
    //assin a index for that input
    let id = li.childNodes.length-4

    //Adding key(id) and value(iteam) in localStorage
    localStorage.setItem(id, iteam);
    //push same key in All array
    all.push(id)
    if(all.length >= 1){
        all.forEach((el)=>{
            let newIteam;
            newIteam += `<li accesskey=${el}>
                <div class="box">
                    <div class="iteam">${localStorage.getItem(el)}</div>
                    <button class="delete">Delete</button>
                </div>
            </li>`
            li.innerHTML = AllIteam;
            input.value = '';
    
        })
    }
    input.value = '';
    }else{
        console.log("Please Enter Some Text")
    }
    

    if(li.childNodes.length>5){
        const Delete = document.querySelectorAll(".delete");
       
        Delete.forEach((el)=>{
            el.addEventListener("click",()=>{
                localStorage.removeItem(el.parentElement.parentNode.accessKey);
               el.parentElement.parentNode.remove()
            all.splice(el.parentElement.parentNode.accessKey-1,1)
            console.log(all)

        })
        })
    }
    
})


 



