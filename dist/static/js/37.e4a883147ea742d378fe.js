webpackJsonp([37],{"+9bQ":function(e,t){},krWI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),i=n.n(a),s=n("Mdfv"),l=n("xT6B"),o={pageNum:1,pageSize:10,name:null,type:null,endTime:null},r=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],c={name:"homeAdvertiseList",data:function(){return{listQuery:i()({},o),typeOptions:i()({},r),list:null,total:null,listLoading:!1,multipleSelection:[],operates:[{label:"删除",value:0}],operateType:null}},created:function(){this.getList()},filters:{formatType:function(e){return 1===e?"APP首页轮播":"PC首页轮播"},formatTime:function(e){if(null==e||""===e)return"N/A";var t=new Date(e);return Object(l.a)(t,"yyyy-MM-dd hh:mm:ss")}},methods:{handleResetSearch:function(){this.listQuery=i()({},o)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.listQuery.pageNum=1,this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},handleUpdateStatus:function(e,t){var n=this;this.$confirm("是否要修改上线/下线状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.l)(t.id,{status:t.status}).then(function(e){n.getList(),n.$message({type:"success",message:"修改成功!"})})}).catch(function(){n.$message({type:"success",message:"已取消操作!"}),n.getList()})},handleDelete:function(e,t){this.deleteHomeAdvertise(t.id)},handleBatchOperate:function(){if(this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{for(var e=[],t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].id);0===this.operateType?this.deleteHomeAdvertise(e):this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3})}},handleAdd:function(){this.$router.push({path:"/know/slide"})},handleUpdate:function(e,t){this.$router.push({path:"/know/slideUpdate",query:{data:t}})},getList:function(){var e=this;this.listLoading=!0,this.$axios.get("https://www.hystkj.com/carousel/list?pageSize=10&pageNum=1").then(function(t){console.log(t.data),e.listLoading=!1,e.list=t.data.list,e.total=t.data.total})},deleteHomeAdvertise:function(e){var t=this;this.$confirm("是否要删除该广告?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n=new URLSearchParams;n.append("id",e),Object(s.h)(n).then(function(e){t.getList(),t.$message({type:"success",message:"删除成功!"})})})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),e._v(" "),n("span",[e._v("数据列表")]),e._v(" "),n("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(t){e.handleAdd()}}},[e._v("添加广告")])],1),e._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"homeAdvertiseTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"编号",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"广告名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"广告图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{height:"80px"},attrs:{src:e.row.pic}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.handleUpdate(t.$index,t.row)}}},[e._v("编辑\n          ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n          ")])]}}])})],1)],1),e._v(" "),n("div",{staticClass:"batch-operate-container"},[n("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:e.operateType,callback:function(t){e.operateType=t},expression:"operateType"}},e._l(e.operates,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.handleBatchOperate()}}},[e._v("\n      确定\n    ")])],1),e._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":e.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":e.listQuery.pageNum,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"pageNum",t)}}})],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(e){n("+9bQ")},"data-v-5978bfd9",null);t.default=d.exports}});
//# sourceMappingURL=37.e4a883147ea742d378fe.js.map