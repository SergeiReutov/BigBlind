import Koa from 'koa';
import cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import router from './routes/index.js';
import config from './config/default.js';

mongoose.connect(config.database.url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', console.error);

const app = new Koa();

app.use(BodyParser());
app.use(cors());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.app.port, () => {
  console.log('Server is running');
});
