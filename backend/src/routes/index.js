import Router from 'koa-router';
import UserController from '../controllers/user.js';

const router = new Router();

router.get('/', UserController.list);
router.post('/', UserController.add);
router.delete('/', UserController.removeAll);
router.post('/login', UserController.login);

export default router;
