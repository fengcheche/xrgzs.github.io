(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-prod-classify-prod-classify"],{"0755":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("99af");var n=a(e("960f")),o=e("0e9d"),r={data:function(){return{sts:0,prodList:[],title:"",current:1,size:10,pages:0,tagid:0}},components:{prod:n.default},props:{},onLoad:function(t){this.setData({current:1,pages:0,sts:t.sts,title:t.title?t.title:""}),t.tagid&&this.setData({tagid:t.tagid}),0==this.sts?1==t.tagid?uni.setNavigationBarTitle({title:"每日上新"}):2==t.tagid?uni.setNavigationBarTitle({title:"商城热卖"}):3==t.tagid&&uni.setNavigationBarTitle({title:"更多宝贝"}):1==this.sts?uni.setNavigationBarTitle({title:"新品推荐"}):2==this.sts?uni.setNavigationBarTitle({title:"限时特惠"}):3==this.sts?uni.setNavigationBarTitle({title:"每日疯抢"}):4==this.sts?uni.setNavigationBarTitle({title:"优惠券活动商品"}):5==this.sts?uni.setNavigationBarTitle({title:"我的收藏商品"}):uni.setNavigationBarTitle({title:this.title}),this.loadProdData(t)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){this.current<this.pages&&(this.setData({current:this.current+1}),this.loadProdData())},onShareAppMessage:function(){},methods:{loadProdData:function(t){var i=this.sts;if(0==i)this.getTagProd();else if(1==i){this.getActProd("/prod/lastedProdPage")}else if(2==i){this.getActProd("/prod/discountProdList")}else if(3==i){this.getActProd("/prod/moreBuyProdList")}else 4==i?this.getProdByCouponId(t.tagid):5==i&&this.getCollectionProd()},getActProd:function(t){var i=this;uni.showLoading();var e={url:t,method:"GET",data:{current:i.current,size:i.size},callBack:function(t){var e=[];1==t.current?e=t.records:(e=i.prodList,e=e.concat(t.records)),i.setData({prodList:e,pages:t.pages}),uni.hideLoading()}};o.request(e)},getCollectionProd:function(){var t=this;uni.showLoading();var i={url:"/p/user/collection/prods",method:"GET",data:{current:t.current,size:t.size},callBack:function(i){var e=[];1==i.current?e=i.records:(e=t.prodList,e=e.concat(i.records)),t.setData({prodList:e,pages:i.pages}),uni.hideLoading()}};o.request(i)},getTagProd:function(t){var i=this;uni.showLoading();var e={url:"/prod/prodListByTagId",method:"GET",data:{tagId:i.tagid,current:i.current,size:i.size},callBack:function(t){var e=[];e=1==t.current?t.records:i.prodList.concat(t.records),i.setData({prodList:e,pages:t.pages}),uni.hideLoading()}};o.request(e)},getProdByCouponId:function(t){var i=this;uni.showLoading();var e={url:"/coupon/prodListByCouponId",method:"GET",data:{couponId:t,current:this.current,size:this.size},callBack:function(t){var e=[];e=1==t.current?t.records:i.prodList.concat(t.records),i.setData({prodList:e,pages:t.pages}),uni.hideLoading()}};o.request(e)}}};i.default=r},1446:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"prod-items",attrs:{"data-prodid":t.item.prodId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toProdPage.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"hot-imagecont"},[e("v-uni-image",{staticClass:"hotsaleimg",attrs:{src:t.item.pic}})],1),e("v-uni-view",{staticClass:"hot-text"},[e("v-uni-view",{staticClass:"hotprod-text"},[t._v(t._s(t.item.prodName))]),6==t.sts?e("v-uni-view",{staticClass:"prod-info"},[t._v(t._s(t.item.prodCommNumber)+"评价 "+t._s(t.item.positiveRating)+"%好评")]):t._e(),e("v-uni-view",{staticClass:"prod-text-info"},[e("v-uni-view",{staticClass:"price"},[2==t.sts?e("v-uni-text",{staticClass:"deadline-price"},[t._v("限时价")]):t._e(),e("v-uni-text",{staticClass:"symbol"},[t._v("￥")]),e("v-uni-text",{staticClass:"big-num"},[t._v(t._s(t.wxs.parsePrice(t.item.price)[0]))]),e("v-uni-text",{staticClass:"small-num"},[t._v("."+t._s(t.wxs.parsePrice(t.item.price)[1]))])],1)],1)],1)],1)},n=[]},"175e":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"prod-list"},[this._l(this.prodList,(function(t,e){return[i("prod",{key:e+"_0",attrs:{item:t}})]})),this.prodList.length?this._e():i("v-uni-view",{staticClass:"empty"},[this._v("暂无数据")])],2)],1)},n=[]},"5b67":function(t,i,e){var a=e("8879");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5f17b89f",a,!0,{sourceMap:!1,shadowMode:!1})},"5c65":function(t,i,e){"use strict";i["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["wxs"]=function(t){return t.exports={toPrice:function(t){return t||(t=0),t.toFixed(2)},parsePrice:function(t){return t||(t=0),t.toFixed(2).split(".")},array_contain:function(t,i){for(var e=0;e<t.length;e++)if(t[e]==i)return!0;return!1},props_contain:function(t,i,e,a,n){var o="";i[e]=a;for(var r=0;r<n.length;r++)o+=n[r]+":"+i[n[r]]+";";o=o.substring(0,o.length-1);for(var s=!1,d=0;d<t.length;d++)if(o==t[d]){s=!0;break}return s},parseDiscount:function(t){return 0==t?"满额减":1==t?"满件减":2==t?"满额折":3==t?"满件折":""},parseDiscountMsg:function(t,i,e){return 0==t?"购满"+i+"元减"+e+"元":1==t?"购满"+i+"件减"+e+"元":2==t?"购满"+i+"元打"+e+"折":3==t?"购满"+i+"件打"+e+"折":""}},t.exports}({exports:{}})}},"685b":function(t,i,e){var a=e("6a64");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("585e8473",a,!0,{sourceMap:!1,shadowMode:!1})},"6a64":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"/* pages/prod-classify/prod-classify.wxss */uni-page-body[data-v-10955359]{background:#fff}body.?%PAGE?%[data-v-10955359]{background:#fff}.container[data-v-10955359]{margin:7px}.line-fix[data-v-10955359]{width:100%;height:%?2?%;background:#e1e1e1;position:fixed;top:0}.tit-background[data-v-10955359]{width:100%;height:%?20?%;background:#f4f4f4}.prod-list[data-v-10955359]{display:flex;flex-wrap:wrap;justify-content:space-between}\r\n\r\n/* 空 */.empty[data-v-10955359]{display:block;width:100%;font-size:%?26?%;color:#999;margin-top:20vh;text-align:center}",""]),t.exports=i},"6c98":function(t,i,e){"use strict";var a=e("5b67"),n=e.n(a);n.a},"7f3e":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var a={data:function(){return{}},components:{},props:{item:Object,sts:Number},methods:{toProdPage:function(t){var i=t.currentTarget.dataset.prodid;uni.navigateTo({url:"/pages/prod/prod?prodid="+i})}}};i.default=a},8879:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".prod-items[data-v-a03fddb6]{width:43%;\r\n  /* float: left; */background:#fff;margin-bottom:%?40?%;box-sizing:border-box}prod:nth-child(2n-1) .prod-items[data-v-a03fddb6]{padding:%?20?% %?10?% %?10?% %?20?%}prod:nth-child(2n) .prod-items[data-v-a03fddb6]{padding:%?20?% %?20?% %?10?% %?10?%}.hot-imagecont .hotsaleimg[data-v-a03fddb6]{width:100%;height:%?345?%}.hot-text .hotprod-text[data-v-a03fddb6]{height:%?76?%;font-size:%?28?%;display:-webkit-box;word-break:break-all;padding:0 %?20?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#000}.prod-items .hot-imagecont[data-v-a03fddb6]{border-radius:%?8?%;text-align:center;font-size:0}.prod-items .hot-text[data-v-a03fddb6]{margin-top:%?20?%}.prod-items .hot-text .prod-info[data-v-a03fddb6]{font-size:%?20?%;color:#777;padding:0 %?20?%;margin-top:%?8?%}.prod-items .hot-text .prod-text-info[data-v-a03fddb6]{position:relative;height:%?50?%;line-height:%?70?%;font-family:Arial}.prod-items .hot-text .prod-text-info .price[data-v-a03fddb6]{color:#eb2444;padding-left:%?20?%}.deadline-price[data-v-a03fddb6]{font-size:%?22?%;margin-right:%?5?%}",""]),t.exports=i},"93e5":function(t,i,e){"use strict";e.r(i);var a=e("175e"),n=e("b3dd");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("b5b3");var r=e("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"10955359",null,!1,a["a"],void 0);i["default"]=s.exports},"960f":function(t,i,e){"use strict";e.r(i);var a=e("1446"),n=e("cae2");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("6c98");var r=e("f0c5"),s=e("5c65"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"a03fddb6",null,!1,a["a"],void 0);"function"===typeof s["a"]&&Object(s["a"])(d),i["default"]=d.exports},b3dd:function(t,i,e){"use strict";e.r(i);var a=e("0755"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},b5b3:function(t,i,e){"use strict";var a=e("685b"),n=e.n(a);n.a},cae2:function(t,i,e){"use strict";e.r(i);var a=e("7f3e"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a}}]);