var express = require('express');
var cors = require('cors')
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

var app = express();
app.use(cors());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.use('/boilerplate', routes);

app.listen(3000, function(){
	console.log("server listening");
});
