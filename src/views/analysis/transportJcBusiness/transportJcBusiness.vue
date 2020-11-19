<template>
    <div id="transportJcBusiness">
        <tab-page :data="componentData"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import transportJcBusinessTable from './transportJcBusinessTable'
import transportJcBusinessChart from './transportJcBusinessChart'
export default {
    data () {
        return {
            componentData: [
                {
                    name: '运输车辆检测业务统计',
                    component: transportJcBusinessTable
                },
                {
                    name: '运输车辆检测业务图表统计',
                    component: transportJcBusinessChart
                }
            ]
        }
    },
    components: {
        TabPage
    }
}
</script>
