// ===== UNDERSTANDING MODULES =====
//Undortunately node uses Common modules instead of es6 modules
//CommonJS, every file in Node is a module by default

const names = require('./4-names.js') //Note we importing the entire file unlike in es6
const sayHi = require('./5-utilities')
// console.log(names)//Wil return the exports object containing all the items we exporting

const data = require('./6-alternative-export-flavour')

// sayHi('Elena Joy')
sayHi(names.john) //Why names coz we exported it as an object
sayHi(names.peter)

console.log(data.items)
console.log(data.singlePerson)


//What this !!.Here we did'nt need to store the module anywhere
//If you invoke a module like this it will run immediately
require('./7-mind-grenade') //This works coz it contains a single default export even though we did'nt add the export method in the module file
