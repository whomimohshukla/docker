const postsModel = require("../models/posts");

const getPosts = (req, res) => {
	const posts = postsModel.getPosts();
	res.json(posts);
};

const createPost = (req, res) => {
	const { title, content, authorId } = req.body;
	const post = postsModel.createPost(title, content, authorId);
	res.status(201).json(post);
};

const getPostById = (req, res) => {
	const { id } = req.params;
	const post = postsModel.getPostById(id);

	if (post) {
		res.json(post);
	} else {
		res.status(404).json({ message: "Post not found" });
	}
};

const updatePost = (req, res) => {
	const { id } = req.params;
	const { title, content } = req.body;
	const updatedPost = postsModel.updatePost(id, title, content);

	if (updatedPost) {
		res.json(updatedPost);
	} else {
		res.status(404).json({ message: "Post not found" });
	}
};

const deletePost = (req, res) => {
	const { id } = req.params;
	const deletedPost = postsModel.deletePost(id);

	if (deletedPost) {
		res.json({ message: "Post deleted" });
	} else {
		res.status(404).json({ message: "Post not found" });
	}
};

module.exports = {
	getPosts,
	createPost,
	getPostById,
	updatePost,
	deletePost,
};
