import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import config from './config.prod.babel.js';
import webpack from 'webpack';

config.plugins.unshift(
  new webpack.DefinePlugin({
    IS_JAVASCRIPT: true,
    LAST_MODIFIED: Date.now(),
  })
);

config.plugins.unshift(
  new StaticSiteGeneratorPlugin('static', ['/index.html'], { skipJS: false })
);

export default config;
