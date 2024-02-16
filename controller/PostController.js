import { Post } from '../models/Post.js';

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getOne = async (req, res) => {
    const slug  = req.params.slug
    try {
        const post = await Post.findOne({slug : slug})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const addPost = async (req, res) => {
    const post = new Post(req.body);
    try {
        const insertedPost = await post.save();
        res.status(201).json(insertedPost);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({_id:req.params.id});
        res.status(200).json(deletedPost)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
