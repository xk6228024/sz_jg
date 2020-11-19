import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/ant-design-vue.js'
import { get, post } from './utils/http'
import { filterTime, filterStrTime, thousands } from './utils/filterTime.js'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import { checkAuth } from './utils/auth.js'
import { zoomImg } from './assets/js/zoomImg.js'
import { validate } from './utils/validate'
import { getCookie, setNum } from './utils/utils'
import myAlert from './assets/js/myAlert.js'
import toast from './assets/js/toast.js'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import './assets/css/reset.css'

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$myAlert = myAlert
Vue.prototype.$toast = toast
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$validate = validate
Vue.prototype.$zoomImg = zoomImg
Vue.prototype.$getCookie = getCookie
Vue.prototype.$filterTime = filterTime
Vue.prototype.$setNum = setNum
Vue.prototype.$randomStr = function (len) {
    len = len || 16
    var $chars = 'Z123456789ABCDEFGHJKMNPQRSTWXY'
    var maxPos = $chars.length
    var pwd = ''
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
}
Vue.prototype.$randomTime = function () {
    let now = new Date().getTime()
    return Math.floor(now - (Math.random() * 1000 * 60 * 60 * 24 * 365))
}
Vue.prototype.$getEntList = function (region) {
    let startNum = Math.floor(Math.random() * 10)
    let list = this.$store.state.entList.slice(startNum, startNum + 10)
    return this.$setNum(list, 1, 99)
}
Vue.prototype.$filterRegion = function (list, key, name) {
    return list.map(e => {
        e[key] = name
        return e
    })
}
Vue.use(ElementUI)
Vue.use(BaiduMap, {
    ak: 'f7GpjqXB2NkRGlzqIqywWTbo'
})
Vue.prototype.$checkAuth = checkAuth
Vue.filter('filterTime', filterTime)
Vue.filter('filterStrTime', filterStrTime)
Vue.filter('thousands', thousands)
Vue.filter('filterCommon', function (id, list, value, label) {
    for (let element of list) {
        if (element[value || 'value'] - 0 === id - 0) {
            return element[label || 'label']
        }
    }
})
Vue.filter('filterRegion', function (value) {
    let list = JSON.parse(localStorage.regionList)
    let name = value
    list.forEach(i => {
        if (i.regionId === value) {
            name = i.regionName
        }
    })
    return name
})

Vue.config.productionTip = false
const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
export default vm
