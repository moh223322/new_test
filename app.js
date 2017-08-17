const express = require("express");

const app = express();
//var bodyParser = require('body-parser');
const port = process.env.PORT || 3000 
//app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

app.get("/:language",(req,res)=>{
	res.send(`your language is ${req.params.language}` )
})


app.listen(port,()=>{
	console.log(`server started at port ${port}`);
});