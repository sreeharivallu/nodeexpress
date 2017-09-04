var express = require('express');
var cors = require('cors')
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const db = require('./db/db');
//var multer = require('multer');

var app = express();
app.use(cors());

//app.use(multer({dest:'./uploads/'}).any());  //Need to check how to store with the samefile name that we are receiving
// parse application/x-www-form-urlencoded 

app.use(bodyParser.urlencoded({ extended: false }))

 
// parse application/json 
app.use(bodyParser.json())

app.use('/boilerplate', routes);

db.connect('', function(err){

	if(err){
		console.log("failed to connect to database");
	}else{
		app.listen(3000, function(){
		console.log("server listening");
	});	
	}
	
})