var batteryType = [
    {
        label: '碱性燃料电池(AFC)',
        value: 1
    },
    {
        label: '磷酸燃料电池(PAFC)',
        value: 2
    },
    {
        label: '熔融碳酸盐燃料电池(MCFC)',
        value: 3
    },
    {
        label: '固体氧化物燃料电池(SOFC)',
        value: 4
    },
    {
        label: '质子交换膜燃料电池(PEMFC)',
        value: 5
    },
    {
        label: '直接甲醇燃料电池(DMFC)',
        value: 6
    },
    {
        label: '铅酸蓄电池',
        value: 7
    },
    {
        label: '镍氢电池',
        value: 8
    },
    {
        label: '钠硫电池',
        value: 9
    },
    {
        label: '二次锂电池',
        value: 10
    },
    {
        label: '空气电池',
        value: 11
    }
]

var plateColor = [
    {
        value: '1',
        label: '黄色'
    },
    {
        value: '2',
        label: '黄色'
    },
    {
        value: '3',
        label: '农黄'
    },
    {
        value: '4',
        label: '绿色'
    },
    {
        value: '5',
        label: '黑色'
    },
    {
        value: '6',
        label: '白色'
    },
    {
        value: '7',
        label: '渐变绿'
    },
    {
        value: '8',
        label: '黄绿'
    }
]

var carBodyColor = [
    {
        value: 'A',
        label: '白色'
    },
    {
        value: 'B',
        label: '灰色'
    },
    {
        value: 'C',
        label: '黄色'
    },
    {
        value: 'D',
        label: '粉色'
    },
    {
        value: 'E',
        label: '红色'
    },
    {
        value: 'F',
        label: '紫色'
    },
    {
        value: 'G',
        label: '绿色'
    },
    {
        value: 'H',
        label: '蓝色'
    },
    {
        value: 'I',
        label: '棕色'
    },
    {
        value: 'J',
        label: '黑色'
    },
    {
        value: 'Y',
        label: '白绿'
    },
    {
        value: 'Z',
        label: '其他'
    }
]

var carTypeGuo = [
    {
        value: '01',
        label: '小型车'
    },
    {
        value: '02',
        label: '大中型客车'
    },
    {
        value: '03',
        label: '大型货车'
    },
    {
        value: '99',
        label: '其他'
    }
]

var operateState = [
    {
        value: '1',
        label: '营业'
    },
    {
        value: '2',
        label: '停业'
    },
    {
        value: '3',
        label: '整顿'
    },
    {
        value: '4',
        label: '停业整顿'
    },
    {
        value: '5',
        label: '歇业'
    },
    {
        value: '6',
        label: '注销'
    },
    {
        value: '9',
        label: '其他'
    }
]
// 燃油类别
var powerType = [
    {
        value: 'A',
        label: '汽油'
    },
    {
        value: 'B',
        label: '柴油'
    },
    {
        value: 'C',
        label: '电（以电能驱动的汽车）'
    },
    {
        value: 'D',
        label: '混合油'
    },
    {
        value: 'E',
        label: '天然气'
    },
    {
        value: 'F',
        label: '液化石油气'
    },
    {
        value: 'L',
        label: '甲醇'
    },
    {
        value: 'M',
        label: '乙醇'
    },
    {
        value: 'N',
        label: '太阳能'
    },
    {
        value: 'O',
        label: '混合动力'
    },
    {
        value: 'Y',
        label: '无（仅限全挂车等无动力的）'
    },
    {
        value: 'Z',
        label: '其他'
    }
]

var bussinessCategory = [
    {
        value: '01',
        label: '一类维修经营业务'
    },
    {
        value: '02',
        label: '二类维修经营业务'
    },
    {
        value: '03',
        label: '三类维修经营业务'
    }
]

var economicsList = [
    {
        value: '100',
        label: '内资'
    },
    {
        value: '110',
        label: '国有全资'
    },
    {
        value: '120',
        label: '集体全资'
    },
    {
        value: '130',
        label: '股份合作'
    },

    {
        value: '140',
        label: '联营'
    },
    {
        value: '141',
        label: '国有联营'
    },

    {
        value: '142',
        label: '集体联营'
    },
    {
        value: '143',
        label: '国有与集体联营'
    },
    {
        value: '149',
        label: '其他联营'
    },
    {
        value: '150',
        label: '有限责任(公司)'
    },
    {
        value: '159',
        label: '其他有限责任(公司)'
    },
    {
        value: '160',
        label: '股份有限(公司)'
    },
    {
        value: '170',
        label: '私有'
    },
    {
        value: '171',
        label: '私有独资'
    },
    {
        value: '172',
        label: '私有合伙'
    },
    {
        value: '173',
        label: '私营有限责任(公司)'
    },
    {
        value: '174',
        label: '私营股份有限(公司)'
    },
    {
        value: '175',
        label: '个体经营'
    },
    {
        value: '179',
        label: '其他私有'
    },
    {
        value: '190',
        label: '其他内资'
    },
    {
        value: '200',
        label: '港、澳、台投资'
    },
    {
        value: '210',
        label: '内地和港、澳或台合资'
    },
    {
        value: '220',
        label: '内地和港、澳或台合作'
    },
    {
        value: '230',
        label: '港、澳或台独资'
    },
    {
        value: '240',
        label: '港、澳或台投资股份有限(公司)'
    },
    {
        value: '290',
        label: '其他港澳台投资'
    },
    {
        value: '300',
        label: '国外投资'
    },
    {
        value: '310',
        label: '中外合资'
    },
    {
        value: '320',
        label: '中外合作'
    },
    {
        value: '330',
        label: '外资'
    },
    {
        value: '340',
        label: '国外投资股份有限(公司)'
    },
    {
        value: '390',
        label: '其他国外投资'
    },
    {
        value: '900',
        label: '其他'
    }
]

// 排放标准
var discharge = [
    {
        value: '01',
        label: '国Ⅱ'
    },
    {
        value: '02',
        label: '国Ⅲ'
    },
    {
        value: '03',
        label: '国Ⅳ'
    },
    {
        value: '04',
        label: '国Ⅴ'
    },
    {
        value: '05',
        label: '国Ⅵ'
    }
]

// 检测等级
var jcGradeList = [
    {
        value: '1',
        label: 'A级站'
    },
    {
        value: '2',
        label: 'B级站'
    },
    {
        value: '3',
        label: 'C级站'
    }
]

var uploadStatusType = [
    {
        value: '0',
        label: '失败'
    },
    {
        value: '1',
        label: '成功'
    },
    {
        value: '2',
        label: '未上传,省网账号密码为空'
    },
    {
        value: '3',
        label: 'java代码异常'
    },
    {
        value: '4',
        label: '链接响应异常'
    },
    {
        value: '5',
        label: '数据不存在不上传'
    },
    {
        value: '99',
        label: '异常'
    }
]

// 评价等级
var evaluateLevel = [
    {
        value: '1',
        label: '非常差'
    },
    {
        value: '2',
        label: '差'
    },
    {
        value: '3',
        label: '一般'
    },
    {
        value: '4',
        label: '满意'
    },
    {
        value: '5',
        label: '非常满意'
    }
]
// 维修类别
var repairType = [
    {
        value: '01',
        label: '零件修理'
    },
    {
        value: '02',
        label: '汽车小修'
    },
    {
        value: '03',
        label: '总成修理'
    },
    {
        value: '04',
        label: '汽车大修'
    },
    {
        value: '05',
        label: '日常维护'
    },
    {
        value: '06',
        label: '一级维护'
    },
    {
        value: '07',
        label: '二级维护'
    }
]
// 变更类型1企业名称2经济类型3废业企业经营状态-注销4歇业企业经营状态-歇业 5延续许可变更6法人变更7经营地址变更8经营范围9企业备案审核
var changeType = [
    {
        value: 1,
        label: '企业名称变更'
    },
    {
        value: 2,
        label: '经济类型变更'
    },
    {
        value: 3,
        label: '废业申请变更'
    },
    {
        value: 4,
        label: '歇业申请变更'
    },
    {
        value: 5,
        label: '延续许可变更'
    },
    {
        value: 6,
        label: '法人变更'
    },
    {
        value: 7,
        label: '经营地址变更'
    },
    {
        value: 8,
        label: '经营范围变更'
    },
    {
        value: 9,
        label: '企业备案审核'
    }
]
// 投诉类别
var complaintCategory = [
    {
        value: '',
        label: '全部'
    },
    {
        value: '1',
        label: '维修质量'
    },
    {
        value: '2',
        label: '维修效率'
    },
    {
        value: '3',
        label: '价格透明度'
    },
    {
        value: '4',
        label: '服务态度'
    },
    {
        value: '5',
        label: '店面环境'
    },
    {
        value: '6',
        label: '其他'
    }
]

// 主营项目
var mainCampType = [
    {
        value: '1',
        label: '洗车美容'
    },
    {
        value: '2',
        label: '汽车保养'
    },
    {
        value: '3',
        label: '轮胎轮毂'
    },
    {
        value: '4',
        label: '整车修理'
    },
    {
        value: '5',
        label: '二级维护'
    },
    {
        value: '6',
        label: '车身系统维修'
    },
    {
        value: '7',
        label: '空调电器系统维修'
    },
    {
        value: '8',
        label: '发动机系统维修'
    },
    {
        value: '9',
        label: '底盘系统维修'
    }
]

// 电池类型
// var batteryType = [
//     {
//         value: '01',
//         label: '蓄电池'
//     },
//     {
//         value: '02',
//         label: '燃料电池'
//     }
// ]

// 动力类型
var technologyPowerType = [
    {
        value: '01',
        label: '前置前驱'
    },
    {
        value: '02',
        label: '后置后驱'
    },
    {
        value: '03',
        label: '前置后驱'
    },
    {
        value: '04',
        label: '全轮驱动'
    }
]

// 行车制动方式
var brakingMode = [
    {
        value: '01',
        label: '行车制动器'
    },
    {
        value: '02',
        label: '驻车制动器'
    }
]

// 制动器形式
var brakeType = [
    {
        value: '01',
        label: '盘式制动器'
    },
    {
        value: '02',
        label: '鼓式制动器'
    }
]

// 变速器形式
var transmission = [
    {
        value: '01',
        label: '自动变速器'
    },
    {
        value: '02',
        label: '手动变速器'
    },
    {
        value: '03',
        label: '无级变速器'
    },
    {
        value: '04',
        label: '手自一体化'
    },
    {
        value: '05',
        label: '双离合变速器'
    }
]

// 缓速器形式
var retarder = [
    {
        value: '01',
        label: '电涡流缓速器'
    },
    {
        value: '02',
        label: '液力缓速器'
    }
]

// 记录类型
var fileRecord = [
    {
        value: '1',
        label: '二级维护'
    },
    {
        value: '2',
        label: '二级维护竣工检验'
    },
    {
        value: '3',
        label: '登记评定'
    }
]

// 作业类型
var jobType = [
    {
        value: '1',
        label: '普通维护'
    },
    {
        value: '2',
        label: '一级维护'
    },
    {
        value: '3',
        label: '二级维护'
    }
]

// 检测类别
var detectType = [
    {
        value: 1,
        label: '技术等级评定'
    },
    {
        value: 4,
        label: '二级维护竣工质量检验'
    },
    {
        value: 5,
        label: '汽车大修竣工质量检验'
    },
    {
        value: 9,
        label: '其他检测'
    }
]

var inquestInfo = [
    {
        label: '待勘验',
        value: '0'
    },
    {
        label: '已勘验',
        value: '1'
    },
    {
        label: '待整改',
        value: '2'
    },
    {
        label: '已整改',
        value: '3'
    },
    {
        label: '勘验超时',
        value: '4'
    },
    {
        label: '整改超时',
        value: '5'
    }
]

// 运输车辆类型
var transportCarType = [
    {
        value: '1',
        label: '普货'
    },
    {
        value: '2',
        label: '客车'
    },
    {
        value: '3',
        label: '危险品车'
    },
    {
        value: '4',
        label: '小型车'
    },
    {
        value: '5',
        label: '其他'
    }
]

// 车辆类型
var vehicleType = [
    {
        value: '1',
        label: '小型车'
    },
    {
        value: '2',
        label: '大中型客车'
    },
    {
        value: '3',
        label: '大型货车'
    },
    {
        value: '4',
        label: '其他'
    }
]

// 运输企业经营范围
var transportBusinessScope = [
    {
        value: '1',
        label: '道路普通货物运输'
    },
    {
        value: '2',
        label: '大型货物运输'
    },
    {
        value: '3',
        label: '货物专用运输（罐式）'
    },
    {
        value: '4',
        label: '货物专用运输（罐式集装箱）'
    },
    {
        value: '5',
        label: '货物专用运输（罐式集装箱冷藏保鲜）'
    },
    {
        value: '6',
        label: '货物专用运输（罐式容器）'
    },
    {
        value: '7',
        label: '货物专用运输（罐式容器集装箱）'
    },
    {
        value: '8',
        label: '货物专用运输（罐式容器集装箱冷藏保鲜）'
    },
    {
        value: '9',
        label: '货物专用运输（罐式容器集装箱冷藏保鲜设备）'
    },
    {
        value: '10',
        label: '货物专用运输（集装箱）'
    },
    {
        value: '11',
        label: '货物专用运输（集装箱冷藏保鲜）'
    },
    {
        value: '12',
        label: '货物专用运输（冷藏保鲜）'
    },
    {
        value: '13',
        label: '货物专用运输（冷藏保鲜设备）'
    },
    {
        value: '14',
        label: '货物专用运输（罐式冷藏保鲜）'
    },
    {
        value: '15',
        label: '客运出租车'
    },
    {
        value: '16',
        label: '班车客运（县内）'
    },
    {
        value: '17',
        label: '包车客运（县内）'
    }
]

// 运输车检测类别
var transportCheckType = [
    {
        value: '1',
        label: '运输车辆维护检测（本地）'
    },
    {
        value: '2',
        label: '综合性能检测（本地）'
    },
    {
        value: '3',
        label: '运输车辆维护检测（异地）'
    },
    {
        value: '4',
        label: '综合性能检测（本地）'
    }
]

// 岗位
var personDictionary = [
    {
        value: 'technical_director',
        label: '技术负责人'
    },
    {
        value: 'quality_inspector',
        label: '质量检验员'
    },
    {
        value: 'machine_repair',
        label: '机修'
    },
    {
        value: 'electrical_repair',
        label: '电器维修'
    },
    {
        value: 'sheet_metal',
        label: '钣金'
    },
    {
        value: 'spray_paint',
        label: '喷漆'
    },
    {
        value: 'wehicle_guider',
        label: '引车员'
    },
    {
        value: 'bottom_repair',
        label: '底盘维修'
    },
    {
        value: 'innerfuel_repair',
        label: '内燃维修'
    },
    {
        value: 'company_onwner',
        label: '门店负责人'
    },
    {
        value: 'price_countman',
        label: '价格结算员'
    },
    {
        value: 'business_man',
        label: '业务员'
    },
    {
        value: 'other',
        label: '其他'
    }
]

export {
    carBodyColor,
    carTypeGuo,
    operateState,
    changeType,
    plateColor,
    jcGradeList,
    powerType,
    economicsList,
    evaluateLevel,
    uploadStatusType,
    repairType,
    complaintCategory,
    bussinessCategory,
    mainCampType,
    discharge,
    batteryType,
    technologyPowerType,
    brakingMode,
    brakeType,
    transmission,
    retarder,
    fileRecord,
    jobType,
    transportBusinessScope,
    transportCheckType,
    transportCarType,
    inquestInfo,
    vehicleType,
    personDictionary,
    detectType
}
