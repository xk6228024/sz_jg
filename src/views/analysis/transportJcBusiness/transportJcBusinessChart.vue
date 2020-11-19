<template>
    <div id="transportJcBusinessChart">
        <div class="content">
            <search v-model="searchValue" :options="searchOption" @search="queryData(1)"></search>
            <div class='wrap'>
                <month-pie-chart :title="'运输车辆检测业务图表统计'" v-model="dataList"></month-pie-chart>
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
import MonthPieChart from '@/components/echart/MonthPieChart.vue'
export default {
    name: 'transportJcBusinessChart',
    data () {
        return {
            searchValue: {},
            dataList: [],
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
                { title: '查询统计', path: '' }, { title: '运输车辆检测业务图表统计', path: '' }
            ]
        }
    },
    components: {
        BreadFoot,
        Search,
        MonthPieChart,
        toolBar
    },
    created () {
        this.queryData()
    },
    methods: {
        queryData () {
            if (!this.$checkAuth('vehicle:fix:certificate:stasticbymonth')) {
                this.$alert('您没有该权限！', '提示')
                return
            }
            this.$post('/vehicle/fix/certificate/stasticbymonth', {
                ...this.searchValue
            })
                .then(res => {
                    if (res.status === 200 && res.data && res.data.length) {
                        var dataList = res.data.map(item => {
                            var month = parseInt(item.dataDate.replace(/^\d+-/, ''))
                            return {
                                month,
                                value: item.dataCount,
                                name: month + '月'
                            }
                        })
                        this.dataList = dataList.sort((a, b) => {
                            return a.month - b.month
                        })
                    }
                })
        }
    }
}
</script>
