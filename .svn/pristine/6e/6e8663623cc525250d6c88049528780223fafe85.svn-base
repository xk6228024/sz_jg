<template>
    <div class="ysEnterpriseDetail" id="ysEnterpriseDetail">
        <el-form :model="form" :rules="rules" ref="form">
            <info-item title="账号信息">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="管理员账号" prop="username">
                            <el-input v-model="form.username" placeholder="请输入" maxlength="20"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="管理员密码" prop="password">
                            <el-input v-model="form.password" disabled type="password" placeholder="请输入" maxlength="20"></el-input>
                            <div class="tips">默认密码：Ycxc2020，初次登录自行修改</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </info-item>
            <info-item title="基础信息">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="企业名称" prop="enterpriseName">
                            <el-input v-model="form.enterpriseName" :rules="[{ required: true, message: '请输入', trigger: 'blur' }]" maxlength="80" autocomplete="off" placeholder="请输入" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="企业简称" prop="enterpriseJcShortName">
                            <el-input v-model="form.enterpriseJcShortName"
                            maxlength="80" autocomplete="off" placeholder="请输入" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="所在区域" prop="enterpriseRegion">
                            <el-select v-model="form.enterpriseRegion" placeholder="请选择" clearable>
                                <el-option
                                    v-for="item in regionList"
                                    :key="item.regionId"
                                    :label="item.regionName"
                                    :value="item.regionId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="社会信用代码" prop="enterpriseCreditIdentifier">
                            <el-input
                            v-model="form.enterpriseCreditIdentifier"
                            maxlength="18" autocomplete="off" placeholder="请输入" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="经营许可证号" prop="enterpriseBusinessCertificate">
                            <el-input
                            v-model="form.enterpriseBusinessCertificate"
                            maxlength="15" autocomplete="off" placeholder="请输入" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item  label="许可证有效期" prop="validityTime">
                            <el-date-picker
                                v-model="form.validityTime"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :value-format="'timestamp'"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="经济性质" prop="enterpriseEconomicCategory">
                            <el-select class="input" :allowClear="true"
                            v-model="form.enterpriseEconomicCategory"
                            placeholder="请选择">
                                <el-option :value="item.value" v-for="item in economicsList" :key="item.value" :label="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="营业时间" prop="enterpriseJcBusiness">
                            <el-time-picker
                                is-range
                                v-model="form.enterpriseJcBusiness"
                                :picker-options="{
                                    format: 'HH:mm'
                                }"
                                :value-format="'HH:mm'"
                                range-separator="至"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                                placeholder="选择时间范围">
                            </el-time-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="负责人" prop="enterpriseOwner">
                            <el-input
                                v-model="form.enterpriseOwner"
                                maxlength="20"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="负责人电话" prop="enterpriseOwnerPhone">
                            <el-input
                                v-model="form.enterpriseOwnerPhone"
                                maxlength="11"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系人" prop="enterpriseLinkName">
                            <el-input
                                v-model="form.enterpriseLinkName"
                                maxlength="20"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系人电话" prop="enterpriseLinkMobile">
                            <el-input
                                v-model="form.enterpriseLinkMobile"
                                maxlength="11"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="企业业务电话" prop="enterpriseBusinessPhone">
                            <el-input
                                v-model="form.enterpriseBusinessPhone"
                                maxlength="20"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="电子邮箱" prop="enterpriseRegisterEmail">
                            <el-input v-model="form.enterpriseRegisterEmail"
                            maxlength="50" autocomplete="off" placeholder="请输入" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="邮政编码" prop="enterprisePostalcode">
                            <el-input
                                v-model="form.enterprisePostalcode"
                                maxlength="6"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="经营地址" prop="enterpriseOperatingAddress">
                            <el-input
                                v-model="form.enterpriseOperatingAddress"
                                maxlength="100"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item :wrapperCol="{span: 24}" label="经营范围" prop="enterpriseOperationArea">
                            <el-input
                                v-model="form.enterpriseOperationArea"
                                maxlength="100"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item :wrapperCol="{span: 24}" label="企业概况" prop="enterpriseIntroduction">
                            <el-input
                                v-model="form.enterpriseIntroduction"
                                maxlength="200"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                </el-row>
            </info-item>
            <info-item title="扩展信息">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="法人代表" prop="enterpriseOwner1">
                            <el-input
                                v-model="form.enterpriseOwner1"
                                maxlength="20"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="注册资金(万)" prop="enterpriseRegisteredCapital">
                            <el-input v-model="form.enterpriseRegisteredCapital"
                            maxlength="20" autocomplete="off" placeholder="请输入" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="拥有车辆数量" prop="enterpriseJcEquipmentTotal">
                            <el-input
                                v-model="form.enterpriseJcEquipmentTotal"
                                maxlength="6"
                                autocomplete="off"
                                placeholder="请输入"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="img-text">
                    照片<span class="text-9">&nbsp;（支持jpg/png格式，图片小于5M）</span>
                </div>
                <div class="upload-img">
                    <el-form-item label="营业执照" prop="enterpriseBusinessLicense" class="img-form-item">
                        <el-upload
                            class="upload-demo"
                            accept="image/*"
                            :action="uploadURL + 'attachment/file/upload?token=' + access_token"
                            :on-success="res => uploadSuccess(res, 'enterpriseBusinessLicense')"
                            :show-file-list="false"
                            :before-upload="beforeUpload"
                            >
                            <img v-if="form.enterpriseBusinessLicense" :src="form.enterpriseBusinessLicense" ref="enterpriseBusinessLicense" class="avatar">
                            <div v-else style="margin-top: 15px;">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <p class="tip">上传照片</p>
                            </div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="经营许可证" prop="enterpriseBusinessPermit" class="img-form-item">
                        <el-upload
                            class="upload-demo"
                            accept="image/*"
                            :action="uploadURL + 'attachment/file/upload?token=' + access_token"
                            :on-success="res => uploadSuccess(res, 'enterpriseBusinessPermit')"
                            :show-file-list="false"
                            :before-upload="beforeUpload"
                            >
                            <img v-if="form.enterpriseBusinessPermit" :src="form.enterpriseBusinessPermit" ref="enterpriseBusinessPermit" class="avatar">
                            <div v-else style="margin-top: 15px;">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <p class="tip">上传照片</p>
                            </div>
                        </el-upload>
                    </el-form-item>
                </div>
            </info-item>
        </el-form>
        <bread-foot
            :breadArr="[{title:'档案管理',path:''},{title:'运输企业档案',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button @click="$router.push('/companyArchy')">返回</el-button>
            <el-button type="primary" @click="save" v-loading="saving">保存</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import InfoItem from '@/components/InfoItem.vue'
import moment from 'moment'
import { getCookie } from '@/utils/cookie.js'
import { mapGetters } from 'vuex'
import {
    economicsList
} from '@/utils/type.js'
export default {
    name: 'ysEnterpriseDetail',
    data () {
        const inputRule = [
            { required: true, message: '请输入', trigger: 'blur' }
        ]

        const selectRule = [
            { required: true, message: '请选择', trigger: 'blur' }
        ]

        return {
            operateLoading: false,
            businessLoading: false,
            operateUrl: '', // 经营许可证照片
            businessUrl: '', // 营业执照照片
            access_token: getCookie('token'),
            economicsList,
            brandList: [],
            uploadURL: window.uploadURL,
            tableData: [],
            imageLoading: false,
            travelImageLoading: false,
            imageUrl: '',
            travelImageUrl: '',
            form: {
                validityTime: [],
                enterpriseJcBusiness: [new Date(2020, 1, 1, 9, 0), new Date(2020, 1, 1, 18, 0)],
                password: 'Ycxc2020'
            },
            rules: {
                enterpriseName: inputRule,
                username: inputRule,
                password: inputRule,
                enterpriseJcShortName: inputRule,
                enterpriseRegion: selectRule,
                enterpriseCreditIdentifier: this.$validate({ required: true, repeatLength: 18, type: 'enterpriseCreditIdentifier' }),
                enterpriseBusinessCertificate: inputRule,
                validityTime: selectRule,
                enterpriseEconomicCategory: selectRule,
                enterpriseOwner: inputRule,
                enterpriseOwnerPhone: this.$validate({ required: true, type: 'phone' }),
                enterpriseLinkName: inputRule,
                enterpriseLinkMobile: this.$validate({ required: true, type: 'phone' }),
                enterpriseBusinessPhone: this.$validate({ required: true, type: 'tel' }),
                enterpriseRegisterEmail: this.$validate({ required: false, type: 'email' }),
                enterprisePostalcode: this.$validate({ required: false, type: 'num' }),
                enterpriseOperatingAddress: selectRule,
                enterpriseRegisteredCapital: this.$validate({ required: false, type: 'num' }),
                enterpriseJcEquipmentTotal: this.$validate({ required: false, type: 'num' }),
                enterpriseBusinessLicense: selectRule,
                enterpriseBusinessPermit: selectRule
            },
            startTimeOpenValue: moment('08:00', 'HH:mm'),
            endTimeOpenValue: moment('20:00', 'HH:mm'),
            startTime: '00:00',
            endTime: '23:59',
            saving: false
        }
    },
    mounted () {
        if (this.$route.query.id) {
            this.getDetail()
        }
    },
    components: {
        BreadFoot,
        InfoItem
    },
    computed: {
        ...mapGetters(['regionList'])
    },
    methods: {
        getDetail () {
            this.$post('manage/enterprise/view', {
                data: {
                    enterpriseId: this.$route.query.id
                }
            }).then(res => {
                if (res.status === 200) {
                    this.form.setFieldsValue({
                        enterpriseName: res.data.enterpriseName,
                        enterpriseJcShortName: res.data.enterpriseJcShortName,
                        enterpriseRegion: [res.data.enterpriseCity, res.data.enterpriseRegion],
                        enterpriseCreditIdentifier: res.data.enterpriseCreditIdentifier,
                        enterpriseBusinessCertificate: res.data.enterpriseBusinessCertificate,
                        validityTime: [res.data.enterpriseCertificateS ? this.$moment(res.data.enterpriseCertificateS) : undefined, res.data.enterpriseCertificateE ? this.$moment(res.data.enterpriseCertificateE) : undefined],
                        enterpriseEconomicCategory: res.data.enterpriseEconomicCategory,
                        enterpriseJcBusinessS: res.data.enterpriseJcBusinessS ? this.$moment(res.data.enterpriseJcBusinessS) : '',
                        enterpriseJcBusinessE: res.data.enterpriseJcBusinessE ? this.$moment(res.data.enterpriseJcBusinessE) : '',
                        enterpriseOwner: res.data.enterpriseOwner,
                        enterpriseOwnerPhone: res.data.enterpriseOwnerPhone,
                        enterpriseLinkName: res.data.enterpriseLinkName,
                        enterpriseLinkMobile: res.data.enterpriseLinkMobile,
                        enterpriseBusinessPhone: res.data.enterpriseBusinessPhone,
                        enterpriseRegisterEmail: res.data.enterpriseRegisterEmail,
                        enterprisePostalcode: res.data.enterprisePostalcode,
                        enterpriseOperationArea: res.data.enterpriseOperationArea,
                        enterpriseIntroduction: res.data.enterpriseIntroduction,
                        enterpriseOperatingAddress: res.data.enterpriseOperatingAddress,
                        enterpriseRegisteredCapital: res.data.enterpriseRegisteredCapital,
                        enterpriseJcEquipmentTotal: res.data.enterpriseJcEquipmentTotal,
                        fileListBusinessUrl: res.data.enterpriseBusinessLicense, // 营业执照照片
                        fileListOperateUrl: res.data.enterpriseBusinessPermit // 经营许可证照片
                    })
                    this.businessUrl = res.data.enterpriseBusinessLicense // 营业执照照片
                    this.operateUrl = res.data.enterpriseBusinessPermit // 经营许可证照片
                }
            })
        },
        // 上传成功
        uploadSuccess (res, img) {
            if (res.status === 200) {
                this.$set(this.form, img, res.data)
                this.$message({
                    message: '图片上传成功！',
                    type: 'success'
                })
                // this.imgLoad('licenseImg', 'enterpriseBusinessLicense', res.data)
                //     .then(res => {
                //         this.$message({
                //             message: '图片上传成功！',
                //             type: 'success'
                //         })
                //     })
            }
        },
        // 图片加载后处理
        imgLoad (imgshow, pic, src) {
            return new Promise((resolve, reject) => {
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
        // 上传校验
        beforeUpload (file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
            if (!isJPG) {
                this.$message.error('仅支持jpg/png格式的图片文件!')
                return
            }
            const isLt2M = file.size / 1024 / 1024 < 5
            if (!isLt2M) {
                this.$message.error('图片大小不能超过5MB!')
            }
            return isJPG && isLt2M
        },
        // 保存
        save () {
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                var values = this.form
                let obj = {
                    data: {
                        ...values,
                        enterpriseTypeId: '3', // 企业类型
                        enterpriseBusinessLicense: this.businessUrl,
                        enterpriseBusinessPermit: this.operateUrl
                    }
                }
                if (values.validityTime && values.validityTime.length) {
                    obj.data.enterpriseCertificateS = values.validityTime[0]
                    obj.data.enterpriseCertificateE = values.validityTime[1]
                }
                obj.data.enterpriseCity = values.enterpriseRegion && values.enterpriseRegion[0]
                obj.data.enterpriseRegion = values.enterpriseRegion && values.enterpriseRegion[1]
                let url = ''
                if (this.$route.query.id) {
                    url = 'manage/enterprise/editTransportEnterprise'
                    obj.data.enterpriseId = this.$route.query.id
                } else {
                    url = 'manage/enterprise/addTransportEnterprise'
                }
                this.saving = true
                this.$post(url, obj)
                    .then((res) => {
                        this.saving = false
                        if (res.status === 200) {
                            this.$message.success('保存成功')
                            this.$router.push('/ysEnterprise')
                        } else if (res.status === 204) {
                            this.recordNumber = ''
                            console.log(res.message)
                        } else {
                            console.log(res.message)
                        }
                    })
                    .catch(e => {
                        this.saving = false
                    })
            })
        }
    }
}
</script>

<style lang='less'>
.ysEnterpriseDetail {
    background: #ffffff;
    text-align: left;
    .input {
        width: 100%;
    }
    .el-form-item {
        margin-bottom: 0;
        width: 80%;
        position: relative;
    }
    .el-col-16 {
        .el-form-item {
            width: 90%;
        }
    }
    .el-col-24 {
        .el-form-item {
            width: 93.3%;
        }
    }
    .time-item {
        display: inline-block;
        width: 37.5%;
        .ant-time-picker {
            width: 100%;
        }
    }
    .time-line {
        width: 5%;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        margin-top: 38px;
    }
    .tips {
        color: #999;
        position: absolute;
        left: calc(100% + 14px);
        bottom: 0;
        width: 280px;
    }
    .img-text {
        margin-bottom: 20px;
    }
    .el-upload {
        width: 100%;
        height: 100%;
        .avatar {
            width: 100%;
            height: 100%;
        }
    }
    .upload-img {
        display: inline-block;
        text-align: center;
        margin-bottom: 28px;
        .upload-demo {
            margin: 0 auto;
            width:118px;
            height:118px;
            background:rgba(0,0,0,0.02);
            border-radius:4px;
            border:1px dashed rgba(0,0,0,0.15);
            margin-bottom: 40px;
            .tip {
                font-size:12px;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:22px;
            }
        }
    }
    .img-form-item {
        width: 120px;
        display: inline-block;
        margin-right: 24px;
        vertical-align: middle;
        .el-form-item__label {
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            text-align: center;
        }
    }
}
</style>
