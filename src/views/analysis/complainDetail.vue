<template>
    <div class="complainDetail">
        <div class="content">
            <div class='wrap'>
                <div class="inner">
                    <h3 class="h3">基本信息</h3>
                    <div class="table">
                        <table class="table-inner tableBorder" width="100%">
                            <tr>
                                <td width="120">车主姓名：</td>
                                <td width="380">{{allData.ownerUserNickname||allData.ownerNickName}}</td>
                                <td width="120">手机号码：</td>
                                <td width="380">{{allData.ownerUserMobile}}</td>
                            </tr>
                            <tr>
                                <td>车牌号码：</td>
                                <td>{{allData.vehicleLicensePlate}}</td>
                                <td>VIN码：</td>
                                <td>{{allData.vehicleVin}}</td>
                            </tr>
                            <tr>
                                <td>评价星级：</td>
                                <td>{{allData.vehicleFixCommentGrade}}星</td>
                                <td>评价等级：</td>
                                <td>{{allData.vehicleFixCommentGrade | filterCommon(evaluateLevel)}}</td>
                            </tr>
                            <tr>
                                <td>评价日期：</td>
                                <td>{{allData.createTime | momentTime}}</td>
                                <td>企业名称：</td>
                                <td>{{allData.enterpriseName}}</td>
                            </tr>
                            <tr>
                                <td>结算清单编号：</td>
                                <td colspan="3">{{allData.vehicleFixBalanceNumber}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <ul>
                                        <li>维修质量：</li>
                                        <li>维修效率：</li>
                                        <li>价格透明度：</li>
                                        <li>店面环境：</li>
                                        <li>综合评分：</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <el-rate
                                                class="rate"
                                                style="display:inline-block;"
                                                v-model="allData.vehicleFixCommentQuality"
                                                disabled
                                                :disabled-void-color="'#cccccc'"
                                                :colors="['#E83648', '#E83648', '#E83648']">
                                            </el-rate>
                                        </li>
                                        <li>
                                            <el-rate
                                                class="rate"
                                                style="display:inline-block;"
                                                v-model="allData.vehicleFixCommentEfficiency"
                                                disabled
                                                :disabled-void-color="'#cccccc'"
                                                :colors="['#E83648', '#E83648', '#E83648']">
                                            </el-rate>
                                        </li>
                                        <li>
                                            <el-rate
                                                class="rate"
                                                style="display:inline-block;"
                                                v-model="allData.vehicleFixCommentPrice"
                                                disabled
                                                :disabled-void-color="'#cccccc'"
                                                :colors="['#E83648', '#E83648', '#E83648']">
                                            </el-rate>
                                        </li>
                                        <li>
                                            <el-rate
                                                class="rate"
                                                style="display:inline-block;"
                                                v-model="allData.vehicleFixCommentEnvironment"
                                                disabled
                                                :disabled-void-color="'#cccccc'"
                                                :colors="['#E83648', '#E83648', '#E83648']">
                                            </el-rate>
                                        </li>
                                        <li>
                                            <el-rate
                                                class="rate"
                                                style="display:inline-block;"
                                                v-model="allData.vehicleFixCommentGrade"
                                                disabled
                                                :disabled-void-color="'#cccccc'"
                                                :colors="['#E83648', '#E83648', '#E83648']">
                                            </el-rate>
                                        </li>
                                    </ul>
                                </td>
                                <td>上传图片：</td>
                                <td id="Box">
                                    <div class="img-wrap" v-if="allData.img1" @click="$zoomImg(allData.vehicleFixImg1)">
                                        <img :src="allData.img1">
                                    </div>
                                    <div class="img-wrap" v-if="allData.img2" @click="$zoomImg(allData.vehicleFixImg2)">
                                        <img :src="allData.img2">
                                    </div>
                                    <div class="img-wrap" v-if="allData.img3" @click="$zoomImg(allData.vehicleFixImg3)">
                                        <img :src="allData.img3">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>车主评价内容：</td>
                                <td colspan="3" class="td-text">{{allData.vehicleFixCommentContent}}</td>
                            </tr>
                            <tr>
                                <td>企业回复内容：</td>
                                <td colspan="3"  class="td-text">{{allData.enterpriseCommen}}</td>
                            </tr>
                        </table>
                    </div>
                    <h3 class="h3">车辆维修记录</h3>
                    <el-table
                        :data="tab1"
                        style="width: 100%"
                        :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                        :cell-style="{'text-align':'center'}">
                        <el-table-column
                            prop="vehicleFixBalanceDate"
                            label="送修日期"
                            width="120">
                            <template slot-scope="scope">
                                {{scope.row.vehicleFixBalanceDate | momentTime}}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixCategory"
                            label="维修类别"
                            width="100">
                            <template slot-scope="scope">
                                {{scope.row.vehicleFixCategory | filterCommon(repairType)}}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixMileage"
                            label="送修里程(公里)">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixDescription"
                            label="故障描述"
                            width="300">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixUnit"
                            label="维修单位"
                            width="250">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixCertificateNumber"
                            label="竣工合格证编号">
                        </el-table-column>
                    </el-table>
                    <h3 class="h3">部件更换记录</h3>
                    <el-table
                        :data="tab2"
                        style="width: 100%;margin-bottom:30px;"
                        :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                        :cell-style="{'text-align':'center'}">
                        <el-table-column
                            prop="num"
                            label="序号"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixPartsDate"
                            label="更换日期"
                            width="120">
                                <template slot-scope="scope">
                                    {{scope.row.vehicleFixPartsDate | momentTime}}
                                </template>
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixPartsName"
                            label="部件名称">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixPartsModel"
                            label="型号规格"
                            width="120">
                            <template slot-scope="scope">
                                {{scope.row.vehicleFixPartsModel}}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixPartsNum"
                            label="配件数量"
                            width="200">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixPartsNumber"
                            label="配件编号"
                            width="200">
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFixUnit"
                            label="承修单位">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-analy-normal">
            <el-button class="react_btn" @click="goBack">返回</el-button>
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
import Sidebar from '@/components/Sidebar.vue'
import Viewer from 'viewerjs'
import ToolBar from '@/components/ToolBar.vue'
import Modal from '@/components/Modal.vue'
import { evaluateLevel, repairType } from '@/utils/type.js'
import { setNum } from '@/utils/tools.js'
import moment from 'moment'
export default {
    name: 'complainDetail',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '服务评价查询', path: '' }, { title: '服务评价详情', path: '' }
            ],
            tab1: [
                {
                    vehicleFixBalanceDate: 1588659205168,
                    vehicleFixCategory: '1',
                    vehicleFixMileage: '32563',
                    vehicleFixDescription: '轮胎异响',
                    vehicleFixUnit: '太原市万顺汽车维修有限公司',
                    vehicleFixCertificateNumber: '20200423115784115'
                }
            ],
            tab2: [
                {
                    num: 1,
                    vehicleFixPartsDate: 1588659205168,
                    vehicleFixPartsName: '米其林轮胎',
                    vehicleFixPartsModel: '255/70 R17',
                    vehicleFixPartsNum: 2,
                    vehicleFixPartsNumber: 'MQL42125425517',
                    vehicleFixUnit: '太原市万顺汽车维修有限公司'
                }
            ],
            viewer: '',
            allData: {
                ownerUserNickname: '李强',
                ownerUserMobile: '13656223414',
                vehicleLicensePlate: '晋ASD521',
                vehicleVin: 'LUAU2AUB3GE383467',
                vehicleFixCommentGrade: 5,
                vehicleFixCommentQuality: 5,
                vehicleFixCommentEfficiency: 5,
                vehicleFixCommentPrice: 5,
                vehicleFixCommentEnvironment: 5,
                createTime: 1588659205168,
                enterpriseName: '太原市万顺汽车维修有限公司',
                vehicleFixBalanceNumber: '20200423115784115',
                vehicleFixCommentContent: '服务态度很好，速度也很快，非常满意',
                enterpriseCommen: '非常感谢您的支持！'
            },
            evaluateLevel,
            repairType
        }
    },
    created () {
        this.getCommentDetail(this.$route.query.id)
        // this.queryData()
    },
    computed: {},
    // 使用其它组件
    components: {
        BreadFoot,
        ToolBar,
        Sidebar,
        Modal,
        moment
    },
    // 方法
    watch: {},
    filters: {
        momentTime: function (val) {
            return moment(val).format('YYYY-MM-DD')
        }
    },
    methods: {
        handlePartSizeChange () {

        },
        handlePartSizeChange2 () {

        },
        handlePartCurrentChange2 () {

        },
        handlePartCurrentChange () {

        },
        // 创建照片查看器
        setViewer (index) {
            if (this.viewer) this.viewer.destroy()
            this.viewer = new Viewer(document.querySelector('#Box'))
            this.viewer.view(index)
        },
        queryData () {
            this.$post('fix/comment/findFixRecordByFixId', {
                'data': {
                    'vehicleFixId': this.$route.query.fixId
                }
            }).then(res => {
                if (res.status === 200) {
                    this.tab1.push(res.baseVehicleFix)
                    setNum(res.baseVehicleChangeParts, 1, 50)
                    this.tab2 = res.baseVehicleChangeParts
                }
            })
        },
        // 我的车辆档案
        getCommentDetail (id) {
            // this.$post('fix/comment/detail', {
            //     vehicleFixCommentId: id
            // })
            //     .then(res => {
            //         if (res.code === 200) {
            //             if (res.data) {
            //                 this.allData = res.data
            //             }
            //             if (res.fix) {
            //                 this.tab1.push(res.fix)
            //             }
            //             if (res.c) {
            //                 this.tab2 = res.baseVehicleChangeParts
            //             }
            //         } else {
            //             console.log(res.message)
            //         }
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
        },
        goBack () {
            // this.$router.go(-1)
            this.$router.push('/complainManage')
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.complainDetail {
    .h3 {
        font-size: 14px;
        text-align: left;
        color: #000000;
        padding: 30px 10px 20px 10px;
    }
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        background: #FFF;
        top: 0;
        .wrap {
            padding-bottom: 80px;
            .inner {
                padding: 0 30px;
            }
        }
    }
    .table {
        td {
            line-height: 40px;
            font-size: 14px;
            color: #333;
            &:nth-child(2n-1) {
                text-align: right;
                color: #000000;
                font-size: 14px;
            }
            &:nth-child(2n) {
                text-align: left;
                padding-left: 10px;
                padding-right: 10px;
                color: #333333;
            }
            .img-wrap {
                display: inline-block;
                width: 92px;
                height: 72px;
                padding: 4px;
                border: 1px solid #ddd;
                margin-right: 20px;
                text-align: center;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            li {
                line-height: 30px;
            }
        }
        .td-text {
            line-height: 30px;
        }
        .evaluate {
            padding: 12px;
            line-height: 24px;
        }
    }
}
</style>
