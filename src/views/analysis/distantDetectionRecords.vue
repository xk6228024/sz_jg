<!-- 角色管理 -->
<template>
    <div class="page">
        <div class="content">
            <tool-bar>
                <div class="fl">
                    <label>车牌号码：</label>
                    <el-input class="tool_ipt" v-model="personName" placeholder="请输入内容"></el-input>
                    <label>车牌颜色：</label>
                    <el-select v-model="vehicleLicensePlateColor" placeholder="请选择">
                        <el-option
                        v-for="item in plateColor"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="fr">
                    <el-button class="query_btn slects_btn" @click="queryData(1)" :disabled="!$checkAuth('sys:role:find')">查询</el-button>
                    <el-button class="react_btn" @click="toReact">重置</el-button>
                </div>
            </tool-bar>
            <div class='wrap'>
                <div class="table_box">
                    <el-table
                        :data="dataList"
                        v-loading="loading"
                        height="550"
                        :header-cell-style="{'text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="width: 100%">
                    <el-table-column
                        prop="num"
                        label="序号"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="plate"
                        label="车牌号码"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="plateColor"
                        label="车牌颜色"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseName"
                        label="检测企业名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="createTime"
                        label="检测时间"
                        >
                        <template slot-scope="scope">
                            {{scope.row.createTime|filterTime('yyyy-mm-dd')}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="检测类型"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="result"
                        label="检测结果"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="code"
                        label="检测报告编号"
                        >
                    </el-table-column>
                    <el-table-column
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="goDetail(scope.row.roleId)" :disabled="!$checkAuth('sys:role:view')">详情</el-button>
                        </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="page_box">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageNum"
                        :page-sizes="[10, 15, 20, 25]"
                        :page-size="pageSize"
                        background
                        layout="prev, pager, next, sizes,  jumper, total"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-setting-normal">
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
import Sidebar from '@/components/Sidebar.vue'
// import { setNum } from '@/utils/tools.js'
import toolBar from '@/components/ToolBar.vue'
import { plateColor } from '@/utils/type.js'
export default {
    name: 'roleManager',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '异地检测作业查询', path: '' }
            ],
            loading: false,
            personName: '',
            input: '',
            value: '',
            plateColor,
            pageSize: 10,
            pageNum: 1,
            total: 3,
            vehicleLicensePlateColor: '',
            dataList: [
                {
                    num: 1,
                    plate: '晋A89FE3',
                    plateColor: '黄色',
                    enterpriseName: '太原市市明达汽车检测有限公司',
                    createTime: 1588583199996,
                    type: '技术等级评定',
                    result: '一级',
                    code: '231222001202004210003'
                },
                {
                    num: 2,
                    plate: '晋AAS776',
                    plateColor: '黄色',
                    enterpriseName: '太原市市明达汽车检测有限公司',
                    createTime: 1588583199996,
                    type: '技术等级评定',
                    result: '一级',
                    code: '231222001202004210002'
                },
                {
                    num: 3,
                    plate: '晋A583AS',
                    plateColor: '黄色',
                    enterpriseName: '太原市辰宇机动车检测服务有限公司',
                    createTime: 1588583199996,
                    type: '其他检测',
                    result: '二级',
                    code: '220183005202004200004'
                },
                {
                    num: 4,
                    plate: '晋A58311',
                    plateColor: '黄色',
                    enterpriseName: '太原市新金龙机动车检测服务有限公司',
                    createTime: 1588583199996,
                    type: '其他检测',
                    result: '二级',
                    code: '220183005202004200004'
                },
                {
                    num: 5,
                    plate: '晋A583AS',
                    plateColor: '黄色',
                    enterpriseName: '太原黄元机动车检测服务有限公司',
                    createTime: 1588583199333,
                    type: '其他检测',
                    result: '二级',
                    code: '220183005202004200004'
                }
            ]
        }
    },
    created () {
        this.queryData()
    },
    computed: {},
    // 使用其它组件
    components: {
        BreadFoot,
        toolBar,
        Sidebar
    },
    // 方法
    watch: {},
    methods: {
        queryData (clear) {
            // if (clear) {
            //     this.pageNum = 1
            // }
            // if (!this.$checkAuth('sys:role:find')) {
            //     this.$alert('没有查询权限！', '提示')
            //     return
            // }
            // this.loading = true
            // this.$post('sys/role/find', {
            //     'data': {
            //         'roleName': this.personName
            //     },
            //     'pageSize': this.pageSize,
            //     'pageNum': this.pageNum
            // }).then(res => {
            //     this.loading = false
            //     if (res.status === 200) {
            //         this.dataList = setNum(res.data.list, this.pageNum, this.pageSize)
            //         this.total = res.data.total
            //     }
            // }).catch(err => {
            //     this.loading = false
            //     console.log(err)
            // })
        },
        // 编辑
        goDetail (id) {
            this.$router.push('/distantDetectionRecordDetail?id=' + id)
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.queryData()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.queryData()
        },
        toReact () {
            this.personName = ''
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.page {
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        background: #FFF;
        top: 0;
        padding-bottom: 80px;
        .wrap {
            padding: 0 30px;
            .table_box {
                border: 1px solid #dddddd;
                border-bottom: none;
            }
            .page_box {
                border-top: none;
            }
        }
    }
}
</style>
