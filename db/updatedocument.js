db = require('./db');

exports.updatedocument = function(queryobj, updateobj){	
    console.log('updateObj', updateobj);
    return new Promise((resolve, reject) => {
    	console.log('queryobj is', queryobj);
		dbConn = db.get();

		let collection = dbConn.collection('users')
		
		console.log('updateobj is', updateobj);
		collection.update(queryobj, updateobj, {upsert:true})
		.then(result => resolve(result))	
		.catch(err => reject(err)); 	

    })
}