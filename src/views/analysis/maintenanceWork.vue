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
            <template slot="operation" slot-scope="scope">
                <!--  :disabled="!$checkAuth('enterprise:record:view')" -->
                <el-button type="text" size="small" @click="$router.push('/maintenanceRecordDetail?' + scope.row)">详情</el-button>
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
                    label: '所在区域',
                    type: 'select',
                    key: 'enterpriseArea',
                    list: [
                        { label: '小店区', value: '1' },
                        { label: '集怀县', value: '2' },
                        { label: '万柏林区', value: '3' }
                    ]
                },
                {
                    label: '车牌号码',
                    type: 'input',
                    key: 'enterpriseName1'
                },
                {
                    label: '车牌颜色',
                    type: 'select',
                    key: 'coraStatus2',
                    list: [
                        { label: '蓝色', value: '1' },
                        { label: '黄色', value: '2' },
                        { label: '渐变绿', value: '3' }
                    ]
                },
                {
                    label: 'VIN码',
                    type: 'input',
                    key: 'enterpriseName3'
                },
                {
                    label: '维护企业',
                    type: 'input',
                    key: 'enterpriseName4'
                },
                {
                    label: '维修性质',
                    type: 'select',
                    key: 'coraStatus5',
                    list: [
                        { label: '维修性质', value: '1' }
                    ]
                },
                {
                    label: '维护日期',
                    type: 'date',
                    key: 'daterange'
                }
            ],
            searchValue: {},
            dataList: [
                {
                    num: '01',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '山西锦华汽车销售服务有限公司',
                    enterpriseBusinessCategoryStr: '晋A22311',
                    enterpriseOwner: '黄色',
                    enterpriseOwnerPhone: 'ZQ88812312449',
                    enterpriseOwnerPhone1: '2000',
                    createTime: '2019-10-10',
                    createTime1: '2019-10-10',
                    coraTime: '普通维修',
                    coraStatusStr: '周期维护'
                },
                {
                    num: '02',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '车大夫汽车维修服务有限公司',
                    enterpriseBusinessCategoryStr: '晋A22388',
                    enterpriseOwner: '黄色',
                    enterpriseOwnerPhone: 'ZQ88812312449',
                    enterpriseOwnerPhone1: '2000',
                    createTime: '2019-10-10',
                    createTime1: '2019-10-10',
                    coraTime: '普通维修',
                    coraStatusStr: '周期维护'
                },
                {
                    num: '03',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '太原陆鼎汽车维修有限公司',
                    enterpriseBusinessCategoryStr: '晋A22455',
                    enterpriseOwner: '黄色',
                    enterpriseOwnerPhone: 'ZQ88812312449',
                    enterpriseOwnerPhone1: '2000',
                    createTime: '2019-10-10',
                    createTime1: '2019-10-10',
                    coraTime: '普通维修',
                    coraStatusStr: '周期维护'
                },
                {
                    num: '04',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '山西普洋汽车销售有限公司',
                    enterpriseBusinessCategoryStr: '晋A22444',
                    enterpriseOwner: '黄色',
                    enterpriseOwnerPhone: 'ZQ88812312449',
                    enterpriseOwnerPhone1: '2000',
                    createTime: '2019-10-10',
                    createTime1: '2019-10-10',
                    coraTime: '普通维修',
                    coraStatusStr: '周期维护'
                },
                {
                    num: '05',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '太原市盛世开元汽车销售有限公司',
                    enterpriseBusinessCategoryStr: '晋A22333',
                    enterpriseOwner: '黄色',
                    enterpriseOwnerPhone: 'ZQ88812312449',
                    enterpriseOwnerPhone1: '2000',
                    createTime: '2019-10-10',
                    createTime1: '2019-10-10',
                    coraTime: '普通维修',
                    coraStatusStr: '周期维护'
                }
            ],
            labelData: [
                {
                    label: '序号',
                    // type: 'input',
                    width: 60,
                    prop: 'num'
                },
                {
                    label: '上传日期',
                    prop: 'enterpriseName'
                },
                {
                    label: '上传企业',
                    prop: 'enterpriseAreaStr',
                    width: 230
                },
                {
                    label: '车牌号码',
                    prop: 'enterpriseBusinessCategoryStr'
                },
                {
                    label: '车牌颜色',
                    prop: 'enterpriseOwner',
                    width: 100
                },
                {
                    label: 'VIN码',
                    width: '150',
                    prop: 'enterpriseOwnerPhone'
                },
                {
                    label: '送修里程',
                    prop: 'enterpriseOwnerPhone1'
                },
                {
                    label: '送修日期',
                    slotName: 'createTime'
                },
                {
                    label: '结算日期',
                    prop: 'createTime1'
                },
                {
                    label: '维修性质',
                    prop: 'coraTime'
                },
                {
                    label: '故障描述',
                    prop: 'coraStatusStr'
                },
                {
                    label: '操作',
                    slotName: 'operation',
                    width: 100
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
