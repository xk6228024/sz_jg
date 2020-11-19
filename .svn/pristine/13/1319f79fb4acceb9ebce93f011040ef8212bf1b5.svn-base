<!-- 检测企业档案详情 -->
<template>
    <div class="testingArchDetail">
        <div class="content">
            <el-form ref="form" :model="form" label-position="top">
                <el-tabs type="card" v-model="tabIndex" @tab-click="changeTabs">
                    <el-tab-pane label="基本信息" name="basicInfo" class="basic-info clearfix">
                        <info-item title="账号信息">
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="管理员账号" prop="username" :rules="[ { required: true, message: '请输入管理员账号', trigger: ['change'] } ]">
                                        <el-input v-model="form.username" placeholder="请输入" maxlength="20"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="管理员密码" prop="password" :rules="[ { required: true, message: '请输入管理员密码', trigger: ['change'] } ]">
                                        <el-input v-model="form.password" disabled type="password" placeholder="请输入" maxlength="20"></el-input>
                                        <div class="tips">默认密码：Ycxc2020，初次登录自行修改</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </info-item>
                        <info-item title="基础信息" :border="false">
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="企业名称" prop="enterpriseName" :rules="[ { required: true, message: '请输入企业名称', trigger: ['change'] } ]">
                                        <el-input v-model="form.enterpriseName" maxlength="30" type="text" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="企业简称" prop="enterpriseJcShortName" :rules="[ { required: true, message: '请输入企业简称', trigger: ['change'] } ]">
                                        <el-input v-model.trim="form.enterpriseJcShortName" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="作业范围" prop="enterpriseJcScope" :rules="[ { required: true, message: '请选择作业范围', trigger: ['change'] } ]">
                                        <el-checkbox-group v-model="form.enterpriseJcScope">
                                            <el-checkbox label="1">综合性能检验</el-checkbox>
                                            <el-checkbox label="2">二级维护竣工检验</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                </el-col>
                                <!-- <el-col :span="8">
                                    <el-form-item label="企业备案号" prop="recordNumber">
                                        <div class="msg">
                                            <el-input :style="{ width: !$route.query.id || ($route.query.id && /^Q/i.test(form.recordNumber)) || ($route.query.id && !form.recordNumber) ? 'calc(100% - 90px)' : '100%', marginRight: '20px' }" v-model="form.recordNumber" disabled clearable placeholder="请输入"></el-input>
                                            <el-button type="primary" v-if="!$route.query.id || ($route.query.id && /^Q/i.test(form.recordNumber)) || ($route.query.id && !form.recordNumber)" @click="getRecordNumber">生成</el-button>
                                        </div>
                                    </el-form-item>
                                </el-col> -->
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="经济性质" prop="enterpriseEconomicCategory" :rules="[ { required: true, message: '请选择经济性质', trigger: ['change'] } ]">
                                        <el-select v-model="form.enterpriseEconomicCategory" @change="resetRecordNum" filterable clearable placeholder="请选择">
                                            <el-option
                                                v-for="item in economicsList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="所在区域" prop="enterpriseRegion" :rules="[ { required: true, message: '请选择所在区域', trigger: ['change'] } ]">
                                        <el-select v-model="form.enterpriseRegion" @change="resetRecordNum" clearable placeholder="请选择" >
                                            <el-option
                                                v-for="item in regionList"
                                                :key="item.regionId"
                                                :label="item.regionName"
                                                :value="item.regionId">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="企业邮政编码" prop="enterprisePostalcode" :rules="[ { required: true, message: '请输入企业邮政编码', trigger: ['change'] }, { min: 6, max: 6, message: '请输入正确的邮政编码', trigger: ['change'] } ]">
                                        <el-input v-model.trim="form.enterprisePostalcode" maxlength="6" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="企业等级" prop="enterpriseJcGrade" :rules="[ { required: true, message: '请选择企业等级', trigger: ['change'] } ]">
                                        <el-select v-model="form.enterpriseJcGrade" clearable placeholder="请选择">
                                            <el-option
                                                v-for="item in jcGradeList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="经营许可证号" prop="enterpriseBusinessCertificate" :rules="[ { required: true, message: '请输入经营许可证号', trigger: ['change'] }, { pattern: /^[\da-zA-Z]{12}$/, message: '经营许可证号应为12位的数字和字母组合', trigger: ['change'] } ]">
                                        <el-input v-model="form.enterpriseBusinessCertificate" maxlength="12" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="许可证有效期" prop="validityTime" :rules="[ { required: true, message: '请选择许可证有效期', trigger: ['change'] } ]">
                                        <el-date-picker
                                        v-model="form.validityTime"
                                        type="daterange"
                                        unlink-panels
                                        value-format="yyyy-MM-dd"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="社会信用代码" prop="enterpriseCreditIdentifier" :rules="$validate({required:true, repeatLength:18, type:'enterpriseCreditIdentifier'})">
                                        <el-input v-model="form.enterpriseCreditIdentifier" maxlength="18" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="计量认证号" prop="enterpriseJcMetrologicalAuthentication" :rules="[ { required: true, message: '请输入计量认证号', trigger: ['change'] } ]">
                                        <el-input v-model="form.enterpriseJcMetrologicalAuthentication" maxlength="11" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="证号有效日期" prop="authenticationTime" :rules="[ { required: true, message: '请选择证号有效日期', trigger: ['change'] } ]">
                                        <el-date-picker
                                            v-model="form.authenticationTime"
                                            type="daterange"
                                            unlink-panels
                                            value-format="yyyy-MM-dd"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            placeholder="请选择">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="发证单位" prop="enterpriseJcAuthenticationUnit" :rules="[ { required: true, message: '请输入发证单位', trigger: ['change'] } ]">
                                        <el-input v-model.trim="form.enterpriseJcAuthenticationUnit" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="建站时间" prop="enterpriseCreateSiteTime" :rules="[ { required: true, message: '请选择建站时间', trigger: ['change'] } ]">
                                        <el-date-picker
                                        v-model="form.enterpriseCreateSiteTime"
                                        type="date"
                                        placeholder="请选择">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="营业状态" prop="enterpriseOperatingState" :rules="[ { required: true, message: '请选择营业状态', trigger: ['change'] } ]">
                                        <el-select v-model="form.enterpriseOperatingState" placeholder="请选择" clearable>
                                            <el-option
                                                v-for="item in operateState"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="营业时间" prop="businessTime" :rules="[ { required: true, message: '请选择经营时间', trigger: ['change'] } ]">
                                        <el-time-picker
                                            v-model="form.businessTime"
                                            is-range
                                            value-format="HH:mm:ss"
                                            range-separator="至"
                                            start-placeholder="开始时间"
                                            end-placeholder="结束时间"
                                            placeholder="请选择">
                                        </el-time-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="企业负责人" prop="enterpriseOwner" :rules="[ { required: true, message: '请输入企业负责人', trigger: ['change'] } ]">
                                        <el-input v-model.trim="form.enterpriseOwner" type="text" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="负责人电话" prop="enterpriseOwnerPhone" :rules="$validate({required:true, repeatLength:11, type:'tel'})">
                                        <el-input v-model="form.enterpriseOwnerPhone" maxlength="11" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="企业联系人" prop="enterpriseLinkName" :rules="[ { required: true, message: '请输入企业联系人', trigger: ['change'] } ]">
                                        <el-input v-model.trim="form.enterpriseLinkName" :type="roleExtEnterpriseLinkpersonIsview ? 'text' : 'password'" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="联系人电话" prop="enterpriseLinkMobile" :rules="$validate({required:true, repeatLength:11, type:'tel'})">
                                        <el-input v-model="form.enterpriseLinkMobile" :type="roleExtEnterpriseLinkpersonIsview ? 'text' : 'password'" maxlength="11" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="企业业务电话" prop="enterpriseBusinessPhone" :rules="$validate({required:true, repeatLength:11, type:'tel'})">
                                        <el-input v-model.trim="form.enterpriseBusinessPhone" maxlength="11" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="100">
                                <el-col :span="8">
                                    <el-form-item label="经营范围" prop="enterpriseOperationArea" :rules="[ { required: true, message: '请输入经营范围', trigger: ['change'] } ]">
                                        <el-input v-model="form.enterpriseOperationArea" maxlength="100" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="企业概况" prop="enterpriseIntroduction" :rules="[ { required: true, message: '请输入企业概况', trigger: ['change'] } ]">
                                        <el-input v-model.trim="form.enterpriseIntroduction" maxlength="100" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </info-item>
                    </el-tab-pane>
                    <el-tab-pane label="拓展信息" name="moreInfo" class="more-info">
                        <div class="picture">
                            <el-row :gutter="100">
                                <el-col :span="8" style="padding-left: 100px;">
                                    <el-form-item label="营业执照" prop="enterpriseBusinessLicense" :rules="[ { required: true, message: '请上传营业执照', trigger: ['change'] } ]">
                                        <div class="img">
                                            <el-upload
                                                class="upload-demo"
                                                ref="licenseWrap"
                                                :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                                :on-success="uploadSuccess"
                                                :show-file-list="false"
                                                :before-upload="beforeAvatarUpload"
                                                >
                                                <img class="empty" v-show="!form.enterpriseBusinessLicense" src="@/assets/images/img_photo.png" alt="营业执照">
                                                <img v-show="form.enterpriseBusinessLicense" ref="licenseImg" :src="form.enterpriseBusinessLicense" alt="营业执照">
                                                <p class="">上传营业执照</p>
                                            </el-upload>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8" style="padding-left: 100px;">
                                    <el-form-item label="企业门店" prop="enterprisePicUrl" :rules="[ { required: true, message: '请上传企业门店照片', trigger: ['change'] } ]">
                                        <div class="img">
                                            <el-upload
                                                class="upload-demo"
                                                ref="picWrap"
                                                :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                                :on-success="uploadSuccess2"
                                                :show-file-list="false"
                                                :before-upload="beforeAvatarUpload"
                                                >
                                                <img class="empty" v-show="!form.enterprisePicUrl" src="@/assets/images/img_photo.png" alt="企业门店">
                                                <img v-show="form.enterprisePicUrl" ref="picImg" :src="form.enterprisePicUrl" alt="企业门店">
                                                <p>上传企业门店</p>
                                            </el-upload>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8" style="padding-left: 100px;">
                                    <el-form-item label="经营许可证" prop="enterpriseBusinessPermit" :rules="[ { required: true, message: '请上传经营许可证', trigger: ['change'] } ]">
                                        <div class="img">
                                            <el-upload
                                                class="upload-demo"
                                                ref="permitWrap"
                                                :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                                :on-success="uploadSuccess3"
                                                :show-file-list="false"
                                                :before-upload="beforeAvatarUpload"
                                                >
                                                <img class="empty" v-show="!form.enterpriseBusinessPermit" src="@/assets/images/img_photo.png" alt="经营许可证">
                                                <img v-show="form.enterpriseBusinessPermit" ref="permitImg" :src="form.enterpriseBusinessPermit" alt="经营许可证">
                                                <p>上传经营许可证</p>
                                            </el-upload>
                                        </div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div>
                            <h6 class="s-title">地图位置设置</h6>
                            <el-row :gutter="100">
                                <el-col :span="12" style="padding-left: 100px;">
                                    <el-form-item class="map-latlng" label="企业地址" prop="enterpriseAddr" :rules="[ { required: true, message: '请输入企业地址', trigger: ['change'] } ]">
                                        <el-input v-model="form.enterpriseAddr" clearable style="width: 70%;" placeholder="请输入"></el-input>
                                        <el-button type="primary" @click="mapSearch">获取经纬度</el-button>
                                    </el-form-item>
                                    <el-form-item label="经度" prop="lng" :rules="[ { required: true, message: '请输入经度', trigger: ['change'] } ]">
                                        <el-input v-model.number="form.lng" step="0.000001" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="纬度" prop="lat" :rules="[ { required: true, message: '请输入纬度', trigger: ['change'] } ]">
                                        <el-input v-model.number="form.lat" step="0.000001" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <baidu-map :center="{ lat: form.lat, lng: form.lng }" :scroll-wheel-zoom="true" :double-click-zoom="true" :zoom="15">
                                        <bm-view class="bm-view"></bm-view>
                                        <bm-local-search :keyword="BMkeyword" :panel="false" :selectFirstResult="true" :auto-viewport="true" :location="BMlocation" @searchcomplete="searchcomplete"></bm-local-search>
                                    </baidu-map>
                                </el-col>
                            </el-row>
                            <h6 class="s-title">其他信息</h6>
                            <el-row :gutter="100">
                                <el-col :span="12" style="padding-left: 100px;">
                                    <el-form-item label="企业网址" prop="enterpriseSiteUrl" :rules="[ { required: false } ]">
                                        <el-input v-model="form.enterpriseSiteUrl" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="占地面积(㎡)" prop="enterpriseJcAreaCovered" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseJcAreaCovered" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="辅助面积(㎡)" prop="enterpriseJcAuxiliaryArea" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseJcAuxiliaryArea" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="试车道大小" prop="enterpriseJcTestLaneSize" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseJcTestLaneSize" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12" style="padding-right: 100px;">
                                    <el-form-item label="企业邮箱" prop="enterpriseRegisterEmail" :rules="[ { required: false } ]">
                                        <el-input v-model="form.enterpriseRegisterEmail" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="主检测面积(㎡)" prop="enterpriseJcMainCheckArea" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseJcMainCheckArea" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="停车场面积(㎡)" prop="enterpriseJcParkingArea" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseJcParkingArea" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                    <el-form-item label="设备总台数" prop="enterpriseJcEquipmentTotal" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseJcEquipmentTotal" type="number" clearable placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <el-button type="primary" @click="addRecord" :disabled="!$checkAuth('manage:enterprise:editinspectent')">保存</el-button>
            <el-button class="react_btn" @click="goBack">返回</el-button>
        </bread-foot>
    </div>
</template>

<script>
import { CodeToText } from 'element-china-area-data'
import BreadFoot from '@/components/BreadFoot.vue'
import InfoItem from '@/components/InfoItem.vue'
import { jcGradeList, economicsList, operateState } from '@/utils/type.js'
import { getCookie } from '@/utils/cookie.js'
import { mapGetters } from 'vuex'
export default {
    name: 'testingArchDetail',
    components: {
        BreadFoot,
        InfoItem
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '检测企业档案', path: '' }
            ],
            tabIndex: 'basicInfo',
            uploadURL: window.uploadURL,
            jcGradeList,
            operateState,
            economicsList,
            formInStringty: '',
            form: {
                username: '',
                password: 'Ycxc2020',
                enterpriseName: '',
                enterpriseJcScope: [],
                recordNumber: '',
                enterpriseJcShortName: '',
                enterpriseEconomicCategory: '',
                enterpriseRegion: '',
                enterpriseJcGrade: '',
                enterpriseBusinessCertificate: '',
                validityTime: [],
                enterpriseCreditIdentifier: '',
                enterpriseJcMetrologicalAuthentication: '',
                enterpriseJcAuthenticationUnit: '',
                authenticationTime: [],
                enterpriseCreateSiteTime: '',
                enterpriseOperatingState: '',
                businessTime: [new Date(2018, 12, 1, 9, 0), new Date(2018, 12, 1, 18, 0)],
                enterpriseOwner: '',
                enterpriseOwnerPhone: '',
                enterpriseLinkName: '',
                enterpriseLinkMobile: '',
                enterpriseBusinessPhone: '',
                enterprisePostalcode: '',
                enterpriseOperationArea: '',
                enterpriseIntroduction: '',
                enterpriseBusinessLicense: '',
                enterprisePicUrl: '',
                enterpriseBusinessPermit: '',
                enterpriseAddr: '',
                lng: 116.403847,
                lat: 39.915526,
                enterpriseSiteUrl: '',
                enterpriseJcAreaCovered: '',
                enterpriseJcAuxiliaryArea: '',
                enterpriseJcTestLaneSize: '',
                enterpriseRegisterEmail: '',
                enterpriseJcMainCheckArea: '',
                enterpriseJcParkingArea: '',
                enterpriseJcEquipmentTotal: ''
            },
            regionList: [],
            BMkeyword: '',
            BMlocation: '',
            roleExtEnterpriseLinkpersonIsview: 1,
            sendData: false
        }
    },
    created () {
        this.findLoginRegion()
        this.breadArr.push(this.$route.query.id ? { title: '编辑档案', path: '' } : { title: '新增档案', path: '' })
        if (this.$route.query.id) {
            this.getRecordDetail(this.$route.query.id)
        } else {
            this.formInStringty = JSON.stringify(this.form)
        }
    },
    computed: {
        ...mapGetters(['externalInfo'])
    },
    methods: {
        resetRecordNum () {
            if (this.$route.query.id) {
                return
            }
            this.form.recordNumber = ''
        },
        getRecordNumber () {
            let errMsg = ''
            this.$refs.form.validateField(['enterpriseName', 'enterpriseRegion'], valid => {
                errMsg += valid
            })
            if (!errMsg) {
                this.$post('manage/enterprise/findEnterpriseRecordNumber', {
                    data: {
                        enterpriseName: this.form.enterpriseName,
                        enterpriseRegion: this.form.enterpriseRegion,
                        enterpriseTypeId: '2'
                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.form.recordNumber = res.data.enterpriseRecordNumber
                    }
                })
            }
        },
        // 获取区域
        findLoginRegion () {
            this.$post('bas/city/findLoginRegion', {})
                .then(res => {
                    if (res.status === 200) {
                        this.regionList = res.datas
                    }
                })
        },
        // 获取档案详情
        getRecordDetail (id) {
            this.$post('manage/enterprise/view', {
                data: {
                    enterpriseId: id
                }
            }).then(res => {
                if (res.status === 200) {
                    this.form = {
                        recordNumber: res.data.enterpriseCoding,
                        enterpriseName: res.data.enterpriseName, // 企业名称
                        enterpriseEconomicCategory: res.data.enterpriseEconomicCategory, // 经济性质
                        enterpriseCreditIdentifier: res.data.enterpriseCreditIdentifier, // 社会信用代码
                        enterpriseBusinessCertificate: res.data.enterpriseBusinessCertificate, // 经营许可证号
                        enterpriseRegion: res.data.enterpriseRegion, // 所在区域
                        enterpriseJcMetrologicalAuthentication: res.data.enterpriseJcMetrologicalAuthentication, // 计量认证号
                        enterpriseOperatingState: String(res.data.enterpriseOperatingState),
                        enterpriseOwner: res.data.enterpriseOwner, // 企业负责人
                        enterpriseOwnerPhone: res.data.enterpriseOwnerPhone, // 负责人电话
                        enterpriseLinkName: res.data.enterpriseLinkName, // 企业联系人
                        enterpriseLinkMobile: res.data.enterpriseLinkMobile, // 联系人电话
                        enterpriseBusinessPhone: res.data.enterpriseBusinessPhone, // 企业业务电话
                        enterpriseJcShortName: res.data.enterpriseJcShortName, // 企业简称
                        enterpriseJcGrade: res.data.enterpriseJcGrade, // 企业等级
                        enterpriseJcScope: res.data.enterpriseJcScope ? res.data.enterpriseJcScope.split(',') : [],
                        enterpriseJcAuthenticationUnit: res.data.enterpriseJcAuthenticationUnit, // 发证单位
                        enterpriseCreateSiteTime: new Date(res.data.enterpriseCreateSiteTime), // 建站时间
                        enterprisePostalcode: res.data.enterprisePostalcode, // 企业邮政编码
                        enterpriseOperationArea: res.data.enterpriseOperationArea, // 企业经营范围
                        enterpriseIntroduction: res.data.enterpriseIntroduction, // 企业经营概况
                        enterpriseAddr: res.data.enterpriseAddr, // 企业详细地址
                        lng: Number(res.data.enterpriseAddrX), // 企业地址经度
                        lat: Number(res.data.enterpriseAddrY), // 企业地址纬度
                        enterpriseSiteUrl: res.data.enterpriseSiteUrl, // 企业网址
                        enterpriseRegisterEmail: res.data.enterpriseRegisterEmail, // 企业邮箱
                        enterpriseJcAreaCovered: res.data.enterpriseJcAreaCovered, // 占地面积
                        enterpriseJcAuxiliaryArea: res.data.enterpriseJcAuxiliaryArea, // 辅助面积
                        enterpriseJcTestLaneSize: res.data.enterpriseJcTestLaneSize, // 试车道大小
                        enterpriseJcMainCheckArea: res.data.enterpriseJcMainCheckArea, // 主检测面积
                        enterpriseJcParkingArea: res.data.enterpriseJcParkingArea, // 停车场面积
                        enterpriseJcEquipmentTotal: res.data.enterpriseJcEquipmentTotal // 设备总台数
                    }
                    // 许可证有效期
                    if (res.data.enterpriseCertificateS && res.data.enterpriseCertificateE) {
                        this.$set(this.form, 'validityTime', [res.data.enterpriseCertificateS, res.data.enterpriseCertificateE])
                    }
                    // 计量认证号有效期
                    if (res.data.enterpriseJcAuthenticationDateS && res.data.enterpriseJcAuthenticationDateE) {
                        this.$set(this.form, 'authenticationTime', [res.data.enterpriseJcAuthenticationDateS, res.data.enterpriseJcAuthenticationDateE])
                    }
                    // 营业时间
                    if (res.data.enterpriseJcBusinessS && res.data.enterpriseJcBusinessE) {
                        if (res.data.enterpriseJcBusinessS.split(':').length === 2 && res.data.enterpriseJcBusinessE.split(':').length === 2) {
                            let s = res.data.enterpriseJcBusinessS + ':00'
                            let e = res.data.enterpriseJcBusinessE + ':00'
                            this.$set(this.form, 'businessTime', [s, e])
                        } else {
                            this.$set(this.form, 'businessTime', [res.data.enterpriseJcBusinessS, res.data.enterpriseJcBusinessE])
                        }
                    }
                    try {
                        var user = JSON.parse(getCookie('user'))
                        this.roleExtEnterpriseLinkpersonIsview = user.roleExtEnterpriseLinkpersonIsview
                    } catch (e) {
                    }
                    (async () => {
                        await this.imgLoad('picImg', 'enterprisePicUrl', res.data.enterprisePicUrl)
                        await this.imgLoad('permitImg', 'enterpriseBusinessPermit', res.data.enterpriseBusinessPermit)
                        await this.imgLoad('licenseImg', 'enterpriseBusinessLicense', res.data.enterpriseBusinessLicense)
                        this.formInStringty = JSON.stringify(this.form)
                    })()
                }
            })
        },
        // 图片加载后处理
        imgLoad (imgshow, pic, src) {
            return new Promise((resolve, reject) => {
                this.$set(this.form, pic, '')
                if (src && !/^(http|https):/.test(src)) {
                    src = 'http://' + src
                }
                let _this = this
                let img = new Image()
                img.src = src
                img.onload = function () {
                    if (this.width / this.height > 1) {
                        _this.$refs[imgshow].style.width = '100%'
                    } else {
                        _this.$refs[imgshow].style.height = '100%'
                    }
                }
                this.$set(this.form, pic, src)
                resolve('OK')
            })
        },
        beforeAvatarUpload (file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
            const isLt2M = file.size / 1024 / 1024 < 1
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 1MB!')
            }
            return isJPG && isLt2M
        },
        uploadSuccess (res) {
            if (res.status === 200) {
                this.imgLoad('licenseImg', 'enterpriseBusinessLicense', res.data)
                    .then(res => {
                        this.$refs.form.validateField('enterpriseBusinessLicense')
                        this.$message({
                            message: '图片上传成功！',
                            type: 'success'
                        })
                    })
            }
        },
        uploadSuccess2 (res) {
            if (res.status === 200) {
                this.imgLoad('picImg', 'enterprisePicUrl', res.data)
                    .then(res => {
                        this.$refs.form.validateField('enterprisePicUrl')
                        this.$message({
                            message: '图片上传成功！',
                            type: 'success'
                        })
                    })
            }
        },
        uploadSuccess3 (res) {
            if (res.status === 200) {
                this.imgLoad('permitImg', 'enterpriseBusinessPermit', res.data)
                    .then(res => {
                        this.$refs.form.validateField('enterpriseBusinessPermit')
                        this.$message({
                            message: '图片上传成功！',
                            type: 'success'
                        })
                    })
            }
        },
        goBack () {
            if (this.formInStringty === JSON.stringify(this.form)) {
                this.$router.push('/companyArchj')
            } else {
                this.$confirm('返回后数据将不会保存，是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push('/companyArchj')
                })
            }
        },
        // 新增检测企业档案
        addRecord () {
            if (this.sendData) {
                return
            }
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                var obj = {
                    data: {
                        enterpriseCoding: this.form.recordNumber,
                        enterpriseTypeId: '2', // 企业类型
                        enterpriseName: this.form.enterpriseName, // 企业名称
                        enterpriseEconomicCategory: this.form.enterpriseEconomicCategory, // 经济性质
                        enterpriseCreditIdentifier: this.form.enterpriseCreditIdentifier, // 社会信用代码
                        enterpriseBusinessCertificate: this.form.enterpriseBusinessCertificate, // 经营许可证号
                        enterpriseRegion: this.form.enterpriseRegion, // 所在区域
                        enterpriseJcMetrologicalAuthentication: this.form.enterpriseJcMetrologicalAuthentication, // 计量认证号
                        enterpriseOperatingState: this.form.enterpriseOperatingState, // 营业状态
                        enterpriseOwner: this.form.enterpriseOwner, // 企业负责人
                        enterpriseLinkName: this.form.enterpriseLinkName, // 企业联系人
                        enterpriseBusinessPhone: this.form.enterpriseBusinessPhone, // 企业业务电话
                        enterpriseJcShortName: this.form.enterpriseJcShortName, // 企业简称
                        enterpriseJcScope: this.form.enterpriseJcScope.join(','),
                        enterpriseJcGrade: this.form.enterpriseJcGrade, // 企业等级
                        enterpriseJcAuthenticationUnit: this.form.enterpriseJcAuthenticationUnit, // 发证单位
                        enterpriseCreateSiteTime: String(this.form.enterpriseCreateSiteTime - 0), // 建站时间
                        enterpriseOwnerPhone: this.form.enterpriseOwnerPhone, // 负责人电话
                        enterpriseLinkMobile: this.form.enterpriseLinkMobile, // 联系人电话
                        enterprisePostalcode: this.form.enterprisePostalcode, // 企业邮政编码
                        enterpriseOperationArea: this.form.enterpriseOperationArea, // 企业经营范围
                        enterpriseIntroduction: this.form.enterpriseIntroduction, // 企业经营概况
                        enterpriseAddrProvince: this.externalInfo.province, // 企业地址省
                        enterpriseAddrCity: this.externalInfo.city, // 企业地址市
                        enterpriseAddrDistrict: this.form.enterpriseRegion, // 企业地址区
                        enterpriseAddr: this.form.enterpriseAddr, // 企业详细地址
                        enterpriseAddrX: String(this.form.lng), // 企业地址经度
                        enterpriseAddrY: String(this.form.lat), // 企业地址纬度
                        enterpriseSiteUrl: this.form.enterpriseSiteUrl, // 企业网址
                        enterpriseRegisterEmail: this.form.enterpriseRegisterEmail, // 企业邮箱
                        enterpriseJcAreaCovered: this.form.enterpriseJcAreaCovered, // 占地面积
                        enterpriseJcAuxiliaryArea: this.form.enterpriseJcAuxiliaryArea, // 辅助面积
                        enterpriseJcTestLaneSize: this.form.enterpriseJcTestLaneSize, // 试车道大小
                        enterpriseJcMainCheckArea: this.form.enterpriseJcMainCheckArea, // 主检测面积
                        enterpriseJcParkingArea: this.form.enterpriseJcParkingArea, // 停车场面积
                        enterpriseJcEquipmentTotal: this.form.enterpriseJcEquipmentTotal, // 设备总台数
                        enterpriseBusinessLicense: this.form.enterpriseBusinessLicense, // 营业执照照片
                        enterpriseBusinessPermit: this.form.enterpriseBusinessPermit, // 经营许可证照片
                        enterprisePicUrl: this.form.enterprisePicUrl // 企业门店照片
                    }
                }
                if (this.form.validityTime && this.form.validityTime.length) {
                    obj.data.enterpriseCertificateS = this.form.validityTime[0] // 许可证有效期开始时间
                    obj.data.enterpriseCertificateE = this.form.validityTime[1] // 许可证有效期结束时间
                }
                if (this.form.authenticationTime && this.form.authenticationTime.length) {
                    obj.data.enterpriseJcAuthenticationDateS = this.form.authenticationTime[0] // 证号有效期开始
                    obj.data.enterpriseJcAuthenticationDateE = this.form.authenticationTime[1] // 证号有效期结束
                }
                if (this.form.businessTime && this.form.businessTime.length) {
                    obj.data.enterpriseJcBusinessS = this.form.businessTime[0] // 营业时间开始
                    obj.data.enterpriseJcBusinessE = this.form.businessTime[1] // 营业时间结束
                }
                this.sendData = true
                let url = ''
                if (this.$route.query.id) {
                    obj.data.enterpriseId = this.$route.query.id
                    url = 'manage/enterprise/editinspectent'
                } else {
                    url = 'manage/enterprise/addinspectent'
                }
                this.$post(url, obj)
                    .then((res) => {
                        this.sendData = false
                        if (res.status === 200) {
                            this.$message({
                                message: '保存成功!',
                                type: 'success',
                                duration: 1000,
                                onClose: () => {
                                    this.$router.push('/companyArchj')
                                }
                            })
                        } else if (res.status === 204) {
                            this.form.recordNumber = ''
                        }
                    })
                    .catch(() => {
                        this.sendData = false
                    })
            })
        },
        // tab切换
        changeTabs (tab) {
            if (tab.label === '拓展信息') {
                this.$nextTick(() => {
                    if (this.form.enterpriseAddr) {
                        this.BMkeyword = this.form.enterpriseAddr
                        this.BMlocation = CodeToText[this.externalInfo.city]
                    } else {
                        this.BMkeyword = '北京市'
                        this.BMlocation = CodeToText[this.externalInfo.city]
                    }
                })
            }
        },
        // 搜索百度地图
        mapSearch () {
            this.BMkeyword = this.form.enterpriseAddr
            this.BMlocation = CodeToText[this.externalInfo.city]
        },
        // 搜索回调函数
        searchcomplete (res) {
            if (!res) {
                return
            }
            if (!res.Ir.length) {
                this.$message.error('未找到您输入的位置信息!')
            }
            if (res && res.Ir.length > 0) {
                this.form.lng = res.Ir[0].point.lng
                this.form.lat = res.Ir[0].point.lat
            }
        }
    }
}
</script>

<style lang='less' scoped>
.testingArchDetail {
    .content {
        min-height: 700px;
        padding-bottom: 100px;
        .s-title {
            text-align: left;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            color: #333;
            padding-left: 50px;
        }
        .picture {
            .img {
                width: 152px;
                height: 172px;
                padding: 6px;
                border: 1px solid #ddd;
                position: relative;
                cursor: pointer;
                img {
                    cursor: pointer;
                }
                p {
                    text-align: center;
                    height: 36px;
                    line-height: 36px;
                    font-size: 14px;
                    color: #208DFF;
                    cursor: pointer;
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 170px;
                }
                .file-input {
                    display: none;
                }
                .empty {
                    width: 100%;
                }
            }
        }
        .bm-view {
            width: 280px;
            height: 260px;
            position: absolute;
            top: 44px;
            left: calc(50% + 50px);
        }
        .brand {
            font-size: 14px;
            .manage {
                height: 70px;
                line-height: 70px;
                text-align: right;
                button {
                    height: 30px;
                    width: 98px;
                    font-size: 14px;
                    color: #000;
                    border: 1px solid #666;
                    outline: none;
                    background-color: #fff;
                    border-radius:3px;
                    cursor: pointer;
                }
            }
            .brand-list {
                padding: 40px 40px 40px 0;
                min-height: 500px;
                max-width: 1300px;
                .list-item {
                    width: 188px;
                    height: 166px;
                    border: 1px solid #DDDDDD;
                    text-align: center;
                    float: left;
                    margin-left: 26px;
                    margin-bottom: 32px;
                    position: relative;
                    transition: all .2s;
                    cursor: pointer;
                    .delete {
                        display: none;
                        position: absolute;
                        top: 2px;
                        right: 9px;
                        width: 14px;
                        height: 17px;
                    }
                    &:hover {
                        border: 1px solid #359DFF;
                        .delete {
                            display: block;
                        }
                    }
                    img {
                        margin-top: 8px;
                        width: 120px;
                        height: 120px;
                    }
                    h6 {
                        font-size: 14px;
                        color: #000;
                        font-weight: normal;
                        line-height: 30px;
                    }
                }
            }
            .add-brand {
                float:left;
                width: 188px;
                height: 166px;
                border: 1px dashed #409efe;
                text-align: center;
                font-size: 14px;
                margin-left: 26px;
                color: #000;
                cursor: pointer;
                img {
                    margin-top: 44px;
                }
                p {
                    margin-top: 36px;
                }
            }
        }
        .add-brand-alert {
            .transfer {
                text-align: center;
                margin: 20px 40px 0 40px;
                position: relative;
                .search {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 190px;
                    height: 28px;
                    line-height: 28px;
                    background-color: #F3F6FC;
                    border: 1px solid #EAF0F7;
                    input {
                        width: 170px;
                        height: 100%;
                        border: none;
                        outline: none;
                        padding: 0 10px;
                        background-color: #F3F6FC;
                        border-bottom: 1px solid #EAF0F7;
                        font-size: 13px;
                    }
                }
                .all-brand {
                    width: 190px;
                    height: 242px;
                    border: 1px solid #EAF0F7;
                    overflow-y: auto;
                    overflow-x: hidden;
                    margin-top: 28px;
                    float: left;
                    .all-brand-list {
                        .letter {
                            color: #7B828A;
                            font-size: 13px;
                            text-align: left;
                            padding-left: 42px;
                            line-height: 30px;
                        }
                        .item {
                            padding: 4px 0px;
                            text-align: left;
                            font-size: 13px;
                            color: #000;
                            cursor: pointer;
                            &.active {
                                background-color: #f3f6fc;
                            }
                            .img {
                                display: inline-block;
                                width: 42px;
                                text-align: right;
                            }
                            img {
                                height: 15px;
                                width: 15px;
                                margin-right: 4px;
                            }
                        }
                    }
                    .search {
                        height: 28px;
                        line-height: 28px;
                        background-color: #F3F6FC;
                        margin-bottom: 6px;
                        input {
                            width: 170px;
                            height: 100%;
                            border: none;
                            outline: none;
                            padding: 0 10px;
                            background-color: #F3F6FC;
                            border-bottom: 1px solid #EAF0F7;
                            font-size: 13px;
                        }
                    }
                    &.right {
                        margin-top: 0;
                        height: 270px;
                    }
                }
                .transfer-btn {
                    float: left;
                    padding: 70px 0px 0 0px;
                    width: 110px;
                    .btn {
                        width: 77px;
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: bold;
                        color: #536083;
                        border: 1px solid #BBCBDF;
                        margin: 0 0 10px 0;
                        cursor: pointer;
                        border-radius:2px;
                        padding: 0;
                        &.disable {
                            color: #BBCBDF;
                        }
                    }
                }
            }
            .btn {
                text-align: center;
                margin: 22px 0;
                .save {
                    background-color: #3E94FE;
                    border: 1px solid #3984E5;
                    color: #fff;
                }
            }
        }
    }
}
</style>

<style lang="less">
.testingArchDetail {
    background: #FFF;
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
    .tips {
        color: #999;
        position: absolute;
        left: calc(100% + 14px);
        bottom: 0;
        width: 280px;
    }
    .el-tabs--border-card {
        border: none;
    }
    .el-tabs--border-card {
        box-shadow: none;
    }
    .el-tabs__item {
        height:44px;
        line-height: 44px;
        padding: 0 30px;
    }
    .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
        border-color: #3E94FE;
    }
    .el-checkbox__inner {
        border-color: #409EFF;
    }
    .el-table th, .el-table td {
        padding: 12px 0!important;
    }
    .el-upload-list {
        display: none;
    }
    .checkGroup {
        text-align: left;
        .el-checkbox {
            width: 168px;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 12px;
        }
    }
    .add-brand-alert {
        .el-button {
            width: 78px;
            height: 30px;
            line-height: 30px;
            color: #536083;
            border: 1px solid #BBCBDF;
            border-radius:2px;
            background-color: #F6F9FC;
            padding: 0;
        }
    }
    .upload-demo, .el-upload {
        width: 100%;
        height: 152px;
    }
    .el-upload-list {
        position: absolute;
        bottom: -28px;
        left: 8px;
    }
    .map-latlng {
        position: relative;
        .el-input {
            margin-right: 150px;
        }
        .el-button {
            position: absolute;
            right: 0;
            top: 4px;
        }
    }
}
</style>
