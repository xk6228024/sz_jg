<!-- 备案信息查询 -->
<template>
    <div class="recordPerson">
        <div class="content">
            <div class="tab_inner">
                <div class="info-title">基本信息</div>
                <div class="info-content">
                    <el-row>
                        <el-col :span="8">
                            <div class="item-name">姓名：</div>
                            <div class="item-value">{{this.info.baseInfo.a1}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">性别：</div>
                            <div class="item-value">{{this.info.baseInfo.a2}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">文化程序：</div>
                            <div class="item-value">{{this.info.baseInfo.a3}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">手机号码：</div>
                            <div class="item-value">{{this.info.baseInfo.a4}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">身份证号：</div>
                            <div class="item-value">{{this.info.baseInfo.a5}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">所学专业：</div>
                            <div class="item-value">{{this.info.baseInfo.a6}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">岗位：</div>
                            <div class="item-value">{{this.info.baseInfo.a7}}</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="tab_inner">
                <div class="info-title">证书信息</div>
                <div class="info-content clearfix">
                    <div class="img_item" v-for="item in info.imgList1" :key="item.id">
                        <div class="img_border" @click="$zoomImg(item.url)">
                            <img :src="item.url">
                        </div>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-business-normal">
            <el-button @click="goBack">返回</el-button>
        </bread-foot>
        <el-dialog
            title="整改通知书"
            :visible.sync="previewVisible"
            :before-close="() => { previewVisible = false }"
            width="1150px">
            <div class="print_wrap" id="print-preview" style="max-height:500px;overflow-y:auto;">
                <div class="title">太原市交通运输局责令改正通知书</div>
                <div>
                    <div class="fr" style="margin-bottom:10px;">深交责改（XX）第00001------号</div>
                </div>
                <table class="basicTable">
                    <tr>
                        <td width="60" rowspan="4">当事人</td>
                        <td width="100" rowspan="2">公民</td>
                        <td width="100">姓名</td>
                        <td width="150"></td>
                        <td width="100">性别</td>
                        <td colspan='2' width="150"></td>
                        <td width="100">身份证号</td>
                        <td width="150"></td>
                    </tr>
                    <tr>
                        <td>住址</td>
                        <td colspan="4"></td>
                        <td>职业</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td rowspan="2">法人/<br/>其他组织</td>
                        <td>名称</td>
                        <td colspan="3"></td>
                        <td colspan="2">法定代表人/主要负责人</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>地址</td>
                        <td colspan="6"></td>
                    </tr>
                </table>
                <div class="TI2" style="margin:18px 0 5px 0;">经调查，你（单位）存在下列违法事实：</div>
                <div class="whole_text"><span>1、</span></div>
                <div class="whole_text"><span>2、</span></div>
                <div class="whole_text"><span>3、</span></div>
                <div class="whole_text"><span>4、</span></div>
                <div class="insert_text TI2" style="margin:18px 0 18px 0;">
                    根据
                    <span class="text_line" style="width:350px;">&nbsp;</span>
                    的规定，现责令你（单位）对上述第
                    <span class="text_line" style="width:150px;">&nbsp;</span>
                    项 问题立即改正；对第
                    <span class="text_line" style="width:150px;">&nbsp;</span>
                    项问题于
                    <span class="text_line" style="width:60px;">&nbsp;</span>
                    年
                    <span class="text_line" style="width:60px;">&nbsp;</span>
                    月
                    <span class="text_line" style="width:60px;">&nbsp;</span>
                    日前整改完毕。
                </div>
                <div class="TI2" style="margin:0 0 4px 0;">改正内容和要求如下：</div>
                <div class="whole_text"><span>1、</span></div>
                <div class="whole_text"><span>2、</span></div>
                <div class="whole_text"><span>3、</span></div>
                <div class="whole_text"><span>4、</span></div>
                <div class="TI2" style="margin:24px 0 15px 0;">如果不服本决定，可以在六十日内依法向太原市人民政府或者广东省交通运输厅申请行政复议，或者在六个月内依法向太原市古交市人民法院提起行政诉讼。</div>
                <div class="insert_text" style="text-align:left;">
                    执法人员签名及执法号：
                    <span class="text_line" style="width:150px;"></span>
                    ,
                    <span class="text_line" style="width:150px;"></span>
                </div>
                <div class="insert_text" style="text-align:left;text-indent:11em;">
                    <span class="text_line" style="width:150px;"></span>
                    ,
                    <span class="text_line" style="width:150px;"></span>
                </div>
                <div class="insert_text" style="text-align:left;margin-top:11px;">
                    联系地址：
                    <span class="text_line" style="width:400px;"></span>
                </div>
                <div class="insert_text" style="text-align:left;;margin-bottom:10px;">
                    联系人：
                    <span class="text_line" style="width:150px;"></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    联系电话：
                    <span class="text_line" style="width:150px;"></span>
                </div>
                <div style="overflow:hidden">
                    <div class="fr" style="font-size:12px;color:#999999;">太原市交通运输局（印章）</div>
                </div>
                <div style="overflow:hidden">
                    <div class="fr" style="font-size:14px;margin:10px;">&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <table class="basicTable">
                    <tr>
                        <td width="60" rowspan="3">送达<br>事项</td>
                        <td width="130">送达人</td>
                        <td width="200">送达地点</td>
                        <td width="130">送达方式</td>
                        <td width="130">收件人</td>
                        <td width="130">联系方式</td>
                        <td width="130">签收时间</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"></td>
                    </tr>
                    <tr>
                         <td></td>
                    </tr>
                    <tr>
                        <td>备注</td>
                        <td colspan="6" style="text-align:left;text-indent:1em;">行政处罚通知书号或案件系统编号：</td>
                    </tr>
                </table>
                <div style="text-align:left;margin:10px 0;font-size:14px;">（本文书一式三份：第一联案件承办单位留存，第二联交当事人或其代理人，第三联存根）</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="previewVisible = false">取 消</el-button>
                <el-button type="primary" @click="printPage">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot.vue'
export default {
    name: 'recordPerson',
    components: {
        BreadFoot
    },
    data () {
        return {
            previewVisible: false,
            breadArr: [
                { title: '档案管理', path: '' }, { title: '人员信息', path: '' }
            ],
            info: {
                baseInfo: {
                    a1: '万柏林区/南头街街道办',
                    a2: '内容展示',
                    a3: '44030601201900007',
                    a4: '2019-09-12 14:30:30',
                    a5: '哈利',
                    a6: '已备案',
                    a7: '2019-09-14 14:50:45',
                    a8: '默默',
                    a9: '已审核'
                },
                imgList1: [
                    {
                        url: '',
                        name: '相关专业大专及以上学历证明材 料或机动车检测维修工程师证'
                    },
                    {
                        url: '',
                        name: '学历证明材料或技术职称或 职业资格证明文件'
                    },
                    {
                        url: '',
                        name: '机动车检测维修士或汽车维修工 （技师或高级技师)证'
                    },
                    {
                        url: '',
                        name: '机动车驾驶证'
                    },
                    {
                        url: '',
                        name: '特种作业操作证（电工）证书或 电动汽车维修工（高级）证书 维修经营相应条件的承诺书'
                    },
                    {
                        url: '',
                        name: '汽车维修士或汽车维修工证书'
                    },
                    {
                        url: '',
                        name: '安全生产知识和管理能力考核 合格证'
                    }
                ]
            }
        }
    },
    created () {
        // this.previewVisible = true
    },
    methods: {
        goBack () {
            this.$router.push('/recordInformationDetail?tabIndex=tab6')
        },
        printPage () {
            var iframe = document.getElementById('print-iframe')
            if (iframe) {
                document.body.removeChild(iframe)
            }
            var el = document.getElementById('print-preview')
            iframe = document.createElement('iframe')
            iframe.setAttribute('id', 'print-iframe')
            iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
            document.body.appendChild(iframe)
            iframe.contentDocument.body.innerHTML = `
                <style>
                    @page {margin-bottom: 0mm;margin-top: 0mm;}
                    #print-preview {padding: 10px 97x;text-align:center;font-size: 16px;color:#333333;}
                    #print-preview .title {font-size:22px;color:#333333;line-height:44px;font-weight: bold;margin-top:20px;}
                    #print-preview .fr {float: right;}
                    #print-preview table {width: 906px;border-bottom:1px solid #999999;border-left:1px solid #999999;text-align:center;}
                    #print-preview table td {border-top:1px solid #999999;border-right:1px solid #999999;box-sizing: border-box;height: 50px;line-height: 50px;}
                    #print-preview .TI2 {text-indent: 2em;text-align: left;}
                    #print-preview .whole_text {border-bottom: 1px solid #999999;line-height: 36px;height: 36px;margin-left:20px;text-align: left;}
                    #print-preview .whole_text span {position: relative;left: -20px;}
                    #print-preview .text_line {display: inline-block;border-bottom: 1px solid #999999;text-align: center;text-indent: 0;height: 26px;vertical-align: text-bottom;}
                    #print-preview .insert_text {line-height: 32px;}
                </style>
                <div id="print-preview">${el.innerHTML}</div>
            `
            let resumeWindow = iframe.contentWindow
            if (!window.showModalDialog) {
                resumeWindow.print()
            } else {
                // 兼容IE8,不加前面这两句,只能打印出整个页面的预览效果,并不是简历原件的内容
                resumeWindow.document.body.className += ' ext-ie'
                resumeWindow.document.execCommand('print', false, null)
                resumeWindow.print()
            }
        }
    }
}
</script>
<style lang="less">
#print-preview {padding: 0px 97px;text-align:center;font-size: 16px;color:#333333;}
#print-preview .title {font-size:22px;color:#333333;line-height:44px;font-weight: bold;}
#print-preview .fr {float: right;}
#print-preview table {width: 906px;border-bottom:1px solid #999999;border-left:1px solid #999999;text-align:center;}
#print-preview table td {border-top:1px solid #999999;border-right:1px solid #999999;box-sizing: border-box;height: 50px;line-height: 50px;}
#print-preview .TI2 {text-indent: 2em;text-align: left;}
#print-preview .whole_text {border-bottom: 1px solid #999999;line-height: 36px;height: 36px;margin-left:20px;text-align: left;}
#print-preview .whole_text span {position: relative;left: -20px;}
#print-preview .text_line {display: inline-block;border-bottom: 1px solid #999999;text-align: center;text-indent: 0;height: 26px;vertical-align: text-bottom;}
#print-preview .insert_text {line-height: 32px;}
.recordPerson {
    min-height: 800px;
    background: #fff;
    .content {
        padding-bottom: 20px;
    }
    .tab_inner {
        background: #ffffff;
        border-bottom: 20px solid #edf0f5;
        .info-title {
            padding: 0 30px;
            height: 54px;
            line-height: 54px;
            text-align: left;
            color: #333;
            font-size: 16px;
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
        .img_item {
            cursor: pointer;
            float: left;
            margin-right: 45px;
            margin-bottom: 15px;
            width: 162px;
            height: 248px;
            .img_border {
                width: 144px;
                padding: 8px;
                height: 144px;
                border: 1px solid rgba(0,0,0,0.15);
                border-radius: 4px;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            p {
                color: #666666;
                margin-top: 10px;
            }
        }
    }
}
</style>
