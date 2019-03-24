'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {

    //egg 基于koa

    //koa给用户响应信息 ctx.body = 'hi, index';
    //egg this. ctx.body = 'hi, index';

    console.log(this)

    const { ctx } = this;
    ctx.body = 'hi, index';
  }

}

module.exports = AdminController;
