'use strict';

const Controller = require('egg').Controller;

//egg 是mvc框架

class NewsController extends Controller {
  async index() {
    const { ctx } = this;

    //get传值 
    // const params = ctx.query
    // console.log(params)
    // ctx.body = 'hi, news';

    //渲染news.html  后缀名可以省略
    //注意要加上 await

    const msg = 'ejs'
    var list = ['逍遥生', '飞剑侠', '君路在何方']

    //第二个是参数
    await ctx.render('news',{
        msg,
        list
    })

  }

  async newslist () {

    const { ctx } = this;

    //动态路由传值
    //http://127.0.0.1:7001/newslist/123
    // { id: '123' }
    const params = ctx.params
    console.log(params)



    this.ctx.body = '新闻列表'
  }

 
}

module.exports = NewsController;
