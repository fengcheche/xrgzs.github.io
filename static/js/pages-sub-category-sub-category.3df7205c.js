(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sub-category-sub-category"],{"0970":function(t,a,e){var i=e("b18c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("6573c3a9",i,!0,{sourceMap:!1,shadowMode:!1})},"386a":function(t,a,e){"use strict";var i=e("0970"),o=e.n(i);o.a},"3f4f":function(t,a,e){"use strict";a["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["wxs"]=function(t){return t.exports={toPrice:function(t){return t||(t=0),t.toFixed(2)},parsePrice:function(t){return t||(t=0),t.toFixed(2).split(".")},array_contain:function(t,a){for(var e=0;e<t.length;e++)if(t[e]==a)return!0;return!1},props_contain:function(t,a,e,i,o){var r="";a[e]=i;for(var n=0;n<o.length;n++)r+=o[n]+":"+a[o[n]]+";";r=r.substring(0,r.length-1);for(var s=!1,d=0;d<t.length;d++)if(r==t[d]){s=!0;break}return s},parseDiscount:function(t){return 0==t?"满额减":1==t?"满件减":2==t?"满额折":3==t?"满件折":""},parseDiscountMsg:function(t,a,e){return 0==t?"购满"+a+"元减"+e+"元":1==t?"购满"+a+"件减"+e+"元":2==t?"购满"+a+"元打"+e+"折":3==t?"购满"+a+"件打"+e+"折":""}},t.exports}({exports:{}})}},5267:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af");var i=e("0e9d"),o={data:function(){return{isLoaded:!1,subCategoryList:[],categoryId:0,prodList:[],parentId:"",current:1,pages:0,intoView:""}},computed:{i18n:function(){return this.$t("index")}},onLoad:function(t){this.setData({parentId:t.parentId,categoryId:t.categoryId}),this.getSubCategory(),this.getProdList()},onReachBottom:function(){this.current<this.pages&&(this.current=this.current+1,this.getProdList())},methods:{getSubCategory:function(){var t=this,a={url:"/category/categoryInfo",method:"GET",data:{parentId:this.parentId},callBack:function(a){t.setData({subCategoryList:a}),t.$nextTick((function(){t.intoView="sw"+t.categoryId}))}};i.request(a)},getProdList:function(){var t=this;this.isLoaded=!1;var a={url:"/prod/pageProd",method:"GET",data:{categoryId:this.categoryId,current:this.current,size:10,sort:0,isAllProdType:!0},callBack:function(a){t.isLoaded=!0,t.setData({prodList:1==a.current?a.records:t.prodList.concat(a.records),current:a.current,pages:a.pages})}};i.request(a)},onSubCategoryTap:function(t){this.setData({categoryId:t.currentTarget.dataset.id,current:1,pages:0,intoView:"sw"+t.currentTarget.dataset.id}),this.getProdList()},toProdPage:function(t){var a=t.currentTarget.dataset.prodid;a&&uni.navigateTo({url:"/pages/prod/prod?prodid="+a})}}};a.default=o},"8b3f":function(t,a,e){"use strict";e.r(a);var i=e("5267"),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=o.a},9984:function(t,a,e){"use strict";e.r(a);var i=e("de65"),o=e("8b3f");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("386a");var n=e("f0c5"),s=e("3f4f"),d=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"6749aaff",null,!1,i["a"],void 0);"function"===typeof s["a"]&&Object(s["a"])(d),a["default"]=d.exports},b18c:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"/* pages/sub-category/sub-category.wxss */uni-page-body[data-v-6749aaff]{background:#f4f4f4}body.?%PAGE?%[data-v-6749aaff]{background:#f4f4f4}.category-tit[data-v-6749aaff]{width:100%;white-space:nowrap;position:fixed;top:0;z-index:999;background-color:#fff;border-bottom:%?2?% solid #f4f4f4;font-size:%?30?%}.category-tit .category-item[data-v-6749aaff]{display:inline-block;padding:%?20?% %?10?%;margin:0 %?20?%;box-sizing:border-box;font-size:%?28?%}.prod-item[data-v-6749aaff]{margin-top:%?100?%}.on[data-v-6749aaff]{border-bottom:%?4?% solid #e43130;color:#e43130}\r\n\r\n/* 清除 scroll-view 滚动条 */[data-v-6749aaff]::-webkit-scrollbar{width:0;height:0;color:transparent}\r\n\r\n/* 列表为空 */.empty[data-v-6749aaff]{margin-top:%?200?%}\r\n\r\n/* 商品列表 */.prod-items[data-v-6749aaff]{width:%?345?%;display:inline-block;background:#fff;padding-bottom:%?20?%;box-sizing:border-box;box-shadow:%?0?% %?6?% %?8?% rgba(58,134,185,.2)}.prod-items[data-v-6749aaff]:nth-child(2n-1){margin:%?20?% %?10?% %?10?% %?20?%}.prod-items[data-v-6749aaff]:nth-child(2n){margin:%?20?% %?20?% %?10?% %?10?%}.prod-items .hot-imagecont .hotsaleimg[data-v-6749aaff]{width:%?341?%;height:%?341?%}.prod-items .hot-text .hotprod-text[data-v-6749aaff]{font-size:%?28?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.prod-items .hot-imagecont[data-v-6749aaff]{font-size:0;text-align:center}.prod-items .hot-text[data-v-6749aaff]{margin-top:%?20?%;padding:0 %?10?%}.prod-items .hot-text .prod-info[data-v-6749aaff], .more-prod .prod-text-right .prod-info[data-v-6749aaff]{font-size:%?22?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.prod-items .hot-text .prod-text-info[data-v-6749aaff]{position:relative;height:%?70?%;line-height:%?70?%;font-family:Arial}.prod-items .hot-text .prod-text-info .hotprod-price[data-v-6749aaff]{display:inline;font-size:%?26?%;color:#eb2444}.prod-items .hot-text .prod-text-info .basket-img[data-v-6749aaff]{width:%?50?%;height:%?50?%;position:absolute;right:0;bottom:%?7?%;padding:%?8?%}",""]),t.exports=a},de65:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"Mall4j container"},[e("v-uni-scroll-view",{staticClass:"category-tit",attrs:{"scroll-x":"true","scroll-into-view":t.intoView,"scroll-with-animation":!0}},[t._l(t.subCategoryList,(function(a,i){return[e("v-uni-view",{key:i+"_0",class:"category-item "+(a.categoryId==t.categoryId?"on":""),attrs:{id:"sw"+a.categoryId,"data-id":a.categoryId},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onSubCategoryTap.apply(void 0,arguments)}}},[t._v(t._s(a.categoryName))])]}))],2),t.prodList.length?e("v-uni-view",{staticClass:"prod-item"},[t._l(t.prodList,(function(a,i){return[e("v-uni-view",{key:i+"_0",staticClass:"prod-items",attrs:{"data-prodid":a.prodId},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toProdPage.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"hot-imagecont"},[e("v-uni-image",{staticClass:"hotsaleimg",attrs:{src:a.pic}})],1),e("v-uni-view",{staticClass:"hot-text"},[e("v-uni-view",{staticClass:"hotprod-text"},[t._v(t._s(a.prodName))]),e("v-uni-view",{staticClass:"prod-info"},[t._v(t._s(a.brief))]),e("v-uni-view",{staticClass:"prod-text-info"},[e("v-uni-view",{staticClass:"price"},[e("v-uni-text",{staticClass:"symbol"},[t._v("￥")]),e("v-uni-text",{staticClass:"big-num"},[t._v(t._s(t.wxs.parsePrice(a.price)[0]))]),e("v-uni-text",{staticClass:"small-num"},[t._v("."+t._s(t.wxs.parsePrice(a.price)[1]))])],1)],1)],1)],1)]}))],2):e("v-uni-view",{staticClass:"empty-wrap"},[t._v("暂无商品数据~")])],1)},o=[]}}]);