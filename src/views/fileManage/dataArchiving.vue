<!-- 从业人员档案档案 -->
<template>
    <div class="content-page">
        <search v-model='searchValue' :options='searchOption' @search='getData(1)' permission='bas:person:findPersionView'>
             <div style="position:absolute;right:20px;top:15px;">
                <el-radio v-model="radio" label="1">运输企业列表</el-radio>
                <el-radio v-model="radio" label="2">个体业务列表</el-radio>
             </div>
        </search>
        <div class="wrap">
            <custom-table
            :table-data="dataList"
            :label-data="labelData"
            :total="total"
            :height='630'
            :currentPage='pageNum'
            :loading="tableloading"
            @onPageChange="handleCurrentChange"
            @onSizeChange="handleSizeChange"
            >
                <template slot="operation" slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push('/enterpriseArchivesDetail?'+scope.id)">详情</el-button>
                </template>
            </custom-table>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-archives-normal">
            <!-- <el-button class='back-btn' @click="$router.push('/employeesArchNew')">从业人员建档</el-button> -->
        </bread-foot>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import BreadFoot from '@/components/BreadFoot.vue'
import CustomTable from '@/components/table'
import Search from '@/components/search'
import { bussinessCategory } from '@/utils/type.js'
import { setNum } from '@/utils/utils.js'
export default {
    name: 'companyArch',
    components: {
        BreadFoot,
        Modal,
        CustomTable,
        Search
    },
    data () {
        return {
            radio: '1',
            breadArr: [
                { title: '档案管理', path: '' }, { title: '一车一档', path: '' }
            ],
            searchOption: [
                {
                    label: '区域',
                    type: 'input',
                    key: 'enterpriseName'
                }
            ],
            searchValue: {},
            bussinessCategory,
            labelData: [
                {
                    label: '序号',
                    prop: 'num',
                    width: 80
                },
                {
                    label: '所属城市',
                    prop: 'personName'
                },
                {
                    label: '所属区域',
                    prop: 'genderStr'
                },
                {
                    label: '企业名称',
                    prop: 'personWorkTypeStr'
                },
                {
                    label: '车辆总数',
                    prop: 'personCertno'
                },
                {
                    label: '已归档车辆数',
                    prop: 'personIdcardNumber'
                },
                {
                    label: '未归档车辆数',
                    prop: 'enterpriseName'
                },
                {
                    label: '未归档占比',
                    prop: 'personStatus'
                },
                {
                    label: '操作',
                    slotName: 'operation'
                }
            ],
            dataList: [
                {
                    num: 1,
                    personName: '太原',
                    genderStr: '清徐县',
                    personWorkTypeStr: '太原市鑫晟汽车服务有限公司',
                    personCertno: '200',
                    personIdcardNumber: '150',
                    enterpriseName: '75',
                    personStatus: '50%',
                    bbb: '晋A18822',
                    ccc: '黄色',
                    ddd: 'VS113297467289173',
                    eee: 'ZQ197773312879811123',
                    fff: '车辆类型',
                    ggg: '车辆大类'
                },
                {
                    num: 2,
                    personName: '太原',
                    genderStr: '小店区',
                    personWorkTypeStr: '车大夫汽车维修服务有限公司',
                    personCertno: '200',
                    personIdcardNumber: '150',
                    enterpriseName: '75',
                    personStatus: '50%',
                    bbb: '晋A18822',
                    ccc: '黄色',
                    ddd: 'VS113297467289173',
                    eee: 'ZQ197773312879811123',
                    fff: '车辆类型',
                    ggg: '车辆大类'
                },
                {
                    num: 3,
                    personName: '太原',
                    genderStr: '万柏林区',
                    personWorkTypeStr: '山西彩虹上通汽贸有限公司',
                    personCertno: '200',
                    personIdcardNumber: '150',
                    enterpriseName: '75',
                    personStatus: '50%',
                    bbb: '晋A18822',
                    ccc: '黄色',
                    ddd: 'VS113297467289173',
                    eee: 'ZQ197773312879811123',
                    fff: '车辆类型',
                    ggg: '车辆大类'
                },
                {
                    num: 4,
                    personName: '太原',
                    genderStr: '万柏林区',
                    personWorkTypeStr: '太原市裕龙顺达汽车销售服务有限公司',
                    personCertno: '200',
                    personIdcardNumber: '150',
                    enterpriseName: '75',
                    personStatus: '50%',
                    bbb: '晋A18899',
                    ccc: '黄色',
                    ddd: 'VS113297467289173',
                    eee: 'ZQ197773312879811123',
                    fff: '车辆类型',
                    ggg: '车辆大类'
                },
                {
                    num: 5,
                    personName: '太原',
                    genderStr: '万柏林区',
                    personWorkTypeStr: '太原市盛世开元汽车销售有限公司',
                    personCertno: '200',
                    personIdcardNumber: '150',
                    enterpriseName: '75',
                    personStatus: '50%',
                    bbb: '晋A18844',
                    ccc: '黄色',
                    ddd: 'VS113297467289173',
                    eee: 'ZQ197773312879811123',
                    fff: '车辆类型',
                    ggg: '车辆大类'
                }
            ],
            tableloading: false,
            pageNum: 1,
            pageSize: 10,
            total: 100
        }
    },
    created () {
    },
    watch: {
        radio: {
            handler (val) {
                this.tableloading = true
                if (val - 0 === 1) {
                    // this.getEnterpriseData(1)
                    setTimeout(() => {
                        this.tableloading = false
                        this.labelData = [
                            {
                                label: '序号',
                                prop: 'num',
                                width: 80
                            },
                            {
                                label: '所属城市',
                                width: 100,
                                prop: 'personName'
                            },
                            {
                                label: '所属区域',
                                width: 100,
                                prop: 'genderStr'
                            },
                            {
                                label: '企业名称',
                                prop: 'personWorkTypeStr'
                            },
                            {
                                label: '车辆总数',
                                width: 100,
                                prop: 'personCertno'
                            },
                            {
                                label: '已归档车辆数',
                                width: 120,
                                prop: 'personIdcardNumber'
                            },
                            {
                                label: '未归档车辆数',
                                width: 120,
                                prop: 'enterpriseName'
                            },
                            {
                                label: '未归档占比',
                                width: 120,
                                prop: 'personStatus'
                            },
                            {
                                label: '操作',
                                width: 100,
                                slotName: 'operation'
                            }
                        ]
                    }, 300)
                } else {
                    setTimeout(() => {
                        this.tableloading = false
                        this.labelData = [
                            {
                                label: '序号',
                                prop: 'num',
                                width: 80
                            },
                            {
                                label: '所属城市',
                                width: 100,
                                prop: 'personName'
                            },
                            {
                                label: '所属区域',
                                width: 100,
                                prop: 'genderStr'
                            },
                            {
                                label: '车主单位',
                                prop: 'personWorkTypeStr'
                            },
                            {
                                label: '车牌号码',
                                width: 100,
                                prop: 'bbb'
                            },
                            {
                                label: '车牌颜色',
                                width: 100,
                                prop: 'ccc'
                            },
                            {
                                label: 'VIN码',
                                prop: 'ddd'
                            },
                            {
                                label: '道路运输证',
                                prop: 'eee'
                            },
                            {
                                label: '车辆类型',
                                width: 100,
                                prop: 'fff'
                            },
                            {
                                label: '车辆大类',
                                width: 100,
                                prop: 'ggg'
                            }
                        ]
                    }, 300)
                }
            },
            immediate: true
        }
    },
    methods: {
        getData (clear) {
            if (!this.$checkAuth('bas:person:findPersionView')) {
                this.$alert('暂无查看权限！', '提示')
                return
            }
            if (clear) {
                this.pageNum = 1
            }
            this.$post('bas/person/findPersionView', {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                // personId: '',
                enterpriseName: this.searchValue.enterpriseName,
                personName: this.searchValue.personName
            }).then(res => {
                if (res.status === 200 && res.data) {
                    this.dataList = setNum(res.data.list, this.pageNum, this.pageSize)
                    this.total = res.data.total
                }
            })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.getData(1)
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getData()
        }
    }
}
</script>
