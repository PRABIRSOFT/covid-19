(function(t){function e(e){for(var r,i,s=e[0],p=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var p=n[s];0!==a[p]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/covid-19/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=p;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",{staticClass:"display-1"},[t._v("COVID-19 India")])],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("router-view")],1)],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,p=n("2877"),c=n("6544"),u=n.n(c),l=n("7496"),d=n("40dc"),f=n("a523"),h=n("a75b"),v=n("2a7f"),b=Object(p["a"])(s,a,o,!1,null,null,null),m=b.exports;u()(b,{VApp:l["a"],VAppBar:d["a"],VContainer:f["a"],VContent:h["a"],VToolbarTitle:v["a"]});var g=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MapView")},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map"}})},O=[],j=(n("4160"),n("d81d"),n("fb6a"),n("159b"),n("96cf"),n("1da1")),_=n("bc3a"),I=n.n(_),k=function(){return I.a.create({baseURL:"https://cov-19-ind.twogp.com/"})};function M(){return k().get("get_live_data")}var L={name:"MapView",data:function(){return{}},mounted:function(){this.mapboxgl.accessToken="pk.eyJ1IjoicHJhYmlyIiwiYSI6ImNrOG16OHdxYzA2dGMzZ3BpaWFpdjZ1dmIifQ.InlqukfNIviSi3m7cOjG1Q",this.map=new this.mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[78.9629,20.5937],zoom:3.5}),this.popup=new this.mapboxgl.Popup({closeButton:!1,closeOnClick:!1}),this.map.getCanvas().style.cursor="pointer",this.load()},methods:{load:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:n=e.sent,t.map.addSource("points",{type:"geojson",data:n.data["data"]}),r=["interpolate",["linear"],["get","proba"]],a=["rgb(0, 255, 0)","rgb(255, 0, 0)"],n.data.cat.forEach((function(t,e){r.push(t),r.push(a[e])})),t.showLayer(r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),alert("Upps Broken",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},showLayer:function(t){var e=this;this.map.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-color":t}}),this.map.on("mouseenter","points",(function(t){var n=t.features[0].geometry.coordinates.slice(),r=t.features[0].properties.state,a=t.features[0].properties.total_cases,o=t.features[0].properties.active,i=t.features[0].properties.deaths;while(Math.abs(t.lngLat.lng-n[0])>180)n[0]+=t.lngLat.lng>n[0]?360:-360;e.popup.setLngLat(n).setHTML('\n          <table>\n            <tr><td class="font-weight-bold">State</td><td class="font-weight-bold">'+r+'</td></tr>\n            <tr><td>Total Cases</td><td class="font-weight-bold">'+parseInt(a)+'</td></tr>\n            <tr><td>Active Cases</td><td class="font-weight-bold">'+parseInt(o)+'</td></tr>\n            <tr><td>Deaths</td><td class="font-weight-bold red--text">'+parseInt(i)+"</td></tr>\n          </table>\n          ").addTo(e.map)})),this.map.on("mouseleave","points",(function(){e.popup.remove()}))}}},S=L,T=(n("8ff2"),Object(p["a"])(S,x,O,!1,null,null,null)),V=T.exports,C={name:"Home",components:{MapView:V}},P=C,A=Object(p["a"])(P,y,w,!1,null,null,null),H=A.exports;r["a"].use(g["a"]);var B=[{path:"/",name:"Home",component:H}],E=new g["a"]({mode:"history",base:"/covid-19/",routes:B}),J=E,$=n("f309");r["a"].use($["a"]);var z=new $["a"]({});n("ac6d");r["a"].config.productionTip=!1,r["a"].use({install:function(t){var e=n("e192");t.prototype.mapboxgl=e}}),new r["a"]({router:J,vuetify:z,render:function(t){return t(m)}}).$mount("#app")},"8ff2":function(t,e,n){"use strict";var r=n("f337"),a=n.n(r);a.a},f337:function(t,e,n){}});
//# sourceMappingURL=app.baccc7de.js.map