import express from "express";
import {
  getPost,
  addPost,
  getOne,
  updatePost,
  deletePost,
} from "../controller/PostController.js";
import { loginUser, registerUser, authMidleware } from "../controller/UserController.js";

const router = express.Router();

// Post
router.get("/posts", getPost);
router.get("/post/:slug", getOne);
router.post("/post", authMidleware, addPost);
router.patch("/post/:id", authMidleware, updatePost);
router.delete("/post/:id", authMidleware, deletePost);

// User
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
