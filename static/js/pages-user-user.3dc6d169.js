(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{2372:function(t,e,n){"use strict";var i=n("56f1"),o=n.n(i);o.a},"29ab":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("466d");var i=n("0e9d"),o=n("c9d7"),a=n("a311"),s={data:function(){return{nickName:"",orderAmount:"",sts:"",collectionCount:0,isAuthInfo:!1,loginResult:"",picDomain:a.picDomain}},components:{},props:{},onLoad:function(t){},onReady:function(){},onShow:function(){var t=this;if(t.setData({loginResult:uni.getStorageSync("loginResult")}),t.loginResult?t.setData({isAuthInfo:!0}):t.setData({isAuthInfo:!1}),t.isAuthInfo){uni.showLoading();var e={url:"/p/myOrder/orderCount",method:"GET",data:{},callBack:function(e){uni.hideLoading(),t.setData({orderAmount:e})}};i.request(e);var n={url:"/p/user/userInfo",method:"GET",data:{},callBack:function(e){t.setData({nick:e})}};i.request(n),this.showCollectionCount()}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{toDistCenter:function(){uni.showToast({icon:"none",title:"该功能未开源"})},toCouponCenter:function(){uni.showToast({icon:"none",title:"该功能未开源"})},toMyCouponPage:function(){uni.showToast({icon:"none",title:"该功能未开源"})},handleTips:function(){uni.showToast({icon:"none",title:"该功能未开源"})},toAddressList:function(){uni.navigateTo({url:"/pages/delivery-address/delivery-address"})},toBindingPhone:function(){uni.navigateTo({url:"/pages/binding-phone/binding-phone"})},toOrderListPage:function(t){var e=t.currentTarget.dataset.sts;uni.navigateTo({url:"/pages/orderList/orderList?sts="+e})},showCollectionCount:function(){var t=this;uni.showLoading();var e={url:"/p/user/collection/count",method:"GET",data:{},callBack:function(e){uni.hideLoading(),t.setData({collectionCount:e})}};i.request(e)},myCollectionHandle:function(){var t="/pages/prod-classify/prod-classify?sts=5";uni.navigateTo({url:t})},toLogin:function(){uni.navigateTo({url:"../accountLogin/accountLogin"})},clearAllCookie:function(){var t=new Date;t.setTime(t.getTime()-1e4);var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(e)for(var n=e.length;n--;)document.cookie=e[n]+"=0; expire="+t.toGMTString()+"; path=/"},logout:function(){var t=this;i.request({url:"/logOut",method:"post",callBack:function(e){o.removeTabBadge(),uni.removeStorageSync("loginResult"),uni.removeStorageSync("token"),t.clearAllCookie(),uni.showToast({title:"退出成功",icon:"none"}),t.setData({orderAmount:""}),setTimeout((function(){uni.switchTab({url:"/pages/index/index"})}),1e3)}})}}};e.default=s},"54e6":function(t,e,n){"use strict";n.r(e);var i=n("29ab"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"56f1":function(t,e,n){var i=n("fddf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("277da2ae",i,!0,{sourceMap:!1,shadowMode:!1})},"64bd":function(t,e){t.exports="data:image/png;base64,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"},b8fd:function(t,e,n){"use strict";n.r(e);var i=n("d95f"),o=n("54e6");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("2372");var s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"ef9ccb84",null,!1,i["a"],void 0);e["default"]=c.exports},d95f:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[t.isAuthInfo?i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"userinfo-con"},[i("v-uni-view",{staticClass:"userinfo-avatar"},[i("v-uni-image",{attrs:{src:"http://ttxiaomei.com/medias/avatar.png"}})],1),i("v-uni-view",{staticClass:"userinfo-name"},[i("v-uni-view",[t._v(t._s(t.loginResult.nickName?t.loginResult.nickName:"用户昵称"))])],1)],1)],1):t._e(),t.isAuthInfo?t._e():i("v-uni-view",{staticClass:"userinfo-none"},[i("v-uni-view",{staticClass:"default-pic",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:n("64bd")}})],1),i("v-uni-view",{staticClass:"none-login",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"unlogin"},[t._v("未登录")]),i("v-uni-button",{staticClass:"click-login"},[t._v("点击登录账号")])],1)],1),i("v-uni-view",{staticClass:"list-cont"},[i("v-uni-view",{staticClass:"total-order"},[i("v-uni-view",{staticClass:"order-tit"},[i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v("我的订单")]),i("v-uni-view",{staticClass:"checkmore",attrs:{"data-sts":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderListPage.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("查看全部")]),i("v-uni-text",{staticClass:"arrowhead"})],1)],1),i("v-uni-view",{staticClass:"procedure"},[i("v-uni-view",{staticClass:"items",attrs:{"data-sts":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderListPage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/icon/toPay.png"}}),i("v-uni-text",[t._v("待支付")]),t.orderAmount.unPay>0?i("v-uni-text",{staticClass:"num-badge"},[t._v(t._s(t.orderAmount.unPay))]):t._e()],1),i("v-uni-view",{staticClass:"items",attrs:{"data-sts":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderListPage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/icon/toDelivery.png"}}),i("v-uni-text",[t._v("待发货")]),t.orderAmount.payed>0?i("v-uni-text",{staticClass:"num-badge"},[t._v(t._s(t.orderAmount.payed))]):t._e()],1),i("v-uni-view",{staticClass:"items",attrs:{"data-sts":"3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderListPage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/icon/toTake.png"}}),i("v-uni-text",[t._v("待收货")]),t.orderAmount.consignment>0?i("v-uni-text",{staticClass:"num-badge"},[t._v(t._s(t.orderAmount.consignment))]):t._e()],1),i("v-uni-view",{staticClass:"items",attrs:{"data-sts":"5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderListPage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/icon/toComment.png"}}),i("v-uni-text",[t._v("已完成")])],1)],1)],1),i("v-uni-view",{staticClass:"prod-col"},[i("v-uni-view",{staticClass:"col-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myCollectionHandle.apply(void 0,arguments)}}},[t.loginResult?i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.collectionCount))]):i("v-uni-view",{staticClass:"num"},[t._v("--")]),i("v-uni-view",{staticClass:"tit"},[t._v("我的收藏")])],1)],1),i("v-uni-view",{staticClass:"my-menu"},[i("v-uni-view",{staticClass:"memu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAddressList.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"i-name"},[i("v-uni-image",{attrs:{src:"/static/images/icon/myAddr.png"}}),i("v-uni-text",[t._v("收货地址")])],1),i("v-uni-view",{staticClass:"arrowhead"})],1)],1),t.isAuthInfo?i("v-uni-view",{staticClass:"log-out",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"log-out-n"},[i("v-uni-text",[t._v("退出登录")])],1)],1):t._e()],1)],1)},o=[]},fddf:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/* pages/user/user.wxss */uni-page-body[data-v-ef9ccb84]{background-color:#f7f7f7;padding-bottom:%?60?%}body.?%PAGE?%[data-v-ef9ccb84]{background-color:#f7f7f7}\r\n\r\n/* 用户信息 */.userinfo[data-v-ef9ccb84]{position:relative;width:100%;background:#fff;text-align:center;padding:%?30?% 0}.userinfo .userinfo-con[data-v-ef9ccb84]{width:%?240?%;margin:auto}.userinfo .userinfo-con .userinfo-avatar[data-v-ef9ccb84]{overflow:hidden;display:block;width:%?160?%;height:%?160?%;border-radius:50%;box-shadow:3px 3px 10px rgba(0,0,0,.2);margin:auto}.userinfo .userinfo-con .userinfo-avatar uni-image[data-v-ef9ccb84]{width:%?160?%;height:%?160?%}.userinfo .userinfo-con .userinfo-name[data-v-ef9ccb84]{font-size:%?30?%;font-weight:700;margin-top:%?20?%;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis;word-break:break-all}\r\n\r\n/** 未登录信息 */.userinfo-none[data-v-ef9ccb84]{display:flex;padding:%?30?%;background:#fff;align-items:center}.userinfo-none .default-pic[data-v-ef9ccb84]{padding-right:%?30?%}.userinfo-none .default-pic uni-image[data-v-ef9ccb84]{width:%?160?%;height:%?160?%}.none-login uni-button[data-v-ef9ccb84]{background:#fff}.none-login uni-button[data-v-ef9ccb84]::after{border:0}.none-login .unlogin[data-v-ef9ccb84]{font-size:%?30?%}.none-login .click-login[data-v-ef9ccb84]{font-size:%?26?%;color:#777}.none-login .unlogin[data-v-ef9ccb84],\r\n.none-login .click-login[data-v-ef9ccb84]{text-align:left;padding:0}.binding-phone[data-v-ef9ccb84]{position:relative;background:#fff;height:%?80?%;line-height:%?80?%;padding:0 %?30?%;border-top:%?2?% solid #f7f7f7;border-bottom:%?2?% solid #f7f7f7}.binding-phone .show-tip[data-v-ef9ccb84]{font-size:%?26?%}.binding-phone .gotobinding[data-v-ef9ccb84]{border-radius:%?8?%;font-size:%?28?%;color:#e24b4b;font-weight:700}\r\n\r\n/*end 用户信息 */\r\n\r\n/* 订单状态 */.list-cont[data-v-ef9ccb84]{width:100%;background:#f7f7f7;margin-top:%?20?%}.list-cont .total-order[data-v-ef9ccb84]{\r\n  /* width: 100%; */\r\n  /* margin-bottom: 30rpx; */background:#fff}.list-cont .total-order .order-tit[data-v-ef9ccb84]{display:flex;justify-content:space-between;height:%?80?%;line-height:%?80?%;font-size:%?30?%;border-bottom:1px solid #f7f7f7;padding:0 %?30?%}.list-cont .total-order .order-tit .checkmore[data-v-ef9ccb84]{font-size:%?22?%;color:#80848f;display:flex;align-items:center}.list-cont .total-order .procedure[data-v-ef9ccb84]{display:flex;justify-content:space-around;align-items:center;font-size:%?25?%;height:%?160?%}.list-cont .total-order .procedure .items[data-v-ef9ccb84]{position:relative;display:flex;flex-direction:column;align-items:center}.list-cont .total-order .procedure .items uni-image[data-v-ef9ccb84]{width:%?70?%;height:%?70?%;margin-bottom:%?20?%}.list-cont .total-order .procedure .items .num-badge[data-v-ef9ccb84]{position:absolute;top:%?-15?%;right:%?-12?%;color:#eb2444;border:%?3?% solid #eb2444;border-radius:%?50?%;background:#fff;min-width:%?30?%;height:%?30?%;line-height:%?30?%;text-align:center;padding:%?2?%;display:block}\r\n\r\n/* end 订单状态 */\r\n\r\n/* 列表项 */.list-cont .my-menu[data-v-ef9ccb84]{\r\n  /* width: 100%; */background-color:#fff;margin-top:%?20?%}.list-cont .my-menu .memu-item[data-v-ef9ccb84]{display:flex;align-items:center;justify-content:space-between;height:%?100?%;border-bottom:%?2?% solid #f7f7f7;padding:0 %?30?%}.list-cont .my-menu .memu-item[data-v-ef9ccb84]:nth-child(1){border-top:%?2?% solid #f7f7f7}.list-cont .my-menu .memu-item[data-v-ef9ccb84]:last-child{border-bottom:none}.list-cont .my-menu .memu-item uni-text[data-v-ef9ccb84]{font-size:%?28?%}.list-cont .my-menu .memu-item uni-image[data-v-ef9ccb84]{width:%?50?%;height:%?50?%;margin-right:%?20?%}.list-cont .my-menu .memu-item .i-name[data-v-ef9ccb84]{display:flex;align-items:center}\r\n\r\n/* end 列表项 */\r\n\r\n/* 箭头 */.arrowhead[data-v-ef9ccb84]{width:%?15?%;height:%?15?%;border-top:%?2?% solid #999;border-right:%?2?% solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:%?10?%}\r\n\r\n/* 商品收藏消息等 */.prod-col[data-v-ef9ccb84]{margin-top:%?20?%;background:#fff;display:flex;justify-content:space-around;padding:%?30?% 0 %?10?% 0;font-size:12px}.prod-col .col-item[data-v-ef9ccb84]{text-align:center}.prod-col .col-item .num[data-v-ef9ccb84]{font-size:16px;font-weight:700;color:#3a86b9}.prod-col .col-item .tit[data-v-ef9ccb84]{line-height:34px}\r\n\r\n/* 退出登录 */.log-out[data-v-ef9ccb84]{padding:%?20?%;text-align:center;margin-top:%?20?%}.log-out-n[data-v-ef9ccb84]{font-size:%?30?%;margin:auto;width:%?200?%;padding:%?20?%;border-radius:%?10?%;background:#e43130;color:#fff}uni-button.memu-btn.memu-item[data-v-ef9ccb84]{background-color:#fff}uni-button.memu-btn.memu-item[data-v-ef9ccb84]:after{border:0}",""]),t.exports=e}}]);