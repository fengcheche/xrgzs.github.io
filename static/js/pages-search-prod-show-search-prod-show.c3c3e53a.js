(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-prod-show-search-prod-show"],{1446:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"prod-items",attrs:{"data-prodid":t.item.prodId},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toProdPage.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"hot-imagecont"},[e("v-uni-image",{staticClass:"hotsaleimg",attrs:{src:t.item.pic}})],1),e("v-uni-view",{staticClass:"hot-text"},[e("v-uni-view",{staticClass:"hotprod-text"},[t._v(t._s(t.item.prodName))]),6==t.sts?e("v-uni-view",{staticClass:"prod-info"},[t._v(t._s(t.item.prodCommNumber)+"评价 "+t._s(t.item.positiveRating)+"%好评")]):t._e(),e("v-uni-view",{staticClass:"prod-text-info"},[e("v-uni-view",{staticClass:"price"},[2==t.sts?e("v-uni-text",{staticClass:"deadline-price"},[t._v("限时价")]):t._e(),e("v-uni-text",{staticClass:"symbol"},[t._v("￥")]),e("v-uni-text",{staticClass:"big-num"},[t._v(t._s(t.wxs.parsePrice(t.item.price)[0]))]),e("v-uni-text",{staticClass:"small-num"},[t._v("."+t._s(t.wxs.parsePrice(t.item.price)[1]))])],1)],1)],1)],1)},o=[]},"31a7":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"fixed-box"},[e("v-uni-view",{staticClass:"search-bar"},[e("v-uni-view",{staticClass:"search-box"},[e("v-uni-input",{staticClass:"sear-input",attrs:{placeholder:"输入关键字搜索",value:t.prodName,"confirm-type":"search"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.getSearchContent.apply(void 0,arguments)},confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.toSearchConfirm.apply(void 0,arguments)}}}),e("v-uni-image",{staticClass:"search-img",attrs:{src:"/static/images/icon/search.png"}})],1),e("v-uni-view",{staticClass:"search-list-img",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeShowType.apply(void 0,arguments)}}},[1==t.showType?e("v-uni-image",{attrs:{src:"/static/images/icon/search-col.png"}}):t._e(),2==t.showType?e("v-uni-image",{attrs:{src:"/static/images/icon/search-col2.png"}}):t._e()],1)],1),e("v-uni-view",{staticClass:"tabs"},[e("v-uni-text",{class:"tab-item complete "+(0==t.sts?"on":""),attrs:{"data-sts":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onStsTap.apply(void 0,arguments)}}},[t._v("综合")]),e("v-uni-text",{class:"tab-item "+(1==t.sts?"on":""),attrs:{"data-sts":"1"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onStsTap.apply(void 0,arguments)}}},[t._v("销量")]),e("v-uni-text",{class:"tab-item "+(2==t.sts?"on":""),attrs:{"data-sts":"2"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onStsTap.apply(void 0,arguments)}}},[t._v("价格")])],1)],1),e("v-uni-view",{staticClass:"prod-list"},[1==t.showType?e("v-uni-view",{staticClass:"prod-show"},[e("v-uni-view",{staticClass:"hotsale-item-cont"},[t._l(t.searchProdList,(function(t,a){return[e("prod",{key:a+"_0",attrs:{item:t,sts:"6"}})]}))],2)],1):t._e(),2==t.showType?e("v-uni-view",{staticClass:"cont-item"},[t._l(t.searchProdList,(function(a,i){return[e("v-uni-view",{key:i+"_0",staticClass:"show-item",attrs:{"data-prodid":a.prodId},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toProdPage.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"more-prod-pic"},[e("v-uni-image",{staticClass:"more-pic",attrs:{src:a.pic}})],1),e("v-uni-view",{staticClass:"prod-text-right"},[e("v-uni-view",{staticClass:"prod-text more"},[t._v(t._s(a.prodName))]),e("v-uni-view",{staticClass:"cate-prod-info"},[t._v(t._s(a.praiseNumber)+"评价 "+t._s(a.positiveRating)+"%好评")]),e("v-uni-view",{staticClass:"prod-price more"},[e("v-uni-text",{staticClass:"symbol"},[t._v("￥")]),e("v-uni-text",{staticClass:"big-num"},[t._v(t._s(t.wxs.parsePrice(a.price)[0]))]),e("v-uni-text",{staticClass:"small-num"},[t._v("."+t._s(t.wxs.parsePrice(a.price)[1]))])],1)],1)],1)]}))],2):t._e()],1),t.searchProdList.length?t._e():e("v-uni-view",{class:["empty",1==t.showType?"empty-top":""]},[t._v("暂无结果")])],1)},o=[]},"4d9c":function(t,a,e){"use strict";var i=e("b954"),o=e.n(i);o.a},"4fb3":function(t,a,e){"use strict";e.r(a);var i=e("31a7"),o=e("ab6b");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("4d9c");var r=e("f0c5"),s=e("56a0"),d=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7abf2312",null,!1,i["a"],void 0);"function"===typeof s["a"]&&Object(s["a"])(d),a["default"]=d.exports},"56a0":function(t,a,e){"use strict";a["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["wxs"]=function(t){return t.exports={toPrice:function(t){return t||(t=0),t.toFixed(2)},parsePrice:function(t){return t||(t=0),t.toFixed(2).split(".")},array_contain:function(t,a){for(var e=0;e<t.length;e++)if(t[e]==a)return!0;return!1},props_contain:function(t,a,e,i,o){var n="";a[e]=i;for(var r=0;r<o.length;r++)n+=o[r]+":"+a[o[r]]+";";n=n.substring(0,n.length-1);for(var s=!1,d=0;d<t.length;d++)if(n==t[d]){s=!0;break}return s},parseDiscount:function(t){return 0==t?"满额减":1==t?"满件减":2==t?"满额折":3==t?"满件折":""},parseDiscountMsg:function(t,a,e){return 0==t?"购满"+a+"元减"+e+"元":1==t?"购满"+a+"件减"+e+"元":2==t?"购满"+a+"元打"+e+"折":3==t?"购满"+a+"件打"+e+"折":""}},t.exports}({exports:{}})}},"5b67":function(t,a,e){var i=e("8879");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("5f17b89f",i,!0,{sourceMap:!1,shadowMode:!1})},"5c65":function(t,a,e){"use strict";a["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["wxs"]=function(t){return t.exports={toPrice:function(t){return t||(t=0),t.toFixed(2)},parsePrice:function(t){return t||(t=0),t.toFixed(2).split(".")},array_contain:function(t,a){for(var e=0;e<t.length;e++)if(t[e]==a)return!0;return!1},props_contain:function(t,a,e,i,o){var n="";a[e]=i;for(var r=0;r<o.length;r++)n+=o[r]+":"+a[o[r]]+";";n=n.substring(0,n.length-1);for(var s=!1,d=0;d<t.length;d++)if(n==t[d]){s=!0;break}return s},parseDiscount:function(t){return 0==t?"满额减":1==t?"满件减":2==t?"满额折":3==t?"满件折":""},parseDiscountMsg:function(t,a,e){return 0==t?"购满"+a+"元减"+e+"元":1==t?"购满"+a+"件减"+e+"元":2==t?"购满"+a+"元打"+e+"折":3==t?"购满"+a+"件打"+e+"折":""}},t.exports}({exports:{}})}},"6c98":function(t,a,e){"use strict";var i=e("5b67"),o=e.n(i);o.a},"6f93":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'/* pages/search-prod-show/search-prod-show.wxss */uni-page-body[data-v-7abf2312]{background:#f4f4f4}body.?%PAGE?%[data-v-7abf2312]{background:#f4f4f4}\r\n\r\n/* 搜索栏 */.fixed-box[data-v-7abf2312]{position:fixed;width:100%;top:0;z-index:999;background:#fff}.search-bar[data-v-7abf2312]{display:flex;align-items:center;justify-content:space-between;width:100%;color:#777;background:#fff;z-index:3;padding:0 %?30?%;box-sizing:border-box;margin:%?30?% 0}.search-bar .search-box[data-v-7abf2312]{position:relative;height:%?60?%;background:#f7f7f7;z-index:999;width:80%;border-radius:%?50?%;margin-right:%?30?%;flex:1}.sear-input[data-v-7abf2312]{height:%?60?%;border-radius:%?50?%;border:0;margin:0 %?30?% 0 %?64?%;line-height:%?48?%;vertical-align:top;background:#f7f7f7;font-size:%?28?%}.search-bar .search-hint[data-v-7abf2312]{font-size:%?28?%;position:absolute;right:%?30?%;top:%?31?%;color:#eb2444}.search-bar .search-box .search-img[data-v-7abf2312]{width:%?32?%;height:%?32?%;position:absolute;left:%?20?%;top:%?14?%;display:block}.search-bar .search-list-img[data-v-7abf2312]{width:%?40?%;height:%?40?%;font-size:0}.search-bar .search-list-img uni-image[data-v-7abf2312]{width:100%;height:100%}.fixed-box .tabs[data-v-7abf2312]{width:100%;height:%?80?%;line-height:%?80?%;padding:%?10?% 0;z-index:999;background:#fff}.fixed-box .tabs[data-v-7abf2312]::after{content:"";background-color:#e1e1e1;left:0;height:1px;-webkit-transform-origin:50% 100% 0;transform-origin:50% 100% 0;bottom:0;position:absolute;display:block;width:100%}.fixed-box .tabs .tab-item[data-v-7abf2312]{display:inline-block;width:33.33%;text-align:center;font-size:%?28?%}.fixed-box .tabs .tab-item.on[data-v-7abf2312]{color:#eb2444}\r\n\r\n/* 横向列表 */.prod-show[data-v-7abf2312]{background:#fff;padding-top:%?240?%}.prod-show .prod-items[data-v-7abf2312]{\r\n  /* width: 375rpx; */float:left;background:#fff;padding-bottom:%?20?%;box-sizing:border-box}.prod-items[data-v-7abf2312]{margin:0 %?20?%}.hotsale-item-cont[data-v-7abf2312]{display:flex;flex-wrap:wrap;justify-content:space-between}\r\n\r\n/* 纵向列表 */.prod-list .cont-item[data-v-7abf2312]{padding:0 %?20?% %?20?% %?20?%;margin-top:%?230?%}.prod-list .cont-item .show-item .more-prod-pic[data-v-7abf2312]{text-align:center;width:%?170?%;height:%?170?%;font-size:0}.prod-list .cont-item .show-item .more-prod-pic .more-pic[data-v-7abf2312]{width:100%;height:100%;vertical-align:middle}.prod-list .cont-item .show-item[data-v-7abf2312]{position:relative;display:flex;justify-content:start;padding:%?20?%;border-radius:%?20?%;background:#fff;margin-bottom:%?20?%;box-shadow:0 %?16?% %?32?% 0 rgba(7,17,27,.05)}.prod-list .cont-item .show-item .prod-text-right[data-v-7abf2312]{margin-left:%?20?%;width:75%}.prod-list .cont-item .show-item .prod-text-right .cate-prod-info[data-v-7abf2312]{font-size:%?22?%;color:#999;margin:%?10?% 0 %?20?% 0}.prod-list .cont-item .show-item .prod-text-right .go-to-buy[data-v-7abf2312]{font-size:%?26?%;background:#eb2444;color:#fff;border-radius:%?50?%;width:%?150?%;text-align:center;padding:%?8?% %?3?%;position:absolute;right:%?20?%;bottom:%?20?%}.prod-list .cont-item .show-item .prod-text-right .prod-text.more[data-v-7abf2312]{margin:0;height:%?78?%;font-size:%?28?%;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#000}.prod-list .cont-item .show-item .prod-text-right .prod-price.more[data-v-7abf2312]{font-size:%?28?%;color:#eb2444;font-family:arial}.container .empty[data-v-7abf2312]{margin-top:%?100?%;text-align:center;color:#999;font-size:%?26?%}.container .empty.empty-top[data-v-7abf2312]{margin-top:%?300?%}',""]),t.exports=a},"7f3e":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3");var i={data:function(){return{}},components:{},props:{item:Object,sts:Number},methods:{toProdPage:function(t){var a=t.currentTarget.dataset.prodid;uni.navigateTo({url:"/pages/prod/prod?prodid="+a})}}};a.default=i},8879:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".prod-items[data-v-a03fddb6]{width:43%;\r\n  /* float: left; */background:#fff;margin-bottom:%?40?%;box-sizing:border-box}prod:nth-child(2n-1) .prod-items[data-v-a03fddb6]{padding:%?20?% %?10?% %?10?% %?20?%}prod:nth-child(2n) .prod-items[data-v-a03fddb6]{padding:%?20?% %?20?% %?10?% %?10?%}.hot-imagecont .hotsaleimg[data-v-a03fddb6]{width:100%;height:%?345?%}.hot-text .hotprod-text[data-v-a03fddb6]{height:%?76?%;font-size:%?28?%;display:-webkit-box;word-break:break-all;padding:0 %?20?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#000}.prod-items .hot-imagecont[data-v-a03fddb6]{border-radius:%?8?%;text-align:center;font-size:0}.prod-items .hot-text[data-v-a03fddb6]{margin-top:%?20?%}.prod-items .hot-text .prod-info[data-v-a03fddb6]{font-size:%?20?%;color:#777;padding:0 %?20?%;margin-top:%?8?%}.prod-items .hot-text .prod-text-info[data-v-a03fddb6]{position:relative;height:%?50?%;line-height:%?70?%;font-family:Arial}.prod-items .hot-text .prod-text-info .price[data-v-a03fddb6]{color:#eb2444;padding-left:%?20?%}.deadline-price[data-v-a03fddb6]{font-size:%?22?%;margin-right:%?5?%}",""]),t.exports=a},"960f":function(t,a,e){"use strict";e.r(a);var i=e("1446"),o=e("cae2");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("6c98");var r=e("f0c5"),s=e("5c65"),d=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"a03fddb6",null,!1,i["a"],void 0);"function"===typeof s["a"]&&Object(s["a"])(d),a["default"]=d.exports},ab6b:function(t,a,e){"use strict";e.r(a);var i=e("befa"),o=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},b954:function(t,a,e){var i=e("6f93");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("ec588560",i,!0,{sourceMap:!1,shadowMode:!1})},befa:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("4de4"),e("d3b7"),e("3c65");var o=i(e("960f")),n=e("0e9d"),r={data:function(){return{sts:0,showType:2,searchProdList:[],prodName:""}},components:{prod:o.default},props:{},onLoad:function(t){this.setData({prodName:t.prodName})},onReady:function(){},onShow:function(){this.toLoadData()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{changeShowType:function(){var t=this.showType;t=1==t?2:1,this.setData({showType:t})},getSearchContent:function(t){this.setData({prodName:t.detail.value})},toLoadData:function(){var t=this,a={url:"/search/searchProdPage",method:"GET",data:{current:1,prodName:this.prodName,size:10,sort:this.sts},callBack:function(a){t.setData({searchProdList:a.records})}};n.request(a)},toSearchConfirm:function(t){var a=this;if(t.detail.value){var e=uni.getStorageSync("recentSearch")||[];e=e.filter((function(t){return t!==a.prodName})),e.unshift(this.prodName),e.length>10&&e.pop(),uni.setStorageSync("recentSearch",e)}uni.redirectTo({url:"/pages/search-prod-show/search-prod-show?prodName="+t.detail.value})},onStsTap:function(t){var a=t.currentTarget.dataset.sts;this.setData({sts:a}),this.toLoadData()},toProdPage:function(t){var a=t.currentTarget.dataset.prodid;uni.navigateTo({url:"/pages/prod/prod?prodid="+a})}}};a.default=r},cae2:function(t,a,e){"use strict";e.r(a);var i=e("7f3e"),o=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a}}]);