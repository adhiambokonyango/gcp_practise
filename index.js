const express = require('express')
const app = express()
const bodyparser = require('body-parser')

// body-parser middleware use
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))


app.get("/hello", (req, res)=>{
    res.send( "hello world" );
})


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


app.listen(3000,  ()=>{
    console.log("server started on 3000")
});
