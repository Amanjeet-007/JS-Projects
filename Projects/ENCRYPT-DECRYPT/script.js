const input = document.querySelector("#input");
const inputBtn = document.querySelector(".encode")
const returnEnc = document.querySelector(".encoded")

const inputForDecode = document.querySelector(".get");
const decodeBTn = document.querySelector(".decode");
const output = document.querySelector(".output");

const enc = []
function Encrypt(str){
   const secret = "fawegDxwveQugt!u1qCwsPr2HqHaeVb#p3dBofaWObnRKHzGH4byfSamdThHf65IkfKUfED8SZSAcVgljg9aNDYLYFBbeFFJLHFSGfTMDGFBJEghei7HhYh%Nf~k39y68^73ty4ug@lj%4q3y04Xctr"
        const secretArr = secret.split("")
        let data = str.split("")
        for(let i = 0 ; i < data.length; i++){
            let r = Math.floor(Math.random()*100)
            secretArr[r] =str[i]
            enc.push(r)
        }
        const newstr = secretArr.join("")
        return newstr
}
function Decrypt(str){
    let secretArr = str.split("")
    let strArr = [] 
    for(let i = 0 ; i < enc.length;i++){
        strArr[i]  = secretArr[enc[i]]
    }
    let message = strArr.join("")
    return message
}
inputBtn.addEventListener("click",()=>{
    let encoded = Encrypt(input.value)
    returnEnc.innerText = `${encoded}`
})
decodeBTn.addEventListener("click",()=>{
   let answer =  Decrypt(inputForDecode.value)
   output.innerText = `${answer}`
})

