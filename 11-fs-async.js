//DEALING WITH FILES ASYNCHRONOUSLY
//Everything is exactly the same ,we only remove the Sync keyword

const {readFile,writeFile,writeFileSync,readFileSync} = require('fs')
console.log('Start') //To visualize the async approach

//You handle it asynchronously we use a callback/promise function
//The callback takes 2 params.The erro/reject and the result
readFile('./content/subfolder/first.txt', 'utf-8',(error,result)=> {
    //First check if theres any errors
    if(error){
        console.log(error) //In case you want to view the error
        return
    }
    //Heres where you run your app etc
    // console.log(result)
    
    //Save the result in a varialble
    const first = result
   
    //Now access and read second.txt
    readFile('./content/subfolder/second.txt','utf-8',(error,result)=> {
        if(error){
            console.log(error)
            return
        }
        const second = result

        //Now write the file
        writeFile('./content/subfolder/result-async.txt',`Here is the result: ${first},${second}`,(error,result)=> {
            if(error){
                console.log(error)
                return
            }
            // console.log(result) //It will return undefined as were not collecting any data but we only writing to a file
            console.log('Done with this task')
        })
    })
})
console.log('Starting the next task')
// console.log(readFileSync('./content/subfolder/result-async.txt','utf-8'))
