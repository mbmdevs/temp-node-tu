//UNDERSTANDING THE HTTP MODULE
const http = require('http')
// console.log(http)

//Creating a server
//It takes a callback with 2 parameters.and returns an instance of a server
const server = http.createServer((req,res)=> {
    //Normaly youll check what end  point the user is asking for than you provide them with the neccesary else you might want to return 404
    if(req.url === '/'){
        res.end('Welcom to home page') //A little trick you do not have to use the .write just add it right away
    }
    //Might add a few more or other pages
    if(req.url === '/about'){
        res.end('Here is our short histroy')
    }
    //If user makes an unknown url request return a defualt response
    res.end(`
        <h1>OOps!</h1>
        <p>We cant seem to find the page </p>
        <p>Wanna go back home <a href='/'>Returns</a></p>
    `)

    // console.log(req)
    //When a person makes a request you respond with the following
    // res.write('Welcome to our home page')
    // res.end() //This signals that no more data should be written
})
//we need to determin what port the sever will be listenin on
server.listen(5500) //Congrats we've basically created our website


//What is node server write after end error
// Error [ERR_STREAM_WRITE_AFTER_END]: write after end
