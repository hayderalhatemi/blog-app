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