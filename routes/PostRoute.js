const express = require('express');
const router = express.Router();
const  getPost = require('../controller/PostController');

const Post = require('../models/Post')

// Post
router.get('/posts', getPost)

module.exports = router;