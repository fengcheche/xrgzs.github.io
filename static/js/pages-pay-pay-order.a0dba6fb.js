(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pay-pay-order"],{"29cb":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3"),e("e25e");var r=i(e("0e9d")),o={data:function(){return{orderItemDtos:[],remarks:"",actualTotal:0,userAddrDto:null,orderNumber:"",createTime:"",status:0,productTotalAmount:"",transfee:"",reduceAmount:"",prodid:"",total:0}},props:{fontSize:{type:Number,default:34},borderColor:{type:String,default:"#999999"},datas:{type:Array,default:function(){return[{name:"支付宝 —— 手机支付",id:"alipay",loading:!1,img:"../../static/images/alipay.png"},{name:"支付宝 —— pc或扫码支付",id:"alipay",loading:!1,img:"../../static/images/alipay.png"},{name:"微信支付",id:"wxpay",loading:!1,img:"../../static/images/weixin.png"}]}}},onLoad:function(t){this.setData({orderNumber:t.orderNumber}),this.loadOrderDetail(t.orderNumber)},methods:{toHomePage:function(){uni.switchTab({url:"/pages/index/index"})},toCartPage:function(){uni.switchTab({url:"/pages/basket/basket"})},copyBtn:function(t){uni.setClipboardData({data:"13668256964",success:function(t){uni.showToast({title:"复制成功"})}})},change:function(t){var a=parseInt(t.detail.value);if(this.$emit("change",a,this.datas[a]),0==a){var e="ttxiaomei.com/api/aliPay/wapPay/"+this.orderNumber,i=window.location.protocol+"//"+e;window.location.href=i}if(1==a){var r="ttxiaomei.com/api/aliPay/pcPay/"+this.orderNumber,o=window.location.protocol+"//"+r;window.location.href=o}2==a&&(this.copyBtn(),uni.showToast({title:"微信付款暂未上线，添加微信【13668256964】下单，微信号已经复制到剪贴板",icon:"none",duration:5e3}))},itemClick:function(t){this.$emit("itemClick",t,this.datas[t])},loadOrderDetail:function(t){var a=this;uni.showLoading();var e={url:"/p/myOrder/orderDetail",method:"GET",data:{orderNumber:t},callBack:function(e){a.setData({orderNumber:t,actualTotal:e.actualTotal,userAddrDto:e.userAddrDto,remarks:e.remarks,orderItemDtos:e.orderItemDtos,createTime:e.createTime,status:e.status,productTotalAmount:e.orderItemDtos[0].productTotalAmount,transfee:e.transfee,reduceAmount:e.reduceAmount,total:e.total}),uni.hideLoading()}};r.default.request(e)}}};a.default=o},"2f16":function(t,a,e){var i=e("afd3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("0045b49b",i,!0,{sourceMap:!1,shadowMode:!1})},"3b0b":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"i-pay-type"},[e("v-uni-view",{staticClass:"success-submit"},[t._v("订单提交成功！请尽快完成付款")]),e("v-uni-view",{staticClass:"order-detail"},[e("v-uni-view",{staticClass:"order-msg"},[e("v-uni-view",{staticClass:"msg-item"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("应付金额：")]),e("v-uni-view",{staticClass:"item-txt price"},[e("v-uni-text",{staticClass:"symbol"},[t._v("￥")]),e("v-uni-text",{staticClass:"big-num"},[t._v(t._s(t.total))])],1)],1)],1)],1),t.userAddrDto?e("v-uni-view",{staticClass:"delivery-addr"},[e("v-uni-view",{staticClass:"user-info"},[e("v-uni-text",{staticClass:"item"},[t._v(t._s(t.userAddrDto.receiver))]),e("v-uni-text",{staticClass:"item"},[t._v(t._s(t.userAddrDto.mobile))])],1),e("v-uni-view",{staticClass:"addr"},[t._v(t._s(t.userAddrDto.province)+t._s(t.userAddrDto.city)+t._s(t.userAddrDto.area)+t._s(t.userAddrDto.area)+t._s(t.userAddrDto.addr))])],1):t._e()],1),e("v-uni-view",{staticClass:"selectWay"},[t._v("请选择支付方式")]),e("v-uni-radio-group",{on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.change.apply(void 0,arguments)}}},t._l(t.datas,(function(a,i){return e("v-uni-label",{key:i,staticClass:"i-pay-item",style:{borderColor:t.borderColor},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.itemClick(i)}}},[e("v-uni-view",{staticClass:"i-pay-item-left"},[e("v-uni-image",{attrs:{src:a.img,mode:"aspectFill"}}),e("v-uni-text",{style:{"font-size":t.fontSize+"rpx"}},[t._v(t._s(a.name))])],1),e("v-uni-view",{staticClass:"i-pay-item-right"},[e("v-uni-radio",{attrs:{color:"#232323",value:i.toString()},on:{checked:function(a){arguments[0]=a=t.$handleEvent(a)}}})],1)],1)})),1),e("v-uni-text",{staticClass:"copy-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyBtn.apply(void 0,arguments)}}},[t._v("点击复制微信号")]),e("v-uni-view",{staticClass:"cart-footer"},[e("v-uni-view",{staticClass:"btn icon col-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHomePage.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"/static/images/tabbar/homepage.png"}}),t._v("首页")],1),e("v-uni-view",{staticClass:"btn icon col-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toCartPage.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"/static/images/tabbar/basket.png"}}),t._v("购物车")],1)],1)],1)},r=[]},"49dd":function(t,a,e){"use strict";var i=e("2f16"),r=e.n(i);r.a},"9d62":function(t,a,e){"use strict";e.r(a);var i=e("3b0b"),r=e("e702");for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(o);e("49dd");var n=e("f0c5"),d=Object(n["a"])(r["default"],i["b"],i["c"],!1,null,"7aa13234",null,!1,i["a"],void 0);a["default"]=d.exports},afd3:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";.copy-btn[data-v-7aa13234]{display:block;margin-left:%?20?%;border:%?2?% solid #e4e4e4;padding:%?6?% %?24?%;border-radius:%?50?%;font-size:%?24?%;line-height:%?28?%}\r\n/*\r\n订单信息 */.order-msg[data-v-7aa13234]{background:#fff;margin-top:%?15?%;font-size:%?28?%}.order-msg .msg-item[data-v-7aa13234]{padding:%?20?%;border-top:%?2?% solid #f1f1f1}.order-msg .msg-item[data-v-7aa13234]:first-child{border:0}.order-msg .msg-item .item[data-v-7aa13234]{display:flex;padding:%?10?% 0;align-items:center;box-sizing:border-box}.order-msg .msg-item .item.payment[data-v-7aa13234]{border-top:%?2?% solid #f1f1f1;color:#eb2444;padding-top:%?30?%}.order-msg .msg-item .item .item-tit[data-v-7aa13234]{min-width:%?140?%;color:#999;line-height:%?48?%}.order-msg .msg-item .item .item-txt[data-v-7aa13234]{flex:1;line-height:%?48?%}.order-msg .msg-item .item .item-txt.remarks[data-v-7aa13234]{max-width:%?600?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order-msg .msg-item .item .copy-btn[data-v-7aa13234]{display:block;margin-left:%?20?%;border:%?2?% solid #e4e4e4;padding:%?6?% %?24?%;border-radius:%?50?%;font-size:%?24?%;line-height:%?28?%}.order-msg .msg-item .item .item-txt.price[data-v-7aa13234]{text-align:right}.order-detail .delivery-addr[data-v-7aa13234]{padding:%?20?% %?30?%;background:#fff}.order-detail .delivery-addr .user-info[data-v-7aa13234]{line-height:%?48?%;word-wrap:break-word;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.order-detail .delivery-addr .user-info .item[data-v-7aa13234]{font-size:%?28?%;margin-right:%?30?%;vertical-align:top;display:inline-block}.order-detail .delivery-addr .addr[data-v-7aa13234]{font-size:%?26?%;line-height:%?36?%;color:#999;word-wrap:break-word}.price-container[data-v-7aa13234]{padding-left:20px;padding-top:20px}.address-container[data-v-7aa13234]{padding-left:20px;padding-bottom:20px}.success-submit[data-v-7aa13234]{color:#b768a5;margin:auto;background-color:#f1f0ee;padding:20px}.selectWay[data-v-7aa13234]{background-color:#f1f0ee;padding:10px 20px 10px 20px}.price[data-v-7aa13234]{color:#fc673d;font-size:16px}.i-pay-type .i-pay-item[data-v-7aa13234],\r\n.i-pay-type .i-pay-item .i-pay-item-right[data-v-7aa13234],\r\n.i-pay-type .i-pay-item .i-pay-item-left[data-v-7aa13234]{display:flex;align-items:center}.i-pay-type .i-pay-item[data-v-7aa13234]{box-sizing:border-box;justify-content:space-between;width:100%;height:%?80?%;border:#999 .5px solid;border-radius:%?50?%;margin-bottom:%?20?%}.i-pay-type .i-pay-item .i-pay-item-left[data-v-7aa13234]{padding-left:%?25?%}.i-pay-type .i-pay-item .i-pay-item-left uni-image[data-v-7aa13234]{width:%?70?%;height:%?70?%}.i-pay-type .i-pay-item .i-pay-item-left uni-text[data-v-7aa13234]{padding-left:%?20?%;font-size:%?34?%}\r\n/** 底部按钮 */.cart-footer[data-v-7aa13234]{position:fixed;bottom:0;left:0;width:100%;display:flex;flex-direction:row nowrap;height:%?98?%;z-index:999;box-shadow:0 -1px 3px rgba(0,0,0,.05)}.cart-footer .btn[data-v-7aa13234]{position:relative;display:flex;flex-grow:1;justify-content:center;align-items:center;width:0;background-color:#fff;font-size:%?28?%;flex-flow:column}.cart-footer .btn.icon[data-v-7aa13234]{flex-grow:0;flex-shrink:0;width:%?125?%;font-size:%?20?%;color:#666}.cart-footer .btn.icon uni-image[data-v-7aa13234]{width:%?50?%;height:%?50?%}.cart-footer .btn.cart[data-v-7aa13234]{background:#584e61;color:#fff}.cart-footer .btn.buy[data-v-7aa13234]{background:#eb2444;color:#fff}.cart-footer .btn .badge[data-v-7aa13234]{position:absolute;top:%?20?%;left:%?62?%;display:inline-block;width:%?28?%;height:%?28?%;border-radius:%?14?%;background-color:#eb2444;text-align:center;line-height:%?28?%;font-size:%?18?%;color:#fff}.cart-footer .btn .badge-1[data-v-7aa13234]{width:%?36?%}.cart-footer .btn .badge-2[data-v-7aa13234]{width:%?48?%;left:%?52?%}\r\n/** end  底部按钮 */',""]),t.exports=a},e702:function(t,a,e){"use strict";e.r(a);var i=e("29cb"),r=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=r.a}}]);