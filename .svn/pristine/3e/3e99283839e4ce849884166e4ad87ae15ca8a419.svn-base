<!-- 档案详情 -->
<template>
    <div class="compArchDetail">
        <div class="content">
            <el-form ref="form" :model="form" label-position="top">
                <el-tabs type="card" v-model="tabIndex" @tab-click="changeTabs">
                    <el-tab-pane label="基本信息" name="basicInfo" class="basic-info clearfix">
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="企业名称" prop="enterpriseName" :rules="[ { required: true, message: '请输入企业名称', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseName" maxlength="30" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="企业类型" prop="enterpriseType" :rules="[ { required: true, message: '请输入企业类型', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseType" maxlength="15" type="text" disabled clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="企业备案号" prop="recordNumber">
                                    <div class="msg">
                                        <el-input :style="{ width: !$route.query.id || ($route.query.id && /^Q/i.test(form.recordNumber)) || ($route.query.id && !form.recordNumber) ? 'calc(100% - 90px)' : '100%', marginRight: '20px' }" v-model="form.recordNumber" disabled clearable></el-input>
                                        <el-button type="primary" v-if="!$route.query.id || ($route.query.id && /^Q/i.test(form.recordNumber)) || ($route.query.id && !form.recordNumber)" @click="getRecordNumber">生成</el-button>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="所在区域" prop="enterpriseRegion" :rules="[ { required: true, message: '请选择所在区域', trigger: ['change'] } ]">
                                    <el-select v-model="form.enterpriseRegion" @change="resetRecordNum" placeholder="请选择" clearable>
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
                                <el-form-item label="经营类别" prop="enterpriseBusinessCategory" :rules="[ { required: true, message: '请选择经营类别', trigger: ['change'] } ]">
                                    <el-select v-model="form.enterpriseBusinessCategory" placeholder="请选择" clearable>
                                        <el-option
                                            v-for="item in bussinessCategory"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="企业经营状态" prop="enterpriseOperatingState" :rules="[ { required: true, message: '请选择企业经营状态', trigger: ['change'] } ]">
                                    <el-select v-model="form.enterpriseOperatingState" placeholder="请选择" >
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
                                <el-form-item label="社会信用代码" prop="enterpriseCreditIdentifier" :rules="$validate({required:true, repeatLength:18, type:'enterpriseCreditIdentifier'})">
                                    <el-input v-model="form.enterpriseCreditIdentifier" maxlength="18" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="经营类型" prop="enterpriseEconomicCategory" :rules="[ { required: true, message: '请选择经营类型', trigger: ['change'] } ]">
                                    <el-select v-model="form.enterpriseEconomicCategory" placeholder="请选择" filterable clearable>
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
                                <el-form-item label="企业负责人" prop="enterpriseOwner" :rules="[ { required: true, message: '请输入企业负责人', trigger: ['change'] } ]">
                                    <el-input v-model.trim="form.enterpriseOwner" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="企业联系人" prop="enterpriseLinkName" :rules="[ { required: true, message: '请输入企业联系人', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseLinkName" :type="roleExtEnterpriseLinkpersonIsview ? 'text' : 'password'" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="负责人电话" prop="enterpriseOwnerPhone" :rules="$validate({required:true, repeatLength:11, type:'tel'})">
                                    <el-input v-model="form.enterpriseOwnerPhone" maxlength="11" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="联系人电话" prop="enterpriseLinkMobile" :rules="$validate({required:true, repeatLength:11, type:'tel'})">
                                    <el-input v-model="form.enterpriseLinkMobile" :type="roleExtEnterpriseLinkpersonIsview ? 'text' : 'password'" maxlength="11" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="营业时间" prop="businessTime" :rules="[ { required: true, message: '请选择营业时间', trigger: ['change'] } ]">
                                    <el-time-picker
                                        v-model="form.businessTime"
                                        is-range
                                        value-format="HH:mm:ss"
                                        range-separator="至"
                                        start-placeholder="开始时间"
                                        end-placeholder="结束时间"
                                        placeholder="选择时间范围">
                                    </el-time-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="经营范围" prop="enterpriseOperationArea" :rules="[ { required: true, message: '请输入经营范围', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseOperationArea" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="企业业务电话" prop="enterpriseBusinessPhone" :rules="$validate({required:true, repeatLength:11, type:'tel'})">
                                    <el-input v-model="form.enterpriseBusinessPhone" :type="roleExtEnterpriseLinkpersonIsview ? 'text' : 'password'" maxlength="11" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="经营地址" prop="enterpriseOperatingAddress" :rules="[ { required: true, message: '请输入经营地址', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseOperatingAddress" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="经营概况" prop="enterpriseIntroduction" :rules="[ { required: true, message: '请输入经营概况', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseIntroduction" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="企业邮政编码" prop="enterprisePostalcode" :rules="[ { required: true, message: '请输入邮政编码', trigger: ['change'] }, { min: 6, max: 6, message: '请输入正确的邮政编码', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterprisePostalcode" maxlength="6" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="联系人身份证" prop="enterpriseLinkIdcardnumber" :rules="$validate({required:false, repeatLength:18, type:'idcard'})">
                                    <el-input v-model="form.enterpriseLinkIdcardnumber" maxlength="18" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="管理员账号" prop="enterpriseName" :rules="[ { required: true, message: '请输入管理员账号', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseUsername" maxlength="30" type="text" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="管理员密码" prop="enterprisePassword" :rules="[ { required: true, message: '请输入管理员密码', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterprisePassword" maxlength="15" type="password" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="100">
                            <el-col :span="8">
                                <el-form-item label="经营许可证号" prop="enterpriseBusinessCertificate" :rules="[ { required: false }, { pattern: /^[\da-zA-Z]{12}$/, message: '许可证号应为12位的数字和字母组合', trigger: ['change'] } ]">
                                    <el-input v-model="form.enterpriseBusinessCertificate" maxlength="12" clearable></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="许可证有效期" prop="validityTime">
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
                            <el-col :span="8">
                                <el-form-item label="负责人身份证" prop="enterpriseOwnerIdcardnumber" :rules="$validate({required:false, repeatLength:18, type:'idcard'})">
                                    <el-input v-model="form.enterpriseOwnerIdcardnumber" maxlength="18" clearable></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="拓展信息" name="moreInfo">
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
                                        <el-input v-model="form.enterpriseAddr" clearable style="width: 70%;"></el-input>
                                        <el-button type="primary" @click="mapSearch">获取经纬度</el-button>
                                    </el-form-item>
                                    <el-form-item label="经度" prop="lng" :rules="[ { required: true, message: '请输入经度', trigger: ['change'] } ]">
                                        <el-input v-model.number="form.lng" step="0.000001" type="number" clearable></el-input>
                                    </el-form-item>
                                    <el-form-item label="纬度" prop="lat" :rules="[ { required: true, message: '请输入纬度', trigger: ['change'] } ]">
                                        <el-input v-model.number="form.lat" step="0.000001" type="number" clearable></el-input>
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
                                        <el-input v-model="form.enterpriseSiteUrl" clearable></el-input>
                                    </el-form-item>
                                    <el-form-item label="尾气治理站" prop="enterpriseTailGasTreatmentStationIs" :rules="[ { required: false } ]">
                                        <el-radio v-model="form.enterpriseTailGasTreatmentStationIs" label="1">是</el-radio>
                                        <el-radio v-model="form.enterpriseTailGasTreatmentStationIs" label="0">否</el-radio>
                                    </el-form-item>
                                    <el-form-item label="是否为4S店或特约维修店" prop="enterprise4sSpecialMaintenanceIs" :rules="[ { required: false } ]">
                                        <el-radio v-model="form.enterprise4sSpecialMaintenanceIs" label="1">是</el-radio>
                                        <el-radio v-model="form.enterprise4sSpecialMaintenanceIs" label="0">否</el-radio>
                                    </el-form-item>
                                    <el-form-item label="连锁或集团经营总店名称" prop="enterpriseGroupStoreName" :rules="[ { required: false } ]">
                                        <el-input v-model="form.enterpriseGroupStoreName" clearable></el-input>
                                    </el-form-item>
                                    <el-form-item label="质量保障日期(天)" prop="enterpriseQaDay" :rules="[ { required: false } ]">
                                        <el-input v-model="form.enterpriseQaDay" type="number" clearable></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12" style="padding-right: 100px;">
                                    <el-form-item label="企业邮箱" prop="enterpriseRegisterEmail" :rules="[ { required: false } ]">
                                        <el-input v-model="form.enterpriseRegisterEmail" clearable></el-input>
                                    </el-form-item>
                                    <el-form-item label="连锁或集团经营企业" prop="enterpriseChainOrGroupIs" :rules="[ { required: false } ]">
                                        <el-radio v-model="form.enterpriseChainOrGroupIs" label="1">是</el-radio>
                                        <el-radio v-model="form.enterpriseChainOrGroupIs" label="0">否</el-radio>
                                    </el-form-item>
                                    <el-form-item label="连锁或集团经营总店" prop="enterpriseChainOrGroupOperationIs" :rules="[ { required: false } ]">
                                        <el-radio v-model="form.enterpriseChainOrGroupOperationIs" label="1">是</el-radio>
                                        <el-radio v-model="form.enterpriseChainOrGroupOperationIs" label="0">否</el-radio>
                                    </el-form-item>
                                    <el-form-item label="质量保障里程(公里)" prop="enterpriseQaMileage" :rules="[ { required: false } ]">
                                        <el-input v-model.number="form.enterpriseQaMileage" type="number" clearable></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="主修品牌" name="brand" class="brand">
                        <div class="brand-list">
                            <ul>
                                <li class="list-item" v-for="item in brandList" :key="item.secoundBrandId">
                                    <img :src="/^http/.test(item.vehicleBrandLogo) ? item.vehicleBrandLogo : `http://${item.vehicleBrandLogo}`" :alt="item.vehicleBrandName">
                                    <h6>{{item.vehicleBrandName}}</h6>
                                    <img src="@/assets/images/audit/icon_delete_selected.png" alt="" class="delete" @click="deleteBrandItem(item.secoundBrandId)">
                                </li>
                            </ul>
                            <div class="add-brand" @click="addBrand">
                                <img src="@/assets/images/audit/icon_bigadd.png" alt="">
                                <p>添加品牌</p>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="网站登录信息" name="loginInfo" class="login-info" v-if="userName">
                        <div class="login-info">
                            <div class="tips">
                                <div class="left">温馨提示：</div>
                                <div class="msg">协会网站可通过用户名或企业联系人电话登录</div>
                            </div>
                            <div class="user">
                                <div class="left">用户名：</div>
                                <div class="msg">
                                    <el-input
                                        v-model="userName"
                                        :disabled="true">
                                    </el-input>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="仪表工具" name="tab1" class="main-brand">
                        <el-table
                            :data="enterpriseInstrumentToolsList"
                            :header-cell-style="{'text-align':'center'}"
                            style="width: 100%">
                            <el-table-column
                            prop="orderNumber"
                            label="序号"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="instrumentName"
                            label="设备名称"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="instrumentCount"
                            label="数量"
                            align="center">
                                <template slot-scope="scope">
                                    <input class="" type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="scope.row.instrumentCount">
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="专用设备" name="tab2" class="main-brand">
                        <el-table
                            :data="enterpriseSpecialEquipmentList"
                            :header-cell-style="{'text-align':'center'}"
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
                            prop="isBus"
                            label="大中型客车"
                            align="center">
                                <template slot-scope="scope">
                                    <el-checkbox style="border-color:red" v-model="scope.row.isBus" ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="isTrunk"
                            label="大型货车"
                            align="center">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.isTrunk" ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="isCar"
                            label="小型车"
                            align="center">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.isCar" ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="otherCondition"
                            label="其他条件"
                            :width="250"
                            align="center">
                                <template slot-scope="scope">
                                    <input class="input_" style="width:250px;" type="text" v-model="scope.row.otherCondition">
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="equipmentCount"
                            label="数量"
                            align="center">
                                <template slot-scope="scope">
                                    <input class="" type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="scope.row.equipmentCount">
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="检测设备" name="tab3" class="main-brand">
                        <el-table
                            :data="enterpriseDetectEquipmentList"
                            :header-cell-style="{'text-align':'center'}"
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
                                        <input class="" type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="scope.row.equipmentCount">
                                    </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="通用设备" name="tab4" class="main-brand">
                        <el-table
                            :data="enterpriseUniversalEquipmentList"
                            :header-cell-style="{'text-align':'center'}"
                            style="width: 100%">
                            <el-table-column
                                prop="orderNumber"
                                label="序号"
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
                                align="center">
                                    <template slot-scope="scope">
                                        <input class="" type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="scope.row.equipmentCount">
                                    </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="人员条件" name="tab5" class="main-brand">
                        <el-table
                            :data="enterpriseMemberConditionList"
                            :header-cell-style="{'text-align':'center'}"
                            style="width: 100%">
                            <el-table-column
                                prop="memberConditionType"
                                label="类型"
                                width="200"
                                align="center">
                            </el-table-column>
                            <el-table-column
                                prop="memberConditionDescription"
                                label="相关条件"
                                align="left">
                            </el-table-column>
                            <el-table-column
                                prop="memberCount"
                                label="实有人数"
                                width="220"
                                align="center">
                                    <template slot-scope="scope">
                                        <input class="" type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model.number="scope.row.memberCount">
                                    </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="设施条件" name="tab6" class="main-brand">
                        <el-table
                            :data="enterpriseEquipmentConditionList"
                            :header-cell-style="{'text-align':'center'}"
                            style="width: 100%">
                            <el-table-column
                                prop="equipmentConditionType"
                                label="类型"
                                width="200"
                                align="center">
                            </el-table-column>
                            <el-table-column
                                prop="equipmentConditionDescription"
                                label="相关条件"
                                align="left">
                                <template slot-scope="scope">
                                    <p v-html="scope.row.equipmentConditionDescription"></p>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="equipmentSize"
                                label="实有面积(m²)"
                                width="220"
                                align="center">
                                    <template slot-scope="scope">
                                        <input class="" type="number" v-model="scope.row.equipmentSize">
                                    </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="组织管理" name="tab7" class="main-brand">
                        <el-table
                            :data="enterpriseOrganizationmanageConditionList"
                            :header-cell-style="{'text-align':'center'}"
                            style="width: 100%">
                            <el-table-column
                                prop="organizationmanageConditionType"
                                label="类型"
                                width="200"
                                align="center">
                            </el-table-column>
                            <el-table-column
                                prop="organizationmanageConditionDescription"
                                label="相关条件"
                                align="left">
                                <template slot-scope="scope">
                                    <p v-html="scope.row.organizationmanageConditionDescription"></p>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="相关附件" name="tab8" class="main-brand">
                        <el-table
                            :data="enterpriseAttachmentsList"
                            :header-cell-style="{'text-align':'center'}"
                            style="width: 100%">
                            <el-table-column
                                prop="attachmentsRemark"
                                label="证明文件"
                                align="left">
                            </el-table-column>
                            <el-table-column
                                prop="organizationmanageConditionDescription"
                                label="上传操作"
                                width="200"
                                align="center">
                                <template slot-scope="scope">
                                    <el-upload
                                        style="margin-top:10px;height:126px;"
                                        class="upload-demo"
                                        :action="uploadURL + 'attachment/file/upload?token=' + $getCookie('token')"
                                        :on-success="(res)=>uploadSuccessZ(res, scope.row)"
                                        :before-upload="beforeAvatarUploadZ">
                                            <img class="empty" v-show="!scope.row.url" width="120" height="120" src="@/assets/images/img_photo.png" alt="营业执照">
                                            <img v-show="scope.row.url"  width="120" height="120" :src="scope.row.url" alt="营业执照">
                                    </el-upload>
                                </template>
                            </el-table-column>
                        </el-table>
                        <p style="color:#FC4343;text-align:right;line-height:30px;margin-right:20px;font-size:14px;">注：上传照片类型为“.png、.jpg”,大小为2M</p>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </div>
        <modal :title="'添加品牌'" :alert="alert" :width="594" :height="400" @alertCancel="alertCancel" class="add-brand-alert">
            <div class="transfer clearfix">
                <div class="search">
                    <input type="text" v-model="brandSearch" placeholder="请输入名称/拼音首字母">
                </div>
                <div class="all-brand" id="allBrand">
                    <div class="all-brand-list" v-for="(val, key, index) in allBrandList" :key="index">
                        <div class="letter">{{key}}</div>
                        <div class="item" :id="item.vehicleBrandName" v-for="item in allBrandList[key]" :key="item.secoundBrandId" @click="allBrandListSlect(key, item.secoundBrandId)" :class="{active:item.checked === 1}">
                            <div class="img"><img :src="item.vehicleBrandLogo" alt=""></div>
                            <span>{{item.vehicleBrandName}}</span>
                        </div>
                    </div>
                </div>
                <div class="transfer-btn">
                    <el-button class="btn" :class="{disable:!addBrandBtn}" @click="addTransferBrand">&gt;</el-button>
                    <el-button class="btn" :class="{disable:!deleteBrandBtn}" @click="deleteTransferBrand">&lt;</el-button>
                </div>
                <div class="all-brand right">
                    <div class="all-brand-list" v-for="item in transferBrand" :key="item.secoundBrandId">
                        <div class="item" @click="transBrandListSlect(item.secoundBrandId)" :class="{active:item.checked === 1}">
                            <div class="img"><img :src="item.vehicleBrandLogo" alt=""></div>
                            <span>{{item.vehicleBrandName}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <el-button type="primary"  class="save" @click="transferSave">保存</el-button>
                <el-button @click="transferBack">返回</el-button>
            </div>
        </modal>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <el-button type="primary" @click="addRecord" :disabled="!$checkAuth('manage:enterprise:addentrecordw')">保存</el-button>
            <el-button class='back-btn' @click="goBack">返回</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import Modal from '@/components/Modal'
import { bussinessCategory, operateState, economicsList } from '@/utils/type.js'
import { CodeToText } from 'element-china-area-data'
import { filterTime } from '@/utils/filterTime.js'
import { getCookie } from '@/utils/cookie.js'
import { mapGetters } from 'vuex'
export default {
    name: 'compArchDetail',
    components: {
        BreadFoot,
        Modal
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '维修企业档案', path: '' }
            ],
            uploadURL: window.uploadURL,
            bussinessCategory,
            operateState,
            economicsList,
            formInStringty: '',
            form: {
                enterpriseType: '维修企业',
                enterpriseName: '',
                recordNumber: '',
                enterpriseRegion: '',
                enterpriseBusinessCategory: '',
                enterpriseOperatingState: '',
                enterpriseCreditIdentifier: '',
                enterpriseEconomicCategory: '',
                enterpriseOwner: '',
                enterpriseLinkName: '',
                enterpriseOwnerPhone: '',
                enterpriseLinkMobile: '',
                businessTime: [
                    filterTime('hh:ff:ss', new Date(2019, 12, 1, 9, 0) - 0),
                    filterTime('hh:ff:ss', new Date(2019, 12, 1, 18, 0) - 0)
                ],
                enterpriseOperationArea: '',
                enterpriseBusinessPhone: '',
                enterpriseOperatingAddress: '',
                enterpriseIntroduction: '',
                enterpriseBusinessCertificate: '',
                validityTime: [],
                enterprisePostalcode: '',
                enterpriseOwnerIdcardnumber: '',
                enterpriseLinkIdcardnumber: '',
                enterpriseBusinessLicense: '',
                enterprisePicUrl: '',
                enterpriseBusinessPermit: '',
                enterpriseAddr: '',
                lng: 116.403847,
                lat: 39.915526,
                enterpriseSiteUrl: '',
                enterpriseTailGasTreatmentStationIs: '0',
                enterprise4sSpecialMaintenanceIs: '0',
                enterpriseGroupStoreName: '',
                enterpriseQaDay: '',
                enterpriseRegisterEmail: '',
                enterpriseChainOrGroupIs: '0',
                enterpriseChainOrGroupOperationIs: '0',
                enterpriseQaMileage: ''
            },
            enterpriseInstrumentToolsList: [], // 仪表工具
            enterpriseSpecialEquipmentList: [], // 专业设备
            enterpriseDetectEquipmentList: [], // 检测设备
            enterpriseUniversalEquipmentList: [], // 通用设备
            enterpriseMemberConditionList: [], // 人员条件
            enterpriseEquipmentConditionList: [], // 设施条件
            enterpriseOrganizationmanageConditionList: [], // 组织管理
            enterpriseAttachmentsList: [], // 相关附加
            allBrandList: [],
            brandList: [],
            transferBrand: [],
            selectBrand: {},
            transBrand: {},
            brandSearch: '',
            addBrandBtn: false,
            deleteBrandBtn: false,
            alert: false, // 弹框开关
            BMkeyword: '', // 百度搜索关键词
            BMlocation: '', // 百度搜索城市名称
            province: '', // 省
            city: '', // 市
            region: '', // 区
            userName: '',
            regionList: [],
            tabIndex: 'basicInfo',
            sendData: false,
            roleExtEnterpriseLinkpersonIsview: 1
        }
    },
    computed: {
        ...mapGetters(['externalInfo'])
    },
    created () {
        this.getBrandList()
        this.findLoginRegion()
        if (this.$route.query.id) {
            this.breadArr.push({ title: '档案编辑', path: '' })
            this.getRecordDetail(this.$route.query.id)
        } else {
            this.breadArr.push({ title: '新增档案', path: '' })
            this.$post('external/enterprise/conditions/template/list', {})
                .then(res => {
                    if (res.status === 200) {
                        this.enterpriseAttachmentsList = res.data.enterpriseAttachmentsList
                        this.enterpriseDetectEquipmentList = res.data.enterpriseDetectEquipmentList
                        this.enterpriseEquipmentConditionList = res.data.enterpriseEquipmentConditionList
                        this.enterpriseInstrumentToolsList = res.data.enterpriseInstrumentToolsList
                        this.enterpriseMemberConditionList = res.data.enterpriseMemberConditionList
                        this.enterpriseOrganizationmanageConditionList = res.data.enterpriseOrganizationmanageConditionList
                        this.enterpriseSpecialEquipmentList = res.data.enterpriseSpecialEquipmentList
                        this.enterpriseUniversalEquipmentList = res.data.enterpriseUniversalEquipmentList
                    }
                })
            this.formInStringty = JSON.stringify(this.form)
        }
    },
    watch: {
        // 监听穿梭框左侧品牌事件
        selectBrand () {
            var add = true
            for (var i = 0; i < this.transferBrand.length; i++) {
                if (this.transferBrand[i].secoundBrandId === this.selectBrand.secoundBrandId) {
                    add = false
                    break
                }
            }
            if (!this.selectBrand.secoundBrandId) {
                add = false
            }
            this.addBrandBtn = add
        },
        // 监听穿梭框右侧选中事件
        transferBrand () {
            if (this.transferBrand.length === 0) {
                this.deleteBrandBtn = false
            }
        },
        // 监听穿梭框右侧已选中品牌
        transBrand () {
            this.deleteBrandBtn = !!this.transBrand.secoundBrandId
        },
        // 监听穿梭框搜索
        brandSearch (val) {
            if (!val) {
                return
            }
            var reg = new RegExp(val + '+', 'i')
            for (var key in this.allBrandList) {
                for (var i = 0; i < this.allBrandList[key].length; i++) {
                    var dom = document.getElementById('allBrand')
                    var top = 0
                    // 搜索名称
                    if (reg.test(this.allBrandList[key][i].vehicleBrandName)) {
                        top = document.getElementById(this.allBrandList[key][i].vehicleBrandName).offsetTop
                        dom.scrollTo(0, top - 150)
                        return
                    }
                    // 搜索拼音
                    if (reg.test(this.allBrandList[key][i].pinyin)) {
                        top = document.getElementById(this.allBrandList[key][i].vehicleBrandName).offsetTop
                        dom.scrollTo(0, top - 150)
                        return
                    }
                    // 搜索首字母
                    if (reg.test(this.allBrandList[key][i].Initials)) {
                        top = document.getElementById(this.allBrandList[key][i].vehicleBrandName).offsetTop
                        dom.scrollTo(0, top - 150)
                        return
                    }
                }
            }
        }
    },
    methods: {
        uploadSuccessZ (res, index) {
            index.url = res.data
            this.$message({
                message: '图片上传成功！',
                type: 'success'
            })
        },
        beforeAvatarUploadZ (file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        resetRecordNum () {
            if (this.$route.query.id) {
                return
            }
            this.form.recordNumber = ''
        },
        getRecordNumber () {
            let errMsg = ''
            this.$refs.form.validateField(['enterpriseName', 'enterpriseRegion', 'enterpriseBusinessCategory'], valid => {
                errMsg += valid
            })
            if (!errMsg) {
                this.$post('manage/enterprise/findEnterpriseRecordNumber', {
                    data: {
                        enterpriseName: this.form.enterpriseName,
                        enterpriseRegion: this.form.enterpriseRegion,
                        enterpriseBusinessCategory: this.form.enterpriseBusinessCategory,
                        enterpriseTypeId: '1'
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
            this.$post('archivesManagement/enterprise/view/' + id, {})
                .then(res => {
                    if (res.status === 200) {
                        this.enterpriseAttachmentsList = res.data.enterpriseAttachmentsList
                        this.enterpriseDetectEquipmentList = res.data.enterpriseDetectEquipmentList
                        this.enterpriseEquipmentConditionList = res.data.enterpriseEquipmentConditionList
                        this.enterpriseInstrumentToolsList = res.data.enterpriseInstrumentToolsList
                        this.enterpriseMemberConditionList = res.data.enterpriseMemberConditionList
                        this.enterpriseOrganizationmanageConditionList = res.data.enterpriseOrganizationmanageConditionList
                        this.enterpriseUniversalEquipmentList = res.data.enterpriseUniversalEquipmentList
                        this.enterpriseSpecialEquipmentList = res.data.enterpriseSpecialEquipmentList
                        if (this.enterpriseSpecialEquipmentList) {
                            this.enterpriseSpecialEquipmentList.forEach(e => {
                                e.isCar = !!e.isCar
                                e.isBus = !!e.isBus
                                e.isTrunk = !!e.isTrunk
                            })
                        }
                        this.form = {
                            enterpriseType: '维修企业',
                            enterpriseName: res.data.enterpriseName,
                            enterpriseRegion: res.data.enterpriseRegion,
                            enterpriseBusinessCertificate: res.data.enterpriseBusinessCertificate,
                            enterpriseCreditIdentifier: res.data.enterpriseCreditIdentifier,
                            enterpriseRegisterEmail: res.data.enterpriseRegisterEmail,
                            enterpriseOwner: res.data.enterpriseOwner,
                            enterpriseOwnerIdcardnumber: res.data.enterpriseOwnerIdcardnumber,
                            enterpriseLinkIdcardnumber: res.data.enterpriseLinkIdcardnumber,
                            enterpriseOwnerPhone: res.data.enterpriseOwnerPhone,
                            enterpriseLinkName: res.data.enterpriseLinkName,
                            enterpriseLinkMobile: res.data.enterpriseLinkMobile,
                            enterpriseBusinessPhone: res.data.enterpriseBusinessPhone,
                            enterpriseBusinessCategory: res.data.enterpriseBusinessCategory,
                            enterpriseEconomicCategory: res.data.enterpriseEconomicCategory,
                            enterprisePostalcode: res.data.enterprisePostalcode,
                            enterpriseOperatingAddress: res.data.enterpriseOperatingAddress,
                            enterpriseOperationArea: res.data.enterpriseOperationArea,
                            enterpriseIntroduction: res.data.enterpriseIntroduction,
                            enterpriseAddr: res.data.enterpriseAddr,
                            enterpriseSiteUrl: res.data.enterpriseSiteUrl,
                            enterpriseTailGasTreatmentStationIs: res.data.enterpriseTailGasTreatmentStationIs,
                            enterpriseChainOrGroupIs: res.data.enterpriseChainOrGroupIs,
                            enterpriseChainOrGroupOperationIs: res.data.enterpriseChainOrGroupOperationIs,
                            enterpriseQaMileage: res.data.enterpriseQaMileage,
                            enterprise4sSpecialMaintenanceIs: res.data.enterprise4sSpecialMaintenanceIs,
                            enterpriseGroupStoreName: res.data.enterpriseGroupStoreName,
                            enterpriseQaDay: res.data.enterpriseQaDay,
                            recordNumber: res.data.enterpriseCoding,
                            enterpriseOperatingState: String(res.data.enterpriseOperatingState),
                            lng: Number(res.data.enterpriseAddrX),
                            lat: Number(res.data.enterpriseAddrY),
                            enterpriseUsername: res.data.enterpriseUsername,
                            enterprisePassword: res.data.enterprisePassword
                            // enterprisePicUrl: res.data.enterprisePicUrl,
                            // enterpriseBusinessPermit: res.data.enterpriseBusinessPermit,
                            // enterpriseBusinessLicense: res.data.enterpriseBusinessLicense
                        }
                        if (res.data.enterpriseCertificateS && res.data.enterpriseCertificateE) {
                            this.$set(this.form, 'validityTime', [res.data.enterpriseCertificateS, res.data.enterpriseCertificateE])
                        }
                        if (res.data.enterpriseJcBusinessS && res.data.enterpriseJcBusinessE) {
                            if (res.data.enterpriseJcBusinessS.split(':').length === 2 && res.data.enterpriseJcBusinessE.split(':').length === 2) {
                                let s = res.data.enterpriseJcBusinessS + ':00'
                                let e = res.data.enterpriseJcBusinessE + ':00'
                                this.$set(this.form, 'businessTime', [s, e])
                            } else {
                                this.$set(this.form, 'businessTime', [res.data.enterpriseJcBusinessS, res.data.enterpriseJcBusinessE])
                            }
                        }
                        this.enterpriseTypeId = res.data.enterpriseTypeId // 企业类型
                        this.province = res.data.enterpriseAddrProvince // 企业地址省
                        this.city = res.data.enterpriseAddrCity // 企业地址市
                        this.region = res.data.enterpriseAddrDistrict // 企业地址区
                        this.userName = res.data.enterpriseUsername
                        this.brandList = res.data.enterpriseVehicleBrandList
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
                this.$router.push('/companyArchw')
            } else {
                this.$confirm('返回后数据将不会保存，是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push('/companyArchw')
                })
            }
        },
        // 获取车辆品牌
        getBrandList () {
            this.$post('/external/vehicle/brand/secoundBrand')
                .then(res => {
                    if (res.status === 200) {
                        res.data.forEach(item => {
                            item.pinyin = window.pinyinUtil.getPinyin(item.vehicleBrandName).replace(' ', '')
                            item.Initials = window.pinyinUtil.getFirstLetter(item.vehicleBrandName)
                        })
                        // 按首字母排序
                        var brandList = res.data.sort(function (objA, objB) {
                            if (objA.vehicleBrandChar > objB.vehicleBrandChar) {
                                return 1
                            } else if (objA.vehicleBrandChar < objB.vehicleBrandChar) {
                                return -1
                            } else {
                                return 0
                            }
                        })
                        // 将同字母类型进行分类
                        var obj = {}
                        brandList.forEach(item => {
                            item.checked = 0
                            if (!obj[item.vehicleBrandChar]) {
                                obj[item.vehicleBrandChar] = [item]
                            } else {
                                obj[item.vehicleBrandChar].push(item)
                            }
                        })
                        this.allBrandList = obj
                    }
                })
        },
        // 新增企业档案
        addRecord () {
            if (this.sendData) {
                return
            }
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                if (this.enterpriseSpecialEquipmentList) {
                    this.enterpriseSpecialEquipmentList.forEach(e => {
                        e.isCar = e.isCar ? 1 : 0
                        e.isBus = e.isBus ? 1 : 0
                        e.isTrunk = e.isTrunk ? 1 : 0
                    })
                }
                if (this.enterpriseEquipmentConditionList) {
                    this.enterpriseEquipmentConditionList.forEach(e => {
                        e.equipmentSize = e.equipmentSize - 0
                        if (typeof e.equipmentSize === 'number') {
                            e.equipmentSize = e.equipmentSize.toFixed(2)
                        }
                    })
                }
                var obj = {
                    enterpriseInstrumentToolsList: this.enterpriseInstrumentToolsList,
                    enterpriseSpecialEquipmentList: this.enterpriseSpecialEquipmentList,
                    enterpriseDetectEquipmentList: this.enterpriseDetectEquipmentList,
                    enterpriseUniversalEquipmentList: this.enterpriseUniversalEquipmentList,
                    enterpriseMemberConditionList: this.enterpriseMemberConditionList,
                    enterpriseEquipmentConditionList: this.enterpriseEquipmentConditionList,
                    enterpriseOrganizationmanageConditionList: this.enterpriseOrganizationmanageConditionList,
                    enterpriseAttachmentsList: this.enterpriseAttachmentsList,
                    data: {
                        enterpriseCoding: this.form.recordNumber,
                        enterpriseLinkIdcardnumber: this.form.enterpriseLinkIdcardnumber,
                        enterpriseOwnerIdcardnumber: this.form.enterpriseOwnerIdcardnumber,
                        enterpriseName: this.form.enterpriseName, // 企业名称
                        enterpriseRegion: this.form.enterpriseRegion, // 所在区域
                        enterpriseBusinessCertificate: this.form.enterpriseBusinessCertificate, // 经营许可证号
                        enterpriseCreditIdentifier: this.form.enterpriseCreditIdentifier, // 社会信用代码
                        enterpriseOwner: this.form.enterpriseOwner, // 企业负责人
                        enterpriseLinkName: this.form.enterpriseLinkName, // 企业联系人
                        enterpriseBusinessPhone: this.form.enterpriseBusinessPhone, // 企业业务电话
                        enterpriseBusinessCategory: this.form.enterpriseBusinessCategory, // 业务类别
                        enterpriseTypeId: '1', // 企业类型
                        enterpriseRegisterEmail: this.form.enterpriseRegisterEmail, // 企业编码
                        enterpriseEconomicCategory: this.form.enterpriseEconomicCategory, // 经济类型
                        enterpriseOwnerPhone: this.form.enterpriseOwnerPhone, // 负责人电话
                        enterpriseLinkMobile: this.form.enterpriseLinkMobile, // 联系人电话
                        enterprisePostalcode: this.form.enterprisePostalcode, // 企业邮政编码
                        enterpriseOperatingState: this.form.enterpriseOperatingState, // 企业经营状态
                        enterpriseOperatingAddress: this.form.enterpriseOperatingAddress, // 企业经营地址
                        enterpriseOperationArea: this.form.enterpriseOperationArea, // 企业经营范围
                        enterpriseIntroduction: this.form.enterpriseIntroduction, // 企业经营概况
                        enterpriseAddrProvince: this.externalInfo.province, // 企业地址省
                        enterpriseAddrCity: this.externalInfo.city, // 企业地址市
                        enterpriseAddrDistrict: this.form.enterpriseRegion, // 企业地址区
                        enterpriseAddr: this.form.enterpriseAddr, // 企业详细地址
                        enterpriseAddrX: String(this.form.lng), // 企业地址经度
                        enterpriseAddrY: String(this.form.lat), // 企业地址纬度
                        enterpriseSiteUrl: this.form.enterpriseSiteUrl, // 企业网址
                        enterpriseTailGasTreatmentStationIs: this.form.enterpriseTailGasTreatmentStationIs, // 是否尾气治理站
                        enterpriseChainOrGroupIs: this.form.enterpriseChainOrGroupIs, // 是否连锁或集团经营企业
                        enterpriseChainOrGroupOperationIs: this.form.enterpriseChainOrGroupOperationIs, // 是否连锁或集团经营总店
                        enterpriseQaMileage: this.form.enterpriseQaMileage, // 质量保障里程
                        enterprise4sSpecialMaintenanceIs: this.form.enterprise4sSpecialMaintenanceIs, // 是否为4s店或特约维修站
                        enterpriseGroupStoreName: this.form.enterpriseGroupStoreName, // 连锁或集团经营总店名称
                        enterpriseQaDay: this.form.enterpriseQaDay, // 质量保障日期
                        enterpriseBusinessLicense: this.form.enterpriseBusinessLicense, // 营业执照
                        enterpriseBusinessPermit: this.form.enterpriseBusinessPermit, // 经营许可证
                        enterprisePicUrl: this.form.enterprisePicUrl, // 企业门店照片
                        enterpriseUsername: this.form.enterpriseUsername, // 管理员账号
                        enterprisePassword: this.form.enterprisePassword // 管理员密码
                    }
                }
                if (this.form.validityTime && this.form.validityTime.length) {
                    obj.data.enterpriseCertificateS = this.form.validityTime[0] // 许可证有效期开始时间
                    obj.data.enterpriseCertificateE = this.form.validityTime[1] // 许可证有效期结束时间
                }
                if (this.form.businessTime && this.form.businessTime.length) {
                    obj.data.enterpriseJcBusinessS = this.form.businessTime[0] // 许可证有效期开始时间
                    obj.data.enterpriseJcBusinessE = this.form.businessTime[1] // 许可证有效期结束时间
                }
                if (this.brandList && this.brandList.length) {
                    var ary = []
                    this.brandList.forEach(item => {
                        ary.push(item.secoundBrandId)
                    })
                    obj.enterpriseVehicleBrandJsonStr = ary + ''
                }
                this.sendData = true
                let url = ''
                if (this.$route.query.id) {
                    obj.data.enterpriseId = this.$route.query.id
                    url = 'archivesManagement/enterprise/save'
                } else {
                    url = 'archivesManagement/enterprise/save'
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
                                    this.$router.push('/companyArchw')
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
        // 穿梭框保存
        transferSave () {
            this.brandList = [...this.transferBrand]
            this.transBrand = {}
            this.selectBrand = {}
            this.brandSearch = ''
            this.alert = false
            for (var val in this.allBrandList) {
                this.allBrandList[val].forEach(item => {
                    item.checked = 0
                })
            }
            this.transferBrand.forEach(item => {
                item.checked = 0
            })
        },
        // 穿梭框返回
        transferBack () {
            this.transferBrand = [...this.brandList]
            this.transBrand = {}
            this.selectBrand = {}
            this.brandSearch = ''
            this.alert = false
            for (var val in this.allBrandList) {
                this.allBrandList[val].forEach(item => {
                    item.checked = 0
                })
            }
            this.transferBrand.forEach(item => {
                item.checked = 0
            })
        },
        // 穿梭框添加品牌
        addTransferBrand () {
            if (this.addBrandBtn) {
                this.selectBrand.checked = 0
                this.transferBrand.push(JSON.parse(JSON.stringify(this.selectBrand)))
                this.addBrandBtn = false
            }
        },
        // 穿梭框删除品牌
        deleteTransferBrand () {
            this.transferBrand.forEach((item, index, ary) => {
                if (item.secoundBrandId === this.transBrand.secoundBrandId) {
                    ary.splice(index, 1)
                    this.transBrand = {}
                }
            })
        },
        // 所有品牌列表选中事件
        allBrandListSlect (key, id) {
            if (this.selectBrand.checked) {
                this.selectBrand.checked = 0
            }
            this.allBrandList[key].forEach(item => {
                if (item.secoundBrandId === id) {
                    item.checked = 1
                    this.selectBrand = item
                }
            })
        },
        // 穿梭框品牌列表选中事件
        transBrandListSlect (id) {
            this.transferBrand.forEach(item => {
                if (item.secoundBrandId === id) {
                    item.checked = 1
                    this.transBrand = item
                } else {
                    item.checked = 0
                }
            })
        },
        // 删除主修品牌
        deleteBrandItem (id) {
            for (let i = 0; i < this.brandList.length; i++) {
                if (id === this.brandList[i].secoundBrandId) {
                    this.brandList.splice(i, 1)
                }
            }
        },
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
        // 添加品牌弹窗
        addBrand () {
            !this.brandList && (this.brandList = [])
            this.transferBrand = [...this.brandList]
            this.alert = true
        },
        // 关闭弹窗
        alertCancel () {
            this.brandSearch = ''
            this.alert = false
        },
        // 搜索百度地图
        mapSearch () {
            // 遍历地址信息,匹配省市区
            this.BMkeyword = this.form.enterpriseAddr
            this.BMlocation = CodeToText[this.externalInfo.city]
        },
        // 地区过滤
        regionToText (id) {
            for (var i = 0; i < this.regionList.length; i++) {
                if (this.regionList[i].regionId === id) {
                    return this.regionList[i].regionName
                }
            }
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
.compArchDetail {
    .content {
        min-height: 700px;
        padding-bottom: 100px;
        .basic-info {
            padding: 0 30px;
        }
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
        .login-info {
            min-height: 500px;
            .tips {
                font-size: 14px;
                color: #999;
                line-height: 34px;
                .left {
                    float: left;
                    width: 176px;
                    text-align: right;
                }
                .msg {
                    text-align: left;
                    width: 346px;
                    margin-left: 176px;
                }
            }
            .user {
                margin-top: 10px;
                font-size: 14px;
                color: #000;
                line-height: 34px;
                .left {
                    float: left;
                    width: 176px;
                    text-align: right;
                }
                .msg {
                    margin-left: 176px;
                    width: 346px;
                }
            }
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
</style>

<style lang="less">
.compArchDetail {
    background: #FFF;
    .el-select {
        width: 100%;
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
