(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"56b4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",[n("q-page-container",[n("q-page",{staticClass:"flex bg-image flex-center"},[n("q-card",{staticClass:"q-mt-md q-mb-md",staticStyle:{opacity:"0.9"},style:e.$q.screen.lt.sm?{width:"85%"}:{width:"75%"}},[n("div",{staticClass:"q-mt-sm"},[n("q-card-section",[n("img",{staticClass:"absolute-center shadow-10",attrs:{src:r("cf05"),width:"100",height:"100"}})])],1),n("q-card-section",[n("div",{staticClass:"text-center q-pt-lg"},[n("div",{staticClass:"col text-h6 ellipsis"},[e._v("Registrate")])])]),n("q-card-section",[n("q-form",{ref:"formRegister",staticClass:"q-pa-md",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[n("q-select",{attrs:{filled:"",options:e.options,label:"que quieres hacer",rules:e.rules.required},model:{value:e.rol,callback:function(t){e.rol=t},expression:"rol"}}),n("q-input",{staticClass:"text-lowercase",attrs:{filled:"",label:"Nombres","lazy-rules":"",rules:e.rules.required},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("q-input",{staticClass:"text-lowercase",attrs:{filled:"",label:"Apellidos","lazy-rules":"",rules:e.rules.required},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),n("q-input",{ref:"dui",attrs:{filled:"",label:"dui / sin guión","lazy-rules":"",rules:e.rules.requiredDui,mask:"#########"},model:{value:e.dui,callback:function(t){e.dui=t},expression:"dui"}}),n("q-input",{attrs:{filled:"",label:"nit / sin guiones","lazy-rules":"",rules:e.rules.requiredNit,mask:"##############"},model:{value:e.nit,callback:function(t){e.nit=t},expression:"nit"}}),n("q-input",{attrs:{filled:"",label:"telefono / sin guión","lazy-rules":"",rules:e.rules.required,mask:"########"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("q-input",{ref:"correo",staticClass:"text-lowercase",attrs:{filled:"",type:"email",label:"correo","lazy-rules":"",rules:e.rules.requiredEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{attrs:{type:"password",filled:"",label:"contraseña","lazy-rules":"",rules:e.rules.requiredPaswword},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 text-center"},[n("q-btn",{attrs:{label:"Registrarse",type:"submit",color:"positive"}})],1),n("div",{staticClass:"col-6"},[n("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Login",to:"/Login",color:"secondary"}})],1)])],1)],1)],1)],1)],1)],1)},a=[],s=r("c973"),i=r.n(s),o=(r("b0c0"),r("96cf"),r("c24f")),u={data:function(){return{rol:null,options:[{label:"Vender",value:"2"},{label:"Comprar",value:"3"}],name:"",lastName:"",email:"",password:"",dui:"",nit:"",phone:"",rules:{required:[function(e){return!!e||"Campo Requerido."}],requiredDui:[function(e){return!!e||"Campo Requerido."},function(e){return e&&9==e.length||"Dui debe tener 9 caracteres"}],requiredNit:[function(e){return!!e||"Campo Requerido."},function(e){return e&&14==e.length||"Nit debe tener 14 caracteres"}],requiredPaswword:[function(e){return!!e||"Campo Requerido."},function(e){return e&&e.length>=6||"Contraseña debe al menos 6 caracteres"}],requiredNumber:[function(e){return null!==e&&""!==e||"Please type your age"},function(e){return e>0&&e<100||"Please type a real age"}],requiredEmail:[function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Correo requerido"}]}}},mounted:function(){return i()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{},methods:{register:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.formRegister.validate();case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,e.$q.loading.show(),t.next=9,o["a"].isDui(e.dui);case 9:if(n=t.sent,n.isValid){t.next=15;break}return e.$q.notify({type:"negative",position:"center",message:"Dui Invalido"}),e.$refs.dui.focus(),e.$q.loading.hide(),t.abrupt("return");case 15:return t.next=17,o["a"].userExistsEmail(e.email);case 17:if(a=t.sent,console.log(a),!a){t.next=24;break}return e.$q.notify({type:"warning",position:"center",message:"Correo electronico ingresado, ya esta registrado..."}),e.$refs.correo.focus(),e.$q.loading.hide(),t.abrupt("return");case 24:return t.next=26,o["a"].addUser({idRol:e.rol.value,nombreCompleto:e.name+" "+e.lastName,nombres:e.name,apellidos:e.lastName,dui:e.dui,nit:e.nit,telefonoContacto:e.phone,correoElectronico:e.email,contrasena:e.password});case 26:e.$q.notify({type:"positive",position:"center",message:"Gracias por Registrarte, Por Favor Inicia Sesión...",actions:[{icon:"close",color:"white"}]}),setTimeout((function(){e.$router.push({path:"/Login"}).catch((function(e){console.log(e)}))}),3e3),t.next=34;break;case 30:t.prev=30,t.t0=t["catch"](5),console.log(t.t0),e.$q.notify({type:"negative",position:"center",message:"Error Interno, Intente mas Tarde",actions:[{icon:"close",color:"white"}]});case 34:return t.prev=34,e.$q.loading.hide(),t.finish(34);case 37:case"end":return t.stop()}}),t,null,[[5,30,34,37]])})))()},isValidEmail:function(e){var t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Email invalido"}}},c=u,l=(r("ac59"),r("42e1")),p=r("4d5a"),d=r("09e3"),m=r("9989"),f=r("f09f"),g=r("a370"),h=r("cb32"),b=r("0378"),w=r("ddd8"),v=r("27f9"),q=r("9c40"),x=r("eebe"),y=r.n(x),R=Object(l["a"])(c,n,a,!1,null,null,null);t["default"]=R.exports;y()(R,"components",{QLayout:p["a"],QPageContainer:d["a"],QPage:m["a"],QCard:f["a"],QCardSection:g["a"],QAvatar:h["a"],QForm:b["a"],QSelect:w["a"],QInput:v["a"],QBtn:q["a"]})},ac59:function(e,t,r){"use strict";r("c10c")},c10c:function(e,t,r){},c24f:function(e,t,r){"use strict";var n=r("ded3"),a=r.n(n),s=r("c973"),i=r.n(s),o=(r("96cf"),r("758b")),u=r("bc3a"),c=r.n(u);function l(e){return p.apply(this,arguments)}function p(){return p=i()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://api-validar-dui.herokuapp.com/api/dui/".concat(encodeURIComponent(t)));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var d={isDui:l};function m(){return f.apply(this,arguments)}function f(){return f=i()(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get("/Users/GetUsers");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return h=i()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get("/Users/UserExistsEmail?email=".concat(encodeURIComponent(t)));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return w=i()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].post("/Users/AddUser",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function v(e,t){return q.apply(this,arguments)}function q(){return q=i()(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].put("/Users/UpdateUser/".concat(encodeURIComponent(t)),r);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return y=i()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].put("/Users/UpdatePassword",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function R(e){return C.apply(this,arguments)}function C(){return C=i()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].delete("/Users/DeleteUser/".concat(encodeURIComponent(t)));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}t["a"]=a()({getUsers:m,addUser:b,updateUser:v,deleteUser:R,userExistsEmail:g,updatePassword:x},d)},cf05:function(e,t,r){e.exports=r.p+"img/logo.d97f1bb5.png"}}]);