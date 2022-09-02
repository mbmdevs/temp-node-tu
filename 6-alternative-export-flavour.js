module.exports.items = ['item1','item2'] //YOU can add the export method directly here
const person = {
    name: 'Bob'
}

// or 
module.exports.singlePerson = person //This is equiv to export person as singlePerson
// module.exports = {items,mood,singlePerson:person} //Note this and the above is the same.Note if you use this way you cannot make other exports elsewhere on the page