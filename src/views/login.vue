
<template lang="html">
    <div class="login">
        <!-- <div class="inner_top">{{title}}</div> -->
        <div class="inner_box" ref="loginBox">
            <div class="inner_xp">
                <div class="tit clearfix">
                    <div class="tits-is clearfix">
                        <img class="tit-ls" src="../assets/images/login-logo-jg.png">
                        <div class="tit-rs">
                            <div class="p1" ref="sysTitle">太原市汽车维修电子健康档案系统</div>
                        </div>
                    </div>
                </div>
                <div class="name_box ipt_box">
                    <img src="../assets/images/icon-account.png">
                    <input type="text" v-model="username" name="" placeholder="请输入用户名" maxlength="40">
                </div>
                <div class="name_box ipt_box">
                    <img src="../assets/images/icon-password.png">
                    <input type="password" v-model="password" name="" placeholder="请输入密码" maxlength="40">
                </div>
                <p class="login_btn" :class="{active:loginFlag=== true}" @click="login">登录</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import { setCookie } from '@/utils/cookie.js'
export default {
    name: 'login',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            username: '', // 用户名
            password: '', // 密码
            loginFlag: false,
            title: '',
            sortTit: '',
            sortPy: ''
        }
    },
    created () {
        this.getTitle()
    },
    mounted () {
        this.enterLogin()
        // this.title = '呼和浩特市动车维修与检测监控系统收到'
        // if (this.title.length > 15) {
        //     this.$refs.sysTitle.style.fontSize = '24px'
        // }
        // if (this.title.length > 17) {
        //     this.$refs.sysTitle.style.fontSize = '20px'
        // }
    },
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {
        // 回车自动登陆
        enterLogin () {
            let that = this
            this.$refs.loginBox.addEventListener('keyup', e => {
                e.stopPropagation()
                if (e.keyCode === 13) {
                    that.login()
                    // setTimeout(function () {
                    //     that.login()
                    // }, 150)
                }
            })
        },
        // 获取主标题
        getTitle () {
            this.$post('external/index')
                .then(res => {
                    if (res.status === 200) {
                        setCookie('info3', JSON.stringify(res.data))
                        this.title = res.data.sysTitle
                        if (this.title.length > 15) {
                            this.$refs.sysTitle.style.fontSize = '24px'
                        }
                        if (this.title.length > 17) {
                            this.$refs.sysTitle.style.fontSize = '20px'
                        }
                        document.title = res.data.sysTitle
                        this.sortTit = this.sliceArea(res.data.sysTitle)
                        this.sortPy = window.pinyinUtil.getPinyinFirst(this.sortTit)
                        setCookie('sortTitle', JSON.stringify({
                            sortTit: this.sortTit,
                            sortPy: this.sortPy
                        }))
                    } else {
                        console.log(res.message)
                    }
                })
        },
        sliceArea (str) {
            let strss
            let isCity = str.indexOf('市')
            let isArea = 0
            if (isCity === -1) {
                isArea = str.indexOf('自治区')
                if (isArea !== -1) {
                    strss = str.substring(0, isArea)
                } else {
                    strss = str.substring(0, 2)
                }
            } else {
                strss = str.substring(0, isCity)
            }
            return strss
        },
        login () {
            if (!this.username) {
                this.$alert('请输入登录账号！', '提示')
                return
            }
            if (!this.password) {
                this.$alert('请输入登录密码！', '提示')
                return
            }
            if (this.loginFlag) {
                return
            }
            var res = {
                username: this.username,
                token: 'aaa'
            }
            setCookie('token', res.token, 1)
            setCookie('user', JSON.stringify(res), 1)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/login-bg-big-jg.png) no-repeat;
    background-size: 100% 100%;
    h3 {
        color: #ffffff;
        font-size: 36px;
        font-weight: blod;
        position: absolute;
        top: -100px;
        left: -400px;
        width: 1340px;
        text-align: center;
    }
    .login_tit {
        position: absolute;
        top: 40px;
        left: 60px;
        vertical-align: middle;
        overflow: hidden;
        img {
            width: 43px;
            height: 56px;
            float: left;
        }
        h4 {
            float: left;
            height: 56px;
            margin-left: 20px;
            line-height: 56px;
            font-size: 26px;
            color: #ffffff;
        }
    }
    .inner_top {
        position: absolute;
        top: 150px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 50px;
        color: #00488D;
    }
    .inner_box {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -160px;
        margin-left: -420px;
        width: 840px;
        height: 430px;
        background: url(../assets/images/login-bg-lg-jg.png) no-repeat;
        background-size: 100% 100%;
        // box-shadow:0px 2px 6px 8px rgba(0,0,0,0.1);
        border-radius:10px;
        .inner_xp {
            padding: 20px 20px;
        }
        .tit {
            height: 90px;
            text-align: center;
            font-size: 22px;
            color: #293140;
            font-weight: 500;
            padding: 0 100px;
            margin-bottom: 50px;
            position: relative;
            .tits-is {
                padding:0 10px;
            }
            .tit-ls {
                width: auto;
                display: inline-block;
                height: 80px;
                padding: 10px 0 0;
            }
            .tit-rs {
                display: inline-block;
                padding: 0 0 0 10px;
                max-width: 490px;
                color: #ffffff;
                .p1 {
                    font-size: 22px;
                }
                .p2 {
                    font-size: 14px;
                }
            }
            .tit-ls, .tit-rs {
                vertical-align: middle;
            }
        }
        .ipt_box {
            position: relative;
            width: 330px;
            height: 42px;
            line-height: 42px;
            background: #ffffff;
            border-radius: 4px;
            margin: 0 auto 30px;
            border: 1px solid #D9D9D9;
            img {
                float: left;
                position: absolute;
                width: 17px;
                height: 19px;
                left: 12px;
                top: 11px;
            }
            input {
                width: 290px;
                height: 40px;
                padding-left: 40px;
                border: none;
                font-size: 15px;
                color: #333;
                outline: none;
            }
        }
        .login_btn {
            width: 330px;
            height: 42px;
            text-align: center;
            border-radius: 4px;
            margin: 50px auto 0;
            line-height: 42px;
            background-color: #EF8B1B;
            transition: all .2s;
            font-size: 18px;
            color: #ffffff;
            cursor: pointer;
            &.active {
                background-color: #ccc;
            }
        }
    }
}
@media screen and (max-width: 1400px) {
    .login {
        h3 {
            font-size: 30px;
            left: -438px;
            top: -86px;
        }
        .inner_top {
            font-size: 40px;
        }
        .inner_box {
            width: 720px;
            height: 380px;
            margin-top: -160px;
            margin-left: -360px;
            .inner_xp {
                padding: 20px 20px;
            }
            .tit {
                height: 80px;
                padding: 0 80px;
                margin-bottom: 40px;
                .tit-ls {
                    height: 70px;
                }
                .tit-rs {
                    padding: 0 0 0 10px;
                    max-width: 430px;
                    .p1 {
                        font-size: 22px;
                    }
                    .p2 {
                        font-size: 12px;
                    }
                }
            }
            .login_btn {
                width: 310px;
                height: 42px;
                line-height: 42px;
                margin: 30px auto 0;
            }
            .ipt_box {
                width: 310px;
                height: 42px;
                line-height: 42px;
                margin: 0 auto 15px;
                input {
                    width: 260px;
                    height: 40px;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>
