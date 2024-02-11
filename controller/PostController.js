const Post = require("../models/Post");

const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = getPost;