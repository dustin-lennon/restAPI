import express from 'express';
const router = express.Router();

import Post from '../models/Post.js';

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();

    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Deletes a post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, } }
    );

    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;