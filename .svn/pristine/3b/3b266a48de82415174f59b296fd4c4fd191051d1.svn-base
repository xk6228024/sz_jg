<template>
    <div class="pieChart">
        <chart :option='option'></chart>
    </div>
</template>

<script>
import chart from './'
export default {
    name: 'pieChart',
    data () {
        return {
            option: {}
        }
    },
    props: {
        pieData: {
            type: Object,
            default: () => {
                return {
                    allCount: 0,
                    status: []
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
        pieData: {
            handler () {
                this.setOptions()
            },
            deep: true
        }
    },
    methods: {
        setOptions () {
            let pie = this.pieData.status
            let count = this.pieData.allCount
            let data = []
            for (var i = 0; i < pie.length; i++) {
                let itemdata = pie[i]
                data.push({
                    value: itemdata.value,
                    name: itemdata.name
                })
            }
            this.option = {
                color: ['#FFDD56', '#62B8FF'],
                legend: {
                    orient: 'horizontal',
                    left: '5%',
                    top: '5%',
                    textStyle: {
                        color: 'rgba(0,0,0,0.65)',
                        fontSize: 12
                    },
                    icon: 'circle',
                    itemHeight: 10, // 改变圆圈大小
                    itemWidth: 15, // 改变圆圈大小
                    itemGap: 20,
                    data: data
                },
                series: [
                    // 主要展示层的
                    {
                        radius: ['0%', '70%'],
                        center: ['50%', '50%'],
                        type: 'pie',
                        minAngle: 0,
                        startAngle: 60,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (params) {
                                    let value = ''
                                    if (!params.value || !count) {
                                        value = '0'
                                    } else {
                                        value = (params.value / count * 100).toFixed(2)
                                    }
                                    return '{title|' + value + '%}{abg|}\n' +
                                    '{hr|}\n' +
                                    '{name|' + params.name + '从业人员}'
                                },
                                rich: {
                                    title: {
                                        align: 'center',
                                        fontSize: 16
                                    },
                                    name: {
                                        color: '#777',
                                        align: 'center',
                                        fontSize: 12
                                    },
                                    hr: {
                                        borderColor: '#777',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    }
                                },
                                textStyle: {
                                    fontSize: '20',
                                    color: '#fff',
                                    lineHeight: 20
                                },
                                position: 'outside'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 15
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: data
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.pieChart {
    width: 100%;
    height: 100%;
}
</style>
