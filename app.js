var express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

var app = express();
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.use('/bolerplate', routes);

app.listen(3000, function(){
	console.log("server listening");
});
