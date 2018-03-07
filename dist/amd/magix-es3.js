/*!3.8.4 MIT kooboy_li@163.com*/define("magix",["$"],function(t){var e,n,r=t.isPlainObject,i=t.isArray,o=0,a="",f=[],u=",",c=window,s=document,h=t(s),d=c.setTimeout,v="changed",$="change",l="pageunload",p="value",g="mxs",m=function(){},b=JSON.stringify,y="\x1e",w="object",x="prototype",k="params",V="path",I="mx-view",A=/[#?].*$/,T=/([^=&?\/#]+)=?([^&#?]*)/g,C=/(?!^)=|&/,S=function(t){return(t||"mx_")+o++},q=S(),O={rootId:S(),defaultView:q,error:function(t){throw t}},P=function(t){return typeof t==w?t:s.getElementById(t)},U=function(t){return!t||typeof t!=w},j=function(t,e,n){if(t=P(t),e=P(e),t&&e&&!(n=t==e))try{n=16==(16&e.compareDocumentPosition(t))}catch(t){}return n},E=function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])B(e,i)&&(t[i]=e[i]);return t},H=function(t,e,n){for(n in e=[],t)B(t,n)&&e.push(n);return e},N=O.hasOwnProperty,L=t("head"),Z=function(t,e){e&&!Z[t]&&(Z[t]=1,L.append("<style>"+e))},M=function(t){return t.id||(t.$a=1,t.id=S())},R=function(t,e,n,r,o){e=e||f,i(t)||(t=[t]),i(e)||(e=[e]);for(var a=0,u=t;a<u.length;a++){o=u[a];try{r=o&&o.apply(n,e)}catch(t){O.error(t)}}return r},B=function(t,e){return t&&N.call(t,e)},D=function(t,e,n){var r,i;for(r in e)i=e[r],n[r]=(i+a)[0]==y?t[i]:i},z=function(t,e){return e.f-t.f||e.t-t.t},F=function(t,e,n,r){(r=this).c=[],r.b=e||5,r.x=r.b+(t||20),r.r=n};E(F[x],{get:function(t){var e=this.c[y+t];return e&&(e.f++,e.t=o++,e=e.v),e},each:function(t,e,n){for(var r=0,i=(n=this).c;r<i.length;r++)t(i[r].v,e,n)},set:function(t,e){var n=this.c,r=y+t,i=n[r],a=this.b;if(!i){if(n.length>=this.x)for(n.sort(z);a--;)(i=n.pop()).f>0&&this.del(i.o);i={o:t},n.push(i),n[r]=i}i.v=e,i.f=1,i.t=o++},del:function(t){t=y+t;var e=this.c,n=e[t],r=this.r;n&&(n.f=-1,n.v=a,delete e[t],r&&R(r,n.o))},has:function(t){return B(this.c,y+t)}});var J,Q=function(t,e){if(t)if(q==t)n||(n=we.extend()),e(n);else if(i(t))require(t,e);else try{e(require(t))}catch(n){require([t],e)}else e&&e()},X=function(){},_=function(t,e,n,r,i){return X[x]=e[x],i=new X,E(i,n),E(t,r),i.constructor=t,t[x]=i,t},G=t.find||t.zepto,K=G.matchesSelector||G.matches,W=function(t,e){e=t.data,t.eventTarget=e.e,R(e.f,t,e.v)},Y=function(e,n,r,i,o){o&&(n+="."+o.i),i?t(e).off(n,r):t(e).on(n,o,r)},tt=new F,et=0,nt=function(t,e,n){try{n=decodeURIComponent(n)}catch(t){}J[e]=n},rt=function(t){var e,n=tt.get(t);return n||(J={},t==(e=t.replace(A,a))&&C.test(e)&&(e=a),t.replace(e,a).replace(T,nt),tt.set(t,n={a:e,b:J})),{path:n.a,params:E({},n.b)}},it=function(t,e,n){var r,i,o,f=[];for(i in e)r=e[i]+a,(!n||r||B(n,i))&&(r=encodeURIComponent(r),f.push(o=i+"="+r));return o&&(t+=(t&&(~t.indexOf("?")?"&":"?"))+f.join("&")),t},ot=function(t,e){var n,r={};if(t)for(var i=0,o=t;i<o.length;i++)n=o[i],r[e&&n?n[e]:n]=e?n:1+(0|r[n]);return r},at={config:function(t,e){return e=O,t&&(e=r(t)?E(e,t):e[t]),e},boot:function(t){E(O,t),Q(O.ini,function(e){E(O,e,t),Q(O.exts,function(){Et.on(v,Mt),$t.on(v,Mt),et=1,Ot()})})},toMap:ot,toTry:R,toUrl:it,parseUrl:rt,mix:E,has:B,keys:H,inside:j,node:P,applyStyle:Z,guid:S,use:Q,Cache:F,nodeId:M},ft={fire:function(t,e,n,r){var i,o,f,u,c=this,s=c[y+t];if(e||(e={}),e.type||(e.type=t),s)for(o=(i=s.length)-1;i--;)(u=s[f=r?i:o-i]).f?(u.x=1,R(u.f,e,c),u.x=a):u.x||(s.splice(f,1),o--);(s=c["on"+t])&&R(s,e,c),n&&c.off(t)},on:function(t,e){var n=y+t;(this[n]||(this[n]=[])).push({f:e})},off:function(t,e){var n,r=y+t,i=this[r];if(e){if(i)for(var o=0,f=i;o<f.length;o++)if((n=f[o]).f==e){n.f=a;break}}else delete this[r],delete this["on"+t]}};at.Event=ft;var ut={},ct={},st={},ht=0,dt=function(t){for(var e=0,n=t=(t+a).split(",");e<n.length;e++){var r=n[e];B(ct,r)?ct[r]++:ct[r]=1}return t},vt=function(t){for(var e,n=0,r=t;n<r.length;n++)e=r[n],B(ct,e)&&(--ct[e]||(delete ct[e],delete ut[e]))};var $t=E({get:function(t){var e=t?ut[t]:ut;return e},set:function(t){ht=function(t,e,n){var r,i,o,a=0;for(o in t)r=t[o],i=e[o],U(r)&&i===r||(n[o]=1,a=1),e[o]=r;return a}(t,ut,st)||ht},digest:function(t){t&&$t.set(t),ht&&(ht=0,this.fire(v,{keys:st}),st={})},diff:function(){return st},clean:function(t){return{ctor:function(){t=dt(t),this.on("destroy",function(){return vt(t)})}}}},ft);at.State=$t;var lt,pt,gt,mt,bt,yt,wt="view",xt=new F,kt=new F,Vt=c.location,It=0,At={query:{},params:{},href:a},Tt=/(?:^.*\/\/[^\/]+|#.*$)/gi,Ct=/^[^#]*#?!?/,St=function(t){return this[k][t]||a},qt=function(t,e){t="#!"+t,e?Vt.replace(t):Vt.hash=t},Ot=function(){var t,e,n=Ut().srcHash;Y(c,"hashchange",function(r,i,o){e||(i=Ut(),(t=i.srcHash)!=n&&(o=function(){r.p=1,n=t,e=a,qt(t),jt()},r={reject:function(){r.p=1,e=a,qt(n)},resolve:o,prevent:function(){e=1}},Et.fire($,r),e||r.p||o()))}),c.onbeforeunload=function(t,e,n){if(t=t||c.event,e={},Et.fire(l,e),n=e.msg)return t&&(t.returnValue=n),n},jt()},Pt=s.title,Ut=function(t){t=t||Vt.href;var e,n,i,o,f,u=xt.get(t);return u||(e=t.replace(Tt,a),n=t.replace(Ct,a),i=rt(e),o=rt(n),f=E({},i[k],o[k]),u={get:St,href:t,srcQuery:e,srcHash:n,query:i,hash:o,params:f},et&&(!function(t,e){if(pt||(pt=O.routes||{},gt=O.unmatchView,mt=O.defaultView,bt=O.defaultPath||"/",yt=O.rewrite),!t[wt]){var n=t.hash[V]||bt;yt&&(n=yt(n,t[k],pt)),e=pt[n]||gt||mt,t[V]=n,t[wt]=e,r(e)&&E(t,e)}}(u),xt.set(t,u))),u},jt=function(){var t=Ut(),e=function(t,e){var n=t.href,r=e.href,i=n+y+r,o=kt.get(i);if(!o){var a,f;o={params:f={},force:!n};for(var u=t[k],c=e[k],s=function(t){var e=u[t],n=c[t];e!=n&&(f[t]={from:e,to:n},a=1)},h=0,d=H(u).concat(H(c));h<d.length;h++)s(d[h]);u=t,c=e,f=o,s(V),s(wt),kt.set(i,o={a:a,b:o})}return o}(At,At=t);return!It&&e.a&&((lt=e.b)[V]&&(s.title=t.title||Pt),Et.fire(v,lt)),It=0,lt},Et=E({parse:Ut,diff:jt,to:function(t,e,n,i){!e&&r(t)&&(e=t,t=a);var o,f,u,c,s=rt(t),h=s[k],d=s[V],v=At[V],$=At[k],l=At.query[k];if(E(h,e),d)for(v in l)B(h,v)||(h[v]=a);else $&&(d=v,h=E({},$,h));f=At,u=n,c=i,(o=it(o=d,h,l))!=f.srcHash&&(It=c,qt(o,u))}},ft);at.Router=Et;var Ht,Nt,Lt=0,Zt=function(t,e,n,r,i,o){if(t&&t.$a!=Lt&&(n=t.$v)&&n.$a>1){(e?function(t,e,n){var r,i=t.$os;if(i)for(var o=0,a=i;o<a.length&&(r=a[o],!(n=B(e,r)));o++);return n}(n,e):ye(n))&&n.$b();for(var a=0,f=t.children();a<f.length;a++)o=f[a],Zt(zt[o],e)}},Mt=function(t,e,n){e=Dt(),(n=t[wt])?e.mountView(n.to):(Lt=o++,Zt(e,t.keys))},Rt=function(t){if(!t.$b&&!t.$d&&t.$cc==t.$rc){t.$cr||(t.$cr=1,t.$ca=0,t.fire("created"));var e=void 0,n=t.id,r=t.pId;(e=zt[r])&&!B(e.$e,n)&&(e.$e[n]=1,e.$rc++,Rt(e))}},Bt=function(t,e){if(!t.$ca&&t.$cr){t.$cr=0,t.$ca=1,t.fire("alter",e);var n=void 0,r=t.id,i=t.pId;(n=zt[i])&&B(n.$e,r)&&(n.$rc--,delete n.$e[r],Bt(n,e))}},Dt=function(t){return Ht||(e=s.body,P(t=O.rootId)||(e.id=t),Ht=new Jt(t)),Ht},zt={},Ft=[],Jt=function(t,e,n){var r,i;(n=this).id=t,n.$c={},n.$cc=0,n.$rc=0,n.$g=1,n.$e={},n.$f=[],n.pId=e,i=n,B(zt,r=t)||(zt[r]=i,Jt.fire("add",{vframe:i}),(r=P(r))&&(r.vframe=i))};E(Jt,{all:function(){return zt},get:function(t){return zt[t]}},ft),E(Jt[x],ft,{mountView:function(t,e){var n,r,i,o,a,f,u=this,c=u.id,s=u.pId,h=u.$g,d=P(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$b=0,d&&t&&(u[V]=t,n=rt(t),i=n[V],r=++h,o=n[k],f=(f=(f=(f=zt[s])&&f.$v)&&f.$d)&&f.$a,t.indexOf(y)>0&&D(f,o,o),u.$n=n[V],E(o,e),Q(i,function(t){if(r==u.$g){if(!t)return O.error(Error("id:"+c+" cannot load:"+i));a=be(t),i=new t(c,u,o,a),u.$v=i,u.$a=Lt,pe(i),R(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var e,n,r=this,i=r.$v,o=r.id;r.$f=[],i&&(Nt||(n=1,Nt={id:o}),r.$b=1,r.unmountZone(0,1),Bt(r,Nt),r.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),$e(i,1),pe(i,1),i.owner=0),i.$a--,(e=P(o))&&r.$h&&t(e).html(r.$i),n&&(Nt=0)),r.$g++},mountVframe:function(t,e,n){var r,i=this,o=i.id,a=i.$c;return Bt(i,{id:t}),(r=zt[t])||(B(a,t)||(i.$o=0,i.$cc++),a[t]=t,(r=Ft.pop())?Jt.call(r,t,o):r=new Jt(t,o)),r.mountView(e,n),r},mountZone:function(e,n){var r,i,o=this,a=[];e=e||o.id;var f,u=t("#"+e+" ["+I+"]");o.$d=1;for(var c=0,s=u;c<s.length;c++)r=s[c],i=M(r),r.$b||(r.$b=1,a.push([i,r.getAttribute(I)]));for(var h=0,d=a;h<d.length;h++)i=(f=d[h])[0],r=f[1],a[i]?O.error(Error("vf.id duplicate:"+i+" at "+o[V])):o.mountVframe(a[i]=i,r);o.$d=0,n||Rt(o)},unmountVframe:function(t,e){var n,r,i,o;if(t=t?this.$c[t]:this.id,n=zt[t]){var a=n.$cr,f=n.pId;n.unmountView(),i=a,(o=zt[r=t])&&(delete zt[r],Jt.fire("remove",{vframe:o,fcc:i}),(r=P(r))&&(r.$b=0),r&&(r.vframe=0),r&&(r.$d=0)),n.id=n.pId=n.$c=n.$e=0,n.$h=0,n.off("alter"),n.off("created"),Ft.push(n),(n=zt[f])&&B(n.$c,t)&&(delete n.$c[t],n.$o=0,n.$cc--,e||Rt(n))}},unmountZone:function(t,e){var n;for(n in this.$c)(!t||n!=t&&j(n,t))&&this.unmountVframe(n,1);e||Rt(this)},parent:function(t,e){for(e=this,t=t>>>0||1;e&&t--;)e=zt[e.pId];return e},children:function(t){return(t=this).$o||(t.$o=H(t.$c))},invoke:function(t,e){var n,r,i,o,a,f=this.$f;return(r=this.$v)&&r.$f?n=(i=r[t])&&R(i,e,r):((o=f[a=y+t])&&(o.r=e===o.a),o={n:t,a:e,k:a},f.push(o),f[a]=o),n}}),at.Vframe=Jt,t.fn.invokeView=function(t,e){if(this.length){var n=this[0].vframe;if(void 0===e)return n&&n.invoke(t);for(var r=0;r<this.length;r++){(n=this[r].vframe)&&n.invoke(t,e)}}};var Qt=new F(30,10),Xt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,_t={},Gt={},Kt=function(t,n){var r,i,o,a,u,c,s=[],h=t,d=t.getAttribute("mx-"+n),v=[],$=0;if(d&&((a=Qt.get(d))||((a={v:(a=d.match(Xt)||f)[1],n:a[2],i:a[3]}).p=a.i&&R(Function("return "+a.i),f,t),Qt.set(d,a)),a=E({},a,{r:d}),s.push(a)),a&&!a.v||Gt[n]){if(!(c=t.$a))for(v.push(h);h!=e&&(h=h.parentNode);){if(zt[i=h.id]||(i=h.$v)){c=i;break}v.push(h)}if(c){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=c;h=t.id,zt[h]&&($=c=h);do{if((r=zt[c])&&(u=r.$v)){for(i in(o=u.$so)[n])o={r:i,v:c,n:i},i?K(t,i)&&s.push(o):$&&s.unshift(o);if(u.$e&&!$){a&&!a.v&&(a.v=c);break}$=0}}while(r&&(c=r.pId))}}return s},Wt=function(t){for(var n,r,i,o,a,f,u,c=t.target,s=t.type,h=[];c!=e;){if((n=Kt(c,s)).length){h=[];for(var d=0,v=n;d<v.length;d++){var $=v[d],l=$.v,p=($.r,$.n),g=$.p,m=$.i;if(f!=l){if(f&&t.isPropagationStopped())break;f=l}if(o=(i=zt[l])&&i.$v){if((a=o[p+y+s])&&(t.eventTarget=c,u=g||{},m&&m.indexOf(y)>0&&D(o.$d.$a,u,u={}),t[k]=u,R(a,t,o),t.isImmediatePropagationStopped()))break;0}else t.stopPropagation();0}}if((r=c.$)&&r[s]||t.isPropagationStopped())break;h.push(c),c=c.parentNode||e}for(var b=0,w=h;b<w.length;b++)(r=(c=w[b]).$||(c.$={}))[s]=1},Yt="http://www.w3.org/2000/svg",te={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,'<svg xmlns="'+Yt+'">'],all:[0,""]},ee=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;te.optgroup=te.option,te.tbody=te.tfoot=te.colgroup=te.caption=te.thead,te.th=te.td;var ne=s.implementation.createHTMLDocument(a),re=ne.createElement("base");re.href=s.location.href,ne.head.appendChild(re);var ie=function(t,e){var n=M(e);t.$c[n]?t.unmountVframe(n,1):t.unmountZone(n,1)},oe={INPUT:[p,"checked"],TEXTAREA:[p],OPTION:["selected"]},ae=function(t,e,n,r){var i,o,a,f,u=t.attributes,c=e.attributes,s=t.nodeName;for(o=u.length;o--;)i=u[o].name,e.getAttribute(i)||("id"==i?r||n.d.push([t,""]):(n.c=1,t.removeAttribute(i)));for(o=c.length;o--;)a=(i=c[o]).name,f=i[p],t.getAttribute(a)!=f&&("id"==a?n.d.push([t,f]):(n.c=1,t.setAttribute(a,f)));var h=oe[s];if(h)for(var d=0,v=h;d<v.length;d++)t[o=v[d]]!=e[o]&&(t[o]=e[o])},fe=function(t,e,n){return(e=t.$a?a:t.id)||1!=t.nodeType||(e=t.getAttribute(g)||(n=zt[e])&&n.$n),e},ue=function(t,e,n,r,i){for(var o,a,f,u,c=t.lastChild,s=e.firstChild,h=0,d={};c;)h++,f=fe(a=c),c=c.previousSibling,f&&(f=d[f]||(d[f]=[])).push(a);for(c=t.firstChild;s;)h--,o=s,s=s.nextSibling,(u=d[f=fe(o)])&&(u=u.pop())?(u!=c?t.insertBefore(u,c):c=c.nextSibling,ce(u,o,t,n,r,i)):c?(f=fe(a=c))&&d[f]?(h++,n.c=1,t.insertBefore(o,a)):(c=c.nextSibling,ce(a,o,t,n,r,i)):(t.appendChild(o),n.c=1);for(;h-- >0;)a=t.lastChild,ie(r,a),t.removeChild(a),n.c=1},ce=function(t,e,n,r,i,o){if(t.nodeName===e.nodeName)if(1===t.nodeType){var f=t.getAttribute(g);if(f&&f==e.getAttribute(g))return;var u=e.getAttribute(I),c=e.innerHTML,s=t.getAttribute("mxa"),h=!s||s!=e.getAttribute("mxa"),d=void 0,v=void 0,$=zt[t.id],l=void 0,p=void 0,m=void 0,b=void 0,w=void 0,x=void 0;u&&$&&(l=(m=$.$v).$g,b=rt(u),x=c!=$.$i,p=u.indexOf("?")>0||x),u&&$&&$.$n==b[V]?p&&(l?(w=b[k],u.indexOf(y)>-1&&D(o,w,w),$.$i=c,$[V]=u,b={node:e,deep:!m.$e,html:x},h&&(h=a,ae(t,e,r,1)),R(l,[w,b],m)&&r.v.push(m),d=b.deep):(v=1,d=1)):(d=1,v=$),v&&$.unmountVframe(0,1),h&&(v&&(r.c=1),ae(t,e,r,$&&u)),d&&ue(t,e,r,i,o)}else t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue);else ie(i,t),n.replaceChild(e,t),r.c=1},se=function(t){var e,n,r,i=t.$b,o=zt[i],a=t.$a,f=o&&o.$v,u={d:[],v:[]},c=P(i);if(f&&f.$a>0&&(e=f.$e)){n=e(a,i),ue(c,function(t,e){var n=ne.createElement("div"),r=Yt==e.namespaceURI?"g":(ee.exec(t)||[0,""])[1].toLowerCase(),i=te[r]||te.all;n.innerHTML=i[1]+t;for(var o=i[0];o--;)n=n.lastChild;return n}(n,c),u,o,a);for(var s=0,d=u.d;s<d.length;s++)(r=d[s])[0].id=r[1];for(var v=0,$=u.v;v<$.length;v++)(r=$[v]).$b();u.c&&(f.endUpdate(i),h.trigger({type:"htmlchanged",vId:i})),f.fire("domready")}},he=function(t){var e;this.$b=t,this.$a=((e={vId:t})[y]=1,e)};E(he[x],{get:function(t,e){return e=this.$a,t&&(e=e[t]),e},set:function(t){return E(this.$a,t),this},digest:function(t){return this.set(t),se(this),this},snapshot:function(){return this.$d=b(this.$a),this},altered:function(){if(this.$d)return this.$d!=b(this.$a)}});var de=/^(\$?)([^<]*)<([^>]+)>$/,ve=function(t,e,n){return t.$h?n=t:((n=function(t){R(n.$h,t,this)}).$h=[t],n.$i=1),n.$h=n.$h.concat(e.$h||e),n},$e=function(t,e){var n,r,i=t.$r;for(n in i)r=i[n],(e||r.x)&&le(i,n,1)},le=function(t,e,n,r){var i,o,a=t[e];return a&&a!=r&&((i=(o=a.e).destroy)&&n&&R(i,f,o),delete t[e]),o},pe=function(t,n){var r,i,o,a,f,u,c=t.$eo,s=t.$so,h=t.$el,d=t.id;for(r in c)i=r,o=s[r],a=n,void 0,void 0,f=0|_t[i],u=a?-1:1,f&&a!==f||Y(e,i,Wt,a),_t[i]=f+u,o&&(Gt[i]=(0|Gt[i])+u);for(var v=0,$=h;v<$.length;v++)r=$[v],Y(r.e,r.n,W,n,{i:d,v:t,f:r.f,e:r.e})},ge=[],me={win:c,doc:s},be=function(t){if(!t[y]){t[y]=[];var e=t[x],n=void 0,r=void 0,i=void 0,o={},a=[],f={},c=void 0,s=void 0,h=void 0,d=void 0,v=void 0,$={};if(r=e.mixins){for(var l=0,p=r;l<p.length;l++)for(h in c=p[l])n=c[h],i=$[h],"ctor"!=h?(de.test(h)&&(i?n=ve(i,n):n.$i=1),$[h]=n):t[y].push(n);for(h in $)B(e,h)||(e[h]=$[h])}for(h in e)if(n=e[h],r=h.match(de)){s=r[1],i=r[2];for(var g=0,m=r[3].split(u);g<m.length;g++){if(d=m[g],c=me[i],v=1,s){if(c){a.push({f:n,e:c,n:d});continue}v=2,(c=f[d])||(c=f[d]={}),c[i]=1}o[d]=o[d]|v,(c=e[d=i+y+d])?c.$i&&(n.$i?e[d]=ve(c,n):B(e,h)&&(e[d]=n)):e[d]=n}}k="$b",V=(b=e)[w="render"],b[w]=b[k]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];(I=this).$a>0&&(I.$a++,I.fire("rendercall"),$e(I),R(V,t,I))},e.$eo=o,e.$el=a,e.$so=f,e.$e=e.tmpl,e.$g=e.assign}var b,w,k,V,I;return t[y]},ye=function(t){var e,n,r,i=t.$l;if(i.f&&(i.p&&(e=lt[V]),!e&&i.k)){r=lt[k];for(var o=0,a=i.k;o<a.length&&(n=a[o],!(e=B(r,n)));o++);}return e},we=function(t,e,n,r){(r=this).owner=e,r.id=t,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new he(r.id),R(ge,n,r)},xe=we[x];E(we,{merge:function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var i=0,o=n;i<o.length;i++)(e=(t=o[i])&&t.ctor)&&ge.push(e),E(xe,t)},extend:function(t,e){var n=this,r=(t=t||{}).ctor,i=[];r&&i.push(r);var o=function(t,e,r,o){n.call(this,t,e,r),R(i.concat(o),r,this)};return o.extend=n.extend,_(o,n,t,e)}}),E(xe,ft,{init:m,beginUpdate:function(t,e){(e=this).$a>0&&e.$f&&e.owner.unmountZone(t,1)},endUpdate:function(t,e,n,r,i){(n=this).$a>0&&(t=t||n.id,e?i=e:(i=n.$f,n.$f=1),(r=n.owner).mountZone(t,e),i||d(n.wrapAsync(function(){!function(t,e,n){for(e=t.$f;e.length;)(n=e.shift()).r||t.invoke(n.n,n.a),delete e[n.k]}(r)}),0))},wrapAsync:function(t,e){var n=this,r=n.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==n.$a)return t.apply(e||n,i)}},observeLocation:function(t,e){var n;(n=this.$l).f=1,r(t)&&(e=t[V],t=t[k]),n.p=e,t&&(n.k=(t+a).split(u))},observeState:function(t){this.$os=(t+a).split(u)},capture:function(t,e,n,r){return r=this.$r,e?(le(r,t,1,e),r[t]={e:e,x:n}):e=(r=r[t])&&r.e,e},release:function(t,e){return le(this.$r,t,e)},leaveTip:function(t,e){var n=this,r=function(i){var o="a",a="b";i.type!=$&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):e()?(i.prevent(),r[a]=1,n.leaveConfirm(t,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(n){e()&&(n.msg=t)};Et.on($,r),Et.on(l,i),n.on("unload",r),n.on("destroy",function(){Et.off($,r),Et.off(l,i)})},render:m}),at.View=we;var ke=t.type,Ve=t.now||Date.now,Ie=function(){this.id=S("b"),this.$={}};E(Ie[x],{get:function(t,e,n){var r=e!=n,o=this.$;if(t){for(var f=i(t)?t.slice():(t+a).split("."),u=void 0;(u=f.shift())&&o;)o=o[u];u&&(o=n)}return r&&ke(e)!=ke(o)&&(o=e),o},set:function(t,e){var n;r(t)||((n={})[t]=e,t=n),E(this.$,t)}});var Ae=function(t,e,n){(n=this[t])&&(delete this[t],R(n,e,n.e))},Te=function(t,e,n,r,o){if(t.$d)return t;if(t.$e)return t.enqueue(Te.bind(t,t,e,n,r,o));t.$e=1,i(e)||(e=[e]);for(var a,f,u,c,s,h,d,v,$,l=t.constructor,p=0,g=l.$f,m=(a=n,f=l,u=t,c=e.length,s=r,h=l.$c,d=[],v=0,$=0,function(t,e){var n,r=this;$++;var i=r.$b,o=i.k;d[t+1]=r;var l,p={bag:r,error:e};if(e?(v=e,f.fire("fail",p),n=1):h.has(o)||(o&&h.set(o,r),i.t=Ve(),(l=i.a)&&R(l,r,r),(l=i.x)&&f.clear(l),f.fire("done",p),n=1),!u.$d){var g=$==c;g&&(u.$e=0,2==s&&(d[0]=v,R(a,d,u))),1==s&&R(a,[e||null,r,g,t],u)}n&&f.fire("end",p)}),b=0,y=e;b<y.length;b++){var w=y[b];if(w){var x=l.get(w,o),k=x.e,V=k.$b.k,I=m.bind(k,p++),A=void 0;V&&g[V]?g[V].push(I):x.u?(V&&((A=[I]).e=k,g[V]=A,I=Ae.bind(g,V)),l.$s(k,I)):I()}}return t},Ce=function(){var t=this;t.id=S("s"),t.$g=[]};E(Ce[x],{all:function(t,e){return Te(this,t,e,2)},save:function(t,e){return Te(this,t,e,2,1)},one:function(t,e){return Te(this,t,e,1)},enqueue:function(t){var e=this;return e.$d||(e.$g.push(t),e.dequeue(e.$h)),e},dequeue:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n,r=this;r.$e||r.$d||(r.$e=1,d(function(){r.$e=0,r.$d||(n=r.$g.shift())&&R(n,r.$h=t)},0))},destroy:function(t){(t=this).$d=1,t.$g=0}});var Se=function(t,e){return[b(e),b(t)].join(y)},qe=function(t,e,n,r){(r=t&&t.$b)&&e[r.n]&&n.del(r.k)},Oe=E({add:function(t){var e,n=this.$b;i(t)||(t=[t]);for(var r=0,o=t;r<o.length;r++)if(e=o[r]){var a=e.name,f=e.cache;e.cache=0|f,n[a]=e}},create:function(t){var e=this.meta(t),n=0|t.cache||e.cache,i=new Ie;i.set(e),i.$b={n:e.name,a:e.after,x:e.cleans,k:n&&Se(e,t)},r(t)&&i.set(t);var o=e.before;return o&&R(o,i,i),this.fire("begin",{bag:i}),i},meta:function(t){return this.$b[t.name||t]||t},get:function(t,e){var n,r;return e||(n=this.cached(t)),n||(n=this.create(t),r=1),{e:n,u:r}},clear:function(t){this.$c.each(qe,ot((t+a).split(u)))},cached:function(t){var e,n,r=this.$c,i=this.meta(t),o=0|t.cache||i.cache;if(o&&(n=Se(i,t)),n){var a=this.$f[n];a?e=a.e:(e=r.get(n))&&Ve()-e.$b.t>o&&(r.del(n),e=0)}return e}},ft);return Ce.extend=function(t,e,n){var r=function(){Ce.call(this)};return r.$s=t,r.$c=new F(e,n),r.$f={},r.$b={},_(r,Ce,null,Oe)},at.Service=Ce,E(m[x],ft),m.extend=function t(e,n){var r=this,i=e&&e.ctor,o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r.apply(this,t),i&&i.apply(this,t)};return o.extend=t,_(o,r,e,n)},at.Base=m,at});