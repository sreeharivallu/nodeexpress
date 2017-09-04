db = require('./db');

exports.deletedocument = function(object){	

    return new Promise((resolve, reject) => {
    	
		dbConn = db.get();

		let collection = dbConn.collection('users')
		
		collection.remove(object, {justone: true})
		.then(result => resolve(result))	
		.catch(err => reject(err)); 	

    })
}