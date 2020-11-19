// import vm from '../main.js'
import promise from 'es6-promise'
import axios from 'axios'
import { getCookie } from './cookie'
promise.polyfill()

// 处理IE兼容
if (window['context'] === undefined) {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
    }
    window['context'] = location.origin + '/V6.0'
}

const dev = process.env.NODE_ENV === 'development'

// 默认请求地址
let _path = dev ? '/vmts-supervision/' : '/api/'
// _path = '/api/'
axios.defaults.baseURL = window.location.origin + _path
window.uploadURL = window.location.origin + _path + 'external/'

// 登录回跳地址
window.loginURL = window.location.origin + '/#/login'

// 响应时间
axios.defaults.timeout = 120000
axios.defaults.withCredentials = true

// 传参序列化
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json;charset=UTF-8'
    getCookie('token') && (config.headers.token = getCookie('token'))
    return config
}, function (error) {
    console.log('请求失败')
    return Promise.reject(error)
})

// 登录拦截器
// axios.interceptors.response.use(function (response) {
//     if (/^300$|^302$/.test(response.data.status)) {
//         clearCookie('token')
//         clearCookie('user')
//         window.location.href = window.loginURL
//         return response
//     } else {
//         return response
//     }
// }, function (error) {
//     return Promise.reject(error)
// })

// 返回一个Promise(发送post请求)
function post (url, params, config) {
    console.log(1)
}

// 返回一个Promise(发送get请求)
function get (url, params, config) {
    console.log(1)
}
export {
    post,
    get
}
