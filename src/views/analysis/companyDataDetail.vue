<!-- 备案信息查询 -->
<template>
    <div class="content-page" style="padding: 20px 30px 80px;background: #fff;">
        <div class="topInfo">
            <span>
                企业数据对接统计
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            万柏林区共有企业1128家,截止到目前,有226家企业完成系统对接
        </div>
        <search v-model='searchValue' :options='searchOption' @search='queryData(1)'></search>
        <custom-table
        :table-data="dataList"
        :label-data="labelData"
        :total="total"
        :height='550'
        :currentPage='pageNum'
        :loading="loading"
        @onPageChange="handleCurrentChange"
        @onSizeChange="handleSizeChange"
        >
        </custom-table>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import CustomTable from '@/components/table'
import Search from '@/components/search'
export default {
    name: 'recordInformation',
    components: {
        BreadFoot,
        CustomTable,
        Search
    },
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '健康档案数据上传统计详情', path: '' }
            ],
            searchOption: [
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'enterpriseName1'
                },
                {
                    label: '经营类别',
                    type: 'select',
                    key: 'coraStatus2',
                    list: [
                        { label: '一类', value: '1' },
                        { label: '二类', value: '2' },
                        { label: '三类', value: '3' }
                    ]
                },
                {
                    label: '系统对接',
                    type: 'select',
                    key: 'coraStatus22',
                    list: [
                        { label: '否', value: '1' },
                        { label: '是', value: '2' }
                    ]
                },
                {
                    label: '七日类上传',
                    type: 'select',
                    key: 'coraStatus5',
                    list: [
                        { label: '否', value: '1' },
                        { label: '是', value: '2' }
                    ]
                }
            ],
            searchValue: {},
            dataList: [
                {
                    num: '01',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '太原市喜马拉雅汽车服务公司',
                    enterpriseBusinessCategoryStr: '一类维修经营业务',
                    enterpriseOwner: '马鼎湖',
                    enterpriseOwnerPhone: '13265478515',
                    enterpriseOwnerPhone1: '达利德物流园',
                    createTime: '是',
                    createTime1: '否',
                    coraTime: '5',
                    coraStatusStr: '68'
                },
                {
                    num: '02',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '太原市奈大德旺汽车服务公司',
                    enterpriseBusinessCategoryStr: '三类维修经营业务',
                    enterpriseOwner: '郁栗户',
                    enterpriseOwnerPhone: '13265344951',
                    enterpriseOwnerPhone1: '创新路188-1',
                    createTime: '是',
                    createTime1: '否',
                    coraTime: '35',
                    coraStatusStr: '622'
                },
                {
                    num: '03',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '太原市大清风汽车服务公司',
                    enterpriseBusinessCategoryStr: '二类维修经营业务',
                    enterpriseOwner: '拉玛',
                    enterpriseOwnerPhone: '13654789444',
                    enterpriseOwnerPhone1: '金马花园5栋1单元',
                    createTime: '是',
                    createTime1: '否',
                    coraTime: '52',
                    coraStatusStr: '169'
                },
                {
                    num: '04',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '晋源区新金龙汽车修理厂',
                    enterpriseBusinessCategoryStr: '二类维修经营业务',
                    enterpriseOwner: '拉玛',
                    enterpriseOwnerPhone: '13654789444',
                    enterpriseOwnerPhone1: '金马花园5栋1单元',
                    createTime: '是',
                    createTime1: '否',
                    coraTime: '52',
                    coraStatusStr: '169'
                },
                {
                    num: '05',
                    enterpriseName: '2020-5-1',
                    enterpriseAreaStr: '太原市汉枫汽车服务有限公司',
                    enterpriseBusinessCategoryStr: '二类维修经营业务',
                    enterpriseOwner: '拉玛',
                    enterpriseOwnerPhone: '13654789444',
                    enterpriseOwnerPhone1: '金马花园5栋1单元',
                    createTime: '是',
                    createTime1: '否',
                    coraTime: '52',
                    coraStatusStr: '169'
                }
            ],
            labelData: [
                {
                    label: '序号',
                    // type: 'input',
                    width: 60,
                    prop: 'num'
                },
                {
                    label: '企业名称',
                    prop: 'enterpriseAreaStr',
                    width: 230
                },
                {
                    label: '经营类别',
                    prop: 'enterpriseBusinessCategoryStr'
                },
                {
                    label: '企业负责人',
                    prop: 'enterpriseOwner'
                },
                {
                    label: '企业负责人联系方式',
                    prop: 'enterpriseOwnerPhone',
                    width: 160
                },
                {
                    label: '经营地址',
                    prop: 'enterpriseOwnerPhone1'
                },
                {
                    label: '是否完成系统对接',
                    prop: 'createTime'
                },
                {
                    label: '是否七日内上传',
                    prop: 'createTime1'
                },
                {
                    label: '已上传数量(7日内)',
                    prop: 'coraTime'
                },
                {
                    label: '已上传数量(总数)',
                    prop: 'coraStatusStr'
                }
            ],
            loading: false,
            total: 1,
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        // this.queryData()
    },
    filters: {
        statusFilter: function (val) {
            if (val === 1) {
                return '审核通过'
            }
            if (val === 0) {
                return '待审核'
            }
            if (val === -1) {
                return '审核拒绝'
            }
        }
    },
    methods: {
        queryData (clear) {
            if (clear) {
                this.pageNum = 1
            }
            // this.loading = true
            // this.$post('enterprise/record/findEntList', {
            //     pageNum: this.pageNum,
            //     pageSize: this.pageSize,
            //     ...this.searchValue
            // }).then(res => {
            //     if (res.status === 200) {
            //         this.dataList = res.data.list
            //         this.total = res.data.total
            //     }
            //     this.loading = false
            // }).catch(() => {
            //     this.loading = false
            // })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.queryData(1)
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.queryData()
        },
        // 认证
        goDetail (id) {
            this.$router.push('/recordInformationDetail?isSearch=1&id=' + id)
        },
        // 新增
        addRecord () {
            this.$router.push('/recordApply')
        }
    }
}
</script>
<style lang="less">
    .topInfo {
        // height: 40px;
        // line-height: 40px;
        margin-bottom: 10px;
        color: #FD4B40;
        font-size: 14px;
        span {
            font-size: 16px;
            color: #333;
            font-weight: bold;
            margin-left: 20px;
        }
    }
</style>
