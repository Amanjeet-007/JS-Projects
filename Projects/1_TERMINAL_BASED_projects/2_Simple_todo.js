//input setting in nodeJs
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//------Plan
/*
1. this app have to be four things 
> Add todo
which we will store in an Array using Push or any other method
> Delete
using this we can delete any todo by the number 
> List
By this we can see the all Todos from
> Exit
And in last if we are done we can exit the application
How i will achive this: [
> i will create a main funtion which run our application and yes the list holder
> the Application function inside this function we will handle the command input and according to that we will perform operatioin on our list (Todo list) 
> we will make seperate methods like create, delete, show and exit
]
*/

function main() {
    const todo_list = []
    console.log(`-----> USE following command to interact\n
list : See All TODOs\nadd : Add new TODO\ndelete: Delete TODO by number\nexit : Exit the application\n`)
    Todo() // runs the Application inside the main function 

    // The Appliication function
    function Todo() {
        rl.question(`Command : `
            , (data) => {
                switch (data) {
                    case "list":
                        show()
                        break;
                    case "add":
                        make()
                        break;
                    case "delete":
                        delate(data)
                        break;
                    case "exit":
                        console.log("\nsee you soon:)")
                        rl.close()
                        return 0
                    default:
                        console.log("Please write listed Command :\n add, delete, list or exit")
                        Todo()

                }
                Todo()
            })
        //methods
        function make() {
            rl.question("Write here : ", (data) => {
                todo_list.push(data)
                console.log("Todo Added.")
                Todo()
            })
        }
        function show() {
            for (let i = 1; i <= todo_list.length; i++) {
                console.log(`${i}.${todo_list[i - 1]}`)
            }
        }
        function delate() {
            rl.question(`which one? :`, (data) => {
                data = Number(data)
                for (i in todo_list) {
                    if (i == (data - 1)) {
                        todo_list.splice(i, 1)
                        console.log("deleted successfuly")
                    }
                }
                Todo()
            })
        }
    }
}
main()