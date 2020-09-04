module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Pervomayskaya/' : '/',
  transpileDependencies: ['vue-clamp', 'resize-detector'],
};
