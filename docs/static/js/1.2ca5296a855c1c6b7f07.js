webpackJsonp([1],{"3VDE":function(t,e){},G9XZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGalleryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[e("swiper-slide",[e("img",{staticClass:"gallery-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1705/57/5708cf22747bca9ba3.img.png_r_800x800_1c9bb1a5.png",alt:""}})]),this._v(" "),e("swiper-slide",[e("img",{staticClass:"gallery-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1412/d5/4252aaf31a6a659c4014fd97e35edc73.water.jpg_350x240_92f372e1.jpg",alt:""}})]),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)])},staticRenderFns:[]};var s={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"fade"}},[this._t("default")],2)},staticRenderFns:[]};var i={name:"DetailBanner",components:{CommonGallery:a("VU/8")({name:"CommonGallery",data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",type:"fraction"},observer:!0,observeParents:!0}}},methods:{handleGalleryClick:function(){this.$emit("close")}}},n,!1,function(t){a("3VDE")},"data-v-e67d5d2e",null).exports,FadeAnimation:a("VU/8")({data:function(){return{}}},s,!1,function(t){a("Hlx4")},"data-v-a24925cc",null).exports},props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallery:!1}},methods:{handleBannerClick:function(){this.showGallery=!0},handleBalleryClose:function(){this.showGallery=!1}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[a("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),a("div",{staticClass:"banner-info"},[a("p",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),a("p",{staticClass:"banner-number"},[a("i",{staticClass:"iconfont icon-tupian"}),t._v("\n\t\t\t\t"+t._s(t.bannerImgs.length)+"\n\t\t\t")])])]),t._v(" "),a("fade-animation",[a("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],on:{close:t.handleBalleryClose}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,r,!1,function(t){a("JcDj")},"data-v-8e20c250",null).exports,o={name:"DetailHeader",data:function(){return{showAbs:!0,styleObject:{opacity:0}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.styleObject={opacity:e},this.showAbs=!1}else this.showAbs=!0}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{to:"/",tag:"div"}},[e("i",{staticClass:"iconfont icon-fanhui"})]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.styleObject},[this._v("\n\t\t景点详情\n\t\t"),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-fixed-back"},[e("i",{staticClass:"iconfont icon-fanhui"})])])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(o,c,!1,function(t){a("btRk")},"data-v-0aa5b997",null).exports,h={name:"DetailList",props:{list:Array},data:function(){return{}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.list,function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"item-title border-bottom"},[a("span",{staticClass:"item-title-icon"}),t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t")]),t._v(" "),e.children?a("div",{staticClass:"item-children"},[a("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var u=a("VU/8")(h,m,!1,function(t){a("qxUW")},"data-v-2ce75a23",null).exports,v=a("cKc3"),f={name:"Detail",components:{DetailBanner:l,DetailHeader:d,DetailList:u},data:function(){return{sightName:"",bannerImg:"",galleryImgs:[],list:[]}},mounted:function(){this.getDetailInfo()},methods:{getDetailInfo:function(){var t=this,e=this.$route.params.id;v.a.get("/mock/detail.json?id="+e).then(function(e){if((e=e.data).ret&&e.data){var a=e.data;t.sightName=a.sightName,t.bannerImg=a.bannerImg,t.galleryImgs=a.galleryImgs,t.list=a.categoryList}})}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.galleryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(f,g,!1,function(t){a("QCtx")},"data-v-b11f846e",null);e.default=p.exports},Hlx4:function(t,e){},JcDj:function(t,e){},QCtx:function(t,e){},btRk:function(t,e){},qxUW:function(t,e){}});