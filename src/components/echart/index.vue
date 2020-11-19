<template>
    <div class="lchart">
        <div class=""
             id="cp_chart"
             ref="cpChart">
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
export default {
    name: 'lchart',
    components: {
    },
    props: {
        option: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data () {
        return {
            chartMap: null
        }
    },
    created () {
    },
    mounted () {
        window.addEventListener('resize', () => {
            if (this.chartMap) {
                this.chartMap.resize()
            }
        })
    },
    watch: {
        option: {
            handler () {
                this.$nextTick(() => {
                    this.onDraw()
                })
            },
            deep: true
        }
    },
    methods: {
        changeDraw () {
            this.$nextTick(() => {
                this.chartMap.resize()
            })
        },
        onDraw () {
            // 基于准备好的dom，初始化echarts实例
            if (!this.chartMap) {
                this.chartMap = echarts.init(this.$refs.cpChart)
            }
            // 绘制图表
            this.chartMap.setOption(this.option)
        }
    },
    beforeDestroy () {
        this.chartMap.clear()
        this.chartMap = null
    }
}
</script>

<style lang="less" scoped>
.lchart {
  width: 100%;
  height: 100%;

  #cp_chart {
    width: 100%;
    height: 100%;
  }
}
</style>
