import { Request, Response } from 'express';
import Post from '../models/Post';
import { AuthRequest } from '../middleware/authMiddleware';

export const createPost = async (req: AuthRequest, res: Response) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({ title, content, author: req.userId });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().populate('author', 'username email');
        res.json(posts);
    } catch (err) {
        res.status(500).json({error: 'Failed to get posts' });
    }
};

export const deletePost = async (req: AuthRequest, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    //only the author can delete
    if (post.author.toString() !== req.userId)
      return res.status(403).json({ error: 'Not authorized' });

    await post.deleteOne();
    res.json({ message: 'Post deleted' });
  } catch {
    res.status(500).json({ error: 'Failed to delete post'});
  }
};