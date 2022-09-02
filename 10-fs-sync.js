// INTERACTING WITH THE FILE SYSTEM WITH THE FS MODULE 
//There are 2 main ways of handling the file module:
//1.Asynchronously (non-blocking) 2.synchronously (blocking)


//Here we use distructuring to import/access the different methods of the fs module
const {readFileSync,writeFileSync,appendFileSync} = require('fs')
console.log('Start')

//The readFileSync takes the filepath and the encoding (default is utf8)
//Returns the content of the file,handles this asynchronously
const first = readFileSync('./content/subfolder/first.txt',"utf-8")
const second = readFileSync('./content/subfolder/second.txt',"utf-8")
// console.log(first,second) //Will return contents of both first and second file


//To create a file synchronously we use the writeFileSync
//Takes 2 arg.The filename and the value we want to pass
writeFileSync('./content/subfolder/hello.txt','Hello') //Will create hello.txt and add hello world into it
// console.log(readFileSync('./content/subfolder/hello.txt','utf-8'))

//Use appendfileSync to append data without overiding existing content
appendFileSync('./content/subfolder/hello.txt',` ${first} ${second}`)

//Actually you can easily apppend by adding an extra flag argument
writeFileSync('./content/subfolder/hello.txt','Hello',{flag:'a'}) //Will create hello.txt and add hello world into it
console.log(readFileSync('./content/subfolder/hello.txt','utf-8'))

console.log('Done with this task')
console.log('Starting a new Task')