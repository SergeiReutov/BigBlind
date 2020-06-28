import User from '../models/User.js';

const UserController = {
  add: async ctx => {
    try {
      const user = await new User(ctx.request.body).save();
      ctx.body = user;
    } catch (err) {
      ctx.throw(422);
    }
  },
  list: async ctx => {
    ctx.body = await User.find();
  },
  removeAll: async ctx => {
    try {
      await User.deleteAll();
      ctx.body = {
        result: 'OK'
      };
    } catch (err) {
      ctx.throw(422);
    }
  },
  login: async ctx => {
    try {
      console.log('login here');
      const { login, password } = ctx.request.body;
      const user = await User.login(login, password);
      if (!user) {
        ctx.res.statusCode = 403;
      } else {
        ctx.body = user;
      }
    } catch (err) {
      ctx.throw(500);
    }
  }
};

export default UserController;
