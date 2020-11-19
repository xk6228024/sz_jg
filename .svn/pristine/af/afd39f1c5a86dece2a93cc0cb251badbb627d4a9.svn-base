<template>
    <div class="lineChart">
        <chart ref="chart" :option='option'></chart>
    </div>
</template>

<script>
import chart from './'
export default {
    name: 'lineChart',
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
        },
        show: {
            handler (val) {
                if (val) {
                    this.$refs.chart.changeDraw()
                    // console.log('this.$refs.chart', this.$refs.chart)
                }
            },
            immediate: true
        }
    },
    methods: {
        setOptions () {
            this.option = {
                grid: {
                    top: '5%',
                    left: '1%',
                    right: '1%',
                    bottom: '5%',
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
                            if (value.length > 4) {
                                return value.slice(0, 4) + '\n' + value.slice(4, 8) + '\n' + value.slice(8, 12)
                            } else {
                                return value
                            }
                        }
                    }
                },
                yAxis: {
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
                        color: '#69B7FF',
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
.lineChart {
    width: 100%;
    height: 100%;
}
</style>
