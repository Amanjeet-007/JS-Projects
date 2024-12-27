const btn = document.getElementById("button");
const DisYear = document.querySelector(".years span")
const DisMonth = document.querySelector(".months span")
const DisDay = document.querySelector(".days span")
const Message = document.querySelector(".message")
const weeks = document.querySelector(".weeks")
const totalDays = document.querySelector(".totalDay");


btn.addEventListener("click",()=>{
    const dateOfBirth = document.getElementById("date").value;

    if(dateOfBirth){
        Message.innerText = "";

        //date of birth and current date stored here
        const dob = new Date(dateOfBirth);
        const today = new Date();

        //calculate
        const years = (today.getFullYear()-dob.getFullYear())
        const months = (today.getMonth()-dob.getMonth())
        const days = (today.getDay()-dob.getDay())+1

        //display all Data 
        DisYear.innerText = `${years}`;
        DisMonth.innerText = `${months}`;
        DisDay.innerText = `${days}`;
        weeks.innerText = `${Math.round((years* 52.1775)+(months*4.35))}`
        totalDays.innerText = `${Math.random(years*365.4)+((months/12)*365.4)+days}`


    }
    else{
        //if non input fom user
        Message.innerText = "*Please Enter Your Date of Birth";
    }
    


    

   
    

})