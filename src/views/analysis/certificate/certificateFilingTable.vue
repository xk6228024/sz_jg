<template>
    <div id="certificateFilingTable">
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
                        prop="total"
                        label="备案数量"
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
    name: 'certificateFilingTable',
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
                            label: '古交市'
                        },
                        {
                            value: 5,
                            label: '万柏林区'
                        },
                        {
                            value: 7,
                            label: '清徐县'
                        },
                        {
                            value: 8,
                            label: '龙华县'
                        },
                        {
                            value: 9,
                            label: '尖草坪区'
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
                    total: '1250'
                },
                {
                    num: 2,
                    region: '小店区',
                    name: '太原市盛德龙汽车运输服务有限公司',
                    addr: '太原市小店区黄岗街道信安大道97号',
                    total: '2478'
                },
                {
                    num: 3,
                    region: '古交市',
                    name: '太原市万顺汽车运输服务有限公司',
                    addr: '太原市古交市桂城管理区平安西街4号',
                    total: '9852'
                },
                {
                    num: 4,
                    region: '古交市',
                    name: '太原市万顺汽车运输服务有限公司',
                    addr: '太原市古交市桂城管理区平安西街4号',
                    total: '1003'
                },
                {
                    num: 5,
                    region: '古交市',
                    name: '太原市铭鼎汽车运输服务有限公司',
                    addr: '太原市古交市桂城管理区平安西街99-1',
                    total: '1003'
                }
            ],
            breadArr: [
                { title: '查询统计', path: '' }, { title: '合格证备案统计', path: '' }
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
