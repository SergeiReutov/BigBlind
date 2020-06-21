import User from '../models/user.js';

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
  }
};

export default UserController;
