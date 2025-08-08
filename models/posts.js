let posts = [];
let nextId = 1;

const createPost = (title, content, authorId) => {
	const post = { id: nextId++, title, content, authorId };
	posts.push(post);
	return post;
};

const getPosts = () => {
	return posts;
};

const getPostById = (id) => {
	return posts.find((post) => post.id === parseInt(id));
};

const updatePost = (id, title, content) => {
	const postIndex = posts.findIndex((post) => post.id === parseInt(id));

	if (postIndex !== -1) {
		posts[postIndex] = { ...posts[postIndex], title, content };
		return posts[postIndex];
	}
	return null;
};

const deletePost = (id) => {
	const postIndex = posts.findIndex((post) => post.id === parseInt(id));

	if (postIndex !== -1) {
		return posts.splice(postIndex, 1)[0];
	}
	return null;
};

module.exports = {
	createPost,
	getPosts,
	getPostById,
	updatePost,
	deletePost,
};
