const { createSign, getTrade_no, getRandomStr, orderHandle } = require('../utils');
const { appid, mch_id, notify_url, orderUrl, orderquery } = require('../config/wx');
const { query } = require('../db/query');
const QRCode = require('qrcode');



// 微信下单
module.exports.order = async (ctx) => {
    // 前端调用下单接口时传递的参数
    const { body, total_fee, spbill_create_ip, trade_type } = ctx.request.body;
    // 生成sign需要的参数
    const params = {
        appid,
        mch_id,  // 商户号
        nonce_str: getRandomStr(), // 32位以内的随机字符串
        // sign, // 签名
        body, // 商品描述
        out_trade_no: getTrade_no(), // 商户订单号
        total_fee, // 金额
        spbill_create_ip,  // 终端ip
        notify_url, // 微信服务器回调的地址
        trade_type,  // 支付类型
    }
    // 生产签名  需要你发送的参数生成
    const sign = createSign(params);
    //微信下单请求参数    
    let sendData = `
            <xml>
                <appid>${appid}</appid>
                <body>${body}</body>
                <mch_id>${mch_id}</mch_id>
                <nonce_str>${params.nonce_str}</nonce_str>
                <notify_url>${notify_url}</notify_url>
                <out_trade_no>${params.out_trade_no}</out_trade_no>
                <spbill_create_ip>${spbill_create_ip}</spbill_create_ip>
                <total_fee>${total_fee}</total_fee>
                <trade_type>${trade_type}</trade_type>
                <sign>${sign}</sign>
            </xml>
   `
    const data = await orderHandle(orderUrl, sendData);

    // 下单成功
    const { return_code, return_msg, result_code, code_url } = data;
    if (return_code == 'SUCCESS' && return_msg == 'OK' && result_code == "SUCCESS") {
        // 把订单数据写入到payorder
        await query(`insert into payorder (appid,mch_id,nonce_str,body,out_trade_no,total_fee,spbill_create_ip,trade_type,trade_state) values ("${appid}","${mch_id}","${params.nonce_str}","${body}","${params.out_trade_no}","${total_fee}","${spbill_create_ip}","${trade_type}","NOTPAY")`);
        data.payUrl = await QRCode.toDataURL(code_url)
        // 把随机字符串 和商户订单号传给前端
        data.nonce_str = params.nonce_str;
        data.out_trade_no = params.out_trade_no;
    }

    ctx.body = {
        status: 200,
        data
    }
}


// 微信下单通知
module.exports.notify = async (ctx) => {
    // out_trade_no 商户订单号
    const { out_trade_no } = ctx.request.body.xml;
    console.log(ctx.request.body.xml);
    // 根据商户订单号更新订单状态
    await query(`update payorder set trade_state = "SUCCESS" where out_trade_no = "${out_trade_no}" `)

    // 告知微信服务器订单处理完成 维信服务器就不会再重复回调你的这个notify接口
    ctx.body = `<xml>
    <return_code><![CDATA[SUCCESS]]></return_code>
    <return_msg><![CDATA[OK]]></return_msg>
  </xml>`;
}

// 微信订单查询
module.exports.queryOrder = async (ctx) => {
    const { nonce_str, out_trade_no } = ctx.request.body;
    let params = {
        appid,
        mch_id,
        nonce_str, // 32位以内的随机字符串,
        out_trade_no
    };
    // 生成签名
    let sign = createSign(params);

    let sendData = `
       <xml>
            <appid>${appid}</appid>
            <mch_id>${mch_id}</mch_id>
            <nonce_str>${nonce_str}</nonce_str>
            <out_trade_no>${out_trade_no}</out_trade_no>
            <sign>${sign}</sign>
       </xml>
    `

    const data = await orderHandle(orderquery, sendData);

    ctx.body = {
        status: 200,
        data
    }


}