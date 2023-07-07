
const { sendsms, getRandomByLength } = require('../utils');



module.exports.sendsms = async (ctx) => {
    const { mobile } = ctx.request.body;
    // 短信验证码
    const code = getRandomByLength(6);
    const result = await sendsms(mobile, code);

    // 是否发送成功
    if (result.SendStatusSet[0].Code == 'Ok') {
        ctx.body = {
            status:200,
            data:code,
            message:'短信发送成功'
        }
    }else {
        ctx.body = {
            status:0,
            message:'短信发送失败'
        }
    }

   
}