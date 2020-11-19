<!-- 查看固废物转移联单 -->
<template>
    <div class="viewWasteTransfer">
        <div class="msg-item">
            <div class="msg-item-title">单据信息</div>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">单据状态：</div>
                    <span class="error-color" v-if="type==='1'">未转移</span>
                    <span class="warning-color" v-if="type==='2'">待转移</span>
                    <span class="success-color" v-if="type==='3'">已转移</span>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">单据编号：</div>
                    <div class="value">F4596W4EF4410541E</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">单据时间：</div>
                    <div class="value">2020-07-12 17:30:45</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">转移时间：</div>
                    <div class="value">2020-07-12 17:30:45</div>
                </el-col>
            </el-row>
        </div>
        <div class="msg-item">
            <div class="msg-item-title">第一部分：废物产生单位</div>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">移出单位：</div>
                    <div class="value">太原市百益汽车服务有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">通讯地址：</div>
                    <div class="value">广东省太原市小店区长风路752号</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">联系电话：</div>
                    <div class="value">13564477871</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">运输单位：</div>
                    <div class="value">太原市东江凯达运输有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">通讯地址：</div>
                    <div class="value">广东省太原市清徐县坪地街道年丰村打石窝</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">联系电话：</div>
                    <div class="value">0755-84073491</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">接收单位：</div>
                    <div class="value">太原市清徐县东江工业废物处置有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">通讯地址：</div>
                    <div class="value">广东省太原市万柏林区大新路198号创新大厦</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">联系电话：</div>
                    <div class="value">0755-85810328</div>
                </el-col>
            </el-row>
            <div class="msg-item-title">固废物台账信息</div>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">固废物台账单：</div>
                    <div class="value">FWE46W46064644004</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">废物类别：</div>
                    <div class="value">HW08-废矿物油与含矿物油废物</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">废物代码：</div>
                    <div class="value">900-205-08 镀锡及焊锡回收的废矿物油</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">废物特性：</div>
                    <div class="value">毒性、易燃性、腐蚀性</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">废物形态：</div>
                    <div class="value">液态</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">主要有害成分：</div>
                    <div class="value">含机滤芯</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">包装方式：</div>
                    <div class="value">桶装</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">外运目的：</div>
                    <div class="value">处置</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">禁忌与应急措施：</div>
                    <div class="value">防火</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">废物明细：</div>
                    <div class="value">废机油</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">发运人：</div>
                    <div class="value">太原市百益汽车服务有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">运达地：</div>
                    <div class="value">广东省太原市清徐县坪地街道年丰村打石窝</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">数量(吨)：</div>
                    <div class="value">1.382</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">容器梳理：</div>
                    <div class="value">10</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">计划转移时间：</div>
                    <div class="value">2020-08-08 ~ 2020-08-15</div>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col class="col" :span="16">
                    <div class="label">备注：</div>
                    <div class="value">说点什么吧</div>
                </el-col>
            </el-row>
        </div>
        <div class="msg-item">
            <div class="msg-item-title">第二部分：废物运输单位</div>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">第一承运人：</div>
                    <div class="value">太原市东江凯达运输有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">经营许可证号：</div>
                    <div class="value">440370304</div>
                </el-col>
                <el-col class="col" :span="8" v-if="type === '1'">
                    <div class="label">运输终点：</div>
                    <div class="value">太原市清徐县坪地街道年丰村打石窝</div>
                </el-col>
                <el-col class="col" :span="8" v-if="type !== '1'">
                    <div class="label">计划运输日期：</div>
                    <div class="value">2020-08-08</div>
                </el-col>
            </el-row>
            <el-row class="row" v-if="type !== '1'">
                <el-col class="col" :span="8">
                    <div class="label">车（船）型：</div>
                    <div class="value">重型货车</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">车牌号码：</div>
                    <div class="value">晋AJ3850</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">道路运输证号：</div>
                    <div class="value">深字440300170485</div>
                </el-col>
            </el-row>
            <el-row class="row" v-if="type !== '1'">
                <el-col class="col" :span="8">
                    <div class="label">运输起点：</div>
                    <div class="value">太原市百益汽车服务有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">经由地：</div>
                    <div class="value">广州市、太原市、东莞市</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">运输终点：</div>
                    <div class="value">太原市清徐县坪地街道年丰村打石窝</div>
                </el-col>
            </el-row>
        </div>
        <div class="msg-item">
            <div class="msg-item-title">第三部分：废物接收单位</div>
            <el-row class="row">
                <el-col class="col" :span="8">
                    <div class="label">接收单位：</div>
                    <div class="value">太原市清徐县东江工业废物处置有限公司</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">经营许可证号：</div>
                    <div class="value">440370668</div>
                </el-col>
                <el-col class="col" :span="8" v-if="type!=='1'">
                    <div class="label">接收日期：</div>
                    <div class="value">2020-08-08</div>
                </el-col>
            </el-row>
            <el-row class="row" v-if="type==='3'">
                <el-col class="col" :span="8">
                    <div class="label">废物处置方式：</div>
                    <div class="value">SO3-储罐</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">确认废物数量(吨)：</div>
                    <div class="value">1.382</div>
                </el-col>
                <el-col class="col" :span="8">
                    <div class="label">备注：</div>
                    <div class="value">说点什么吧~</div>
                </el-col>
            </el-row>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button @click="$router.push('/wasteTransfer')">返回</el-button>
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
export default {
    name: 'viewWasteTransfer',
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '固废物管理', path: '' }, { title: '固废物联单转移', path: '' }, { title: '详情', path: '' }
            ],
            form: {},
            type: '1',
            pageNum: 1,
            pageSize: 10,
            total: 3,
            tableData: [
                {
                    num: '1',
                    date: '2020-07-01 14:30:45',
                    code: 'CRA56562019051660005',
                    plate: '晋A54DD2',
                    color: '蓝色',
                    type: '日常维护'
                },
                {
                    num: '2',
                    date: '2020-06-29 14:30:45',
                    code: 'CRA56562019051660006',
                    plate: '晋A54DD2',
                    color: '蓝色',
                    type: '日常维护'
                },
                {
                    num: '3',
                    date: '2020-06-28 11:30:45',
                    code: 'CRA56562019051660006',
                    plate: '晋A54DD2',
                    color: '蓝色',
                    type: '总成修理'
                }
            ],
            projectTable: [
                {
                    num: '1',
                    name: '清洗节气门',
                    number: 'KTQG005',
                    type: 'HW49',
                    code: '900-041-01',
                    wasteName: '节气门清洗罐',
                    count: '0.04',
                    tx: '易燃性',
                    xt: '固态',
                    bz: '袋装'
                }
            ],
            partsTable: [
                {
                    num: '1',
                    name: '壳牌超凡喜力 5W-40',
                    number: 'JY002',
                    type: 'HW49',
                    code: '900-041-01',
                    wasteName: '节气门清洗罐',
                    count: '0.36',
                    tx: '易燃性',
                    xt: '液态',
                    bz: '桶装'
                },
                {
                    num: '2',
                    name: '马牌机油滤芯器 2-182',
                    number: 'KLQ008',
                    type: 'HW49',
                    code: '900-041-01',
                    wasteName: '机油滤芯器',
                    count: '0.24',
                    tx: '腐蚀性',
                    xt: '固态',
                    bz: '袋装'
                }
            ],
            wasteNum: [
                {
                    num: ''
                }
            ],
            formData: {
                name: ''
            },
            wasteOptions: [
                {
                    label: '毒性',
                    value: 1
                },
                {
                    label: '易燃性',
                    value: 2
                },
                {
                    label: '腐蚀性',
                    value: 3
                },
                {
                    label: '反应性',
                    value: 4
                },
                {
                    label: '感染性',
                    value: 5
                }
            ]
        }
    },
    created () {
        this.type = this.$route.query.type
    },
    mounted () {
    },
    computed: {},
    // 使用其它组件
    components: {
        BreadFoot
    },
    // 方法
    watch: {},
    methods: {
        toBack () {
            this.$router.push('wasteTransfer')
        },
        handlePageChange () {},
        handleSizeChange () {}
    }
}
</script>

<style lang="less" scoped>
.viewWasteTransfer {
    height: 100%;
    background: #eff2f5;
    overflow: auto;
    font-size: 14px;
    .msg-item {
        padding: 24px;
        margin-top: 16px;
        background: #fff;
        .msg-item-title {
            color: #333;
            font-weight: bold;
            font-size: 15px;
            margin-bottom: 12px;
        }
        .row {
            margin-bottom: 16px;
            .label {
                display: inline-block;
                color: #333;
            }
            .value {
                display: inline-block;
                color: #666;
            }
        }
    }
}
</style>
