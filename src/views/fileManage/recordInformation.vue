<!-- 备案信息查询 -->
<template>
    <div class="content-page" style="padding: 20px 30px 80px;background: #fff;">
        <search v-model='searchValue' :options='searchOption' @search='queryData(1)'></search>
        <custom-table
        :table-data="dataList"
        :label-data="labelData"
        :total="total"
        :height='630'
        :currentPage='pageNum'
        :loading="loading"
        @onPageChange="handleCurrentChange"
        @onSizeChange="handleSizeChange"
        >
            <template slot='createTime' slot-scope="scope">
                {{ scope.slotData.createTime ? $filterTime(scope.slotData.createTime, 'yyyy-mm-dd') : '' }}
            </template>
            <template slot='coraTime' slot-scope="scope">
                {{ scope.slotData.coraTime ? $filterTime(scope.slotData.coraTime, 'yyyy-mm-dd') : '' }}
            </template>
            <template slot="operation" slot-scope="scope">
                <!--  :disabled="!$checkAuth('enterprise:record:view')" -->
                <el-button type="text" size="small" @click="goDetail(scope.slotData.enterpriseRecordId)">详情</el-button>
            </template>
        </custom-table>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import CustomTable from '@/components/table'
import Search from '@/components/search'
export default {
    name: 'recordInformation',
    components: {
        BreadFoot,
        CustomTable,
        Search
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '企业备案信息', path: '' }
            ],
            searchOption: [
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'enterpriseName'
                },
                {
                    label: '所在区域',
                    type: 'city',
                    key: 'enterpriseArea'
                },
                {
                    label: '状态',
                    type: 'select',
                    key: 'coraStatus',
                    list: [
                        { label: '待认证', value: '1' },
                        { label: '认证不通过', value: '2' },
                        { label: '已认证待备案审核', value: '3' },
                        { label: '备案审核不通过', value: '4' },
                        { label: '已备案', value: '5' }
                    ]
                },
                {
                    label: '备案时间',
                    type: 'date',
                    key: 'daterange'
                }
            ],
            searchValue: {},
            dataList: [
                {
                    enterpriseName: '太原恒业汽车销售服务有限公司',
                    enterpriseAreaStr: '万柏林区',
                    enterpriseBusinessCategoryStr: '一类',
                    enterpriseOwner: '张飞',
                    enterpriseOwnerPhone: '13512345678',
                    enterpriseOwnerPhone1: '南头街道怡园路198号1栋1002',
                    createTime: '2019-10-10',
                    createTime1: '茉莉',
                    coraTime: '2019-11-12',
                    coraStatusStr: '已认证'
                },
                {
                    enterpriseName: '山西普洋汽车销售有限公司',
                    enterpriseAreaStr: '万柏林区',
                    enterpriseBusinessCategoryStr: '一类',
                    enterpriseOwner: '端王',
                    enterpriseOwnerPhone: '13512345678',
                    enterpriseOwnerPhone1: '白云路与芋圆路丁字路口',
                    createTime: '2019-10-10',
                    createTime1: '欧丽娣',
                    coraTime: '2019-11-12',
                    coraStatusStr: '已认证'
                },
                {
                    enterpriseName: '太原市红菱进口汽车维修有限公司',
                    enterpriseAreaStr: '小店区',
                    enterpriseBusinessCategoryStr: '一类',
                    enterpriseOwner: '马腾',
                    enterpriseOwnerPhone: '13512345678',
                    enterpriseOwnerPhone1: '新安街道怡园路198号1栋1002',
                    createTime: '2019-10-10',
                    createTime1: '佘诗曼',
                    coraTime: '2019-11-12',
                    coraStatusStr: '已认证'
                },
                {
                    enterpriseName: '太原市盛世开元汽车销售有限公司',
                    enterpriseAreaStr: '万柏林区',
                    enterpriseBusinessCategoryStr: '一类',
                    enterpriseOwner: '叶飞',
                    enterpriseOwnerPhone: '13512345678',
                    enterpriseOwnerPhone1: '白云路与芋圆路丁字路口',
                    createTime: '2019-10-10',
                    createTime1: '李伟',
                    coraTime: '2019-11-12',
                    coraStatusStr: '已认证'
                },
                {
                    enterpriseName: '太原华瑞富星汽车销售服务有限公司',
                    enterpriseAreaStr: '小店区',
                    enterpriseBusinessCategoryStr: '一类',
                    enterpriseOwner: '张玉婷',
                    enterpriseOwnerPhone: '13512345678',
                    enterpriseOwnerPhone1: '建设街道怡园路198号1栋1002',
                    createTime: '2019-10-10',
                    createTime1: '王刚',
                    coraTime: '2019-11-12',
                    coraStatusStr: '已认证'
                }
            ],
            labelData: [
                {
                    label: '企业名称',
                    prop: 'enterpriseName'
                },
                {
                    label: '所在区域',
                    width: 100,
                    prop: 'enterpriseAreaStr'
                },
                {
                    label: '经营类别',
                    width: 100,
                    prop: 'enterpriseBusinessCategoryStr'
                },
                {
                    label: '联系人',
                    width: 80,
                    prop: 'enterpriseOwner'
                },
                {
                    label: '联系电话',
                    width: 130,
                    prop: 'enterpriseOwnerPhone'
                },
                {
                    label: '经营地址',
                    prop: 'enterpriseOwnerPhone1'
                },
                {
                    label: '备案时间',
                    width: 120,
                    slotName: 'createTime'
                },
                {
                    label: '审核人',
                    width: 80,
                    prop: 'createTime1'
                },
                {
                    label: '认证时间',
                    width: 120,
                    slotName: 'coraTime'
                },
                {
                    label: '备案状态',
                    width: 100,
                    prop: 'coraStatusStr'
                },
                {
                    label: '操作',
                    slotName: 'operation',
                    width: 80
                }
            ],
            loading: false,
            total: 1,
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        // this.queryData()
    },
    filters: {
        statusFilter: function (val) {
            if (val === 1) {
                return '审核通过'
            }
            if (val === 0) {
                return '待审核'
            }
            if (val === -1) {
                return '审核拒绝'
            }
        }
    },
    methods: {
        queryData (clear) {
            if (clear) {
                this.pageNum = 1
            }
            // this.loading = true
            // this.$post('enterprise/record/findEntList', {
            //     pageNum: this.pageNum,
            //     pageSize: this.pageSize,
            //     ...this.searchValue
            // }).then(res => {
            //     if (res.status === 200) {
            //         this.dataList = res.data.list
            //         this.total = res.data.total
            //     }
            //     this.loading = false
            // }).catch(() => {
            //     this.loading = false
            // })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.queryData(1)
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.queryData()
        },
        // 认证
        goDetail (id) {
            this.$router.push('/recordInformationDetail?isSearch=1&id=' + id)
        },
        // 新增
        addRecord () {
            this.$router.push('/recordApply')
        }
    }
}
</script>
