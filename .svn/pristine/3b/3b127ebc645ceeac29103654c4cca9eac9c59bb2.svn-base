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
                    prop="enterpriseName"
                    label="单位名称">
                </el-table-column>
                <el-table-column
                    prop="enterpriseName"
                    label="所在区域">
                </el-table-column>
                <el-table-column
                    prop="enterpriseBusinessCategoryText"
                    label="经营地址">
                </el-table-column>
                <el-table-column
                    prop="vehicleFixCertificateCount"
                    label="联系人">
                </el-table-column>
                <el-table-column
                    prop="vehicleFixCertificateUsedCount"
                    label="联系电话">
                </el-table-column>
                <el-table-column
                    prop="vehicleFixCertificateUnusedCount"
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    prop="vehicleFixCertificateUnusedCount"
                    label="创建人">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="140px">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="toDetail(scope.row.enterpriseId)">详情</el-button>
                        <el-button type="text" size="small" @click="deleteItem(scope.row.enterpriseId)">删除</el-button>
                    </template>
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
            <el-button type="primary" @click="toDetail" icon="el-icon-plus">新建车辆单位</el-button>
            <!-- <el-button @click="exportExl" :disabled="!$checkAuth('vehicle:fix:certificate:export:fixcerts')">导 出</el-button> -->
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import { bussinessCategory } from '@/utils/type.js'
// import { setNum } from '@/utils/utils.js'
import { getCookie } from '@/utils/cookie.js'
import Search from '@/components/search'
import CustomTable from '@/components/table'
export default {
    name: 'notice',
    components: {
        BreadFoot,
        Search,
        CustomTable
    },
    data () {
        return {
            breadArr: [
                { title: '业务操作', path: '' }, { title: '车辆单位', path: '' }
            ],
            bussinessCategory,
            searchOptions: [
                {
                    label: '单位名称',
                    type: 'input',
                    key: 'enterpriseName'
                },
                {
                    label: '所在区域',
                    type: 'city',
                    key: 'certificateRegion'
                }
            ],
            searchValue: {},
            dataList: [
                {
                    num: 1
                }
            ],
            tableloading: false,
            total: 0,
            pageNum: 1,
            pageSize: 10
        }
    },
    mounted () {
        // if (this.$route.query.region) {
        //     console.log(this.searchValue)
        //     this.$set(this.searchValue, 'region', this.$route.query.region)
        // }
        this.queryData()
    },
    filters: {
    },
    methods: {
        exportExl () {
            if (!this.$checkAuth('vehicle:fix:certificate:export:fixcerts')) {
                this.$alert('您没有该权限！', '提示')
                return
            }
            if (this.searchValue.date && this.searchValue.date.length) {
                this.searchValue.startTime = this.searchValue.date[0]
                this.searchValue.endTime = this.searchValue.date[1]
            }
            var url = `${window.downloadExcelURL}vehicle/fix/certificate/export/fixcerts?`
            for (let key in this.searchValue) {
                url = `${url + key}=${this.searchValue[key]}&`
            }
            url = url + `token=${getCookie('token')}`
            window.open(url)
        },
        queryData (clear) {
            // if (!this.$checkAuth('vehicle:fix:certificate:pagelist')) {
            //     this.$alert('您没有该权限！', '提示')
            //     return
            // }
            // if (clear) {
            //     this.pageNum = 1
            // }
            // this.tableloading = true
            // this.$post('/vehicle/fix/certificate/pagelist', {
            //     pageNum: this.pageNum,
            //     pageSize: this.pageSize,
            //     startTime: this.searchValue.daterange ? this.searchValue.daterange[0] : '',
            //     endTime: this.searchValue.daterange ? this.searchValue.daterange[1] + 24 * 60 * 60 * 1000 - 1 : '',
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
        toDetail (id) {
            // if (!this.$checkAuth('vehicle:fix:certificate:findbyent')) {
            //     this.$alert('您没有该权限！', '提示')
            //     return
            // }
            this.$router.push(`/vehicleUnitDetail?id=${id}`)
        },
        // 编辑
        deleteItem (id) {
            // if (!this.$checkAuth('vehicle:fix:certificate:findbyent')) {
            //     this.$alert('您没有该权限！', '提示')
            //     return
            // }
            this.$confirm('确定删除该车辆单位吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            }).catch(() => {
            })
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
