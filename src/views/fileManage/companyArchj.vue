<!-- 企业档案 -->
<template>
    <div class="companyArch">
        <!-- <tool-bar>
        </tool-bar> -->
        <div class="content">
            <!-- <div class="sidebar">
                <div class="side_item" @click="select(item.enterpriseTypeId)" :class="{active: item.enterpriseTypeId == chooseId}" v-for="item in sideList" :key="item.enterpriseTypeId">{{item.enterpriseTypeName}}</div>
            </div> -->
            <div class="wrap1">
                <div class="clearfix table_top table_tap_pad">
                    <div class="table_top_l clearfix" :class="{'arrow-active': ArrowActive}">
                        <div class="table_top_ls">
                            <label>企业名称：</label>
                            <el-input clearable v-model="enterpriseName" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="table_top_ls">
                            <label v-if="chooseId==='1'">经营类别：</label>
                            <el-select v-if="chooseId==='1'" clearable v-model="enterpriseBusinessCategory" placeholder="请选择">
                                <el-option
                                v-for="item in bussinessCategory"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="table_top_ls">
                            <label>所在区域：</label>
                            <el-select v-model="region" placeholder="请选择" clearable>
                                <el-option
                                v-for="item in regionList"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                                </el-option>
                            </el-select>
                        </div>
                        <!-- <div class="table_top_ls" v-if="ArrowActive">
                            <label>发证机关：</label>
                            <el-select  class="tool_ipt" v-model="unitCertificateNane" clearable placeholder="请选择">
                                <el-option
                                v-for="item in certificateList"
                                :key="item.value"
                                :label="item.unitCertificateName"
                                :value="item.unitCertificateId">
                                </el-option>
                            </el-select>
                        </div> -->
                        <div class="table_top_ls" v-if="ArrowActive">
                            <label>备案号生成：</label>
                            <el-select  class="tool_ipt" v-model="enterpriseIsAudit" clearable placeholder="请选择">
                                <el-option
                                v-for="item in recordNumberTypeList"
                                :key="item.value"
                                :label="item.name"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="table_top_lr fr">
                            <!-- <el-button class="search_btn" type="primary" icon="el-icon-search" @click="findenterprisebytype(1)"></el-button>
                            <el-button class="add_btn" icon="el-icon-add" @click="addCompArch" v-if="chooseId!=='3'">
                                <img src="../../assets/images/iocn_add.png" alt="">
                                <span v-if="chooseId==='1'">维修企业建档</span>
                                <span v-if="chooseId==='2'">检测企业建档</span>
                            </el-button> -->
                            <el-button type="text" v-if="ArrowActive" @click="toArrowActive">收起 <i class="el-icon-arrow-up"></i></el-button>
                            <el-button type="text" v-if="!ArrowActive" @click="toArrowActive">展开 <i class="el-icon-arrow-down"></i></el-button>
                            <el-button class="query_btn slects_btn" @click="findenterprisebytype(1)" :disabled="!$checkAuth('manage:enterprise:findj')">查询</el-button>
                            <el-button class="react_btn" @click="toReact(1)">重置</el-button>
                        </div>
                    </div>
                </div>
                <div class="table_box">
                    <el-table
                        :data="tableData3"
                        v-loading="tableloading"
                        height="580"
                        border
                        :header-cell-style="{'text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="">
                    <el-table-column
                        prop="a1"
                        label="序号"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        prop="a2"
                        :show-overflow-tooltip='true'
                        label="企业名称">
                    </el-table-column>
                    <el-table-column
                        prop="a3"
                        label="所属区域">
                    </el-table-column>
                    <el-table-column
                        prop="a4"
                        key="enterpriseJcGrade"
                        :show-overflow-tooltip='true'
                        label="企业等级">
                    </el-table-column>
                    <!-- <el-table-column
                        prop="a5"
                        :show-overflow-tooltip='true'
                        label="经营类别">
                    </el-table-column> -->
                    <el-table-column
                        prop="a6"
                        label="备案号生成">
                    </el-table-column>
                    <el-table-column
                        prop="a7"
                        :show-overflow-tooltip='true'
                        label="备案号">
                    </el-table-column>
                    <el-table-column
                        v-if="a8"
                        prop="enterpriseLinkName"
                        :show-overflow-tooltip='true'
                        label="联系人">
                    </el-table-column>
                    <el-table-column
                        v-if="a9"
                        prop="enterpriseLinkMobile"
                        :show-overflow-tooltip='true'
                        label="联系电话">
                    </el-table-column>
                    <el-table-column
                        prop="detail"
                        label="操作"
                        width="170">
                        <template slot-scope="scope">
                            <!-- <span @click="certificateAlert=true;chooseEId=scope.row.enterpriseId;certificateId=scope.row.unitCertificateId">发证机关</span>&nbsp;&nbsp; -->
                            <el-button type="text" size="small" @click="toDetail(scope.row.enterpriseId)">详情</el-button>
                            <el-button type="text" size="small" @click="openPortAlert(scope.row)" v-if="chooseId === '1'">接口</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
                    <div class="page_box">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="pageNum"
                            :page-sizes="[10, 15, 20]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next, sizes,  jumper, total"
                            :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal :title="'数据接口账号密码设置'" :alert="alert" @alertCancel="alertCancel" :width="800" :height="320" class="port-alert clearfix">
            <div class="province fl">
                <h5>省级平台接口</h5>
                <div class="info-item">
                    <div class="left">
                        企业编码：
                    </div>
                    <div class="right">
                        <el-input v-model="provinceOrder" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="info-item">
                    <div class="left">
                        上传密码：
                    </div>
                    <div class="right">
                        <el-input v-model="provincePsw" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="btn">
                    <el-button class="apply" @click="provinceApply" type="primary" v-if="!provincePsw && !provinceOrder">申请</el-button>
                    <el-button type="primary" icon="el-icon-tickets" @click="accountEntry('province')" v-if="(provincePsw || provinceOrder) && provinceSave">保存</el-button>
                </div>
            </div>
            <div class="city fr">
                <h5>市级平台接口</h5>
                <div class="info-item">
                    <div class="left">
                        企业编码：
                    </div>
                    <div class="right">
                        <el-input v-model="cityOrder" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="info-item">
                    <div class="left">
                        上传密码：
                    </div>
                    <div class="right">
                        <el-input v-model="cityPsw" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="btn">
                    <el-button v-if="!enterpriseCityUser" type="primary" @click="accountEntry('city')">生成账号</el-button>
                </div>
            </div>
        </modal>
        <modal
            class="import-alert"
            :width="600"
            :height="400"
            :alert="importAlert"
            @alertCancel="importAlertCancel"
            :title="'提示'">
            <div v-html="importAlertCont" class="import-alert-cont"></div>
        </modal>
        <modal
            class="import-alert"
            :width="400"
            :alert="certificateAlert"
            @alertCancel="certificateCancel"
            :title="'发证机关'">
                <div class="certificateModel">
                <div class="selectBox">
                    <label for=""><span>*</span>发证机关:</label>
                    <el-select  class="tool_ipt" v-model="certificateId"  placeholder="请选择">
                        <el-option
                        v-for="item in certificateList"
                        :key="item.value"
                        :label="item.unitCertificateName"
                        :value="item.unitCertificateId">
                        </el-option>
                    </el-select>
                </div>
                <span class="btn">
                    <el-button type="primary" @click="certificateSure">确定</el-button>
                    <el-button @click="certificateCancel">取消</el-button>
                </span>
            </div>
        </modal>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <el-button type="primary" @click="addCompArch" v-if="chooseId==='1'">维修企业建档</el-button>
            <el-button type="primary" @click="addCompArch" v-if="chooseId==='2'" :disabled="!$checkAuth('manage:enterprise:addinspectent')">检测企业建档</el-button>
        </bread-foot>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import BreadFoot from '@/components/BreadFoot.vue'
import ToolBar from '@/components/ToolBar.vue'
import { jcGradeList, bussinessCategory } from '@/utils/type.js'
import upload from '@/components/upload.vue'
import { CodeToText } from 'element-china-area-data'
import { getCookie } from '@/utils/cookie.js'
export default {
    name: 'companyArch',
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '检测企业档案', path: '' }
            ],
            tableloading: false,
            ArrowActive: true, // 展开
            enterpriseIsAudit: '', // 备案状态
            recordNumberTypeList: [
                { value: 0, name: '否' },
                { value: 1, name: '是' }
            ],
            unitCertificateNane: '', // f发证机关
            chooseEId: '', // 选择的id
            certificateId: '', // 发证机关id
            certificateList: [], // 发证机关列表
            certificateAlert: '', // 发证机关弹窗
            smallWindow: false,
            templateDown: '',
            importAlert: false,
            loading: false,
            importAlertCont: '',
            enterpriseBusinessCategory: '',
            provinceOrder: '', // 省企业编码
            provincePsw: '', // 省密码
            cityOrder: '', // 市企业编码
            cityPsw: '', // 市密码
            alert: false,
            sideList: [],
            // regionList: [], // 区域列表
            region: '', // 所选区域
            enterpriseName: '',
            carVin: '',
            jcGradeList,
            bussinessCategory,
            pageNum: 1,
            pageSize: 10,
            total: 10,
            provinceSave: true,
            provinceApplySend: false, // 省平台申请防重复提交
            chooseId: '2', // 选中的id
            tableData3: [
                {
                    a1: 1,
                    a2: '山西聚合运检测技术有限责任公司',
                    a3: '尖草坪区',
                    a4: '一类',
                    a5: '二类',
                    a6: '是',
                    a7: '955121545',
                    a8: '民族大道79号鼎丰物流园3栋1楼'
                },
                {
                    a1: 2,
                    a2: '太原市旺海机动车检测有限公司',
                    a3: '万柏林区',
                    a4: '二类',
                    a5: '二类',
                    a6: '是',
                    a7: '77512199',
                    a8: '大新路88号'
                },
                {
                    a1: 3,
                    a2: '东方汽车综合性能检测站',
                    a3: '迎泽区',
                    a4: '一类',
                    a5: '二类',
                    a6: '是',
                    a7: '31512199',
                    a8: '创业路199号'
                },
                {
                    a1: 4,
                    a2: '清徐县通运检测站',
                    a3: '清徐县',
                    a4: '一类',
                    a5: '二类',
                    a6: '是',
                    a7: '31512199',
                    a8: '创业路199号'
                },
                {
                    a1: 5,
                    a2: '古交市晋康机动车检测服务有限公司',
                    a3: '古交市',
                    a4: '一类',
                    a5: '二类',
                    a6: '是',
                    a7: '31512199',
                    a8: '创业路199号'
                }
            ],
            roleExtEnterpriseLinkpersonIsview: 0,
            enterpriseId: '',
            enterpriseCityUser: '',
            enterpriseCityPass: ''
        }
    },
    components: {
        BreadFoot,
        ToolBar,
        Modal,
        upload
    },
    computed: {
        regionList () {
            return this.$store.state.regionList
        }
    },
    created () {
        // this.getRegisterTypeFind()
        // this.findLoginRegion()
        if (this.$route.query.regionName) {
            this.tableData3 = this.$filterRegion(this.tableData3, 'a3', this.$route.query.regionName)
        }
        // this.getCerList()
        this.chooseId = '2'
        try {
            var user = JSON.parse(getCookie('user'))
            this.roleExtEnterpriseLinkpersonIsview = user.roleExtEnterpriseLinkpersonIsview
        } catch (e) {
            this.roleExtEnterpriseLinkpersonIsview = 0
        }
    },
    mounted () {
        if (document.body.clientWidth < 1480) {
            this.smallWindow = true
        } else {
            this.smallWindow = false
        }
        window.onresize = () => {
            if (document.body.clientWidth < 1480) {
                this.smallWindow = true
            } else {
                this.smallWindow = false
            }
        }
    },
    methods: {
        // 获取发证机关列表
        getCerList () {
            this.$post('bas/unit/certificate/list', {}).then(res => {
                if (res.status === 200) {
                    this.certificateList = res.data
                }
            }).catch(err => {
                console.log(err)
            })
        },
        // 发证机关确定
        certificateSure (id) {
            if (!this.$checkAuth('bas:enterprise:register:bindunitcertificate')) {
                this.$alert('没有权限！', '提示')
                return
            }
            if (!this.certificateId) {
                this.$alert('请选择发证机关', '提示')
                return
            }
            this.$post('bas/enterprise/register/bindunitcertificate', {
                unitCertificateId: this.certificateId,
                data: {
                    enterpriseId: this.chooseEId
                }
            }).then(res => {
                if (res.status === 200) {
                    this.certificateAlert = false
                    this.certificateId = ''
                    this.getRegisterTypeFind()
                    this.findenterprisebytype()
                }
            }).catch(err => {
                console.log(err)
            })
        },
        // 发证机关关闭
        certificateCancel () {
            this.certificateId = ''
            this.certificateAlert = false
        },
        // 获取下载模板
        getTemplateDown () {
            window.open(window.uploadURL + 'download/fixEnterpriseTemplate')
        },
        // 导入错误弹窗
        importAlertCancel () {
            this.importAlert = false
        },
        // 上传成功后
        uploadSuccess (data) {
            this.$post('bas/enterprise/register/saveCSVByEnterprise', {
                url: data.data
            }).then(res => {
                if (res.status === 200) {
                    this.$toast({
                        msg: '导入成功'
                    })
                    this.findenterprisebytype()
                } else {
                    this.importAlert = true
                    this.importAlertCont = res.message
                }
                this.loading = false
            })
        },
        // 上传之前
        beforeUpload (file) {
            const type = /.+(\.xls)|(\.xlsx)$/.test(file.name)
            const size = file.size / 1024 / 1024 < 8
            !type && this.$message.error('模板仅支持xls/xlsx格式文件！')
            !size && this.$message.error('模板大小不能超过8M！')
            type && size && (this.loading = true)
            return type && size
        },
        // 企业建档
        addCompArch () {
            var path = ''
            this.chooseId === '1' && (path = '/compArchDetailw')
            this.chooseId === '2' && (path = '/testingArchDetail')
            this.$router.push(path)
        },
        // 查看详情
        toDetail (id) {
            if (!this.$checkAuth('manage:enterprise:viewj')) {
                this.$alert('没有查询权限！', '提示')
                return
            }
            var path = ''
            this.chooseId === '1' && (path = '/compArchDetailw?id=')
            this.chooseId === '2' && (path = '/testingArchDetail?id=')
            path = path + id
            this.$router.push(path)
        },
        // 省平台申请账号
        provinceApply () {
            if (this.provinceApplySend) {
                return
            }
            this.provinceApplySend = true
            this.$post('manage/enterprise/findEnterpriseProvinceUserApply', {
                data: {
                    enterpriseId: this.enterpriseId
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        this.provinceOrder = res.data.enterpriseProvinceUser
                        this.provincePsw = res.data.enterpriseProvincePass
                        this.$toast({
                            msg: '申请账号密码成功'
                        })
                        this.provinceSave = false
                        this.findenterprisebytype()
                    } else {
                        if (res.datas) {
                            var str = ''
                            for (var key in res.datas[0]) {
                                str = str + res.datas[0][key]
                            }
                            this.$alert(str, '提示')
                        } else if (res.message) {
                            try {
                                this.$alert(JSON.parse(res.message).status, '提示')
                            } catch (e) {
                                console.log(res.message)
                            }
                        } else {
                            this.$alert('请求失败', '提示')
                        }
                    }
                    this.provinceApplySend = false
                })
                .catch(e => {
                    console.log(e)
                    this.provinceApplySend = false
                })
        },
        // 账号录入
        accountEntry (type) {
            var obj = {
                data: {
                    enterpriseId: this.enterpriseId
                }
            }
            if (type === 'province') {
                if (!this.provinceOrder || !this.provincePsw) {
                    this.$alert('企业编码和上传密码不能为空！', '提示')
                    return
                }
                if (this.provinceApplySend) {
                    return
                }
                this.provinceApplySend = true
                obj.data.enterpriseProvinceUser = this.provinceOrder
                obj.data.enterpriseProvincePass = this.provincePsw
                this.$post('manage/enterprise/updatePassProvince', obj)
                    .then(res => {
                        if (res.status === 200) {
                            this.$alert('录入成功！', '提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                }
                            })
                            this.provinceSave = false
                            this.findenterprisebytype()
                        }
                        this.provinceApplySend = false
                    })
                    .catch(e => {
                        console.log(e)
                        this.provinceApplySend = false
                    })
            }
            if (type === 'city') {
                if (this.provinceApplySend) {
                    return
                }
                this.provinceApplySend = true
                this.$post('manage/enterprise/updatePassCity', obj)
                    .then(res => {
                        if (res.status === 200) {
                            this.enterpriseCityUser = res.data.enterpriseCityUser
                            this.cityOrder = res.data.enterpriseCityUser
                            this.cityPsw = res.data.enterpriseCityPass
                            this.$toast({
                                msg: '生成账号密码成功'
                            })
                            this.findenterprisebytype()
                        } else {
                            this.$alert(res.message, '提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.provinceOrder = ''
                                    this.provincePsw = ''
                                    this.cityOrder = ''
                                    this.cityPsw = ''
                                }
                            })
                        }
                        this.provinceApplySend = false
                    })
                    .catch(e => {
                        console.log(e)
                        this.provinceApplySend = false
                    })
            }
        },
        // 获取区域
        findLoginRegion () {
            this.$post('bas/city/findRegionByDomainCity', {})
                .then(res => {
                    if (res.status === 200) {
                        // res.datas.unshift({
                        //     regionId: 'all',
                        //     regionName: '全部区域'
                        // })
                        this.regionList = res.datas
                    }
                })
        },
        // 接口申请弹窗
        openPortAlert (item) {
            this.enterpriseId = item.enterpriseId
            if (item.enterpriseCityUser) {
                this.enterpriseCityPass = item.enterpriseCityPass
                this.enterpriseCityUser = item.enterpriseCityUser
                this.cityPsw = item.enterpriseCityPass
                this.cityOrder = item.enterpriseCityUser
            }
            if (item.enterpriseProvinceUser) {
                this.provinceOrder = item.enterpriseProvinceUser
                this.provincePsw = item.enterpriseProvincePass
                this.provinceSave = false
            } else {
                this.provinceSave = true
            }
            this.alert = true
        },
        // 关闭弹窗
        alertCancel () {
            this.provinceOrder = ''
            this.provincePsw = ''
            this.cityOrder = ''
            this.cityPsw = ''
            this.enterpriseCityPass = ''
            this.enterpriseCityUser = ''
            this.alert = false
        },
        // 获取企业档案列表
        findenterprisebytype (clear) {
            if (!this.$checkAuth('manage:enterprise:findj')) {
                this.$alert('没有查询权限！', '提示')
                return
            }
            if (clear) {
                this.pageNum = 1
            }
            var obj = {
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            obj.data = {}
            if (this.enterpriseIsAudit) {
                obj.data.enterpriseIsAudit = this.enterpriseIsAudit
            } else {
                obj.data.enterpriseIsAudit = 0
            }
            if (this.chooseId) {
                obj.data.enterpriseTypeId = this.chooseId
            }
            if (this.enterpriseName) {
                obj.data.enterpriseName = this.enterpriseName
            }
            if (this.region) {
                obj.data.enterpriseRegion = this.region
            }
            if (this.chooseId - 0 === 1 && this.enterpriseBusinessCategory) {
                obj.data.enterpriseBusinessCategory = this.enterpriseBusinessCategory
            }
            // this.tableloading = true
            this.$post('manage/enterprise/findauditedent', obj)
                .then(res => {
                    if (res.status === 200) {
                        res.data.list.forEach((item, index) => {
                            let ind = ((this.pageNum - 1) * this.pageSize) + index + 1
                            item.index = ind < 10 ? '0' + ind : ind
                            for (var i = 0; i < this.regionList.length; i++) {
                                if (this.regionList[i].regionId === item.enterpriseRegion) {
                                    item.enterpriseRegion = this.regionList[i].regionName
                                }
                            }
                            if (!isNaN(item.enterpriseRegion)) {
                                item.enterpriseRegion = CodeToText[item.enterpriseRegion]
                            }
                        })
                        this.tableData3 = res.data.list
                        this.total = res.data.total
                    } else {
                        this.$alert(res.message, '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                            }
                        })
                    }
                    this.tableloading = false
                })
                .catch(err => {
                    this.tableloading = false
                    console.log(err)
                })
        },
        // 获取企业档案类型
        getRegisterTypeFind () {
            this.$post('bas/enterprise/register/type/find', {})
                .then(res => {
                    if (res.status === 200) {
                        this.sideList = res.enterpriseTypeList
                        this.findenterprisebytype()
                    }
                })
        },
        select (id) {
            this.chooseId = id
            this.findenterprisebytype()
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.findenterprisebytype()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.findenterprisebytype()
        },
        // 重置
        toReact (id) {
            this.enterpriseIsAudit = ''
            this.enterpriseName = ''
            this.region = ''
            this.enterpriseBusinessCategory = ''
        },
        // 展开 收缩
        toArrowActive () {
            this.ArrowActive = !this.ArrowActive
        }
    }
}
</script>

<style lang='less' scoped>
.certificateModel {
    padding: 20px;
    .selectBox {
        margin: 10px 0 30px;
        label {
            font-size: 14px;
            margin-right: 10px;
            span {
                color: red;
                margin-right: 3px;
            }
        }
    }
}
.content {
    position: relative;
    .wrap1 {
        padding-bottom: 70px;
    }
    .table_tap_pad {
        padding: 25px 30px;
    }
    .table_box {
        padding: 0 30px 0 30px;
        a, span {
            text-decoration: none;
            color: #333;
            cursor: pointer;
        }
        a:hover, span:hover {
            color: #359dff;
        }
    }
    .sidebar {
        position: absolute;
        width: 220px;
        height: 100%;
        border-right: 1px solid #dddddd;
        padding: 30px;
        box-sizing: border-box;
        .side_item {
            width: 160px;
            height: 30px;
            border-radius: 4px;
            margin: 10px auto 0;
            font-size: 14px;
            color: #666666;
            line-height: 32px;
            border: 1px solid #dddddd;
            background-color: #fff;
            transition: all .2s;
            cursor: pointer;
            &:first-child {
                margin-top: 0;
            }
            &.active {
                background-color: #1790FF;
                border: 1px solid #1790FF;
                color: #ffffff;
            }
            &:hover {
                color: #ffffff;
                background-color: #1790FF;
                border: 1px solid #1790FF;
            }
        }
    }
}
.port-alert {
    .province, .city{
        display: inline-block;
        width: 50%;
        margin-top: 40px;
        h5 {
            color: #666;
            font-size: 14px;
            text-align: left;
            padding-left: 56px;
        }
        .info-item {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
            text-align: left;
            .left {
                display: inline-block;
                width: 130px;
                text-align: right;
            }
            .right {
                width: 232px;
                display: inline-block;
            }
        }
        .btn {
            margin-top: 30px;
            text-align: left;
            padding-left: 130px;
            .apply {
                margin-right: 20px;
            }
        }
    }
}
</style>
<style lang='less'>
.companyArch {
    background: #FFFFFF;
    .port-alert {
        .el-button {
            width: 100px;
        }
    }
    .el-message-box .el-message-box__content {
        padding: 30px 30px 30px 50px;
    }
    .tool_ipt_small {
        width: 200px!important;
    }
    .tool_ipt_small .el-input__inner {
        width: 200px!important;
    }
}
</style>
