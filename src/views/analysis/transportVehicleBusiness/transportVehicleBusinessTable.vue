<template>
    <div id="transportVehicleBusinessTable">
        <div class="content">
            <search v-model="searchValue" :options="searchOption" @search="queryData(1)"></search>
            <div class='wrap'>
                <div class="table_box">
                    <el-table
                        :data="dataList"
                        height="550"
                        :header-cell-style="{'text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="width: 100%">
                    <el-table-column
                        prop="num"
                        label="序号"
                        width="50px"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="region"
                        label="区域"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="企业名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="addr"
                        label="经营地址"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="上传年月"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="total"
                        label="维护数量"
                        >
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
            <el-button>导出</el-button>
        </bread-foot>
    </div>
</template>

<script>
import Search from '@/components/search'
import BreadFoot from '@/components/BreadFoot.vue'
import toolBar from '@/components/ToolBar.vue'
export default {
    name: 'transportVehicleBusinessTable',
    data () {
        return {
            searchValue: {},
            searchOption: [
                {
                    label: '所属区域',
                    type: 'select',
                    key: 'region',
                    list: [
                        {
                            value: 2,
                            label: '小店区'
                        },
                        {
                            value: 3,
                            label: '万柏林区'
                        }
                    ]
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'enterpriseName'
                },
                {
                    label: '上传日期',
                    type: 'date',
                    key: 'daterange'
                }
            ],
            dataList: [
                {
                    num: 1,
                    region: '小店区',
                    name: '太原市盛德龙汽车运输服务有限公司',
                    addr: '太原市小店区黄岗街道信安大道97号',
                    date: '2020-04',
                    total: '1250'
                },
                {
                    num: 2,
                    region: '小店区',
                    name: '太原市盛德龙汽车运输服务有限公司',
                    addr: '太原市小店区黄岗街道信安大道97号',
                    date: '2020-04',
                    total: '2478'
                },
                {
                    num: 3,
                    region: '万柏林区',
                    name: '太原市万顺汽车运输服务有限公司',
                    addr: '太原市万柏林区桂城管理区平安西街4号',
                    date: '2020-03',
                    total: '9852'
                },
                {
                    num: 4,
                    region: '万柏林区',
                    name: '太原市万顺汽车运输服务有限公司',
                    addr: '太原市万柏林区桂城管理区平安西街11号',
                    date: '2020-03',
                    total: '1003'
                },
                {
                    num: 5,
                    region: '万柏林区',
                    name: '太原市汉枫汽车服务有限公司',
                    addr: '太原市万柏林区桂城管理区平安西街5号',
                    date: '2020-03',
                    total: '1003'
                }
            ],
            breadArr: [
                { title: '查询统计', path: '' }, { title: '运输车辆维护业务统计', path: '' }
            ],
            total: 4,
            pageNum: 1,
            pageSize: 10
        }
    },
    components: {
        BreadFoot,
        Search,
        toolBar
    },
    methods: {
        handleSizeChange () {},
        handleCurrentChange () {},
        queryData () {}
    }
}
</script>
