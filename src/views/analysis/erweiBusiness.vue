<template lang="html">
    <div class="erweiBusiness">
        <div class="content">
            <tool-bar :title="'统计查询>二级维护业务统计'">
                <label>企业名称:</label>
                <el-input class="tool_ipt" v-model="input" placeholder="请输入内容"></el-input>
                <label>上传日期:</label>
                <el-date-picker
                    v-model="input"
                    class="w240"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    >
                </el-date-picker>
                <el-button class="search_btn" type="primary" icon="el-icon-search"></el-button>
            </tool-bar>
            <div class='wrap'>
                <div class="table_box">
                    <el-table
                        :data="tableData3"
                        height="600"
                        :header-cell-style="{background:'#EDF0F5','text-align':'center'}"
                        :cell-style="{'text-align':'center'}"
                        :stripe="false"
                        style="width: 100%">
                    <el-table-column
                        prop="index"
                        label="序号"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="企业名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="经营地址"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="维护量"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="操作"
                        width="">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="editNotice(1)">详情</el-button>
                            <!-- <el-button type="text" size="small" @click="deleteNotice(1)">删除</el-button> -->
                        </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="page_box">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Header from '@/components/Header.vue'
import ToolBar from '@/components/ToolBar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
    name: 'erweiBusiness',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            currentPage: 1, // 当前页数
            input: '',
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }
            ],
            value: '',
            tableData3: []
        }
    },
    created () {},
    computed: {},
    // 使用其它组件
    components: {
        Header,
        ToolBar,
        Sidebar
    },
    // 方法
    watch: {},
    methods: {
        handleSizeChange () {},
        handleCurrentChange () {},
        // 编辑
        editNotice (value) {
            this.$router.push('/checkNotice')
        },
        // 删除
        deleteNotice (value) {
            console.log('删除')
        },
        // 新增notice
        addNotice () {
            this.$router.push('/addNotice')
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.erweiBusiness {
    // height: 100%;
    .content {
        position: relative;
        width: 100%;
        // height: 100%;
        box-sizing: border-box;
        // padding-top: 100px;
        top: 0;
        .wrap {
            padding: 0 20px;
            .table_box {
                border: 1px solid #dddddd;
                border-bottom: none;
            }
            .page_box {
                background: #f7f8f9;
                padding-top: 10px;
                height: 53px;
                border: 1px solid #dddddd;
                border-top: none;
            }
        }
    }
}
</style>
