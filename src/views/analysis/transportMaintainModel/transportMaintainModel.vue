<template>
    <div id="transportMaintainModel">
        <tab-page :data="componentData"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import transportMaintainModelTable from './transportMaintainModelTable'
import transportMaintainModelChart from './transportMaintainModelChart'
export default {
    data () {
        return {
            componentData: [
                {
                    name: '运输车辆维护车型统计',
                    component: transportMaintainModelTable
                },
                {
                    name: '运输车辆维护车型图表统计',
                    component: transportMaintainModelChart
                }
            ]
        }
    },
    components: {
        TabPage
    }
}
</script>
