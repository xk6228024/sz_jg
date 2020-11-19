<template>
    <div id="transportVehicleBusiness">
        <tab-page :data="componentData"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import transportVehicleBusinessTable from './transportVehicleBusinessTable'
import transportVehicleBusinessChart from './transportVehicleBusinessChart'
export default {
    data () {
        return {
            componentData: [
                {
                    name: '运输车辆维护业务统计',
                    component: transportVehicleBusinessTable
                },
                {
                    name: '运输车辆维护业务图表统计',
                    component: transportVehicleBusinessChart
                }
            ]
        }
    },
    components: {
        TabPage
    }
}
</script>
