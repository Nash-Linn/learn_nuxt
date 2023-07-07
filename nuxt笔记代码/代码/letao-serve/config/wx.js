// appid
module.exports.appid = '自己的appid';
// 商户号
module.exports.mch_id = '自己的商户号';
// 商户号中的key
module.exports.key = '自己的商户号中的key';


// 微信下单
module.exports.orderUrl = 'https://api.mch.weixin.qq.com/pay/unifiedorder';

//  微信订单查询
module.exports.orderquery = 'https://api.mch.weixin.qq.com/pay/orderquery';

// 微信下单成功后回调地址(要实现这个接口) 写自己的服务器回调
module.exports.notify_url = 'http://vips968.com:3000/pay/notify';