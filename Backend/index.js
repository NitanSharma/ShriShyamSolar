const express = require("express");
const app = express();

let port = 3000;

app.listen(port , () =>{
    console.log(`app is listening on the port ${port}.`)
});



app.get('/',(req,res) =>{
    res.send("<h1>HOME</h1>");
} )

