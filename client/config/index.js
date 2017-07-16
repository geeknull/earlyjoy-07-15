let Config = {};
import devConfig from './develop.js';
import prodConfig from './production.js';

// 如果是开发环境
if (process.env.NODE_ENV === 'develop') {
  Config = devConfig;
} else {
  Config = prodConfig;
}

export default Config;
