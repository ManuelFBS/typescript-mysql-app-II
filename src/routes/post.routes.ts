import { Router } from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/post.controller';

const router = Router();

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getPost);

router.route('/delete/:postId').delete(deletePost);

router.route('/update/:postId').put(updatePost);

export default router;
