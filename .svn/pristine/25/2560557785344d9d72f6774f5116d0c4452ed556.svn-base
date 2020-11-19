<template>
    <div class="barChart">
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
                    // day: [],
                    // install_count: [],
                    // repair_count: []
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
        }
        // show: {
        //     handler (val) {
        //         if (val && this.$refs.chart) {
        //             this.$refs.chart.changeDraw()
        //             // console.log('this.$refs.chart', this.$refs.chart)
        //         }
        //     },
        //     immediate: true
        // }
    },
    methods: {
        setOptions () {
            this.option = {
                grid: {
                    top: 80,
                    left: 30,
                    right: 30,
                    bottom: 20,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#BFBFBF'
                        }
                    },
                    axisTick: { show: false },
                    data: this.barData.xAxis,
                    nameTextStyle: {
                        color: '#666',
                        fontSize: 12
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#E9E9E9',
                            type: 'dashed'
                        }
                    },
                    axisLabel: {
                        color: '#545454',
                        interval: 0,
                        fontSize: 12,
                        formatter: function (value) {
                            return value.replace(/(.)/g, '$1\n')
                        }
                    }
                },
                yAxis: {
                    name: this.barData.yAxisName,
                    nameLocation: 'end',
                    nameTextStyle: {
                        fontSize: 14,
                        color: '#666',
                        padding: [0, 0, 20, 0]
                    },
                    minInterval: 1,
                    type: 'value',
                    splitNumber: 4,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#F5FAFF'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#EBF5FF'
                        }
                    },
                    axisTick: { show: false },
                    axisLabel: {
                        color: '#8BA7C7',
                        fontSize: 14
                    }
                },
                dataZoom: [
                    {
                        type: 'slider', // 图表下方的伸缩条
                        show: this.barData.xAxis.length > 10, // 是否显示
                        realtime: true, // 拖动时，是否实时更新系列的视图
                        start: 0, // 伸缩条开始位置（1-100）
                        end: parseInt(10 / this.barData.xAxis.length * 100), // 伸缩条结束位置（1-100）
                        bottom: 0
                    }
                ],
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    trigger: 'axis',
                    formatter: '{b}: {c}',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        color: '#FAD337',
                        barWidth: '25',
                        smooth: 0.5,
                        areaStyle: {
                            color: '#359DFF'
                        },
                        name: '',
                        type: 'bar',
                        data: this.barData.series // 接口数据
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.barChart {
    width: 100%;
    height: 600px;
}
</style>
