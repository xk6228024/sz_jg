<!-- 投诉申请受理 -->
<template>
    <div class="complain-apply">
        <div class="content">
            <tool-bar>
                <div class="fl">
                    <label>企业名称:</label>
                    <el-input class="tool_ipt" v-model="enterpriseName" placeholder="请输入内容"></el-input>
                    <!-- <label>投诉类别:</label>
                    <el-select class="tool_ipt" v-model="enterpriseComplaintCategory" placeholder="请选择">
                        <el-option
                        v-for="item in complaintCategory"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <label>投诉日期:</label>
                    <el-date-picker
                        class=""
                        v-model="daterange"
                        type="daterange"
                        align="right"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="timestamp"
                        >
                    </el-date-picker>
                </div>
                <div class="fr">
                    <!-- <el-button class="search_btn" type="primary" icon="el-icon-search" style="width:40px;" @click="queryData(1)" :disabled="!$checkAuth('bas:enterprise:complaint:findEnterpriseComplaint')"></el-button> -->
                    <el-button class="query_btn slects_btn" @click="queryData(1)" :disabled="!$checkAuth('bas:enterprise:complaint:findEnterpriseComplaint')">查询</el-button>
                    <el-button class="react_btn" @click="toReact">重置</el-button>
                </div>
            </tool-bar>
            <div class='wrap'>
                <div class="table_box">
                    <el-table
                        :data="dataList"
                        v-loading="loading"
                        height="600"
                        border
                        :header-cell-style="{'text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="width: 100%">
                        <el-table-column
                            prop="num"
                            width="80"
                            label="序号"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="enterpriseName"
                            label="投诉企业名称"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="enterpriseLinkMobile"
                            label="企业联系电话"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="ownerUserNickname"
                            width="80"
                            label="投诉人姓名"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="ownerUserMobile"
                            label="手机号码"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="enterpriseComplaintCategory"
                            label="投诉类别"
                            width="100"
                            >
                            <!-- <template slot-scope="scope">
                                <span v-for="(type,index) in scope.row.typeList" :key="index">
                                    {{type | filterCommon(complaintCategory)}}
                                </span>
                            </template> -->
                        </el-table-column>
                        <el-table-column
                            prop="enterpriseComplaintTitle"
                            label="投诉标题"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="enterpriseComplaintTime"
                            label="投诉日期"
                            >
                            <!-- <template slot-scope="scope">
                                <span>
                                    {{scope.row.enterpriseComplaintTime | momentTime}}
                                </span>
                            </template> -->
                        </el-table-column>
                        <el-table-column
                            prop="enterpriseComplaintSuperviseContent"
                            label="批复状态"
                            width="80"
                            >
                            <template slot-scope="scope">
                                <span v-if="scope.row.enterpriseComplaintSuperviseContent">已批复</span>
                                <span v-if="!scope.row.enterpriseComplaintSuperviseContent">未批复</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="操作"
                            width="120">
                            <template slot-scope="scope">
                                <div>
                                    <el-button type="text" size="small" @click="goDetail(scope.row.enterpriseComplaintId)" :disabled="!$checkAuth('bas:enterprise:complaint:findEnterpriseComplaintById')">详情</el-button>
                                    <el-button type="text" size="small" v-if="!scope.row.enterpriseComplaintSuperviseContent" @click="toReply(scope.row.enterpriseComplaintId)">批复</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="page_box">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 15, 20, 25]"
                        :page-size="pageSize"
                        background
                        layout="prev, pager, next, sizes,  jumper, total"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        <Modal
            :title="'批复内容'"
            :width="500"
            :alert="replyBol"
            @alertCancel="closeAlert">
            <div class="alert-box">
                <div class="reply-box">
                    <el-input class="reply-text" :autosize="{ minRows: 9, maxRows: 9}" resize="none" type="textarea" maxlength="512" v-model.trim="replyContent"></el-input>
                    <!-- <textarea class="reply-text" v-model="replyContent" name="" id=""></textarea> -->
                </div>
                <div class="btn-box">
                    <el-button type="primary" @click="sureAlert('sure')">确定</el-button>
                    <el-button @click="sureAlert('cancel')">取消</el-button>
                </div>
            </div>
        </Modal>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <!-- <el-button type="primary" @click="addNotice" :disabled="!$checkAuth('sys:notice:add')">新增通知</el-button> -->
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
import ToolBar from '@/components/ToolBar.vue'
import Modal from '@/components/Modal.vue'
import { setNum } from '@/utils/tools.js'
import { complaintCategory } from '@/utils/type.js'
import Sidebar from '@/components/Sidebar.vue'
import moment from 'moment'
export default {
    name: 'complainApply',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '业务操作', path: '' }, { title: '服务投诉处理', path: '' }
            ],
            loading: false,
            replyBol: false, // 批复弹窗bol
            toReplyId: '', // 批复的id
            replyContent: '',
            noticeStatus: '', // 审核状态 0-未审核  1-通过 -1-拒绝
            total: 10,
            pageNum: 1,
            pageSize: 10,
            enterpriseName: '',
            enterpriseComplaintCategory: '',
            daterange: [],
            currentPage: 1, // 当前页数
            input: '',
            options: [],
            value: '',
            dataList: [
                {
                    num: '01',
                    enterpriseName: '德兰汽车服务有限公司',
                    enterpriseLinkMobile: '177654786544',
                    ownerUserNickname: '马登',
                    ownerUserMobile: 18813217415,
                    enterpriseComplaintCategory: '服务质量',
                    enterpriseComplaintTitle: '服务态度差',
                    enterpriseComplaintTime: '2019-10-02',
                    enterpriseComplaintSuperviseContent: ''
                },
                {
                    num: '02',
                    enterpriseName: '马奇若汽车服务有限公司',
                    enterpriseLinkMobile: '132365471544',
                    ownerUserNickname: '茜茜',
                    ownerUserMobile: 18113214444,
                    enterpriseComplaintCategory: '维修效率',
                    enterpriseComplaintTitle: '效率太低了，耗时过长',
                    enterpriseComplaintTime: '2019-10-22',
                    enterpriseComplaintSuperviseContent: 1
                },
                {
                    num: '03',
                    enterpriseName: '裴迪南车服务有限公司',
                    enterpriseLinkMobile: '134441116544',
                    ownerUserNickname: '鹏飞',
                    ownerUserMobile: 13313217435,
                    enterpriseComplaintCategory: '服务质量',
                    enterpriseComplaintTitle: '服务态度差',
                    enterpriseComplaintTime: '2019-12-14',
                    enterpriseComplaintSuperviseContent: 1
                },
                {
                    num: '04',
                    enterpriseName: '山西显通汽车销售有限公司',
                    enterpriseLinkMobile: '134441116544',
                    ownerUserNickname: '刘汉金',
                    ownerUserMobile: 13313217435,
                    enterpriseComplaintCategory: '服务质量',
                    enterpriseComplaintTitle: '服务态度差',
                    enterpriseComplaintTime: '2019-12-14',
                    enterpriseComplaintSuperviseContent: 1
                },
                {
                    num: '05',
                    enterpriseName: '新金龙汽车修理厂',
                    enterpriseLinkMobile: '134441116544',
                    ownerUserNickname: '马其军',
                    ownerUserMobile: 13313217435,
                    enterpriseComplaintCategory: '服务质量',
                    enterpriseComplaintTitle: '服务态度差',
                    enterpriseComplaintTime: '2019-12-14',
                    enterpriseComplaintSuperviseContent: 1
                }
            ],
            complaintCategory
        }
    },
    created () {
        // this.queryData()
    },
    computed: {},
    filters: {
        momentTime: function (val) {
            return moment(val).format('YYYY-MM-DD')
        }
    },
    // 使用其它组件
    components: {
        BreadFoot,
        ToolBar,
        Sidebar,
        Modal,
        moment
    },
    // 方法
    watch: {},
    methods: {
        queryData (clear) {
            if (!this.$checkAuth('bas:enterprise:complaint:findEnterpriseComplaint')) {
                this.$alert('没有查询权限！', '提示')
                return
            }
            if (clear) {
                this.pageNum = 1
            }
            var obj = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                enterpriseComplaintCategory: 0
            }
            this.enterpriseName && (obj.enterpriseName = this.enterpriseName)
            this.enterpriseComplaintCategory && (obj.enterpriseComplaintCategory = this.enterpriseComplaintCategory)
            if (obj.enterpriseComplaintCategory === 0) {
                obj.enterpriseComplaintCategory = '1,2,3,4,5,6'
            }
            if (this.daterange && this.daterange.length) {
                obj.enterpriseComplaintTimeS = this.daterange[0]
                obj.enterpriseComplaintTimeE = this.daterange[1] + 24 * 60 * 60 * 1000 - 1
            }
            // this.loading = true
            this.$post('bas/enterprise/complaint/findEnterpriseComplaintFromDC', obj).then(res => {
                if (res.status === 200) {
                    this.dataList = setNum(res.data.list, this.pageNum, this.pageSize)
                    this.dataList.forEach(e => {
                        e.typeList = e.enterpriseComplaintCategory.split(',')
                    })
                    this.total = res.data.total
                }
                this.loading = false
            }).catch(err => {
                this.loading = false
                console.log(err)
            })
            // this.$post('bas/enterprise/complaint/findEnterpriseComplaint', obj).then(res => {
            //     if (res.status === 200) {
            //         this.dataList = setNum(res.data.list, this.pageNum, this.pageSize)
            //         this.dataList.forEach(e => {
            //             e.typeList = e.enterpriseComplaintCategory.split(',')
            //         })
            //         this.total = res.data.total
            //     }
            //     this.loading = false
            // }).catch(err => {
            //     this.loading = false
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
        // 查看
        goDetail (value) {
            this.$router.push('/complainApplyDetail?id=' + value)
        },
        // 批复
        toReply (id) {
            this.toReplyId = id
            this.replyBol = true
        },
        sureAlert (val) {
            if (val === 'sure') {
                if (!this.replyContent) {
                    this.$alert('请输入批复内容', '提示')
                    return
                }
                this.$post('bas/enterprise/complaint/saveEnterpriseComplaintSuperviseReplyToDC', {
                    data: {
                        'enterpriseComplaintSuperviseContent': this.replyContent,
                        'enterpriseComplaintId': this.toReplyId
                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.$toast({
                            msg: '回复成功'
                        })
                        this.queryData()
                        this.closeAlert()
                    }
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.closeAlert()
            }
        },
        closeAlert () {
            this.toReplyId = ''
            this.replyContent = ''
            this.replyBol = false
        },
        // 重置
        toReact () {
            this.enterpriseName = ''
            this.enterpriseComplaintCategory = ''
            this.daterange = ''
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.complain-apply {
    .add_btn {
        img {
            vertical-align: baseline;
            margin-right: 8px;
        }
    }
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        background-color: #ffffff;
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
    .alert-box {
        .reply-box {
            width: 380px;
            height: 200px;
            padding: 30px 60px 0;
            .reply-text {
                width: 100%;
                height: 100%;
            }
        }
        .btn-box {
            text-align: center;
            margin: 30px 0;
            button {
                width: 100px;
                height: 34px;
                border-radius: 4px;
            }
            .btn1 {
                background: #359dff;
                color: #ffffff;
                border: none;
                margin-right: 20px;
            }
            .btn2 {
                border: 1px solid #dbdbdb;
                background: #ffffff;
            }
        }
    }
}
</style>
