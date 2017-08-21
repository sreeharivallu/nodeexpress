var express = require('express')
var router = express.Router()
var multer = require('multer');

/*use this if you want to store file with same filename
  that you are getting. Ideally, it is not safe to store
  files
  */
 /*
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({storage:storage});
*/

var upload = multer({dest:'./uploads'});
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About route')
})

//This accepts files as well
router.post('/form',upload.any(),function(req, res, next){	
	res.send('form posted');
})

module.exports = router