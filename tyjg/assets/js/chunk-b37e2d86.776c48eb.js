(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b37e2d86"],{1427:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-template"},[r("el-form",{ref:"form",staticClass:"form clearfix",attrs:{model:e.value,"inline-message":!1,"label-width":e.labelLength,inline:!0}},[e._l(e.listOptions,(function(t,a){return r("el-col",{key:a,attrs:{span:8}},[r("el-form-item",{attrs:{label:t.label+"：",prop:t.key}},["input"===t.type?r("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.value[t.key],callback:function(r){e.$set(e.value,t.key,r)},expression:"value[item.key]"}}):"select"===t.type&&t.list?r("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.value[t.key],callback:function(r){e.$set(e.value,t.key,r)},expression:"value[item.key]"}},e._l(t.list,(function(e){return r("el-option",{key:e[t.list_value]||e.value,attrs:{label:e[t.list_key]||e.label,value:e[t.list_value]||e.value}})}))):"city"===t.type?r("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.value[t.key],callback:function(r){e.$set(e.value,t.key,r)},expression:"value[item.key]"}},e._l(e.regionList,(function(e){return r("el-option",{key:e.regionId,attrs:{label:e.regionName,value:e.regionId}})}))):"date"===t.type?r("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":t.valueFormat||"timestamp"},model:{value:e.value[t.key],callback:function(r){e.$set(e.value,t.key,r)},expression:"value[item.key]"}}):"year"===t.type?r("el-date-picker",{attrs:{clearable:!1,editable:!1,type:"year",placeholder:"请选择","value-format":t.valueFormat||"yyyy"},model:{value:e.value[t.key],callback:function(r){e.$set(e.value,t.key,r)},expression:"value[item.key]"}}):e._e()],1)],1)})),r("el-col",{staticClass:"btns clearfix",attrs:{span:8}},[r("el-button",{attrs:{disabled:e.getDisabled},on:{click:e.query}},[e._v("查 询")]),r("el-button",{on:{click:e.reset}},[e._v("重 置")]),e.listOptions.length>2&&e.options.length>2?r("el-button",{attrs:{type:"text"},on:{click:function(t){e.listOptions=e.listOptions.slice(0,2)}}},[e._v("收起 "),r("i",{staticClass:"el-icon-arrow-up"})]):e._e(),e.listOptions.length<=2&&e.options.length>2?r("el-button",{attrs:{type:"text"},on:{click:function(t){e.listOptions=e.options}}},[e._v("展开 "),r("i",{staticClass:"el-icon-arrow-down"})]):e._e()],1)],2),e._t("default")],2)},l=[],i=(r("6d57"),{name:"searchTemplate",props:{options:{type:Array,required:!0,default:function(){return[]}},value:{type:Object},permission:{type:String,default:function(){return""}}},data:function(){return{listOptions:[],regionList:[{regionId:"1",regionName:"小店区"},{regionId:"2",regionName:"迎泽区"},{regionId:"3",regionName:"杏花岭区"},{regionId:"4",regionName:"尖草坪区"},{regionId:"5",regionName:"万柏林区"},{regionId:"6",regionName:"晋源区"},{regionId:"7",regionName:"清徐县"},{regionId:"8",regionName:"阳曲县"},{regionId:"9",regionName:"娄烦县"},{regionId:"10",regionName:"古交市"}],labelLength:"0px"}},watch:{options:{handler:function(e){if(e){var t=JSON.parse(JSON.stringify(this.value)),r=0;e.forEach((function(e){r<e.label.length&&(r=e.label.length),e.defaultValue?t[e.key]=e.defaultValue:t[e.key]=""})),this.labelLength=14*(r+1)+5+"px",this.$emit("input",t),this.listOptions=e,this.listOptions=this.listOptions.slice(0,2)}},immediate:!0},listOptions:{handler:function(e){var t=this;this.$nextTick((function(){var e=document.querySelectorAll(".el-form-item__content");e=Array.prototype.slice.call(e),e.forEach((function(e){e.style.width="calc(100% - "+t.labelLength+")"}))}))},immediate:!0}},computed:{getDisabled:function(){return""!==this.permission&&!this.$checkAuth(this.permission)}},methods:{query:function(){this.$emit("search",this.value)},reset:function(){var e=this;this.options.forEach((function(t){t.defaultValue&&e.value[t.key]?e.value[t.key]=t.defaultValue:e.value[t.key]=""})),this.$emit("input",this.value)}}}),n=i,o=(r("e54f"),r("4023")),s=Object(o["a"])(n,a,l,!1,null,null,null);t["a"]=s.exports},"527b":function(e,t,r){t=e.exports=r("690e")(!1),t.push([e.i,".search-template{position:relative}.search-template .el-form .el-col{height:56px;-webkit-box-sizing:border-box;box-sizing:border-box}.search-template .el-form .el-col:nth-child(3n+1){padding-right:4%}.search-template .el-form .el-col:nth-child(3n+1) .el-form-item{text-align:left}.search-template .el-form .el-col:nth-child(3n - 1){padding:0 2%}.search-template .el-form .el-col:nth-child(3n - 1) .el-form-item{text-align:center}.search-template .el-form .el-col:nth-child(3n){padding-left:4%}.search-template .el-form .el-col:nth-child(3n) .el-form-item{text-align:right}.search-template .el-form .el-col .el-form-item{width:100%;margin-bottom:16px}.search-template .el-form .el-col .el-form-item .el-form-item__label{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;text-align:right}.search-template .el-form .el-col .el-form-item .el-form-item__content .el-input__inner{width:100%;height:34px;line-height:34px}.search-template .el-form .el-col .el-form-item .el-form-item__content .el-select{width:100%}.search-template .el-form .el-col .el-form-item .el-form-item__content .el-date-editor{width:100%;margin-top:3px}.search-template .el-form .el-col .el-form-item .el-form-item__content .el-date-editor .el-input__icon,.search-template .el-form .el-col .el-form-item .el-form-item__content .el-date-editor .el-range-separator{line-height:32px}.search-template .el-form .btns{-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left!important;margin-top:4px}",""])},"813f":function(e,t,r){var a=r("527b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var l=r("85cb").default;l("0df55402",a,!0,{sourceMap:!1,shadowMode:!1})},cba5:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-page",staticStyle:{padding:"20px 30px 80px",background:"#fff"}},[r("search",{attrs:{options:e.searchOption},on:{search:function(t){e.queryData(1)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),r("custom-table",{attrs:{"table-data":e.dataList,"label-data":e.labelData,total:e.total,height:630,currentPage:e.pageNum,loading:e.loading},on:{onPageChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},scopedSlots:e._u([{key:"createTime",fn:function(t){return[e._v("\n            "+e._s(t.slotData.createTime?e.$filterTime(t.slotData.createTime,"yyyy-mm-dd"):"")+"\n        ")]}},{key:"operation",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.$router.push("/maintenanceRecordDetail?"+t.row)}}},[e._v("详情")])]}}])}),r("bread-foot",{attrs:{breadArr:e.breadArr,icons:"icon-archives-normal"}})],1)},l=[],i=r("b712"),n=r("0dd2"),o=r("1427"),s={name:"recordInformation",components:{BreadFoot:i["a"],CustomTable:n["a"],Search:o["a"]},data:function(){return{breadArr:[{title:"档案管理",path:""},{title:"企业备案信息",path:""}],searchOption:[{label:"所在区域",type:"select",key:"enterpriseArea",list:[{label:"小店区",value:"1"},{label:"集怀县",value:"2"},{label:"万柏林区",value:"3"}]},{label:"车牌号码",type:"input",key:"enterpriseName1"},{label:"车牌颜色",type:"select",key:"coraStatus2",list:[{label:"蓝色",value:"1"},{label:"黄色",value:"2"},{label:"渐变绿",value:"3"}]},{label:"VIN码",type:"input",key:"enterpriseName3"},{label:"维护企业",type:"input",key:"enterpriseName4"},{label:"维修性质",type:"select",key:"coraStatus5",list:[{label:"维修性质",value:"1"}]},{label:"维护日期",type:"date",key:"daterange"}],searchValue:{},dataList:[{num:"01",enterpriseName:"2020-5-1",enterpriseAreaStr:"山西锦华汽车销售服务有限公司",enterpriseBusinessCategoryStr:"晋A22311",enterpriseOwner:"黄色",enterpriseOwnerPhone:"ZQ88812312449",enterpriseOwnerPhone1:"2000",createTime:"2019-10-10",createTime1:"2019-10-10",coraTime:"普通维修",coraStatusStr:"周期维护"},{num:"02",enterpriseName:"2020-5-1",enterpriseAreaStr:"车大夫汽车维修服务有限公司",enterpriseBusinessCategoryStr:"晋A22388",enterpriseOwner:"黄色",enterpriseOwnerPhone:"ZQ88812312449",enterpriseOwnerPhone1:"2000",createTime:"2019-10-10",createTime1:"2019-10-10",coraTime:"普通维修",coraStatusStr:"周期维护"},{num:"03",enterpriseName:"2020-5-1",enterpriseAreaStr:"太原陆鼎汽车维修有限公司",enterpriseBusinessCategoryStr:"晋A22455",enterpriseOwner:"黄色",enterpriseOwnerPhone:"ZQ88812312449",enterpriseOwnerPhone1:"2000",createTime:"2019-10-10",createTime1:"2019-10-10",coraTime:"普通维修",coraStatusStr:"周期维护"},{num:"04",enterpriseName:"2020-5-1",enterpriseAreaStr:"山西普洋汽车销售有限公司",enterpriseBusinessCategoryStr:"晋A22444",enterpriseOwner:"黄色",enterpriseOwnerPhone:"ZQ88812312449",enterpriseOwnerPhone1:"2000",createTime:"2019-10-10",createTime1:"2019-10-10",coraTime:"普通维修",coraStatusStr:"周期维护"},{num:"05",enterpriseName:"2020-5-1",enterpriseAreaStr:"太原市盛世开元汽车销售有限公司",enterpriseBusinessCategoryStr:"晋A22333",enterpriseOwner:"黄色",enterpriseOwnerPhone:"ZQ88812312449",enterpriseOwnerPhone1:"2000",createTime:"2019-10-10",createTime1:"2019-10-10",coraTime:"普通维修",coraStatusStr:"周期维护"}],labelData:[{label:"序号",width:60,prop:"num"},{label:"上传日期",prop:"enterpriseName"},{label:"上传企业",prop:"enterpriseAreaStr",width:230},{label:"车牌号码",prop:"enterpriseBusinessCategoryStr"},{label:"车牌颜色",prop:"enterpriseOwner",width:100},{label:"VIN码",width:"150",prop:"enterpriseOwnerPhone"},{label:"送修里程",prop:"enterpriseOwnerPhone1"},{label:"送修日期",slotName:"createTime"},{label:"结算日期",prop:"createTime1"},{label:"维修性质",prop:"coraTime"},{label:"故障描述",prop:"coraStatusStr"},{label:"操作",slotName:"operation",width:100}],loading:!1,total:1,pageNum:1,pageSize:10}},created:function(){},filters:{statusFilter:function(e){return 1===e?"审核通过":0===e?"待审核":-1===e?"审核拒绝":void 0}},methods:{queryData:function(e){e&&(this.pageNum=1)},handleSizeChange:function(e){this.pageSize=e,this.queryData(1)},handleCurrentChange:function(e){this.pageNum=e,this.queryData()},goDetail:function(e){this.$router.push("/recordInformationDetail?isSearch=1&id="+e)},addRecord:function(){this.$router.push("/recordApply")}}},c=s,p=r("4023"),u=Object(p["a"])(c,a,l,!1,null,null,null);t["default"]=u.exports},e54f:function(e,t,r){"use strict";var a=r("813f"),l=r.n(a);l.a}}]);