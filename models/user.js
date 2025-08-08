let users = [];
let nextUserId = 1;

const createUser = (username, email, password) => {
	const user = { id: nextUserId++, username, email, password };
	users.push(user);
	return user;
};

const getUserByUsername = (username) => {
	return users.find((user) => user.username === username);
};

module.exports = {
	createUser,
	getUserByUsername,
};
