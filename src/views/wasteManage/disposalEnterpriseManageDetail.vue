<template>
    <div id="vehicleFixDetail">
        <!-- <div class="page-title">企业信息</div> -->
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" labelPosition="top">
            <info-item title="企业信息">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="车辆单位名称" prop="name" class="form-item">
                            <el-input v-model="ruleForm.name" placeholder="请输入" maxlength="50"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="经营地址" prop="addr" class="form-item">
                            <el-input v-model="ruleForm.addr" placeholder="请输入" maxlength="50"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系电话" prop="phone" class="form-item">
                            <el-input v-model="ruleForm.phone" placeholder="请输入" maxlength="11"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="邮政编码" prop="zipcode" class="form-item">
                            <el-input v-model="ruleForm.zipcode" placeholder="请输入" maxlength="6"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="传真" prop="fax" class="form-item">
                            <el-input v-model="ruleForm.fax" placeholder="请输入" maxlength="25"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="电子邮箱" prop="email" class="form-item">
                            <el-input v-model="ruleForm.email" placeholder="请输入" maxlength="50"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </info-item>
        </el-form>
        <!-- <div class="content">
            <el-form :form="form" class="detail">
                <div class="base-info" >
                    <el-row>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>企业名称</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容" v-model="form.a"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>经验许可证</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容"
                                v-model="form.aa"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>许可证有效期</div>
                                <el-range-picker
                                style="width: 100%;"
                                v-decorator="['vehicleFixDate',{rules: [{ required: true, message: '请选择' }]}]"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>经营地址</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容"
                                v-decorator="['vehicleFixRepairName',{rules: [{ required: true, message: '请输入' }]}]"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>详细地址</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容"
                                v-decorator="['vehicleFixRepairName',{rules: [{ required: true, message: '请输入' }]}]"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>关联运输企业</div>
                                <el-select placeholder="请选择"
                                    v-decorator="['vehicleLicensePlateColor',{rules: [{ required: true, message: '请输入' }]}]">
                                    <el-select-option
                                        :value="item.value"
                                        v-for="item in [{value:1,label:'是'},{value:2,label:'否'}]"
                                        :key="item.value">
                                            {{item.label}}
                                    </el-select-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>经营状态</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容"
                                v-decorator="['vehicleFixRepairName',{rules: [{ required: true, message: '请输入' }]}]"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>联系人</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容"
                                v-decorator="['vehicleFixRepairName',{rules: [{ required: true, message: '请输入' }]}]"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :wrapperCol="{span: 18}">
                                <div class="item-name"><span class="red">*</span>联系电话</div>
                                <el-input
                                maxlength="30"
                                autocomplete="off"
                                placeholder="请输入内容"
                                v-decorator="['vehicleFixRepairName',{rules: [{ required: true, message: '请输入' }]}]"/>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div> -->
        <div v-for="(item,index) in wastList" :key="index">
            <div class="page-title">
                <h2>危险废物信息{{index+1}}</h2>
                <el-button type="primary" ghost icon="plus" class="fr" style="margin-top:10px;" @click="wastList.push({a:'',b:'',c:'',d:'',e:''})" v-if="!index">
                    新增一栏
                </el-button>
                <el-button type="danger" ghost icon="delete" class="fr" style="margin-top:10px;" @click="deleteList(index)" v-else>
                    删除
                </el-button>
            </div>
            <div class="content">
                <el-form :form="item" class="detail">
                    <div class="base-info" >
                        <el-row>
                            <el-col :span="8">
                                <el-form-item :wrapperCol="{span: 18}">
                                    <div class="item-name"><span class="red">*</span>废物类别</div>
                                    <el-select placeholder="请选择"
                                        style="width:80%;"
                                        v-model="item.a">
                                        <el-option
                                            :value="item.value"
                                            v-for="item in [{value:1,label:'固体'},{value:2,label:'液体'}]"
                                            :key="item.value">
                                                {{item.label}}
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :wrapperCol="{span: 18}">
                                    <div class="item-name"><span class="red">*</span>废物代码</div>
                                    <el-select placeholder="请选择" style="width:80%;"
                                        v-model="item.b">
                                        <el-option
                                            :value="item.value"
                                            v-for="item in [{value:1,label:'NN55'},{value:2,label:'NN99'}]"
                                            :key="item.value">
                                                {{item.label}}
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :wrapperCol="{span: 18}">
                                    <div class="item-name"><span class="red">*</span>处置方式大类</div>
                                    <el-select placeholder="请选择" style="width:80%;"
                                        v-model="item.c">
                                        <el-option
                                            :value="item.value"
                                            v-for="item in [{value:1,label:'燃烧'},{value:2,label:'掩埋'}]"
                                            :key="item.value">
                                                {{item.label}}
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :wrapperCol="{span: 18}">
                                    <div class="item-name"><span class="red">*</span>处置方式小类</div>
                                    <el-select placeholder="请选择" style="width:80%;"
                                        v-model="item.d">
                                        <el-option
                                            :value="item.value"
                                            v-for="item in [{value:1,label:'DD'},{value:2,label:'XX'}]"
                                            :key="item.value">
                                                {{item.label}}
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item :wrapperCol="{span: 21}">
                                    <div class="item-name"><span class="red">*</span>废物描述</div>
                                    <el-input
                                    maxlength="30"
                                    style="width:90%;"
                                    autocomplete="off"
                                    placeholder="请输入内容"
                                    v-model="item.e"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </div>
        </div>
        <bread-foot
            :breadArr="[{title:'固废物管理',path:''},{title:'处置企业管理',path:''},{title:'新增企业',path:''}]">
            <el-button @click="$router.back()" class="mr20">返回</el-button>
            <el-button class="mr20" type="primary" @click="save" :loading="showLoading">保存</el-button>
        </bread-foot>
    </div>
</template>

<script>
import InfoItem from '@/components/InfoItem'
import BreadFoot from '@/components/BreadFoot.vue'
// import UploadImage from '@/components/UploadImage'

import {
    plateColor,
    carTypeGuo,
    discharge,
    batteryType,
    technologyPowerType,
    brakingMode,
    brakeType,
    transmission,
    retarder
} from '@/utils/type.js'
export default {
    name: 'vehicleFixDetail',
    data () {
        return {
            ruleForm: {},
            wastList: [
                {
                    a: '',
                    b: '',
                    c: '',
                    d: '',
                    e: ''
                }
            ],
            showLoading: false,
            selectCar: {},
            fetching: false,
            vehicleId: '',
            data: [],
            plateColor,
            carTypeGuo,
            discharge,
            batteryType,
            technologyPowerType,
            brakingMode,
            brakeType,
            transmission,
            retarder,
            uploadURL: window.uploadURL,
            form: {},
            fixInfo: {},
            projectTable: [],
            partsTable: []
        }
    },
    components: {
        InfoItem,
        BreadFoot
    },
    created () {
        // this.view()
        // this.handleSearch('')
    },
    methods: {
        deleteList (index) {
            this.wastList = this.wastList.slice(0, index).concat(this.wastList.slice(index + 1, this.wastList.length))
        },
        handleSearch (value) {
        },
        handleChange (value) {
        },
        save () {
            this.$message.success('保存成功')
            this.$router.back()
        },
        view () {
            // if (!this.$checkAuth('statistics:vehiclerepairdesc:list,statistics:vehiclerepairdesc:info')) {
            //     this.$message.error('您没有该权限')
            //     return
            // }
            this.$get('/statistics/vehiclerepairdesc/info?vehicleFixId=' + this.$route.query.id)
                .then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 200) {
                            this.fixInfo = res.data.data
                        }
                    }
                })
        }
    }
}
</script>

<style lang='less' scoped>
#vehicleFixDetail {
    background: #fff;
    margin-bottom:30px;
    height: 100%;
    overflow: auto;
    .form-item {
        width: 80%;
    }
    .content {
        border-bottom: 20px solid #EFF2F5;
        .form {
            .item-name {
                line-height: 32px;
            }
            .input {
                width: 100%;
            }
            .avatar-uploader {
                display: block;
            }
            .upload-tips {
                margin: 0;
                float: none;
                text-align: center;
                width: 104px;
                font-size: 12px;
            }
        }
        .base-info {
            padding: 24px;
        }
        .project {
            padding: 0px 24px 32px 24px;
            .image-item {
                display: inline-block;
                margin-right: 24px;
            }
        }
        .parts {
            padding: 0px 32px 32px 32px;
        }
        .title {
            padding: 16px 0px 4px 0;
            font-size: 15px;
            line-height: 32px;
            color: #333;
            font-weight: bold;
        }
        .row {
            margin-bottom: 16px;
        }
        .label {
            color: #333;
            display: inline-block;
        }
        .value {
            color: #666;
            display: inline-block;
        }
    }
}
</style>
<style lang="less">
.ant-form-item-label label {
    color: #293140;
}
</style>
