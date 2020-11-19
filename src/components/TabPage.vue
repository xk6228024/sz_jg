<template>
    <div class="worp-page">
        <div class="worp-content">
            <div class="sec-level clearfix">
                <div tag="div" class="level-lis fl" :class="{'active': activeIndex===index}" @click="toChooseLis(index)" v-for="(item, index) in data" :key="index">
                    <div>{{item.name}}</div>
                </div>
            </div>
            <div class="worp-body">
                <component :is="data[activeIndex].component"></component>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'creditEva',
    // 组件属性、变量、用于接收父组件的传值
    props: ['data', 'index'],
    // 变量
    data () {
        return {
            activeIndex: 0
        }
    },
    created () {
        if (this.index) {
            this.activeIndex = this.index
        }
    },
    computed: {},
    filters: {
    },
    // 使用其它组件
    components: {
    },
    // 方法
    watch: {},
    methods: {
        toChooseLis (val) {
            this.activeIndex = val
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.worp-page {
    .worp-content {
        width: 100%;
        box-sizing: border-box;
        top: 0;
        .sec-level {
            height: 44px;
            .level-lis {
                cursor:pointer;
                background: #ffffff;
                box-sizing: border-box;
                line-height: 38px;
                font-size: 14px;
                margin-right: 10px;
                color: #595959;
                padding: 0 40px;
                border-radius:3px 3px 0px 0px;
                border-top: 3px solid #ffffff;
                border-bottom: 3px solid #ffffff;
                &.active {
                    border-top: 3px solid #3E94FE;
                    color: #3E94FE;
                }
            }
        }
        .worp-body {
            background: #fff;
            padding: 24px;
        }
    }
}
</style>
