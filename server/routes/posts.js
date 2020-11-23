import express from 'express';

import { getPosts } from '../container/posts.js';

const router = express.Router();

router.get('/', getPosts);

export default router;
