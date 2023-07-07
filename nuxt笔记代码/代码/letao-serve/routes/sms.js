const router = require('koa-router')();
const { sendsms } = require('../controller/sms.js');


// 发送短信
router.post('/sendsms', sendsms);

module.exports = router;
