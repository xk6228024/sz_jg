<!-- 备案认证详情 -->
<template>
    <div class="recordAuthDetail">
        <div class="content" v-if="this.ruleForm.coraStatus===5 || !isSearch">
            <div class="record-info" v-if="isSearch">
                <div class="info-title">备案信息</div>
                <div class="info-content">
                    <el-row>
                        <el-col :span="7">
                            <div>
                                <div class="item-name">备案状态：</div>
                                <div class="item-value">{{this.ruleForm.coraStatusStr}}</div>
                            </div>
                            <div>
                                <div class="item-name">备案编号：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseCoding}}</div>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div>
                                <div class="item-name">认证/审核时间：</div>
                                <div class="item-value">{{this.ruleForm.coraTime | filterTime('yyyy-mm-dd hh:ff:ss')}}</div>
                            </div>
                            <div>
                                <div class="item-name">企业标识编号：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseCoding}}</div>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div>
                                <div class="item-name fl">备案审核历史记录：</div>
                                <ul class="recordAuthDetail-history">
                                    <li v-for="(item,index) in statusList" :class="{'red':item.coraStatus==2||item.coraStatus==4}" :key="index">{{item.coraTime | filterTime('yyyy-mm-dd hh:ff:ss')}}&nbsp;&nbsp;{{item.coraStatusStr}}</li>
                                    <el-popover
                                        placement="bottom-start"
                                        width="266"
                                        :offset="-20"
                                        v-if="statusList.length>=4"
                                        trigger="click">
                                        <ul class="recordAuthDetail-history sub">
                                            <li v-for="(item,index) in statusList" :class="{'red':item.coraStatus==2||item.coraStatus==4}" :key="index">{{item.coraTime| filterTime('yyyy-mm-dd hh:ff:ss')}}&nbsp;&nbsp;{{item.coraStatusStr}}</li>
                                        </ul>
                                        <div slot="reference" class="more">更多<i class="el-icon-arrow-down el-icon--right"></i></div>
                                    </el-popover>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-tabs type="card" v-model="tabIndex" @tab-click="changeTabs">
                <el-tab-pane label="基本信息" name="basicInfo" class="basic-info clearfix">
                    <el-form :model="ruleForm" :rules="rules" size="small " ref="ruleForm" class="form record-content">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseName">
                                    <div class="form-item-name">
                                        <span class="red">*&nbsp;</span>经营者名称(企业名称)
                                    </div>
                                    <el-input v-model="ruleForm.enterpriseName" disabled maxlength="200" placeholder="与营业执照名称一致"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseLegalRepresentative" >
                                    <div class="form-item-name">
                                        <el-radio-group v-model="ruleForm.type" disabled @change="enterpriseTypeChange">
                                            <el-radio :label="1">个体经营</el-radio>
                                            <el-radio :label="2">企业经营</el-radio>
                                        </el-radio-group>
                                    </div>
                                    <el-input v-model="ruleForm.enterpriseLegalRepresentative" maxlength="20" disabled
                                    :placeholder="ruleForm.type === 2 ? '请输入企业法人代表' : ''"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseArea">
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>经营地址</div>
                                    <el-select disabled v-model="ruleForm.enterpriseArea" class="select-small" placeholder="请选择">
                                        <el-option
                                            v-for="item in regionList"
                                            :key="item.regionId"
                                            :label="item.regionName"
                                            :value="item.regionId">
                                        </el-option>
                                    </el-select>
                                    <el-input disabled v-model="ruleForm.enterpriseDetailedAddress" class="input-small" maxlength="60"
                                    placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseCreditIdentifier" >
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>社会信用代码</div>
                                    <el-input disabled v-model="ruleForm.enterpriseCreditIdentifier" maxlength="18" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseOwner">
                                    <div class="form-item-name">
                                        <span class="red">*&nbsp;</span>主要负责人姓名
                                    </div>
                                    <el-input disabled v-model="ruleForm.enterpriseOwner" maxlength="20"
                                    placeholder="个体填写经营者，企业填写法人任命的负责"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseOwnerIdcardnumber" >
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>主要负责人身份证号</div>
                                    <el-input disabled v-model="ruleForm.enterpriseOwnerIdcardnumber" maxlength="18" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseOwnerPhone" >
                                    <div class="form-item-name">
                                        <span class="red">*&nbsp;</span>主要负责人联系电话</div>
                                    <el-input disabled v-model="ruleForm.enterpriseOwnerPhone" maxlength="11" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseOwnerEmail" >
                                    <div class="form-item-name">主要负责人邮箱/传真</div>
                                    <el-input disabled v-model="ruleForm.enterpriseOwnerEmail" maxlength="50" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseLinkName" >
                                    <div class="form-item-name">
                                        经办人联系电话
                                    </div>
                                    <el-input disabled v-model="ruleForm.enterpriseLinkName" maxlength="11"
                                    placeholder="填写经办人联系电话时，备案进度将短信通知经办人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseSecurityName" :rules="$validate({required:false})">
                                    <div class="form-item-name">
                                        安全负责人
                                    </div>
                                    <el-input disabled v-model="ruleForm.enterpriseSecurityName" maxlength="120"
                                    placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseEconomicCategory" >
                                    <div class="form-item-name">
                                        <span class="red">*&nbsp;</span>企业性质
                                    </div>
                                    <el-radio-group disabled v-model="ruleForm.enterpriseEconomicCategory">
                                        <el-radio :label="1">国有</el-radio>
                                        <el-radio :label="2">集体</el-radio>
                                        <el-radio :label="3">私营</el-radio>
                                        <el-radio :label="4">外资</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseBusinessType">
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>业务类型</div>
                                    <el-radio-group disabled v-model="ruleForm.enterpriseBusinessType" @change="businessTypeChange">
                                        <el-radio :label="1">汽车维修</el-radio>
                                        <el-radio :label="2">摩托车维修</el-radio>
                                        <el-radio :label="3">其他机动车维修</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseOperatingType" >
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>经营类型</div>
                                    <el-radio-group disabled v-model="ruleForm.enterpriseOperatingType">
                                        <el-radio :label="1">综合修理</el-radio>
                                        <el-radio :label="2">机动车生产、进口企业授权维修</el-radio>
                                        <el-radio :label="3">其他</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseChainOrGroupIs" >
                                    <div class="form-item-name">
                                        <span class="red">*&nbsp;</span>经营类别
                                    </div>
                                    <el-radio-group disabled v-model="ruleForm.enterpriseChainOrGroupIs">
                                        <el-radio :label="1">单店/总店</el-radio>
                                        <el-radio :label="2">连锁分店</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item prop="enterpriseBusinessCategory" >
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>业户类别</div>
                                    <el-radio-group disabled v-model="ruleForm.enterpriseBusinessCategory">
                                        <el-radio :label="1">一类</el-radio>
                                        <el-radio :label="2">二类</el-radio>
                                        <el-radio :label="3" v-if="ruleForm.enterpriseBusinessType !== 2">三类</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                             <el-col :span="12">
                                <el-form-item prop="signboardProductMethod" :rules="$validate({required:true, msg: '请选择机动车维修标志牌制作方式'})">
                                    <div class="form-item-name"><span class="red">*&nbsp;</span>机动车维修标志牌制作方式</div>
                                    <el-radio-group disabled v-model="ruleForm.signboardProductMethod">
                                        <el-radio :label="0">自行制作</el-radio>
                                        <el-radio :label="1">协会统一制作</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div>
                            <el-form-item prop="enterpriseOperationArea" >
                                <div class="form-item-name"><span class="red">*&nbsp;</span>项目种类</div>
                                <div class="form-item-name" v-if="ruleForm.enterpriseBusinessCategory === 1">
                                    一类<span class="text9 small">（可多选）</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-radio disabled v-model="ruleForm.enterpriseIsOwnerPaintRoom" :label="1">自有漆房</el-radio>
                                    <el-radio disabled v-model="ruleForm.enterpriseIsOwnerPaintRoom" :label="2">外协漆房</el-radio>
                                </div>
                                <el-checkbox-group disabled v-model="ruleForm.enterpriseOperationArea" v-if="ruleForm.enterpriseBusinessCategory === 1">
                                    <el-checkbox label="大中型客车">大中型客车维修</el-checkbox>
                                    <el-checkbox label="大型货车">大型货车维修</el-checkbox>
                                    <el-checkbox label="小型车">小型车维修</el-checkbox>
                                    <el-checkbox label="危险货物运输车辆维修"></el-checkbox>
                                </el-checkbox-group>
                                <div class="form-item-name" v-if="ruleForm.enterpriseBusinessCategory === 2">
                                    二类<span class="text9 small">（可多选）</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-radio disabled v-model="ruleForm.enterpriseIsOwnerPaintRoom" :label="1">自有漆房</el-radio>
                                    <el-radio disabled v-model="ruleForm.enterpriseIsOwnerPaintRoom" :label="2">外协漆房</el-radio>
                                </div>
                                <el-checkbox-group disabled v-model="ruleForm.enterpriseOperationArea" v-if="ruleForm.enterpriseBusinessCategory === 2">
                                    <el-checkbox label="大中型客车">大中型客车维修</el-checkbox>
                                    <el-checkbox label="大型货车">大型货车维修</el-checkbox>
                                    <el-checkbox label="小型车">小型车维修</el-checkbox>
                                </el-checkbox-group>
                                <div class="form-item-name" v-if="ruleForm.enterpriseBusinessCategory === 3">
                                    三类<span class="text9 small">（可多选）</span>
                                </div>
                                <el-checkbox-group disabled v-model="ruleForm.enterpriseOperationArea" v-if="ruleForm.enterpriseBusinessCategory === 3">
                                    <el-checkbox label="汽车综合小修"></el-checkbox>
                                    <el-checkbox label="发动机维修"></el-checkbox>
                                    <el-checkbox label="车身维修"></el-checkbox>
                                    <el-checkbox label="电气系统维修"></el-checkbox>
                                    <el-checkbox label="自动变速器维修"></el-checkbox>
                                    <el-checkbox label="轮胎动平衡及修补"></el-checkbox>
                                    <el-checkbox label="四轮定位检测调整"></el-checkbox>
                                    <el-checkbox label="汽车润滑与养护"></el-checkbox>
                                    <el-checkbox label="喷油泵和喷油器维修"></el-checkbox>
                                    <el-checkbox label="曲轴修磨"></el-checkbox>
                                    <el-checkbox label="气缸镗磨"></el-checkbox>
                                    <el-checkbox label="散热器维修"></el-checkbox>
                                    <el-checkbox label="空调维修"></el-checkbox>
                                    <el-checkbox label="汽车美容装潢"></el-checkbox>
                                    <el-checkbox label="汽车玻璃安装及修复"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </div>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="其他备案信息" name="otherInfo" class="other-info clearfix">
                    <div class="upload-image" v-for="(item, index) in imgList" :key="index" v-show="!item.url.length">
                        <div class="image-list">
                            <span v-for="img in item.url" :key="img">
                                <img class="img"  v-if="/.pdf$/.test(img.materialUrl)" :src="iconPdf" @click="preview(img.materialUrl)">
                                <img class="img"  v-else-if="/.doc|.docx$/.test(img.materialUrl)" :src="iconDoc" @click="openDoc(img)">
                                <img class="img"  v-else :src="img.materialUrl" @click="preview(img.materialUrl)">
                            </span>
                            <!-- <img v-if="/.pdf$/.test(img)" :src="iconPdf" @click="preview(img)">
                            <img v-else-if="/.doc|.docx$/.test(img)" :src="iconDoc" @click="openDoc(img)">
                            <img v-else :src="img" @click="preview(img)"> -->
                        </div>
                        <div class="name" v-html="item.text"></div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="设备信息" name="equipmentInfo" class="other-info clearfix">
                    <el-tabs type="border-card" v-model="tabIndex2" class="otherList" id="otherList">
                        <el-tab-pane label="通用设备" name="tab1" v-if="otherList1.length">
                            <div v-show="tabIndex2==='tab1'" class="other" >
                                <el-table
                                    :data="otherList1"
                                    :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="orderNumber"
                                        label="序号"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="detectEquipmentName"
                                        label="设备名称"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="equipmentCount"
                                        label="数量"
                                        align="center">
                                            <template slot-scope="scope">
                                                <el-input-number disabled v-model="scope.row.equipmentCount" :step-strictly="true" :min="0"></el-input-number>
                                            </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="专用设备" name="tab2" v-if="otherList2.length">
                            <div v-show="tabIndex2==='tab2'" class="other">
                                <el-table
                                    :data="otherList2"
                                    :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                                    style="width: 100%">
                                    <el-table-column
                                    prop="orderNumber"
                                    label="序号"
                                    align="center">
                                    </el-table-column>
                                    <el-table-column
                                    prop="specialEquipmentName"
                                    label="设备名称"
                                    align="center">
                                    </el-table-column>
                                    <el-table-column
                                    prop="otherCondition"
                                    label="其他条件"
                                    :width="200"
                                    align="center">
                                    </el-table-column>
                                    <el-table-column
                                    prop="equipmentCount"
                                    label="数量"
                                    width="200"
                                    align="center">
                                        <template slot-scope="scope">
                                            <el-input-number disabled v-model="scope.row.equipmentCount" :step-strictly="true" :min="0"></el-input-number>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="检测设备" name="tab3" v-if="otherList3.length">
                            <div v-show="tabIndex2==='tab3'" class="other">
                                <el-table
                                    :data="otherList3"
                                    :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="orderNumber"
                                        label="序号"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="detectEquipmentName"
                                        label="设备名称"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="otherCondition"
                                        label="其他条件"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="equipmentCount"
                                        label="数量"
                                        align="center">
                                            <template slot-scope="scope">
                                                <el-input-number disabled v-model="scope.row.equipmentCount" :step-strictly="true" :min="0"></el-input-number>
                                            </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="通用设备" name="tab4" v-if="otherList4.length">
                            <div v-show="tabIndex2==='tab4'" class="other">
                                <el-table
                                    :data="otherList4"
                                    :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="orderNumber"
                                        label="序号"
                                        width="120"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="universalEquipmentName"
                                        label="设备名称"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="equipmentCount"
                                        label="数量"
                                        width="200"
                                        align="center">
                                            <template slot-scope="scope">
                                                <el-input-number disabled v-model="scope.row.equipmentCount" :step-strictly="true" :min="0"></el-input-number>
                                            </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="通用设备" name="tab5" v-if="otherList5.length">
                            <div v-show="tabIndex2==='tab5'" class="other">
                                <el-table
                                    :data="otherList5"
                                    :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="orderNumber"
                                        label="序号"
                                        width="120"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="universalEquipmentName"
                                        label="设备名称"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="equipmentCount"
                                        label="数量"
                                        width="200"
                                        align="center">
                                            <template slot-scope="scope">
                                                <el-input-number disabled v-model="scope.row.equipmentCount" :step-strictly="true" :min="0"></el-input-number>
                                            </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="content" v-if="this.ruleForm.coraStatus!==5 && isSearch" style="min-height:800px">
            <div class="record-info">
                <div class="info-content">
                    <el-row>
                        <el-col :span="8">
                            <div>
                                <div class="item-name">备案状态：</div>
                                <div class="item-value">{{this.ruleForm.coraStatusStr}}</div>
                            </div>
                            <div>
                                <div class="item-name">认证/审核时间：</div>
                                <div class="item-value">{{moment(this.ruleForm.coraTime, 'YYYY-MM-DD hh:mm')}}</div>
                            </div>
                            <div>
                                <div class="item-name">申请时间：</div>
                                <div class="item-value">{{moment(this.ruleForm.createTime, 'YYYY-MM-DD hh:mm')}}</div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <div class="item-name">企业名称：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseName}}</div>
                            </div>
                            <div>
                                <div class="item-name">业户类别：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseBusinessCategoryStr}}</div>
                            </div>
                            <div>
                                <div class="item-name">企业联系人：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseOwner}}</div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <div class="item-name">联系电话：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseOwnerPhone}}</div>
                            </div>
                            <div>
                                <div class="item-name">所属区域：</div>
                                <div class="item-value">{{this.ruleForm.enterpriseAreaStr}}</div>
                            </div>
                        </el-col>
                    </el-row>
                    <div>
                        <div class="item-name">备案不通过理由：</div>
                        <div class="item-value">{{tempObj.auditFailureReasons || tempObj.certificationFailureReasons}}</div>
                    </div>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button v-if="!isSearch" type="primary" :disabled="!$checkAuth('external:enterpriseFiling:updateAuditStatus')" @click="adopt('1')">通过</el-button>
            <el-button v-if="!isSearch" type="primary" :disabled="!$checkAuth('external:enterpriseFiling:updateAuditStatus')" @click="adopt('2')">拒绝</el-button>
            <el-button @click="goBack">返回</el-button>
        </bread-foot>
        <modal
        :title="'提示'"
        :width="400"
        :alert="alert"
        class="reason-modal"
        @alertCancel="alertCancel">
            <div class="reason">
                <div class="name">请输入审核不通过原因</div>
                <div class="value"><el-input maxlength="30" v-model="reasonValue"></el-input></div>
            </div>
            <div class="btn-box">
                <el-button type="primary" @click="alertConfirm">确定</el-button>
                <el-button @click="alertCancel">取消</el-button>
            </div>
        </modal>
        <el-dialog
            title="PDF预览"
            :visible.sync="previewVisible"
            :before-close="() => { previewSrc = ''; previewVisible = false }"
            width="80%">
            <iframe :src="previewSrc" width="100%" height="550px"></iframe>
        </el-dialog>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import Modal from '@/components/Modal.vue'
import moment from 'moment'
import iconPdf from '@/assets/images/icon-pdf.png'
import iconDoc from '@/assets/images/word.png'
export default {
    data () {
        return {
            tempObj: {},
            iconDoc,
            tabIndex2: 'tab1',
            otherList1: [
                {
                    orderNumber: '01',
                    universalEquipmentName: '高压水枪',
                    detectEquipmentName: '高压水枪',
                    equipmentCount: 5
                },
                {
                    orderNumber: '02',
                    universalEquipmentName: '高压水枪',
                    detectEquipmentName: '高压水枪',
                    equipmentCount: 5
                },
                {
                    orderNumber: '03',
                    universalEquipmentName: '高压水枪',
                    detectEquipmentName: '高压水枪',
                    equipmentCount: 5
                }
            ],
            otherList2: [],
            otherList3: [],
            otherList4: [],
            otherList5: [],
            statusList: [], // 认证状态
            breadArr: [
            ],
            tabIndex: 'basicInfo',
            ruleForm: {
                enterpriseName: '太原达梦汽车服务有限公司',
                type: 1,
                enterpriseLegalRepresentative: '小店区',
                enterpriseCreditIdentifier: 'ZQ21321548478132',
                enterpriseArea: '小店区',
                enterpriseDetailedAddress: '创新路188号',
                enterpriseOwner: '马达',
                enterpriseOwnerPhone: '13265478841',
                enterpriseOwnerEmail: '3144543@163.com',
                enterpriseLinkName: '龙飞达',
                enterpriseBusinessType: '01',
                enterpriseSecurityName: '肖玉錒',
                enterpriseBusinessCategory: '01',
                enterpriseChainOrGroupIs: '11',
                enterpriseOperatingType: '22',
                enterpriseEconomicCategory: '33',
                enterpriseOwnerIdcardnumber: '42109819911118888882',
                enterpriseOperationArea: [],
                basEnterpriseMaterials: []
            },
            imgList: [
                {
                    type: 1,
                    limit: 1,
                    url: [],
                    show: true,
                    text: '营业执照（副本）扫描件（最多1张）'
                },
                {
                    type: 2,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '法人代表身份证扫描件'
                },
                {
                    type: 3,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '经营场地、停车场面积、土地使用权及产权证明等相关材料'
                },
                {
                    type: 4,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '现场铺面正面照（含招牌）'
                },
                {
                    type: 5,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '现场铺面内部照'
                },
                {
                    type: 6,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '技术人员汇总表，以及各相关人员的学历、技术职称或职业资格证明等相关材料'
                },
                {
                    type: 7,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '维修设备设施汇总表，维修检测设备及计量设备检定合格证明等相关材料'
                },
                {
                    type: 8,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '组织管理制度'
                },
                {
                    type: 9,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '质量管理制度'
                },
                {
                    type: 10,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '经营管理制度'
                },
                {
                    type: 11,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '安全环保制度'
                },
                {
                    type: 12,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '管理制度'
                },
                {
                    type: 13,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '其他专项要求'
                },
                {
                    type: 14,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '价格管理'
                },
                {
                    type: 15,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '安全生产要求'
                },
                {
                    type: 16,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '环境影响报告表'
                },
                {
                    type: 17,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '环境影响登记表'
                },
                {
                    type: 18,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '外协漆房合同'
                },
                {
                    type: 19,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '固体废物、废油回收点'
                },
                {
                    type: 20,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '固体废物承诺书'
                },
                {
                    type: 21,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '废油回收承诺书'
                },
                {
                    type: 22,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '与其作业内容相适应的专用维修车间和设备、设施等相关材料'
                },
                {
                    type: 23,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '突发事件应急预案'
                },
                {
                    type: 24,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '安全管理人员汇总表'
                },
                {
                    type: 25,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '安全操作规程材料'
                },
                {
                    type: 26,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '连锁经营协议书副本'
                },
                {
                    type: 27,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '连锁经营的作业标准和管理手册'
                },
                {
                    type: 28,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '连锁经营服务网点符合机动车维修经营相应条件承诺书'
                },
                {
                    type: 29,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '消防设施照片'
                },
                {
                    type: 30,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '员工汇总表'
                },
                {
                    type: 31,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '员工身份证'
                },
                {
                    type: 32,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '相关学历证明技术职称或职业资格证明'
                },
                {
                    type: 33,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '设施设备汇总表'
                },
                {
                    type: 34,
                    limit: 10,
                    url: [],
                    show: true,
                    text: '维修检测设备及计量设备检定合格证明等相关材料'
                },
                {
                    type: 35,
                    limit: 30,
                    url: [],
                    show: true,
                    text: '维修工时费价格单'
                },
                {
                    type: 36,
                    limit: 30,
                    url: [],
                    show: true,
                    text: '门店项目价格表'
                }
            ],
            rules: {
            },
            uploadURL: window.uploadURL,
            regionList: [ // 区域列表
            ],
            reasonValue: '', // 认证失败理由
            isSearch: false, // 是否是备案查询
            alert: false, // 认证失败弹窗
            isSend: false, // 防重复提交
            iconPdf,
            previewVisible: false, // pdf预览弹窗
            previewSrc: '' // 预览pdf路径
        }
    },
    components: {
        BreadFoot,
        Modal
    },
    filters: {
        momentTime: function (val) {
            if (!val) return ''
            return moment(val).format('YYYY-MM-DD')
        }
    },
    created () {
        // this.init()
        // this.getRegion()
        // this.$post('enterprise/record/view', {
        //     enterpriseRecordId: this.$route.query.id
        // }).then(res => {
        //     if (res.status === 200) {
        //         this.ruleForm = res.data
        //         this.getCoraStatus(res.data.enterpriseName)
        //         this.ruleForm.enterpriseBusinessCategory = this.ruleForm.enterpriseBusinessCategory - 0
        //         this.ruleForm.enterpriseBusinessType = this.ruleForm.enterpriseBusinessType - 0
        //         this.ruleForm.enterpriseChainOrGroupIs = this.ruleForm.enterpriseChainOrGroupIs - 0
        //         this.ruleForm.enterpriseEconomicCategory = this.ruleForm.enterpriseEconomicCategory - 0
        //         this.ruleForm.enterpriseOperatingType = this.ruleForm.enterpriseOperatingType - 0
        //         this.ruleForm.enterpriseOperationArea = this.ruleForm.enterpriseOperationArea.split(',')
        //         this.ruleForm.enterpriseLegalRepresentative ? (this.ruleForm.type = 2) : (this.ruleForm.type = 1)
        //         this.imgList.forEach(e => {
        //             this.ruleForm.basEnterpriseMaterials && this.ruleForm.basEnterpriseMaterials.forEach(g => {
        //                 if (g.materialType === e.type) {
        //                     e.url.push(g)
        //                 }
        //             })
        //         })
        //         this.otherList3 = res.data.busEntrecordDetectEquipments || []
        //         this.otherList1 = res.data.busEntrecordMotorEquipments || []
        //         this.otherList2 = res.data.busEntrecordSpecialEquipments || []
        //         this.otherList5 = res.data.busEntrecordThreeclassEquipments || []
        //         this.otherList4 = res.data.busEntrecordUniversalEquipments || []
        //         if (this.otherList1.length) {
        //             this.tabIndex2 = 'tab1'
        //         } else if (this.otherList2.length) {
        //             this.tabIndex2 = 'tab2'
        //         } else if (this.otherList3.length) {
        //             this.tabIndex2 = 'tab3'
        //         } else if (this.otherList4.length) {
        //             this.tabIndex2 = 'tab4'
        //         } else {
        //             this.tabIndex2 = 'tab5'
        //         }
        //     }
        // })
    },
    methods: {
        openDoc (item) {
            window.open('/api/external/download/getBasEntMaterial?sftpUrl=' + item.materialUrl)
        },
        moment (val, str) {
            if (!val) return ''
            return moment(val).format(str)
        },
        getCoraStatus (enterpriseName) {
            this.$post('enterprise/record/getAllCoraLastStatus', {
                enterpriseName
            }).then(res => {
                this.statusList = res.datas
                if (this.statusList && this.statusList.length) {
                    this.tempObj = this.statusList[this.statusList.length - 1]
                }
            })
        },
        // 获取城市区域
        getRegion () {
            this.$post('external/city/findCityRegion', {})
                .then(res => {
                    if (res.status === 200) {
                        this.regionList = res.datas
                    } else {
                        this.$alert(res.message, '提示')
                    }
                })
        },
        // 页面初始化配置
        init () {
            if (this.$route.query.isSearch) {
                this.isSearch = true
                this.breadArr = [
                    { title: '档案管理', path: '' },
                    { title: '维修企业备案信息查询', path: '' },
                    { title: '维修企业备案信息详情', path: '' }
                ]
            } else {
                this.breadArr = [
                    { title: '业务操作', path: '' },
                    { title: '企业备案认证', path: '' }]
            }
        },
        changeTabs () {},
        // 上传前的钩子
        beforeAvatarUpload (file) {
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!/.jpg$|.jpeg$|.png$/i.test(file.name)) {
                this.$message.error('上传附件只能是 jpg/png 格式!')
                return false
            }
            if (!isLt2M) {
                this.$message.error('上传附件大小不能超过 2MB!')
                return false
            }
            return isLt2M
        },
        // 上传成功的回调
        uploadSuccess (res, name) {
            this.ruleForm[name].push({
                url: res.data,
                uid: Math.random() + ''
            })
        },
        // 删除图片
        cleanImage (name, index) {
            this.ruleForm[name].splice(index, 1)
        },
        // 上传失败的回调
        uploadError () {
            this.$message.error('上传失败!')
        },
        // 业务类型变更
        businessTypeChange (val) {
            if (val === 2 && this.ruleForm.enterpriseBusinessCategory === 3) {
                this.ruleForm.enterpriseBusinessCategory = 1
            }
        },
        // 经营类型变更
        enterpriseTypeChange (val) {
            this.$refs.ruleForm.clearValidate('legalPerson')
        },
        // 审核通过或不通过
        adopt (status) {
            if (status === '1') {
                this.$confirm('确认执行该审核操作吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    customClass: 'record-adopt-confirm'
                }).then(() => {
                    this.adoptRequest({
                        enterpriseRecordId: this.$route.query.id,
                        auditStatus: status
                    })
                }).catch(() => {
                })
            } else {
                this.alert = true
            }
        },
        // 审核请求
        adoptRequest (obj) {
            if (this.isSend) {
                return
            }
            this.isSend = true
            this.$post('/external/enterpriseFiling/updateAuditStatus', obj)
                .then(res => {
                    if (res.status === 200) {
                        this.$message({
                            type: 'success',
                            message: '操作成功!'
                        })
                        this.$router.push('/recordAuth')
                    }
                    this.isSend = false
                })
                .catch(e => {
                    this.isSend = false
                })
        },
        // 返回父级菜单
        goBack () {
            if (this.isSearch) {
                this.$router.push('/recordInfoSearch')
            } else {
                this.$router.push('/recordAuth')
            }
        },
        // 弹窗取消
        alertCancel () {
            this.alert = false
            this.reasonValue = ''
        },
        // 弹窗确认
        alertConfirm () {
            if (!this.reasonValue) {
                this.$alert('请输入审核不通过原因')
                return
            }
            this.adoptRequest({
                enterpriseRecordId: this.$route.query.id,
                auditStatus: '2',
                auditFailureReasons: this.reasonValue
            })
        },
        // 图片预览
        preview (url) {
            if (/.pdf$/.test(url)) {
                this.previewVisible = true
                this.previewSrc = url
            } else {
                this.$zoomImg(url)
            }
        }
    }
}
</script>

<style lang="less">
.recordAuthDetail {
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
    #otherList {
        .el-input {
            width: 180px;
        }
        .textIpt {
            height: 34px;
            line-height: 34px;
            border: 1px solid #ddd;
            text-align: center;
            width: 150px;
            border-radius: 3px;
        }
    }
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        top: 0;
        background-color: #ffffff;
        padding-bottom: 80px;
    }
    .record-info {
        text-align: left;
        border-bottom: 20px solid #edf0f5;
        .info-title {
            padding: 0 30px;
            height: 54px;
            line-height: 54px;
            color: #333;
            font-size: 14px;
            font-weight: bold;
            border-bottom: 1px solid #E9E9E9;
        }
        .info-content {
            padding: 24px 30px;
            font-size: 14px;
            .item-name, .item-value {
                display: inline-block;
                margin-bottom: 16px;
                font-size: 14px;
            }
            .item-name {
                color: #333;
            }
            .item-value {
                color: #666;
            }
        }
    }
    .record-content {
        padding: 24px;
        text-align: left;
        .el-input {
            width: 350px;
            &.input-small {
                width: 238px;
                margin-left: 10px;
            }
        }
        .el-radio__label {
            font-weight: normal;
        }
        .el-checkbox {
            margin-left: 30px;
        }
        .el-checkbox-group {
            margin-left: -30px;
        }
        .select-small {
            width: auto;
            .el-input {
                width: 100px;
            }
        }
        .form {
            padding-left: 30px;
            .el-select {
                width: auto;
            }
        }
        .el-form-item__label {
            display: block;
            float: none;
            text-align: left;
        }
        .form-item-name {
            color: #666;
            font-size: 14px;
        }
        .red {
            color: #F56C6C;
            &.small {
                font-size: 12px;
            }
        }
        .text9 {
            color: #999;
            &.small {
                font-size: 12px;
            }
        }
        .el-form-item--small.el-form-item {
            margin-bottom: 16px;
        }
    }
    .other-info {
        padding: 42px 24px;
        .upload-image {
            float: left;
            width: 390px;
            height: 110px;
            margin-right: 72px;
            margin-bottom: 30px;
            overflow: auto;
            padding: 14px 0;
            border-radius:4px;
            border: 1px dashed #C4CCD6;
            background: #FCFDFF;
            font-size: 14px;
            color: #A6A8AF;
            text-align: center;
            .image-list{
                min-height: 60px;
                .img {
                    width: 60px;
                    height: 60px;
                    &+.img {
                        margin-left: 24px;
                    }
                }
            }
            .name {
                height: 40px;
                align-items: center;
                display: flex;
                text-align: center;
                justify-content: center;
            }
        }
    }
}
.record-adopt-confirm {
    .el-message-box__content {
        text-align: left;
    }
}
.reason-modal {
    .reason {
        text-align: left;
        padding: 24px;
        .name {
            color: #333;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .value {
            .el-input__inner {
                height: 32px;
            }
        }
    }
    .btn-box {
        text-align: right;
        padding: 0 24px 18px 0;
    }
}
.recordAuthDetail-history {
    margin-left: 126px;
    .red {
        color: red;
    }
    li {
        color: #666;
        margin-bottom: 16px;
        &.current {
            color: #FC4343;
        }
    }
    &.sub {
        margin-left: 0;
        li:last-child {
            margin-bottom: 0;
        }
    }
    .more {
        color: #8A9CC2;
        cursor: pointer;
        width: 50px;
        outline: none;
        font-size: 12px;
    }
}
.reason-modal {
    .reason {
        text-align: left;
        padding: 24px;
        .name {
            color: #333;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .value {
            .el-input__inner {
                height: 32px;
            }
        }
    }
    .btn-box {
        text-align: right;
        padding: 0 24px 18px 0;
    }
}
</style>
