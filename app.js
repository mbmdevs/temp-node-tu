//npm - global command that comes with node
// npm --version

// local dependency -Can only be used in this particular project
// npm i <packageName>

//global dependency -- can be used in any project
//npm install -g <pakageName>

//package.json - manifest file (stors important infor about project/package)
//Three way to create the package.json:
//manual approach (create package.json in the root, creates properties etc)
//npm init - used to initialize the package.json step by step
//npm init -y -accepts the defaults for everything

//Why we need the package.json
//Pretty self explanatory .It will be used to keep track off all the packages needed by our project

//The external packages are denoted by an _
const _= require('lodash')

const items = [1,[2,[3,[4]]]]
//Lodash has a flattern deep method that will spit this back as a flat array
const newItems = _.flattenDeep(items)
console.log(newItems) //[1,2,3,4,]