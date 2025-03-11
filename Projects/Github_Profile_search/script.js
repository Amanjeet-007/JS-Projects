const username = document.querySelector("#user_name");
const btn = document.querySelector(".search button")
const message = document.querySelector(".message")
const result = document.querySelector(".result")

const showerr  = function(status){
    if(status){
        message.innerText = ""
    }else{
         message.innerText = "*user not found on github"
    }
}
const showData = function(data){
    result.innerHTML = `
     <div class="img">
                <img src="${data.avatar_url}" alt="image">
            </div>
            <h4>${data.name}</h4>
            <div class="follow">
               <div class="following"></div>
               <div class="follower"></div>
            </div>
            <div class="id">Id</div>
            <div class="email">${data.email}</div>
    `
}

btn.addEventListener("click",async ()=>{
    await fetch(`https://api.github.com/users/${username.value}`)
    .then(res =>{
        return(!res.ok?showerr(res.ok):res.json())
    }).then((data)=>{
      console.log(data)
      showData(data)
    
    })
    .catch(err=>console.log(err))
})