//Imagine this a our module file and it stores all the functions
const sayHi = (name)=> {
    console.log(`Hi ${name}`)
}
//Note this is similar to a default es6 export
module.exports = sayHi //Exporting a single value.When you export a function you dont add the ()