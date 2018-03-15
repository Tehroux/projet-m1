const collectionName = 'cloudUsers';

exports.createUser = (db, userName) => {
	const userCollection = db.collection(collectionName);
	userCollection.insertOne({ userName: userName });
};

exports.removeUser = (db, userName) => {
	const userCollection = db.collection(collectionName);
	userCollection.deleteOne({userName: userName });
};
