(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"Y/YL":function(t,a,n){"use strict";n.r(a);var e=n("CcnG"),l=function(){},o=n("82da"),r=n("pMnS"),u=n("8for"),i=n("aQKG"),c=n("rZLr"),s=n("XKqz"),h=n("We0v"),p=n("4CI1"),g=n("H6uK"),m=n("Cz+m"),d=n("x6z2"),f=n("FbL/"),b=n("1jmK"),y=n("wd/R"),v=n("LvDl"),C=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var l in a=arguments[n])Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l]);return t},Z=function(t,a,n,e){return new(n||(n=Promise))(function(l,o){function r(t){try{i(e.next(t))}catch(t){o(t)}}function u(t){try{i(e.throw(t))}catch(t){o(t)}}function i(t){t.done?l(t.value):new n(function(a){a(t.value)}).then(r,u)}i((e=e.apply(t,a||[])).next())})},S=function(t,a){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=a.call(t,r)}catch(t){o=[6,t],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},w=function(){function t(t,a){this.categoryService=t,this.commonDataService=a,this.dateRange=[],this.salesPlatform="",this.countPlatform="",this.loading=!1,this.loading2=!1}return t.prototype.ngOnInit=function(){var t=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.categoryService.pagingCatWholeView(C({},e,{pageNo:a,pageSize:n}))}},t.prototype.ngAfterViewInit=function(){return Z(this,void 0,void 0,function(){var t;return S(this,function(a){switch(a.label){case 0:return t=this,[4,this.commonDataService.getCategoryList()];case 1:return t.categoryList=a.sent().data,this.legendData=Object(v.map)(this.categoryList,"value"),[2]}})})},t.prototype.setChartOption=function(){return Z(this,void 0,void 0,function(){var t,a,n,e,l,o,r;return S(this,function(u){switch(u.label){case 0:return this.loading=!0,[4,this.getChartData(this.salesPlatform)];case 1:for(t=u.sent().data,a=[],n=0,e=0;e<this.legendData.length;e++)l=this.legendData[e],o=Object(v.find)(t,{sCat1Name:l})||{},a.push({value:o.totalVolume||0,name:l}),n+=o.totalVolume||0;return this.salesDataChart1.setOption({title:{text:"\u9500\u552e\u989d \n "+n,y:"center",x:"center",textStyle:{align:"center"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",right:30,top:20,data:this.legendData},series:[{name:"\u9500\u552e\u989d",type:"pie",radius:["40%","55%"],label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:a}]}),r={xAxis:{type:"category",data:this.legendData},tooltip:{trigger:"axis",formatter:"{a} <br> {b}:{c}%"},yAxis:[{type:"value",axisLabel:{show:!0,interval:0,showMinLabel:!0,formatter:"{value} %"},min:0,max:100}],series:[{name:"\u9500\u552e\u989d",data:Object(v.map)(a,"value").map(function(t){return t/n*100}),type:"bar"}]},this.salesDataChart2.setOption(r),this.loading=!1,[2]}})})},t.prototype.setChartOption2=function(){return Z(this,void 0,void 0,function(){var t,a,n,e,l,o,r;return S(this,function(u){switch(u.label){case 0:return this.loading2=!0,[4,this.getChartData(this.countPlatform)];case 1:for(t=u.sent().data,a=[],n=0,e=0;e<this.legendData.length;e++)l=this.legendData[e],o=Object(v.find)(t,{sCat1Name:l})||{},a.push({value:o.totalCount||0,name:l}),n+=o.totalCount||0;return this.countDataChart1.setOption({title:{text:"\u9500\u552e\u91cf \n "+n,y:"center",x:"center",textStyle:{align:"center"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",right:30,top:20,data:this.legendData},series:[{name:"\u9500\u91cf",type:"pie",radius:["40%","55%"],label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:a}]}),r={xAxis:{type:"category",data:this.legendData},tooltip:{trigger:"axis",formatter:"{a} <br> {b}:{c}%"},yAxis:{type:"value",axisLabel:{show:!0,interval:0,showMinLabel:!0,formatter:"{value} %"},min:0,max:100},series:[{name:"\u9500\u552e\u91cf",data:Object(v.map)(a,"value").map(function(t){return t/n*100}),type:"bar"}]},this.countDataChart2.setOption(r),this.loading2=!1,[2]}})})},t.prototype.getChartData=function(t){var a=this.getDateRangeParam();return this.categoryService.catWholeList(C({platform:t||void 0},a))},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u54c1\u7c7b"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}},{column:"countPercent",title:"\u9500\u552e\u91cf\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),D=e.Pa({encapsulation:0,styles:[[""]],data:{}});function R(t){return e.lb(0,[e.hb(402653184,1,{salesDataChart1:0}),e.hb(402653184,2,{salesDataChart2:0}),e.hb(402653184,3,{countDataChart1:0}),e.hb(402653184,4,{countDataChart2:0}),(t()(),e.Ra(4,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(5,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var l=!0,o=t.component;return"datesChange"===a&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===a&&(o.setChartOption(),o.setChartOption2(),l=!1!==e.bb(t,28).searchData(!0)&&l),l},u.b,u.a)),e.Qa(6,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(7,0,null,null,1,"app-common-operation",[["title","\u4e00\u7ea7\u54c1\u7c7b\u9500\u552e\u989d\u5360\u6bd4"]],null,[[null,"platformChange"]],function(t,a,n){var e=!0,l=t.component;return"platformChange"===a&&(e=!1!==(l.salesPlatform=n)&&e),"platformChange"===a&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(8,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(t()(),e.Ra(9,0,null,null,6,"div",[["layout","row"]],null,null,null,null,null)),(t()(),e.Ra(10,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(t()(),e.Ra(11,0,null,null,1,"app-data-chart",[],null,null,null,g.b,g.a)),e.Qa(12,4440064,[[1,4],["salesDataChart1",4]],0,m.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(13,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(t()(),e.Ra(14,0,null,null,1,"app-data-chart",[],null,null,null,g.b,g.a)),e.Qa(15,4440064,[[2,4],["salesDataChart2",4]],0,m.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(16,0,null,null,1,"app-common-operation",[["title","\u4e00\u7ea7\u54c1\u7c7b\u9500\u91cf\u5360\u6bd4"]],null,[[null,"platformChange"]],function(t,a,n){var e=!0,l=t.component;return"platformChange"===a&&(e=!1!==(l.countPlatform=n)&&e),"platformChange"===a&&(e=!1!==l.setChartOption2()&&e),e},s.b,s.a)),e.Qa(17,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(t()(),e.Ra(18,0,null,null,6,"div",[["layout","row"]],null,null,null,null,null)),(t()(),e.Ra(19,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(t()(),e.Ra(20,0,null,null,1,"app-data-chart",[],null,null,null,g.b,g.a)),e.Qa(21,4440064,[[3,4],["countDataChart1",4]],0,m.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(22,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(t()(),e.Ra(23,0,null,null,1,"app-data-chart",[],null,null,null,g.b,g.a)),e.Qa(24,4440064,[[4,4],["countDataChart2",4]],0,m.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(25,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(26,114688,null,0,h.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(27,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(28,114688,[["table",4]],0,f.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,6,0,n.dateRange),t(a,8,0,"\u4e00\u7ea7\u54c1\u7c7b\u9500\u552e\u989d\u5360\u6bd4",!0,n.salesPlatform,!0,n.loading),t(a,12,0,450),t(a,15,0,450),t(a,17,0,"\u4e00\u7ea7\u54c1\u7c7b\u9500\u91cf\u5360\u6bd4",!0,n.countPlatform,!0,n.loading2),t(a,21,0,450),t(a,24,0,450),t(a,26,0,!0,!0),t(a,28,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var P=e.Na("app-whole",w,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-whole",[],null,null,null,R,D)),e.Qa(1,4308992,null,0,w,[b.a,p.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),x=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var l in a=arguments[n])Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l]);return t},O=function(){function t(t){this.categoryService=t,this.dateRange=[],this.platform="",this.loading=!1}return t.prototype.ngOnInit=function(){var t=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.categoryService.pagingCatSubDetailView(x({},e,{pageNo:a,pageSize:n}))}},t.prototype.setChartOption=function(){return t=this,void 0,n=function(){function t(t,a,n){var e={name:t[n],id:b++,value:t.mSlaesCount,children:[]};return a.children?a.children.push(e):Array.isArray(a)&&a.push(e),e}var a,n,e,l,o,r,u,i,c,s,h,p,g,m,d,f,b;return function(t,a){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=a.call(t,r)}catch(t){o=[6,t],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,function(y){switch(y.label){case 0:return this.dataChart?(this.loading=!0,this.dataChart.showLoading(),[4,this.getChartData(this.platform)]):[2];case 1:for(a=y.sent().data,n=[],e=Object(v.chain)(a).uniqBy("sCat1Name").value(),l=0;l<e.length;l++)for(r=t(o=e[l],n,"sCat1Name"),u=Object(v.chain)(a).filter({sCat1Name:o.sCat1Name}).uniqBy("cat1Name").value(),i=0;i<u.length;i++)for(s=t(c=u[i],r,"cat2Name"),h=Object(v.chain)(a).filter({cat1Name:c.cat1Name}).uniqBy("cat2Name").value(),p=0;p<h.length;p++)for(m=t(g=h[p],s,"cat2Name"),d=Object(v.chain)(a).filter({cat2Name:g.cat2Name}).value(),f=0;f<d.length;f++)t(d[f],m,"cat3Name");return function t(a){for(var n=0,e=0;e<a.length;e++){var l=a[e];l.children&&l.children.length?l.value=t(l.children):l.children=null,n+=l.value}return n}(n),b=1,this.dataChart.setOption({tooltip:{},series:[{type:"treemap",data:n,leafDepth:1,levels:[{itemStyle:{normal:{borderWidth:4,gapWidth:4}}},{colorSaturation:[.3,.6],itemStyle:{normal:{borderColorSaturation:.7,gapWidth:2,borderWidth:2}}},{colorSaturation:[.3,.5],itemStyle:{normal:{borderColorSaturation:.6,gapWidth:1}}},{colorSaturation:[.3,.5]}]}]}),this.loading=!1,[2]}})},new((a=void 0)||(a=Promise))(function(e,l){function o(t){try{u(n.next(t))}catch(t){l(t)}}function r(t){try{u(n.throw(t))}catch(t){l(t)}}function u(t){t.done?e(t.value):new a(function(a){a(t.value)}).then(o,r)}u((n=n.apply(t,[])).next())});var t,a,n},t.prototype.getChartData=function(t){var a=this.getDateRangeParam();return this.categoryService.catSubdivisionTree(x({platform:t||void 0},a))},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"cat1Name",title:"\u4e8c\u7ea7\u54c1\u7c7b"},{column:"cat2Name",title:"\u4e09\u7ea7\u54c1\u7c7b"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),N=e.Pa({encapsulation:0,styles:[[""]],data:{}});function Y(t){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(t()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var l=!0,o=t.component;return"datesChange"===a&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===a&&(o.setChartOption(),l=!1!==e.bb(t,11).searchData(!0)&&l),l},u.b,u.a)),e.Qa(3,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u7ec6\u5206\u54c1\u7c7b\u63a2\u67e5"]],null,[[null,"platformChange"]],function(t,a,n){var e=!0,l=t.component;return"platformChange"===a&&(e=!1!==(l.platform=n)&&e),"platformChange"===a&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(t()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,g.b,g.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,m.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,h.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(11,114688,[["table",4]],0,f.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,3,0,n.dateRange),t(a,5,0,"\u7ec6\u5206\u54c1\u7c7b\u63a2\u67e5",!0,n.platform,!0,n.loading),t(a,7,0,450),t(a,9,0,!0,!0),t(a,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var V=e.Na("app-subdivision",O,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-subdivision",[],null,null,null,Y,N)),e.Qa(1,114688,null,0,O,[b.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),Q=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var l in a=arguments[n])Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l]);return t},A=function(t,a,n,e){return new(n||(n=Promise))(function(l,o){function r(t){try{i(e.next(t))}catch(t){o(t)}}function u(t){try{i(e.throw(t))}catch(t){o(t)}}function i(t){t.done?l(t.value):new n(function(a){a(t.value)}).then(r,u)}i((e=e.apply(t,a||[])).next())})},k=function(t,a){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=a.call(t,r)}catch(t){o=[6,t],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},j=function(){function t(t,a){this.categoryService=t,this.commonDataService=a,this.dateRange=[],this.platform="",this.loading=!1}return t.prototype.ngOnInit=function(){return A(this,void 0,void 0,function(){var t=this;return k(this,function(a){return this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.categoryService.pagingCatAreaView(Q({},e,{pageNo:a,pageSize:n}))},[2]})})},t.prototype.ngAfterViewInit=function(){return A(this,void 0,void 0,function(){var t;return k(this,function(a){switch(a.label){case 0:return t=this,[4,this.commonDataService.getCategoryList()];case 1:return t.categoryList=a.sent().data,[2]}})})},t.prototype.setChartOption=function(){return A(this,void 0,void 0,function(){var t,a,n,e,l,o,r,u,i,c;return k(this,function(s){switch(s.label){case 0:return this.loading=!0,[4,this.getChartData()];case 1:for(t=s.sent().data,a=Object(v.groupBy)(t,"sCat1Name"),n=[],e=[{name:"\u96f6\u9500\u91cf",key:"countPercent",yAxisIndex:0,type:"bar"},{name:"\u96f6\u552e\u989d",key:"salesPercent",yAxisIndex:1,type:"bar"}],l=0;l<this.categoryList.length;l++){for(o=a[this.categoryList[l].value]||[],r=[],u=0;u<e.length;u++)r.push({name:(i=e[u]).name,yAxisIndex:i.yAxisIndex,type:i.type,data:Object(v.map)(o,i.key)});n.push({tooltip:{trigger:"axis"},xAxis:[{type:"category",data:Object(v.map)(o,"city"),splitLine:{show:!1}}],series:r})}return c={baseOption:{timeline:{controlStyle:{showPlayBtn:!1,show:!0},data:Object(v.map)(this.categoryList,"value"),axisType:"category"},legend:{data:Object(v.map)(e,"name")},calculable:!0,grid:{top:80,bottom:100},yAxis:[{type:"value",name:"\u96f6\u552e\u91cf%"},{type:"value",name:"\u96f6\u552e\u989d%"}]},options:n},this.dataChart.setOption(c),this.loading=!1,[2]}})})},t.prototype.getChartData=function(){var t=this.getDateRangeParam();return this.categoryService.catView(Q({platform:this.platform||void 0},t))},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"city",title:"\u57ce\u5e02"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}},{column:"countPercent",title:"\u9500\u552e\u91cf\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),M=e.Pa({encapsulation:0,styles:[[""]],data:{}});function T(t){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(t()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var l=!0,o=t.component;return"datesChange"===a&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===a&&(o.setChartOption(),l=!1!==e.bb(t,11).searchData(!0)&&l),l},u.b,u.a)),e.Qa(3,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u5404\u54c1\u7c7b\u533a\u57df\u9500\u552e\u5360\u6bd4\u5206\u6790"]],null,[[null,"platformChange"]],function(t,a,n){var e=!0,l=t.component;return"platformChange"===a&&(e=!1!==(l.platform=n)&&e),"platformChange"===a&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(t()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,g.b,g.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,m.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,h.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(11,114688,[["table",4]],0,f.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,3,0,n.dateRange),t(a,5,0,"\u5404\u54c1\u7c7b\u533a\u57df\u9500\u552e\u5360\u6bd4\u5206\u6790",!0,n.platform,!0,n.loading),t(a,7,0,450),t(a,9,0,!0,!0),t(a,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var E=e.Na("app-category-area",j,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-category-area",[],null,null,null,T,M)),e.Qa(1,4308992,null,0,j,[b.a,p.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),q=n("t/Na"),L=function(){function t(t){this.http=t}return t.prototype.pagingCatShopVolumeView=function(t){return this.http.post("catShop/top_volume_listview",t).toPromise()},t.prototype.pagingCatShopCountView=function(t){return this.http.post("catShop/top_count_listview",t).toPromise()},t.ngInjectableDef=e.T({factory:function(){return new t(e.X(q.c))},token:t,providedIn:"root"}),t}(),z=function(){function t(t){this.catShopService=t,this.volumeParam={pageNo:1,pageSize:10,platform:null,sCat1Name:""},this.countParam={pageNo:1,pageSize:10,platform:null,sCat1Name:""},this.loading=!1,this.loading2=!1,this.dateRange=[]}return t.prototype.ngOnInit=function(){var t=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.slaesCountConfigs=this.createColumnCountConfigs(),this.getSalesVolumeTableDataFn=function(){return t.loading=!0,t.catShopService.pagingCatShopVolumeView(a(t.volumeParam)).then(function(a){return t.loading=!1,a.data.total=Math.min(a.data.total,t.volumeParam.pageSize),a})},this.getSlaesCountTableDataFn=function(){return t.loading2=!0,t.catShopService.pagingCatShopCountView(a(t.countParam)).then(function(a){return t.loading2=!1,a.data.total=Math.min(a.data.total,t.countParam.pageSize),a})};var a=function(a){var n=Object(v.cloneDeep)(a);if(n.platform||delete n.platform,n.sCat1Name||delete n.sCat1Name,t.dateRange&&t.dateRange.length){var e=t.dateRange,l=e[1];n.dateBegin=y(e[0]).format("YYYY-MM")+"-01",n.dateEnd=y(l).format("YYYY-MM")+"-02",t.dateAreaStr=n.dateBegin+"-"+n.dateEnd}else delete n.dateBegin,delete n.dateEnd;return n}},t.prototype.doQuery=function(t){t.searchData(!0)},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"shopName",title:"\u5e97\u94fa\u540d\u79f0"},{column:"totalVolume",title:"\u9500\u552e\u989d"}]},t.prototype.createColumnCountConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"shopName",title:"\u5e97\u94fa\u540d\u79f0"},{column:"totalCount",title:"\u9500\u552e\u91cf"}]},t}(),F=e.Pa({encapsulation:0,styles:[[""]],data:{}});function B(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(1,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var l=!0,o=t.component;return"datesChange"===a&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===a&&(o.doQuery(e.bb(t,6)),l=!1!==o.doQuery(e.bb(t,10))&&l),l},u.b,u.a)),e.Qa(2,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(3,0,null,null,1,"app-common-operation",[["title","\u5404\u54c1\u7c7b\u4e0b\u9500\u552e\u989dTOP10\u5e97\u94fa"]],null,[[null,"platformChange"],[null,"categoryChange"],[null,"chagned"]],function(t,a,n){var l=!0,o=t.component;return"platformChange"===a&&(l=!1!==(o.volumeParam.platform=n)&&l),"categoryChange"===a&&(l=!1!==(o.volumeParam.sCat1Name=n)&&l),"chagned"===a&&(l=!1!==o.doQuery(e.bb(t,6))&&l),l},s.b,s.a)),e.Qa(4,114688,null,0,h.a,[p.a],{title:[0,"title"],category:[1,"category"],platform:[2,"platform"],loading:[3,"loading"]},{categoryChange:"categoryChange",platformChange:"platformChange",chagned:"chagned"}),(t()(),e.Ra(5,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(6,114688,[["volumeTable",4]],0,f.a,[],{hideOnSinglePage:[0,"hideOnSinglePage"],columns:[1,"columns"],queryDataService:[2,"queryDataService"]},null),(t()(),e.Ra(7,0,null,null,1,"app-common-operation",[["title","\u5404\u54c1\u7c7b\u4e0b\u9500\u91cfTOP10\u5e97\u94fa"]],null,[[null,"platformChange"],[null,"categoryChange"],[null,"chagned"]],function(t,a,n){var l=!0,o=t.component;return"platformChange"===a&&(l=!1!==(o.countParam.platform=n)&&l),"categoryChange"===a&&(l=!1!==(o.countParam.sCat1Name=n)&&l),"chagned"===a&&(l=!1!==o.doQuery(e.bb(t,10))&&l),l},s.b,s.a)),e.Qa(8,114688,null,0,h.a,[p.a],{title:[0,"title"],category:[1,"category"],platform:[2,"platform"],loading:[3,"loading"]},{categoryChange:"categoryChange",platformChange:"platformChange",chagned:"chagned"}),(t()(),e.Ra(9,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(10,114688,[["countTable",4]],0,f.a,[],{hideOnSinglePage:[0,"hideOnSinglePage"],columns:[1,"columns"],queryDataService:[2,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,2,0,n.dateRange),t(a,4,0,"\u5404\u54c1\u7c7b\u4e0b\u9500\u552e\u989dTOP10\u5e97\u94fa",n.volumeParam.sCat1Name,n.volumeParam.platform,n.loading),t(a,6,0,!0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn),t(a,8,0,"\u5404\u54c1\u7c7b\u4e0b\u9500\u91cfTOP10\u5e97\u94fa",n.countParam.sCat1Name,n.countParam.platform,n.loading2),t(a,10,0,!0,n.slaesCountConfigs,n.getSlaesCountTableDataFn)},null)}var I=e.Na("app-category-top-shop",z,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-category-top-shop",[],null,null,null,B,F)),e.Qa(1,114688,null,0,z,[L],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),W=n("Ip0R"),G=n("gIcY"),K=n("d5Ni"),H=n("M2Lx"),X=n("tn8F"),J=n("eDkP"),_=n("Fzqc"),U=n("4c35"),$=n("dWZg"),tt=n("qAlS"),at=n("PCNd"),nt=n("ZYCi"),et=function(){};n.d(a,"CategoryAnalysisModuleNgFactory",function(){return lt});var lt=e.Oa(l,[],function(t){return e.Ya([e.Za(512,e.j,e.Ca,[[8,[o.A,o.B,o.C,o.D,o.E,o.F,o.G,r.a,P,V,E,I]],[3,e.j],e.w]),e.Za(4608,W.o,W.n,[e.t,[2,W.A]]),e.Za(4608,G.d,G.d,[]),e.Za(4608,G.q,G.q,[]),e.Za(4608,q.l,q.r,[W.d,e.A,q.p]),e.Za(4608,q.s,q.s,[q.l,q.q]),e.Za(5120,q.a,function(t){return[t,new K.a]},[q.s]),e.Za(4608,q.o,q.o,[]),e.Za(6144,q.m,null,[q.o]),e.Za(4608,q.k,q.k,[q.m]),e.Za(6144,q.b,null,[q.k]),e.Za(4608,q.g,q.n,[q.b,e.q]),e.Za(4608,q.c,q.c,[q.g]),e.Za(4608,H.c,H.c,[]),e.Za(5120,X.Ad,X.Cd,[[3,X.Ad],X.Bd]),e.Za(4608,W.e,W.e,[e.t]),e.Za(5120,X.ac,X.zc,[[3,X.ac],X.pd,X.Ad,W.e]),e.Za(4608,J.d,J.d,[J.k,J.f,e.j,J.i,J.g,e.q,e.y,W.d,_.b]),e.Za(5120,J.l,J.m,[J.d]),e.Za(5120,X.L,X.M,[W.d,[3,X.L]]),e.Za(4608,X.Y,X.Y,[]),e.Za(4608,X.Ta,X.Ta,[]),e.Za(4608,X.Zc,X.Zc,[J.d,e.q,e.j,e.g]),e.Za(4608,X.fd,X.fd,[J.d,e.q,e.j,e.g]),e.Za(4608,X.md,X.md,[[3,X.md]]),e.Za(4608,X.od,X.od,[J.d,X.Ad,X.md]),e.Za(1073742336,W.c,W.c,[]),e.Za(1073742336,G.o,G.o,[]),e.Za(1073742336,G.n,G.n,[]),e.Za(1073742336,G.f,G.f,[]),e.Za(1073742336,q.e,q.e,[]),e.Za(1073742336,q.d,q.d,[]),e.Za(1073742336,H.d,H.d,[]),e.Za(1073742336,X.e,X.e,[]),e.Za(1073742336,X.Fd,X.Fd,[]),e.Za(1073742336,X.Ed,X.Ed,[]),e.Za(1073742336,X.Hd,X.Hd,[]),e.Za(1073742336,_.a,_.a,[]),e.Za(1073742336,U.c,U.c,[]),e.Za(1073742336,$.b,$.b,[]),e.Za(1073742336,tt.a,tt.a,[]),e.Za(1073742336,J.h,J.h,[]),e.Za(1073742336,X.h,X.h,[]),e.Za(1073742336,X.ab,X.ab,[]),e.Za(1073742336,X.r,X.r,[]),e.Za(1073742336,X.w,X.w,[]),e.Za(1073742336,X.y,X.y,[]),e.Za(1073742336,X.H,X.H,[]),e.Za(1073742336,X.O,X.O,[]),e.Za(1073742336,X.J,X.J,[]),e.Za(1073742336,X.Q,X.Q,[]),e.Za(1073742336,X.S,X.S,[]),e.Za(1073742336,X.Z,X.Z,[]),e.Za(1073742336,X.Da,X.Da,[]),e.Za(1073742336,X.Fa,X.Fa,[]),e.Za(1073742336,X.Ia,X.Ia,[]),e.Za(1073742336,X.La,X.La,[]),e.Za(1073742336,X.Pa,X.Pa,[]),e.Za(1073742336,X.Ya,X.Ya,[]),e.Za(1073742336,X.Ra,X.Ra,[]),e.Za(1073742336,X.cb,X.cb,[]),e.Za(1073742336,X.eb,X.eb,[]),e.Za(1073742336,X.gb,X.gb,[]),e.Za(1073742336,X.ib,X.ib,[]),e.Za(1073742336,X.kb,X.kb,[]),e.Za(1073742336,X.mb,X.mb,[]),e.Za(1073742336,X.tb,X.tb,[]),e.Za(1073742336,X.yb,X.yb,[]),e.Za(1073742336,X.Bb,X.Bb,[]),e.Za(1073742336,X.Eb,X.Eb,[]),e.Za(1073742336,X.Ib,X.Ib,[]),e.Za(1073742336,X.Mb,X.Mb,[]),e.Za(1073742336,X.Ob,X.Ob,[]),e.Za(1073742336,X.Rb,X.Rb,[]),e.Za(1073742336,X.bc,X.bc,[]),e.Za(1073742336,X.Zb,X.Zb,[]),e.Za(1073742336,X.vc,X.vc,[]),e.Za(1073742336,X.xc,X.xc,[]),e.Za(1073742336,X.Gc,X.Gc,[]),e.Za(1073742336,X.Kc,X.Kc,[]),e.Za(1073742336,X.Oc,X.Oc,[]),e.Za(1073742336,X.Sc,X.Sc,[]),e.Za(1073742336,X.Uc,X.Uc,[]),e.Za(1073742336,X.ad,X.ad,[]),e.Za(1073742336,X.gd,X.gd,[]),e.Za(1073742336,X.id,X.id,[]),e.Za(1073742336,X.kd,X.kd,[]),e.Za(1073742336,X.qd,X.qd,[]),e.Za(1073742336,X.sd,X.sd,[]),e.Za(1073742336,X.ud,X.ud,[]),e.Za(1073742336,X.yd,X.yd,[]),e.Za(1073742336,X.b,X.b,[]),e.Za(1073742336,at.a,at.a,[]),e.Za(1073742336,nt.m,nt.m,[[2,nt.s],[2,nt.k]]),e.Za(1073742336,et,et,[]),e.Za(1073742336,l,l,[]),e.Za(256,q.p,"XSRF-TOKEN",[]),e.Za(256,q.q,"X-XSRF-TOKEN",[]),e.Za(256,X.Bd,!1,[]),e.Za(256,X.pd,void 0,[]),e.Za(256,X.Wc,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.Za(256,X.dd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.Za(256,X.a,at.b,[]),e.Za(1024,nt.i,function(){return[[{path:"",redirectTo:"whole"},{path:"whole",component:w},{path:"subdivision",component:O},{path:"category-area",component:j},{path:"category-top-shop",component:z}]]},[])])})}}]);