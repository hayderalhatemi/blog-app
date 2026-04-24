import { Router } from 'express';
import { createPost, getPosts, deletePost } from '../controllers/postController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', getPosts);
router.post('/', protect, createPost);
router.delete('/:id', protect, deletePost);

export default router;