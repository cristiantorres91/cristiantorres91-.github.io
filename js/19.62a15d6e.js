(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"3c37":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm"},[a("card-social")],1)},n=[],i=(a("e6cf"),a("d3b7"),a("3ca3"),a("e260"),a("ddb0"),a("ce44")),r={name:"Estadisticas",components:{IEcharts:i["a"],CardSocial:function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"6929"))}},data:function(){return{slide:1}},computed:{getSalesOptions:function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"2%",right:"2%",top:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}],yAxis:[{type:"value",splitLine:{show:!1}}],series:[{name:"Fashions",type:"bar",data:[40,45,27,50,32,50,70,30,30,40,67,29],color:"#546bfa"},{name:"Electronics",type:"bar",data:[124,100,20,120,117,70,110,90,50,90,20,50],color:"#3a9688"},{name:"Toys",type:"bar",data:[17,2,0,29,20,10,23,0,8,20,11,30],color:"#02a9f4"},{name:"Vouchers",type:"bar",data:[20,100,80,14,90,86,100,70,120,50,30,60],color:"#f88c2b"}]}},getPieOptions:function(){return{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{bottom:10,left:"center",data:["Fashions","Electronics","Toys","Vouchers"]},series:[{name:"Sales",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!1,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:335,name:"Fashions",itemStyle:{color:"#546bfa"}},{value:310,name:"Electronics",itemStyle:{color:"#3a9688"}},{value:234,name:"Toys",itemStyle:{color:"#02a9f4"}},{value:135,name:"Vouchers",itemStyle:{color:"#f88c2b"}}]}]}}},methods:{getColor:function(e){return e>70&&e<=100?"green":e>50&&e<=70?"blue":"red"},getChipColor:function(e){return"Canceled"==e?"negative":"Sent"==e?"positive":"Pending"==e?"warning":"Paid"==e?"info":"dark"}}},s=r,l=a("42e1"),c=a("9989"),u=a("eebe"),d=a.n(u),p=Object(l["a"])(s,o,n,!1,null,"3b55d287",null);t["default"]=p.exports;d()(p,"components",{QPage:c["a"]})}}]);