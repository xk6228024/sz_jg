<!-- 车辆档案 -->
<template>
    <div class="environmentTesting content-page">
        <search :options='searchOptions' v-model="searchValue" @search='getData'></search>
        <!-- <tool-bar :title="'查询统计>环保检测报告查询'">
            <label>企业名称:</label>
            <el-input class="tool_ipt" v-model="qiymch" placeholder="请输入内容" clearable></el-input>
            <label>VIN码:</label>
            <el-input class="tool_ipt" v-model="vin" placeholder="请输入内容" clearable></el-input>
            <label>检测时间:</label>
            <el-date-picker
                class="w240"
                v-model="commentDate"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                >
            </el-date-picker>
            <el-button class="search_btn" type="primary" icon="el-icon-search" @click="getData(1)"></el-button>
        </tool-bar> -->
        <div class="content">
            <div class="sidebar">
                <div class="side_item" @click="select(i.regionId)" :class="{active: i.regionId === chooseId}" v-for="i in sideList" :key="i.id">{{i.regionName}}</div>
            </div>
            <div class="table_box">
                <el-table
                    :data="tableData"
                    height="600"
                    :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                    :cell-style="{'text-align':'center'}"
                    :stripe="false"
                    style="">
                    <el-table-column
                        prop="num"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="qiymch"
                        label="上传企业">
                    </el-table-column>
                    <el-table-column
                        prop="license"
                        label="车牌号码">
                    </el-table-column>
                    <el-table-column
                        prop="licensetype"
                        label="车牌颜色">
                        <template slot-scope="scope">
                            {{ scope.row.licensetype | filterCommon(plateColor) }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="vin"
                        label="VIN码">
                    </el-table-column>
                    <el-table-column
                        prop="jyrq"
                        label="检测时间">
                        <template slot-scope="scope">
                            {{ scope.row.jyrq }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="detail"
                        label="操作">
                        <template slot-scope="scope">
                            <router-link :to="'testReport?vehicleFixId=' + scope.row.id">详情</router-link>
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
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/search'
import { plateColor } from '@/utils/type.js'
// import { setNum } from '@/utils/tools.js'
export default {
    name: 'environmentTesting',
    data () {
        return {
            sideList: [
                { regionName: '全部区域', regionId: '' },
                { regionName: '尖草坪区', regionId: '1' },
                { regionName: '迎泽区', regionId: '2' },
                { regionName: '万柏林区', regionId: '3' },
                { regionName: '小店区', regionId: '4' },
                { regionName: '古交市', regionId: '5' },
                { regionName: '晋源区', regionId: '6' },
                { regionName: '清徐县', regionId: '7' },
                { regionName: '阳曲县', regionId: '8' },
                { regionName: '娄烦县', regionId: '9' }
            ],
            searchValue: {},
            searchOptions: [
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'qiymch'
                },
                {
                    label: 'VIN码',
                    type: 'input',
                    key: 'vin'
                },
                {
                    label: '检测时间',
                    type: 'date',
                    key: 'commentDate'
                }
            ],
            qiymch: '',
            vin: '',
            commentDate: [],
            chooseId: '', // 选中的id
            pageNum: 1,
            pageSize: 10,
            total: 3,
            tableData: [
                {
                    num: 1,
                    id: 1,
                    qiymch: '太原市万顺源汽车维修有限公司',
                    license: '晋A56DW6',
                    licensetype: '2',
                    vin: 'LHGTG1837H8000108',
                    jyrq: '2020-01-02 09:01:00'
                },
                {
                    num: 2,
                    id: 2,
                    qiymch: '太原市万顺源汽车维修有限公司',
                    license: '晋AD3W9F',
                    licensetype: '1',
                    vin: 'LHGTG8877H8000220',
                    jyrq: '2020-01-02 10:33:02'
                },
                {
                    num: 3,
                    id: 3,
                    qiymch: '太原市万顺源汽车维修有限公司',
                    license: '晋A889WQ',
                    licensetype: '1',
                    vin: 'LHGTG1447H8000122',
                    jyrq: '2020-01-02 11:45:20'
                }
            ],
            plateColor
        }
    },
    components: {
        Search
    },
    created () {
        // this.getData()
        // this.findLoginRegion()
    },
    filters: {
        formatTime (val) {
            if (!val) {
                return ''
            }
            return val.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6')
        }
    },
    methods: {
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
                    }
                })
        },
        // 获取车辆档案列表
        getData (clear) {
            // if (clear) {
            //     this.pageNum = 1
            // }
            // var obj = {
            //     dqbm: this.chooseId,
            //     qiymch: this.qiymch,
            //     vin: this.vin,
            //     jyrqStart: (this.commentDate && this.commentDate.length && this.commentDate[0]) || '',
            //     jyrqEnd: (this.commentDate && this.commentDate.length && this.commentDate[1]) || '',
            //     pageNum: this.pageNum,
            //     pageSize: this.pageSize
            // }
            // this.$post('bus/environmental/protection/detect/report/findList', obj)
            //     .then(res => {
            //         if (res.status === 200) {
            //             this.tableData = setNum(res.data.list, this.pageNum, this.pageSize)
            //             this.total = res.data.total
            //         } else {
            //             this.$alert(res.message, '提示', {
            //                 confirmButtonText: '确定',
            //                 callback: action => {
            //                 }
            //             })
            //         }
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         this.$alert('网络错误，请重试！', '提示', {
            //             confirmButtonText: '确定'
            //         })
            //     })
        },
        select (id) {
            this.pageNum = 1
            this.chooseId = id
            this.getData()
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getData()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getData()
        }
    }
}
</script>

<style lang='less' scope>
.environmentTesting {
    .content {
        position: relative;
        border-top: 1px solid #ddd;
        .table_box {
            padding:20px;
            margin-left: 250px;
            a {
                text-decoration: none;
                color: #359dff;
            }
        }
        .sidebar {
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            border-right: 1px solid #dddddd;
            padding: 20px 30px;
            box-sizing: border-box;
            overflow-y: auto;
            .side_item {
                width: 190px;
                height: 38px;
                font-size: 14px;
                color: #666666;
                border-radius: 4px;
                margin: 10px auto 0;
                line-height: 40px;
                border: 1px solid #dddddd;
                background-color: #fff;
                transition: all .2s;
                text-align: center;
                cursor: pointer;
                &:first-child {
                    margin-top: 0;
                }
                &.active {
                    background-color: #359dff;
                    border: 1px solid #359dff;
                    color: #ffffff;
                }
                &:hover {
                    color: #ffffff;
                    background-color: #359dff;
                    border: 1px solid #359dff;
                }
            }
        }
        .el-pager {
            margin: 0 12px;
        }
    }
}
</style>
