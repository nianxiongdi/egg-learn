'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, index';


    // await this.ctx.render('index')



  }

  async news() {
    const { ctx } = this;
    ctx.body = 'hi, news';
  }
}

module.exports = HomeController;
