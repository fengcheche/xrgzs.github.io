(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-express-delivery-express-delivery"],{4811:function(e,t,a){"use strict";var i=a("849a"),n=a.n(i);n.a},"849a":function(e,t,a){var i=a("ba40");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("b92090c4",i,!0,{sourceMap:!1,shadowMode:!1})},"9aad":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("0e9d"),n={data:function(){return{companyName:"",dvyFlowId:"",dvyData:[]}},components:{},props:{},onLoad:function(e){var t=this;uni.showLoading();var a={url:"/delivery/check",method:"GET",data:{orderNumber:e.orderNum},callBack:function(e){t.setData({companyName:e.companyName,dvyFlowId:e.dvyFlowId,dvyData:e.data}),uni.hideLoading()}};i.request(a)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};t.default=n},ba40:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"/* pages/express-delivery/express-delivery.wxss */uni-page-body[data-v-40830e0e]{background:#f7f8fa}body.?%PAGE?%[data-v-40830e0e]{background:#f7f8fa}.container[data-v-40830e0e]{height:100%}.padding20[data-v-40830e0e]{padding-top:%?88?%}.f-fl[data-v-40830e0e]{float:left}.f-fr[data-v-40830e0e]{float:right}.navWrap[data-v-40830e0e]{position:fixed;top:0;left:0;z-index:1;overflow:hidden;background-color:#fafafa;border-bottom:%?2?% solid #f4f4f4;height:%?92?%}.nav[data-v-40830e0e]{display:flex;flex-flow:row nowrap}.nav-slider[data-v-40830e0e]{left:0;bottom:0;height:%?4?%;background-color:#b4282d;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;box-sizing:border-box}.nav-item[data-v-40830e0e]{display:flex;align-items:center;justify-content:center;flex:1;float:left;height:%?88?%;padding:0 %?16?%;font-size:%?28?%}.nav-item uni-text[data-v-40830e0e]{box-sizing:border-box;color:#333;padding:%?27?% %?16?% %?23?%;line-height:%?34?%}.nav-item.active uni-text[data-v-40830e0e]{color:#b4282d}.u-icon[data-v-40830e0e]{vertical-align:middle}.deliveryInfo[data-v-40830e0e]{height:%?198?%;width:100%;vertical-align:middle;padding-left:%?30?%;background-size:cover;display:table;position:relative;box-sizing:border-box}.icon-express[data-v-40830e0e]{width:%?104?%;height:%?104?%;background-size:100% 100%;position:absolute;top:%?48?%;left:%?30?%}.infoWarp[data-v-40830e0e]{display:table-cell;vertical-align:middle}.deliveryInfo .companyname[data-v-40830e0e], .deliveryInfo .expno[data-v-40830e0e]{line-height:1;margin-left:%?136?%;font-size:%?28?%}.deliveryInfo .companyname .key[data-v-40830e0e], .deliveryInfo .expno .key[data-v-40830e0e]{color:#666}.deliveryInfo .expno[data-v-40830e0e]{margin-top:%?16?%}.deliveryDetail[data-v-40830e0e]{margin-top:%?20?%;padding-top:%?40?%;background-color:#fff;min-height:%?670?%}.detailItem[data-v-40830e0e]{border-left:1px dashed #f4f4f4;margin-left:%?42?%;position:relative;margin-bottom:%?2?%}.dot uni-image[data-v-40830e0e]{width:%?35?%;height:%?35?%;background-size:100%;position:absolute;top:%?40?%;left:%?-18?%}.lastest .dot uni-image[data-v-40830e0e]{top:%?-2?%}.detail .desc[data-v-40830e0e]{font-size:%?24?%;line-height:%?30?%}.detail .time[data-v-40830e0e]{font-size:%?24?%;line-height:%?30?%;color:#999;margin-top:%?15?%}.detail[data-v-40830e0e]{border-top:1px solid #f4f4f4;margin-left:%?28?%;overflow:hidden;padding-right:%?30?%}.detail .desc[data-v-40830e0e]{margin-top:%?40?%}.detail .time[data-v-40830e0e]{margin-bottom:%?39?%}.lastest .detail .desc[data-v-40830e0e], .lastest .detail .time[data-v-40830e0e]{color:#105c3e}.lastest .detail[data-v-40830e0e]{border-top:0}.lastest .detail .desc[data-v-40830e0e]{margin-top:0}.deliveryTip[data-v-40830e0e]{height:%?80?%;background-color:#fff8d8;padding-left:%?30?%;color:#f48f18;font-size:%?28?%;line-height:%?80?%;margin-bottom:%?20?%}.empty-space[data-v-40830e0e]{margin-top:%?20?%;background:#fff;font-size:%?28?%;color:#333;padding:%?20?% 0;text-align:center}",""]),e.exports=t},bbcf:function(e,t,a){"use strict";a.r(t);var i=a("9aad"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},e516:function(e,t,a){"use strict";a.r(t);var i=a("f726"),n=a("bbcf");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("4811");var d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"40830e0e",null,!1,i["a"],void 0);t["default"]=s.exports},f726:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"deliveryInfo",staticStyle:{background:"url(http://jiales.gz-yami.com/delivery-bg.png) center center no-repeat #fff"}},[a("v-uni-view",{staticClass:"icon-express",staticStyle:{background:"url(http://jiales.gz-yami.com/delivery-car.png) no-repeat","background-size":"100% 100%"}}),a("v-uni-view",{staticClass:"infoWarp"},[a("v-uni-view",{staticClass:"companyname"},[a("v-uni-text",{staticClass:"key"},[e._v("物流公司：")]),a("v-uni-text",{staticClass:"value"},[e._v(e._s(e.companyName))])],1),a("v-uni-view",{staticClass:"expno"},[a("v-uni-text",{staticClass:"key"},[e._v("运单编号：")]),a("v-uni-text",{staticClass:"value"},[e._v(e._s(e.dvyFlowId))])],1)],1)],1),e.dvyData.length?a("v-uni-view",{staticClass:"deliveryDetail"},[e._l(e.dvyData,(function(t,i){return[a("v-uni-view",{key:i+"_0",class:"detailItem "+(0==i?"lastest":"")},[a("v-uni-view",{staticClass:"dot"},[a("v-uni-image",{attrs:{src:"/static/images/icon/delive-dot.png"}}),a("v-uni-image",{attrs:{src:"/static/images/icon/dot.png"}})],1),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"desc"},[e._v(e._s(t.context))]),a("v-uni-view",{staticClass:"time"},[e._v(e._s(t.time))])],1)],1)]}))],2):a("v-uni-view",{staticClass:"empty-space"},[e._v("暂无配送信息")])],1)],1)},n=[]}}]);