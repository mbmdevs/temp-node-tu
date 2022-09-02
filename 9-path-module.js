//THE PATH MODULE

//How to see the type of file separator used by the os
const path = require('path')
// console.log(path.sep) //Since im using linux its a '/'

//how to define a file path using the 'path.join()' method
const filepath = path.join('/content','subfolder','test.txt') //Takes multiple args and normalize them as filepath name
// const filepath = path.join('/content/subfolder/test.txt') //I Think this should work as well
// console.log(filepath)

//To access the base name from a filepath
//Note .basename() takes a string filepath as parameter
const basename = path.basename(filepath) //Returns the last item in the path
// console.log(basename) //test.txt

// If you ever need to acesss the absolute path 
//it takes a couple of parameters that will eventually be resolved to give the absolute path
// Note __dirname returns the absolute path of your pwd.We then add the continueing file paths
const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutePath) 