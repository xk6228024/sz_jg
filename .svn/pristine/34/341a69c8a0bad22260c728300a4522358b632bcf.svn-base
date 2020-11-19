<template>
    <div class="maintainDetail">
        <div class="content">
            <div class='wrap'>
                <div class="innner">
                    <h3 class="h3">维修信息</h3>
                    <!-- <div class="table-boas">
                        <div class="table-base-box">
                            <div class="table-base-tr">
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>车牌号码：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{obj.vehicleLicensePlate}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>车牌颜色：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{obj.vehicleLicensePlateColor}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>VIN：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{obj.vehicleVin}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-base-tr">
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>送修日期：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{vehicleFix.vehicleFixDate}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>送修里程：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{vehicleFix.vehicleFixMileage}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>结算日期：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{vehicleFix.vehicleFixBalanceDate | filterTime('yyyy-mm-dd')}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-base-tr">
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>结算清单编号：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{vehicleFix.vehicleFixBalanceNumber}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>故障信息：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{vehicleFix.vehicleFixDescription}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>维修企业名称：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{cobj.enterpriseName}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-base-tr">
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>企业联系人：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{cobj.enterpriseLinkName}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>企业联系电话：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <span>{{cobj.enterpriseLinkMobile}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-base-td">
                                    <div class="table_td fl tdtext">
                                        <div class="cell">
                                            <span>维修企业地址：</span>
                                        </div>
                                    </div>
                                    <div class="table_td tdgrow">
                                        <div class="cell">
                                            <el-tooltip class="item" effect="dark" :content="cobj.enterpriseAddr" placement="top" disabled="true">
                                                <span>123{{cobj.enterpriseAddr}}</span>
                                            </el-tooltip>
                                            <span>{{cobj.enterpriseAddr}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <table class="table_S" width="100%">
                        <tr>
                            <td class="table_msg" width="150">车牌号码：</td>
                            <td class="table_text" width="300">{{obj.vehicleLicensePlate}}</td>
                            <td class="table_msg" width="150">车牌颜色：</td>
                            <td class="table_text" width="300">{{obj.vehicleLicensePlateColor}}</td>
                            <td class="table_msg" width="150">VIN码：</td>
                            <td class="table_text" width="300">{{obj.vehicleVin}}</td>
                        </tr>
                        <tr>
                            <td class="table_msg">送修日期：</td>
                            <td class="table_text">{{vehicleFix.vehicleFixDate}}</td>
                            <td class="table_msg">送修里程：</td>
                            <td class="table_text">{{vehicleFix.vehicleFixMileage}}</td>
                            <td class="table_msg">结算日期：</td>
                            <td class="table_text">{{vehicleFix.vehicleFixBalanceDate | momentTime}}</td>
                        </tr>
                        <tr>
                            <td class="table_msg">结算清单编号：</td>
                            <td class="table_text">{{vehicleFix.vehicleFixBalanceNumber}}</td>
                            <td class="table_msg">故障信息：</td>
                            <td class="table_text">{{vehicleFix.vehicleFixDescription}}</td>
                            <td class="table_msg">维修企业名称：</td>
                            <td class="table_text">{{cobj.enterpriseName}}</td>
                        </tr>
                        <tr>
                            <td class="table_msg">企业联系人：</td>
                            <td class="table_text">{{cobj.enterpriseLinkName}}</td>
                            <td class="table_msg">企业联系电话：</td>
                            <td class="table_text">{{cobj.enterpriseLinkMobile}}</td>
                            <td class="table_msg">维修企业地址：</td>
                            <td class="table_text">{{cobj.enterpriseAddr}}</td>
                        </tr>
                    </table>
                </div>
                <div class="table-lr-con clearfix">
                    <div class="table-box-l">
                        <h3 class="h3">维修项目</h3>
                        <el-table
                            :data="fixProjectList"
                            :header-cell-style="{'text-align':'center'}"
                            :cell-style="{'text-align':'center'}"
                            :stripe="false">
                            <el-table-column
                                prop="vehicleFixProjectName"
                                label="维修项目"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="vehicleFixWorkingHours"
                                label="工时"
                                >
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table-box-r">
                        <h3 class="h3">使用配件</h3>
                        <el-table
                            :data="partList"
                            :header-cell-style="{'text-align':'center'}"
                            :cell-style="{'text-align':'center'}"
                            :stripe="false">
                            <el-table-column
                                prop="vehiclePartsName"
                                label="配件名称"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="vehiclePartsNumber"
                                label="配件编号"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="vehiclePartsNum"
                                label="使用数量"
                                >
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="table-box-gx" v-show="hasSupervise">
                    <h3 class="h3">工序信息</h3>
                    <!-- <table class="table1 tableBorder" width="100%;">
                        <tr>
                            <th width="100">序号</th>
                            <th width="120">作业名称</th>
                            <th width="">作业项目</th>
                            <th width="">作业内容</th>
                            <th width="">作业记录</th>
                            <th width="120">维护人员</th>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">1</td>
                            <td style="text-align:center" rowspan="32">发动机</td>
                            <td rowspan="2">发动机工作状况</td>
                            <td>1）检查发动机启动性能和柴油发动机停机装置</td>
                            <td>已符合要求</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查发动机运转情况</td>
                            <td>已符合要求</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">2</td>
                            <td>发动机排放机外净化装置</td>
                            <td>检查</td>
                            <td>已符合要求 | 已紧固</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">3</td>
                            <td>燃油蒸发控制装置</td>
                            <td>检查外观，检查装置是否畅通，视情更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">4</td>
                            <td>曲箱箱通风装置</td>
                            <td>检查外观，检查装置是否畅通，视情更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">5</td>
                            <td>增压器、中冷器</td>
                            <td>检查、清洁、紧固</td>
                            <td>已符合要求 | 已清洁 | 已紧固</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">6</td>
                            <td>发电机、起动机</td>
                            <td>检查、清洁</td>
                            <td>已符合要求 | 已清洁</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">7</td>
                            <td rowspan="2">发动机传动皮带(链)</td>
                            <td>1）检查空压机、水泵、发电机、空调机和正时传动带磨损及老化程度</td>
                            <td>已符合要求 | 已清洁 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）视情调整皮带松紧度</td>
                            <td>已调整</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">8</td>
                            <td rowspan="2">冷却装置</td>
                            <td>1）检查散热器、水箱及管路密封</td>
                            <td>已符合要求 | 已修补</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查水泵和节温器工作状况</td>
                            <td>已符合要求</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">9</td>
                            <td rowspan="2">火花塞、高压线</td>
                            <td>1）清洁、检查或更换火花塞</td>
                            <td>已符合要求</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查高压线外观及连接情况，按规定里程或时间更换高压线</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">10</td>
                            <td>进/排气岐管、消声器、排气管</td>
                            <td>检查、紧固</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">11</td>
                            <td>发动机总成</td>
                            <td>清洁、检查、紧固</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">12</td>
                            <td rowspan="2">储气筒、干燥器</td>
                            <td>1）检查、紧固</td>
                            <td>已符合要求</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）按规定里程或时间更换干燥剂</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">13</td>
                            <td>制动踏板</td>
                            <td>检查、调整制动踏板自由行程</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">14</td>
                            <td>驻车制动</td>
                            <td>检查驻车制动性能，调整操纵机构</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">15</td>
                            <td>防抱死制动装置</td>
                            <td>检查连接线路，清洁伦速传感器</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="8">16</td>
                            <td rowspan="8">鼓式制动器</td>
                            <td>1）检查制动间隙调整装置</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）拆卸制动鼓、轮毂、制动蹄、主销；消洗转向节、轴承、支承销、制动底板等零件</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>3）检查制动底板、制动凸轮轴，校紧装置螺栓</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>4）检查内外轴承</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>5）检查制动摩擦片、制动蹄及支承销</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>6）检查制动蹄复位弹簧</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>7）检查毂、制动鼓及轴承外座圈</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>8）装复制动鼓、轮毂、制动蹄，调整轴承松紧度及制动间隙</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="4">17</td>
                            <td rowspan="4">盘式制动器</td>
                            <td>1）检查制动摩擦片和制动盘磨损量</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查制动摩擦片与制动盘的间隙</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>3）检查密封件</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>4）检查制动钳</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">18</td>
                            <td rowspan="3">转向系</td>
                            <td rowspan="2">转向器、转向传动机构</td>
                            <td>1）检查转向器和转向传动机构</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查部件技术状况，校紧各部螺栓</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">19</td>
                            <td>转向盘最大自由转动量</td>
                            <td>检查、调整转向盘最大自由转动量</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="4">20</td>
                            <td rowspan="7">行驶系</td>
                            <td rowspan="4">车轮及轮胎（包括备胎）</td>
                            <td>1）检查轮胎规格型号</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查轮胎外观，视情更换轮胎</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>3）轮胎换位</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>4）检查、调整车轮前束</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">21</td>
                            <td rowspan="2">悬架</td>
                            <td>1）检查、紧固，视情校正</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）减震器</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">22</td>
                            <td>车桥</td>
                            <td>检查车桥、车桥与悬架之间的拉杆和导杆</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">23</td>
                            <td rowspan="7">传动系</td>
                            <td rowspan="2">离合器</td>
                            <td>1）检查工作状况</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查、调整踏板自由行程</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">24</td>
                            <td rowspan="2">变速器、主减速器、差速器</td>
                            <td>1）检查、调整变速器</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查变速器、主减速器、差速器润滑油液高度，视情更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="3">25</td>
                            <td rowspan="3">传动轴</td>
                            <td>1）检查传动轴防尘罩</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查传动轴及万向节</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>3）检查传动轴承及支架</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">26</td>
                            <td rowspan="2">灯光导线</td>
                            <td>前照灯</td>
                            <td>检查远光灯发光强度，检查、调整前照灯光束照射位置</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">27</td>
                            <td>仪表、喇叭、刮水器、蓄电池、线束及导线</td>
                            <td>检查、调整，视情修理或更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="2">28</td>
                            <td rowspan="7">车架车身</td>
                            <td rowspan="2">车架和车身</td>
                            <td>1）检查车架和车身</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查车门、车窗启闭和锁止</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">29</td>
                            <td>支撑装置</td>
                            <td>检查、润滑支撑装置，校紧连接螺栓、螺母</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td style="text-align:center" rowspan="4">30</td>
                            <td rowspan="4">牵引车与挂车连接装置</td>
                            <td>1）检查牵引销及其连接装置</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>2）检查、润滑牵引座及牵引销锁止、释放机构，校紧连接螺栓、螺母</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>3）检查转盘及转盘架</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                        <tr>
                            <td>4）检查牵引钩</td>
                            <td>已符合要求 | 已更换</td>
                            <td style="text-align:center">默默靠近</td>
                        </tr>
                    </table> -->
                    <!-- v-show="hasSupervise" -->
                    <el-table
                        :data="selfList"
                        border
                        :header-cell-style="{'text-align':'center'}"
                        :stripe="false"
                        :span-method="objectSpanMethod"
                        style="width: 100%">
                        <el-table-column
                            prop="num"
                            label="序号"
                            width="80"
                            align='center'
                            >
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFix2RecProjectName"
                            label="作业名称"
                            width="120"
                            align='center'
                            >
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFix2RecProjectName2"
                            label="作业项目"
                            align='left'
                            >
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFix2RecProjectContent"
                            label="作业内容"
                            align='left'
                            >
                        </el-table-column>
                        <el-table-column
                            prop="vehicleFix2RecProjectResults"
                            label="作业记录"
                            align='left'
                            :show-overflow-tooltip='true'
                            >
                        </el-table-column>
                        <el-table-column
                            prop="employeId"
                            label="维护人员"
                            width="160"
                            align='center'
                            >
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <bread-foot :breadArr="breadArr" icons="icon-analy-normal">
            <el-button class="react_btn" @click="$router.push('/maintainRecord')">返回</el-button>
        </bread-foot>
    </div>
</template>

<script type="text/javascript">
import BreadFoot from '@/components/BreadFoot.vue'
import ToolBar from '@/components/ToolBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Modal from '@/components/Modal.vue'
import { plateColor } from '@/utils/type.js'
import { getCookie } from '@/utils/cookie.js'
import { setNum } from '@/utils/tools.js'
import moment from 'moment'
export default {
    name: 'maintainDetail',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            breadArr: [
                { title: '查询统计', path: '' }, { title: '维修记录查询', path: '' }, { title: '维修记录详情', path: '' }
            ],
            fixProjectList: [],
            partList: [],
            selfList: [], // 工序信息
            spanArr: [],
            spanArr2: [],
            hasConcat: false,
            hasSupervise: false, // 是否显示工序
            obj: '', // 详情
            carColorList: plateColor, // 车牌颜色列表
            aobj: {},
            cobj: {}, // 企业信息
            vehicleFix: {},
            activeName: 'first',
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        this.$post('/bas/vehicle/fix/vehiclefixdetail', {
            'data': {
                'vehicleFixId': this.$route.query.vehicleId
            }
        }).then(res => {
            if (res.status === 200) {
                if (res.data.vehicle) {
                    this.carColorList.forEach(item => {
                        if (res.data.vehicle.vehicleLicensePlateColor === item.value) {
                            res.data.vehicle.vehicleLicensePlateColor = item.label
                        }
                    })
                    this.obj = res.data.vehicle
                }
                if (res.data.enterprise) {
                    try {
                        var user = JSON.parse(getCookie('user'))
                        if (!user.roleExtEnterpriseLinkpersonIsview) {
                            res.data.enterprise.enterpriseLinkName = '******'
                            res.data.enterprise.enterpriseLinkMobile = '******'
                        }
                    } catch (e) {
                        res.data.enterprise.enterpriseLinkName = '******'
                        res.data.enterprise.enterpriseLinkMobile = '******'
                    }
                    this.cobj = res.data.enterprise
                }
                if (res.data.busVehicleFix2RecList) {
                    this.selfList = setNum(res.data.busVehicleFix2RecList, 1, 99)
                    this.selfList = res.data.busVehicleFix2RecList
                    this.getSpanArr()
                    this.getSpan2Arr()
                    this.hasSupervise = true
                } else {
                    this.hasSupervise = false
                }
                this.vehicleFix = res.data.vehicleFix || []
                this.fixProjectList = res.data.fixProjectList || []
                this.partList = res.data.partList || []
            }
        }).catch(err => {
            console.log(err)
        })
    },
    computed: {},
    // 使用其它组件
    components: {
        BreadFoot,
        Sidebar,
        ToolBar,
        Modal,
        moment
    },
    filters: {
        momentTime: function (val) {
            if (!val) return ''
            return moment(val).format('YYYY-MM-DD')
        }
    },
    // 方法
    watch: {},
    methods: {
        getSpanArr () {
            // if (this.hasConcat) {
            //     return
            // }
            // this.hasConcat = true
            let contactDot = 0
            this.selfList.forEach((item, index) => {
                item.index = index
                if (index === 0) {
                    this.spanArr.push(1)
                } else {
                    if (item.vehicleFix2RecProjectName === this.selfList[index - 1].vehicleFix2RecProjectName) {
                        this.spanArr[contactDot] += 1
                        this.spanArr.push(0)
                    } else {
                        this.spanArr.push(1)
                        contactDot = index
                    }
                }
            })
        },
        getSpan2Arr () {
            // if (this.hasConcat) {
            //     return
            // }
            // this.hasConcat = true
            let contactDot = 0
            this.selfList.forEach((item, index) => {
                item.index = index
                if (index === 0) {
                    this.spanArr2.push(1)
                } else {
                    if (item.vehicleFix2RecProjectName2 === this.selfList[index - 1].vehicleFix2RecProjectName2) {
                        this.spanArr2[contactDot] += 1
                        this.spanArr2.push(0)
                    } else {
                        this.spanArr2.push(1)
                        contactDot = index
                    }
                }
            })
            console.log(this.spanArr2, 'spanArr2')
        },
        objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 1) {
                const _row = this.spanArr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
            if (columnIndex === 2) {
                const _row = this.spanArr2[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
}
</script>

<style lang="less" scoped>
.maintainDetail {
    background-color: #fff;
    .tab-box {
        border: 1px solid #dddddd;
    }
    .page_box {
        background: #f7f8f9;
        padding-top: 10px;
        height: 53px;
        border: 1px solid #dddddd;
        border-top: none;
    }
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        top: 0;
    }
    .wrap {
        min-height: 700px;
        padding-bottom: 100px;
    }
    .table-boas {
        border-top: 1px solid #dddddd;
        border-left: 1px solid #dddddd;
        .table_td {
            color: #323b4e;
            padding: 10px 0;
            border-right: 1px solid #dddddd;
            border-bottom: 1px solid #dddddd;
        }
        .table-base-box {
            font-size: 14px;
            .table-base-tr {
                display: flex;
                .table-base-td {
                    width: 33.3%;
                    // display: flex;
                    box-sizing: border-box;
                    .table_td {
                        color: #000000;
                        box-sizing: border-box;
                        text-overflow: ellipsis;
                        vertical-align: middle;
                        position: relative;
                    }
                    .cell {
                        height: 19px;
                        padding: 0 10px;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: normal;
                        word-break: break-all;
                    }
                    .tdgrow {
                        // flex: 1;
                        text-align: left;
                        margin-left: 120px;
                        .cell {
                            height: 19px;
                            width: 100%;
                            word-break: keep-all;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    .tdtext {
                        width: 120px;
                        text-align: right;
                        color: #000000;
                    }
                    .border-bot-no {
                        border-bottom: none;
                    }
                }
                .long-td {
                    width: 50%;
                }
                .wid-td {
                    width: 75%;
                    .tdgrow {
                        flex: 2;
                    }
                }
            }
        }
    }
    .table-lr-con {
        margin-top: 30px;
        .table-box-l, .table-box-r {
            float: left;
            width: 50%;
            box-sizing: border-box;
        }
        .table-box-l {
            padding-right: 30px;
        }
        .table-box-r {
            padding-left: 30px;
        }
    }
    .table-box-gx {
        margin-top: 30px;
    }
}
.innner, .table-lr-con, .table-box-gx {
    padding: 0 30px;
    .h3 {
        font-size: 16px;
        color: #000000;
        text-align: left;
        height: 54px;
        line-height: 54px;
    }
}
.table_S {
    border-collapse:collapse;
    // table-layout: fixed;
    word-wrap: break-word;
    tr {
        td {
            border: 1px solid #ebeef5;
            font-size: 14px;
            font-weight: normal;
            height: 40px;
        }
        .table_msg {
            text-align: right;
        }
        .table_text {
            text-align: left;
            padding: 0 10px;
        }
        .title {
            color: #666;
            text-align: right;
        }
        .msg {
            color: #333;
            text-align: left;
            padding-left: 10px;
        }
    }
    .info {
        .title {
            width: 190px;
        }
        .msg {
            width: 298px;
        }
    }
}
.table_box {
    padding: 30px 20px;
    .table {
        border-collapse:collapse;
        tr {
            td {
                border: 1px solid #ddd;
                font-size: 14px;
                font-weight: normal;
                height: 40px;
            }
            .title {
                color: #666;
                text-align: right;
                width: 126px;
            }
            .msg {
                color: #333;
                text-align: left;
                width: 376px;
                padding-left: 10px;
            }
        }
        .info {
            .title {
                width: 190px;
            }
            .msg {
                width: 298px;
            }
        }
    }
}
.more-img {
    padding-left: 20px;
    .item {
        float: left;
        margin-right: 66px;
        .title {
            text-align: center;
            font-size: 14px;
            color: #666;
            font-weight: bold;
            margin-bottom: 14px;
        }
        .img {
            width: 186px;
            height: 226px;
            border: 1px solid #ddd;
            padding: 6px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
.brand {
    padding: 30px 20px;
    li {
        width: 186px;
        height: 164px;
        padding-top: 12px;
        float: left;
        margin-right: 30px;
        border: 1px solid #ddd;
        img {
            width: 162px;
            height: 120px;
        }
        h6 {
            height: 30px;
            line-height: 30px;
            font-weight: normal;
            font-size: 14px;
            color: #666;
        }
    }
}
.alert-content {
    padding: 30px 0;
    .name {
        float:left;
        width: 134px;
        text-align: right;
        .red {
            color: #ff0000;
        }
    }
    .textarea {
        float: left;
        width: 250px;
        height: 68px;
    }
    .btn {
        padding-left: 82px;
        .el-button{
            width: 98px;
            height: 34px;
            line-height: 34px;
            padding: 0;
            margin-right: 30px;
        }
    }
}
</style>
<style lang="less">
.maintainDetail {
    .el-tabs--border-card{
        border: none;
        box-shadow: none;
        width: 100%;
    }
    .el-tabs__header{
        background-color: #fff;
        margin: 0px;
    }
    .car-info .el-input {
        width: 345px;
    }
    .car-info .el-input__inner {
        height: 34px;
    }
    .el-table .blue {
        background: #F0F5F8;
    }
    .toolBar .el-button{
        width: 98px;
        height: 34px;
        line-height: 30px;
        padding: 0;
    }
    .audit-btn .el-textarea {
        width: 500px;
    }
    .audit-btn .el-textarea__inner {
        width: 500px;
        height: 78px;
        resize: none;
    }
    .el-tabs--card >.el-tabs__header .el-tabs__nav {
        border: none;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        margin-left: 20px;
        border-radius: 0;
    }
    .el-tabs__item {
        width: 128px;
        height: 52px;
        line-height: 52px;
        padding: 0 30px;
    }
    .el-textarea__inner {
        resize: none;
        height: 68px;
    }
    .el-tabs__content {
        position: absolute;
        top:0;
        bottom: 0;
        width: 100%;
        left: 0;
    }
    .el-table--fit {
        border-top: 1px solid #E9E9E9 !important;
        border-left: 1px solid #E9E9E9 !important;
        border-right: 1px solid #E9E9E9 !important;
    }
}
</style>
