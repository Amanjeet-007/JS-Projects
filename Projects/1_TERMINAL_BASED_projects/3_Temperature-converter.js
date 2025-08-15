// tempreature converter
/*
So first we need a formula that's convert the actual tempareature so what would be the featuchers?

get input temparacher from user (default in celcius)
options _> celcius 
        _> Kalvin
        _> faranhite
write to choose other input unit
get converted answer
in remaining two units 
done
*/

//for user input
const Readline = require('readline')
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = () => {
    converter()
}
const converter = () => {
    const convert_from_c = ()=>{
        rl.question("enter the Temp in C :",(data)=>{
            data = Number(data)
            console.log(`Fahrenheit (°F): ${(data*(9/5)+32)}`)
            console.log(`Kelvin (K)     : ${(data + 273.15 )}`)
            rl.close()
        })
    }
    const convert_from_f = ()=>{
        rl.question("enter the Temp in F :",(data)=>{
            data = Number(data)
            console.log(`Celsius (°C)   : ${((data - 32) *(5/9))}`)
            console.log(`Kelvin (K)     : ${((data - 32) * 5/9) + 273.15 }`)
            rl.close()
        })
    }
      const convert_from_k = ()=>{
         rl.question("enter the Temp in K :",(data)=>{
            data = Number(data)
            console.log(`Fahrenheit (°F)  : ${(((data - 273.15) * 9/5) + 32) }`)
            console.log(`Celsius (°C)     : ${(data - 273.15 )}`)
            rl.close()
        })
    }
    const choice = () => {
    console.log("Choose a input unit \n1.Celsius (°C)\n2.Fahrenheit (°F)\n3.Kelvin (K)")
    rl.question("Enter the Number (series no.) : ",(data)=>{
        if(data==1){
            convert_from_c()
        }
        else if(data == 2){
            convert_from_f()
        }
        else if(data == 3){
            convert_from_k()
        }
        else{
            console.log("***&Are bhai 3 tak hi hai 1,2,3 which one?: ")
            choice()
        }
    })

    }
       function change() {
        const user = choice()
        switch(user){
            case "C":
                console.log("f and k")
            case "F":
                console.log("c and k")
            case "K":
                console.log("c and f")
        }
    }
    change()
}
main()