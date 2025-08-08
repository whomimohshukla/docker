const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
const users = require("./routes/user");

const app = express();
app.use(express.json());

// Import Bootstrap CSS
app.use(
	"/css",
	express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/posts", posts);
app.use("/users", users);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
