const collectionName = 'cloudUsers';

exports.createUser = (db, userName) => {
	const userCollection = db.collection(collectionName);
	userCollection.findOne({ userName: userName }, (err, result) => {
		if (result === null) {
			userCollection.insertOne({ userName: userName });
			console.log('> user added');
		} else {
			console.log('> user already exist');
		}
	});
};

exports.removeUser = (db, userName) => {
	const userCollection = db.collection(collectionName);
	userCollection.deleteMany({userName: userName });
	console.log('> userDeleted');
};
