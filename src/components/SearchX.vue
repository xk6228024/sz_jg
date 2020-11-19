<template>
    <div class="search-bar clearfix" :class="{'bord':border}">
        <div class="form" :style="{width:secrchWidth}">
            <div class="search-item" v-for="(item, index) in showOption" :key="index" :style="{width: 100/(showOption.length + 1) + '%'}"  style="min-width:33%;">
                <a-input
                    :style="setInputStyle(item, index)"
                    v-if="item.type === 'input'"
                    v-model="value[item.key]"
                    :placeholder="item.placeholder || '请输入'">
                </a-input>
                <label class="label">{{item.name}}</label>
                <a-select
                    :style="setInputStyle(item, index)"
                    v-if="item.type === 'select'"
                    allowClear
                    v-model="value[item.key]"
                    @change="val => { item.change && item.change(val) }"
                    placeholder="请选择">
                    <a-select-option
                    :value="child[item.listValue || 'value']"
                    v-for="(child, childIndex) in item.list"
                    :key="'child' + childIndex">
                        {{child[item.listLabel || 'label']}}
                    </a-select-option>
                </a-select>
                <a-date-picker
                    :style="setInputStyle(item, index)"
                    v-if="item.type === 'date'"
                    v-model="value[item.key]"/>
                <a-range-picker
                    :style="setInputStyle(item, index)"
                    v-if="item.type === 'range'"
                    v-model="value[item.key]" />
                <a-cascader
                    :style="setInputStyle(item, index)"
                    :options="region"
                    :fieldNames="{label: 'regionName', value: 'regionId', children: 'list'}"
                    placeholder="请选择"
                    changeOnSelect
                    v-if="item.type === 'cascader'"
                    v-model="value[item.key]"/>
                <a-date-picker
                    :style="setInputStyle(item, index)"
                    v-if="item.type === 'year'"
                    v-model="value[item.key]"
                    :open='isopen'
                    format="YYYY"
                    mode='year'
                    placeholder="请选择"
                    @openChange='e => isopen = e'
                    @panelChange='e => {value[item.key] = e; isopen = false}'
                    @change='value[item.key] = null'
                />
            </div>
            <div class="search-btn" >
                <a-button type="primary" @click="searchData">查询</a-button>
                <a-button @click="reset" style="margin-right: 0;">重置</a-button>
                <a-button  type="link" style="margin-right: 0;" @click="changeLength()" v-if="showOption.length>2">收起<a-icon type="up"/></a-button>
                <a-button  type="link" style="margin-right: 0;" @click="changeLength(1)" v-if="option.length!==showOption.length">展开<a-icon type="down"/></a-button>
            </div>
        </div>
        <slot name="default"></slot>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="btn">
            <slot name="btn"></slot>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: ['border', 'option', 'value'],
    data () {
        return {
            moment,
            showOption: [],
            isopen: false
        }
    },
    computed: {
        region () {
            return this.$store.state.regionList
        },
        secrchWidth () {
            // if (this.showOption.length === 1) {
            //     return '33.33%'
            // } else
            if (this.showOption.length === 1) {
                return '66.33%'
            } else {
                return '100%'
            }
        }
    },
    created () {
        this.showOption = this.option.slice(0, 2)
    },
    methods: {
        changeLength (more) {
            if (more) {
                this.showOption = this.option
            } else {
                this.showOption = this.option.slice(0, 2)
            }
        },
        // 动态设置输入框样式
        setInputStyle (item, index) {
            return {
                'margin-left': item.name.length * 14 + 'px',
                'width': 'calc(100% - ' + (item.name.length * 14 + (index === 33 ? 0 : 30)) + 'px' + ')'
            }
        },
        // 查询数据
        searchData () {
            this.$emit('search', this.value)
        },
        // 重置
        reset () {
            let obj = this.value
            for (let key in obj) {
                obj[key] = undefined
            }
            this.$emit('input', obj)
        }
    }
}
</script>

<style lang='less'>
.search-bar {
    padding: 24px 0px 0px;
    color: #333;
    .btn {
        float:right;
        .margin {
            margin-top: 16px;
        }
    }
    .title {
        color: #333;
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
    }
    .search-item {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        min-width: 33%;
        margin-bottom: 24px;
        .label {
            position: absolute;
            top: 0;
            left: 0;
            height: 32px;
            line-height: 32px;
            text-align: right;
        }
        & > .ant-input,& > .ant-select, .ant-calendar-picker {
            display: block;
        }
    }
    .search-btn {
        width: 33%;
        vertical-align: middle;
        margin-bottom: 24px;
        display: inline-block;
        .ant-btn {
            margin-right: 8px;
        }
        &.fixed {
            width: 140px;
        }
    }
    .form {
        width: 100%;
        float: left;
    }
    .ant-form-item {
        margin-bottom: 0;
    }
    .ant-form-item-children {
        display: block;
    }
    .ant-form-item-control {
        line-height: 32px;
    }
}
</style>
