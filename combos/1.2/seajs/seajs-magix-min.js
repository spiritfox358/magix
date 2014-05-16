(function(e,t,r,n,i,a,o){o=0,a=function(e){return e.id||(e.id="mx_n_"+ ++o)},i("magix/magix",function(){var r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,i=/\/[^\/]*$/,a=/[#?].*$/,o="",s=/([^=&?\/#]+)=?([^&=#?]*)/g,c=/^https?:\/\//i,u=0,f="/",m="vframe",v=t.console,h=v&&v.error,l=function(){},d={tagName:m,rootId:"magix_vf_root",coded:1,error:function(e){h&&v.error(e)}},g=d.hasOwnProperty,p=function(e,t){return e&&g.call(e,t)},x=function(t){return function(r,n,i){switch(arguments.length){case 0:i=t;break;case 1:i=P._o(r)?b(t,r):p(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],i=n):t[r]=i=n}return i}},y=function(e,t){return t.f-e.f||t.t-e.t},w=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new w(e,t),r},b=function(e,t,r){for(var n in t)r&&p(r,n)||(e[n]=t[n]);return e};b(w.prototype,{get:function(e){var t,r=this,i=r.c;return e=n+e,p(i,e)&&(t=i[e],t.f>=1&&(t.f++,t.t=u++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var i=this,a=i.c,o=n+e,s=a[o];if(!p(a,o)){if(a.length>=i.b){a.sort(y);for(var c=i.b-i.x;c--;)s=a.pop(),delete a[s.k],s.m&&_(s.m,s.o,s)}s={},a.push(s),a[o]=s}return s.o=e,s.k=o,s.v=t,s.f=1,s.t=u++,s.m=r,t},del:function(e){e=n+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=o,delete t[e],r.m&&(_(r.m,r.o,r),r.m=o))},has:function(e){return p(this.c,n+e)}});var M=w(40),C=w(),_=function(e,t,r,n,i,a){for(P._a(e)||(e=[e]),t&&(P._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){d.error(o)}return i},P={mix:b,has:p,tryCall:_,noop:l,config:x(d),start:function(e){var t=this;b(d,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,i){d=b(d,i,e),d["!tnc"]=d.tagName!=m,r.on("!ul",n.loc),r.on("changed",n.loc),t.use(d.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)p(e,r)&&t.push(r);return t},local:x({}),path:function(e,t){var s=e+n+t,u=C.get(s);if(!u){if(c.test(t))u=t;else if(e=e.replace(a,o).replace(i,o)+f,t.charAt(0)==f){var m=c.test(e)?8:0,v=e.indexOf(f,m);u=e.substring(0,v)+t}else u=e+t;for(;r.test(u);)u=u.replace(r,"$1/");C.set(s,u)}return u},toObject:function(e){var t=e+n,r=M.get(t);if(!r){r={};var i={},u=o;a.test(e)?u=e.replace(a,o):~e.indexOf("=")||(u=e);var m=e.replace(u,o);if(u&&c.test(u)){var v=u.indexOf(f,8);u=~v?u.substring(v):f}m.replace(s,function(e,t,r){if(d.coded)try{r=decodeURIComponent(r)}catch(n){}i[t]=r}),r.path=u,r.params=i,M.set(t,r)}return r},toUrl:function(e,t,r){var n,i=[];for(var a in t)n=t[a],(!r||n||p(r,a))&&(d.coded&&(n=encodeURIComponent(n)),i.push(a+"="+n));return i.length&&(e+="?"+i.join("&")),e},toMap:function(e,t){var r,n,i,a={};if(P._s(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:w},k=Object.prototype.toString,I=function(){};return b(P,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==k.call(e)},_s:function(e){return"[object String]"==k.call(e)},_n:function(e){return"[object Number]"==k.call(e)},extend:function(e,t,r,n){var i=t.prototype,a=e.prototype;return e.superclass=i,i.constructor=t,I.prototype=i,a=new I,P.mix(a,r),P.mix(e,n),a.constructor=e,e}})}),i("magix/router",["magix/magix","magix/event"],function(e){var r,i,a,o,s,c,u=e("magix/magix"),f=e("magix/event"),m="",v="path",h="view",l=u.has,d=u.mix,g=u.keys,p=u.config(),x=u.cache(),y=u.cache(40),w={params:{},href:m},b=/#.*$/,M=/^[^#]*#?!?/,C="params",_=function(e,t,r){if(e){r=this[C],e=(e+m).split(",");for(var n=0;e.length>n&&!(t=l(r,e[n]));n++);}return t},P=function(){return this[v]},k=function(){return this[h]},I=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},q=function(e){var r=u.toObject(e),n=r[v];return n&&s&&(r[v]=u.path(t.location.pathname,n)),r},V=d({viewInfo:function(e,t){var r,n;if(!i){i={rs:p.routes||{},nf:p.notFound};var a=p.defaultView;i.dv=a;var o=p.defaultPath||m;r=i.rs,i.f=u._f(r),i.f||r[o]||!a||(r[o]=a),i[v]=o}return e||(e=i[v]),r=i.rs,n=i.f?r.call(p,e,t):r[e],{view:n||i.nf||i.dv,path:e}},start:function(){var e=t.history;a=p.edge,o=a&&e.pushState,s=a&&!o,c=o?"srcQuery":"srcHash",o?V.useState():V.useHash(),V.route()},parseQH:function(e,r){e=e||t.location.href;var n=x.get(e);if(!n){var i=e.replace(b,m),o=e.replace(M,m),s=q(i),c=q(o),u={};d(u,s[C]),d(u,c[C]),n={get:I,set:I,href:e,refHref:w.href,srcQuery:i,srcHash:o,query:s,hash:c,params:u},x.set(e,n)}if(r&&!n[h]){var f;f=n.hash[v]||a&&n.query[v];var l=V.viewInfo(f,n);d(n,l)}return n},getChged:function(e,t){var r=e.href,i=t.href,a=r+n+i,o=y.get(a);if(!o){var s,c,u;o={isParam:_,isPath:P,isView:k},o[h]=u,o[v]=u,o[C]={};var f,m,l=e[C],d=t[C],p=[v,h].concat(g(l),g(d));for(f=p.length-1;f>=0;f--)m=p[f],c=(f>1?l:e)[m],u=(f>1?d:t)[m],c!=u&&((f>1?o[C]:o)[m]={from:c,to:u},s=1);o.occur=s,y.set(a,o)}return o},route:function(){var e=V.parseQH(0,1),t=!w.get,n=V.getChged(w,e);w=e,n.occur&&(r=e,V.fire("changed",{location:e,changed:n,force:t}))},navigate:function(e,t,n){if(!t&&u._o(e)&&(t=e,e=m),t&&(e=u.toUrl(e,t)),e){var i=q(e),a={};a[C]=d({},i[C]),a[v]=i[v];var f=r.query[C];if(a[v]){if(s)for(var h in f)l(f,h)&&!l(a[C],h)&&(a[C][h]=m)}else{var g=d({},r[C]);a[C]=d(g,a[C]),a[v]=r[v]}var p,$=u.toUrl(a[v],a[C],f);p=$!=r[c],p&&(o?(V.poped=1,history[n?"replaceState":"pushState"](m,m,$),V.route()):(d(a,r,a),a.srcHash=$,a.hash={params:a[C],path:a[v]},V.fire("!ul",{loc:r=a}),$="#!"+$,n?location.replace($):location.hash=$))}}},f);return V.useState=function(){var e=V,t=location.href;$(WIN).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},V.useHash=function(){$(WIN).on("hashchange",V.route)},V}),i("magix/body",["magix/magix"],function(t){var i,o=t("magix/magix"),s=o.has,c={},u="mx-ei",f="mx-owner",m=r.body,v="parentNode",h={},l="on",d=",",g=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},p=function(){this.prevent(),this.stop()},x=function(){this.prevented=1},y={process:function(t){if(t&&!t[l]){var r=t.target||t.srcElement||m;for(t[l]=1;r&&1!=r.nodeType;)r=r[v];for(var c,$,y=r,w=t.type,b=h[w]||(h[w]=RegExp(d+w+"(?:,|$)")),M="mx-"+w,C=[];y&&1==y.nodeType&&(c=g(y,M),$=g(y,u),!c&&!b.test($));)C.push(y),y=y[v];if(c){var _,P=c.split(n);if(P.length>1&&(_=P[0],c=P.pop()),_=g(y,f)||_,!_)for(var k=y,I=i.all();k;){if(s(I,k.id)){g(y,f,_=k.id);break}k=k[v]}if(!_)throw Error("bad:"+c);var q=i.get(_),V=q&&q.view;V&&(t.currentId=a(y),t.targetId=a(r),t.prevent=t.preventDefault||x,t.stop=t.stopPropagation||o.noop,t.halt=p,V.pEvt(c,w,t))}else{for(var A;C.length;)A=C.pop(),$=g(A,u)||l,b.test($)||($=$+d+w,g(A,u,$));A=e}y=r=e}},act:function(e,t,r){var n=c[e]||0,a=n>0?1:0,o=y.process;n+=t?-a:a,n||(r&&(i=r),y.lib(m,e,o,t),t||(n=1)),c[e]=n}},w={focus:2,blur:2,mouseenter:2,mouseleave:2},b=$.now();return y.lib=function(e,t,r,n,i,a){var o=w[t];if(i){r.$n||(r.$n=b--);var s="_$"+r.$n;i[s]||(i[s]=function(){r.apply(i,arguments)}),r=i[s]}a||2!=o?$(e)[n?"off":"on"](t,r):$(e)[(n?"un":"")+"delegate"]("[mx-"+t+"]",t,r)},y}),i("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=t.tryCall,i={fire:function(e,t,i,a){var o=n+e,s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var u,f,m=c.length,v=m-1;m--;)u=a?m:v-m,f=c[u],(f.d||f.r)&&(c.splice(u,1),v--),f.d||r(f.f,t,s);i=i||0>v}i&&delete s[o]},on:function(e,t,r){var i=n+e,a=this[i]||(this[i]=[]),o={f:t};isNaN(r)?(o.r=r,a.push(o)):a.splice(0|r,0,o)},rely:function(e,t,n,i,a){var o=this;o.on(e,t,a),n.on(i,function(){o.off(e,t)},r)},off:function(e,t){var r=n+e,i=this[r];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,i),i}),i("magix/vframe",["magix/magix","magix/event","magix/view"],function(t){var n,i,o,s,c,u,f,m,v,h,l,d=t("magix/magix"),g=t("magix/event"),p=t("magix/view"),$=d.tryCall,x=[],y=d.mix,w=d.config(),b="mx-vframe",M=d.has,C="querySelectorAll",_="alter",P="created",k=function(e){return"object"==typeof e?e:r.getElementById(e)},I=function(e,t,i){return t=k(e),t&&(i=o?r[C]("#"+a(t)+c):t.getElementsByTagName(n)),i||x},q=function(e,t,r){if(e=k(e),t=k(t),e&&t)if(e!==t)try{r=u?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},V=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=l,l.add(e,t)};return V.root=function(t,a,m){if(!f){n=w.tagName,i=w["!tnc"],o=i&&r[C],c=" "+n+"["+b+"=true]",s=i&&!o;var d=r.body;u=d.contains,v=a,h=m,l=t;var g=w.rootId,p=k(g);p||(p=r.createElement(n),p.id=g,d.appendChild(p),p=e),f=new V(g)}return f},y(y(V.prototype,g),{mountView:function(e,t,r){var n=this,i=k(n.id);if(n._a||(n._a=1,n._t=i.innerHTML),n.unmountView(r),n._d=0,e){var a=d.toObject(e),o=a.path,s=--n.sign;d.use(o,function(e){if(s==n.sign){p.prepare(e);var r=new e({owner:n,id:n.id,$:k,$c:q,path:o,vom:l,location:v});n.view=r;var c=function(e){n.mountZoneVframes(e.id)};r.on("interact",function(e){e.tmpl||(i.innerHTML=n._t,c(k)),r.on("primed",function(){n.viewPrimed=1,n.fire("viewMounted")}),r.on("rendered",c),r.on("prerender",function(e){n.unmountZoneVframes(e.id,e.keep,1)||n.cAlter()})},0),t=t||{},r.load(y(t,a.params,t),h)}})}},unmountView:function(e){var t=this,r=t.view;if(r){m||(m={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(m),t.view=0,r.oust();var n=k(t.id);n&&t._a&&!e&&(n.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),m=0}t.sign--},mountVframe:function(e,t,r,n,i){var a=this;a.fcc&&!n&&a.cAlter();var o=l.get(e);return o||(o=new V(e),o.pId=a.id,M(a.cM,e)||a.cC++,a.cM[e]=1),o._p=n,o.mountView(t,r,i),o},mountZoneVframes:function(e,t,r,n){var i=this;e=e||i.id,i.unmountZoneVframes(e,n,1);var o=I(e),c=o.length,u={};if(c)for(var f,m,v,h,l=0;c>l;l++)if(f=o[l],m=a(f),!M(u,m)&&(v=f.getAttribute("mx-view"),h=s?f.getAttribute(b):1,h||v)){i.mountVframe(m,v,t,r,n);for(var d,g=I(f),p=0,$=g.length;$>p;p++)d=g[p],u[a(d)]=1}i.cCreated()},unmountVframe:function(e,t,r){var n=this;e=e||n.id;var i=l.get(e);if(i){var a=i.fcc;i.unmountView(t),l.remove(e,a);var o=l.get(i.pId);o&&M(o.cM,e)&&(delete o.cM[e],o.cC--,r||n._d||o.cCreated())}},unmountZoneVframes:function(e,t,r){var n,i,a=this,o=a.cM;for(i in o)(!e||q(i,e))&&a.unmountVframe(i,t,n=1);return r||a._d||a.cCreated(),n},invokeView:function(e,t){var r,n=this;if(n.viewInited){var i=n.view,a=i&&i[e];a&&(r=$(a,t||x,i))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(P,e),t.fire(P,e));var n=t.id,i=l.get(t.pId);i&&!M(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var r=t.view,n=t.id;r&&(t.fca=1,r.fire(_,e),t.fire(_,e));var i=l.get(t.pId);i&&M(i.rM,n)&&(i.rC--,delete i.rM[n],t._p||i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(h),n={location:v,changed:h,prevent:function(){this.cs=x},to:function(e){d._s(e)&&(e=e.split(",")),this.cs=e||x}};r&&t.render(n);for(var i,a=n.cs||d.keys(e.cM),o=0,s=a.length;s>o;o++)i=l.get(a[o]),i&&i.locChged()}}}),V}),i("magix/view",function(i){var a=i("magix/magix"),o=i("magix/event"),s=i("magix/body"),c=i("magix/router"),u=a.tryCall,f=a.has,m=",",v=[],h=a.noop,l=a.mix,d=0,g="destroy",p=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&u(e,arguments,t)}},x=function(e){var t=e&&e[g];t&&u(t,v,e)},y=function(e){clearTimeout(e),clearInterval(e)},w=function(e,t){var r=this,n=r.$res;for(var i in n){var a=n[i];(!e||a.mr)&&r.destroyManaged(i,t)}},b=a.cache(40),M=/\smx-(?!view|owner|vframe)[a-z]+\s*=\s*"/g,C=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,_=/(\w+):(['"]?)([^,]+)\2/g,P=/([$\w]+)<([\w,]+)>/,k=function(e){var t=this;l(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),u(k.$,[e],t)},I=k.prototype,q={$win:t,$doc:r};k.$=[],k.prepare=function(e){if(!e[n]){e[n]=1;var t,r,i,a,o,s,c=e.prototype,u={},f=[];for(var v in c)if(t=c[v],r=v.match(P))for(i=r[1],a=r[2],a=a.split(m),o=a.length-1;o>-1;o--)r=a[o],s=q[i],s?f.push({n:i,t:r,h:s,f:t}):(u[r]=1,c[i+n+r]=t);else"render"==v&&t!=h&&(c[v]=p(t));c.$evts=u,c.$sevts=f}},k.mixin=function(e,t){t&&k.$.push(t),l(I,e)},l(l(I,o),{render:h,init:h,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),u(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e,t){var r=this;r.sign>0&&r.rendered&&(r.fire("prerender",{id:e,keep:t}),w.call(r,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),w.call(e,1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(M,"$&"+this.id+n)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;a._o(e)&&(t.pn=e.path,e=e.keys),e&&(t.ks=n.concat((e+"").split(m)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.path),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(g,0,1,1),w.call(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,i=r.get(n.pId),a=e;return i&&i.viewInited&&(a=i.view),a},pEvt:function(e,t,r){var i=this;if(i.sign>0){var a=b.get(e);a||(a=e.match(C),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(_,function(e,t,r,n){a.p[t]=n}),b.set(e,a));var o=a.n+n+t,s=i[o];if(s){var c=r[a.f];c&&c.call(r),r.params=a.p,u(s,r,i)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var i in r)s.act(i,e,n);for(r=t.$sevts,i=r.length;i-->0;)n=r[i],s.lib(n.h,n.t,n.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e,t){var r,n=this;for(var i in n.$ns)if(r=n.$c(e,i))break;if(!r&&t){var a,o=n.owner,s=n.vom,c=o.cM;for(a in c)if(o=s.get(a),o&&(r=o.invokeView("inside",[e,t])))break}return r},navigate:c.navigate,manage:function(e,t,r){var n=this,i=arguments,o=1,s=n.$res;1==i.length?(t=e,e="res_"+d++,o=0):n.destroyManaged(e);var c;c=a._n(t)?y:x;var u={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=u,t},getManaged:function(t,r){var n=this,i=n.$res,a=e;if(f(i,t)){var o=i[t];a=o.res,r&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,i=n.$res,a=i[e];return!a||t&&a.ol||(r=a.res,a.oust(r),a.hk&&t||delete i[e]),r},dispatch:function(e,t,r){r=this,t||(t={}),t.type=e,t.target=r.$(r.id),s.process(t)}});var V={},A="?t="+Math.random(),U={},N={};return I.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(f(U,e))t(U[e]);else{var i=e.indexOf("/"),a=e.substring(0,i);V[a]||(V[a]=seajs.data.paths[a]);var o=V[a]+e.substring(i+1)+".html",s=N[o],c=function(r){t(U[e]=r)};s?s.push(c):(s=N[o]=[c],$.ajax({url:o+A,success:function(e){u(s,e),delete N[o]},error:function(e,t){u(s,t),delete N[o]}}))}},k.extend=function(e,t,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&u(r,arguments,this)};return i.extend=n.extend,a.extend(i,n,e,t)},k}),i("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),i=r.has,a=r.mix,o={},s={},c={},u=r.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,u.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var r=o[e];r&&(delete o[e],u.fire("remove",{vframe:r,fcc:t}))},loc:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(s,n),!r){a(c,e.changed);var i=t.root(u,s,c);c.view?i.mountView(n.view):i.locChged()}}},n);return u}),i("magix/mmanager",["magix/magix","magix/event"],function(r){var i=r("magix/magix"),a=r("magix/event"),o=i.has,s=i.tryCall,c=i._a,u=i._f,f=i._o,m=1,v=2,h=4,l=Date.now||function(){return+new Date},d=l(),g=t.JSON,p=i.mix,$="mr",x=12e5,y=function(e,t,r,n){if(u(e))t&&(r=y(s(e)));else if(g)r=g.stringify(e);else if(f(e)||c(e)){r=[];for(n in e)o(e,n)&&r.push(n,$,y(e[n]))}else r=e;return r},w=function(e,t,r){for(var i,a=[t.name,y(r)],o={},s=e.length-1;s>-1;s--)i=e[s],o[i]||a.push(o[i]=y(t[i],1),y(r[i],1));return a.join(n)},b=function(e){var t=e.cache;return t&&(t=t===!0?x:0|t),t},M=function(e){throw Error(e)},C=function(e,t){var r=this;r.$mClass=e,r.$mCache=i.cache(),r.$mCacheKeys={},r.$mMetas={},r.$sKeys=(t?c(t)?t:[t]:[]).concat("postParams","urlParams"),r.id="mm"+d--,s(C.$,arguments,r)},_=[].slice,P=function(e,t,r,n){return function(i){return e.apply(t,[r,n,i])}},k=function(e,t){var r=t.b,n=t.a,i=n[r];if(i){var a=i.q;delete n[r],s(a,e,i.e)}},I=function(t,r,n){var i,a=this,o=r.a,c=r.c,u=r.d,f=r.g,d=r.i,g=r.j,p=r.k,$=r.l,x=r.m,y=r.n,w=r.o;r.b++,delete c[a.id];var b=a.$mm,M=b.key;if(u[t]=a,n)r.e=1,i=1,r.f=n,f.msg=n,f[t]=n,g.fire("fail",{model:a,msg:n});else{if(!M||M&&!d.has(M)){M&&d.set(M,a),b.time=l();var C=b.done;C&&s(C,a),g.fire("done",{model:a})}b.used>0&&(a.fromCache=1),b.used++}if(!o.$oust){if(p==m){var _=$?x[t]:x;_&&(y[t]=s(_,[i?f:e,a,f],o))}else if(p==v){w[t]={m:a,e:i,s:n};for(var P,k,I=w.i||0;P=w[I];I++)k=$?x[I]:x,P.e&&(f.msg=P.s,f[I]=P.s),y[I]=s(k,[P.e?f:e,P.m,f].concat(y),o);w.i=I}r.b==r.h&&(r.e||(f=e),p==h?(u.unshift(f),y[0]=f,y[1]=s(x,u,o)):y.unshift(f),o.$ntId=setTimeout(function(){o.doNext(y)},30))}},q=function(e,t){return function(r,n){var i=_.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};p(C,{create:function(e,t){return new C(e,t)},mixin:function(e,t){t&&C.$.push(t),p(C.prototype,e)},$:[]});var V=function(e){var t=this;t.$host=e,t.$reqs={},t.id=$+d--,t.$queue=[]};return p(V.prototype,{send:function(e,t,r,n){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,r,n)}),i;i.$busy=1;var a=i.$host,s=a.$mCache,u=a.$mCacheKeys,f=i.$reqs;c(e)||(e=[e]);var m=e.length,v=[],h=c(t);h&&(v=Array(t.length));for(var l,d={a:i,b:0,c:i.$reqs,d:Array(m),g:{},h:m,i:s,j:a,k:r,l:h,m:t,n:v,o:[]},g=0;e.length>g;g++)if(l=e[g]){var p=a.getModel(l,n),$=p.entity,x=$.$mm.key,y=P(I,$,g,d);y.id=i.id,x&&o(u,x)?u[x].q.push(y):p.update?(f[$.id]=$,x&&(u[x]={q:[y],e:$},y=k),$.request(y,{a:u,b:x})):y()}else M("empty model");return i},fetchAll:function(e,t){return this.send(e,t,h)},saveAll:function(e,t){return this.send(e,t,h,1)},fetchOrder:q(v),saveOrder:q(v,1),saveOne:q(m,1),fetchOne:q(m),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var i in r){var a=r[i],c=a.$mm.key;if(c&&o(n,c)){for(var u,f=n[c],m=f.q,v=[],h=[],l=0;m.length>l;l++)u=m[l],u.id!=e.id?v.push(u):h.push(u);v.length?(s(h,"abort",f.e),f.q=v):a.abort()}else a.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$args;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&s(n,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),C.mixin(a),C.mixin({registerModels:function(e){var t=this,r=t.$mMetas;c(e)||(e=[e]);for(var n,i,a,o=0;e.length>o;o++)n=e[o],n&&(i=n.name,i?r[i]&&M("already exist:"+i):M("miss name"),a=b(n),a&&(n.cache=a),r[i]=n)},registerMethods:function(e){p(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),i=b(e)||n.cache,a=new r.$mClass;return a.set(n),a.$mm=t={used:0,done:n.done},i&&(t.key=w(r.$sKeys,n,e)),e.name&&a.set(e),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),r.fire("inited",{model:a}),a},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,i=r[n];return i||M("Unfound:"+n),i},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,update:n}},createMRequest:function(e){var t=new V(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,i=n.$mCache,a=e,o=n.getModelMeta(t),s=b(t)||o.cache;if(s&&(r=w(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,u=c[r];u?a=u.e:(a=i.get(r),a&&s>0&&l()-a.$mm.time>s&&(n.clearCacheByKey(r),a=0))}return a}}),C}),i("magix/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r,n){var i=this,a=function(){a.superclass.constructor.apply(this,arguments),n&&n.apply(this,arguments)};return t.extend(a,i,e,r)},i=+new Date,a=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+i--},u=function(e,t){return function(r,n){this.setParams(r,n,e,t)}},f="",m=/^\?|=(?=&|$)/g,v="GET",h="POST";return t.mix(c,{extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(h)},getUrlParams:function(){return this.getParams(v)},getParams:function(e){var r=t.toUrl(f,this[n+(e||v)]);return r=r.replace(m,f)},setUrlParamsIf:u(v,1),setPostParamsIf:u(h,1),setParams:function(e,r,i,o){var s,c,u,m=this,v=n+i;m[v]||(m[v]={}),u=m[v],t._f(e)&&(e=t.tryCall(e)),e&&t._s(e)&&(s={},s[e]=~e.indexOf("=")?f:r,e=s);for(c in e)o&&a(u,c)||(u[c]=e[c])},setPostParams:u(h),setUrlParams:u(v),get:function(e,t,r){var n=this,i=arguments.length,a=2==i,o=n.$attrs;if(i){for(var c=(e+f).split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt||(o(i)||(i={data:i}),r.set(i),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c}),r.createElement("vframe")})(null,this,document,"",define);