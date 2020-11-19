<template>
    <div class="inquest-info">
        <div class="content">
            <search :options='searchOptions' v-model="searchValue" @search='searchData'></search>
            <custom-table
                :table-data="tabelData"
                :label-data="labelData"
                :total="total"
                height="630"
                :currentPage='pageNum'
                :loading="loading"
                @onPageChange="handleCurrentChange"
                @onSizeChange="handleSizeChange"
                >
                <template slot="enterpriseInquestTime" slot-scope="scope">
                    {{ scope.slotData.enterpriseInquestTime ? $moment(scope.slotData.enterpriseInquestTime).format('YYYY-MM-DD HH:mm:ss') : '' }}
                </template>
                <template slot="operation">
                    <el-button type="text" size="small" @click="$router.push(`/inquestInfoDetail`)">详情</el-button>
                </template>
            </custom-table>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <!-- :disabled="!$checkAuth('sys:notice:add')" -->
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import customTable from '@/components/table'
import search from '@/components/search'
export default {
    name: 'inquestInfo',
    components: {
        BreadFoot,
        customTable,
        search
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '企业勘验信息', path: '' }
            ],
            searchOptions: [
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'enterpriseName'
                },
                {
                    label: '所属区域',
                    type: 'city',
                    key: 'enterpriseArea'
                },
                {
                    label: '勘验状态',
                    type: 'select',
                    key: 'enterpriseInquestStatus',
                    list: [
                        {
                            label: '待勘验',
                            value: '0'
                        },
                        {
                            label: '已勘验',
                            value: '1'
                        }
                    ]
                },
                {
                    label: '备案时间',
                    type: 'date',
                    key: 'companyDate'
                }
            ],
            searchValue: {},
            loading: false,
            tabelData: [
                {
                    num: 1,
                    enterpriseName: '山西显通汽车销售有限公司',
                    enterpriseArea: '小店区',
                    enterpriseBusinessCategoryName: '一类',
                    enterpriseBusinessAddress: '小店区南头街道怡园路198号1栋1002',
                    date: '2019-12-12',
                    date1: '2019-12-12',
                    date2: '张三',
                    date3: '10天',
                    date4: '',
                    status: '已勘验'
                },
                {
                    num: 2,
                    enterpriseName: '山西昌安达汽车销售服务有限公司',
                    enterpriseArea: '万柏林区',
                    enterpriseBusinessCategoryName: '一类',
                    enterpriseBusinessAddress: '白云路与芋圆路丁字路口',
                    date: '2019-12-12',
                    date1: '2019-12-12',
                    date2: '张三',
                    date3: '10天',
                    date4: '',
                    status: '已勘验'
                },
                {
                    num: 3,
                    enterpriseName: '山西盛新晋汽车维修有限公司',
                    enterpriseArea: '晋源区',
                    enterpriseBusinessCategoryName: '一类',
                    enterpriseBusinessAddress: '西南街道怡园路198号1栋1002',
                    date: '2019-12-12',
                    date1: '2019-12-12',
                    date2: '罗素',
                    date3: '6天',
                    date4: '',
                    status: '已勘验'
                },
                {
                    num: 4,
                    enterpriseName: '太原钢运物流股份有限公司',
                    enterpriseArea: '尖草坪区',
                    enterpriseBusinessCategoryName: '一类',
                    enterpriseBusinessAddress: '白云路与芋圆路丁字路口5号',
                    date: '2019-12-12',
                    date1: '2019-12-12',
                    date2: '张三',
                    date3: '10天',
                    date4: '',
                    status: '已勘验'
                },
                {
                    num: 5,
                    enterpriseName: '山西友通汽车贸易有限公司',
                    enterpriseArea: '小店区',
                    enterpriseBusinessCategoryName: '一类',
                    enterpriseBusinessAddress: '西南街道怡园路198号1栋1002',
                    date: '2019-12-12',
                    date1: '2019-12-12',
                    date2: '白玲玲',
                    date3: '109天',
                    date4: '',
                    status: '未勘验'
                }
            ],
            labelData: [
                {
                    label: '序号',
                    prop: 'num',
                    width: 80
                },
                {
                    label: '企业名称',
                    prop: 'enterpriseName'
                },
                {
                    label: '所属区域',
                    prop: 'enterpriseArea'
                },
                {
                    label: '经营类别',
                    prop: 'enterpriseBusinessCategoryName'
                },
                {
                    label: '经营地址',
                    prop: 'enterpriseBusinessAddress'
                },
                {
                    label: '备案时间',
                    prop: 'date'
                },
                {
                    label: '首次勘验时间',
                    prop: 'date1'
                },
                {
                    label: '勘验人',
                    prop: 'date2'
                },
                {
                    label: '勘验倒计时',
                    prop: 'date3'
                },
                {
                    label: '整改倒计时',
                    prop: 'date4'
                },
                {
                    label: '勘验完成时间',
                    prop: 'date'
                },
                {
                    label: '勘验状态',
                    prop: 'status'
                },
                {
                    label: '操作',
                    slotName: 'operation',
                    width: 100
                }
            ],
            total: 1,
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        this.searchData()
        if (this.$route.query.regionName) {
            this.dataList = this.$filterRegion(this.tabelData, 'enterpriseArea', this.$route.query.regionName)
        }
    },
    methods: {
        searchData () {
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.searchData()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.searchData()
        },
        downloadTable () {
        }
    }
}
</script>

<style lang="less" scoped>
.inquest-info {
    background: #ffffff;
    min-height: 750px;
    .content {
        padding: 20px 30px 80px;
    }
}
</style>
