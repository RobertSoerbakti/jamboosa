webpackJsonp([4],{"7zck":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"App",attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]},o=e("VU/8")({name:"App"},u,!1,null,null,null).exports,i=e("/ocq");n.default.use(i.a);var r=new i.a({mode:"history",base:"/jamboosa/",routes:[{path:"/",name:"home",component:function(){return e.e(2).then(e.bind(null,"EOfN"))}},{name:"Login",path:"/login",component:function(){return e.e(1).then(e.bind(null,"mJTh"))}},{name:"Player",path:"/player",component:function(){return e.e(0).then(e.bind(null,"B90M"))}}]}),l=e("3EgV"),c=e.n(l),s=e("NYxO"),E=e("mtWM"),_=e.n(E).a.create({baseURL:"https://api.gdriveplayer.us/"}),T=e("424j");n.default.use(s.a);var S=new s.a.Store({state:{FirstData:null,LabelMovie:null,LoaderDt:!1,ValSearch:null,PlayerStat:!1,PlayerData:null},mutations:{MutFirstData:function(t,a){t.FirstData=a},MutLabelMovie:function(t,a){t.LabelMovie=a},MutLoaderDt:function(t,a){t.LoaderDt=a},MutValSearch:function(t,a){t.ValSearch=a},MutPlayerStat:function(t,a){t.PlayerStat=a},MutPlayerData:function(t,a){t.PlayerData=a}},actions:{SET_LOADER_TO_FALSE:function(t){var a=t.commit;setTimeout(function(){a("MutLoaderDt",!1)},2100)},SET_STATE_ON_PLAYER_TO_DEFAULT:function(t){var a=t.commit;a("MutPlayerData",null),a("MutPlayerStat",!1)},GET_FIRSTDATA:function(t,a){var e=t.commit,n=t.dispatch;e("MutLabelMovie","Newest Movies"),n("SET_STATE_ON_PLAYER_TO_DEFAULT"),_({method:"GET",url:"v1/movie/newest?limit=25&page="+a}).then(function(t){200===t.status&&null!==t.data?(e("MutFirstData",t),n("SET_LOADER_TO_FALSE")):(e("MutFirstData","NFD"),n("SET_LOADER_TO_FALSE"))}).catch(function(t){console.log(t),e("MutFirstData","NFD"),n("SET_LOADER_TO_FALSE")})},GET_SEARCH_MOVIE:function(t,a){var e=t.commit,n=t.dispatch;e("MutLabelMovie","Search Result"),n("SET_STATE_ON_PLAYER_TO_DEFAULT"),_({method:"GET",url:"v1/movie/search?title="+a+"&limit=200"}).then(function(t){200===t.status&null!==t.data?(e("MutFirstData",t),n("SET_LOADER_TO_FALSE")):(e("MutFirstData","NFM"),n("SET_LOADER_TO_FALSE"))}).catch(function(t){console.log(t),e("MutFirstData","NFM"),n("SET_LOADER_TO_FALSE")})},GET_PLAYER_DATA:function(t,a){var e=t.commit,n=t.dispatch;e("MutLabelMovie","Stream Movie"),_({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://api.gdriveplayer.us/v1/imdb/"+a,crossdomain:!0}).then(function(t){200===t.status&null!==t.data?(e("MutPlayerData",t),n("SET_LOADER_TO_FALSE")):(e("MutPlayerData","NTW"),n("SET_LOADER_TO_FALSE"))}).catch(function(t){console.log(t),e("MutFirstData","NTW"),n("SET_LOADER_TO_FALSE")})}},getters:{},plugins:[Object(T.a)()]});e("csSS"),e("gJtD"),e("ao2D"),e("7zck");n.default.config.productionTip=!1,n.default.use(c.a);var D=new c.a({theme:{}});new n.default({el:"#app",router:r,vuetify:D,store:S,render:function(t){return t(o)}})},ao2D:function(t,a){},csSS:function(t,a){},gJtD:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.c7a38c9a79e68165a870.js.map