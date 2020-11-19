<!-- 档案详情 -->
<template>
    <div class="synthesizeWorkDetail">
        <div class="content">
            <el-tabs type="card" v-model="tabIndex" @tab-click="changeTabs">
                <el-tab-pane label="检查报告详情" name="tab1" class="basic-info clearfix">
                    <div class="table_box">
                        <h3>车辆信息</h3>
                        <table class="table" width="100%">
                            <tr>
                                <td width="150">车牌号码：</td>
                                <td width="350">{{infoObj.vehicleNo}}</td>
                                <td width="150">车牌颜色：</td>
                                <td width="350">{{infoObj.plateColor|filterCommon(plateColor)}}</td>
                            </tr>
                            <tr>
                                <td>车辆类别：</td>
                                <td>{{vehicleTypeName}}</td>
                                <td>车主单位：</td>
                                <td>{{infoObj.client}}</td>
                            </tr>
                            <tr>
                                <td>车架号：</td>
                                <td>{{infoObj.vinNo}}</td>
                                <td>检测单位：</td>
                                <td>{{infoObj.dsName}}</td>
                            </tr>
                        </table>
                        <h3>检测作业信息</h3>
                        <table class="table" width="100%">
                            <tr>
                                <td width="150">检测类别：</td>
                                <td width="350">{{infoObj.detectType | detecttypeFilter}}</td>
                                <td width="150">检测编号：</td>
                                <td width="350">{{infoObj.detectSn}}</td>
                            </tr>
                            <tr>
                                <td>检测结果：</td>
                                <td>{{detectResult}}</td>
                                <td>工位：</td>
                                <td>{{infoObj.stationNo}}</td>
                            </tr>
                            <tr>
                                <td>检测日期：</td>
                                <td>{{infoObj.detectDate|formatTimeS}}</td>
                            </tr>
                        </table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="人工检测记录单" name="tab2" class="basic-info clearfix">
                    <div class="pdf_box">
                        <img :src="pdfUrl1" style="width:1100px" />
                        <!-- <embed :src="pdfUrl1" type="application/pdf" width="100%" height="720"/> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane label="性能检测记录单" name="tab3" class="basic-info clearfix">
                    <div class="pdf_box">
                        <img :src="pdfUrl2" style="width:1400px" />
                        <!-- <embed :src="pdfUrl2" type="application/pdf" width="100%" height="720"/> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane label="综合性能检测报告单" name="tab5" class="basic-info clearfix">
                    <div class="pdf_box">
                        <img :src="pdfUrl2" style="width:1400px" />
                        <!-- <embed :src="pdfUrl3" type="application/pdf" width="100%" height="720"/> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane label="检测记录照片" name="tab6" class="basic-info clearfix">
                    <div class="table_box_phone">
                        <div class="phone_box">
                            <h3>检测记录照片</h3>
                            <div class="img_box clearfix">
                                <div class="item">
                                    <p>环保检验记录单（1）</p>
                                    <img v-if="inspectPicEnvironmentalInspectUrl" :src="inspectPicEnvironmentalInspectUrl" alt="" @click="$zoomImg(inspectPicEnvironmentalInspectUrl)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>环保检验记录单（2）</p>
                                    <img v-if="inspectPicEnvironmentalInspect2Url" :src="inspectPicEnvironmentalInspect2Url" alt="" @click="$zoomImg(inspectPicEnvironmentalInspect2Url)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>安检合格标识</p>
                                    <img v-if="securityAuditMark" :src="securityAuditMark" alt="" @click="$zoomImg(securityAuditMark)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>安检报告单</p>
                                    <img v-if="securityReportForm" :src="securityReportForm" alt="" @click="$zoomImg(securityReportForm)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>行驶证</p>
                                    <img v-if="drivingCertificate" :src="drivingCertificate" alt="" @click="$zoomImg(drivingCertificate)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>送检人身份证</p>
                                    <img v-if="inspectPicIdcardUrl" :src="inspectPicIdcardUrl" alt="" @click="$zoomImg(inspectPicIdcardUrl)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>道路运输达标车辆核查记录表</p>
                                    <img v-if="inspectPicRoadTransportCertStandardUrl" :src="inspectPicRoadTransportCertStandardUrl" alt="" @click="$zoomImg(inspectPicRoadTransportCertStandardUrl)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="lines"></div>
                        <div class="phone_box">
                            <h3>企业工位照片</h3>
                            <div class="img_box clearfix">
                                <div class="item">
                                    <p>检测开始作业</p>
                                    <img v-if="inspectPicStationUrl" :src="inspectPicStationUrl" alt="" @click="$zoomImg(inspectPicStationUrl)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>动力图片</p>
                                    <img v-if="powerPicture" :src="powerPicture" alt="" @click="$zoomImg(powerPicture)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                 <div class="item">
                                    <p>灯光图片</p>
                                    <img v-if="lightPicture" :src="lightPicture" alt="" @click="$zoomImg(lightPicture)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>制动图片（1）</p>
                                    <img v-if="breakingPicture" :src="breakingPicture" alt="" @click="$zoomImg(breakingPicture)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                                <div class="item">
                                    <p>制动图片（2）</p>
                                    <img v-if="breakingPicture2" :src="breakingPicture2" alt="" @click="$zoomImg(breakingPicture2)">
                                    <img v-else src="../../assets/images/img_photo.png" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <h3>安检记录照片</h3>
                        <div class="img_box">
                            <div class="item">
                                <p>安检合格标识</p>
                                <img v-if="securityAuditMark" :src="securityAuditMark" alt="" @click="$zoomImg(securityAuditMark)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                            <div class="item">
                                <p>安检报告单</p>
                                <img v-if="securityReportForm" :src="securityReportForm" alt="" @click="$zoomImg(securityReportForm)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                            <div class="item">
                                <p>行驶证</p>
                                <img v-if="drivingCertificate" :src="drivingCertificate" alt="" @click="$zoomImg(drivingCertificate)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                        </div>
                        <h3>检测记录照片</h3>
                        <div class="img_box">
                            <div class="item">
                                <p>环检检验记录单</p>
                                <img v-if="environmentRecordPic" :src="environmentRecordPic" alt="" @click="$zoomImg(environmentRecordPic)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                        </div>
                        <h3>企业工位照片</h3>
                        <div class="img_box">
                            <div class="item">
                                <p>动力图片</p>
                                <img v-if="powerPicture" :src="powerPicture" alt="" @click="$zoomImg(powerPicture)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                            <div class="item">
                                <p>灯光图片</p>
                                <img v-if="lightPicture" :src="lightPicture" alt="" @click="$zoomImg(lightPicture)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                            <div class="item">
                                <p>制动图片</p>
                                <img v-if="breakingPicture" :src="breakingPicture" alt="" @click="$zoomImg(breakingPicture)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                        </div>
                        <h3>道路运输经营许可证</h3>
                        <div class="img_box">
                            <div class="item">
                                <p>道路运输经营许可证</p>
                                <img v-if="carriageCard" :src="carriageCard" alt="" @click="$zoomImg(carriageCard)">
                                <img v-else src="../../assets/images/img_photo.png" alt="">
                            </div>
                        </div> -->
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-analy-normal">
            <!-- <el-button type="primary" @click="addRecord" :disabled="!$checkAuth('manage:enterprise:addentrecord')">保存</el-button> -->
            <el-button class="react_btn" @click="goBack">返回</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import { filterTime } from '@/utils/filterTime.js'
import { plateColor } from '@/utils/type.js'
import Modal from '../../components/Modal'
import ToolBar from '@/components/ToolBar.vue'
export default {
    name: 'synthesizeWorkDetail',
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '检测记录查询', path: '' }, { title: '检测记录详情', path: '' }
            ],
            detectResult: '二级', // 检查结果
            breakingPicture: '',
            drivingCertificate: '',
            environmentRecordPic: '',
            inspectPicEnvironmentalInspectUrl: '',
            inspectPicEnvironmentalInspect2Url: '',
            inspectPicIdcardUrl: '',
            inspectPicRoadTransportCertStandardUrl: '',
            inspectPicStationUrl: '',
            breakingPicture2: '',
            lightPicture: '',
            carriageCard: '',
            powerPicture: '',
            securityAuditMark: '',
            securityReportForm: '',
            plateColor,
            infoObj: {
                vehicleNo: '晋AS78D1',
                plateColor: '1',
                client: '太原市万通科技有限公司',
                vinNo: 'LUAU2AUB3GE383467',
                dsName: '太原市豪发汽车检测有限公司',
                detectType: 1,
                detectSn: '565210000157841',
                stationNo: '工位1',
                detectDate: 1588661248802
            },
            imgList: {},
            tabIndex: 'tab1',
            carTypeList: [],
            vehicleTypeName: '小型车',
            pdfUrl1: require('@/assets/images/rengongjianyanjilu.jpg'), // pdf预览地址
            pdfUrl2: require('@/assets/images/xingnengjianyanjilu.jpg'), // pdf预览地址
            pdfUrl3: require('@/assets/images/zonghexingnengjianyan.jpg') // pdf预览地址
        }
    },
    components: {
        BreadFoot,
        ToolBar,
        Modal
    },
    computed: {
    },
    filters: {
        formatTimeS (val) {
            let str = new Date(val) - 0
            return filterTime('yyyy-mm-dd', str - 0)
        },
        detecttypeFilter (val) {
            if (val === 1) {
                return '技术等级评定'
            } else if (val === 4) {
                return '二级维护竣工质量检验'
            } else if (val === 5) {
                return '汽车大修竣工质量检验'
            } else {
                return '其他检测'
            }
        }
    },
    created () {
        // this.$post('jc/detect/viewPerformanceDetectRecord', {
        //     jcPerformanceDetectRecord: {
        //         jcDetectrecord: {
        //             detectSn: this.$route.query.id
        //         }
        //     }
        // }).then(res => {
        //     if (res.status === 200) {
        //         this.detectResult = res.data.detectResult
        //         this.infoObj = res.data.jcPerformanceDetectRecord
        //         this.imgList = res.data.securityDetectImgList
        //         this.breakingPicture = res.data.breakingPicture
        //         this.drivingCertificate = res.data.drivingCertificate
        //         this.environmentRecordPic = res.data.environmentRecordPic
        //         this.lightPicture = res.data.lightPicture
        //         this.powerPicture = res.data.powerPicture
        //         this.inspectPicEnvironmentalInspectUrl = res.data.inspectPicEnvironmentalInspectUrl
        //         this.inspectPicEnvironmentalInspect2Url = res.data.inspectPicEnvironmentalInspect2Url
        //         this.inspectPicIdcardUrl = res.data.inspectPicIdcardUrl
        //         this.inspectPicRoadTransportCertStandardUrl = res.data.inspectPicRoadTransportCertStandardUrl
        //         this.inspectPicStationUrl = res.data.inspectPicStationUrl
        //         this.breakingPicture2 = res.data.breakingPicture2
        //         this.securityAuditMark = res.data.securityAuditMark
        //         this.securityReportForm = res.data.securityReportForm
        //         this.carriageCard = res.data.carriageCard
        //         if (this.infoObj.vehicleType) {
        //             this.getVehicleType(this.infoObj.vehicleType)
        //         }
        //     } else {
        //         console.log(res.message)
        //     }
        // })
    },
    watch: {
    },
    methods: {
        // 获取车辆类型
        getVehicleType (val) {
            this.$post('bas/vehicle/type/list', {})
                .then(res => {
                    if (res.status === 200) {
                        this.carTypeList = res.data
                        this.carTypeList.map(item => {
                            if (item.vehicleTypeId === val) {
                                this.vehicleTypeName = item.vehicleTypeName
                            }
                        })
                    }
                })
        },
        goBack () {
            this.$router.push('/synthesizeWork')
        },
        changeTabs () {
            if (this.tabIndex === 'tab2') {
                this.pdfUrl = window.uploadURL + 'report/inspect/findInspect1' + '?detectSn=' + this.$route.query.id
            }
        }
    }
}
</script>

<style lang='less' scoped>
.synthesizeWorkDetail{
    .content {
        padding-bottom: 80px;
    }
    .table_box {
        min-height: 700px;
        padding: 30px;
        .img_box {
            text-align: left;
            margin-bottom: 30px;
            .item {
                display: inline-block;
                margin-left: 80px;
                p {
                    text-align: center;
                    font-size: 14px;
                    color: #666666;
                    line-height: 30px;
                }
                img {
                    box-sizing: border-box;
                    width: 210px;
                    height: 210px;
                    padding: 8px;
                    border: 1px solid #DDDDDD;
                }
            }
        }
        h3 {
            color: #666666;
            font-size: 14px;
            text-align: left;
            line-height: 40px;
        }
        .table {
            border-collapse:collapse;
            table-layout: fixed;
            word-wrap: break-word;
            text-align: center;
            tr {
                td {
                    border: 1px solid #ddd;
                    font-size: 14px;
                    font-weight: normal;
                    height: 40px;
                }
                .title {
                    color: #666;
                    text-align: right;
                    width: 126px;
                }
                .msg {
                    color: #333;
                    text-align: left;
                    width: 376px;
                    padding-left: 10px;
                }
            }
            .info {
                .title {
                    width: 190px;
                }
                .msg {
                    width: 298px;
                }
            }
        }
    }
    .pdf_box {
        padding: 30px;
        overflow: auto;
    }
    .table_box_phone {
        text-align: left;
        .lines {
            background: #EFF2F5;
            height: 30px;
        }
        .phone_box {
            h3 {
                padding: 0 30px;
                line-height: 50px;
                font-size: 16px;
                color: #000000;
            }
            .img_box {
                padding: 20px 0 0 30px;
                border-top: 1px solid #E9E9E9;
                .item {
                    float: left;
                    margin-right: 25px;
                    margin-bottom: 20px;
                    p {
                        margin: 6px 0;
                        font-size: 14px;
                        color: #293140;
                    }
                    img {
                        box-sizing: border-box;
                        width: 200px;
                        height: 200px;
                        padding: 8px;
                        border: 1px solid #DDDDDD;
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.synthesizeWorkDetail {
    // background: #FFF;
    .el-tabs__header {
        margin: 0;
    }
    .el-tabs__content {
        background: #FFF;
    }
    .el-tabs--card>.el-tabs__header {
        background: #EDF0F5;
        border: none;
        .el-tabs__nav {
            border: none;
        }
        .el-tabs__item {
            box-sizing: border-box;
            border: none;
            border-radius:3px 3px 0px 0px;
            background: #FFF;
            margin-right: 10px;
            border-top: 3px solid #FFF;
            &.is-active {
                color: #1890FF;
                border-top: 3px solid #3E94FE;
            }
        }
    }
}
</style>
