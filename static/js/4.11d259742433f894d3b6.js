webpackJsonp([4],{142:function(t,e,a){a(168);var i=a(5)(a(153),a(179),"data-v-275f4b39",null);t.exports=i.exports},153:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"livevideo",mounted:function(){},data:function(){return{currentTab:"tab1",dialog:!0,videoplayerurl:""}},beforeRouteEnter:function(t,e,a){a(!0)},beforeRouteLeave:function(t,e,a){a(!0)},computed:{videoObject:function(){return this.$store.state.cvo},playerOptions:function(){return{aspectRatio:"16:9",sources:[{type:"video/mp4",src:this.$store.state.cvo.mp4}],poster:this.$store.state.cvo.poster}}},methods:{fetchData:function(){alert("hello")},handleTabChange:function(t){this.currentTab=t},goback:function(){this.$router.go(-1)}}}},158:function(t,e,a){e=t.exports=a(132)(!0),e.push([t.i,".flex[data-v-275f4b39]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.desc-container[data-v-275f4b39]{height:100%;overflow-y:scroll}img[data-v-275f4b39]{width:100%}.fixed[data-v-275f4b39]{position:fixed;top:0}","",{version:3,sources:["/Users/apple/mywebs/bb81_datas/clientapp/src/components/VideoView.vue"],names:[],mappings:"AACA,uBACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,qBAAsB,AAClB,iBAAkB,AACtB,uBAAwB,AACpB,oBAAqB,AACjB,0BAA4B,CACpC,AACD,iCACC,YAAY,AACZ,iBAAmB,CACnB,AACD,qBACC,UAAY,CACZ,AACD,wBACC,eAAe,AACf,KAAO,CACP",file:"VideoView.vue",sourcesContent:["\n.flex[data-v-275f4b39]{\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n     -ms-flex-direction: column;\n         flex-direction: column;\n -ms-flex-wrap: nowrap;\n     flex-wrap: nowrap;\n -webkit-box-pack: start;\n     -ms-flex-pack: start;\n         justify-content: flex-start;\n}\n.desc-container[data-v-275f4b39]{\n height:100%;\n overflow-y: scroll;\n}\nimg[data-v-275f4b39] {\n width: 100%;\n}\n.fixed[data-v-275f4b39] {\n position:fixed;\n top: 0;\n}\n\n"],sourceRoot:""}])},168:function(t,e,a){var i=a(158);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(133)("4a2035d0",i,!0)},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-appbar",{staticClass:"fixed",attrs:{title:t.videoObject.title}},[a("mu-icon-button",{attrs:{icon:"arrow_back"},on:{click:function(e){t.goback()}},slot:"left"})],1),t._v(" "),a("div",{staticStyle:{"padding-top":"66px"}},[a("mu-card",[a("mu-card-media",[a("div",{staticClass:"player"},[a("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0}})],1)])],1),t._v(" "),a("mu-tabs",{attrs:{value:t.currentTab},on:{change:t.handleTabChange}},[a("mu-tab",{attrs:{value:"tab1",title:"信息"}}),t._v(" "),a("mu-tab",{attrs:{value:"tab2",title:"图集"}}),t._v(" "),a("mu-tab",{attrs:{value:"tab3",title:"视频"}})],1),t._v(" "),"tab1"===t.currentTab?a("div",{staticClass:"desc-container"},[a("mu-card-title",{attrs:{title:t.videoObject.alt,subTitle:""}}),t._v(" "),a("mu-card-text")],1):t._e(),t._v(" "),"tab2"===t.currentTab?a("div"):t._e(),t._v(" "),"tab3"===t.currentTab?a("div",[a("h2"),t._v(" "),a("p")]):t._e()],1),t._v(" "),a("mu-dialog",{attrs:{open:t.dialog,title:"广告"}},[a("img",{attrs:{src:t.videoObject.src,width:"300px",height:"auto"}}),t._v(" "),a("mu-flat-button",{attrs:{label:"关闭",primary:""},on:{click:function(){t.dialog=!1}},slot:"actions"})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.11d259742433f894d3b6.js.map