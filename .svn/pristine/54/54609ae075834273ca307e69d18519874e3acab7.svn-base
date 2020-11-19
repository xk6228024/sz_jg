// 设置表格序号
function setNum (arr, pageNum, pageSize) {
    let number = (pageNum - 1) * pageSize
    for (let item of arr) {
        let index = ++number
        item.num = index < 10 ? '0' + index : index
    }
    return arr
}

// 遍历菜单数组，组成树形
function makeMenuTree (list) {
    let arr = []
    list.forEach(element => {
        if (element.type === 0) {
            element.children = []
            arr.push(element)
        }
    })
    arr.forEach(element => {
        element.children = list.filter(e => {
            return e.parentId === element.menuId
        })
    })
    arr.forEach(element => {
        element.children.forEach(k => {
            k.children = list.filter(e => {
                return e.parentId === k.menuId
            })
        })
    })
    return arr
}
/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
function treeDataTranslate (data, id = 'id', pid = 'parentId') {
    var res = []
    var temp = {}
    for (var i = 0; i < data.length; i++) {
        temp[data[i][id]] = data[i]
    }
    for (var k = 0; k < data.length; k++) {
        if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
            if (!temp[data[k][pid]]['children']) {
                temp[data[k][pid]]['children'] = []
            }
            if (!temp[data[k][pid]]['_level']) {
                temp[data[k][pid]]['_level'] = 1
            }
            data[k]['_level'] = temp[data[k][pid]]._level + 1
            temp[data[k][pid]]['children'].push(data[k])
        } else {
            res.push(data[k])
        }
    }
    return res
}
function setCookie (name, value, days) {
    let Days = days || 7 // 此 cookie 将被保存 30 天
    let exp = new Date() // new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 3600 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + '; path=/'
}
/**
 * 设置允许子域共享的cookie
 * @param {[String]}
 * @param {[String]}
 */
function setCorsCookie (name, value) {
    // 设置过期时间
    let d = new Date()
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000))
    let expires = d.toUTCString()
    // 设置共享子域
    let host = location.hostname.split('.')
    let domain = host[1] + '.' + host[2]
    // 设置cookie
    document.cookie = name + '=' + escape(value) + ';domain=' + domain + ';expires=' + expires + ';path=/'
}
/**
 * 清除指定cookie
 * @param  {[String]}
 */
function cleanCookie (name) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = getCookie(name)
    if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + '; path=/'
    }
}
/**
 * 获取cookie
 * @param  {[String]}
 */
function getCookie (name) {
    let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr != null) {
        return unescape(arr[2])
    } else {
        return null
    }
}
/**
 * 清除所有cookie
 */
function clearAllCookie () {
    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i]
        let eqPos = cookie.indexOf('=')
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    }
    if (cookies.length > 0) {
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i]
            let eqPos = cookie.indexOf('=')
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
            let domain = location.host.substr(location.host.indexOf('.'))
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + domain
        }
    }
}
export {
    setCorsCookie,
    setCookie,
    cleanCookie,
    getCookie,
    clearAllCookie,
    setNum,
    makeMenuTree,
    treeDataTranslate
}
