import publicConfig from './config.public.js';
import privateConfig from './config.private.js';

const config = {
  ...publicConfig,
  ...privateConfig
};

export default config;
