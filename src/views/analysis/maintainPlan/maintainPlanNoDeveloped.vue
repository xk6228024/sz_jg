<template>
    <div id="maintainPlanNoDeveloped">
        <div class="content">
            <tool-bar>
                <div class="fl">
                    <label>企业名称：</label>
                    <el-input class="tool_ipt" v-model="searchName" placeholder="请输入内容"></el-input>
                </div>
                <div class="fr">
                    <el-button class="query_btn slects_btn">查询</el-button>
                    <el-button class="react_btn">重置</el-button>
                </div>
            </tool-bar>
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
                        prop="plate"
                        label="车牌号码"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="plateColor"
                        label="车牌颜色"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="vin"
                        label="VIN码"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="code"
                        label="道路运输证号"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="carType"
                        label="车辆类型"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="carLargeType"
                        label="车辆大类"
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
import BreadFoot from '@/components/BreadFoot.vue'
import toolBar from '@/components/ToolBar.vue'
export default {
    name: 'maintainPlanNoDeveloped',
    data () {
        return {
            dataList: [
                {
                    num: 1,
                    plate: '晋ADS853',
                    plateColor: '黄色',
                    vin: 'LVRHDFAC7HN052411',
                    code: '49K232037032',
                    carType: '中型自卸货车',
                    carLargeType: '普货',
                    time: 1588645216383
                },
                {
                    num: 2,
                    plate: '晋AS263H',
                    plateColor: '黄色',
                    vin: 'LVRHDFAC7HN054521',
                    code: '49K232037899',
                    carType: '中型自卸货车',
                    carLargeType: '普货',
                    time: 1588645216383
                },
                {
                    num: 3,
                    plate: '晋AA7E8G4',
                    plateColor: '黄色',
                    vin: 'LVRHDFAC7HN052411',
                    code: '49K232037HGF',
                    carType: '中型自卸货车',
                    carLargeType: '普货',
                    time: 1588645216383
                },
                {
                    num: 4,
                    plate: '晋AZV563',
                    plateColor: '黄色',
                    vin: 'LVRHDFAC7HN052411',
                    code: '49K232037QQE',
                    carType: '中型自卸货车',
                    carLargeType: '普货',
                    time: 1588645216383
                },
                {
                    num: 4,
                    plate: '晋AZV599',
                    plateColor: '黄色',
                    vin: 'LVRHDFAC7HN052411',
                    code: '49K232037QQE',
                    carType: '中型自卸货车',
                    carLargeType: '普货',
                    time: 1588645216383
                }
            ],
            breadArr: [
                { title: '查询统计', path: '' }, { title: '维护计划查询统计', path: '' }
            ],
            searchName: '',
            total: 4,
            pageNum: 1,
            pageSize: 10
        }
    },
    components: {
        BreadFoot,
        toolBar
    },
    methods: {
        handleSizeChange () {},
        handleCurrentChange () {}
    }
}
</script>
