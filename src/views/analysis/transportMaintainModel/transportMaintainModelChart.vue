<template>
    <div id="transportMaintainModelChart">
        <div class="content">
            <search v-model="searchValue" :options="searchOption" @search="queryData(1)"></search>
            <div class='wrap'>
                <vertical-bar-chart :title="'运输车辆维护车型图表统计'" :barData="barData"></vertical-bar-chart>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-setting-normal">
        </bread-foot>
    </div>
</template>

<script>
import Search from '@/components/search'
import BreadFoot from '@/components/BreadFoot.vue'
import toolBar from '@/components/ToolBar.vue'
import VerticalBarChart from '@/components/echart/VerticalBarChart.vue'
export default {
    name: 'transportMaintainModelChart',
    data () {
        return {
            searchValue: {},
            barData: [],
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
            breadArr: [
                { title: '查询统计', path: '' }, { title: '运输车辆维护车型图表统计', path: '' }
            ]
        }
    },
    components: {
        BreadFoot,
        Search,
        VerticalBarChart,
        toolBar
    },
    created () {
        this.queryData()
    },
    methods: {
        queryData () {
            this.barData = {
                yAxisName: '维护数量',
                xAxis: ['重型货车', '重型罐式货车', '中型货车', '半挂牵引车', '小型货车', '大型客车', '大型卧铺客车'],
                series: [312, 898, 581, 164, 1054, 211, 622]
            }
            // if (!this.$checkAuth('vehicle:fix:certificate:stasticbymonth')) {
            //     this.$alert('您没有该权限！', '提示')
            //     return
            // }
            // this.$post('/vehicle/fix/certificate/stasticbymonth', {
            //     ...this.searchValue
            // })
            //     .then(res => {
            //         if (res.status === 200 && res.data && res.data.length) {
            //             var dataList = res.data.map(item => {
            //                 var month = parseInt(item.dataDate.replace(/^\d+-/, ''))
            //                 return {
            //                     month,
            //                     value: item.dataCount,
            //                     name: month + '月'
            //                 }
            //             })
            //             this.dataList = dataList.sort((a, b) => {
            //                 return a.month - b.month
            //             })
            //         }
            //     })
        }
    }
}
</script>
