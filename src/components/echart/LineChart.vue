<template>
    <div class="lineChart">
        <chart :option='option'></chart>
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
        lineData: {
            type: Object,
            default: () => {
                return {
                    xAxisData: [],
                    countArr: []
                }
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
        lineData: {
            handler () {
                this.setOptions()
            },
            deep: true
        }
    },
    methods: {
        setOptions () {
            this.option = {
                title: {
                    text: '',
                    x: 'center',
                    y: '100%'
                },
                grid: {
                    top: '20%',
                    bottom: '15%',
                    right: '5%',
                    left: '5%'
                },
                tooltip: { // 提示信息
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    data: this.lineData.xAxisData,
                    // boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: { // X轴轴线
                        show: true,
                        lineStyle: {
                            color: 'rgba(233,233,233,1)'
                        }
                    },
                    axisTick: { // X轴刻度
                        show: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(0,0,0,0.65)' // X轴文字颜色
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '人数/天',
                    nameTextStyle: {
                        color: 'rgba(0,0,0,0.65)'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#E9E9E9'
                        }
                    },
                    axisTick: { // y轴刻度
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'rgba(0,0,0,0.65)',
                            fontSize: 12
                        }
                    }
                },
                series: [
                    {
                        name: '已复工人员',
                        type: 'line',
                        smooth: false, // 平滑曲线显示
                        showAllSymbol: true, // 显示所有图形。
                        symbol: 'circle', // 标记的图形为实心圆
                        symbolSize: 5, // 标记的大小
                        itemStyle: {
                            // 折线拐点标志的样式
                            color: '#2FC25B'
                        },
                        lineStyle: {
                            color: '#2FC25B'
                        },
                        // areaStyle: {
                        //     color: 'rgba(5,140,255, 0.2)'
                        // },
                        data: this.lineData.countArr
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
