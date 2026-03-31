import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', getPosts);
router.post('/', protect, createPost);

export default router;