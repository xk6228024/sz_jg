<!-- 从业人员建档 -->
<template>
    <div class="employeesArch-new">
        <div class="content">
            <el-form ref="form" :model="form" label-position="right" label-width="80px">
                <div class="wrap">
                    <div class="info-title">企业信息</div>
                    <div class="info-content">
                        <el-row :gutter="50">
                            <el-col :span="8">
                                <el-form-item label="企业类型" prop="enterpriseName" :rules="[ { required: true, message: '请输入企业类型', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseName" maxlength="30" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="企业名称" prop="enterpriseType" :rules="[ { required: true, message: '请输入企业名称', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseType" maxlength="15" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <div class="sub">+</div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="wrap">
                    <div class="info-title">基本信息</div>
                    <div class="info-content">
                        <el-row :gutter="50">
                            <el-col :span="8">
                                <el-form-item label="人员姓名" prop="enterpriseName" :rules="[ { required: true, message: '请输入人员姓名', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseName" maxlength="30" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="性别" prop="enterpriseType" :rules="[ { required: true, message: '请输入性别', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseType" maxlength="15" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="文化程度" prop="enterpriseType" :rules="[ { required: true, message: '请输入文化程度', trigger: ['change'] } ]">
                                    <el-select v-model="form.enterpriseRegion" placeholder="请选择" clearable>
                                        <el-option
                                            v-for="item in []"
                                            :key="item.regionId"
                                            :label="item.regionName"
                                            :value="item.regionId">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="50">
                            <el-col :span="8">
                                <el-form-item label="手机号码" prop="enterpriseName" :rules="[ { required: true, message: '请输入手机号码', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseName" maxlength="30" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="身份证号" prop="enterpriseType" :rules="[ { required: true, message: '请输入身份证号', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseType" maxlength="15" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="所学专业" prop="enterpriseType" :rules="[ { required: true, message: '请输入所学专业', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseType" maxlength="15" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="50">
                            <el-col :span="8">
                                <el-form-item label="工作岗位" prop="enterpriseName" :rules="[ { required: true, message: '请输入工作岗位', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseName" maxlength="30" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="wrap">
                    <div class="info-title">证书信息</div>
                    <div class="info-content">
                        <el-row :gutter="50">
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">相关专业大专及以上学历证明材料或机动车检测维修工程师证</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">学历证明材料或技术职称或职业资格证明文件</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">机动车检测维修士或汽车维修工（技师或高级技师)证</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">机动车驾驶证</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="50">
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">特种作业操作证（电工）证书或电动汽车维修工（高级）证书</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">汽车维修士或汽车维修工证书</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="" label-width='0px' prop="imgUrl" :rules="[ { required: false} ]">
                                    <div class="upload-img">
                                        <p class="photo-desc">安全生产知识和管理能力考核合格证</p>
                                        <el-upload
                                            class="upload-demo"
                                            :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                            :on-success="uploadSuccess"
                                            :show-file-list="false"
                                            :before-upload="beforeAvatarUpload"
                                            >
                                            <img v-if="form.imgUrl" :src="form.imgUrl" ref="licenseWrap" class="avatar">
                                            <div v-else style="margin-top: 15px;">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <p class="tip">上传照片</p>
                                            </div>
                                        </el-upload>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-form>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button class="back-btn" @click="$router.go(-1)">返回</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import CustomTable from '@/components/table'
export default {
    name: 'employeesArchNew',
    components: {
        BreadFoot,
        CustomTable
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '从业人员档案', path: '' }, { title: '从业人员档案详情', path: '' }
            ],
            uploadURL: window.uploadURL,
            form: {
                imgUrl: ''
            }
        }
    },
    mounted () {
        // this.imgLoad('licenseWrap', 'imgUrl', 'http://192.168.31.58:8080/assets/img/login-logo-jg.2cb1cba2.png')
    },
    methods: {
        save () {
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                console.log('666')
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
                        // this.$refs.form.validateField('enterpriseBusinessLicense')
                        this.$message({
                            message: '图片上传成功！',
                            type: 'success'
                        })
                    })
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
        }
    }
}
</script>

<style lang="less" scoped>
.employeesArch-new {
    .content {
        min-height: 780px;
        box-sizing: border-box;
        padding-bottom: 45px;
        .wrap {
            background: #fff;
            margin-bottom: 20px;
            .info-title {
                padding: 0 30px;
                height: 54px;
                line-height: 54px;
                text-align: left;
                color: #333;
                font-size: 16px;
                font-weight: bold;
                border-bottom: 1px solid #E9E9E9;
            }
            .info-content {
                padding: 22px 20px 0;
                box-sizing: border-box;
                .sub {
                    width:32px;
                    height:32px;
                    border-radius:4px;
                    border:1px solid rgba(221,221,221,1);
                    font-size: 26px;
                    color: #666;
                    text-align: center;
                    line-height: 28px;
                    margin-top: 2px;
                }
                .upload-img {
                    width: 100%;
                    height: 100%;
                    .upload-demo {
                        margin: 0 auto;
                        width:104px;
                        height:104px;
                        background:rgba(0,0,0,0.02);
                        border-radius:4px;
                        border:1px dashed rgba(0,0,0,0.15);
                        .tip {
                            font-size:12px;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            line-height:22px;
                        }
                    }
                    .photo-desc {
                        font-size:14px;
                        font-weight:400;
                        height: 50px;
                        color:rgba(153,153,153,1);
                        line-height:22px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>

<style lang="less">
.employeesArch-new {
    .el-upload {
        width: 100%;
        height: 100%;
    }
}
</style>
