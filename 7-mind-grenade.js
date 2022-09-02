//If you have a function inside the module you invoke it will execute even if that function does not have an export method
const num1 = 5
const num2 = 10

const addValues = ()=> {
    console.log(`The sum is ${num1 + num2}`)
}
addValues()

// const greet = ()=>{
//     console.log('Hi there how you doing?')
// }
// greet()
