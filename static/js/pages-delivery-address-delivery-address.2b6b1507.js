(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-delivery-address-delivery-address"],{3312:function(d,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("0e9d"),i={data:function(){return{defaultSize:"mini",disabled:!1,plain:!0,loading:!1,addressList:[],addAddress:"",order:-1,item:"",selAddress:""}},components:{},props:{},onLoad:function(d){d.order&&this.setData({order:d.order})},onShow:function(){var d=this;uni.showLoading();var t={url:"/p/address/list",method:"GET",data:{},callBack:function(t){d.setData({addressList:t}),uni.hideLoading()}};e.request(t)},methods:{onAddAddr:function(d){uni.navigateTo({url:"/pages/editAddress/editAddress"})},onDefaultAddr:function(d){var t=d.currentTarget.dataset.addrid;console.log(t);uni.showLoading();var a={url:"/p/address/defaultAddr/"+t,method:"PUT",data:{addrId:t},callBack:function(d){uni.hideLoading()}};e.request(a)},toEditAddress:function(d){var t=d.currentTarget.dataset.addrid;uni.navigateTo({url:"/pages/editAddress/editAddress?addrId="+t})},selAddrToOrder:function(d){if(0==this.order){var t=getCurrentPages(),a=t[t.length-2];a.item=d,a.selAddress="yes",uni.navigateBack({delta:1})}}}};t.default=i},"691f":function(d,t,a){"use strict";var e=a("8299"),i=a.n(e);i.a},7209:function(d,t,a){"use strict";a.r(t);var e=a("c4ed"),i=a("d6f2");for(var n in i)["default"].indexOf(n)<0&&function(d){a.d(t,d,(function(){return i[d]}))}(n);a("691f");var s=a("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"4cd60d7c",null,!1,e["a"],void 0);t["default"]=r.exports},8299:function(d,t,a){var e=a("b8a9");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals);var i=a("4f06").default;i("1a08ebd8",e,!0,{sourceMap:!1,shadowMode:!1})},b8a9:function(d,t,a){var e=a("24fb");t=e(!1),t.push([d.i,"/* pages/delivery-address/delivery-address.wxss */uni-page-body[data-v-4cd60d7c]{background-color:#f4f4f4;border-top:%?2?% solid #e9eaec;padding-bottom:%?150?%}body.?%PAGE?%[data-v-4cd60d7c]{background-color:#f4f4f4}.main[data-v-4cd60d7c]{margin-top:%?20?%}.address[data-v-4cd60d7c]{margin-bottom:%?15?%;width:100%;background-color:#fff;border-bottom:%?2?% solid #e9eaec}.address .personal[data-v-4cd60d7c]{position:relative;padding:%?20?% %?30?%;border-bottom:%?3?% dashed #e9eaec}.address .personal .info-tit .name[data-v-4cd60d7c]{margin-right:%?30?%;font-size:%?32?%;display:inline-block}.address .personal .info-tit .tel[data-v-4cd60d7c]{font-size:%?30?%}.address .personal .info-tit uni-image[data-v-4cd60d7c]{position:absolute;right:%?30?%;top:%?46?%;width:%?40?%;height:%?40?%;margin-left:%?50?%;vertical-align:middle}.personal .addr[data-v-4cd60d7c]{font-size:%?26?%;margin:%?10?% 0}.personal .addr .addr-get[data-v-4cd60d7c]{display:inline-block;color:#999;width:100%;word-break:break-word}.address .select-btn[data-v-4cd60d7c]{padding:%?15?% %?30?%;display:flex;align-items:center;justify-content:space-between}.address .select-btn .box[data-v-4cd60d7c]{font-size:%?26?%}.footer[data-v-4cd60d7c]{position:fixed;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center;background-color:#fff;box-shadow:0 %?-1?% %?8?% rgba(0,0,0,.05)}.footer uni-text[data-v-4cd60d7c]{font-size:%?32?%;color:#eb2444}.empty .img[data-v-4cd60d7c]{text-align:center;margin-top:%?130?%}.empty .img uni-image[data-v-4cd60d7c]{width:%?100?%;height:%?100?%;display:block;margin:auto}.empty .txt[data-v-4cd60d7c]{margin-top:%?30?%;font-size:%?24?%;text-align:center;color:#999}",""]),d.exports=t},c4ed:function(d,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var e=function(){var d=this,t=d.$createElement,a=d._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"main"},[0==d.addressList.length?a("v-uni-view",{staticClass:"empty"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:"http://jiales.gz-yami.com/addr.png"}})],1),a("v-uni-view",{staticClass:"txt"},[d._v("您还没有收货地址")])],1):d._e(),a("v-uni-radio-group",{staticClass:"radio-group"},[d._l(d.addressList,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"address"},[a("v-uni-view",{staticClass:"personal",on:{click:function(a){arguments[0]=a=d.$handleEvent(a),d.selAddrToOrder(t)}}},[a("v-uni-view",{staticClass:"info-tit"},[a("v-uni-text",{staticClass:"name"},[d._v(d._s(t.receiver))]),a("v-uni-text",{staticClass:"tel"},[d._v(d._s(t.mobile))]),a("v-uni-image",{attrs:{src:"/static/images/icon/revise.png","data-addrid":t.addrId},on:{click:function(t){t.stopPropagation(),arguments[0]=t=d.$handleEvent(t),d.toEditAddress.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"addr"},[a("v-uni-text",{staticClass:"addr-get"},[d._v(d._s(t.province)+d._s(t.city)+d._s(t.area)+d._s(t.addr))])],1)],1),a("v-uni-view",{staticClass:"select-btn"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-label",{attrs:{"data-addrid":t.addrId},on:{click:function(t){arguments[0]=t=d.$handleEvent(t),d.onDefaultAddr.apply(void 0,arguments)}}},[a("v-uni-radio",{attrs:{value:t.prodId,checked:1==t.commonAddr,color:"#eb2444"}}),d._v("设为默认地址")],1)],1)],1)],1)]}))],2)],1),a("v-uni-view",{staticClass:"footer",on:{click:function(t){arguments[0]=t=d.$handleEvent(t),d.onAddAddr.apply(void 0,arguments)}}},[a("v-uni-text",[d._v("新增收货地址")])],1)],1)},i=[]},d6f2:function(d,t,a){"use strict";a.r(t);var e=a("3312"),i=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(d){a.d(t,d,(function(){return e[d]}))}(n);t["default"]=i.a}}]);