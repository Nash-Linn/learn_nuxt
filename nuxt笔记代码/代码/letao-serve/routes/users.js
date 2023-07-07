const router = require('koa-router')()
const { register,login} = require('../controller/users');

// 自动给当前users接口模块自动加/users
router.prefix('/users')

// 注册
router.post('/register', register);

// 登录
router.post('/login', login);

module.exports = router
