import Vue from 'vue'
import Router from 'vue-router'
// import { getCookie } from './utils/cookie.js'
import Home from './views/Home.vue'
import store from './store.js'

Vue.use(Router)
var router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            name: 'layout',
            component: () => import('./views/common/layout.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    meta: {
                        title: '首页'
                    },
                    component: Home
                },
                {
                    path: '/empty',
                    name: 'empty'
                },
                {
                    path: '/checkNotice',
                    name: 'checkNotice',
                    meta: {
                        title: '查看通知',
                        isDetail: true,
                        tag: 'notice'
                    },
                    component: () => import('./views/business/checkNotice.vue')
                },
                // 业务操作
                {
                    path: '/notice',
                    name: 'notice',
                    meta: {
                        tag: 'notice',
                        title: '通知发布'
                    },
                    component: () => import('./views/business/notice.vue')
                },
                {
                    path: '/addNotice',
                    name: 'addNotice',
                    meta: {
                        tag: 'notice',
                        isDetail: true,
                        title: '通知发布'
                    },
                    component: () => import('./views/business/addNotice.vue')
                },
                {
                    path: '/recordInformation',
                    name: 'recordInformation',
                    meta: {
                        tag: 'audit',
                        title: '企业备案'
                    },
                    component: () => import('./views/fileManage/recordInformation.vue')
                },
                {
                    path: '/recordInformationDetail',
                    name: 'audit',
                    meta: {
                        tag: 'audit',
                        isDetail: true,
                        title: '企业备案详情'
                    },
                    component: () => import('./views/fileManage/recordInformationDetail.vue')
                },
                {
                    path: '/recordPerson',
                    name: 'audit',
                    meta: {
                        tag: 'audit',
                        isDetail: true,
                        title: '从业人员'
                    },
                    component: () => import('./views/fileManage/recordPerson.vue')
                },
                {
                    path: '/maintenanceCertificate',
                    name: 'audit',
                    meta: {
                        tag: 'audit',
                        isDetail: true,
                        title: '维护合格证'
                    },
                    component: () => import('./views/fileManage/maintenanceCertificate.vue')
                },
                {
                    path: '/creditEva',
                    redirect: '/creditEva/applyAudit',
                    name: 'creditEva',
                    meta: {
                        tag: 'creditEva',
                        title: '企业诚信参评'
                    },
                    component: () => import('./views/common/creditEva.vue'),
                    children: [
                        {
                            path: '/creditEva/applyAudit',
                            name: 'applyAudit',
                            meta: {
                                tag: 'applyAudit',
                                title: '企业参评审核'
                            },
                            component: () => import('./views/business/applyAudit.vue')
                        },
                        {
                            path: '/creditEva/process',
                            name: 'process',
                            meta: {
                                tag: 'process',
                                title: '企业参评管理'
                            },
                            component: () => import('./views/business/process.vue')
                        },
                        {
                            path: '/creditEva/addModel',
                            name: 'addModel',
                            meta: {
                                tag: 'applyAudit',
                                title: '诚信指标设置'
                            },
                            component: () => import('./views/business/addModel.vue')
                        }
                    ]
                },
                {
                    path: '/creditEva/applyAuditDetail',
                    name: 'applyAuditDetail',
                    meta: {
                        title: '参评审核详情',
                        isDetail: true,
                        tag: 'applyAudit'
                    },
                    component: () => import('./views/business/applyAuditDetail.vue')
                },
                {
                    path: '/creditEva/processDetail',
                    name: 'processDetail',
                    meta: {
                        title: '参评详情',
                        isDetail: true,
                        tag: 'process'
                    },
                    component: () => import('./views/business/processDetail.vue')
                },
                {
                    path: '/certificate',
                    name: 'certificate',
                    meta: {
                        title: '合格证发放'
                    },
                    component: () => import('./views/business/certificate.vue')
                },
                {
                    path: '/certificateManage',
                    name: 'certificateManage',
                    meta: {
                        title: '合格证管理'
                    },
                    component: () => import('./views/business/certificateManage.vue')
                },
                {
                    path: '/complainApply',
                    name: 'complainApply',
                    meta: {
                        title: '投诉受理',
                        tag: 'complainApply'
                    },
                    component: () => import('./views/business/complainApply.vue')
                },
                {
                    path: '/complainApplyDetail',
                    name: 'complainApplyDetail',
                    meta: {
                        title: '投诉受理详情',
                        isDetail: true,
                        tag: 'complainApply'
                    },
                    component: () => import('./views/business/complainApplyDetail.vue')
                },
                // 档案管理
                // {
                //     path: '/companyArch',
                //     name: 'companyArch',
                //     meta: {
                //         title: '企业档案',
                //         tag: 'companyArch'
                //     },
                //     component: () => import('./views/fileManage/companyArch.vue')
                // },
                // {
                //     path: '/compArchDetail',
                //     name: 'compArchDetail',
                //     meta: {
                //         title: '企业档案详情',
                //         isDetail: true,
                //         tag: 'companyArch'
                //     },
                //     component: () => import('./views/fileManage/compArchDetail.vue')
                // },
                // 维修企业档案
                {
                    path: '/companyArchw',
                    name: 'companyArchw',
                    meta: {
                        title: '维修企业档案',
                        tag: 'companyArchw'
                    },
                    component: () => import('./views/fileManage/companyArchw.vue')
                },
                {
                    path: '/compArchDetailw',
                    name: 'compArchDetailw',
                    meta: {
                        title: '维修档案详情',
                        isDetail: true,
                        tag: 'companyArchw'
                    },
                    component: () => import('./views/fileManage/compArchDetailw.vue')
                },
                // 检测企业档案
                {
                    path: '/companyArchj',
                    name: 'companyArchj',
                    meta: {
                        title: '检测企业档案',
                        tag: 'companyArchj'
                    },
                    component: () => import('./views/fileManage/companyArchj.vue')
                },
                {
                    path: '/testingArchDetail',
                    name: 'testingArchDetail',
                    meta: {
                        title: '检测企业档案详情',
                        isDetail: true,
                        tag: 'companyArchj'
                    },
                    component: () => import('./views/fileManage/testingArchDetail.vue')
                },
                // 运输企业档案
                {
                    path: '/companyArchy',
                    name: 'companyArchy',
                    meta: {
                        title: '运输企业档案',
                        tag: 'companyArchy'
                    },
                    component: () => import('./views/fileManage/companyArchy.vue')
                },
                {
                    path: '/ysEnterpriseDetail',
                    name: 'ysEnterpriseDetail',
                    meta: {
                        title: '运输企业档案详情',
                        tag: 'ysEnterpriseDetail'
                    },
                    component: () => import('./views/fileManage/ysEnterpriseDetail.vue')
                },
                {
                    path: '/compArchDetaily',
                    name: 'compArchDetaily',
                    meta: {
                        title: '维修档案详情',
                        isDetail: true,
                        tag: 'companyArchy'
                    },
                    component: () => import('./views/fileManage/compArchDetaily.vue')
                },
                {
                    path: '/carArchives',
                    name: 'carArchives',
                    meta: {
                        title: '车辆档案',
                        tag: 'carArchives'
                    },
                    component: () => import('./views/fileManage/carArchives.vue')
                },
                {
                    path: '/archivesDetail',
                    name: 'archivesDetail',
                    meta: {
                        title: '车辆档案详情',
                        isDetail: true,
                        tag: 'carArchives'
                    },
                    component: () => import('./views/fileManage/archivesDetail.vue')
                },
                {
                    path: '/newCarArchives',
                    name: 'newCarArchives',
                    meta: {
                        title: '新增车辆档案',
                        isDetail: true,
                        tag: 'carArchives'
                    },
                    component: () => import('./views/fileManage/newCarArchives.vue')
                },
                // 运输车辆车技档案
                {
                    path: '/transportArch',
                    name: 'transportArch',
                    meta: {
                        title: '运输车辆车技档案',
                        tag: 'transportArch'
                    },
                    component: () => import('./views/fileManage/transportArch.vue')
                },
                {
                    path: '/transportArch2',
                    name: 'transportArch2',
                    meta: {
                        title: '运输车辆车技档案',
                        tag: 'transportArch'
                    },
                    component: () => import('./views/fileManage/transportArch2.vue')
                },
                {
                    path: '/transportDetail',
                    name: 'transportDetail',
                    meta: {
                        title: '运输车辆车技档案详情',
                        isDetail: true,
                        tag: 'transportArch'
                    },
                    component: () => import('./views/fileManage/transportDetail.vue')
                },
                // 查询统计
                // {
                //     path: '/detailSearch',
                //     name: 'detailSearch',
                //     meta: {
                //         title: '电子健康档案',
                //         tag: 'detailSearch'
                //     },
                //     component: () => import('./views/analysis/detailSearch.vue')
                // },
                {
                    path: '/workDetail',
                    name: 'workDetail',
                    meta: {
                        title: '维修记录详情',
                        isDetail: true,
                        tag: 'detailSearch'
                    },
                    component: () => import('./views/analysis/workDetail.vue')
                },
                {
                    path: '/maintainRecord',
                    name: 'maintainRecord',
                    meta: {
                        title: '维修记录',
                        tag: 'maintainRecord'
                    },
                    component: () => import('./views/analysis/maintainRecord.vue')
                },
                {
                    path: '/maintainDetail',
                    name: 'maintainDetail',
                    meta: {
                        title: '维修记录详情',
                        isDetail: true,
                        tag: 'maintainRecord'
                    },
                    component: () => import('./views/analysis/maintainDetail.vue')
                },
                {
                    path: '/synthesizeWork',
                    name: 'synthesizeWork',
                    meta: {
                        title: '检测记录',
                        tag: 'synthesizeWork'
                    },
                    component: () => import('./views/analysis/synthesizeWork.vue')
                },
                {
                    path: '/synthesizeWorkDetail',
                    name: 'synthesizeWorkDetail',
                    meta: {
                        title: '检测记录详情',
                        tag: 'synthesizeWork'
                    },
                    component: () => import('./views/analysis/synthesizeWorkDetail.vue')
                },
                {
                    path: '/complainManage',
                    name: 'complainManage',
                    meta: {
                        title: '服务评价查询'
                    },
                    component: () => import('./views/analysis/complainManage.vue')
                },
                {
                    path: '/complainDetail',
                    name: 'complainDetail',
                    meta: {
                        title: '服务评价详情'
                    },
                    component: () => import('./views/analysis/complainDetail.vue')
                },
                {
                    path: '/distantDetectionRecords',
                    name: 'distantDetectionRecords',
                    meta: {
                        title: '异地检测作业查询'
                    },
                    component: () => import('./views/analysis/distantDetectionRecords.vue')
                },
                {
                    path: '/distantDetectionRecordDetail',
                    name: 'distantDetectionRecordDetail',
                    meta: {
                        title: '异地检测作业详情'
                    },
                    component: () => import('./views/analysis/distantDetectionRecordDetail.vue')
                },
                {
                    path: '/maintainPlanQuery',
                    name: 'maintainPlanQuery',
                    meta: {
                        title: '维护计划查询统计'
                    },
                    component: () => import('./views/analysis/maintainPlan/maintainPlanQuery.vue')
                },
                {
                    path: '/enterpriseVehicleQuery',
                    name: 'enterpriseVehicleQuery',
                    meta: {
                        title: '企业车辆异常预警'
                    },
                    component: () => import('./views/analysis/enterpriseVehicleQuery/enterpriseVehicleQuery.vue')
                },
                {
                    path: '/enterpriseVehicleDetail',
                    name: 'enterpriseVehicleDetail',
                    meta: {
                        title: '企业车辆异常预警详情'
                    },
                    component: () => import('./views/analysis/enterpriseVehicleQuery/enterpriseVehicleDetail.vue')
                },
                {
                    path: '/certificateFiling',
                    name: 'certificateFiling',
                    meta: {
                        title: '合格证备案统计'
                    },
                    component: () => import('./views/analysis/certificate/certificateFiling.vue')
                },
                {
                    path: '/transportVehicleBusiness',
                    name: 'transportVehicleBusiness',
                    meta: {
                        title: '运输车辆维护业务统计'
                    },
                    component: () => import('./views/analysis/transportVehicleBusiness/index.vue')
                },
                {
                    path: '/transportMaintainModel',
                    name: 'transportMaintainModel',
                    meta: {
                        title: '运输车辆维护车型统计',
                        tag: 'transportMaintainModel'
                    },
                    component: () => import('./views/analysis/transportMaintainModel/transportMaintainModel.vue')
                },
                {
                    path: '/transportJcBusiness',
                    name: 'transportJcBusiness',
                    meta: {
                        title: '运输车辆检测业务统计',
                        tag: 'transportJcBusiness'
                    },
                    component: () => import('./views/analysis/transportJcBusiness/transportJcBusiness.vue')
                },
                {
                    path: '/transportJcModel',
                    name: 'transportJcModel',
                    meta: {
                        title: '运输车辆检测车型统计',
                        tag: 'transportJcModel'
                    },
                    component: () => import('./views/analysis/transportJcModel/transportJcModel.vue')
                },
                // 系统管理
                {
                    path: '/permissionEva',
                    redirect: '/permissionEva/userManage',
                    name: 'permissionEva',
                    meta: {
                        tag: 'permissionEva',
                        title: '权限管理'
                    },
                    component: () => import('./views/common/permissionEva.vue'),
                    children: [
                        {
                            path: '/permissionEva/userManage',
                            name: 'userManage',
                            meta: {
                                tag: 'userManage',
                                title: '用户管理'
                            },
                            component: () => import('./views/sysManage/userManage.vue')
                        },
                        {
                            path: '/permissionEva/roleManager',
                            name: 'roleManager',
                            meta: {
                                tag: 'roleManager',
                                title: '角色管理'
                            },
                            component: () => import('./views/sysManage/roleManager.vue')
                        },
                        {
                            path: '/permissionEva/departmentManager',
                            name: 'departmentManager',
                            meta: {
                                tag: 'departmentManager',
                                title: '部门管理'
                            },
                            component: () => import('./views/sysManage/departmentManager.vue')
                        }
                    ]
                },
                {
                    path: '/permissionEva/roleDetail',
                    name: 'roleDetail',
                    meta: {
                        title: '角色详情',
                        isDetail: true,
                        tag: 'roleManager'
                    },
                    component: () => import('./views/sysManage/roleDetail.vue')
                },
                // 菜单管理
                {
                    path: '/menuManager',
                    name: 'menuManager',
                    meta: {
                        title: '菜单管理'
                    },
                    component: () => import('./views/sysManage/menuManager.vue')
                },
                {
                    path: '/operationLog',
                    name: 'operationLog',
                    meta: {
                        title: '日志管理'
                    },
                    component: () => import('./views/sysManage/operationLog.vue')
                },
                {
                    path: '/certificateOffice',
                    name: 'certificateOffice',
                    meta: {
                        title: '发证机关管理'
                    },
                    component: () => import('./views/sysManage/certificateOffice.vue')
                },
                {
                    path: '/paramManage',
                    name: 'paramManage',
                    meta: {
                        title: '参数管理'
                    },
                    component: () => import('./views/sysManage/paramManage.vue')
                },
                {
                    path: '/recordAuth',
                    name: 'recordAuth',
                    meta: {
                        title: '备案认证'
                    },
                    component: () => import('./views/business/record/recordAuth.vue')
                },
                {
                    path: '/recordAuthDetail',
                    name: 'recordAuthDetail',
                    meta: {
                        title: '备案认证详情'
                    },
                    component: () => import('./views/business/record/recordAuthDetail.vue')
                },
                {
                    path: '/recordApply',
                    name: 'recordApply',
                    meta: {
                        title: '新增备案认证'
                    },
                    component: () => import('./views/business/record/recordApply.vue')
                },
                {
                    path: '/recordInfoSearch',
                    name: 'recordInfoSearch',
                    meta: {
                        title: '备案信息查询'
                    },
                    component: () => import('./views/business/record/recordInfoSearch.vue')
                },
                {
                    path: '/inquestInfo',
                    name: 'inquestInfo',
                    meta: {
                        title: '现场勘验'
                    },
                    component: () => import('./views/fileManage/inquestInfo.vue')
                },
                {
                    path: '/inquestInfoDetail',
                    name: 'inquestInfoDetail',
                    meta: {
                        title: '现场勘验详情'
                    },
                    component: () => import('./views/fileManage/inquestInfoDetail.vue')
                },
                {
                    path: '/inquestInfoDetailAll',
                    name: 'inquestInfoDetailAll',
                    meta: {
                        title: '现场勘验详情'
                    },
                    component: () => import('./views/fileManage/inquestInfoDetailAll.vue')
                },
                {
                    path: '/electronicHealth',
                    name: 'electronicHealth',
                    meta: {
                        title: '电子健康档案'
                    },
                    component: () => import('./views/fileManage/electronicHealth.vue')
                },
                {
                    path: '/hotServiceManage',
                    name: 'hotServiceManage',
                    meta: {
                        title: '热门服务管理'
                    },
                    component: () => import('./views/business/setting/hotServiceManage.vue')
                },
                {
                    path: '/newsManage',
                    name: 'newsManage',
                    meta: {
                        title: '新闻管理'
                    },
                    component: () => import('./views/business/setting/newsManage.vue')
                },
                {
                    path: '/newsDetail',
                    name: 'newsDetail',
                    meta: {
                        title: '新闻详情'
                    },
                    component: () => import('./views/business/setting/newsDetail.vue')
                },
                {
                    path: '/societyManager',
                    name: 'societyManager',
                    meta: {
                        title: '协会管理'
                    },
                    component: () => import('./views/business/setting/societyManager.vue')
                },
                {
                    path: '/linkType',
                    name: 'linkType',
                    meta: {
                        title: '链接管理'
                    },
                    component: () => import('./views/business/setting/linkType.vue')
                },
                // {
                //     path: '/erweiWork',
                //     name: 'erweiWork',
                //     meta: {
                //         title: '从业人员管理'
                //     },
                //     component: () => import('./views/analysis/erweiWork.vue')
                // },
                {
                    path: '/employeesArch',
                    name: 'employeesArch',
                    meta: {
                        title: '从业人员档案',
                        tag: 'employeesArch'
                    },
                    component: () => import('./views/archives/employeesArch.vue')
                },
                {
                    path: '/employeesArchDetail',
                    name: 'employeesArchDetail',
                    meta: {
                        title: '从业人员档案详情',
                        tag: 'employeesArch'
                    },
                    component: () => import('./views/archives/employeesArchDetail.vue')
                },
                {
                    path: '/employeesArchNew',
                    name: 'employeesArchNew',
                    meta: {
                        title: '从业人员档案建档',
                        tag: 'employeesArch'
                    },
                    component: () => import('./views/archives/employeesArchNew.vue')
                },
                {
                    path: '/employeesHealthFillIn',
                    name: 'employeesHealthFillIn',
                    meta: {
                        title: '从业人员健康数据填报',
                        tag: 'employeesHealthFillIn'
                    },
                    component: () => import('./views/archives/employeesHealthFillIn.vue')
                },
                {
                    path: '/employeesHealthFillInDetail',
                    name: 'employeesHealthFillInDetail',
                    meta: {
                        title: '从业人员健康数据填报',
                        tag: 'employeesHealthFillIn'
                    },
                    component: () => import('./views/archives/employeesHealthFillInDetail.vue')
                },
                {
                    path: '/advertisement',
                    name: 'advertisement',
                    meta: {
                        title: '广告管理'
                    },
                    component: () => import('./views/business/setting/advertisement.vue')
                },
                {
                    path: '/employeesStatistics',
                    name: 'employeesStatistics',
                    meta: {
                        title: '从业人员复工统计',
                        tag: 'employeesStatistics'
                    },
                    component: () => import('./views/analysis/employeesStatistics.vue')
                },
                {
                    path: '/environmentTesting',
                    name: 'environmentTesting',
                    meta: {
                        title: '环保检测报告查询',
                        tag: 'environmentTesting'
                    },
                    component: () => import('./views/analysis/environmentTesting.vue')
                },
                {
                    path: '/dataArchiving',
                    name: 'dataArchiving',
                    meta: {
                        title: '车辆技术档案归集管理'
                    },
                    component: () => import('./views/fileManage/dataArchiving.vue')
                },
                {
                    path: '/enterpriseArchivesDetail',
                    name: 'enterpriseArchivesDetail',
                    redirect: '/creditEva/enterpriseArchivesDetail',
                    meta: {
                        title: '车辆技术档案归集管理详情'
                    },
                    component: () => import('./views/common/tags.vue'),
                    children: [
                        {
                            path: '/creditEva/enterpriseArchivesDetail',
                            name: 'enterpriseArchivesDetail',
                            meta: {
                                tag: 'applyAudit',
                                title: '企业参评审核'
                            },
                            component: () => import('./views/fileManage/enterpriseArchivesDetail.vue')
                        },
                        {
                            path: '/creditEva/enterpriseArchivesDetail2',
                            name: 'enterpriseArchivesDetail2',
                            meta: {
                                tag: 'process',
                                title: '企业参评管理'
                            },
                            component: () => import('./views/fileManage/enterpriseArchivesDetail2.vue')
                        }
                    ]
                },
                {
                    path: '/doubleRandom',
                    name: 'doubleRandom',
                    meta: {
                        title: '双随机抽查',
                        tag: 'doubleRandom'
                    },
                    component: () => import('./views/business/doubleRandom.vue')
                },
                {
                    path: '/vehicleUnit',
                    name: 'vehicleUnit',
                    meta: {
                        title: '车辆单位',
                        tag: 'vehicleUnit'
                    },
                    component: () => import('./views/business/vehicleUnit.vue')
                },
                {
                    path: '/vehicleUnitDetail',
                    name: 'vehicleUnitDetail',
                    meta: {
                        title: '车辆单位详情',
                        tag: 'vehicleUnitDetail'
                    },
                    component: () => import('./views/business/vehicleUnitDetail.vue')
                },
                {
                    path: '/maintenanceWork',
                    name: 'maintenanceWork',
                    meta: {
                        title: '维护作业查询',
                        tag: 'maintenanceWork'
                    },
                    component: () => import('./views/analysis/maintenanceWork.vue')
                },
                {
                    path: '/maintenanceRecordDetail',
                    name: 'maintenanceRecordDetail',
                    meta: {
                        title: '维护作业详情',
                        tag: 'maintenanceRecordDetail'
                    },
                    component: () => import('./views/analysis/maintenanceRecordDetail.vue')
                },
                {
                    path: '/companyData',
                    name: 'companyData',
                    meta: {
                        title: '健康档案数据上传统计',
                        tag: 'companyData'
                    },
                    component: () => import('./views/analysis/companyData.vue')
                },
                {
                    path: '/companyDataDetail',
                    name: 'companyDataDetail',
                    meta: {
                        title: '健康档案数据上传统计详情',
                        tag: 'companyData'
                    },
                    component: () => import('./views/analysis/companyDataDetail.vue')
                },
                {
                    path: '/testReport',
                    name: 'testReport',
                    meta: {
                        title: '环保检测报告详情',
                        tag: 'testReport'
                    },
                    component: () => import('./views/analysis/testReport.vue')
                },
                {
                    path: '/disposalEnterpriseManage',
                    name: 'disposalEnterpriseManage',
                    meta: {
                        title: '处置企业管理'
                    },
                    component: () => import('./views/wasteManage/disposalEnterpriseManage.vue')
                },
                {
                    path: '/disposalEnterpriseManageDetail',
                    name: 'disposalEnterpriseManageDetail',
                    meta: {
                        title: '处置企业管理'
                    },
                    component: () => import('./views/wasteManage/disposalEnterpriseManageDetail.vue')
                },
                {
                    path: '/abnormalWarning',
                    name: 'abnormalWarning',
                    meta: {
                        title: '固废物异常预警'
                    },
                    component: () => import('./views/wasteManage/abnormalWarning.vue')
                },
                {
                    path: '/transportationEnterprise',
                    name: 'transportationEnterprise',
                    meta: {
                        title: '运输企业管理'
                    },
                    component: () => import('./views/wasteManage/transportationEnterprise.vue')
                },
                {
                    path: '/transportationEnterpriseDetail',
                    name: 'transportationEnterpriseDetail',
                    meta: {
                        title: '运输企业管理详情'
                    },
                    component: () => import('./views/wasteManage/transportationEnterpriseDetail.vue')
                },
                {
                    path: '/wasteTransfer',
                    name: 'wasteTransfer',
                    meta: {
                        title: '固废物转移联单'
                    },
                    component: () => import('./views/wasteManage/wasteTransfer.vue')
                },
                {
                    path: '/viewWasteTransfer',
                    name: 'viewWasteTransfer',
                    meta: {
                        title: '查看固废物转移联单'
                    },
                    component: () => import('./views/wasteManage/viewWasteTransfer.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue')
        }
    ]
})
router.beforeEach((to, from, next) => {
    let login = true
    let path = to.path
    if (!/home|login|empty/.test(to.path)) {
        let flag = true
        // console.log(store.state.visitedViews, 'tabsList')
        for (let i = 0; i < store.state.visitedViews.length; i++) {
            if (store.state.visitedViews[i].name === to.name) {
                flag = false
                break
            }
        }
        if (flag) {
            store.state.visitedViews.push({
                path: to.path,
                name: to.name,
                title: to.meta.title
            })
            store.state.tabShow = true
        }
        // console.log(to.name, 'namename')
        if (to.name === 'addNotice') {
            store.state.activeTab = 'notice'
        } else if (to.name === 'audit') {
            store.state.activeTab = 'recording'
        } else if (to.name === 'applyAudit' || to.name === 'process' || to.name === 'addModel' || to.name === 'processDetail' || to.name === 'applyAuditDetail') {
            store.state.activeTab = 'creditEva'
        } else if (to.name === 'complainApplyDetail') {
            store.state.activeTab = 'complainApply'
        } else if (to.name === 'compArchDetailw') {
            store.state.activeTab = 'companyArchw'
        } else if (to.name === 'testingArchDetail') {
            store.state.activeTab = 'companyArchj'
        } else if (to.name === 'compArchDetaily') {
            store.state.activeTab = 'companyArchy'
        } else if (to.name === 'transportDetail') {
            store.state.activeTab = 'transportArch'
        } else if (to.name === 'maintainDetail') {
            store.state.activeTab = 'maintainRecord'
        } else if (to.name === 'synthesizeWorkDetail') {
            store.state.activeTab = 'synthesizeWork'
        } else if (to.name === 'complainDetail') {
            store.state.activeTab = 'complainManage'
        } else if (to.name === 'userManage' || to.name === 'roleManager' || to.name === 'departmentManager' || to.name === 'roleDetail') {
            store.state.activeTab = 'permissionEva'
        } else if (to.name === 'operationLog' || to.name === 'dataUpload' || to.name === 'enterpriseRecordLog') {
            store.state.activeTab = 'logEva'
        } else {
            store.state.activeTab = to.name
        }
    }
    if (/home/.test(to.path)) {
        store.state.activeTab = 'home'
    }
    // 路由白名单
    if (/login/.test(path)) {
        next()
        return
    }
    // if (!sessionStorage.authList) {
    //     next({
    //         path: '/login'
    //     })
    // }
    if (login) {
        next()
    } else {
        next({
            path: '/login'
        })
    }
})

export default router
