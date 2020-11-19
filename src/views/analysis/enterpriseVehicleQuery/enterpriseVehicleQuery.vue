<!-- 企业车辆异常预警 -->
<template>
    <div class="content-page">
        <search v-model="searchValue" :options='searchOptions' permission='sys:notice:find' @search='queryData(1)'></search>
        <div class='wrap'>
            <el-table
                v-loading="tableloading"
                class="custom-table"
                :data="dataList"
                :header-cell-style="{'background': '#FAFAFA', 'text-align':'left'}"
                :cell-style="{'text-align':'left'}"
                :stripe="false"
                style="min-height:550px;"
                row-class-name="table-item"
                header-row-class-name="table-header-item">
                <el-table-column
                    prop="num"
                    label="序号"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="region"
                    label="地区">
                </el-table-column>
                <el-table-column
                    prop="enterpriseName"
                    label="企业名称"
                    width="330">
                    <template slot-scope="scope">
                        <div>
                            <el-button type="text" @click="toDetail(0)">{{ scope.row.enterpriseName }}</el-button>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="车辆总数">
                </el-table-column>
                <el-table-column
                    prop="whcq"
                    label="维护超期车辆">
                </el-table-column>
                <el-table-column
                    prop="jccq"
                    label="检测超期车辆">
                </el-table-column>
                <el-table-column
                    prop="wzdwhjh"
                    label="未制定维护计划车辆">
                </el-table-column>
                <el-table-column
                    prop="wgd"
                    label="未归档车辆">
                </el-table-column>
            </el-table>
            <div class="page_box">
                <el-pagination
                    :current-page.sync="pageNum"
                    background
                    :page-sizes="[10, 15, 20]"
                    layout="prev, pager, next, sizes,  jumper, total"
                    :total="total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <!-- <el-button type="primary" @click="addNotice" :disabled="!$checkAuth('vehicle:fix:certificate:export:fixcerts')">新增通知</el-button> -->
            <el-button @click="exportExl" :disabled="!$checkAuth('vehicle:fix:certificate:export:fixcerts')">导 出</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
// import { bussinessCategory, plateColor } from '@/utils/type.js'
// import { setNum } from '@/utils/utils.js'
// import { getCookie } from '@/utils/cookie.js'
import Search from '@/components/search'
export default {
    name: 'enterpriseVehicleQuery',
    components: {
        BreadFoot,
        Search
    },
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '企业车辆异常预警', path: '' }
            ],
            searchOptions: [
                {
                    label: '所在区域',
                    type: 'city',
                    key: 'certificateRegion'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'plate'
                },
                {
                    label: '查询日期',
                    type: 'date',
                    key: 'date'
                }
            ],
            searchValue: {},
            dataList: [
                {
                    num: '01',
                    region: '万柏林区',
                    enterpriseName: '山西锦华汽车销售服务有限公司',
                    total: '500',
                    whcq: '100',
                    jccq: '200',
                    wzdwhjh: '100',
                    wgd: '100'
                },
                {
                    num: '02',
                    region: '清徐县',
                    enterpriseName: '太原市鑫晟汽车服务有限公司',
                    total: '500',
                    whcq: '98',
                    jccq: '198',
                    wzdwhjh: '98',
                    wgd: '100'
                },
                {
                    num: '03',
                    region: '晋源区',
                    enterpriseName: '太原市百瑞斯汽车维修有限公司',
                    total: '500',
                    whcq: '100',
                    jccq: '150',
                    wzdwhjh: '90',
                    wgd: '100'
                },
                {
                    num: '04',
                    region: '杏花岭区',
                    enterpriseName: '车大夫汽车维修服务有限公司',
                    total: '500',
                    whcq: '100',
                    jccq: '150',
                    wzdwhjh: '90',
                    wgd: '100'
                },
                {
                    num: '05',
                    region: '万柏林区',
                    enterpriseName: '山西普洋汽车销售有限公司',
                    total: '500',
                    whcq: '100',
                    jccq: '150',
                    wzdwhjh: '90',
                    wgd: '100'
                }
            ],
            tableloading: false,
            total: 3,
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        // this.queryData()
        if (this.$route.query.regionName) {
            this.dataList = this.$filterRegion(this.dataList, 'region', this.$route.query.regionName)
        }
    },
    mounted () {
    },
    filters: {
    },
    methods: {
        exportExl () {
            // if (!this.$checkAuth('vehicle:fix:certificate:export:fixcerts')) {
            //     this.$alert('您没有该权限！', '提示')
            //     return
            // }
            // var params = { ...this.searchValue }
            // if (params.date && params.date.length) {
            //     params.startTime = params.date[0]
            //     params.endTime = params.date[1] + 24 * 60 * 60 * 1000 - 1
            //     delete params.date
            // } else {
            //     params.startTime = ''
            //     params.endTime = ''
            //     delete params.date
            // }
            // var url = `${window.downloadExcelURL}vehicle/fix/certificate/export/fixcerts?`
            // for (let key in params) {
            //     url = `${url + key}=${params[key]}&`
            // }
            // url = url + `token=${getCookie('token')}`
            // window.open(url)
        },
        queryData (clear) {
            // if (!this.$checkAuth('vehicle:fix:certificate:pagelist')) {
            //     this.$alert('您没有该权限！', '提示')
            //     return
            // }
            // if (clear) {
            //     this.pageNum = 1
            // }
            // if (this.searchValue.date && this.searchValue.date.length) {
            //     this.searchValue.startTime = this.searchValue.date[0]
            //     this.searchValue.endTime = this.searchValue.date[1] + 24 * 60 * 60 * 1000 - 1
            // } else {
            //     this.searchValue.startTime = ''
            //     this.searchValue.endTime = ''
            // }
            // this.tableloading = true
            // this.$post('/vehicle/fix/certificate/pagelist', {
            //     pageNum: this.pageNum,
            //     pageSize: this.pageSize,
            //     startTime: this.searchValue.startTime,
            //     endTime: this.searchValue.endTime,
            //     ...this.searchValue
            // }).then(res => {
            //     if (res.status === 200) {
            //         this.dataList = setNum(res.data, this.pageNum, this.pageSize)
            //         console.log(this.dataList)
            //         this.total = res.total
            //     }
            //     this.tableloading = false
            // }).catch(err => {
            //     this.tableloading = false
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
        // 编辑
        toDetail (type) {
            if (!this.$checkAuth('vehicle:fix:certificate:findbyent')) {
                this.$alert('您没有该权限！', '提示')
                return
            }
            this.$router.push(`/enterpriseVehicleDetail?type=${type}`)
        }
    }
}
</script>

<style lang="less" scoped>
.content-page {
    .wrap {
        .table_box {
            border: 1px solid #dddddd;
            border-bottom: none;
        }
        .page_box {
            border-top: none;
        }
    }
}
</style>
