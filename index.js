const express = require('express');

let app = express();

app.get("/", (req, res, send) =>{
    app.send("Hello world")
});

//console.log(app);
//app.listen(4000, function(){
//    console.log("slusam");
//});

const port = 3000;
app.listen(port, (error) => {
    if (error){
        console.log("greska");
    }else{
        console.log("proba");
        }
});