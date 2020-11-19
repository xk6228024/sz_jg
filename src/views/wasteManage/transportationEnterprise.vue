<!-- 车辆挂靠合同管理 -->
<template>
    <div class="vehicleContract content-page">
        <search v-model="searchValue" :options='searchOptions' @search="searchData(1)">
        </search>
        <div class="table-common">
            <el-table
                :header-cell-style="{'background': '#FAFAFA'}"
                :data="tableData"
                border
                style="width: 100%;min-height:500px;">
                <el-table-column
                prop="a"
                align="center"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="b"
                align="center"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="c"
                align="center"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="d"
                align="center"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="e"
                align="center"
                label="道路运输经营许可证">
                </el-table-column>
                <el-table-column
                prop="f"
                align="center"
                label="运输证有效期">
                </el-table-column>
                <el-table-column
                prop="g"
                align="center"
                label="更新时间">
                </el-table-column>
                <el-table-column
                prop="h"
                align="center"
                label="修改人">
                </el-table-column>
                <el-table-column
                prop="i"
                align="center"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="f"
                align="center"
                label="操作">
                    <template slot-scope="scope">
                        <span :value="scope.row.date" class="primary-color curp pointer" @click="editDetail">编辑</span>
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
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button>导入</el-button>
            <el-button>导出</el-button>
            <el-button type="primary" @click="$router.push('/transportationEnterpriseDetail')">新增企业</el-button>
        </bread-foot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
import Search from '@/components/search/index'
import { plateColor } from '@/utils/type.js'

export default {
    name: 'vehicleContract',
    data () {
        return {
            breadArr: [
                { title: '固废物管理', path: '' }, { title: '运输企业管理', path: '' }
            ],
            searchOptions: [
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'datsd'
                },
                {
                    label: '所在区域',
                    type: 'select',
                    list: [
                        {
                            label: '万柏林区',
                            value: 1
                        },
                        {
                            label: '小店区',
                            value: 2
                        }
                    ],
                    key: 'certificateRegion'
                },
                {
                    label: '经营许可证',
                    type: 'input',
                    key: 'datsdsad'
                },
                {
                    label: '许可证日期',
                    type: 'date',
                    key: 'date'
                }
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
                    a: '01',
                    b: '万元汽车服务有限公司',
                    c: '卧龙',
                    d: '13265454881',
                    e: '652132XXNNN',
                    f: '2020-02-02~2021-05-20',
                    g: '2020-03-20 10:00:00',
                    h: '马黛茶',
                    i: '正常'
                },
                {
                    a: '02',
                    b: '沃德飞达汽车服务有限公司',
                    c: '龙费',
                    d: '13265454881',
                    e: '652132XXNNN',
                    f: '2020-02-02~2021-05-20',
                    g: '2020-03-20 10:00:00',
                    h: '小发多',
                    i: '正常'
                },
                {
                    a: '03',
                    b: '铃木知希汽车服务有限公司',
                    c: '方单',
                    d: '13265454881',
                    e: '652132XXNNN',
                    f: '2020-02-02~2021-05-20',
                    g: '2020-03-20 10:00:00',
                    h: '阿德隆',
                    i: '正常'
                }
            ],
            form: {},
            num: 1,
            deleteVisible: false
        }
    },
    components: {
        BreadFoot,
        Search
    },
    methods: {
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
        }
    }
}
</script>
