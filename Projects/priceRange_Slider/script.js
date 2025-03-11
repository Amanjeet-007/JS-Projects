const slider = document.querySelector(".slider input")
const max_show = document.querySelector(".max input")

// setInterval(()=>{
//     max_show.value = Number(max_show.value) + 1
//     slider.value = max_show.value
// },1000)

slider.addEventListener("input",()=>{
    max_show.value = slider.value
})
