import publicConfig from './public.js';
import privateConfig from './config.private.js';

const config = {
  ...publicConfig,
  ...privateConfig
};

export default config;
