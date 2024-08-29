const fe="modulepreload",pe=function(t){return"/"+t},X={},de=function(e,_,l){let o=Promise.resolve();if(_&&_.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");o=Promise.all(_.map(i=>{if(i=pe(i),i in X)return;X[i]=!0;const u=i.endsWith(".css"),s=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":fe,u||(f.as="script",f.crossOrigin=""),f.href=i,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((n,d)=>{f.addEventListener("load",n),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>e()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})};var F,v,_e,he,S,Y,ne,I,q,O,V,M={},oe=[],ve=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function w(t,e){for(var _ in e)t[_]=e[_];return t}function re(t){var e=t.parentNode;e&&e.removeChild(t)}function L(t,e,_){var l,o,r,c={};for(r in e)r=="key"?l=e[r]:r=="ref"?o=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)c[r]===void 0&&(c[r]=t.defaultProps[r]);return A(t,c,l,o,null)}function A(t,e,_,l,o){var r={type:t,props:e,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++_e,__i:-1,__u:0};return o==null&&v.vnode!=null&&v.vnode(r),r}function H(t){return t.children}function R(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?P(t):null}function le(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return le(t)}}function Z(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!$.__r++||Y!==v.debounceRendering)&&((Y=v.debounceRendering)||ne)($)}function $(){var t,e,_,l,o,r,c,i;for(S.sort(I);t=S.shift();)t.__d&&(e=S.length,l=void 0,r=(o=(_=t).__v).__e,c=[],i=[],_.__P&&((l=w({},o)).__v=o.__v+1,v.vnode&&v.vnode(l),J(_.__P,l,o,_.__n,_.__P.namespaceURI,32&o.__u?[r]:null,c,r??P(o),!!(32&o.__u),i),l.__v=o.__v,l.__.__k[l.__i]=l,ce(c,l,i),l.__e!=r&&le(l)),S.length>e&&S.sort(I));$.__r=0}function ie(t,e,_,l,o,r,c,i,u,s,f){var n,d,a,y,m,g=l&&l.__k||oe,p=e.length;for(_.__d=u,ye(_,e,g),u=_.__d,n=0;n<p;n++)(a=_.__k[n])!=null&&typeof a!="boolean"&&typeof a!="function"&&(d=a.__i===-1?M:g[a.__i]||M,a.__i=n,J(t,a,d,o,r,c,i,u,s,f),y=a.__e,a.ref&&d.ref!=a.ref&&(d.ref&&G(d.ref,null,a),f.push(a.ref,a.__c||y,a)),m==null&&y!=null&&(m=y),65536&a.__u||d.__k===a.__k?u=se(a,u,t):typeof a.type=="function"&&a.__d!==void 0?u=a.__d:y&&(u=y.nextSibling),a.__d=void 0,a.__u&=-196609);_.__d=u,_.__e=m}function ye(t,e,_){var l,o,r,c,i,u=e.length,s=_.length,f=s,n=0;for(t.__k=[],l=0;l<u;l++)c=l+n,(o=t.__k[l]=(o=e[l])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?A(null,o,null,null,null):z(o)?A(H,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?A(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,i=ge(o,_,c,f),o.__i=i,r=null,i!==-1&&(f--,(r=_[i])&&(r.__u|=131072)),r==null||r.__v===null?(i==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):i!==c&&(i==c-1?n=i-c:i==c+1?n++:i>c?f>u-c?n+=i-c:n--:i<c&&n++,i!==l+n&&(o.__u|=65536))):(r=_[c])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=P(r)),B(r,r,!1),_[c]=null,f--);if(f)for(l=0;l<s;l++)(r=_[l])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=P(r)),B(r,r))}function se(t,e,_){var l,o;if(typeof t.type=="function"){for(l=t.__k,o=0;l&&o<l.length;o++)l[o]&&(l[o].__=t,e=se(l[o],e,_));return e}t.__e!=e&&(e&&t.type&&!_.contains(e)&&(e=P(t)),_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ge(t,e,_,l){var o=t.key,r=t.type,c=_-1,i=_+1,u=e[_];if(u===null||u&&o==u.key&&r===u.type&&!(131072&u.__u))return _;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;c>=0||i<e.length;){if(c>=0){if((u=e[c])&&!(131072&u.__u)&&o==u.key&&r===u.type)return c;c--}if(i<e.length){if((u=e[i])&&!(131072&u.__u)&&o==u.key&&r===u.type)return i;i++}}return-1}function K(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||ve.test(e)?_:_+"px"}function D(t,e,_,l,o){var r;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)_&&e in _||K(t.style,e,"");if(_)for(e in _)l&&_[e]===l[e]||K(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=_,_?l?_.u=l.u:(_.u=q,t.addEventListener(e,r?V:O,r)):t.removeEventListener(e,r?V:O,r);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&_==1?"":_))}}function ee(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=q++;else if(e.t<_.u)return;return _(v.event?v.event(e):e)}}}function J(t,e,_,l,o,r,c,i,u,s){var f,n,d,a,y,m,g,p,h,C,k,T,E,Q,U,W,b=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(u=!!(32&_.__u),r=[i=e.__e=_.__e]),(f=v.__b)&&f(e);e:if(typeof b=="function")try{if(p=e.props,h="prototype"in b&&b.prototype.render,C=(f=b.contextType)&&l[f.__c],k=f?C?C.props.value:f.__:l,_.__c?g=(n=e.__c=_.__c).__=n.__E:(h?e.__c=n=new b(p,k):(e.__c=n=new R(p,k),n.constructor=b,n.render=be),C&&C.sub(n),n.props=p,n.state||(n.state={}),n.context=k,n.__n=l,d=n.__d=!0,n.__h=[],n._sb=[]),h&&n.__s==null&&(n.__s=n.state),h&&b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,b.getDerivedStateFromProps(p,n.__s))),a=n.props,y=n.state,n.__v=e,d)h&&b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),h&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(h&&b.getDerivedStateFromProps==null&&p!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(p,k),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(p,n.__s,k)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(n.props=p,n.state=n.__s,n.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(N){N&&(N.__=e)}),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[],n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(p,n.__s,k),h&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,y,m)})}if(n.context=k,n.props=p,n.__P=t,n.__e=!1,E=v.__r,Q=0,h){for(n.state=n.__s,n.__d=!1,E&&E(e),f=n.render(n.props,n.state,n.context),U=0;U<n._sb.length;U++)n.__h.push(n._sb[U]);n._sb=[]}else do n.__d=!1,E&&E(e),f=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++Q<25);n.state=n.__s,n.getChildContext!=null&&(l=w(w({},l),n.getChildContext())),h&&!d&&n.getSnapshotBeforeUpdate!=null&&(m=n.getSnapshotBeforeUpdate(a,y)),ie(t,z(W=f!=null&&f.type===H&&f.key==null?f.props.children:f)?W:[W],e,_,l,o,r,c,i,u,s),n.base=e.__e,e.__u&=-161,n.__h.length&&c.push(n),g&&(n.__E=n.__=null)}catch(N){if(e.__v=null,u||r!=null){for(e.__u|=u?160:32;i&&i.nodeType===8&&i.nextSibling;)i=i.nextSibling;r[r.indexOf(i)]=null,e.__e=i}else e.__e=_.__e,e.__k=_.__k;v.__e(N,e,_)}else r==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=me(_.__e,e,_,l,o,r,c,u,s);(f=v.diffed)&&f(e)}function ce(t,e,_){e.__d=void 0;for(var l=0;l<_.length;l++)G(_[l],_[++l],_[++l]);v.__c&&v.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(r){r.call(o)})}catch(r){v.__e(r,o.__v)}})}function me(t,e,_,l,o,r,c,i,u){var s,f,n,d,a,y,m,g=_.props,p=e.props,h=e.type;if(h==="svg"?o="http://www.w3.org/2000/svg":h==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(s=0;s<r.length;s++)if((a=r[s])&&"setAttribute"in a==!!h&&(h?a.localName===h:a.nodeType===3)){t=a,r[s]=null;break}}if(t==null){if(h===null)return document.createTextNode(p);t=document.createElementNS(o,h,p.is&&p),r=null,i=!1}if(h===null)g===p||i&&t.data===p||(t.data=p);else{if(r=r&&F.call(t.childNodes),g=_.props||M,!i&&r!=null)for(g={},s=0;s<t.attributes.length;s++)g[(a=t.attributes[s]).name]=a.value;for(s in g)if(a=g[s],s!="children"){if(s=="dangerouslySetInnerHTML")n=a;else if(s!=="key"&&!(s in p)){if(s=="value"&&"defaultValue"in p||s=="checked"&&"defaultChecked"in p)continue;D(t,s,null,a,o)}}for(s in p)a=p[s],s=="children"?d=a:s=="dangerouslySetInnerHTML"?f=a:s=="value"?y=a:s=="checked"?m=a:s==="key"||i&&typeof a!="function"||g[s]===a||D(t,s,a,g[s],o);if(f)i||n&&(f.__html===n.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(n&&(t.innerHTML=""),ie(t,z(d)?d:[d],e,_,l,h==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,c,r?r[0]:_.__k&&P(_,0),i,u),r!=null)for(s=r.length;s--;)r[s]!=null&&re(r[s]);i||(s="value",y!==void 0&&(y!==t[s]||h==="progress"&&!y||h==="option"&&y!==g[s])&&D(t,s,y,g[s],o),s="checked",m!==void 0&&m!==t[s]&&D(t,s,m,g[s],o))}return t}function G(t,e,_){try{if(typeof t=="function"){var l=typeof t.__u=="function";l&&t.__u(),l&&e==null||(t.__u=t(e))}else t.current=e}catch(o){v.__e(o,_)}}function B(t,e,_){var l,o;if(v.unmount&&v.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||G(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){v.__e(r,e)}l.base=l.__P=null}if(l=t.__k)for(o=0;o<l.length;o++)l[o]&&B(l[o],e,_||typeof t.type!="function");_||t.__e==null||re(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function be(t,e,_){return this.constructor(t,_)}function j(t,e,_){var l,o,r,c;v.__&&v.__(t,e),o=(l=typeof _=="function")?null:_&&_.__k||e.__k,r=[],c=[],J(e,t=(!l&&_||e).__k=L(H,null,[t]),o||M,M,e.namespaceURI,!l&&_?[_]:o?null:e.firstChild?F.call(e.childNodes):null,r,!l&&_?_:o?o.__e:e.firstChild,l,c),ce(r,t,c)}function ae(t,e){j(t,e,ae)}F=oe.slice,v={__e:function(t,e,_,l){for(var o,r,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,l||{}),c=o.__d),c)return o.__E=o}catch(i){t=i}throw t}},_e=0,he=function(t){return t!=null&&t.constructor==null},R.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},_),this.props)),t&&w(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),Z(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Z(this))},R.prototype.render=H,S=[],ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I=function(t,e){return t.__v.__b-e.__v.__b},$.__r=0,q=0,O=ee(!1),V=ee(!0);const ue=({value:t,name:e,hydrate:_=!0})=>t?L(_?"astro-slot":"astro-static-slot",{name:e,dangerouslySetInnerHTML:{__html:t}}):null;ue.shouldComponentUpdate=()=>!1;var te=ue;const x=new Map;var ke=t=>async(e,_,{default:l,...o},{client:r})=>{if(!t.hasAttribute("ssr"))return;for(const[u,s]of Object.entries(o))_[u]=L(te,{value:s,name:u});if(t.dataset.preactSignals){const{signal:u}=await de(async()=>{const{signal:f}=await import("./signals.module.CKUtNxEv.js");return{signal:f}},[]);let s=JSON.parse(t.dataset.preactSignals);for(const[f,n]of Object.entries(s))if(Array.isArray(n))n.forEach(([d,a])=>{const y=_[f][a];let m=y;if(typeof a!="string"&&(m=y[0],a=y[1]),!x.has(d)){const g=u(m);x.set(d,g)}_[f][a]=x.get(d)});else{if(!x.has(n)){const d=u(_[f]);x.set(n,d)}_[f]=x.get(n)}}(r!=="only"?ae:j)(L(e,_,l!=null?L(te,{value:l}):l),t),t.addEventListener("astro:unmount",()=>j(null,t),{once:!0})};export{R as b,ke as c,v as l,he as t};
