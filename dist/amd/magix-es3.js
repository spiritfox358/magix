/*!3.8.2 MIT kooboy_li@163.com*/define("magix",["$"],function(e){var n,t,r=e.isPlainObject,i=e.isArray,o=0,a="",f=[],u=",",c=window,h=document,s=e(h),d=c.setTimeout,v=function(){},$=JSON.stringify,l="\x1e",p="object",g="prototype",m="params",b="path",w="mx-view",y=/[#?].*$/,x=/([^=&?\/#]+)=?([^&#?]*)/g,k=/(?!^)=|&/,V=function(e){return(e||"mx_")+o++},I=V(),_={rootId:V(),defaultView:I,error:function(e){throw e}},j=function(e){return typeof e==p?e:h.getElementById(e)},S=function(e){return!e||typeof e!=p},T=function(e,n,t){var r,i,o,a=0;for(o in e)r=e[o],i=n[o],S(r)&&i===r||(t[o]=1,a=1),n[o]=r;return a},q=function(e,n,t){if(e=j(e),n=j(n),e&&n&&!(t=e==n))try{t=16==(16&n.compareDocumentPosition(e))}catch(e){}return t},A=function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])E(n,i)&&(e[i]=n[i]);return e},O=function(e,n,t){for(t in n=[],e)E(e,t)&&n.push(t);return n},U=_.hasOwnProperty,C=e("head"),H=function(e,n){n&&!H[e]&&(H[e]=1,C.append("<style>"+n))},P=function(e){return e.id||(e.id=V())},Z=function(e,n,t,r,o){n=n||f,i(e)||(e=[e]),i(n)||(n=[n]);for(var a=0,u=e;a<u.length;a++){o=u[a];try{r=o&&o.apply(t,n)}catch(e){_.error(e)}}return r},E=function(e,n){return e&&U.call(e,n)},N=function(e,n,t){var r,i;for(r in n)i=n[r],t[r]=(i+a)[0]==l?e[i]:i},z=function(e,n){return n.f-e.f||n.t-e.t},L=function(e,n,t,r){(r=this).c=[],r.b=n||5,r.x=r.b+(e||20),r.r=t};A(L[g],{get:function(e){var n=this.c[l+e];return n&&(n.f++,n.t=o++,n=n.v),n},each:function(e,n,t){for(var r=0,i=(t=this).c;r<i.length;r++)e(i[r].v,n,t)},set:function(e,n){var t=this.c,r=l+e,i=t[r],a=this.b;if(!i){if(t.length>=this.x)for(t.sort(z);a--;)(i=t.pop()).f>0&&this.del(i.o);i={o:e},t.push(i),t[r]=i}i.v=n,i.f=1,i.t=o++},del:function(e){e=l+e;var n=this.c,t=n[e],r=this.r;t&&(t.f=-1,t.v=a,delete n[e],r&&Z(r,t.o))},has:function(e){return E(this.c,l+e)}});var M,B=function(e,n){if(e)if(I==e)t||(t=xn.extend()),n(t);else if(i(e))require(e,n);else try{n(require(e))}catch(t){require([e],n)}else n&&n()},R=function(){},D=function(e,n,t,r,i){return R[g]=n[g],i=new R,A(i,t),A(e,r),i.constructor=e,e[g]=i,e},F=e.find||e.zepto,J=F.matchesSelector||F.matches,Q=function(e,n){n=e.data,e.eventTarget=n.e,Z(n.f,e,n.v)},W=function(n,t,r,i,o){o&&(t+="."+o.i),i?e(n).off(t,r):e(n).on(t,o,r)},G=new L,K=0,X=function(e,n,t){try{t=decodeURIComponent(t)}catch(e){}M[n]=t},Y=function(e){var n,t=G.get(e);return t||(M={},e==(n=e.replace(y,a))&&k.test(n)&&(n=a),e.replace(n,a).replace(x,X),G.set(e,t={a:n,b:M})),{path:t.a,params:A({},t.b)}},ee=function(e,n,t){var r,i,o,f=[];for(i in n)r=n[i]+a,(!t||r||E(t,i))&&(r=encodeURIComponent(r),f.push(o=i+"="+r));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+f.join("&")),e},ne=function(e,n){var t,r={};if(e)for(var i=0,o=e;i<o.length;i++)t=o[i],r[n&&t?t[n]:t]=n?t:1+(0|r[t]);return r},te={config:function(e,n){return n=_,e&&(n=r(e)?A(n,e):n[e]),n},boot:function(e){A(_,e),B(_.ini,function(n){A(_,n,e),B(_.exts,function(){Ue.on("changed",ze),he.on("changed",ze),K=1,Te()})})},toMap:ne,toTry:Z,toUrl:ee,parseUrl:Y,mix:A,has:E,keys:O,inside:q,node:j,applyStyle:H,guid:V,use:B,Cache:L,nodeId:P},re={fire:function(e,n,t,r){var i,o,f,u,c=this,h=c[l+e];if(n||(n={}),n.type||(n.type=e),h)for(o=(i=h.length)-1;i--;)(u=h[f=r?i:o-i]).f?(u.x=1,Z(u.f,n,c),u.x=a):u.x||(h.splice(f,1),o--);(h=c["on"+e])&&Z(h,n,c),t&&c.off(e)},on:function(e,n){var t=l+e;(this[t]||(this[t]=[])).push({f:n})},off:function(e,n){var t,r=l+e,i=this[r];if(n){if(i)for(var o=0,f=i;o<f.length;o++)if((t=f[o]).f==n){t.f=a;break}}else delete this[r],delete this["on"+e]}};te.Event=re;var ie={},oe={},ae={},fe=0,ue=function(e){for(var n=0,t=e=(e+a).split(",");n<t.length;n++){var r=t[n];E(oe,r)?oe[r]++:oe[r]=1}return e},ce=function(e){for(var n,t=0,r=e;t<r.length;t++)n=r[t],E(oe,n)&&(--oe[n]||(delete oe[n],delete ie[n]))};var he=A({get:function(e){var n=e?ie[e]:ie;return n},set:function(e){fe=T(e,ie,ae)||fe},digest:function(e){e&&he.set(e),fe&&(fe=0,this.fire("changed",{keys:ae}),ae={})},diff:function(){return ae},clean:function(e){return{ctor:function(){e=ue(e),this.on("destroy",function(){return ce(e)})}}}},re);te.State=he;var se,de,ve,$e,le,pe,ge,me,be="view",we=new L,ye=new L,xe=c.location,ke=0,Ve={query:{},params:{},href:a},Ie=/(?:^.*\/\/[^\/]+|#.*$)/gi,_e=/^[^#]*#?!?/,je=function(e){return this[m][e]||a},Se=function(e,n){e="#!"+e,n?xe.replace(e):xe.hash=e},Te=function(){var e,n,t=Ae().srcHash;W(c,"hashchange",function(r,i,o){n||(i=Ae(),(e=i.srcHash)!=t&&(o=function(){r.p=1,t=e,n=a,Se(e),Oe()},r={reject:function(){r.p=1,n=a,Se(t)},resolve:o,prevent:function(){n=1}},Ue.fire("change",r),n||r.p||o()))}),c.onbeforeunload=function(e,n,t){if(e=e||c.event,n={},Ue.fire("pageunload",n),t=n.msg)return e&&(e.returnValue=t),t},Oe()},qe=h.title,Ae=function(e){e=e||xe.href;var n,t,i,o,f,u=we.get(e);return u||(n=e.replace(Ie,a),t=e.replace(_e,a),i=Y(n),o=Y(t),f=A({},i[m],o[m]),u={get:je,href:e,srcQuery:n,srcHash:t,query:i,hash:o,params:f},K&&(!function(e,n){if(de||(de=_.routes||{},ve=_.unmatchView,$e=_.defaultView,le=_.defaultPath||"/",pe=_.rewrite),!e[be]){var t=e.hash[b]||le;pe&&(t=pe(t,e[m],de)),n=de[t]||ve||$e,e[b]=t,e[be]=n,r(n)&&A(e,n)}}(u),we.set(e,u))),u},Oe=function(){var e=Ae(),n=function(e,n){var t=e.href,r=n.href,i=t+l+r,o=ye.get(i);if(!o){var a,f;o={params:f={},force:!t};for(var u=e[m],c=n[m],h=function(e){var n=u[e],t=c[e];n!=t&&(f[e]={from:n,to:t},a=1)},s=0,d=O(u).concat(O(c));s<d.length;s++)h(d[s]);u=e,c=n,f=o,h(b),h(be),ye.set(i,o={a:a,b:o})}return o}(Ve,Ve=e);return!ke&&n.a&&((se=n.b)[b]&&(h.title=e.title||qe),Ue.fire("changed",se)),ke=0,se},Ue=A({parse:Ae,diff:Oe,to:function(e,n,t,i){!n&&r(e)&&(n=e,e=a);var o,f,u,c,h=Y(e),s=h[m],d=h[b],v=Ve[b],$=Ve[m],l=Ve.query[m];if(A(s,n),d)for(v in l)E(s,v)||(s[v]=a);else $&&(d=v,s=A({},$,s));f=Ve,u=t,c=i,(o=ee(o=d,s,l))!=f.srcHash&&(ke=c,Se(o,u))}},re);te.Router=Ue;var Ce=function(e){if(!e.$a&&!e.$b&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));var n=void 0,t=e.id,r=e.pId;(n=Pe[r])&&!E(n.$d,t)&&(n.$d[t]=1,n.$rc++,Ce(n))}},He=function(e,n){if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",n);var t=void 0,r=e.id,i=e.pId;(t=Pe[i])&&E(t.$d,r)&&(t.$rc--,delete t.$d[r],He(t,n))}},Pe={},Ze=[],Ee=0,Ne=function(e,n,t){if(e&&e.$f!=Ee&&(t=e.$v)&&t.$a>1){(n?function(e,n,t){var r,i=e.$os;if(i)for(var o=0,a=i;o<a.length&&(r=a[o],!(t=E(n,r)));o++);return t}(t,n):yn(t))&&t.$b();for(var r=void 0,i=0,o=e.children();i<o.length;i++)r=o[i],Ne(Pe[r],n)}},ze=function(e){var t,r,i=(ge||(n=h.body,j(r=_.rootId)||(n.id=r),ge=new Le(r)),ge);(t=e[be])?i.mountView(t.to):(Ee=o++,Ne(i,e.keys))},Le=function(e,n,t){var r,i;(t=this).id=e,t.$c={},t.$cc=0,t.$rc=0,t.$g=1,t.$d={},t.$e=[],t.pId=n,i=t,E(Pe,r=e)||(Pe[r]=i,Le.fire("add",{vframe:i}),(r=j(r))&&(r.vframe=i))};A(Le,{all:function(){return Pe},get:function(e){return Pe[e]}},re),A(Le[g],re,{mountView:function(e,n){var t,r,i,o,a,f,u=this,c=u.id,h=u.pId,s=u.$g,d=j(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$a=0,d&&e&&(u[b]=e,t=Y(e),i=t[b],r=++s,o=t[m],f=(f=(f=(f=Pe[h])&&f.$v)&&f.$d)&&f.$a,e.indexOf(l)>0&&N(f,o,o),u.$n=t[b],A(o,n),B(i,function(e){if(r==u.$g){if(!e)return _.error(Error("id:"+c+" cannot load:"+i));a=wn(e),i=new e(c,u,o,a),u.$v=i,u.$f=Ee,gn(i),Z(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var n,t,r=this,i=r.$v,o=r.id;r.$e=[],i&&(me||(t=1,me={id:o}),r.$a=1,r.unmountZone(0,1),He(r,me),r.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),ln(i,1),gn(i,1),i.owner=0),i.$a--,(n=j(o))&&r.$h&&e(n).html(r.$i),t&&(me=0)),r.$g++},mountVframe:function(e,n,t){var r,i=this,o=i.id,a=i.$c;return He(i,{id:e}),(r=Pe[e])||(E(a,e)||(i.$o=0,i.$cc++),a[e]=e,(r=Ze.pop())?Le.call(r,e,o):r=new Le(e,o)),r.mountView(n,t),r},mountZone:function(n,t){var r,i,o=this,a=[];n=n||o.id;var f,u=e("#"+n+" ["+w+"]");o.$b=1;for(var c=0,h=u;c<h.length;c++)r=h[c],i=P(r),r.$a||(r.$a=1,a.push([i,r.getAttribute(w)]));for(var s=0,d=a;s<d.length;s++)i=(f=d[s])[0],r=f[1],a[i]?_.error(Error("vf.id duplicate:"+i+" at "+o[b])):o.mountVframe(a[i]=i,r);o.$b=0,t||Ce(o)},unmountVframe:function(e,n){var t,r,i,o;if(e=e?this.$c[e]:this.id,t=Pe[e]){var a=t.$cr,f=t.pId;t.unmountView(),i=a,(o=Pe[r=e])&&(delete Pe[r],Le.fire("remove",{vframe:o,fcc:i}),(r=j(r))&&(r.$a=r.vframe=0)),t.id=t.pId=t.$c=t.$d=t.$h=0,t.off("alter"),t.off("created"),Ze.push(t),(t=Pe[f])&&E(t.$c,e)&&(delete t.$c[e],t.$o=0,t.$cc--,n||Ce(t))}},unmountZone:function(e,n){var t;for(t in this.$c)(!e||t!=e&&q(t,e))&&this.unmountVframe(t,1);n||Ce(this)},parent:function(e,n){for(n=this,e=e>>>0||1;n&&e--;)n=Pe[n.pId];return n},children:function(e){return(e=this).$o||(e.$o=O(e.$c))},invoke:function(e,n){var t,r,i,o,a,f=this.$e;return(r=this.$v)&&r.$f?t=(i=r[e])&&Z(i,n,r):((o=f[a=l+e])&&(o.r=n===o.a),o={n:e,a:n,k:a},f.push(o),f[a]=o),t}}),te.Vframe=Le,e.fn.invokeView=function(e,n){if(this.length){var t=this[0].vframe;if(void 0===n)return t&&t.invoke(e);for(var r=0;r<this.length;r++){(t=this[r].vframe)&&t.invoke(e,n)}}};var Me=new L(30,10),Be=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Re={},De={},Fe=function(e,t){var r,i,o,a,u,c,h=[],s=e,d=e.getAttribute("mx-"+t),v=[],$=0;if(d&&((a=Me.get(d))||((a={v:(a=d.match(Be)||f)[1],n:a[2],i:a[3]}).p=a.i&&Z(Function("return "+a.i),f,e),Me.set(d,a)),a=A({},a,{r:d}),h.push(a)),a&&!a.v||De[t]){if(!(c=e.$a))for(v.push(s);s!=n&&(s=s.parentNode);){if(Pe[i=s.id]||(i=s.$v)){c=i;break}v.push(s)}if(c){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=c;s=e.id,Pe[s]&&($=c=s);do{if((r=Pe[c])&&(u=r.$v)){for(i in(o=u.$so)[t])o={r:i,v:c,n:i},i?J(e,i)&&h.push(o):$&&h.unshift(o);if(u.$e&&!$){a&&!a.v&&(a.v=c);break}$=0}}while(r&&(c=r.pId))}}return h},Je=function(e){for(var t,r,i,o,a,f,u,c=e.target,h=e.type,s=[];c!=n;){if((t=Fe(c,h)).length){s=[];for(var d=0,v=t;d<v.length;d++){var $=v[d],p=$.v,g=($.r,$.n),b=$.p,w=$.i;if(f!=p){if(f&&e.isPropagationStopped())break;f=p}if(o=(i=Pe[p])&&i.$v){if((a=o[g+l+h])&&(e.eventTarget=c,u=b||{},w&&w.indexOf(l)>0&&N(o.$d.$a,u,u={}),e[m]=u,Z(a,e,o),e.isImmediatePropagationStopped()))break;0}else e.stopPropagation();0}}if((r=c.$)&&r[h]||e.isPropagationStopped())break;s.push(c),c=c.parentNode||n}for(var y=0,x=s;y<x.length;y++)(r=(c=x[y]).$||(c.$={}))[h]=1},Qe={input_value:1,input_checked:1,input_disabled:1,input_readonly:1,textarea_value:1,textarea_checked:1,textarea_disabled:1,textarea_readonly:1,option_selected:1},We={area:1,br:1,col:1,embed:1,hr:1,img:1,input:1,param:1,source:1,track:1,wbr:1},Ge=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,Ke=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,Xe=/^<\/[a-z\d+]+>/,Ye={},en=/&#?[^\W]+;?/g,nn=h.createElement("div"),tn=function(e){return E(Ye,e)||(nn.innerHTML=e,Ye[e]=nn.innerText),Ye[e]},rn=function(e,n){var t=P(n);e.$c[t]?e.unmountVframe(t,1):e.unmountZone(t,1)},on=function(e,n,t,r){for(var i,o,a,f=0,u=n.i;f<u.length;f++)o=(i=u[f]).d,E(t.j,o)||(i.e?"value"==o?e.value="":e[o]=!1:"id"==o?r.d.push([e,""]):e.removeAttribute(o));for(var c=0,h=t.i;c<h.length;c++)o=(i=h[c]).d,a=i.f,n.j[o]!=a&&(i.e?"value"==o?e.value=a:e[o]=!0:"id"==o?r.d.push([e,a]):e.setAttribute(o,a))},an=function(e,n,t,r,i,o,a,f,u){if(3==(u=e.h))return h.createTextNode(e.b);f="svg"==u?"http://www.w3.org/2000/svg":n.namespaceURI,(r=h.createElementNS(f,u)).innerHTML=e.b;for(var c=0,s=e.i;c<s.length;c++)o=(i=s[c]).d,a=i.f,i.e?"value"==o?r.value=a:r[o]=!0:"id"==o?t.d.push([r,a]):r.setAttribute(o,a);return r},fn=function(e,n,t,r,i,o,a){var f,u,c,h,s,d,v,$,l,p,g,m,b=e.childNodes,w={};if(n){for(f=(s=n.a).length,u=(d=t.a).length,c=0;c<f;c++)(p=(v=s[c]).k)&&(p=w[p]||(w[p]=[])).push({l:b[c],m:v});for(c=0;c<u;c++)if(v=s[c],(p=w[($=d[c]).k])&&(p=p.pop())){if(g=p.l,m=p.m,g!=b[c]){for(s.splice(c,0,v=m),h=s.length;h--;)if(s[h]==m){s.splice(h,1);break}e.insertBefore(g,b[c])}un(b[c],e,v,$,r,i,o,a)}else v?w[v.k]?(s.splice(c,0,$),f++,e.insertBefore(an($,e,r),b[c])):un(b[c],e,v,$,r,i,o,a):e.appendChild(an($,e,r));for(c=u;c<f;c++)l=e.lastChild,rn(i,l),e.removeChild(l),r.c=1}else r.c=1,e.innerHTML=t.b},un=function(e,n,t,r,i,o,a,f){if(t.h==r.h)if(3==t.h)t.b!=r.b&&(e.nodeValue=r.b);else{var u=r.j[w],c=r.b,h=void 0,s=void 0,d=void 0,v=Pe[e.id],$=void 0,p=void 0,g=void 0,y=void 0,x=void 0,k=void 0;u&&v&&($=(g=v.$v).$g,y=Y(u),k=c!=v.$i,p=u.indexOf("?")>0||k),u&&v&&v.$n==y[b]?p&&($?(x=y[m],u.indexOf(l)>-1&&N(a,x,x),v.$i=c,v[b]=u,y={keys:f,inner:c,deep:!g.$e,html:k},on(e,t,r,i),Z($,[x,y],g)&&g.$b(),s=y.deep):(d=1,s=1,h=1)):(h=1,s=1,d=v),d&&v.unmountVframe(0,1),h&&on(e,t,r,i),s&&!We[r.h]&&(i.c=1,fn(e,t,r,i,o,a,f))}else rn(o,e),n.replaceChild(an(r,n,i),e),i.c=1},cn=function(e,n,t,r){var i,o,u,c=e.$b,h=Pe[c],d=h&&h.$v,v={d:[]},$=j(c);if(d&&d.$a>0&&(i=d.$e)){if(t){u=function(e){for(var n,t,r,i,o,u,c,h,s,d,v,$=e.length,l=0,p={a:[],b:e},g=[{c:p}],m=function(e,n){n.replace(Ke,function(n,t,r){r=r||a,"id"==t?v=r:t==w&&r&&!v&&(v=Y(r)[b]),u.push({d:t,e:Qe[e+"_"+t],f:r}),s[t]=r})};l<$;)n=1,0==(r=e.slice(l)).indexOf("</")?(i=r.match(Xe))&&(h=(p=g.pop()).c,u=e.slice(p.g,l),"textarea"==h.h?(h.i.push({d:"value",f:u,e:1}),h.j.value=u,h.a=f):h.b=u,p=g[g.length-1].c,l+=i[0].length,n=0):"<"==r[0]&&(i=r.match(Ge))&&(o=i[1],c=i[3]||We[o],u=[],s={},v="",m(o,i[2]),h={k:v,h:o,i:u,j:s,a:[]},l+=i[0].length,p.a.push(h),c||(g.push({c:h,g:l}),p=h),n=0),n&&(l+=(d=(t=r.indexOf("<"))<0?r:r.substring(0,t)).length,h={h:3,b:d.replace(en,tn)},p.a.push(h));return p}(vn(i(n),c)),fn($,e.$d,u,v,h,n,r),e.$d=u;for(var l=0,p=v.d;l<p.length;l++)(o=p[l])[0].id=o[1];v.c&&(d.endUpdate(c),s.trigger({type:"htmlchanged",vId:c}))}d.fire("domready")}},hn=function(e){var n;this.$b=e,this.$c=1,this.$a=((n={vId:e})[l]=1,n),this.$k={}};A(hn[g],{get:function(e,n){return n=this.$a,e&&(n=n[e]),n},set:function(e){var n=this,t=n.$a,r=n.$k;return e&&(n.$c=T(e,t,r)||n.$c),n},digest:function(e,n,t){var r=this;return r.set(e),e=r.$a,n=r.$k,t=r.$c,r.$c=0,r.$k={},cn(r,e,t,n),r},snapshot:function(){return this.$e=$(this.$a),this},altered:function(){if(this.$e)return this.$e!=$(this.$a)}});var sn=/^(\$?)([^<]*)<([^>]+)>$/,dn=/\x1f/g,vn=function(e,n){return(e+a).replace(dn,n)},$n=function(e,n,t){return e.$h?t=e:((t=function(e){Z(t.$h,e,this)}).$h=[e],t.$i=1),t.$h=t.$h.concat(n.$h||n),t},ln=function(e,n){var t,r,i=e.$r;for(t in i)r=i[t],(n||r.x)&&pn(i,t,1)},pn=function(e,n,t,r){var i,o,a=e[n];return a&&a!=r&&((i=(o=a.e).destroy)&&t&&Z(i,f,o),delete e[n]),o},gn=function(e,t){var r,i,o,a,f,u,c=e.$eo,h=e.$so,s=e.$el,d=e.id;for(r in c)i=r,o=h[r],a=t,void 0,void 0,f=0|Re[i],u=a?-1:1,f&&a!==f||W(n,i,Je,a),Re[i]=f+u,o&&(De[i]=(0|De[i])+u);for(var v=0,$=s;v<$.length;v++)r=$[v],W(r.e,r.n,Q,t,{i:d,v:e,f:r.f,e:r.e})},mn=[],bn={win:c,doc:h},wn=function(e){if(!e[l]){e[l]=[];var n=e[g],t=void 0,r=void 0,i=void 0,o={},a=[],f={},c=void 0,h=void 0,s=void 0,d=void 0,v=void 0,$={};if(r=n.mixins){for(var p=0,m=r;p<m.length;p++)for(s in c=m[p])t=c[s],i=$[s],"ctor"!=s?(sn.test(s)&&(i?t=$n(i,t):t.$i=1),$[s]=t):e[l].push(t);for(s in $)E(n,s)||(n[s]=$[s])}for(s in n)if(t=n[s],r=s.match(sn)){h=r[1],i=r[2];for(var b=0,w=r[3].split(u);b<w.length;b++){if(d=w[b],c=bn[i],v=1,h){if(c){a.push({f:t,e:c,n:d});continue}v=2,(c=f[d])||(c=f[d]={}),c[i]=1}o[d]=o[d]|v,(c=n[d=i+l+d])?c.$i&&(t.$i?n[d]=$n(c,t):E(n,s)&&(n[d]=t)):n[d]=t}}k="$b",V=(y=n)[x="render"],y[x]=y[k]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(I=this).$a>0&&(I.$a++,I.fire("rendercall"),ln(I),Z(V,e,I))},n.$eo=o,n.$el=a,n.$so=f,n.$e=n.tmpl,n.$g=n.assign}var y,x,k,V,I;return e[l]},yn=function(e){var n,t,r,i=e.$l;if(i.f&&(i.p&&(n=se[b]),!n&&i.k)){r=se[m];for(var o=0,a=i.k;o<a.length&&(t=a[o],!(n=E(r,t)));o++);}return n},xn=function(e,n,t,r){(r=this).owner=n,r.id=e,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new hn(r.id),Z(mn,t,r)},kn=xn[g];A(xn,{merge:function(){for(var e,n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,o=t;i<o.length;i++)(n=(e=o[i])&&e.ctor)&&mn.push(n),A(kn,e)},extend:function(e,n){var t=this,r=(e=e||{}).ctor,i=[];r&&i.push(r);var o=function(e,n,r,o){t.call(this,e,n,r),Z(i.concat(o),r,this)};return o.extend=t.extend,D(o,t,e,n)}}),A(kn,re,{init:v,wrapEvent:function(e){return vn(e,this.id)},beginUpdate:function(e,n){(n=this).$a>0&&n.$f&&n.owner.unmountZone(e,1)},endUpdate:function(e,n,t,r,i){(t=this).$a>0&&(e=e||t.id,n?i=n:(i=t.$f,t.$f=1),(r=t.owner).mountZone(e,n),i||d(t.wrapAsync(function(){!function(e,n,t){for(n=e.$e;n.length;)(t=n.shift()).r||e.invoke(t.n,t.a),delete n[t.k]}(r)}),0))},wrapAsync:function(e,n){var t=this,r=t.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==t.$a)return e.apply(n||t,i)}},observeLocation:function(e,n){var t;(t=this.$l).f=1,r(e)&&(n=e[b],e=e[m]),t.p=n,e&&(t.k=(e+a).split(u))},observeState:function(e){this.$os=(e+a).split(u)},capture:function(e,n,t,r){return r=this.$r,n?(pn(r,e,1,n),r[e]={e:n,x:t}):n=(r=r[e])&&r.e,n},release:function(e,n){return pn(this.$r,e,n)},leaveTip:function(e,n){var t=this,r=function(i){var o="a",a="b";"change"!=i.type&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):n()?(i.prevent(),r[a]=1,t.leaveConfirm(e,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(t){n()&&(t.msg=e)};Ue.on("change",r),Ue.on("pageunload",i),t.on("unload",r),t.on("destroy",function(){Ue.off("change",r),Ue.off("pageunload",i)})},render:v}),te.View=xn;var Vn=e.type,In=e.now||Date.now,_n=function(){this.id=V("b"),this.$={}};A(_n[g],{get:function(e,n,t){var r=n!=t,o=this.$;if(e){for(var f=i(e)?e.slice():(e+a).split("."),u=void 0;(u=f.shift())&&o;)o=o[u];u&&(o=t)}return r&&Vn(n)!=Vn(o)&&(o=n),o},set:function(e,n){var t;r(e)||((t={})[e]=n,e=t),A(this.$,e)}});var jn=function(e,n,t){(t=this[e])&&(delete this[e],Z(t,n,t.e))},Sn=function(e,n,t,r,o){if(e.$d)return e;if(e.$e)return e.enqueue(Sn.bind(e,e,n,t,r,o));e.$e=1,i(n)||(n=[n]);for(var a,f,u,c,h,s,d,v,$,l=e.constructor,p=0,g=l.$f,m=(a=t,f=l,u=e,c=n.length,h=r,s=l.$c,d=[],v=0,$=0,function(e,n){var t,r=this;$++;var i=r.$b,o=i.k;d[e+1]=r;var l,p={bag:r,error:n};if(n?(v=n,f.fire("fail",p),t=1):s.has(o)||(o&&s.set(o,r),i.t=In(),(l=i.a)&&Z(l,r,r),(l=i.x)&&f.clear(l),f.fire("done",p),t=1),!u.$d){var g=$==c;g&&(u.$e=0,2==h&&(d[0]=v,Z(a,d,u))),1==h&&Z(a,[n||null,r,g,e],u)}t&&f.fire("end",p)}),b=0,w=n;b<w.length;b++){var y=w[b];if(y){var x=l.get(y,o),k=x.e,V=k.$b.k,I=m.bind(k,p++),_=void 0;V&&g[V]?g[V].push(I):x.u?(V&&((_=[I]).e=k,g[V]=_,I=jn.bind(g,V)),l.$s(k,I)):I()}}return e},Tn=function(){var e=this;e.id=V("s"),e.$g=[]};A(Tn[g],{all:function(e,n){return Sn(this,e,n,2)},save:function(e,n){return Sn(this,e,n,2,1)},one:function(e,n){return Sn(this,e,n,1)},enqueue:function(e){var n=this;return n.$d||(n.$g.push(e),n.dequeue(n.$h)),n},dequeue:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t,r=this;r.$e||r.$d||(r.$e=1,d(function(){r.$e=0,r.$d||(t=r.$g.shift())&&Z(t,r.$h=e)},0))},destroy:function(e){(e=this).$d=1,e.$g=0}});var qn=function(e,n){return[$(n),$(e)].join(l)},An=function(e,n,t,r){(r=e&&e.$b)&&n[r.n]&&t.del(r.k)},On=A({add:function(e){var n,t=this.$b;i(e)||(e=[e]);for(var r=0,o=e;r<o.length;r++)if(n=o[r]){var a=n.name,f=n.cache;n.cache=0|f,t[a]=n}},create:function(e){var n=this.meta(e),t=0|e.cache||n.cache,i=new _n;i.set(n),i.$b={n:n.name,a:n.after,x:n.cleans,k:t&&qn(n,e)},r(e)&&i.set(e);var o=n.before;return o&&Z(o,i,i),this.fire("begin",{bag:i}),i},meta:function(e){return this.$b[e.name||e]||e},get:function(e,n){var t,r;return n||(t=this.cached(e)),t||(t=this.create(e),r=1),{e:t,u:r}},clear:function(e){this.$c.each(An,ne((e+a).split(u)))},cached:function(e){var n,t,r=this.$c,i=this.meta(e),o=0|e.cache||i.cache;if(o&&(t=qn(i,e)),t){var a=this.$f[t];a?n=a.e:(n=r.get(t))&&In()-n.$b.t>o&&(r.del(t),n=0)}return n}},re);return Tn.extend=function(e,n,t){var r=function(){Tn.call(this)};return r.$s=e,r.$c=new L(n,t),r.$f={},r.$b={},D(r,Tn,null,On)},te.Service=Tn,A(v[g],re),v.extend=function e(n,t){var r=this,i=n&&n.ctor,o=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.apply(this,e),i&&i.apply(this,e)};return o.extend=e,D(o,r,n,t)},te.Base=v,te});