//UNDERSTANDING BUILT-IN MODULES
/* *The OS module
    It allows us to various info about the operatting system
    It has many usefull properties and methods
*/
//Create a variable to import and store the os module
const os = require('os') //Note we do not add ./ when importing built-in modules

//Infor about current user
const user = os.userInfo() //Returns and object
// console.log(user)

//Returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()}`)

const currentOs = {
    name:os.type(), //Returns the operating system type.based on uname command
    release:os.release(), //Returns the os as a string.The entire os name and model
    totalMem: os.totalmem(),
    freeMem: os.freemem()//Returns the amount of free memory in bytes as an integer
}
console.log(currentOs)

