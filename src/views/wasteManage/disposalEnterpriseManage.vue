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
                prop="i"
                align="center"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="a"
                align="center"
                label="企业名称"
                width="120">
                </el-table-column>
                <el-table-column
                prop="b"
                align="center"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="c"
                align="center"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="d"
                align="center"
                label="经营许可证号">
                </el-table-column>
                <el-table-column
                prop="e"
                align="center"
                label="许可证有效期">
                </el-table-column>
                <el-table-column
                prop="f"
                align="center"
                label="更新时间">
                </el-table-column>
                <el-table-column
                prop="g"
                align="center"
                label="修改人">
                </el-table-column>
                <el-table-column
                prop="aa"
                align="center"
                label="状态">
                </el-table-column>
                <el-table-column
                width="180"
                align="center"
                label="操作">
                    <template slot-scope="scope">
                        <span :value="scope.row.date" class="primary-color curp pointer" @click="editDetail">修改</span>
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
            <el-button type="primary" @click="$router.push('/disposalEnterpriseManageDetail')">新增企业</el-button>
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
                { title: '固废物管理', path: '' }, { title: '处置企业管理', path: '' }
            ],
            searchOptions: [
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'enterpriseName'
                },
                {
                    label: '所在区域',
                    type: 'select',
                    list: [
                        {
                            label: '太原',
                            value: 1
                        },
                        {
                            label: '南宁',
                            value: 2
                        }
                    ],
                    key: 'certificateRegion'
                },
                {
                    label: '废物类别',
                    type: 'select',
                    list: [
                        {
                            label: '固体',
                            value: 1
                        },
                        {
                            label: '液体',
                            value: 2
                        }
                    ],
                    key: 'certificateRegion'
                },
                {
                    label: '废物代码',
                    type: 'select',
                    list: [
                        {
                            label: 'NN11',
                            value: 1
                        },
                        {
                            label: 'NN22',
                            value: 2
                        }
                    ],
                    key: 'certificateRegion'
                },
                {
                    label: '经营许可证',
                    type: 'input',
                    key: 'vehicleFixCertificate'
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
                    i: '1',
                    a: '太原达梦汽车环保技术有限公司',
                    b: '吴伟',
                    c: '132654786512',
                    d: 'S20ASDD11111123',
                    e: '2020-04-01',
                    f: '2020-06-01',
                    g: '马超',
                    aa: '正常'
                },
                {
                    i: '2',
                    a: '太原的达的梦汽车环保技术有限公司',
                    b: '吴伟',
                    c: '132654786512',
                    d: 'S20ASDD11111123',
                    e: '2020-04-01',
                    f: '2020-06-01',
                    g: '马超',
                    aa: '正常'
                },
                {
                    i: '3',
                    a: '太原达梦汽车环保技术有限公司',
                    b: '按时伟',
                    c: '132654786512',
                    d: 'S20ASDD11111123',
                    e: '2020-04-01',
                    f: '2020-06-01',
                    g: '张飞',
                    aa: '正常'
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
            this.$router.push('/disposalEnterpriseManageDetail')
        },
        // 删除合同
        deleteContract () {
            this.$message.success('删除成功')
        }
    }
}
</script>
