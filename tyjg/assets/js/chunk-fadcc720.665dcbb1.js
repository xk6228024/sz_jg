(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fadcc720"],{"2d8f":function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,".complainApplyDetail .el-input__inner{height:34px;line-height:34px}",""])},"3bfe":function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,".complainApplyDetail[data-v-87404d6c]{background:#fff}.complainApplyDetail .wrap[data-v-87404d6c]{padding:0 20px}.complainApplyDetail .content[data-v-87404d6c]{font-size:14px;color:#333;min-height:700px;padding:30px 30px 80px 30px}.complainApplyDetail .content h3[data-v-87404d6c]{width:300px;text-align:left;line-height:50px;font-size:14px;text-indent:20px;color:#000}.complainApplyDetail .content .table td[data-v-87404d6c]{height:40px}.complainApplyDetail .content .table td[data-v-87404d6c]:nth-child(2n-1){text-align:right;padding-right:10px;width:142px;color:#000}.complainApplyDetail .content .table td[data-v-87404d6c]:nth-child(2n){text-align:left;color:#333;padding-left:10px}.complainApplyDetail .content .table td.text[data-v-87404d6c]{line-height:24px;padding:6px 12px}.complainApplyDetail .content .table .complain-pic[data-v-87404d6c]{width:92px;height:72px;padding:4px;border:1px solid #ddd;margin:8px;display:inline-block}.complainApplyDetail .content .table .complain-pic img[data-v-87404d6c]{width:100%;height:100%}.complainApplyDetail .content .table2 .text[data-v-87404d6c]{line-height:30px}.complainApplyDetail .content .table2 li[data-v-87404d6c]{line-height:23px}.complainApplyDetail .content .table2 img[data-v-87404d6c]{margin-right:5px}.complainApplyDetail .alert-content[data-v-87404d6c]{padding:30px 0}.complainApplyDetail .alert-content .name[data-v-87404d6c]{float:left;width:134px;text-align:right;font-size:14px;color:#333}.complainApplyDetail .alert-content .name .red[data-v-87404d6c]{color:red}.complainApplyDetail .alert-content .textarea[data-v-87404d6c]{float:left;width:250px;height:68px}.complainApplyDetail .alert-content .btn[data-v-87404d6c]{padding-left:82px}.complainApplyDetail .alert-content .btn .el-button[data-v-87404d6c]{width:98px;height:34px;line-height:34px;padding:0;margin-right:30px}",""])},4800:function(t,e,i){"use strict";var a=i("9f15"),n=i.n(a);n.a},"4ca0":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"complainApplyDetail"},[i("div",{staticClass:"content"},[i("h3",[t._v("投诉详情")]),i("table",{staticClass:"table tableBorder",attrs:{width:"100%;"}},[i("tr",[i("td",{attrs:{width:"150"}},[t._v("投诉企业名称：")]),i("td",{attrs:{width:"350"}},[t._v(t._s(t.enterpriseInfo.enterpriseName||"卫东汽车服务有限公司"))]),i("td",{attrs:{width:"150"}},[t._v("企业联系人：")]),i("td",{attrs:{width:"350"}},[t._v(t._s(t.enterpriseInfo.enterpriseLinkName||"马卫东"))])]),i("tr",[i("td",[t._v("企业联系电话：")]),i("td",[t._v(t._s(t.enterpriseInfo.enterpriseLinkMobile||132654778882))]),i("td",[t._v("企业地址：")]),i("td",[t._v(t._s(t.enterpriseInfo.enterpriseAddr||"小店区创业四路1-11号"))])]),i("tr",[i("td",[t._v("投诉人姓名：")]),i("td",[t._v(t._s(t.enterpriseInfo.ownerUserNickname||"叶飞"))]),i("td",[t._v("手机号码：")]),i("td",[t._v(t._s(t.enterpriseInfo.ownerUserMobile||"18810001992"))])]),i("tr",[i("td",[t._v("投诉标题：")]),i("td",[t._v(t._s(t.enterpriseInfo.enterpriseComplaintTitle||"服务态度差"))]),i("td",[t._v("诉讼请求：")]),i("td",[t._v(t._s(t.enterpriseInfo.enterpriseComplaintRequest||"要求处理接待人员"))])]),t._m(0),i("tr",[i("td",[t._v("投诉内容：")]),i("td",{staticClass:"text",attrs:{colspan:"3"}},[t._v(t._s(t.enterpriseInfo.enterpriseComplaintBak||"服务质量不行，态度很差"))])]),i("tr",[i("td",[t._v("投诉图片：")]),i("td",{attrs:{colspan:"3",id:"complainPic"}},[t.enterpriseInfo.pic1?i("div",{staticClass:"complain-pic",on:{click:function(e){t.$zoomImg(t.enterpriseInfo.pic1)}}},[i("img",{attrs:{src:t.enterpriseInfo.pic1,alt:""}})]):t._e(),t.enterpriseInfo.pic2?i("div",{staticClass:"complain-pic",on:{click:function(e){t.$zoomImg(t.enterpriseInfo.pic2)}}},[i("img",{attrs:{src:t.enterpriseInfo.pic2,alt:""}})]):t._e(),t.enterpriseInfo.pic3?i("div",{staticClass:"complain-pic",on:{click:function(e){t.$zoomImg(t.enterpriseInfo.pic3)}}},[i("img",{attrs:{src:t.enterpriseInfo.pic3,alt:""}})]):t._e()])])]),t.replyInfoBol?i("h3",[t._v("批复信息")]):t._e(),t.replyInfoBol?i("table",{staticClass:"table tableBorder",attrs:{width:"100%;"}},[i("tr",[i("td",[t._v("批复人：")]),i("td",[t._v(t._s(t.enterpriseInfo.enterpriseComplaintSuperviseName||"卫东"))]),i("td",[t._v("批复时间：")]),i("td",[t._v("2020-01-09")])]),i("tr",[i("td",[t._v("批复内容：")]),i("td",{attrs:{colspan:"3"}},[t._v(t._s(t.enterpriseInfo.enterpriseComplaintSuperviseContent||"后续整改"))])])]):t._e(),t.vehicleInfo?i("h3",[t._v("关联维修信息")]):t._e(),t.vehicleInfo?i("table",{staticClass:"table tableBorder",attrs:{width:"100%;"}},[i("tr",[i("td",{attrs:{width:"150"}},[t._v("车牌号码：")]),i("td",{attrs:{width:"350"}},[t._v(t._s(t.vehicleInfo.vehicleLicensePlate||"晋A10A10"))]),i("td",{attrs:{width:"150"}},[t._v("车牌颜色：")]),i("td",[t._v("黄色")])]),i("tr",[i("td",[t._v("VIN码：")]),i("td",[t._v(t._s(t.vehicleInfo.vehicleVin))]),i("td",[t._v("送修日期：")]),i("td",[t._v(t._s(t._f("filterStrTime")(t.vehicleFixs.vehicleFixDate)))])]),i("tr",[i("td",[t._v("送修里程：")]),i("td",[t._v(t._s(t.vehicleFixs.vehicleFixMileage))]),i("td",[t._v("结算日期：")]),i("td",[t._v(t._s(t._f("momentTime")(t.vehicleFixs.vehicleFixBalanceDate)))])]),i("tr",[i("td",[t._v("结算清单编号：")]),i("td",[t._v(t._s(t.vehicleFixs.vehicleFixBalanceNumber))]),i("td",[t._v("故障信息：")]),i("td",[t._v(t._s(t.vehicleFixs.vehicleFixDescription))])])]):t._e(),i("h3",{directives:[{name:"show",rawName:"v-show",value:t.fixProjectList.length,expression:"fixProjectList.length"}]},[t._v("维修项目")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixProjectList.length,expression:"fixProjectList.length"}],staticClass:"table_box"},[i("el-table",{staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.fixProjectList,"header-cell-style":{background:"#F5F5F5","text-align":"center"},"cell-style":{"text-align":"center"},stripe:""}},[i("el-table-column",{attrs:{prop:"num",width:"100",label:"序号"}}),i("el-table-column",{attrs:{prop:"vehicleFixProjectName",label:"维修项目"}}),i("el-table-column",{attrs:{prop:"vehicleFixWorkingHours",label:"工时"}})],1)],1),i("h3",{directives:[{name:"show",rawName:"v-show",value:t.FixPartList.length,expression:"FixPartList.length"}]},[t._v("配件项目")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.FixPartList.length,expression:"FixPartList.length"}],staticClass:"table_box"},[i("el-table",{staticClass:"tab",staticStyle:{width:"100%"},attrs:{data:t.FixPartList,"header-cell-style":{background:"#F5F5F5","text-align":"center"},"cell-style":{"text-align":"center"},stripe:""}},[i("el-table-column",{attrs:{prop:"num",width:"100",label:"序号"}}),i("el-table-column",{attrs:{prop:"vehiclePartsName",label:"配件名称"}}),i("el-table-column",{attrs:{prop:"vehiclePartsNumber",label:"配件编码"}}),i("el-table-column",{attrs:{prop:"vehiclePartsNum",label:"使用数量"}})],1)],1)]),i("modal",{attrs:{alert:t.alert,title:t.alertTitle,width:450,height:242},on:{alertCancel:t.alertCancel}},[i("div",{staticClass:"alert-content clearfix"},[i("div",{staticClass:"name"},[i("span",{staticClass:"red"},[t._v("* ")]),t._v("拒绝理由：")]),i("el-input",{staticClass:"textarea",attrs:{type:"textarea",rows:3,resize:"none",placeholder:"请说明受理拒绝理由，字数限制在250字以内。",maxlength:"250"},model:{value:t.enterpriseComplaintRejectionBak,callback:function(e){t.enterpriseComplaintRejectionBak=e},expression:"enterpriseComplaintRejectionBak"}})],1),i("div",{staticClass:"btn"},[i("el-button",{staticClass:"search_btn",attrs:{type:"primary"},domProps:{textContent:t._s("确定")},on:{click:t.alertConfirm}}),i("el-button",{staticClass:"search_btn",domProps:{textContent:t._s("取消")},on:{click:t.alertCancel}})],1)]),i("bread-foot",{attrs:{breadArr:t.breadArr,icons:"icon-business-normal"}},[i("el-button",{staticClass:"react_btn",on:{click:function(e){t.$router.push("/complainApply")}}},[t._v("返回")])],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",[t._v("投诉类别：")]),i("td",[t._v("\n                    服务质量\n                ")]),i("td",[t._v("投诉日期：")]),i("td",[t._v("2020-01-09")])])}],l=(i("9a33"),i("714b")),r=i("b712"),s=i("399b"),o=i("cafd"),c=i("35d2"),p=i("6bf2"),d=i.n(p),h={name:"complainApplyDetail",data:function(){return{breadArr:[{title:"业务操作",path:""},{title:"服务投诉处理",path:""},{title:"投诉受理详情",path:""}],viewer:"",plateColor:s["m"],enterpriseComplaintRejectionBak:"",fixProjectList:[],FixPartList:[],enterpriseInfo:{},complainInfo:{},vehicleInfo:"",vehicleFixs:{vehicleFixDate:"",vehicleFixMileage:"",vehicleFixBalanceDate:"",vehicleFixDescription:"",vehicleFixBalanceNumber:""},ownerInfo:{vehicleOwner:"",vehicleTelphone:"",vehicleVin:"",vehicleLicensePlate:""},value2:2,complaintCategory:s["f"],uploadURL:window.uploadURL,carImg1:"",carImg2:"",alert:!1,alertTitle:"投诉拒绝",companyName:"",adoptSend:!1,refuseSend:!1,input:"",value:"",tableData3:[],replyInfoBol:!1}},created:function(){var t=this;this.$post("bas/enterprise/complaint/getEnterpriseComplaintDetailsFromDC",{data:{enterpriseComplaintId:this.$route.query.id}}).then((function(e){200===e.status&&(t.enterpriseInfo=e.data,t.enterpriseInfo.typeList=t.enterpriseInfo.enterpriseComplaintCategory.split(","),e.data.enterpriseComplaintSuperviseContent?t.replyInfoBol=!0:t.replyInfoBol=!1)})).catch((function(t){console.log(t)}))},filters:{filterStrTime:o["a"],momentTime:function(t){return d()(t).format("YYYY-MM-DD")}},components:{BreadFoot:r["a"],Modal:l["a"],moment:d.a},methods:{setViewer:function(t){this.viewer&&this.viewer.destroy(),this.viewer=new c["a"](document.querySelector("#complainPic")),this.viewer.view(t)},uploadSuccess1:function(t){this.carImg1=t.data,this.$message({message:"图片上传成功！",type:"success"})},uploadSuccess2:function(t){this.carImg2=t.data,this.$message({message:"图片上传成功！",type:"success"})},adopt:function(){var t=this;this.adoptSend||(this.adoptSend=!0,this.$post("bas/enterprise/complaint/updateEnterpriseComplaint",{data:{enterpriseComplaintStatus:1,enterpriseComplaintId:this.$route.query.id}}).then((function(e){200===e.status?t.$toast({msg:"受理成功",callback:function(){t.$router.push("/complainApply")}}):console.log(e.message),t.adoptSend=!1})).catch((function(){t.adoptSend=!1})))},refuse:function(){this.alert=!0},alertCancel:function(t){this.alert=!1},alertConfirm:function(t){var e=this;this.enterpriseComplaintRejectionBak?this.refuseSend||(this.refuseSend=!0,this.$post("bas/enterprise/complaint/updateEnterpriseComplaint",{data:{enterpriseComplaintStatus:2,enterpriseComplaintId:this.$route.query.id,enterpriseComplaintRejectionBak:this.enterpriseComplaintRejectionBak}}).then((function(t){200===t.status?(e.$toast({msg:"操作成功",callback:function(){e.$router.push("/complainApply")}}),e.alert=!1):console.log(t.message),e.refuseSend=!1})).catch((function(){e.refuseSend=!1}))):this.$alert("请输入拒绝理由！","提示")}}},v=h,m=(i("c492"),i("4800"),i("4023")),f=Object(m["a"])(v,a,n,!1,null,"87404d6c",null);e["default"]=f.exports},"4d0a":function(t,e,i){var a=i("3bfe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("85cb").default;n("411936bf",a,!0,{sourceMap:!1,shadowMode:!1})},"9f15":function(t,e,i){var a=i("2d8f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("85cb").default;n("55b1d537",a,!0,{sourceMap:!1,shadowMode:!1})},c492:function(t,e,i){"use strict";var a=i("4d0a"),n=i.n(a);n.a}}]);