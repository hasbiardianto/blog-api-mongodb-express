import express from 'express'
import { 
    getPost, 
    addPost, 
    getOne,
    updatePost,
    deletePost
} from '../controller/PostController.js';


const router = express.Router();


// Post
router.get('/posts', getPost)
router.get('/post/:slug', getOne)
router.post('/post', addPost)
router.patch('/post/:id', updatePost)
router.delete('/post/:id', deletePost)

export default router