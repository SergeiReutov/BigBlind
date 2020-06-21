import Router from 'koa-router';
import UserController from '../controllers/user.js';

const router = new Router();

router.get('/', UserController.list);
router.post('/', UserController.add);

export default router;
