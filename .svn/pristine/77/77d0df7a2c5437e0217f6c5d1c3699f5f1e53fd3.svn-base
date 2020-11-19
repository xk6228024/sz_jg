<template>
    <div id="transportJcModelTable">
        <div class="content">
            <search v-model="searchValue" :options="searchOption" @search="queryData(1)"></search>
            <div class='wrap'>
                <div class="table_box">
                    <el-table
                        :data="dataList"
                        height="550"
                        :header-cell-style="{'background': '#FAFAFA', 'text-align':'left'}"
                        :cell-style="{'text-align':'left'}"
                        :stripe="false"
                        style="width: 100%">
                    <el-table-column
                        prop="num"
                        label="序号"
                        width="50px"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="cityName"
                        label="城市"
                        width="150px">
                    </el-table-column>
                    <el-table-column
                        prop="regionName"
                        label="地区"
                        width="150px">
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseName"
                        label="企业名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="enterpriseOperatingAddress"
                        label="检测车辆类型"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="上传年月"
                        width="200px">
                    </el-table-column>
                    <el-table-column
                        prop="certificateCount"
                        label="检测数量"
                        width="200px">
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
            <el-button @click="exportExl" :disabled="!$checkAuth('vehicle:fix:certificate:export:entstasticlist')">导 出</el-button>
        </bread-foot>
    </div>
</template>

<script>
import Search from '@/components/search'
import BreadFoot from '@/components/BreadFoot.vue'
import toolBar from '@/components/ToolBar.vue'
import { getCookie } from '@/utils/cookie.js'
export default {
    name: 'transportJcModelTable',
    data () {
        return {
            searchValue: {},
            searchOption: [
                {
                    label: '所属区域',
                    type: 'city',
                    key: 'certificateRegion'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'enterpriseName'
                },
                {
                    label: '上传年份',
                    type: 'year',
                    key: 'yearNo'
                }
            ],
            dataList: [],
            breadArr: [
                { title: '查询统计', path: '' }, { title: '运输车辆检测车型统计', path: '' }
            ],
            total: 0,
            pageNum: 1,
            pageSize: 10
        }
    },
    components: {
        BreadFoot,
        Search,
        toolBar
    },
    created () {
        this.queryData()
    },
    methods: {
        handleSizeChange (val) {
            this.pageSize = val
            this.queryData()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.queryData()
        },
        exportExl () {
            if (!this.$checkAuth('vehicle:fix:certificate:export:entstasticlist')) {
                this.$alert('您没有该权限！', '提示')
                return
            }
            var url = `${window.downloadExcelURL}vehicle/fix/certificate/export/entstasticlist?`
            for (let key in this.searchValue) {
                url = `${url + key}=${this.searchValue[key]}&`
            }
            url = url + `token=${getCookie('token')}`
            window.open(url)
        },
        queryData (clean) {
            if (!this.$checkAuth('vehicle:fix:certificate:stasticlist')) {
                this.$alert('您没有该权限！', '提示')
                return
            }
            if (clean) {
                this.pageNum = 1
            }
            this.$post('/vehicle/fix/certificate/stasticlist', {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                ...this.searchValue
            })
                .then(res => {
                    if (res.status === 200 && res.data) {
                        this.dataList = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                })
        }
    }
}
</script>
