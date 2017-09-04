db = require('./db');

exports.insertdocument = function(object){	

    return new Promise((resolve, reject) => {
    	
		dbConn = db.get();

		let collection = dbConn.collection('users')
		
		collection.insert(object)
		.then(result => resolve(result))	
		.catch(err => reject(err)); 	

    })
}