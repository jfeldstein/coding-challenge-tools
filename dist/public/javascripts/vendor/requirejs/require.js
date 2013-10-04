var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,i){(n||!hasProp(e,i))&&(r&&"string"!=typeof t?(e[i]||(e[i]={}),mixin(e[i],t,n,r)):e[i]=t)}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function t(e){var t,n;for(t=0;e[t];t+=1)if(n=e[t],"."===n)e.splice(t,1),t-=1;else if(".."===n){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}function n(e,n,r){var i,o,s,a,u,c,l,p,f,d,h,g=n&&n.split("/"),m=g,y=k.map,v=y&&y["*"];if(e&&"."===e.charAt(0)&&(n?(m=getOwn(k.pkgs,n)?g=[n]:g.slice(0,g.length-1),e=m.concat(e.split("/")),t(e),o=getOwn(k.pkgs,i=e[0]),e=e.join("/"),o&&e===i+"/"+o.main&&(e=i)):0===e.indexOf("./")&&(e=e.substring(2))),r&&y&&(g||v)){for(a=e.split("/"),u=a.length;u>0;u-=1){if(l=a.slice(0,u).join("/"),g)for(c=g.length;c>0;c-=1)if(s=getOwn(y,g.slice(0,c).join("/")),s&&(s=getOwn(s,l))){p=s,f=u;break}if(p)break;!d&&v&&getOwn(v,l)&&(d=getOwn(v,l),h=u)}!p&&d&&(p=d,f=h),p&&(a.splice(0,f,p),e=a.join("/"))}return e}function r(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===b.contextName?(t.parentNode.removeChild(t),!0):void 0})}function i(e){var t=getOwn(k.paths,e);return t&&isArray(t)&&t.length>1?(r(e),t.shift(),b.require.undef(e),b.require([e]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function s(e,t,r,i){var s,a,u,c,l=null,p=t?t.name:null,f=e,d=!0,h="";return e||(d=!1,e="_@r"+(A+=1)),c=o(e),l=c[0],e=c[1],l&&(l=n(l,p,i),a=getOwn(q,l)),e&&(l?h=a&&a.normalize?a.normalize(e,function(e){return n(e,p,i)}):n(e,p,i):(h=n(e,p,i),c=o(h),l=c[0],h=c[1],r=!0,s=b.nameToUrl(h))),u=!l||a||r?"":"_unnormalized"+(D+=1),{prefix:l,name:h,parentMap:t,unnormalized:!!u,url:s,originalName:f,isDefine:d,id:(l?l+"!"+h:h)+u}}function a(e){var t=e.id,n=getOwn(C,t);return n||(n=C[t]=new b.Module(e)),n}function u(e,t,n){var r=e.id,i=getOwn(C,r);!hasProp(q,r)||i&&!i.defineEmitComplete?(i=a(e),i.error&&"error"===t?n(i.error):i.on(t,n)):"defined"===t&&n(q[r])}function c(e,t){var n=e.requireModules,r=!1;t?t(e):(each(n,function(t){var n=getOwn(C,t);n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function l(){globalDefQueue.length&&(apsp.apply(N,[N.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function p(e){delete C[e],delete E[e]}function f(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var o=r.id,s=getOwn(C,o);!s||e.depMatched[i]||n[o]||(getOwn(t,o)?(e.defineDep(i,q[o]),e.check()):f(s,t,n))}),n[r]=!0)}function d(){var e,t,n,o,s=1e3*k.waitSeconds,a=s&&b.startTime+s<(new Date).getTime(),u=[],l=[],p=!1,h=!0;if(!v){if(v=!0,eachProp(E,function(n){if(e=n.map,t=e.id,n.enabled&&(e.isDefine||l.push(n),!n.error))if(!n.inited&&a)i(t)?(o=!0,p=!0):(u.push(t),r(t));else if(!n.inited&&n.fetched&&e.isDefine&&(p=!0,!e.prefix))return h=!1}),a&&u.length)return n=makeError("timeout","Load timeout for modules: "+u,null,u),n.contextName=b.contextName,c(n);h&&each(l,function(e){f(e,{},{})}),a&&!o||!p||!isBrowser&&!isWebWorker||T||(T=setTimeout(function(){T=0,d()},50)),v=!1}}function h(e){hasProp(q,e[0])||a(s(e[0],null,!0)).init(e[1],e[2])}function g(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function m(e){var t=e.currentTarget||e.srcElement;return g(t,b.onScriptLoad,"load","onreadystatechange"),g(t,b.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function y(){var e;for(l();N.length;){if(e=N.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var v,x,b,w,T,k={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},C={},E={},S={},N=[],q={},j={},A=1,D=1;return w={require:function(e){return e.require?e.require:e.require=b.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?e.exports:e.exports=q[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){var t,n=getOwn(k.pkgs,e.map.id);return t=n?getOwn(k.config,e.map.id+"/"+n.main):getOwn(k.config,e.map.id),t||{}},exports:q[e.map.id]}}},x=function(e){this.events=getOwn(S,e.id)||{},this.map=e,this.shim=getOwn(k.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,n,r){r=r||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,b.startTime=(new Date).getTime();var e=this.map;return this.shim?(b.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})),void 0):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;j[e]||(j[e]=!0,b.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id,r=this.depExports,exports=this.exports,i=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(i)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{exports=b.execCb(n,i,r,exports)}catch(o){e=o}else exports=b.execCb(n,i,r,exports);if(this.map.isDefine&&(t=this.module,t&&void 0!==t.exports&&t.exports!==this.exports?exports=t.exports:void 0===exports&&this.usingExports&&(exports=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else exports=i;this.exports=exports,this.map.isDefine&&!this.ignore&&(q[n]=exports,req.onResourceLoad&&req.onResourceLoad(b,this.map,this.depMaps)),p(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=s(e.prefix);this.depMaps.push(r),u(r,"defined",bind(this,function(r){var i,o,l,f=this.map.name,d=this.map.parentMap?this.map.parentMap.name:null,h=b.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(f=r.normalize(f,function(e){return n(e,d,!0)})||""),o=s(e.prefix+"!"+f,this.map.parentMap),u(o,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),l=getOwn(C,o.id),l&&(this.depMaps.push(o),this.events.error&&l.on("error",bind(this,function(e){this.emit("error",e)})),l.enable()),void 0):(i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(C,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&p(e.map.id)}),c(e)}),i.fromText=bind(this,function(n,r){var o=e.name,u=s(o),l=useInteractive;r&&(n=r),l&&(useInteractive=!1),a(u),hasProp(k.config,t)&&(k.config[o]=k.config[t]);try{req.exec(n)}catch(p){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+p,p,[t]))}l&&(useInteractive=!0),this.depMaps.push(u),b.completeLoad(o),h([o],i)}),r.load(e.name,h,i,k),void 0)})),b.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){E[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,r,i;if("string"==typeof e){if(e=s(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,i=getOwn(w,e.id))return this.depExports[t]=i(this),void 0;this.depCount+=1,u(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&u(e,"error",bind(this,this.errback))}n=e.id,r=C[n],hasProp(w,n)||!r||r.enabled||b.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(C,e.id);t&&!t.enabled&&b.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},b={config:k,contextName:e,registry:C,defined:q,urlFetched:j,defQueue:N,Module:x,makeModuleMap:s,nextTick:req.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=k.pkgs,n=k.shim,r={paths:!0,config:!0,map:!0};eachProp(e,function(e,t){r[t]?"map"===t?(k.map||(k.map={}),mixin(k[t],e,!0,!0)):mixin(k[t],e,!0):k[t]=e}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=b.makeShimExports(e)),n[t]=e}),k.shim=n),e.packages&&(each(e.packages,function(e){var n;e="string"==typeof e?{name:e}:e,n=e.location,t[e.name]={name:e.name,location:n||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),k.pkgs=t),eachProp(C,function(e,t){e.inited||e.map.unnormalized||(e.map=s(t))}),(e.deps||e.callback)&&b.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,r){function i(n,o,u){var l,p,f;return r.enableBuildCallback&&o&&isFunction(o)&&(o.__requireJsBuild=!0),"string"==typeof n?isFunction(o)?c(makeError("requireargs","Invalid require call"),u):t&&hasProp(w,n)?w[n](C[t.id]):req.get?req.get(b,n,t,i):(p=s(n,t,!1,!0),l=p.id,hasProp(q,l)?q[l]:c(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(y(),b.nextTick(function(){y(),f=a(s(null,t)),f.skipMap=r.skipMap,f.init(n,o,u,{enabled:!0}),d()}),i)}return r=r||{},mixin(i,{isBrowser:isBrowser,toUrl:function(e){var r,i=e.lastIndexOf("."),o=e.split("/")[0],s="."===o||".."===o;return-1!==i&&(!s||i>1)&&(r=e.substring(i,e.length),e=e.substring(0,i)),b.nameToUrl(n(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(q,s(e,t,!1,!0).id)},specified:function(e){return e=s(e,t,!1,!0).id,hasProp(q,e)||hasProp(C,e)}}),t||(i.undef=function(e){l();var n=s(e,t,!0),r=getOwn(C,e);delete q[e],delete j[n.url],delete S[e],r&&(r.events.defined&&(S[e]=r.events),p(e))}),i},enable:function(e){var t=getOwn(C,e.id);t&&a(e).enable()},completeLoad:function(e){var t,n,r,o=getOwn(k.shim,e)||{},s=o.exports;for(l();N.length;){if(n=N.shift(),null===n[0]){if(n[0]=e,t)break;t=!0}else n[0]===e&&(t=!0);h(n)}if(r=getOwn(C,e),!t&&!hasProp(q,e)&&r&&!r.inited){if(!(!k.enforceDefine||s&&getGlobal(s)))return i(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,o.deps||[],o.exportsFn])}d()},nameToUrl:function(e,t,n){var r,i,o,s,a,u,c,l,p;if(req.jsExtRegExp.test(e))l=e+(t||"");else{for(r=k.paths,i=k.pkgs,a=e.split("/"),u=a.length;u>0;u-=1){if(c=a.slice(0,u).join("/"),o=getOwn(i,c),p=getOwn(r,c)){isArray(p)&&(p=p[0]),a.splice(0,u,p);break}if(o){s=e===o.name?o.location+"/"+o.main:o.location,a.splice(0,u,s);break}}l=a.join("/"),l+=t||(/\?/.test(l)||n?"":".js"),l=("/"===l.charAt(0)||l.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+l}return k.urlArgs?l+((-1===l.indexOf("?")?"?":"&")+k.urlArgs):l},load:function(e,t){req.load(b,e,t)},execCb:function(e,t,n,exports){return t.apply(exports,n)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=m(e);b.completeLoad(t.id)}},onScriptError:function(e){var t=m(e);return i(t.id)?void 0:c(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},b.require=b.makeRequire(),b}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.8",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||!navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,n,r){var i,o,s=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=n,n=r):e=[]),o&&o.context&&(s=o.context),i=getOwn(contexts,s),i||(i=contexts[s]=req.s.newContext(s)),o&&i.configure(o),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e){var t=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return t.type=e.scriptType||"text/javascript",t.charset="utf-8",t.async=!0,t},req.load=function(e,t,n){var r,i=e&&e.config||{};if(isBrowser)return r=req.createNode(i,t,n),r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=n,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{importScripts(n),e.completeLoad(t)}catch(o){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,o,[t]))}},isBrowser&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,t,n){var r,i;"string"!=typeof e&&(n=t,t=e,e=null),isArray(t)||(n=t,t=null),!t&&isFunction(n)&&(t=[],n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),(i?i.defQueue:globalDefQueue).push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this);