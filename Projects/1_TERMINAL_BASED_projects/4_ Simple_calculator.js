const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// number operation and number

function main(){
    simple_calculator()

}
function simple_calculator(){
    //inpt first number
    rl.question('Enter your first number : ',(fNum)=>{
        fNum = parseInt(fNum)
        if(typeof(fNum) !== typeof(1)){
            console.log("Please enter a Number")
            simple_calculator()
        }
        rl.question('{add : + , divide : / , multiply : * , subtraction : -}\nSelect operator : ',(operator)=>{
            rl.question("Enter second number : ",(sNum)=>{
                if(typeof(sNum) != typeof(1)){
            console.log("Please enter Number Number")
            simple_calculator()

        }
                sNum = Number(sNum)
                switch(operator){
                    case "+": console.log(fNum+sNum)
                    break
                    case "*":console.log(fNum*sNum)
                    break
                    case "-":console.log(fNum-sNum)
                    break
                    case "/":console.log(fNum/sNum)
                    break
                    default :console.log("Enter a valid operator.")
                    simple_calculator()
                    
   

                }
            rl.close()
            })
        })
    })
}
main()