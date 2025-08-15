//1. we have to set a number which a user have to guess by random num generator

//2.second then we will run a function which takes input from user and it gives user three time to guess

// if wrong answer then live-- and if try<3 then run the function again else user game lost.

//funtionality
/*
1. score
2. 5 tries (life)
 */

//improvement _> type check and handle the situation were user send non numarical value

//input from user setup in nodeJS
const readline = require('readline');
const rdl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main() {
    let chance = 4 
    let score = 0
    let num = Math.floor(Math.random() * 10);
    function guess_the_number() {
        rdl.question("Guess a Number.(from 0-9): ", (data) => {
            if (num == data && chance == 4) {
                console.log("Wow 😯 you got this.  +2")
                score += 2
                num = Math.floor(Math.random() * 10);
                guess_the_number()
            }
            else if (num == data) {
                console.log("nice you got this  +1")
                score++
                num = Math.floor(Math.random() * 10);
                guess_the_number()
            }
            else if (num != data && chance > 0) {
                console.log("Ohh!, try again.")
                chance--
                guess_the_number()
            }
            else if (chance == 0) {
                console.log(`---------------------------\nGame end \nscores: ${score}\nThe number was = ${num}`)
                rdl.close()
            }
        })
    }
    guess_the_number()
}
main()
