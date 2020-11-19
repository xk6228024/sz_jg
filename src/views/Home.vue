<template>
    <div class="home">
        <div class="content">
            <el-scrollbar>
                <div class="bos-row clearfix">
                    <el-row class="ppbox">
                        <el-col :span="4" class="ppItem" v-for="(item,index) in ppList" :key="item.aa">
                            <div class="ppInner" :class="{'active': ppIndex===index}" @click="changeIndex(index)">
                                <img :src="item.imgUrl"/>
                                <p class="p1">{{item.num}}</p>
                                <p class="p2">{{item.name}}({{item.remark}})</p>
                                <!-- <p class="p3">({{item.remark}})</p> -->
                            </div>
                        </el-col>
                        <!-- <el-col :span="4" class="ppItem">
                            <div class="" style="background:#ffffff;height:190px;">
                                <div class="bos-card">
                                    <div class="card-body-top">
                                        <span class="chart-card-title">通告信息</span>
                                        <span class="chart-card-action" @click="toNotoMore" v-if="noticeList.length">更多></span>
                                    </div>
                                    <div class="card-body-con">
                                        <ul v-if="noticeList.length">
                                            <li class="noto-li" @click="toNotoDetail(item.noticeId)" v-for="item in noticeList" :key='item.id'>
                                                <p class="noto-text" :title="item.title">● {{item.title}}</p>
                                                <span class="noto-time">{{item.time}}</span>
                                            </li>
                                        </ul>
                                        <div v-if="!noticeList.length" class="no-notice">暂无信息</div>
                                    </div>
                                </div>
                            </div>
                        </el-col> -->
                    </el-row>
                </div>
            </el-scrollbar>
            <div class="bos-card boxs-tab">
                <div class="tabs-bar clearfix" style="background:#ffffff;">
                    <div class="tabs-tit">
                        <span class="tabs-tit-text" :style="{color: activeTab===1?'#1890FF':'#666'}" @click="activeTab=1">{{this.showHeader}}</span>
                        <div class="fr">
                            <div class="dlb" v-if="/^(0|1|2|4)$/.test(ppIndex)">
                                <label class="label">经营类别：</label>
                                <el-select v-model="radioF" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in bussinessCategory"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="dlb" v-if="ppIndex === 0">
                                <label class="label">备案状态：</label>
                                <el-select v-model="radioA" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option label="已备案" value="1"></el-option>
                                    <el-option label="未备案" value="0"></el-option>
                                </el-select>
                            </div>
                            <div class="dlb" v-if="ppIndex === 1">
                                <label class="label">勘验状态：</label>
                                <el-select v-model="radioB" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in inquestInfo"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 3" class="dlb">
                                <label class="label">维修类型：</label>
                                <el-select v-model="radioE" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in repairType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="/11|12|13|14/.test(ppIndex)" class="dlb">
                                <label class="label">车辆类型：</label>
                                <el-select v-model="vehicleCategory" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in transportCarType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 4" class="dlb">
                                <label class="label">状态：</label>
                                <el-select v-model="radioE" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option label="已发放" :value="2"></el-option>
                                    <el-option label="已使用" :value="3"></el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 5" class="dlb">
                                <label class="label">工种：</label>
                                <el-select v-model="personDictionaryCategory" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in personDictionary"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 6" class="dlb">
                                <label class="label">车辆类型：</label>
                                <el-select v-model="vehicleTypeStr" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in vehicleType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 6" class="dlb">
                                <label class="label">使用性质：</label>
                                <el-select v-model="useType" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option label="营运" value="1"></el-option>
                                    <el-option label="非营运" value="0"></el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 7" class="dlb">
                                <label class="label">企业等级：</label>
                                <el-select v-model="jcGrade" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in jcGradeList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 8" class="dlb">
                                <label class="label">经营范围：</label>
                                <el-select v-model="transportBusinessScopeStr" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in transportBusinessScope"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="ppIndex === 9" class="dlb">
                                <label class="label">检测类别：</label>
                                <el-select v-model="transportCheckTypeStr" placeholder="请选择" size="small">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option
                                        v-for="item in transportCheckType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <label class="label">选择日期：</label>
                            <el-date-picker
                                size="small"
                                :style="{'border-color':activeTime==='range'?'#1890FF':''}"
                                class="extra-time dateSelect"
                                v-model="daterange"
                                type="daterange"
                                align="right"
                                value-format="timestamp"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions"
                                @change="chooseTime('range')"
                                >
                            </el-date-picker>
                        </div>
                    </div>
                    <!-- <div class="fr" v-if="[5].indexOf(ppIndex)!==-1">
                        <div class="extra-wrap">
                            <span :class="{'active': activeTime==='week'}" @click="chooseTime('week')">本周</span>
                            <span :class="{'active': activeTime==='month'}" @click="chooseTime('month')">本月</span>
                            <span :class="{'active': activeTime==='year'}" @click="chooseTime('year')">全年</span>
                        </div>
                        <el-date-picker
                            :style="{'border-color':activeTime==='range'?'#1890FF':''}"
                            class="extra-time dateSelect"
                            v-model="daterange"
                            type="daterange"
                            align="right"
                            value-format="timestamp"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions"
                            @change="chooseTime('range')"
                            >
                        </el-date-picker>
                    </div> -->
                </div>
                <div class="tabs-content clearfix">
                    <el-row :gutter="20">
                        <el-col :span="17" class="bbox bbox1" style="text-align:center;">
                            <div id="mapChart" style="width:800px;height:500px;display:inline-block;position:relative;">
                                <img src="../assets/images/szmap.png" width="100%" height="100%">
                                <div class="mapText" v-for="item in textList" :key="item.aaa" :style="{'left': item.left,'top': item.top}" @click="goPage">
                                    <p>{{item.num}}</p>
                                    <p>{{item.name}}</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="7" class="bbox">
                            <div id="cccccc" style="width: 100%; height: 450px;"></div>
                        </el-col>
                    </el-row>
                    <!-- <div class="bos-col-m col-fl">
                        <div class="title pd30">
                            <h4>数据增长趋势</h4>
                        </div>
                        <div id="bosTabChart" style="width: 100%; height: 450px;"></div>
                    </div>
                    <div class="bos-col-m col-fr">
                        <div class="rank">
                            <div class="title">
                                <h4 v-if="activeTab===1">企业数据上传排名</h4>
                                <h4 v-if="activeTab===2">各区域企业备案数据排行</h4>
                            </div>
                            <ul class="list" v-if="activeTab===1">
                                <li v-for="(item,index) in rankingList" :key="index">
                                    <span :class="{'active': index < 3}">{{index + 1}}</span>
                                    <span>{{item.enterprise}}</span>
                                    <span>{{item.uploadQuantity | thousands}}</span>
                                </li>
                            </ul>
                            <ul class="list" v-if="activeTab===2">
                                <li v-for="(item,index) in rankingList" :key="index">
                                    <span :class="{'active': index < 3}">{{index + 1}}</span>
                                    <span>{{item.regionName}}</span>
                                    <span>{{item.uploadQuantity}}</span>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import moment from 'moment'
import mapJson from '@/assets/js/tyMap.json'
import { bussinessCategory, inquestInfo, repairType, transportCarType, personDictionary, vehicleType,
    jcGradeList, transportBusinessScope, transportCheckType } from '@/assets/js/type.js'
export default {
    name: 'home',
    components: {
        moment
    },
    data () {
        return {
            checkList: [],
            showHeader: '维修企业',
            radio: 1,
            rangeTime: [],
            bussinessCategory,
            inquestInfo,
            repairType,
            transportCarType,
            personDictionary,
            vehicleType,
            jcGradeList,
            transportBusinessScope,
            transportBusinessScopeStr: '',
            transportCheckType,
            transportCheckTypeStr: '',
            jcGrade: '',
            vehicleCategory: '',
            radioB: '',
            radioA: '',
            category: '',
            radioE: '',
            radioF: '',
            personDictionaryCategory: '',
            vehicleTypeStr: '',
            useType: '',
            mapChart: '',
            textList: [
                {
                    left: '107px',
                    top: '220px',
                    name: '小店区',
                    num: 213
                },
                {
                    left: '150px',
                    top: '120px',
                    name: '迎泽区',
                    num: 102
                },
                {
                    left: '181px',
                    top: '316px',
                    name: '杏花岭区',
                    num: 323
                },
                {
                    left: '232px',
                    top: '197px',
                    name: '尖草坪区',
                    num: 314
                },
                {
                    left: '255px',
                    top: '338px',
                    name: '万柏林区',
                    num: 224
                },
                {
                    left: '344px',
                    top: '320px',
                    name: '晋源区',
                    num: 219
                },
                {
                    left: '417px',
                    top: '231px',
                    name: '清徐县',
                    num: 311
                },
                {
                    left: '459px',
                    top: '285px',
                    name: '阳曲县',
                    num: 247
                },
                {
                    left: '459px',
                    top: '285px',
                    name: '娄烦县',
                    num: 247
                },
                {
                    left: '459px',
                    top: '285px',
                    name: '古交市',
                    num: 247
                }
            ],
            ppList: [
                {
                    name: '企业备案',
                    imgUrl: 'img/demo/home (3).png',
                    num: 2341,
                    color: '#4DCB73',
                    url: '/recordAuth',
                    remark: '家'
                },
                {
                    name: '现场勘验',
                    imgUrl: 'img/demo/home (9).png',
                    num: 5280,
                    color: '#3AA0FF',
                    url: '/inquestInfo',
                    remark: '家'
                },
                {
                    name: '维修企业档案',
                    imgUrl: 'img/demo/home (10).png',
                    num: 6310,
                    color: '#FAAD14',
                    url: '/companyArchw',
                    remark: '份'
                },
                {
                    name: '电子健康档案',
                    imgUrl: 'img/demo/home (6).png',
                    remark: '条',
                    color: '#975FE4',
                    url: '/electronicHealth',
                    num: 4148
                },
                {
                    name: '合格证',
                    imgUrl: 'img/demo/home (7).png',
                    remark: '张',
                    color: '#37CBCB',
                    url: '/maintenanceCertificate',
                    num: 7798
                },
                {
                    name: '从业人员',
                    imgUrl: 'img/demo/home (5).png',
                    remark: '人',
                    url: '/employeesArch',
                    num: 1689
                },
                {
                    name: '车辆档案',
                    imgUrl: 'img/demo/home (4).png',
                    url: '/transportArch2',
                    num: 5729,
                    remark: '份'
                },
                {
                    name: '检测企业',
                    imgUrl: 'img/demo/home (8).png',
                    url: '/companyArchj',
                    remark: '家',
                    num: 3287
                },
                {
                    name: '运输企业',
                    imgUrl: 'img/demo/home (1).png',
                    url: '/companyArchy',
                    remark: '家',
                    num: 3215
                },
                {
                    name: '运输车检测',
                    imgUrl: 'img/demo/home (9).png',
                    url: '/transportJcBusiness',
                    remark: '条',
                    num: 1689
                },
                {
                    name: '运输车维护',
                    imgUrl: 'img/demo/home (11).png',
                    url: '/transportMaintainModel',
                    num: 5729,
                    remark: '条'
                },
                {
                    name: '维护超期',
                    imgUrl: 'img/demo/whcq.png',
                    url: '/enterpriseVehicleQuery',
                    remark: '辆',
                    num: 5729
                },
                {
                    name: '检测超期',
                    imgUrl: 'img/demo/jccq.png',
                    url: '/enterpriseVehicleQuery',
                    remark: '辆',
                    num: 5729
                },
                {
                    name: '未制定维护计划',
                    imgUrl: 'img/demo/wzdwhjh.png',
                    url: '/enterpriseVehicleQuery',
                    remark: '辆',
                    num: 5729
                },
                {
                    name: '未归档车辆',
                    imgUrl: 'img/demo/wgdcl.png',
                    url: '/enterpriseVehicleQuery',
                    remark: '辆',
                    num: 5729
                }
            ],
            ppIndex: 0,
            activeTab: 1,
            complainNum: 0, // 投诉量
            complainNum2: 0,
            visitNum: 0, // 访问量
            visitNum2: 0,
            bosOption1: {
                grid: {
                    left: 0,
                    bottom: 0,
                    top: 5
                },
                tooltip: {
                    formatter: '{b}  {c}',
                    backgroundColor: '#ccc',
                    borderColor: '#111',
                    textStyle: {
                        color: '#222'
                    },
                    padding: 2
                },
                xAxis: {
                    data: []
                },
                yAxis: {
                    show: false
                },
                series: [{
                    type: 'bar',
                    itemStyle: {
                        color: '#33ABFB'
                    },
                    data: []
                }]
            },
            bosOption2: {
                grid: {
                    left: 0,
                    bottom: 0,
                    top: 5
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    textStyle: {
                        fontSize: '14px',
                        color: '#666'
                    },
                    formatter: '{b}点  {c}次',
                    padding: [8, 10, 8, 10],
                    confine: true,
                    axisPointer: {
                        type: 'none'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    show: false,
                    position: 'left'
                },
                series: [{
                    type: 'line',
                    smooth: true,
                    symbol: 'emptyCircle',
                    showSymbol: false,
                    itemStyle: {
                        color: '#8543E0'
                    },
                    areaStyle: {},
                    data: []
                }]
            },
            // 中间表单
            bosTabOption: {
                tooltip: {
                    formatter: '{b0} {c0}',
                    backgroundColor: '#ccc',
                    borderColor: '#111',
                    textStyle: {
                        color: '#222'
                    },
                    padding: 2
                },
                grid: {
                    left: 50,
                    bottom: 50
                },
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#595959'
                        }
                    },
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                },
                yAxis: {
                    minInterval: 1,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#E8E8E8',
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    // width: 20,
                    barMaxWidth: 50,
                    itemStyle: {
                        width: 20,
                        color: '#33ABFB'
                    },
                    data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
                }]
            },
            // 企业排名
            rankingList: [],
            // 底下列表
            editableTabs: [
                { name: '万柏林区', value: '88%' },
                { name: '万柏林区', value: '88%' },
                { name: '万柏林区', value: '88%' },
                { name: '万柏林区', value: '88%' },
                { name: '万柏林区', value: '88%' },
                { name: '万柏林区', value: '88%' },
                { name: '万柏林区', value: '88%' }
            ],
            pickerOptions: {
                shortcuts: [{
                    text: '最近一个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }],
                onPick: ({ maxDate, minDate }) => {
                    this.choiceDate = minDate.getTime()
                    if (maxDate) {
                        this.choiceDate = ''
                    }
                },
                disabledDate: (time) => {
                    if (this.choiceDate) {
                        const one = 30 * 24 * 3600 * 1000
                        const minTime = this.choiceDate - one
                        const maxTime = this.choiceDate + one
                        return time.getTime() < minTime || time.getTime() > maxTime
                    }
                }
            },
            noticeList: [
                {
                    title: '太原维修备案渠道开通',
                    time: '2019/11/29'
                },
                {
                    title: '南山维修企业备案量完成9成',
                    time: '2019/11/29'
                }
            ], // 通告列表
            activeTime: 'week', // 健康档案时间选择
            daterange: '', // 健康档案时间选择
            currentOffset: 0,
            windowSize: 5,
            paginationFactor: 218,
            cardScrollwidth: 0,
            activeItem: 0, // 底下列表选择
            uploadFixDataNumber: 0, // 总数
            fixDataWeekRate: 0,
            fixDataDayRate: 0,
            fixDataAverageValue: 0
        }
    },
    filters: {
        momentTime: function (val) {
            return moment(val).format('YYYY-MM-DD')
        }
    },
    watch: {
        activeTab (val) {
            console.log(val)
            this.activeTime = 'week'
            let obj = this.getFirstDayOfWeek()
            this.getTrendAndUploadTop(1, obj.stime, obj.etime)
        }
    },
    methods: {
        goPage () {
            if (this.ppIndex === 0) {
                this.$router.push('/companyArchw')
            } else if (this.ppIndex === 1) {
                this.$router.push('/companyArchy')
            } else if (this.ppIndex === 2) {
                this.$router.push('/companyArchj')
            } else if (this.ppIndex === 3) {
                this.$router.push('/transportArch')
            } else if (this.ppIndex === 4) {
                this.$router.push('/erweiWork')
            } else if (this.ppIndex === 5) {
                this.$router.push('/recordInfoSearch')
            } else if (this.ppIndex === 6) {
                this.$router.push('/recordInfoSearch2')
            } else if (this.ppIndex === 7) {
                this.$router.push('/transportArch2')
            } else if (this.ppIndex === 8) {
                this.$router.push('/maintainRecord')
            } else if (this.ppIndex === 9) {
                this.$router.push('/complainApply')
            }
        },
        changeIndex (index) {
            if (index !== this.ppIndex) {
                this.ppIndex = index
                this.showHeader = this.ppList[index].name
                this.newChart()
            }
        },
        // 当天访问辆趋势
        getTodayVisitedNum () {
            this.$post('/external/getSiteAccessQuantity').then(res => {
                if (res.status === 200) {
                    if (res.data && res.data.status === 200) {
                        let xlist = res.data.data.map(e => { return e.date })
                        let vlist = res.data.data.map(e => { return e.quantity })
                        this.bosOption2.xAxis.data = xlist
                        this.bosOption2.series[0].data = vlist
                        let bosechart2 = echarts.init(document.getElementById('bosChart2'))
                        bosechart2.setOption(this.bosOption2)
                    }
                }
            })
        },
        // 获取 维修电子健康档案上传数
        getDataNumber () {
            this.$post('bas/vehicle/fix/uploadFixDataNumber')
                .then(res => {
                    if (res.status === 200) {
                        this.uploadFixDataNumber = res.data
                    }
                })
        },
        // 周同比
        getDataWeekRate () {
            this.$post('bas/vehicle/fix/getFixDataWeekRate')
                .then(res => {
                    if (res.status === 200) {
                        this.fixDataWeekRate = res.data
                    }
                })
        },
        // 日环比
        getDataDayRate () {
            this.$post('bas/vehicle/fix/getFixDataDayRate')
                .then(res => {
                    if (res.status === 200) {
                        this.fixDataDayRate = res.data
                    }
                })
        },
        // 日均上传数
        getDataAverageValue () {
            this.$post('bas/vehicle/fix/getfixDataAverageValue')
                .then(res => {
                    if (res.status === 200) {
                        this.fixDataAverageValue = res.data
                    }
                })
        },
        // 获取通知
        quertNotice () {
            this.$post('external/notice/list', {
                pageNum: 1,
                pageSize: 4
            })
                .then(res => {
                    if (res.status === 200) {
                        this.noticeList = res.data.list
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        timeFormat (timestamp) {
            // if (!date || typeof(date) === 'string') {
            //     return
            // }
            let date = new Date(timestamp)
            let Y = date.getFullYear()
            let M = date.getMonth() + 1
            if (M < 10) {
                M = '0' + M
            }
            let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
            let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
        },
        // 获取指定日期的星期一和星期天, 不传则获取本周
        getFirstDayOfWeek (time) {
            let date = time ? new Date(time) : new Date()
            let firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() || 7) + 1, 0, 0, 0) - 0
            let lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7 - (date.getDay() || 7), 0, 0, 0) - 0 + 24 * 60 * 60 * 1000 - 1
            let s = this.timeFormat(firstDay)
            let e = this.timeFormat(lastDay)
            return {
                stime: s,
                etime: e
            }
        },
        // 获取指定月份的第一天和最后一天，不传则获取当月
        getFirstDayOfMonth (time) {
            let date = time ? new Date(time) : new Date()
            let firstDay = new Date(date.getFullYear(), date.getMonth(), 1) - 0
            let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0) - 0 + 24 * 60 * 60 * 1000 - 1
            return {
                stime: this.timeFormat(firstDay),
                etime: this.timeFormat(lastDay)
            }
        },
        // 获取指定年份的第一天和最后一天，不传则获取今年
        getFirstDayOfYear (time) {
            let date = time ? new Date(time) : new Date()
            let firstDay = new Date(date.getFullYear(), 0, 1) - 0
            let lastDay = new Date(date.getFullYear(), 12, 0) - 0 + 24 * 60 * 60 * 1000 - 1
            return {
                stime: this.timeFormat(firstDay),
                etime: this.timeFormat(lastDay)
            }
        },
        // 选择
        chooseTime (val) {
            this.activeTime = val
            if (val === 'week') {
                let obj = this.getFirstDayOfWeek()
                this.getTrendAndUploadTop(1, obj.stime, obj.etime)
            } else if (val === 'month') {
                let obj = this.getFirstDayOfMonth()
                this.getTrendAndUploadTop(2, obj.stime, obj.etime)
            } else if (val === 'year') {
                let obj = this.getFirstDayOfYear()
                this.getTrendAndUploadTop(3, obj.stime, obj.etime)
            } else if (val === 'range') {
                this.getTrendAndUploadTop(4, this.daterange[0], this.daterange[1] + 24 * 60 * 60 * 1000 - 1000)
            }
        },
        // 时间选择
        extraTimeBlur (val) {
            console.log(this.daterange, 'daterange')
        },
        // 汽车维修电子健康档案
        getTrendAndUploadTop (flag, stime, etime) {
            let s = stime
            let e = etime
            if ((stime + '').indexOf('-') !== -1) {
                stime = stime.replace(/-/g, '/')
                etime = etime.replace(/-/g, '/')
                s = new Date(stime).getTime()
                e = new Date(etime).getTime()
            }
            let obj = {
                'flag': flag, // 1、本周 2、本月 3、本年 4、按天( 右边日期输入框 )  "2019-01-01 00:00:00"
                'startTime': s,
                'endTime': e
            }
            let url = 'bas/vehicle/fix/getGrowthTrendAndUploadTop'
            if (this.activeTab === 2) url = 'enterprise/record/getGrowthTrendAndUploadTop'
            this.$post(url, obj)
                .then(res => {
                    if (res.status === 200) {
                        this.rankingList = res.data.top
                        let growthTrend = res.data.growthTrend
                        if (res.data.top) {
                            this.rankingList = res.data.top
                        }
                        let arr1 = []
                        let arr2 = []
                        if (growthTrend) {
                            for (let i = 0; i < growthTrend.length; i++) {
                                if (flag === 3) {
                                    arr1.push(growthTrend[i].date)
                                } else {
                                    arr1.push(growthTrend[i].date)
                                }
                                arr2.push(growthTrend[i].quantity)
                            }
                            this.bosTabOption.xAxis.data = arr1
                            this.bosTabOption.series[0].data = arr2
                            let bosTabChart = echarts.init(document.getElementById('bosTabChart'))
                            bosTabChart.setOption(this.bosTabOption)
                        }
                    }
                })
        },
        // 通告更多
        toNotoMore () {
            this.$router.push('/notice')
        },
        // 通告详情
        toNotoDetail (id) {
            this.$router.push('/checkNotice?noticeId=' + id)
        },
        // footer
        // 画圆
        drawRound () {
            let rounds = this.editableTabs
            let label1 = {
                normal: {
                    color: 'rgba(0,150,250,0.3)'
                }
            }
            let label2 = {
                normal: {
                    color: 'rgba(211,211,211,0.8)'
                }
            }
            let optionss = {
                // title: {
                //     x: 'center',
                //     y: 'center',
                //     textStyle: {
                //         fontWeight: 'normal',
                //         color: '#0580f2',
                //         fontSize: '12'
                //     }
                // },
                color: 'rgba(0,150,250,0.6)',
                legend: {
                    show: false
                },
                series: [
                    {
                        name: '上传数',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        label: {
                            show: false
                        },
                        data: [
                            { value: 80, name: '01', itemStyle: label1 },
                            { value: 20, name: '02', itemStyle: label2 }
                        ]
                    }
                ]
            }
            for (let i = 0; i < rounds.length; i++) {
                if (this.activeItem === i) {
                }
                let names = rounds[i].name + [i]
                let dom = this.$refs[names][0]
                let chartss = echarts.init(dom)
                chartss.setOption(optionss)
            }
        },
        // 切换
        toActiveItem (index) {
            this.activeItem = index
        },
        // 向左移动--
        toPrev () {
            this.moveCarousel(-1)
        },
        // 向右移动
        toNext () {
            this.moveCarousel(1)
        },
        moveCarousel (direction) {
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor
            }
        },
        //  ----------------------
        getCount (id, param) {
            var obj = {}
            if (id && param && param !== 'enterpriseRegion') {
                obj[param] = id
            }
            this.$post('fix/comment/count', obj)
                .then(res => {
                    if (res.status === 200) {
                        this.fixCommentCount = res.fixCommentCount
                        this.complaintCount = res.complaintCount
                    }
                })
        },
        goNoticeDetail (id) {
            this.$router.push('/checkNotice?noticeId=' + id)
        },
        select (id, param) {
            this.queryData(id, param)
            this.queryData2(id, param)
            this.getCount(id, param)
            this.getFixCountByVehicle(id, param)
            this.getFixCountByEnterprise(id, param)
        },
        queryData (id, param) {
            this.$post('/bas/enterprise/register/findBaseEnterpriseOpen', {
                [param]: id
            }).then(res => {
                if (res.status === 200) {
                    var val = {
                        no: res.data ? res.data.open_no : 0,
                        ok: res.data ? res.data.open_ok : 0,
                        total: function () {
                            return this.ok + this.no
                        },
                        okPercent: function () {
                            return this.total() && (this.ok / this.total() * 100).toFixed(2)
                        },
                        noPercent: function () {
                            return this.total() && (this.no / this.total() * 100).toFixed(2)
                        }
                    }
                    var labelLine = {
                        normal: {
                            length: 30,
                            length2: 70,
                            lineStyle: {
                                color: '#a0a0a0'
                            }
                        }
                    }
                    this.pieData = [
                        {
                            value: val.no,
                            name: '未开通',
                            labelLine,
                            label: {
                                normal: {
                                    formatter: data => {
                                        return `${data.name}企业\n\n{a|${val.noPercent()}%}`
                                    },
                                    padding: [0, -70],
                                    color: '#333',
                                    fontSize: 14,
                                    rich: {
                                        a: {
                                            color: '#F9A673',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            value: val.ok,
                            name: '已开通',
                            labelLine,
                            label: {
                                normal: {
                                    formatter: data => {
                                        return `{a|${val.okPercent()}%}\n\n${data.name}企业`
                                    },
                                    padding: [0, -70],
                                    color: '#333',
                                    fontSize: 14,
                                    rich: {
                                        a: {
                                            color: '#5AD6EC',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                        }
                    ]
                    this.drawPie()
                }
            })
        },
        queryData2 (id, param) {
            this.$post('/bas/enterprise/register/findFixUploadCount', {
                [param]: id
            }).then(res => {
                let list = res.data.fixs
                let arr1 = []
                let arr2 = []
                list.forEach((v, i) => {
                    Object.keys(v).forEach(v => {
                        arr1.push(v)
                        arr2.push(list[i][v])
                    })
                })
                this.lineXData = arr1
                this.lineData = arr2
                this.drawLine()
            })
        },
        // 折线图
        drawLine () {
            this.carCharts = echarts.init(document.getElementById('Charts2'))
            var option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { show: false },
                    axisTick: { show: false },
                    data: this.lineXData,
                    name: ''
                },
                yAxis: {
                    type: 'value',
                    axisLine: { show: false },
                    axisTick: { show: false },
                    name: '车次/天'
                },
                series: [
                    {
                        data: this.lineData,
                        type: 'line',
                        symbolSize: 8,
                        symbol: 'circle',
                        color: '#00B7EE',
                        smooth: false,
                        itemStyle: {
                            normal: {
                                label: { show: true },
                                lineStyle: {
                                    color: '#00b7ee'
                                }
                            }
                        }
                    }
                ]
            }
            this.carCharts.setOption(option)
        },
        // 饼图
        drawPie () {
            this.pieCharts = echarts.init(document.getElementById('pieCharts'))
            var option1 = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                color: ['#FFDC70', '#77DDFF', 'yellow', 'blueviolet'],
                legend: {
                    itemWidth: 32,
                    itemHeight: 10,
                    itemGap: 40,
                    orient: 'horizontal',
                    x: 'left',
                    textStyle: {
                        fontSize: 14,
                        color: '#666'
                    },
                    formatter: ' {name}',
                    data: [
                        {
                            name: '未开通',
                            icon: 'rect'
                        },
                        {
                            name: '已开通',
                            icon: 'rect'
                        }
                    ]
                },
                series: [
                    {
                        radius: '55%',
                        center: ['50%', '60%'],
                        name: '备案开通情况',
                        type: 'pie',
                        data: this.pieData
                    }
                ]
            }
            this.pieCharts.setOption(option1)
        },
        getFixCountByVehicle (id, param) {
            var obj = {}
            if (id && param && param !== 'enterpriseRegion') {
                obj[param] = id
            }
            this.$post('/bas/vehicle/fix/findFixCountByVehicle', obj)
                .then(res => {
                    if (isNaN(res - 0)) {
                        this.num1 = 0
                    } else {
                        this.num1 = res
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        getFixCountByEnterprise (id, param) {
            var obj = {}
            if (id && param && param !== 'enterpriseRegion') {
                obj[param] = id
            }
            this.$post('/bas/vehicle/fix/findFixCountByEnterprise', obj)
                .then(res => {
                    if (isNaN(res - 0)) {
                        this.num2 = 0
                    } else {
                        this.num2 = res
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        getUploadData () {
            this.$post('/bas/vehicle/fix/uploadFixDataNumber')
        },
        // 获取访问量
        getVisiterNum () {
            this.$post('/external/getSiteAccessTotalrAndDayTotal').then(res => {
                if (res.status === 200) {
                    if (res.data && res.data.status === 200) {
                        this.visitNum = res.data.data.dayTotal
                        this.visitNum2 = res.data.data.total
                    }
                }
            })
        },
        getNoticeList () {
            this.$post('/sys/notice/notices', {}).then(res => {
                if (res.status === 200) {
                    this.noticeList = res.data.list.slice(0, 4)
                }
            })
        },
        certificateChart () {},
        newChart () {
            this.textList.forEach((t, j) => {
                t.value = (Math.random() * (this.ppList[this.ppIndex].num / 10)).toFixed(0)
            })
            let data = this.textList
            let getArrByKey = (data, k) => {
                let key = k || 'value'
                let res = []
                if (data) {
                    data.forEach(function (t) {
                        res.push(t[key])
                    })
                }
                return res
            }
            let opt = {
                index: 0
            }
            let color = ['#FC619D', '#FF904D', '#48BFE3']
            data = data.sort((a, b) => {
                return b.value - a.value
            })
            console.log(data)
            var series = [
                {
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: data,
                    barWidth: 10,
                    itemStyle: {
                        color: (val) => {
                            if (val.dataIndex < 3 && opt.index === 0) {
                                return color[val.dataIndex]
                            } else {
                                return '#1990FF'
                            }
                        },
                        barBorderRadius: 30
                    }
                }
            ]
            let data2 = []
            let showItemTotal = true
            let legend = {
                show: false
            }
            if (this.radio === 2) {
                data.forEach((d, i) => {
                    d.value = (d.value * (2 / 3)).toFixed(0)
                })
                series[0].itemStyle.color = '#1990ff'
            }
            if (this.radio === 3) {
                data.forEach((d, i) => {
                    d.value = (d.value * (1 / 3)).toFixed(0)
                })
                series[0].itemStyle.color = '#fe8f4d'
            }
            if (/合格证/.test(this.showHeader) && this.radio === 1) {
                data.forEach((d, i) => {
                    d.value = (d.value * (2 / 3)).toFixed(0)
                })
                data2 = JSON.parse(JSON.stringify(data))
                data2.forEach(i => {
                    i.value = (i.value * (1 / 3)).toFixed(0)
                })
                showItemTotal = false
                legend = {
                    right: 10,
                    bottom: 0,
                    itemGap: 16,
                    itemWidth: 18,
                    itemHeight: 10,
                    data: [
                        {
                            name: '已发放'
                        },
                        {
                            name: '已使用'
                        }
                    ],
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12
                    }
                }
                series = [
                    {
                        name: '已发放',
                        type: 'bar',
                        yAxisIndex: 0,
                        data: data,
                        barWidth: 8,
                        barGap: '70%',
                        itemStyle: {
                            color: '#1990ff',
                            barBorderRadius: 30
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle: {
                                    color: '#333',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12
                                }
                            }
                        }
                    },
                    {
                        name: '已使用',
                        type: 'bar',
                        yAxisIndex: 0,
                        data: data2,
                        barWidth: 8,
                        barGap: '70%',
                        itemStyle: {
                            color: '#fe8f4d',
                            barBorderRadius: 30
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle: {
                                    color: '#333',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12
                                }
                            }
                        }
                    }
                ]
            }
            let option = {
                legend,
                grid: {
                    top: '2%',
                    bottom: -15,
                    right: 30,
                    left: -30,
                    containLabel: true
                },
                xAxis: {
                    show: false
                },
                yAxis: [
                    {
                        triggerEvent: true,
                        show: true,
                        inverse: true,
                        data: getArrByKey(data, 'name'),
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            color: '#666',
                            align: 'left',
                            margin: 80,
                            fontSize: 13,
                            formatter: function (value, index) {
                                if (opt.index === 0 && index < 3) {
                                    return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                                } else if (opt.index !== 0 && (index + opt.index) < 9) {
                                    return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                                } else {
                                    return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                                }
                            },
                            rich: {
                                idx0: {
                                    color: '#FB375E',
                                    backgroundColor: '#FFE8EC',
                                    borderRadius: 100,
                                    padding: [5, 8]
                                },
                                idx1: {
                                    color: '#FF9023',
                                    backgroundColor: '#FFEACF',
                                    borderRadius: 100,
                                    padding: [5, 8]
                                },
                                idx2: {
                                    color: '#01B599',
                                    backgroundColor: '#E1F7F3',
                                    borderRadius: 100,
                                    padding: [5, 8]
                                },
                                idx: {
                                    color: '#333',
                                    borderRadius: 100,
                                    padding: [5, 8]
                                },
                                title: {
                                    width: 165
                                }
                            }
                        }
                    },
                    {
                        triggerEvent: true,
                        show: showItemTotal,
                        inverse: true,
                        data: getArrByKey(data, 'name'),
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            color: '#666',
                            align: 'left',
                            margin: 20,
                            fontSize: 13,
                            formatter: function (value, index) {
                                return data[index].value
                            }
                        }
                    }
                ],
                series
            }
            let cccccc = echarts.init(document.getElementById('cccccc'))
            cccccc.setOption(option, true)
            window.onresize = () => {
                cccccc.resize()
            }
        }
    },
    computed: {
        atEndOfList () {
            return this.currentOffset <= (this.paginationFactor * -1) * (this.editableTabs.length - this.windowSize)
        },
        atHeadOfList () {
            return this.currentOffset === 0
        },
        showCardnp () {
            return 2 * (this.paginationFactor - 24) + (this.editableTabs.length - 2) * this.paginationFactor >= this.cardScrollwidth
        }
    },
    created () {
        // let obj = this.getFirstDayOfWeek()
        // this.getTrendAndUploadTop(1, obj.stime, obj.etime)
        // // this.getUploadData()
        // this.getDataNumber()
        // this.getDataWeekRate()
        // this.getDataDayRate()
        // this.getDataAverageValue()
        // this.getVisiterNum()
        // this.getTodayVisitedNum()
        // this.getComplainNum()
        // // this.getComplainMonNum()
        // this.getNoticeList()
        // //  -----------
        // // this.getCount()
        // // this.quertNotice()
        // // this.getFixCountByVehicle()
        // // this.getFixCountByEnterprise()
        // // this.getTrendAndUploadTop(2, '2019-01-01 00:00:00', '2019-12-05 23:59:59')
        // // this.getTrendAndUploadTop(3, '2019-01-01 00:00:00', '2019-4-05 23:59:59')
        // // this.getTrendAndUploadTop(3, '2019-07-01 00:00:00', '2019-07-05 23:59:59')
        // this.$post('bas/city/findRegionByDomainCity', {}).then(res => {
        //     if (res.status === 200) {
        //         localStorage.regionList = JSON.stringify(res.datas)
        //     }
        // })
    },
    mounted () {
        this.newChart()
        echarts.registerMap('szMap', mapJson)
        let mapChart = echarts.init(document.getElementById('mapChart'))
        mapChart.on('click', (e) => {
            this.$router.push(this.ppList[this.ppIndex].url + '?regionName=' + e.name)
            console.log(e)
        })
        let option = {
            visualMap: {
                show: false,
                min: 1,
                max: 40,
                left: '1%',
                bottom: '1%',
                itemWidth: 25,
                itemHeight: 100,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                textStyle: {
                    color: '#fff',
                    fontSize: '20'
                },
                inRange: {
                    color: ['#6BB279', '#368482']
                }
            },
            tooltip: {
                trigger: 'item'
            },

            series: [{
                name: '太原地图',
                type: 'map',
                mapType: 'szMap',
                zoom: 1,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: '13'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: { color: '#fff',
                            fontSize: '16' }
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        // return '<div style="text-align:left;">' + '<p style="font-weight:blod;">' + params.name + '</p>企业备案总数：' + params.value * 8 + '</br>已备案企业数量：' + params.value * 3 + '</br>未备案企业数量：' + params.value * 5 + '</div>'
                        return params.name + '：' + params.value
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(7,157,233,0.4)',
                        borderColor: '#ddd'

                    },
                    emphasis: {
                        areaColor: '#3093d8'
                    }
                },
                data: [
                    {
                        name: '小店区',
                        value: 1218
                    },
                    {
                        name: '迎泽区',
                        value: 11
                    },
                    {
                        name: '杏花岭区',
                        value: 22
                    },
                    {
                        name: '尖草坪区',
                        value: 979
                    },
                    {
                        name: '万柏林区',
                        value: 12
                    },
                    {
                        name: '晋源区',
                        value: 611
                    },
                    {
                        name: '清徐县',
                        value: 312
                    },
                    {
                        name: '阳曲县',
                        value: 523
                    },
                    {
                        name: '娄烦县',
                        value: 31
                    },
                    {
                        name: '古交市',
                        value: 231
                    }
                    // {
                    //     name: '大鹏区',
                    //     value: 52
                    // }
                ]
            }]
        }
        mapChart.setOption(option)
        // this.drawRound()
        // // this.queryData('all', 'enterpriseRegion')
        // // this.queryData2('all', 'enterpriseRegion')
        // let bosechart1 = echarts.init(document.getElementById('bosChart1'))
        // // bosechart1.setOption(this.bosOption1)
        // let bosechart2 = echarts.init(document.getElementById('bosChart2'))
        // // bosechart2.setOption(this.bosOption2)
        // let bosTabChart = echarts.init(document.getElementById('bosTabChart'))
        // // bosTabChart.setOption(this.bosTabOption)
        // if (this.$refs.cardScroll) {
        //     this.cardScrollwidth = this.$refs.cardScroll.offsetWidth
        //     this.windowSize = (this.$refs.cardScroll.offsetWidth - 2 * 194) / this.paginationFactor + 2
        //     window.onresize = () => {
        //         if (this.$refs.cardScroll) {
        //             this.windowSize = (this.$refs.cardScroll.offsetWidth - 2 * 194) / this.paginationFactor + 2
        //         }
        //         bosechart1.resize()
        //         bosechart2.resize()
        //         bosTabChart.resize()
        //     }
        // }
    }
}
</script>
<style lang="less" scoped>
.mapText {
    &:hover {
        color: #1890FF;
    }
    position: absolute;
    color: #ffffff;
    cursor: pointer;
}
.ppbox {
    // margin-bottom: 20px;
    .ppItem {
        padding-right: 20px;
        &:nth-child(6n) {
            padding-right: 0px;
        }
        .ppInner {
            box-sizing: border-box;
            // border-radius: 5px;
            // transition: 0.2s all ease-in;
            position: relative;
            &.active {
                border-bottom: 4px solid #4DCB73;
                // .p1,
                // .p2 {
                //     color: #1890FF;
                // }
            }
            cursor: pointer;
            background: #ffffff;
            text-align: left;
            height: 104px;
            margin-bottom: 20px;
            padding-left: 76px;
            color: #666;
            // padding-top: 30px;
            img {
                width: 48px;
                position: absolute;
                left: 16px;
                top: 28px;
            }
            .p1 {
                font-size: 16px;
                font-weight: 600;
                // color: #999999;
                height: 32px;
                // margin-top: 24px;
                padding-top: 24px;
            }
            .p2 {
                font-size: 14px;
                // color: #999999;
                // margin-top: 20px;
            }
            .p3 {
                margin-top: 10px;
                color: #999999;
            }
        }
    }
}
.bbox {
    background: #ffffff;
    height: 500px;
}
.bbox1 {
    border-right: 1px solid #dddddd;
}
.home {
    height: 100%;
    background: #EDF0F5;
    .content {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        top: 0;
        .bos-row {
            position: relative;
            margin-right: 0;
            height: auto;
            zoom: 1;
            display: block;
            box-sizing: border-box;
            .bos-col-sm {
                padding: 12px 12px 24px;
            }
        }
    }
}
.bos-card {
    font-family:'微软雅黑', 'Microsoft Yahei', sans-serif;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    // background: #fff;
    border-radius: 2px;
    position: relative;
    transition: all .3s;
    text-align: left;
    .card-body {
        padding: 20px 24px 8px;
        .chart-card-header {
            position: relative;
            overflow: hidden;
            width: 100%;
            .meta {
                color: rgba(0,0,0,.45);
                font-size: 14px;
                line-height: 22px;
            }
            .total {
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                white-space: nowrap;
                color: #000;
                margin-top: 4px;
                margin-bottom: 0;
                font-size: 30px;
                line-height: 38px;
                height: 38px;
            }
        }
        .chart-card-content {
            margin-bottom: 12px;
            position: relative;
            height: 46px;
            width: 100%;
            .content-fix {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                .chart-trend {
                    margin-right: 16px;
                    display: inline-block;
                    font-size: 14px;
                    line-height: 22px;
                    .chart-trend-icon {
                        font-size: 12px;
                    }
                    .up {
                        color: #f5222d;
                    }
                    .down {
                        color: #52c41a;
                    }
                }
            }
            .icon-prompt-s {
                width: 10px;
                height: 10px;
                margin: 0 5px;
            }
        }
        .chart-card-footer{
            border-top: 1px solid #e8e8e8;
            padding-top: 9px;
            margin-top: 8px;
        }
    }
    .card-body-top {
        line-height: 33px;
        padding: 0 10px;
        border-bottom: 1px solid #E8E8E8;
        .chart-card-title {
            font-size: 14px;
            color: #000;
        }
        .chart-card-action {
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 10px;
        }
    }
    .card-body-con {
        height: 147px;
        padding: 0 10px;
        .noto-li {
            height: 36px;
            line-height: 36px;
            position: relative;
            cursor: pointer;
            .noto-text {
                width: 100%;
                display: inline-block;
                color: #323B4E;
                padding-right: 64px;
                box-sizing: border-box;
                word-break:keep-all;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .noto-time {
                position: absolute;
                right: 0;
                top: 0;
                font-size: 12px;
                color: #8A9CC2;
            }
        }
        .no-notice {
            text-align: center;
            padding-top: 50px;
        }
    }
}
.bos-card {
    .tabs-bar {
        padding: 0 20px;
        border-bottom: 1px solid #E8E8E8;
        // margin-bottom: 24px;
        background: #ffffff;
        .tabs-tit {
            font-weight: 600;
            line-height: 1;
            font-size: 16px;
            color: rgba(0,0,0,0.65);
            padding: 11px 0;
            .tabs-tit-text {
                cursor: pointer;
                margin-right: 40px;
                line-height: 30px;
            }
            .label {
                font-weight: normal;
                font-size: 14px;
                margin-left: 24px;
            }
        }
        .extra-wrap {
            line-height: 50px;
            display: inline-block;
            margin-right: 24px;
            span {
                margin-left: 24px;
                color: rgba(0,0,0,0.65);
                background-color: transparent;
                text-decoration: none;
                outline: none;
                cursor: pointer;
                transition: color .3s;
                &.active {
                    color: #1890FF;
                }
            }
        }
        .extra-time {
            width: 280px;
            display: inline-block;
        }
    }
    .tabs-content {
        padding: 0 10px;
        .bos-col-m {
            float: left;
            box-sizing: border-box;
            .title {
                position: relative;
                margin-bottom: 10px;
                h4 {
                    display: inline-block;
                    color: #000000;
                    font-size: 14px;
                }
                span {
                    position: absolute;
                    right: 0;
                    color: #8C8C8C;
                    font-size: 12px;
                }
            }
            .pd30 {
                padding-left: 30px;
            }
            .rank {
                padding: 0 32px 32px 72px;
                .list {
                    margin: 25px 0 0;
                    overflow: hidden;
                    padding: 0;
                    list-style: none;
                    li {
                        box-sizing: border-box;
                        margin-top: 16px;
                        span:first-child{
                            background-color: #F0F2F5;
                            color: rgba(0,0,0,0.65);
                            border-radius: 20px;
                            display: inline-block;
                            font-size: 12px;
                            font-weight: 600;
                            margin-right: 24px;
                            height: 20px;
                            line-height: 20px;
                            width: 20px;
                            text-align: center;
                        }
                        span:last-child{
                            float: right;
                        }
                        span {
                            &.active {
                                background-color: #1890FF;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
    .tabs-footer {
        padding: 20px;
        box-sizing: border-box;
    }
}

.card-box-wrap {
    box-sizing: border-box;
    position: relative;
    padding: 0 20px;
    .card-box-prev, .card-box-next {
        position: absolute;
        cursor: pointer;
        line-height: 120px;
        font-size: 16px;
        color: #909399;
        border-radius: 4px;
        &:hover {
            background: #d3d3d3;
        }
    }
    .card-box-prev {
        left: 0;
    }
    .card-box-next {
        right: 0;
    }
    .card-box-scroll {
        overflow: hidden;
        .card-box-lis {
            position: relative;
            transition: transform .3s;
            float: left;
            z-index: 2;
            white-space: nowrap;
            .card-box-li {
                display: inline-block;
                background:#fff;
                width: 170px;
                margin: 0 24px;
                &.active {
                    border-top: 2px solid #1890FF;
                    .tit {
                        color:#1890FF;
                    }
                    .cons {
                        p:last-child {
                            color: #000000;
                        }
                    }
                }
                .tit {
                    line-height: 40px;
                    padding-left: 16px;
                    font-size: 16px;
                    color:rgba(0,0,0,0.65);
                }
                .cons {
                    .li-left {
                        width: 50%;
                        padding: 10px 0 15px 16px;
                        box-sizing: border-box;
                        color:rgba(0,0,0,0.45);
                        p:first-child {
                            font-size: 14px;
                        }
                        p:last-child {
                            font-size: 24px;
                        }
                    }
                    .li-right {
                        width: 80px;
                        height: 80px;
                    }
                }
                &:first-child {
                    margin-left: 0;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
@media (min-width: 1200px) {
    .bos-col-sm {
        display: block;
        box-sizing: border-box;
        width: 25%;
        float: left;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }
    .col-fl {
        display: block;
        width: 66%;
    }
    .col-fr {
        display: block;
        width: 33%;
    }
}
@media (min-width: 768px) and (max-width: 1200px) {
    .bos-col-sm {
        display: block;
        box-sizing: border-box;
        width: 50%;
        float: left;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }
    .col-fl {
        display: block;
        width: 50%;
    }
    .col-fr {
        display: block;
        width: 50%;
    }
}
</style>
<style lang="less">
.home {
    .el-scrollbar__wrap {
        height: 264px;
    }
    .el-date-editor .el-range__close-icon {
        position: absolute;
    }
    .el-select {
        width: 160px;
    }
    .el-range-editor.el-input__inner {
        line-height: 1;
    }
    .el-range-editor--small .el-range-separator {
        font-weight: normal;
    }
}
</style>
