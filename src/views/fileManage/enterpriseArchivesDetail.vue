<template>
    <div class="page">
        <div class="content">
            <div class='wrap'>
                <tool-bar>
                    <!-- <div class="fl">
                        <label>企业名称：</label>
                        <el-input class="tool_ipt" v-model="companyName" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="fr">
                        <el-button class="query_btn slects_btn" @click="queryData" :disabled="!$checkAuth('bas:enterprise:evaluateApply:findEnterprise')">查询</el-button>
                        <el-button class="react_btn" @click="toReact">重置</el-button>
                    </div> -->
                    <div class="topInfo">
                        <label for="">区域：</label>
                        <span>太原市/小店区</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label for="">企业名称：</label>
                        <span>太原市小店区瑞德天龙汽车运输有限公司</span>
                    </div>
                </tool-bar>
                <div class="table_box">
                    <el-table
                        :data="dataList"
                        height="550"
                        border
                        :header-cell-style="{'text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="width: 100%">
                    <el-table-column
                        prop="num"
                        label="序号"
                        width="60"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseName"
                        label="车牌号码"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseCreditIdentifier"
                        label="车牌颜色"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseBusinessCategory"
                        label="VIN码"
                        >
                        <!-- <template slot-scope="scope">
                            {{scope.row.enterpriseBusinessCategory|filterCommon(bussinessCategory)}}
                        </template> -->
                    </el-table-column>
                    <el-table-column
                        v-if="roleExtEnterpriseLinkpersonIsview"
                        prop="enterpriseLinkName"
                        label="联系人"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseLinkMobile"
                        label="道路运输证"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseEvaluateApplyDate"
                        label="车辆类型"
                        >
                        <!-- <template slot-scope="scope">
                            <span>{{scope.row.enterpriseEvaluateApplyDate|formatTimeS}}</span>
                        </template> -->
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="车辆大类">
                        <!-- <template slot-scope="scope">
                            <el-button type="text" size="small" @click="goDetail(scope.row.enterpriseEvaluateApplyId)" :disabled="!$checkAuth('bas:enterprise:evaluateApply:updateEnterpriseEvaluateApplyStatus')">详情</el-button>
                        </template> -->
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="$router.push('/transportDetail?id=' + (scope.row.id || '111'))">详情</el-button>
                        </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="page_box">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageNum"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pageSize"
                        background
                        layout="prev, pager, next, sizes,  jumper, total"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button class='back-btn' @click="$router.push('/dataArchiving')">返回</el-button>
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
import ToolBar from '@/components/ToolBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { filterTime } from '@/utils/filterTime.js'
import { setNum } from '@/utils/tools.js'
import { bussinessCategory } from '@/utils/type.js'
import { getCookie } from '@/utils/cookie.js'
export default {
    name: 'applyAudit',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '车辆技术档案详情', path: '' }
            ],
            bussinessCategory,
            pageNum: 1,
            pageSize: 10,
            total: 10,
            auditStatus: '', // 审核状态
            companyName: '', // 企业名称
            currentPage: 1, // 当前页数
            input: [], // 时间
            options: [],
            value: '',
            roleExtEnterpriseLinkpersonIsview: 0,
            dataList: [
                {
                    num: '01',
                    enterpriseName: '晋AA3398',
                    enterpriseCreditIdentifier: '黄色',
                    enterpriseBusinessCategory: 'LVEDFSWUI99651144',
                    enterpriseLinkMobile: 'ZQ321412465346',
                    enterpriseEvaluateApplyDate: '重型自卸货车',
                    name: '普货'
                },
                {
                    num: '02',
                    enterpriseName: '晋A98878',
                    enterpriseCreditIdentifier: '黄色',
                    enterpriseBusinessCategory: 'LVEDFSWUI99651144',
                    enterpriseLinkMobile: 'ZQ321412465346',
                    enterpriseEvaluateApplyDate: '重型自卸货车',
                    name: '普货'
                },
                {
                    num: '03',
                    enterpriseName: '晋A11233',
                    enterpriseCreditIdentifier: '黄色',
                    enterpriseBusinessCategory: 'LVEDFSWUI99651144',
                    enterpriseLinkMobile: 'ZQ321412465346',
                    enterpriseEvaluateApplyDate: '重型自卸货车',
                    name: '普货'
                },
                {
                    num: '04',
                    enterpriseName: '晋A16616',
                    enterpriseCreditIdentifier: '黄色',
                    enterpriseBusinessCategory: 'LVEDFSWUI99651166',
                    enterpriseLinkMobile: 'ZQ321412465346',
                    enterpriseEvaluateApplyDate: '重型自卸货车',
                    name: '普货'
                },
                {
                    num: '05',
                    enterpriseName: '晋A16777',
                    enterpriseCreditIdentifier: '黄色',
                    enterpriseBusinessCategory: 'LVEDFSWUI99651177',
                    enterpriseLinkMobile: 'ZQ321412465346',
                    enterpriseEvaluateApplyDate: '重型自卸货车',
                    name: '普货'
                }
            ]
        }
    },
    created () {
        try {
            var user = JSON.parse(getCookie('user'))
            this.roleExtEnterpriseLinkpersonIsview = user.roleExtEnterpriseLinkpersonIsview
        } catch (e) {
            this.roleExtEnterpriseLinkpersonIsview = 0
        }
        this.queryData()
    },
    computed: {},
    // 使用其它组件
    components: {
        BreadFoot,
        ToolBar,
        Sidebar
    },
    filters: {
        formatTimeS (val) {
            let str = new Date(val) - 0
            return filterTime('yyyy-mm-dd', str - 0)
        }
    },
    // 方法
    watch: {},
    methods: {
        queryData () {
            this.$post('bas/enterprise/evaluateApply/findEnterprise', {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                data: {
                    enterpriseName: this.companyName,
                    enterpriseEvaluateApplyAuditIs: 0
                }
            }).then(res => {
                if (res.status === 200) {
                    this.dataList = setNum(res.datas.list, this.pageNum, this.pageSize)
                    this.total = res.datas.total
                } else {
                    console.log(res.message)
                }
            }).catch(err => {
                console.log(err)
            })
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
        // 详情
        goDetail (id) {
            this.$router.push('/creditEva/applyAuditDetail?id=' + id)
        },
        // 重置
        toReact () {
            this.companyName = ''
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
        // position: relative;
        width: 100%;
        box-sizing: border-box;
        background-color: #ffffff;
        top: 0;
        padding-bottom: 80px;
        .wrap {
            .table_box {
                padding: 0 30px;
                border: 1px solid #dddddd;
                border-bottom: none;
            }
            .page_box {
                padding-left: 30px;
                padding-right: 30px;
                border-top: none;
            }
        }
    }
}
.topInfo {
    text-align:left;line-height:60px;
    label {
        color: #333;
    }
    span {
        color: #666;
        vertical-align: middle;
    }
}
</style>
