<template>
    <div class="maintainRecord">
        <div class="content">
            <div class="table_top table_tap_pad">
                <div class="table_top_l  clearfix">
                    <div class="table_top_ls">
                        <label>企业名称：</label>
                        <el-input class="tool_ipt" v-model="companyName" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="table_top_ls">
                        <label>车牌/VIN码：</label>
                        <el-input class="tool_ipt" v-model="vinCode" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="table_top_ls" v-if="ArrowActive">
                        <label>上传时间：</label>
                        <el-date-picker
                        v-model="uploadDate"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="timestamp">
                        </el-date-picker>
                    </div>
                    <div class="table_top_lr fr">
                        <el-button type="text" v-if="ArrowActive" @click="toArrowActive">收起 <i class="el-icon-arrow-up"></i></el-button>
                        <el-button type="text" v-if="!ArrowActive" @click="toArrowActive">展开 <i class="el-icon-arrow-down"></i></el-button>
                        <el-button class="query_btn slects_btn" @click="search">查询</el-button>
                        <el-button class="react_btn" @click="toReact">重置</el-button>
                    </div>
                </div>
            </div>
            <div class="wrap">
                <div class="table_box">
                    <el-table
                        :data="dataList"
                        v-loading="loading"
                        height="570"
                        :header-cell-style="{'text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="width: 100%">
                        <el-table-column
                            prop="a1"
                            label="序号"
                            min-width="5%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a2"
                            label="上传时间"
                            min-width="10%"
                            show-overflow-tooltip
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a3"
                            label="上传企业"
                            min-width="20%"
                            show-overflow-tooltip
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a4"
                            label="车牌号码"
                            min-width="10%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a5"
                            label="车牌颜色"
                            min-width="7%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a6"
                            label="VIN码"
                            show-overflow-tooltip
                            min-width="10%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a7"
                            label="送修里程"
                            min-width="10%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a8"
                            label="送修日期"
                            show-overflow-tooltip
                            min-width="10%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a9"
                            label="结算日期"
                            show-overflow-tooltip
                            min-width="10%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="a10"
                            label="故障描述"
                            show-overflow-tooltip
                            min-width="10%"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="操作"
                            min-width="7%">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="editNotice(scope.row.FixId)">详情</el-button>
                                <!-- <el-button type="text" size="small" @click="deleteNotice(1)">删除</el-button> -->
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="page_box">
                    <el-pagination
                        @size-change="regionSizeChange"
                        @current-change="regionCurrentChange"
                        :current-page="regionPageNum"
                        :page-sizes="[10, 15, 20, 25]"
                        :page-size="regionPageSize"
                        background
                        layout="prev, pager, next, sizes,  jumper, total"
                        :total="regionTotal">
                    </el-pagination>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-analy-normal">
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import Modal from '@/components/Modal.vue'
import { setNum } from '@/utils/tools.js'
import { plateColor } from '@/utils/type.js'
import moment from 'moment'
export default {
    name: 'maintainRecord',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '车辆健康档案', path: '' }
            ],
            ArrowActive: true, // 展开
            companyName: '', // 企业名称
            vinCode: '', // vin码
            plateNumber: '', // 车牌号码 tab2
            vin: '', // vin tab2
            total: 0,
            pageSize: 10,
            pageNum: 1,
            radio2: '',
            radio: 1,
            uploadDate: [],
            currentPage: 1,
            dataList: [
                {
                    a1: 1,
                    a2: '2018-12-12',
                    a3: '太原宏达汽车城',
                    a4: '晋A12355',
                    a5: '黄色',
                    a6: '45454541111VV',
                    a7: '50000',
                    a8: '2018-12-22',
                    a9: '2018-12-24',
                    a10: '大灯损毁'
                }
            ],
            dataList2: [],
            loading: false,
            loading2: false,
            tableData3: [1],
            chooseId: '', // 选中区域
            sideList: [],
            carColorList: plateColor, // 车牌颜色列表
            dataObj: '', // 全部信息
            input: '',
            value: '',
            businessHours: '',
            validityTime: '',
            enterpriseRegion: '',
            regionId: 'all', // 选中的区域id
            textarea: '',
            activeName: 'first',
            alert: false,
            alertTitle: '企业备案拒绝',
            refuseMsg: '',
            regionPageNum: 1,
            regionPageSize: 10,
            regionTotal: 0,
            carPageNum: 1,
            carPageSize: 10,
            carTotal: 0
        }
    },
    created () {
        this.queryData()
        // this.findLoginRegion()
    },
    filters: {
        momentTime: function (val) {
            if ((/^\d{14}$/).test(val)) {
                let str = val.slice(0, 8)
                return moment(str).format('YYYY-MM-DD')
            } else {
                return moment(val).format('YYYY-MM-DD')
            }
        },
        momentTimeS: function (val) {
            if (val) {
                let str = Number(val)
                return moment(str).format('YYYY-MM-DD')
            }
        }
    },
    watch: {
        activeName (val) {
            this.dataList = []
            this.pageNum = 1
            if (val === 'second') {
                this.queryData2()
                setTimeout(() => {
                    this.radio = '1'
                }, 100)
            } else {
                this.queryData()
            }
        }
    },
    computed: {},
    // 使用其它组件
    components: {
        BreadFoot,
        Modal,
        moment
    },
    // 方法
    methods: {
        search () {
            this.pageNum = 1
            this.queryData()
        },
        search2 () {
            this.pageNum = 1
            this.queryData2()
        },
        // 查看详情
        editNotice (id) {
            if (!this.$checkAuth('fix:fixlist:detailw')) {
                this.$alert('没有查询权限！', '提示')
                return
            }
            this.$router.push('/maintainDetail?vehicleId=' + id)
        },
        // 获取区域
        findLoginRegion () {
            this.$post('bas/city/findLoginRegion', {})
                .then(res => {
                    if (res.status === 200) {
                        res.datas.unshift({
                            regionId: '',
                            regionName: '全部区域'
                        })
                        this.sideList = res.datas
                    } else {
                        console.log(res.message)
                    }
                })
        },
        // 区域数据查询
        queryData () {
            // this.loading = true
            this.$post('/bas/vehicle/fix/fixlist', {
                'uploadStartDate': (this.uploadDate && this.uploadDate.length && this.uploadDate[0]) || '',
                'uploadEndDate': (this.uploadDate && this.uploadDate.length && this.uploadDate[1] + 24 * 60 * 60 * 1000 - 1) || '',
                'pageNum': this.regionPageNum,
                'pageSize': this.regionPageSize,
                'enterpriseRegion': this.enterpriseRegion,
                'permissions': '',
                'vin': this.vinCode,
                'companyName': this.companyName,
                'plateNumber': ''
            }).then(res => {
                if (res.status === 200) {
                    res.data.forEach(item => {
                        this.carColorList.forEach(itemB => {
                            if (item.vehicleLicensePlateColor === itemB.value) {
                                item.vehicleLicensePlateColor = itemB.label
                            }
                        })
                    })
                    this.dataList = setNum(res.data, this.regionPageNum, this.regionPageSize)
                    this.regionTotal = res.total
                } else {
                    console.log(res.message)
                }
                this.loading = false
            }).catch(err => {
                this.loading = false
                console.log(err)
            })
        },
        // 车辆归档查询
        queryData2 () {
            this.loading2 = true
            this.$post('/bas/vehicle/fix/fixrecordlist', {
                'plateNumber': this.plateNumber,
                'vin': this.vin,
                pageSize: this.carPageSize,
                pageNum: this.carPageNum
            }).then(res => {
                if (res.status === 200) {
                    this.dataList2 = setNum(res.data, this.carPageNum, this.carPageSize)
                    this.carTotal = res.total
                } else {
                    console.log(res.message)
                }
                this.loading2 = false
            }).catch(err => {
                this.loading2 = false
                console.log(err)
            })
        },
        alertConfirm () {
            this.alert = false
        },
        alertCancel () {
            this.alert = false
        },
        adopt () {},
        handleClick () {},
        refuse () {
            this.alert = true
        },
        // 车辆数据选择页面条数
        carSizeChange (val) {
            this.carPageSize = val
            this.carPageNum = 1
            this.queryData2()
        },
        // 车辆数据选择页数
        carCurrentChange (val) {
            this.carPageNum = val
            this.queryData2()
        },
        // 区域数据选择页面条数
        regionSizeChange (val) {
            this.regionPageSize = val
            this.regionPageNum = 1
            this.queryData()
        },
        // 区域数据选择页数
        regionCurrentChange (val) {
            this.regionPageNum = val
            this.queryData()
        },
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            if (this.activeName === 'second') {
                this.queryData2()
            } else {
                this.queryData()
            }
        },
        handleCurrentChange (val) {
            this.pageNum = val
            if (this.activeName === 'second') {
                this.queryData2()
            } else {
                this.queryData()
            }
        },
        // 选区域
        select (index, id) {
            this.chooseId = index
            this.enterpriseRegion = id
            this.queryData()
        },
        toChooseLis (val) {
            this.activeName = val
        },
        // 重置
        toReact () {
            this.companyName = ''
            this.vinCode = ''
            this.uploadDate = ''
        },
        // 展开 收缩
        toArrowActive () {
            this.ArrowActive = !this.ArrowActive
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.maintainRecord {
    background: #FFFFFF;
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        top: 0;
        padding-bottom: 80px;
        .table_tap_pad {
            padding: 25px 30px;
        }
        .table_one_line {
            width: 25%;
        }
        .wrap {
            padding: 0 30px 0 30px;
            .table_box {
                border: 1px solid #dddddd;
                border-bottom: none;
            }
            .page_box {
                border-top: none;
            }
        }
    }
}
// .maintainRecord {
//     .el-date-editor .el-range-input {
//         width: 30%;
//     }
// }

</style>
