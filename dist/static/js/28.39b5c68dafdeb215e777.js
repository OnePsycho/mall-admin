webpackJsonp([28],{bHme:function(e,t){},qj3a:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("woOf"),o=s.n(i),l=s("TZVV"),n=s("5aCZ"),r=s("Mdfv"),a=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],m={title:null,subTitle:null,pic:null,status:!0,mold:0,url:null,content:null},c={name:"HomeAdvertiseDetail",components:{SingleUpload:l.a,Tinymce:n.a},props:{isEdit:{type:Boolean,default:!0}},data:function(){return{homeAdvertise:null,selectMold:[],productCateOptions:[{label:"图文",value:"0"},{label:"活动",value:"1"},{label:"测评",value:"2"}],rules:{},typeOptions:o()({},a)}},created:function(){this.isEdit?(this.homeAdvertise=this.$route.query.data,this.homeAdvertise._method="PUT",this.homeAdvertise.status=!0):this.homeAdvertise=o()({},m)},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(s){if(!s)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.isEdit?t.$axios.post("http://www.hystkj.com:8080/information/update",{content:t.homeAdvertise.content,title:t.homeAdvertise.title,subTitle:t.homeAdvertise.subTitle,pic:t.homeAdvertise.pic,mold:t.homeAdvertise.mold,id:t.homeAdvertise.id,status:!0}).then(function(s){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()}).catch(function(e){console.log(e)}):Object(r.c)(t.homeAdvertise).then(function(s){t.$refs[e].resetFields(),t.homeAdvertise=o()({},m),t.$message({message:"提交成功",type:"success",duration:1e3})}).catch(function(e){console.log(e)})})})},resetForm:function(e){this.$refs[e].resetFields(),this.homeAdvertise=o()({},m)}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticClass:"form-container",staticStyle:{width:"80%"},attrs:{shadow:"never"}},[s("el-form",{ref:"homeAdvertiseFrom",attrs:{model:e.homeAdvertise,rules:e.rules,"label-width":"150px",size:"small"}},[s("el-form-item",{attrs:{label:"图文标题：",prop:"name"}},[s("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.title,callback:function(t){e.$set(e.homeAdvertise,"title",t)},expression:"homeAdvertise.title"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"图文副标题：",prop:"subName"}},[s("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.subTitle,callback:function(t){e.$set(e.homeAdvertise,"subTitle",t)},expression:"homeAdvertise.subTitle"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"图文图片："}},[s("single-upload",{model:{value:e.homeAdvertise.pic,callback:function(t){e.$set(e.homeAdvertise,"pic",t)},expression:"homeAdvertise.pic"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"图文详情："}},[s("tinymce",{attrs:{width:595,height:300},model:{value:e.homeAdvertise.content,callback:function(t){e.$set(e.homeAdvertise,"content",t)},expression:"homeAdvertise.content"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("homeAdvertiseFrom")}}},[e._v("提交")]),e._v(" "),e.isEdit?e._e():s("el-button",{on:{click:function(t){e.resetForm("homeAdvertiseFrom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var u=s("VU/8")(c,d,!1,function(e){s("bHme")},"data-v-ba9d76da",null);t.default=u.exports}});
//# sourceMappingURL=28.39b5c68dafdeb215e777.js.map