const express = require("express");

const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

app.get("/:language",(req,res)=>{
	res.send(`your language is ${req.params.language}` )
})
app.listen(3000,()=>{
	console.log("server started at port 3000");
});