const express = require ("express");
require ("dotenv");
const path = require ("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(PORT, function(){
    console.log(" . . . app is listening on this port");
    
})