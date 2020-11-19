<template>
    <div id="enterpriseVehicleDetail">
        <tab-page :data="componentData" :index="index"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import maintainOverdueVehicle from './maintainOverdueVehicle'
import jcOverdueVehicle from './jcOverdueVehicle'
import noMaintainPlanVehicle from './noMaintainPlanVehicle'
import noFiledVehicle from './noFiledVehicle'
export default {
    data () {
        return {
            index: 0,
            componentData: [
                {
                    name: '维护超期车辆查询',
                    component: maintainOverdueVehicle
                },
                {
                    name: '检测超期车辆查询',
                    component: jcOverdueVehicle
                },
                {
                    name: '未制定维护计划车辆查询',
                    component: noMaintainPlanVehicle
                },
                {
                    name: '未归档车辆查询',
                    component: noFiledVehicle
                }
            ]
        }
    },
    components: {
        TabPage
    },
    created () {
        if (this.$route.query.type) {
            this.index = this.$route.query.type - 0
        }
    }
}
</script>
