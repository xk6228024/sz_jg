<template>
    <div class="sz-setting">
        <el-form ref="form" :model="form" label-position='left' label-width='110px'>
            <el-tabs type="card" v-model="tabIndex">
                <el-tab-pane label="系统名称" name='tab1'>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label="系统名称：" label-width='120px' prop="name" :rules="[ { required: false, message: '请输入系统名称', trigger: ['change'] } ]">
                                <el-input v-model.trim="form.sysTitle" maxlength="100" clearable></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label="系统LOGO：" label-width='120px' prop="imgLogo" :rules="[ { required: false, message: '请上传系统LOGO', trigger: ['change'] } ]">
                                <div class="img">
                                    <el-upload
                                        class="upload-demo"
                                        ref="licenseWrap"
                                        :action="uploadURL + 'attachment/file/upload?token='"
                                        :on-success="uploadSuccess"
                                        :show-file-list="false"
                                        :before-upload="beforeAvatarUpload"
                                        >
                                        <img class="empty" v-show="!form.sysLogo" src="@/assets/images/img_photo.png" alt="系统logo">
                                        <img v-show="form.sysLogo" ref="licenseImg" width="100%" height="100%" :src="form.sysLogo" alt="系统LOGO">
                                    </el-upload>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label="系统首页背景：" label-width='120px' prop="imgLogo" :rules="[ { required: false, message: '请上传系统LOGO', trigger: ['change'] } ]">
                                <div class="img2">
                                    <el-upload
                                        class="upload-demo2"
                                        ref="licenseWrap"
                                        :action="uploadURL + 'attachment/file/upload?token='"
                                        :on-success="uploadSuccess2"
                                        :show-file-list="false"
                                        :before-upload="beforeAvatarUpload"
                                        >
                                        <empty-image v-show="!form.sysMainBgUrl"></empty-image>
                                        <!-- <img class="empty" v-show="!form.sysMainBgUrl" src="@/assets/images/img_photo.png" alt="系统首页背景"> -->
                                        <img v-show="form.sysMainBgUrl" ref="licenseImg2" width="100%" height="100%" :src="form.sysMainBgUrl" alt="系统首页背景">
                                    </el-upload>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="备案条件检查" name='tab2'>
                    <h3>现场勘验倒计时管理</h3>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label="现场勘验倒计时：" label-width="130px" prop="time1" :rules="[ { required: false, message: '请输入现场勘验倒计时', trigger: ['change'] } ]">
                                <el-input v-model.number="form.paramInquestCountdownDay" type='number' @blur="inputNumberBlur('paramInquestCountdownDay')">
                                    <template slot="append">天</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="企业整改倒计时：" label-width="130px" prop="time2" :rules="[ { required: false, message: '请输入企业整改倒计时', trigger: ['change'] } ]">
                                <el-input v-model.number="form.paramEnterpriseCountdownDay" type='number' @blur="inputNumberBlur('paramEnterpriseCountdownDay')">
                                    <template slot="append">天</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="再次勘验倒计时：" label-width="130px" prop="time3" :rules="[ { required: false, message: '请输入再次勘验倒计时', trigger: ['change'] } ]">
                                <el-input v-model.number="form.paramInquestCountdownAgainDay" type='number' @blur="inputNumberBlur('paramInquestCountdownAgainDay')">
                                    <template slot="append">天</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <h3>现场勘验倒计时提醒管理</h3>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label="现场勘验倒计时提前提醒：" label-width="190px" prop="time1" :rules="[ { required: false, message: '请输入现场勘验倒计时', trigger: ['change'] } ]">
                                <el-input v-model.number="form.paramInquestCountdownRemindDay" type='number' @blur="inputNumberBlur('paramInquestCountdownRemindDay')">
                                    <template slot="append">天</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="企业整改倒计时提前提醒企业：" label-width="210px" prop="time2" :rules="[ { required: false, message: '请输入企业整改倒计时', trigger: ['change'] } ]">
                                <el-input v-model.number="form.paramEnterpriseCountdownRemindDay" type='number' @blur="inputNumberBlur('paramEnterpriseCountdownRemindDay')">
                                    <template slot="append">天</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="再次勘验倒计时提前提醒：" label-width="180px"  prop="time3" :rules="[ { required: false, message: '请输入再次勘验倒计时', trigger: ['change'] } ]">
                                <el-input v-model.number="form.paramInquestCountdownAgainRemindDay" type='number' @blur="inputNumberBlur('paramInquestCountdownAgainRemindDay')">
                                    <template slot="append">天</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="执法单位地址" class='tab3' name='tab3'>
                    <!-- <custom-table
                        :table-data="tableData"
                        :label-data="labelData"
                        :showElPage=false
                        align="center"
                        :border=true
                        >
                        <template slot="handle" slot-scope="scope">
                            <el-button type="text" @click="editUnit(scope.slotData)">编辑</el-button>
                            <el-button type="text" @click="deleteUnit(scope.slotData.agencyId)">删除</el-button>
                        </template>
                    </custom-table> -->
                    <el-table
                        border
                        :data="tableData"
                        :header-cell-style="{'background': '#FAFAFA','text-align':'left'}"
                        :cell-style="{'text-align':'left'}"
                        :stripe="false">
                        <el-table-column
                            prop="agencyName"
                            min-width="20%"
                            label="执法单位">
                        </el-table-column>
                        <el-table-column
                            prop="agencyShortName"
                            min-width="20%"
                            label="整改通知书编号">
                        </el-table-column>
                        <el-table-column
                            prop="agencyLinkAddress"
                            min-width="60%"
                            label="执法地址">
                        </el-table-column>
                        <el-table-column
                            prop="agencyLinkName"
                            min-width="20%"
                            label="联系人">
                        </el-table-column>
                        <el-table-column
                            prop="agencyLinkTel"
                            min-width="20%"
                            label="联系电话">
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            min-width="20%"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" @click="editUnit(scope.row)">编辑</el-button>
                                <el-button type="text" @click="deleteUnit(scope.row.agencyId)">删除</el-button>
                            </template>
                        </el-table-column>
                     </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-form>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
         <!-- :disabled="!$checkAuth('sys:cityParam:setSysTimeCertifQuant')" -->
            <el-button type="primary" @click='add' v-if="tabIndex==='tab3'" icon="el-icon-plus">新增执法单位</el-button>
            <el-button type="primary" @click='save' v-loading="loading" v-if="tabIndex!=='tab3'">保存</el-button>
        </bread-foot>
        <modal :title="editId ? '编辑执法单位' : '新增执法单位'"
            :alert="addAlert"
            :width="500"
            @alertCancel="alertCancel">
            <el-form ref="form2" :model="form2" label-position='left' label-width='120px' style="padding:20px;">
                <el-form-item label="执法单位名称"  prop="agencyName" :rules="[ { required: true, message: '请输入执法单位名称', trigger: ['change'] } ]">
                    <el-input v-model.trim="form2.agencyName" maxlength="100" clearable></el-input>
                </el-form-item>
                <!-- <el-form-item label="执法单位名称"  prop="agencyName" :rules="[ { required: true, message: '请输入执法单位名称', trigger: ['change'] } ]">
                    <el-input v-model.trim="form2.agencyName" maxlength="100" clearable></el-input>
                </el-form-item> -->
                <el-form-item label="整改通知书编号"  prop="agencyShortName" :rules="[ { required: true, message: '整改通知书编号', trigger: ['change'] } ]">
                    <el-input v-model.trim="form2.agencyShortName" maxlength="100"  clearable></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="agencyLinkName" :rules="$validate({required:true,msg:'请输入联系人'})">
                    <el-input v-model.trim="form2.agencyLinkName" maxlength="100" clearable></el-input>
                </el-form-item>
                <el-form-item label="联系电话"  prop="agencyLinkTel" :rules="$validate({required:true,type:'tel'})">
                    <el-input v-model.trim="form2.agencyLinkTel" maxlength="25" clearable></el-input>
                </el-form-item>
                <el-form-item label="执法单位地址"  prop="agencyLinkAddress" :rules="[ { required: true, message: '请输入执法单位地址', trigger: ['change'] } ]">
                    <el-input v-model="form2.agencyLinkAddress" maxlength="100" type="textarea" clearable></el-input>
                </el-form-item>
                <div class="btn" style="text-align:right;">
                    <el-button type="primary" @click="alertOk">确定</el-button>
                    <el-button @click="alertCancel">取消</el-button>
                </div>
            </el-form>
        </modal>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import Modal from '@/components/Modal.vue'
// import { getCookie } from '@/utils/cookie.js'
import customTable from '@/components/table'
import EmptyImage from '@/components/EmptyImage'
export default {
    name: 'szSetting',
    components: {
        BreadFoot,
        Modal,
        EmptyImage,
        customTable
    },
    data () {
        return {
            editId: '',
            form2: {
                agencyName: '',
                agencyShortName: '',
                agencyLinkName: '',
                agencyLinkTel: '',
                agencyLinkAddress: '',
                agencyRectificationNoticeNo: '',
                remark: ''
            },
            addAlert: false,
            loading: false,
            breadArr: [
                { title: '系统管理', path: '' }, { title: '系统参数', path: '' }
            ],
            tabIndex: 'tab1',
            uploadURL: window.uploadURL,
            form: {
                sysTitle: '',
                sysLogo: '',
                sysMainBgUrl: '',
                paramEnterpriseCountdownDay: 10,
                paramEnterpriseCountdownRemindDay: 3,
                paramInquestCountdownAgainDay: 5,
                paramInquestCountdownAgainRemindDay: 5,
                paramInquestCountdownDay: 180,
                paramInquestCountdownRemindDay: 10
            },
            formTime: {
                // paramEnterpriseCountdownDay: 10,
                // paramEnterpriseCountdownRemindDay: 3,
                // paramInquestCountdownAgainDay: 5,
                // paramInquestCountdownAgainRemindDay: 5,
                // paramInquestCountdownDay: 180,
                // paramInquestCountdownRemindDay: 10
            },
            tableData: [],
            labelData: [
                {
                    label: '执法单位',
                    prop: 'agencyName',
                    minWidth: '20%'
                },
                {
                    label: '整改通知书编号',
                    prop: 'agencyRectificationNoticeNo',
                    minWidth: '20%'
                },
                {
                    label: '联系地址',
                    prop: 'agencyLinkAddress',
                    minWidth: '60%'
                },
                {
                    label: '联系人',
                    prop: 'agencyLinkName',
                    minWidth: '20%'
                },
                {
                    label: '联系电话',
                    prop: 'agencyLinkTel',
                    minWidth: '20%'
                },
                // {
                //     label: '联系电话',
                //     slotName: 'a3',
                //     minWidth: '20%'
                // },
                {
                    label: '操作',
                    slotName: 'handle',
                    minWidth: '20%'
                }
            ]
        }
    },
    created () {
        // this.$post('vmts/sys-city-config-param/findSysCityConfigParam', {
        //     data: {
        //         cityId: '440300'
        //     }
        // }).then(res => {
        //     this.form.paramEnterpriseCountdownDay = res.data.paramEnterpriseCountdownDay === null ? 10 : res.data.paramEnterpriseCountdownDay
        //     this.form.paramEnterpriseCountdownRemindDay = res.data.paramEnterpriseCountdownRemindDay === null ? 3 : res.data.paramEnterpriseCountdownRemindDay
        //     this.form.paramInquestCountdownAgainDay = res.data.paramInquestCountdownAgainDay === null ? 5 : res.data.paramInquestCountdownAgainDay
        //     this.form.paramInquestCountdownAgainRemindDay = res.data.paramInquestCountdownAgainRemindDay === null ? 5 : res.data.paramInquestCountdownAgainRemindDay
        //     this.form.paramInquestCountdownDay = res.data.paramInquestCountdownDay === null ? 180 : res.data.paramInquestCountdownDay
        //     this.form.paramInquestCountdownRemindDay = res.data.paramInquestCountdownRemindDay === null ? 10 : res.data.paramInquestCountdownRemindDay
        // })
        // // 配置信息
        // this.$post('vmts/sys-city-param/find', {
        //     data: {
        //         city: '440300',
        //         domain: location.host
        //         // domain: location.origin
        //     }
        // }).then(res => {
        //     if (res.status === 200 && res.data) {
        //         this.form.sysTitle = res.data.sysTitle
        //         this.form.sysLogo = res.data.sysLogo
        //         this.form.sysMainBgUrl = res.data.sysMainBgUrl
        //     } else {
        //         this.$message.error(res.message || '服务器错误')
        //     }
        // })
        // // 执法单位信息
        // this.unitList()
    },
    methods: {
        inputNumberBlur (dataName) {
            if (!/^\d+$/.test(this.form[dataName])) {
                this.$set(this.form, dataName, 0)
            }
        },
        unitList () {
            this.$post('/vmts/sys-governmental-agency/find', {}).then(res => {
                this.tableData = res.datas
            })
        },
        editUnit (item) {
            var form = { ...item }
            this.editId = form.agencyId
            this.form2 = form
            this.addAlert = true
        },
        deleteUnit (id) {
            this.$confirm('确认删除该执法单位吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('/vmts/sys-governmental-agency/delete', {
                    data: {
                        agencyId: id
                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.$message({
                            message: '删除成功！',
                            type: 'success'
                        })
                        this.unitList()
                    }
                })
            }).catch(() => {
            })
        },
        add () {
            this.addAlert = true
        },
        alertCancel () {
            this.editId = ''
            this.form2 = {
                agencyName: '',
                agencyShortName: '',
                agencyLinkName: '',
                agencyLinkTel: '',
                agencyLinkAddress: '',
                agencyRectificationNoticeNo: '',
                remark: ''
            }
            this.addAlert = false
        },
        alertOk () {
            this.$refs.form2.validate((valid) => {
                if (!valid) {
                    return
                }
                let type = 'add'
                if (this.editId) type = 'edit'
                this.$post('/vmts/sys-governmental-agency/' + type, {
                    data: {
                        ...this.form2
                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.$message.success(type === 'add' ? '添加成功' : '修改成功')
                        this.alertCancel()
                        this.unitList()
                    }
                })
            })
        },
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
        uploadSuccess (res) {
            if (res.status === 200) {
                this.form.imgLogo = res.data
                this.$message({
                    message: '图片上传成功！',
                    type: 'success'
                })
                this.form.sysLogo = res.data
                // this.imgLoad('licenseImg', 'imgLogo', res.data)
                //     .then(res => {
                //         this.$refs.form.validateField('imgLogo')
                //         this.$message({
                //             message: '图片上传成功！',
                //             type: 'success'
                //         })
                //     })
            }
        },
        uploadSuccess2 (res) {
            if (res.status === 200) {
                this.form.imgLogo2 = res.data
                this.$message({
                    message: '图片上传成功！',
                    type: 'success'
                })
                this.form.sysMainBgUrl = res.data
            }
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
        save () {
            if (this.tabIndex === 'tab2') {
                this.loading = true
                this.$post('vmts/sys-city-config-param/updateSysCityConfigParam', {
                    data: {
                        cityId: '440300',
                        ...this.form
                    }
                }).then(res => {
                    this.loading = false
                    if (res.status === 200) {
                        this.$message({
                            message: '请求成功',
                            type: 'success'
                        })
                    }
                }).catch(() => {
                    this.loading = false
                })
            } else if (this.tabIndex === 'tab1') {
                this.loading = true
                this.$post('vmts/sys-city-param/update', {
                    data: {
                        city: '440300',
                        domain: location.host,
                        ...this.form
                    }
                }).then(res => {
                    this.loading = false
                    if (res.status === 200) {
                        this.$message({
                            message: '请求成功',
                            type: 'success'
                        })
                    }
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.sz-setting {
    background: #ffffff;
    padding-bottom: 60px;
    min-height: 750px;
    h3 {
        font-size:16px;
        line-height: 40px;
        text-align: left;
        margin-bottom: 15px;
    }
    .img {
        width: 100px;
        height: 100px;
        padding: 6px;
        border: 1px solid #ddd;
        position: relative;
        cursor: pointer;
        img {
            cursor: pointer;
        }
        .file-input {
            display: none;
        }
        .empty {
            width: 100%;
        }
    }
     .img2 {
        width: 320px;
        height: 180px;
        padding: 6px;
        border: 1px solid #ddd;
        position: relative;
        cursor: pointer;
        img {
            cursor: pointer;
        }
        .file-input {
            display: none;
        }
        .empty {
            width: 100%;
        }
        img {
            width: 320px;
            height: 180px;
        }
    }
    .upload-demo2 {
        width: 320px;
        height: 180px;
    }
    .upload-demo {
        width: 100px;
        height: 100px;
    }
    .add-dep {
        padding-top: 30px;
        padding-bottom: 10px;
        .item {
            margin-bottom: 20px;
            // overflow: hidden;
            .title {
                float: left;
                width: 134px;
                line-height: 34px;
                text-align: right;
                color: #666;
                font-size: 14px;
            }
            .msg {
                margin-left: 134px;
                width: 300px;
                height: 34px;
            }
            &.textarea {
                .msg {
                    padding: 5px 0;
                    height: 75px;
                }
            }
            &:nth-last-child(2) {
                padding-bottom: 10px;
                margin-bottom: 30px;
            }
        }
        .btn {
            text-align: left;
            text-indent: 134px;
        }
    }
    .red {
        color: #ff0000;
    }
}
</style>

<style lang="less">
.sz-setting {
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
    .el-tabs__content {
        padding: 20px !important;
    }
    .el-form-item__label {
        text-align: right;
    }
    .el-upload {
        width: 100%;
        height: 100%;
    }
}
</style>
