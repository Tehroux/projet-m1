exports.createUser = (db, userName) => {
	 const userCollection = db.collection('cloudUsers');
	userCollection.insertMany([{userName: userName}]);
};
