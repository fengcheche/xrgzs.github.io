(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-recent-news-recent-news"],{"00fb":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"recent-news"},[e._l(e.news,(function(t,a){return[n("v-uni-view",{key:a+"_0",staticClass:"news-item",attrs:{"data-id":t.id},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toNewsDetail.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"news-item-title"},[e._v(e._s(t.title))]),n("v-uni-view",{staticClass:"news-item-date"},[e._v(e._s(t.publishTime))])],1)]})),e.news&&e.news.length?e._e():n("v-uni-view",{staticClass:"empty"},[e._v("暂无数据")])],2)],1)},i=[]},"317d":function(e,t,n){"use strict";var a=n("9b76"),i=n.n(a);i.a},"45ca":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'/* pages/recent-news/recent-news.wxss */.recent-news[data-v-ed917a26]{background:#fff}.recent-news .news-item[data-v-ed917a26]{padding:%?20?% %?20?% 0 %?20?%;position:relative}.recent-news .news-item[data-v-ed917a26]::after{content:" ";width:100%;height:%?2?%;background-color:#e1e1e1;left:%?20?%;display:block;position:absolute}.recent-news .news-item .news-item-title[data-v-ed917a26]{font-size:%?28?%;text-align:left}.recent-news .news-item .news-item-date[data-v-ed917a26]{font-size:%?24?%;color:#999;text-align:right;margin-top:%?10?%;margin-bottom:%?20?%}.recent-news .empty[data-v-ed917a26]{display:block;padding-top:%?200?%;color:#999;font-size:%?26?%;text-align:center}',""]),e.exports=t},"9b76":function(e,t,n){var a=n("45ca");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("5b54b9e6",a,!0,{sourceMap:!1,shadowMode:!1})},af32:function(e,t,n){"use strict";n.r(t);var a=n("00fb"),i=n("b7fb");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("317d");var o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"ed917a26",null,!1,a["a"],void 0);t["default"]=c.exports},b7fb:function(e,t,n){"use strict";n.r(t);var a=n("d3b6"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},d3b6:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("0e9d"),i=(n("a311"),{data:function(){return{news:[]}},components:{},props:{},onLoad:function(e){},onReady:function(){},onShow:function(){var e=this,t={url:"/shop/notice/noticeList",method:"GET",data:{},callBack:function(t){e.setData({news:t.records})}};a.request(t)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{toNewsDetail:function(e){console.log(e);e.currentTarget.dataset.id;uni.navigateTo({url:"/pages/news-detail/news-detail?id="+e.currentTarget.dataset.id})}}});t.default=i}}]);