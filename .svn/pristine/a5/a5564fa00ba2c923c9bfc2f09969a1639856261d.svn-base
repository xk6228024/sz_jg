<template>
    <div id="monthPieChart" ref="monthPieChart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: ['title'],
    data () {
        return {
            pieOption: '',
            monthPieChart: ''
        }
    },
    components: {
    },
    mounted () {
        this.pieOption = {
            title: {
                text: this.title,
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: '0',
                bottom: '0',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC', '#9270CA', '#FF9D4D', '#269A99', '#FF99C3', '#7D9EF4', '#CBD8FA'],
            series: [
                {
                    name: '统计数据',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 124, name: '1月' },
                        { value: 542, name: '2月' },
                        { value: 263, name: '3月' },
                        { value: 104, name: '4月' },
                        { value: 471, name: '5月' },
                        { value: 88, name: '6月' },
                        { value: 142, name: '7月' },
                        { value: 344, name: '8月' },
                        { value: 403, name: '9月' },
                        { value: 511, name: '10月' },
                        { value: 54, name: '11月' },
                        { value: 169, name: '12月' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        formatter: '{c}'
                    }
                }
            ]
        }
        this.monthPieChart = echarts.init(this.$refs.monthPieChart)
        this.monthPieChart.setOption(this.pieOption)
        window.addEventListener('resize', () => {
            this.monthPieChart.resize()
        })
    }
}
</script>

<style lang='less' scoped>
#monthPieChart {
    height: 550px;
    width: 100%;
}
</style>
