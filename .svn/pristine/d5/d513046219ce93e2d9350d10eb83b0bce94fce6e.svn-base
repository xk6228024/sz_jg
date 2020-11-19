<template>
    <div class="lineChart">
        <chart ref="chart" :option='option'></chart>
    </div>
</template>

<script>
import chart from './'
export default {
    name: 'barChart',
    data () {
        return {
            option: {}
        }
    },
    props: {
        barData: {
            type: Object,
            default: () => {
                return {
                    xAxisData: [],
                    data1: [],
                    data2: []
                }
            }
        },
        // 通知给tab页面中隐藏的EChart 显示的标识,然后resize eChart
        show: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    components: {
        chart
    },
    mounted () {
        this.setOptions()
    },
    watch: {
        barData: {
            handler () {
                this.setOptions()
            },
            deep: true
        },
        show: {
            handler (val) {
                if (val) {
                    this.$refs.chart.changeDraw()
                }
            },
            immediate: true
        }
    },
    methods: {
        setOptions () {
            this.option = {
                color: ['#5B8FF9', '#5AD8A6'],
                legend: {
                    data: this.barData.legend,
                    left: '2%',
                    top: '3%',
                    icon: 'circle',
                    itemHeight: 10, // 改变圆圈大小
                    itemWidth: 15, // 改变圆圈大小
                    itemGap: 20
                },
                dataZoom: [
                    {
                        type: 'slider', // 图表下方的伸缩条
                        show: this.barData.xAxisData.length > 4, // 是否显示
                        realtime: true, // 拖动时，是否实时更新系列的视图
                        start: 0, // 伸缩条开始位置（1-100），可以随时更改
                        end: parseInt(4 / this.barData.xAxisData.length * 100) // 伸缩条结束位置（1-100），可以随时更改
                    }
                ],
                tooltip: {},
                grid: {
                    top: '20%',
                    bottom: '20%',
                    right: '5%',
                    left: '5%'
                },
                xAxis: {
                    data: this.barData.xAxisData,
                    axisLine: {
                        onZero: true
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    inverse: false,
                    splitArea: {
                        show: false
                    },
                    axisTick: { // y轴刻度
                        show: false
                    },
                    axisLine: { // y轴轴线
                        show: false
                    }
                },
                series: [
                    {
                        name: this.barData.legend[0],
                        type: 'bar',
                        barWidth: '10',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data: this.barData.data1
                    },
                    {
                        name: this.barData.legend[1],
                        type: 'bar',
                        barWidth: '10',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data: this.barData.data2
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.lineChart {
    width: 100%;
    height: 100%;
}
</style>
