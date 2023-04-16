const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8443/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
