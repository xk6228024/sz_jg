<template>
    <div id="certificateFilingStatistics">
        <tab-page :data="componentData"></tab-page>
    </div>
</template>

<script>
import TabPage from '@/components/TabPage'
import certificateFilingTable from './certificateFilingTable'
import certificateFilingChart from './certificateFilingChart'
export default {
    data () {
        return {
            componentData: [
                {
                    name: '合格证备案统计',
                    component: certificateFilingTable
                },
                {
                    name: '合格证备案图表统计',
                    component: certificateFilingChart
                }
            ]
        }
    },
    components: {
        TabPage
    }
}
</script>
