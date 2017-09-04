var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/mydb";

var dbstate = {
  db: null,
}

exports.connect = function(url, done) {
  if (dbstate.db) return done()
  
  MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
    if (err) return done(err)
    dbstate.db = db
    done()
  })
}

exports.get = function() {
  return dbstate.db
}

exports.close = function(done) {
  if (dbstate.db) {
    dbstate.db.close(function(err, result) {
      dbstate.db = null
      dbstate.mode = null
      done(err)
    })
  }
}
