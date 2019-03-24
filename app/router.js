'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //http://127.0.0.1:7001/  
  //会寻找controller文件下home文件的index方法
  router.get('/', controller.home.index);

  router.get('/news', controller.news.index);

  //动态路由
  // http://127.0.0.1:7001/newslist/123
  router.get('/newslist/:id', controller.news.newslist);

  
  router.get('/admin', controller.admin.index);

};


 