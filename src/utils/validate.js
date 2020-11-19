export function validate (item) {
    // console.log(item)
    // 手机号校验
    const phoneValidate = (rules, value, callback) => {
        // console.log(value)
        if (value) {
            if (!(/^1\d{10}$/.test(value))) {
                callback(new Error('请输入正确的手机号'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
    const telValidate = (rules, value, callback) => {
        // console.log(value)
        if (value) {
            if (!(/(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/.test(value)) && !(/^1\d{10}$/.test(value))) {
                callback(new Error('请输入正确的电话号码'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
    const LicensePlate = (rules, value, callback) => {
        console.log(value)
        if (value) {
            if (!(/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(value))) {
                callback(new Error('请输入正确的车牌号'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
    // const priceValidate = (rules, value, callback) => {
    //     // console.log(value)
    //     if (value) {
    //         if (!(/^1[34578]\d{9}$/.test(value))) {
    //             callback(new Error('请输入正确的手机号'))
    //         } else {
    //             callback()
    //         }
    //     } else {
    //         callback()
    //     }
    // }
    // 0<X<1
    const discountValidate = (rules, value, callback) => {
        if (value) {
            if (value > 1 || value <= 0) {
                callback(new Error('请输入大于0小于1的数字'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
    const numberValidate = (rules, value, callback) => {
        if (value) {
            // if (!/^[0-9]*$/.test(value) || value - 0 === 0) {
            if (value - 0 <= 0 || value - 0 >= 10000) {
                callback(new Error('请输入正确的金额'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
    // 校验
    const arrayValidate = (rules, value, callback) => {
        if (Array.isArray(value)) {
            if (value.length === 0) {
                callback(new Error('该项为必填项'))
            } else {
                callback()
            }
        } else {
            callback(new Error('该输入项需要是数组'))
        }
    }
    const noRepeat = (rules, value, callback) => {
        if (value) {
            let repeatLength = rules.repeatLength || 2
            if (value.length >= repeatLength && /^(\d)\1+$/.test(value)) {
                callback(new Error('不允许输入相同的数字'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
    let rules = []
    if (item.required && !item.msg) {
        rules.push({ required: true, message: '该项为必填项', trigger: ['change'] })
    }
    if (item.required && item.msg) {
        rules.push({ required: true, message: item.msg, trigger: ['change'] })
    }
    if (item.max && !item.min) {
        rules.push({ min: 1, max: item.max, message: `最多输入${item.max}个字符!`, trigger: ['change'] })
    }
    if (item.min && item.max) {
        rules.push({ min: item.min, max: item.max, message: `字符长度在${item.min}至${item.max}之间!`, trigger: ['change'] })
    }
    if (item.noRepeat) {
        rules.push({ validator: noRepeat, message: '不允许输入相同的数字', trigger: ['change'], repeatLength: item.repeatLength })
    }
    if (item.type) {
        let type = item.type
        switch (type) {
        case 'C+E+)':
            rules.push({ pattern: /^[/(/)A-Za-z\u4e00-\u9fa5]+$/, message: '只允许输入中文和英文字母', trigger: ['change'] })
            break
        case 'C+E':
            rules.push({ pattern: /^[A-Za-z\u4e00-\u9fa5]+$/, message: '只允许输入中文和英文字母', trigger: ['change'] })
            break
        case 'C+E+N':
            rules.push({ pattern: /^[0-9A-Za-z\u4e00-\u9fa5]+$/, message: '只允许输入中文和英文字母和数字', trigger: ['change'] })
            break
        case 'email':
            rules.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: ['change'] })
            break
        case 'array':
            rules.push({ type: 'array', message: '该项为必填项', trigger: ['change'] })
            break
        case 'phone':
            rules.push({ validator: phoneValidate, trigger: ['change'] })
            break
        case 'LicensePlate':
            rules.push({ validator: LicensePlate, trigger: ['change'] })
            break
        case 'tel':
            rules.push({ validator: telValidate, trigger: ['change'] })
            break
        case 'number2':
            rules.push({ pattern: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/, message: '请输入正确的金额', trigger: ['change'] })
            rules.push({ validator: numberValidate, message: '请输入正确的金额' })
            break
        case 'number':
            rules.push({ type: 'number', message: '必须为数字' })
            break
        case 'EN':
            rules.push({ pattern: /^[0-9a-zA-Z]+$/, message: '请输入字母和数字的组合', trigger: ['change'] })
            break
        case 'EN.':
            rules.push({ pattern: /^[0-9a-zA-Z/.]+$/, message: '请输入字母和数字的组合', trigger: ['change'] })
            break
        case 'ENS':
            rules.push({ pattern: /^[0-9a-zA-Z/.\s]+$/, message: '请输入字母和数字的组合', trigger: ['change'] })
            break
        case 'E+N':
            rules.push({ pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])$/, message: '请输入字母和数字的组合', trigger: ['change'] })
            break
        case 'discount':
            rules.push({ validator: discountValidate, message: '请输入大于0小于1的数字', trigger: ['change'] })
            break
        case 'array1':
            rules.push({ type: 'array', message: '请至少选择一个选项', trigger: ['change'] })
            rules.push({ validator: arrayValidate, trigger: ['change'] })
            break
        case 'price':
            rules.push({ pattern: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/, message: '请输入正确的价格', trigger: ['change'] })
            break
        case 'num':
            rules.push({ pattern: /^\d+$/, message: '请输入正整数', trigger: ['change'] })
            break
        case 'qq':
            rules.push({ pattern: /^\d{5,12}$/, message: '请输入正确的QQ号', trigger: ['change'] })
            break
        case 'floatNumber':
            rules.push({ pattern: /^\d+(\.\d+)?$/, message: '请输入正整数，支持小数', trigger: ['change'] })
            break
        case 'enterpriseCreditIdentifier':
            rules.push({ pattern: /^[\da-zA-Z]{18}$/, message: '社会信用代码应为18位的数字和字母组合', trigger: ['change'] })
            break
        case 'enterpriseBusinessCertificate':
            rules.push({ pattern: /^[\da-zA-Z]{12}$/, message: '许可证号应为12位的数字和字母组合', trigger: ['change'] })
            break
        case 'idcard':
            rules.push({
                pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                message: '请输入正确的身份证号码',
                trigger: ['change']
            })
            break
        default: break
        }
    }
    return rules
}
