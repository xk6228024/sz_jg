<template>
    <div id="transportJcModel">
        <tab-page :data="componentData"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import transportJcModelTable from './transportJcModelTable'
import transportJcModelChart from './transportJcModelChart'
export default {
    data () {
        return {
            componentData: [
                {
                    name: '运输车辆检测车型统计',
                    component: transportJcModelTable
                },
                {
                    name: '运输车辆检测车型图表统计',
                    component: transportJcModelChart
                }
            ]
        }
    },
    components: {
        TabPage
    }
}
</script>
