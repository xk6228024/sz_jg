<template>
    <div id="maintainPlanQuery">
        <tab-page :data="componentData"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import maintainPlanDeveloped from './maintainPlanDeveloped'
import maintainPlanNoDeveloped from './maintainPlanNoDeveloped'
export default {
    data () {
        return {
            componentData: [
                {
                    name: '已制定维护计划车辆',
                    component: maintainPlanDeveloped
                },
                {
                    name: '未制定维护计划车辆',
                    component: maintainPlanNoDeveloped
                },
                {
                    name: '维护超期车辆',
                    component: maintainPlanDeveloped
                }
            ]
        }
    },
    components: {
        TabPage
    }
}
</script>
