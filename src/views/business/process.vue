<template>
    <div class="page">
        <div class="content">
            <tool-bar>
                <div class="fl">
                    <label>企业名称：</label>
                    <el-input class="tool_ipt" v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="fr">
                    <el-button class="query_btn slects_btn" @click="queryData(1)" :disabled="!$checkAuth('bas:enterprise:evaluateApply:findEnterprise')">查询</el-button>
                    <el-button class="react_btn" @click="toReact">重置</el-button>
                </div>
            </tool-bar>
            <div class='wrap'>
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
                        label="企业名称"
                        :show-overflow-tooltip='true'
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseAreaStr"
                        label="所属区域"
                        >
                        <!-- <template slot-scope="scope">
                            {{scope.row.enterpriseRegion|filterRegion}}
                        </template> -->
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseCreditIdentifier"
                        label="社会信用代码"
                        :show-overflow-tooltip='true'
                        >
                        <template slot-scope="scope">
                            {{$randomStr(16)}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseBusinessCategory"
                        label="经营类别"
                        >
                        <template slot-scope="scope">
                            {{scope.row.enterpriseBusinessCategory|filterCommon(bussinessCategory)}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        v-if="roleExtEnterpriseLinkpersonIsview"
                        prop="enterpriseLinkName"
                        label="联系人"
                        >
                    </el-table-column>
                    <el-table-column
                        v-if="roleExtEnterpriseLinkpersonIsview"
                        prop="enterpriseLinkMobile"
                        label="联系人电话"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseDetailedAddress"
                        label="经营地址"
                        :show-overflow-tooltip='true'
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseEvaluateApplyIs"
                        label="参评状态"
                        >
                        <template slot-scope="scope">
                            <span>{{(Math.random()>0.5?1:2)|statusFilter}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="操作"
                        width="">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="goDetail(scope.row.enterpriseId,scope.row.enterpriseEvaluateApplyId,scope.row.enterpriseEvaluateApplyIs)" :disabled="!$checkAuth('bas:enterprise:evaluateApply:aduit')">详情</el-button>
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
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
import ToolBar from '@/components/ToolBar.vue'
import Sidebar from '@/components/Sidebar.vue'
// import { setNum } from '@/utils/tools.js'
import { bussinessCategory } from '@/utils/type.js'
import { getCookie } from '@/utils/cookie.js'
export default {
    name: 'process',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '业务操作', path: '' }, { title: '企业诚信参评', path: '' }, { title: '企业参评管理', path: '' }
            ],
            bussinessCategory,
            total: 0,
            pageNum: 1,
            pageSize: 10,
            input: '',
            options: [],
            value: '',
            roleExtEnterpriseLinkpersonIsview: 0,
            dataList: [
                {
                    num: '01',
                    enterpriseName: '太原喜来登汽车服务公司',
                    enterpriseRegion: '小店区',
                    enterpriseCreditIdentifier: 'ZQ88820820199412',
                    enterpriseBusinessCategory: '1',
                    enterpriseOperatingAddress: '小店区海清二路141号',
                    enterpriseEvaluateApplyIs: 1
                },
                {
                    num: '02',
                    enterpriseName: '太原马龙汽车维修厂',
                    enterpriseRegion: '小店区',
                    enterpriseCreditIdentifier: 'ZQ88820820199412',
                    enterpriseBusinessCategory: '2',
                    enterpriseOperatingAddress: '小店区建设路5-8号',
                    enterpriseEvaluateApplyIs: 1
                },
                {
                    num: '03',
                    enterpriseName: '太原郁栗户子汽车维修厂',
                    enterpriseRegion: '尖草坪区',
                    enterpriseCreditIdentifier: 'ZQ88820820199412',
                    enterpriseBusinessCategory: '1',
                    enterpriseOperatingAddress: '尖草坪区湖滨大道1188号',
                    enterpriseEvaluateApplyIs: 2
                }
            ]
        }
    },
    created () {
        try {
            var user = JSON.parse(getCookie('user'))
            if (user.roleExtEnterpriseLinkpersonIsview) {
                this.roleExtEnterpriseLinkpersonIsview = 1
            }
        } catch (e) {
            this.roleExtEnterpriseLinkpersonIsview = 0
        }
        this.queryData()
    },
    computed: {},
    // 使用其它组件
    components: {
        ToolBar,
        Sidebar,
        BreadFoot
    },
    // 方法
    filters: {
        statusFilter (val) {
            if (val === 1) {
                return '申请通过'
            }
            if (val === 2) {
                return '自评完成'
            }
            if (val === 3) {
                return '监管评分完成'
            }
            if (val === 4) {
                return '参评完成'
            }
        }
    },
    methods: {
        queryData (clear) {
            this.dataList = this.$getEntList()
            // if (clear) {
            //     this.pageNum = 1
            // }
            // this.$post('bas/enterprise/evaluateApply/findEnterprise', {
            //     pageNum: this.pageNum,
            //     pageSize: this.pageSize,
            //     data: {
            //         enterpriseName: this.input,
            //         enterpriseEvaluateApplyAuditIs: 1
            //     }
            // }).then(res => {
            //     if (res.status === 200) {
            //         this.dataList = setNum(res.datas.list, this.pageNum, this.pageSize)
            //         this.total = res.datas.total
            //     } else {
            //         console.log(res.message)
            //     }
            // }).catch(err => {
            //     console.log(err)
            // })
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
        // =详情
        goDetail (id, id2, step) {
            this.$router.push('/creditEva/processDetail?id=' + id + '&enterpriseEvaluateApplyId=' + id2 + '&step=' + step)
        },
        // 重置
        toReact () {
            this.input = ''
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
</style>
