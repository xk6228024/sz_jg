<!-- 车辆挂靠合同管理 -->
<template>
    <div class="vehicleContract tsDetail">
        <div class="content">
            <el-tabs type="card" v-model="tabIndex" @tab-click="changeTabs">
                <el-tab-pane label="企业信息" name="tab1" class="basic-info clearfix">
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" labelPosition="top">
                        <info-item title="企业信息">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="企业名称" prop="name" class="form-item">
                                        <el-input v-model="ruleForm.name" placeholder="请输入" maxlength="50" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="经营许可证" prop="addr" class="form-item">
                                        <el-input v-model="ruleForm.addr" placeholder="请输入" maxlength="50" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="许可证有效期" prop="phone" class="form-item">
                                        <el-date-picker
                                            v-model="ruleForm.ss"
                                            type="daterange"
                                            align="right"
                                            unlink-panels
                                            size="small"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            >
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="经营地址" prop="zipcode" class="form-item">
                                        <el-input v-model="ruleForm.zipcode" placeholder="请输入" maxlength="6" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="详细地址" prop="fax" class="form-item">
                                        <el-input v-model="ruleForm.fadx" placeholder="请输入" maxlength="25" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="关联运输企业" prop="email" class="form-item">
                                        <el-select v-model="ruleForm.emaail" placeholder="请输入" maxlength="50" style="width:100%;" size="small"></el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="经营状态" prop="zipcode" class="form-item">
                                        <el-input v-model="ruleForm.zipscode" placeholder="请输入" maxlength="6" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="联系人" prop="fax" class="form-item">
                                        <el-input v-model="ruleForm.facx" placeholder="请输入" maxlength="25" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="联系电话" prop="fax" class="form-item">
                                        <el-input v-model="ruleForm.fqqax" placeholder="请输入" maxlength="25" size="small"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </info-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="车辆信息" name="tab2" class="basic-info clearfix">
                    <div style="line-height:60px;text-align:right;">
                        <el-button @click.stop="" class="mr20">导入</el-button>
                        <el-button @click.stop="" class="mr20">导出</el-button>
                        <el-button @click.stop="" class="mr20" type="primary" @click="showAlert=!showAlert">新建车辆</el-button>
                    </div>
                    <div class="table-common">
                        <el-table
                            :header-cell-style="{'background': '#FAFAFA'}"
                            :data="tableData"
                            border
                            style="width: 100%;">
                            <el-table-column
                            prop="a"
                            align="center"
                            label="序号"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            prop="b"
                            align="center"
                            label="车牌号码">
                            </el-table-column>
                            <el-table-column
                            prop="c"
                            align="center"
                            label="车牌颜色">
                            </el-table-column>
                            <el-table-column
                            prop="d"
                            align="center"
                            label="车辆类型">
                            </el-table-column>
                            <el-table-column
                            prop="e"
                            align="center"
                            label="VIN码">
                            </el-table-column>
                            <el-table-column
                            prop="f"
                            align="center"
                            label="道路运输证">
                            </el-table-column>
                            <el-table-column
                            prop="g"
                            align="center"
                            label="有效期结束时间">
                            </el-table-column>
                            <el-table-column
                            prop="h"
                            align="center"
                            label="更新时间">
                            </el-table-column>
                            <el-table-column
                            prop="i"
                            align="center"
                            label="修改人">
                            </el-table-column>
                            <el-table-column
                            prop="f"
                            align="center"
                            label="操作">
                                <template slot-scope="scope">
                                    <span :value="scope.row.date" class="primary-color curp pointer" @click="showAlert=!showAlert">编辑</span>
                                    &nbsp;&nbsp;
                                    <span class="error-color curp pointer" @click="deleteContract">删除</span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                            style="margin-top: 16px;"
                            @size-change="handleSizeChange"
                            @current-change="handlePageChange"
                            :current-page="pageNum"
                            :page-sizes="[10, 15, 20]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next, sizes,  jumper, total"
                            :total="50">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="账号信息" name="tab3" class="basic-info clearfix">
                    <div style="line-height:60px;text-align:right;">
                        <!-- <el-button @click.stop="" class="mr20">导入</el-button>
                        <el-button @click.stop="" class="mr20">导出</el-button> -->
                        <el-button @click.stop="" class="mr20" type="primary" @click="showAlert2=!showAlert2">新建账号</el-button>
                    </div>
                    <div class="table-common">
                        <el-table
                            :header-cell-style="{'background': '#FAFAFA'}"
                            :data="tableDat2"
                            border
                            style="width: 100%;">
                            <el-table-column
                            prop="a"
                            align="center"
                            label="序号"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            prop="b"
                            align="center"
                            label="手机号码">
                            </el-table-column>
                            <el-table-column
                            prop="c"
                            align="center"
                            label="用户姓名">
                            </el-table-column>
                            <el-table-column
                            prop="d"
                            align="center"
                            label="更新时间">
                            </el-table-column>
                            <el-table-column
                            prop="e"
                            align="center"
                            label="修改人">
                            </el-table-column>
                            <el-table-column
                            prop="f"
                            align="center"
                            label="操作">
                                <template slot-scope="scope">
                                    <span :value="scope.row.date" class="primary-color curp pointer" @click="showAlert2=!showAlert2">编辑</span>
                                    &nbsp;&nbsp;
                                    <span class="error-color curp pointer" @click="deleteContract">删除</span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                            style="margin-top: 16px;"
                            @size-change="handleSizeChange"
                            @current-change="handlePageChange"
                            :current-page="pageNum"
                            :page-sizes="[10, 15, 20]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next, sizes,  jumper, total"
                            :total="50">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button @click="$router.back()" class="mr20">返回</el-button>
            <el-button class="mr20" type="primary" @click="save">保存</el-button>
        </bread-foot>
        <modal title="新增车辆信息"
            :alert="showAlert"
            :width="800"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="add-dep" style="padding:20px;">
                <el-row>
                    <el-col :span="12">
                        <div class="item">
                            <label for=""><i class="important">*</i>车牌号码：</label>
                            <el-input class="tool_ipt" maxlength="20" v-model="formData.a" placeholder="请输入" size="small"></el-input>
                        </div>
                        <div class="item">
                            <label for=""><i class="important">*</i>车牌颜色：</label>
                            <el-input class="tool_ipt" maxlength="16" v-model="formData.b" placeholder="请输入" size="small">
                           </el-input>
                        </div>
                        <div class="item">
                            <label for=""><i class="important">*</i>车辆类型：</label>
                            <el-select class="tool_ipt" maxlength="16" v-model="formData.b" placeholder="请输入" size="small" style="w">
                           </el-select>
                        </div>
                        <div class="item">
                            <label for=""><i class="important">*</i>VIN码：</label>
                            <el-input class="tool_ipt" maxlength="16" v-model="formData.b" placeholder="请输入" size="small">
                           </el-input>
                        </div>
                        <div class="item">
                            <label for=""><i class="important">*</i>道路运输证：</label>
                            <el-input class="tool_ipt" maxlength="16" v-model="formData.b" placeholder="请输入" size="small">
                           </el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="clearfix">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                        <p style="font-size:14px;color:#666;line-height:45px;padding-left:30px;">
                            <span>车辆左侧45度彩照</span>
                            <span style="margin-left:100px;">行驶证</span>
                        </p>
                        <p style="font-size:14px;color:#999;padding-left:30px;">支持png/jpg格式, 图片小于5M</p>
                    </el-col>
                </el-row>
                <div class="btn-box">
                    <button class="next-btn btn1" @click="alertConfirm">确定</button>
                    <button class="close-btn btn2" @click="alertCancel">取消</button>
                </div>
            </div>
        </modal>
        <modal title="账号信息"
            :alert="showAlert2"
            @alertCancel="alertCancel2"
            :width="480">
            <div class="add-dep" style="padding:20px;">
                <div class="item">
                    <label for=""><i class="important">*</i>姓名：</label>
                    <el-input class="tool_ipt" maxlength="20" v-model="formData2.a" placeholder="请输入" size="small"></el-input>
                </div>
                <div class="item">
                    <label for=""><i class="important">*</i>手机号码：</label>
                    <el-input class="tool_ipt" maxlength="20" v-model="formData2.b" placeholder="请输入" size="small"></el-input>
                </div>
                <div class="item">
                    <label for=""><i class="important">*</i>密码：</label>
                    <el-input class="tool_ipt" maxlength="20" type="passwords"  v-model="formData2.c" placeholder="请输入" size="small">
                        <template slot="append">
                            <span class="pointer" @click="$message.success('重置成功')">重置</span>
                        </template>
                    </el-input>
                </div>
                <div class="item">
                    <label for=""><i class="important">*</i>状态：</label>
                    <el-radio v-model="formData2.d" label="1">启用</el-radio>
                    <el-radio v-model="formData2.d" label="2">禁用</el-radio>
                </div>
                <p style="color:#999;line-height:30px;font-size:14px;">提示：1,当前创建账号为APP用户登录账号</p>
                <p style="color:#999;line-height:30px;text-indent:3rem;font-size:14px;">2,初次创建无需重置密码，保存后将以短信通知密码</p>
                <div class="btn-box">
                    <button class="next-btn btn1" @click="alertConfirm2">确定</button>
                    <button class="close-btn btn2" @click="alertCancel2">取消</button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import Search from '@/components/search/index'
import Modal from '@/components/Modal.vue'
import { plateColor } from '@/utils/type.js'

export default {
    name: 'vehicleContract',
    data () {
        return {
            imageUrl: '',
            formData: {
                a: '',
                b: '',
                c: '',
                d: '',
                e: ''
            },
            formData2: {
                a: '',
                b: '',
                c: '',
                d: '1',
                e: ''
            },
            showAlert2: false,
            showAlert: false,
            ruleForm: {},
            tabIndex: 'tab1',
            breadArr: [
                { title: '固废物管理', path: '' },
                { title: '运输企业管理', path: '' },
                { title: '编辑', path: '' }
            ],
            searchValue: {},
            plateColor,
            searchContractType: '',
            searchPlateColor: '',
            searchDate: '',
            visible: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [
                {
                    a: 1,
                    b: '晋A1SS212',
                    c: '蓝色',
                    d: '大型货车',
                    e: 'LFF11299092130',
                    f: '321312321',
                    g: '2020-02-21',
                    h: '2020-01-01',
                    i: '李华'
                },
                {
                    a: 2,
                    b: '晋A1SS212',
                    c: '蓝色',
                    d: '大型货车',
                    e: 'LFF11299092130',
                    f: '321312321',
                    g: '2020-02-21',
                    h: '2020-01-01',
                    i: '李华'
                },
                {
                    a: 3,
                    b: '晋A1SS212',
                    c: '蓝色',
                    d: '大型货车',
                    e: 'LFF11299092130',
                    f: '321312321',
                    g: '2020-02-21',
                    h: '2020-01-01',
                    i: '李华'
                }
            ],
            tableDat2: [
                {
                    a: 1,
                    b: 13265454533,
                    c: '矛盾',
                    d: '2020-05-6',
                    e: '方宏'
                },
                {
                    a: 2,
                    b: 13265454533,
                    c: '老舍',
                    d: '2020-05-6',
                    e: '罗素'
                },
                {
                    a: 3,
                    b: 13265454533,
                    c: '罗兰德',
                    d: '2020-05-6',
                    e: '晓霞'
                }
            ],
            form: {},
            num: 1,
            deleteVisible: false
        }
    },
    components: {
        Modal,
        BreadFoot,
        Search
    },
    methods: {
        save () {
            this.$message.success('保存成功')
            this.$router.back()
        },
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        },
        alertConfirm2 () {
            this.alertCancel2()
        },
        alertCancel2 () {
            this.showAlert2 = false
        },
        changeTabs () {},
        searchData () {},
        // 选择车牌颜色
        plateColorChange (e) {
            console.log(e)
        },
        // 多选事件
        handleSelectionChange () {},
        // 修改每页数量
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
        },
        // 翻页
        handlePageChange (val) {
            console.log(val)
        },
        handleOk () {
            this.form.validateFields(
                (err, values) => {
                    if (!err) {
                        console.info(values)
                        this.visible = false
                    }
                }
            )
        },
        handleDeleteOk () {
            this.deleteVisible = false
        },
        // 进入编辑页面
        editDetail () {
            this.$router.push('/transportationEnterpriseDetail')
        },
        // 删除合同
        deleteContract () {
            this.$message.success('删除成功')
        },
        handleAvatarSuccess (res, file) {
            this.imageUrl = URL.createObjectURL(file.raw)
        },
        beforeAvatarUpload (file) {
            const isJPG = file.type === 'image/jpeg'
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        }
    }
}
</script>
<style lang="less">
    .tsDetail {
        .item {
            margin-bottom: 20px;
            label {
                line-height: 36px;
                display: inline-block;
                width: 120px;
                text-align: right;
            }
            .tool_ipt {
                width: 260px;
            }
        }
        .form-item {
            width: 80%;
        }
        .el-tabs__content {
            padding: 20px;
        }
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
            // width: 100%;
            // height: 152px;
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
    .btn-box {
        text-align: center;
        margin: 20px 0 40px 0;
        button {
            width: 98px;
            height: 34px;
            border-radius: 4px;
            cursor: pointer;
            outline: none;
        }
        .btn1 {
            background: #359dff;
            color: #ffffff;
            border: none;
            margin-right: 20px;
        }
        .btn2 {
            border: 1px solid #dbdbdb;
            background: #ffffff;
        }
    }
    .avatar-uploader .el-upload {
        float: left;
        margin-left: 30px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 140px;
        height: 140px;
        line-height: 140px;
        text-align: center;
    }
    .avatar {
        width: 140px;
        height: 140px;
        display: block;
    }
</style>
