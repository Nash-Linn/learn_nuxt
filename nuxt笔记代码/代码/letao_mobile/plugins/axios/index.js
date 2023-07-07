const { httpcode } = require('./httpcode');
import { Toast } from 'vant';
export default function ({ $axios, store, redirect,error: nuxtError }, inject) {
    // 请求拦截
    $axios.onRequest(config => {
        // 在请求头中要设置 token 
        // 已登录,   
        if (store.state.token) {
            // 后端有开启JWT校验, 前端调用接口 需要设置token
            $axios.setHeader('Authorization', `Bearer ${store.state.token}`);
        }
        return config;
    })

    //响应拦截
    $axios.onResponse(res => {
        // 服务端 响应的状态码
        const { status, messgage } = res.data;
        // 接口操作失败
        if (!status) {
            Toast(messgage);
        }

    });

    // 错误拦截
    $axios.onError(error => {
        const { response: { data  } } = error;
        console.log(data,'data');
        // http错误码  
        const code = parseInt(error.response && error.response.status)
        // 提示错误信心   
        Toast(httpcode[code])
        // 错误处理
        if (code == 404) {
            redirect('404');
        } else if (code == 401) {  // 没有权限访问接口
            // Promise.resolve({data:{}});
            // redirect('/my/login')
            // store.commit('/login');
            console.log(process.static, 'process.static');
            if (process.static) {
                window.location.href = location.href + '/my/login'
            }

        }
    })
    // 封装请求方法
    let requestMethod = {};

    ['$get', '$post', '$delete', '$put'].forEach(method => {
        // 区分请求参数 是params 还是data
        //     let paramsOrData = method == '$get' || method == '$delete' ? 'params' : 'data';
        //     requestMethod[method] = (url,data)=>{
        //         return $axios({
        //             method,
        //             url,
        //             [paramsOrData]:data
        //         });
        //    }
        // 请求方法
        requestMethod[method] = (url, data) => {
            return $axios[method](url, data);
        }

    });

    inject('request', requestMethod);
}