<template>
    <div class="employeesHealthFillIn-detail">
        <div class="content">
            <table class='repair-table' width='100%' border cellpadding='0' cellspacing='0' style='borderColor: #EBEEF5;'>
                <tr>
                    <td width='15%' align='center'>姓名</td>
                    <td width='35%' align='left'>{{ personHealthDetail.personName }}</td>
                    <td width='15%' align='center'>籍贯</td>
                    <td width='35%' align='left'>{{ personHealthDetail.personNativePlaceText }}</td>
                </tr>
                <tr>
                    <td align='center'>企业名称</td>
                    <td align='left'>{{ personHealthDetail.enterpriseName }}</td>
                    <td align='center'>手机号码</td>
                    <td align='left'>{{ personHealthDetail.personMobile }}</td>
                </tr>
                <tr>
                    <td align='center'>身份证号码</td>
                    <td align='left'>{{ personHealthDetail.personIdcardNumber }}</td>
                    <td align='center'>离开本地时间</td>
                    <td align='left'>{{ personHealthDetail.leaveLocalTime}}</td>
                </tr>
                <tr>
                    <td align='center'>返回本地时间</td>
                    <td align='left'>{{ personHealthDetail.returnLocalTime}}</td>
                    <td align='center'>填报时间</td>
                    <td align='left'>{{ personHealthDetail.createTime}}</td>
                </tr>
                <tr>
                    <td align='center'>当前所在城市</td>
                    <td align='left'>{{ personHealthDetail.provinceName + ' - ' + personHealthDetail.cityName }}</td>
                    <td align='center'>是否发热、咳嗽、乏力等不适症</td>
                    <td align='left'>{{ personHealthDetail.isFeverCoughFatigue === 1 ? '是' : '否' }}</td>
                </tr>
                <tr>
                    <td align='center'>是否疑似或确诊人员</td>
                    <td align='left'>{{ personHealthDetail.isSuspectedInfectDisease === 1 ? '是' : '否' }}</td>
                    <td align='center'>是否隔离</td>
                    <td align='left'>{{ personHealthDetail.isIsolated === 1 ? '是' : '否' }}</td>
                </tr>
                <tr>
                    <td align='center'>是否已复工</td>
                    <td colspan="3" align='left'>{{ personHealthDetail.isReturnWork === 1 ? '是' : '否' }}</td>
                </tr>
            </table>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <el-button class="back-btn" @click="$router.go(-1)">返回</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import CustomTable from '@/components/table'
export default {
    name: 'employeesHealthFillInDetail',
    components: {
        BreadFoot,
        CustomTable
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '从业人员健康数据填报', path: '' }, { title: '详情', path: '' }
            ],
            personHealthReportformId: '',
            personHealthDetail: {
                personName: '李强',
                personNativePlaceText: '山西太原',
                enterpriseName: '山西智菱行汽车销售服务有限公司',
                personMobile: '13566541121',
                personIdcardNumber: '440154198702035412',
                leaveLocalTime: '2020-01-16',
                returnLocalTime: '2020-03-20',
                createTime: '2020-04-14',
                provinceName: '山西',
                cityName: '太原',
                isFeverCoughFatigue: 0,
                isSuspectedInfectDisease: 0,
                isIsolated: 0,
                isReturnWork: 1
            }
        }
    },
    created () {
        // if (this.$route.query.personHealthReportformId) {
        //     this.personHealthReportformId = this.$route.query.personHealthReportformId
        //     this.getPersionHealthDetail()
        // }
    },
    methods: {
        getPersionHealthDetail () {
            this.$post('bas/buspersonhealthreportform/findPersonHealthReportformDataDetail', {
                personHealthReportformId: this.personHealthReportformId
            }).then(res => {
                if (res.status === 200 && res.data) {
                    this.personHealthDetail = res.data
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.employeesHealthFillIn-detail {
    .content {
        background: #FFF;
        min-height: 780px;
        padding: 20px 30px;
        box-sizing: border-box;
        .info-title {
            height: 54px;
            text-align: left;
            font-size:14px;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:40px;
        }
        .repair-table {
            border: none;
            td {
                padding: 8px 5px;
                font-size: 14px;
                color: #333;
            }
        }
    }
}
</style>
