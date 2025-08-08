const usersModel = require("../models/user");

const createUser = (req, res) => {
	const { username, email, password } = req.body;
	const user = usersModel.createUser(username, email, password);
	res.status(201).json(user);
};

const getUserByUsername = (req, res) => {
	const { username } = req.params;
	const user = usersModel.getUserByUsername(username);

	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: "User not found" });
	}
};

module.exports = {
	createUser,
	getUserByUsername,
};
