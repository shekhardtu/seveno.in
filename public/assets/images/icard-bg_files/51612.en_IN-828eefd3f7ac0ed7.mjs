(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[51612,8575],{762587:e=>{function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,n,r,o){n=n||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var i=/\+/g;e=e.split(n);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var l=e.length;a>0&&l>a&&(l=a);for(var h=0;h<l;++h){var c,u,d,p,f=e[h].replace(i,"%20"),m=f.indexOf(r);m>=0?(c=f.substr(0,m),u=f.substr(m+1)):(c=f,u=""),d=decodeURIComponent(c),p=decodeURIComponent(u),t(s,d)?Array.isArray(s[d])?s[d].push(p):s[d]=[s[d],p]:s[d]=p}return s}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,n,r,o){return n=n||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(o){var s=encodeURIComponent(t(o))+r;return Array.isArray(e[o])?e[o].map((function(e){return s+encodeURIComponent(t(e))})).join(n):s+encodeURIComponent(t(e[o]))})).join(n):o?encodeURIComponent(t(o))+r+encodeURIComponent(t(e)):""}},817673:(e,t,n)=>{t.decode=t.parse=n(762587),t.encode=t.stringify=n(712361)},52511:function(e,t,n){var r;e=n.nmd(e),function(o){t&&t.nodeType,e&&e.nodeType;var s="object"==typeof n.g&&n.g;s.global!==s&&s.window!==s&&s.self;var i,a=2147483647,l=36,h=/^xn--/,c=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,f=String.fromCharCode;function m(e){throw RangeError(d[e])}function v(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function _(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+v((e=e.replace(u,".")).split("."),t).join(".")}function g(e){for(var t,n,r=[],o=0,s=e.length;o<s;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<s?56320==(64512&(n=e.charCodeAt(o++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--):r.push(t);return r}function b(e){return v(e,(function(e){var t="";return e>65535&&(t+=f((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=f(e)})).join("")}function y(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function w(e,t,n){var r=0;for(e=n?p(e/700):e>>1,e+=p(e/t);e>455;r+=l)e=p(e/35);return p(r+36*e/(e+38))}function k(e){var t,n,r,o,s,i,h,c,u,d,f,v=[],_=e.length,g=0,y=128,k=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&m("not-basic"),v.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<_;){for(s=g,i=1,h=l;o>=_&&m("invalid-input"),((c=(f=e.charCodeAt(o++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:l)>=l||c>p((a-g)/i))&&m("overflow"),g+=c*i,!(c<(u=h<=k?1:h>=k+26?26:h-k));h+=l)i>p(a/(d=l-u))&&m("overflow"),i*=d;k=w(g-s,t=v.length+1,0==s),p(g/t)>a-y&&m("overflow"),y+=p(g/t),g%=t,v.splice(g++,0,y)}return b(v)}function x(e){var t,n,r,o,s,i,h,c,u,d,v,_,b,k,x,I=[];for(_=(e=g(e)).length,t=128,n=0,s=72,i=0;i<_;++i)(v=e[i])<128&&I.push(f(v));for(r=o=I.length,o&&I.push("-");r<_;){for(h=a,i=0;i<_;++i)(v=e[i])>=t&&v<h&&(h=v);for(h-t>p((a-n)/(b=r+1))&&m("overflow"),n+=(h-t)*b,t=h,i=0;i<_;++i)if((v=e[i])<t&&++n>a&&m("overflow"),v==t){for(c=n,u=l;!(c<(d=u<=s?1:u>=s+26?26:u-s));u+=l)x=c-d,k=l-d,I.push(f(y(d+x%k,0))),c=p(x/k);I.push(f(y(c,0))),s=w(n,b,r==o),n=0,++r}++n,++t}return I.join("")}i={version:"1.3.2",ucs2:{decode:g,encode:b},decode:k,encode:x,toASCII:function(e){return _(e,(function(e){return c.test(e)?"xn--"+x(e):e}))},toUnicode:function(e){return _(e,(function(e){return h.test(e)?k(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},608575:(e,t,n)=>{var r=n(52511),o=n(762502);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=b,t.resolve=function(e,t){return b(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?b(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=b(e));return e instanceof s?e.format():s.prototype.format.call(e)},t.Url=s;var i=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,h=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(h),u=["%","/","?",";","#"].concat(c),d=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},_={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=n(817673);function b(e,t,n){if(e&&o.isObject(e)&&e instanceof s)return e;var r=new s;return r.parse(e,t,n),r}s.prototype.parse=function(e,t,n){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var s=e.indexOf("?"),a=-1!==s&&s<e.indexOf("#")?"?":"#",h=e.split(a);h[0]=h[0].replace(/\\/g,"/");var b=e=h.join(a);if(b=b.trim(),!n&&1===e.split("#").length){var y=l.exec(b);if(y)return this.path=b,this.href=b,this.pathname=y[1],y[2]?(this.search=y[2],this.query=t?g.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var w=i.exec(b);if(w){var k=(w=w[0]).toLowerCase();this.protocol=k,b=b.substr(w.length)}if(n||w||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var x="//"===b.substr(0,2);!x||w&&v[w]||(b=b.substr(2),this.slashes=!0)}if(!v[w]&&(x||w&&!_[w])){for(var I,A,S=-1,P=0;P<d.length;P++){-1!==(C=b.indexOf(d[P]))&&(-1===S||C<S)&&(S=C)}-1!==(A=-1===S?b.lastIndexOf("@"):b.lastIndexOf("@",S))&&(I=b.slice(0,A),b=b.slice(A+1),this.auth=decodeURIComponent(I)),S=-1;for(P=0;P<u.length;P++){var C;-1!==(C=b.indexOf(u[P]))&&(-1===S||C<S)&&(S=C)}-1===S&&(S=b.length),this.host=b.slice(0,S),b=b.slice(S),this.parseHost(),this.hostname=this.hostname||"";var O="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!O)for(var T=this.hostname.split(/\./),j=(P=0,T.length);P<j;P++){var Z=T[P];if(Z&&!Z.match(p)){for(var D="",N=0,U=Z.length;N<U;N++)Z.charCodeAt(N)>127?D+="x":D+=Z[N];if(!D.match(p)){var R=T.slice(0,P),E=T.slice(P+1),M=Z.match(f);M&&(R.push(M[1]),E.unshift(M[2])),E.length&&(b="/"+E.join(".")+b),this.hostname=R.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),O||(this.hostname=r.toASCII(this.hostname));var q=this.port?":"+this.port:"",G=this.hostname||"";this.host=G+q,this.href+=this.host,O&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!m[k])for(P=0,j=c.length;P<j;P++){var L=c[P];if(-1!==b.indexOf(L)){var B=encodeURIComponent(L);B===L&&(B=escape(L)),b=b.split(L).join(B)}}var F=b.indexOf("#");-1!==F&&(this.hash=b.substr(F),b=b.slice(0,F));var z=b.indexOf("?");if(-1!==z?(this.search=b.substr(z),this.query=b.substr(z+1),t&&(this.query=g.parse(this.query)),b=b.slice(0,z)):t&&(this.search="",this.query={}),b&&(this.pathname=b),_[k]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){q=this.pathname||"";var W=this.search||"";this.path=q+W}return this.href=this.format(),this},s.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",s=!1,i="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(i=g.stringify(this.query));var a=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||_[t])&&!1!==s?(s="//"+(s||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):s||(s=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),t+s+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+r},s.prototype.resolve=function(e){return this.resolveObject(b(e,!1,!0)).format()},s.prototype.resolveObject=function(e){if(o.isString(e)){var t=new s;t.parse(e,!1,!0),e=t}for(var n=new s,r=Object.keys(this),i=0;i<r.length;i++){var a=r[i];n[a]=this[a]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),h=0;h<l.length;h++){var c=l[h];"protocol"!==c&&(n[c]=e[c])}return _[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!_[e.protocol]){for(var u=Object.keys(e),d=0;d<u.length;d++){var p=u[d];n[p]=e[p]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||v[e.protocol])n.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),n.pathname=f.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var m=n.pathname||"",g=n.search||"";n.path=m+g}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=y||b||n.host&&e.pathname,k=w,x=n.pathname&&n.pathname.split("/")||[],I=(f=e.pathname&&e.pathname.split("/")||[],n.protocol&&!_[n.protocol]);if(I&&(n.hostname="",n.port=null,n.host&&(""===x[0]?x[0]=n.host:x.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===f[0]?f[0]=e.host:f.unshift(e.host)),e.host=null),w=w&&(""===f[0]||""===x[0])),y)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,x=f;else if(f.length)x||(x=[]),x.pop(),x=x.concat(f),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(I)n.hostname=n.host=x.shift(),(O=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=O.shift(),n.host=n.hostname=O.shift());return n.search=e.search,n.query=e.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!x.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var A=x.slice(-1)[0],S=(n.host||e.host||x.length>1)&&("."===A||".."===A)||""===A,P=0,C=x.length;C>=0;C--)"."===(A=x[C])?x.splice(C,1):".."===A?(x.splice(C,1),P++):P&&(x.splice(C,1),P--);if(!w&&!k)for(;P--;P)x.unshift("..");!w||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),S&&"/"!==x.join("/").substr(-1)&&x.push("");var O,T=""===x[0]||x[0]&&"/"===x[0].charAt(0);I&&(n.hostname=n.host=T?"":x.length?x.shift():"",(O=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=O.shift(),n.host=n.hostname=O.shift()));return(w=w||n.host&&x.length)&&!T&&x.unshift(""),x.length?n.pathname=x.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},s.prototype.parseHost=function(){var e=this.host,t=a.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},762502:e=>{e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},397066:(e,t,n)=>{n.d(t,{b:()=>c,h:()=>u});var r=n(983722),o=n(768559),s=n(43760),i=n(966113),a=n(619937),l=n(48714),h=n(366284);const c=({href:e,pinId:t,pin:n,location:s,auxData:c},u)=>{if(n&&n.is_promoted){var d,p;const y=(0,o.Z)(n,s),w=(0,l.nS)({url:e,pinId:t,csrId:null,clientTrackingParams:y,auxData:c}),k=(0,r.Z)();if((0,h.G6)(null!==(d=null==k?void 0:k.userAgent.browserName)&&void 0!==d?d:"")){var f,m;const{group:r}=null!==(f=null==k?void 0:k.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==f?f:{};let o=null!=k&&null!==(m=k.userAgent)&&void 0!==m&&m.browserVersion?k.userAgent.browserVersion:"0.0";if(o=parseFloat(o.split(".")[0]+"."+o.split(".")[1]),void 0!==n.campaign_id&&o>=14.1&&["enabled_safari"].includes(r)){var v;const r=n.attribution_source_id?((e,t,n)=>{const r=document.createElement("a");return r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(a.$N.ATTRIBUTE_DESTINATION,n),r.setAttribute(a.$N.ATTRIBUTE_ON,n),r.click(),e})(n.attribution_source_id,w,e):((e,t,n)=>{const r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block";const o=""+(e%32*8+Math.floor(((new Date).getTime()-16409952e5)/864e5)%8);return r.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,o),r.setAttribute(a.$N.ATTRIBUTE_DESTINATION,n),r.setAttribute(a.$N.ATTRIBUTE_ON,n),r.click(),o})(null!==(v=n.pin_promotion_id)&&void 0!==v?v:0,w,e);return u({event_type:101,clientTrackingParams:y,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:n.pin_promotion_id||"",click_measurement_campaign_id:n.campaign_id||"",is_pcm:!0,attribution_source_id:r,page_url:e}}),!0}}else if((0,h.i7)(null!==(p=null==k?void 0:k.userAgent.browserName)&&void 0!==p?p:"")){var _,g;const{group:r}=null!==(_=null==k?void 0:k.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==_?_:{},o=null!=k&&null!==(g=k.userAgent)&&void 0!==g&&g.browserVersion?parseInt(k.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==n.attribution_source_id&&o>=101&&["enabled"].includes(r)){var b;const r=((e,t,n)=>{const r=new URL(`${i.Z.settings.CANONICAL_MAIN_URL}/attribution_source/`);r.searchParams.set(a.NR.ATTRIBUTION_SOURCE_EVENT_ID,e),r.searchParams.set(a.NR.ATTRIBUTION_DESTINATION,n),r.searchParams.set(a.NR.ATTRIBUTION_EXPIRY,""+a.uV);const o=document.createElement("a");return o.setAttribute("href",t),o.setAttribute("target","_blank"),o.setAttribute("rel","noopener nofollow noreferrer"),o.style.cursor="pointer",o.style.display="block",o.setAttribute(a.NR.ATTRIBUTION_SOURCE,r.toString()),o.click(),e})(null!==(b=n.attribution_source_id)&&void 0!==b?b:"0",w,e);return u({event_type:101,clientTrackingParams:y,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:n.pin_promotion_id||"",click_measurement_campaign_id:n.campaign_id||"",is_arapi:!0,attribution_source_id:r,page_url:e}}),!0}}}return!1},u=({href:e,pinId:t,pin:n,location:r,auxData:i},a)=>{if("undefined"!=typeof window&&window.Windows)(0,s.Z)({url:e,pinId:t,pin:n,location:r,auxData:i});else{if(c({href:e,pinId:t,pin:n,location:r,auxData:i},a))return;(0,l.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:(0,o.Z)(n,r),auxData:i})}}},56641:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(567831),o=n(539497);function s(e,t){if(t&&!(()=>{try{return window.localStorage.test=2,!1}catch(e){return!0}})()){const t=window.open(e,"_blank");return t&&(t.opener=null),t}{const t=(0,r.Z)(e);return setTimeout((()=>{(0,o.My)("setting_new_window_location")}),0),window.location.href=t,window}}},48714:(e,t,n)=>{n.d(t,{nS:()=>w,iw:()=>x,gV:()=>b,G3:()=>I,lI:()=>A,Gj:()=>k,Jd:()=>g,$3:()=>y});var r=n(231486),o=n(56641),s=n(768559),i=n(250059);const a=e=>"string"!=typeof e&&e?e.state:null;var l=n(643913),h=n(547239),c=n(508847),u=n(102500),d=n(43760),p=n(579164),f=n(307640),m=n(397066),v=n(623568),_=n(226198);const g=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},b=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),y=({location:e,pin:t,surface:n})=>!(0,v.jL)(t)&&(({location:e,pinId:t,surface:n})=>{const r=Boolean(n),o=f.ZF.includes(n),s=e.pathname.includes(t);return r&&!o||s})({location:e,pinId:t.id,surface:n}),w=e=>{const t=Math.round(1e3*Math.random())+"",n=Math.round(1e3*Math.random())+"";r.t8((0,_.GS)(t),n);const o=`${t}-${n}`,{queryParams:s,url:i}=e;let a={token:o,url:i};if(!s){const{pinId:t,csrId:n,clientTrackingParams:r,auxData:o}=e;a={...a,pin:null!=t?t:void 0,csr:n&&!t?n:void 0,client_tracking_params:r,aux_data:o?JSON.stringify(o):void 0}}s&&(a={...a,...s});return`/offsite/?${(0,l.Z)(a)}`},k=e=>{(0,o.Z)(w(e),!0)},x=async({isMounted:e,pin:t,location:n,spamCheckCallback:r,href:o})=>{const i=await(0,u.Z)({check_only:!0,client_tracking_params:(0,s.Z)(t,n),pin_id:null==t?void 0:t.id,url:o}).callGet({showError:!1});if(!i.resource_response.error&&e){const e=i.resource_response.data||{},{message:t,redirect_status:n,url:o}=e;r({blocked:["blocked","suspicious","porn"].includes(n),message:t,redirectStatus:n,sanitized_url:o})}},I=({event:e,onHistoryChange:t,href:n,history:r,target:s})=>{const l=(0,i.Z)(n),u=a(n),d=(0,h.Z)(l);d===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===s?(0,o.Z)(l,"blank"===s):r&&d===p.Z.SAME_ORIGIN&&(r.push((0,c.Z)({url:l}),null!=u?u:{}),t&&t({event:e}))},A=({href:e,pinId:t,pin:n,location:r,auxData:o,spamCheck:i,queryParams:a},l,h)=>{"undefined"!=typeof window&&window.Windows?(0,d.Z)({url:e,pinId:t,pin:n,location:r,auxData:o}):n?(({spamCheck:e,auxData:t,location:n,pin:r,pinId:o,href:i},a,l)=>{if(null!=e&&e.blocked)null==l||l(e);else{if((0,m.b)({href:i,pinId:o,pin:r,location:n,auxData:t},a))return;k({url:i,pinId:o,csrId:null,clientTrackingParams:(0,s.Z)(r,n),auxData:t})}})({spamCheck:i,auxData:o,location:r,pin:n,pinId:t,href:e},l,h):k({url:e,pinId:t,queryParams:a})}},102500:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(6637);function o(e){return r.Z.create("ApiResource",{url:"/v3/offsite/",data:e})}},287072:(e,t,n)=>{n.d(t,{Z:()=>c,p:()=>u});var r=n(667294),o=n(250059),s=n(149230),i=n(407043),a=n(643074),l=n(48714),h=n(276775);function c(e){var t;const{externalData:n,href:c,onHistoryChange:u,target:d}=e,{logContextEvent:p}=(0,i.v)(),[f,m]=(0,r.useState)(null),[v,_]=(0,r.useState)(!1),g=(0,h.useHistory)(),b=(0,h.useLocation)(),y=(0,s.Z)({url:(0,o.Z)(c)}),{showWarning:w}=null!==(t=(0,a.s)())&&void 0!==t?t:{};return(0,r.useEffect)((()=>(_(!0),()=>{_(!1)})),[]),(0,r.useEffect)((()=>{y&&null!=n&&n.pin&&null===f&&v&&(0,l.$3)({location:b,pin:n.pin,surface:n.surface})&&(0,l.iw)({isMounted:v,pin:n.pin,location:b,spamCheckCallback:e=>m(e),href:(0,o.Z)(c)})}),[null==n?void 0:n.pin,null==n?void 0:n.surface,c,y,v,b,f]),({event:e})=>{var t;(0,l.gV)({isOffsiteUrl:y,event:e})||(e.preventDefault(),c&&(y||null!=n&&n.dangerouslyForceOffsiteUrl?(0,l.lI)({auxData:null==n?void 0:n.auxData,href:(0,o.Z)(c),pinId:null==n||null===(t=n.pin)||void 0===t?void 0:t.id,pin:null==n?void 0:n.pin,queryParams:null==n?void 0:n.queryParams,location:b,spamCheck:f},p,w):(0,l.G3)({event:e,href:c,history:g,onHistoryChange:u,target:"blank"===d?"blank":null})))}}const u=({children:e,...t})=>e({handleClick:c(t)})},760372:(e,t,n)=>{n.d(t,{X:()=>r});const r="favorited"},813401:(e,t,n)=>{n.d(t,{kf:()=>v,l5:()=>f,of:()=>d,xC:()=>m,yz:()=>p});var r=n(667294),o=n(172071),s=n(829407),i=n(807609),a=n(30287),l=n(425288),h=n(785893);const{Provider:c,useMaybeHook:u}=(0,l.Z)("PwaContext"),d=({children:e,initialContext:t})=>{const[n,i]=(0,r.useState)(null),l=t||{pwaType:"unknown",twaType:null},u=l.pwaType;(0,s.Z)((()=>{const e=(0,a.FB)(window)||"unknown";i(e),u!==e&&o.Z.increment("pwa.type_mismatch",1,{serverPwaType:u,clientPwaType:e,conflict:"unknown"!==u&&"unknown"!==e})}));const d="unknown"===u&&n?n:u,p=l.twaType,f=(0,r.useMemo)((()=>({pwaType:d,twaType:p})),[d,p]);return(0,h.jsx)(c,{value:f,children:e})},p=()=>{var e;const t=u();return null!==(e=null==t?void 0:t.pwaType)&&void 0!==e?e:"unknown"},f=()=>{var e;const t=u();return null!==(e=null==t?void 0:t.twaType)&&void 0!==e?e:null},m=()=>"android-twa"===p(),v=()=>{const e=p(),t=(0,i.Z)();return"unknown"===e&&t?null:"windows"===e}},862628:(e,t,n)=>{function r(e){return(e||"").trim().replace(/\s+/g," ")}n.d(t,{Z:()=>r})},250059:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},508847:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(567831);const o=(e,t)=>0===e.lastIndexOf(t,0),s=({url:e})=>{const t=(0,r.Z)("/");return o(e,t)?e.substr(t.length-1):e}},807609:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(411465),o=n(966476);const s=()=>{const e=(0,r.Z)(),t=(0,o.Z)();return e&&!t}},411465:(e,t,n)=>{n.d(t,{G:()=>a,Z:()=>l});var r=n(667294),o=n(276775),s=n(785893);const i=(0,r.createContext)(!0);function a({children:e}){const t=(0,o.useLocation)(),[n,a]=(0,r.useState)(!0),l=(0,r.useRef)(t);return(0,r.useEffect)((()=>{l.current!==t&&(l.current=t,a(!1))}),[t]),(0,s.jsx)(i.Provider,{value:n,children:e})}function l(){return(0,r.useContext)(i)}},43760:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(768559),o=n(102500),s=n(48714);function i({url:e,pinId:t,pin:n,location:i,auxData:a}){const l={check_only:!0,client_tracking_params:n?(0,r.Z)(n,i):void 0,pin_id:n?n.id:t,url:e,aux_data:JSON.stringify(a)};(0,o.Z)(l).callGet().then((o=>{if(o&&o.resource_response&&!o.resource_response.error){const{resource_response:e}=o,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(n){const o=(0,r.Z)(n,i);(0,s.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:o,auxData:a})}else(0,s.Gj)({url:e,pinId:t})}))}},307640:(e,t,n)=>{n.d(t,{UP:()=>a,Wv:()=>o,ZF:()=>r,zI:()=>s,zl:()=>i});const r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],o=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],s=[...o,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],i=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],a=["BaseBoardPinGrid"]},330899:(e,t,n)=>{n.d(t,{x:()=>a,y:()=>l});var r=n(667294),o=n(425288),s=n(785893);const{Provider:i,useMaybeHook:a}=(0,o.Z)("ProfileViewContext");function l({children:e}){const[t,n]=(0,r.useState)(),[o,a]=(0,r.useState)(new Map),[l,h]=(0,r.useState)(),[c,u]=(0,r.useState)(),d=(0,r.useCallback)(((e,t)=>{a(new Map(o.set(e,t)))}),[o]),p=(0,r.useMemo)((()=>({boardPinDensity:t,boardSortOrder:o,profileBoardView:l,profilePinDensity:c,setBoardPinDensity:n,updateBoardSortOrder:d,setProfileBoardView:h,setProfilePinDensity:u})),[t,o,l,c,d]);return(0,s.jsx)(i,{value:p,children:e})}},904411:(e,t,n)=>{n.d(t,{bn:()=>a,fJ:()=>h,gC:()=>l});var r=n(702664),o=n(425288),s=n(785893);const{Provider:i,useHook:a}=(0,o.Z)("Boards");function l(){const e=a();return t=>e[t]}function h({children:e}){const t=(0,r.useSelector)((({boards:e})=>e),r.shallowEqual);return(0,s.jsx)(i,{value:t,children:e})}},643074:(e,t,n)=>{n.d(t,{Z:()=>_,s:()=>v});var r=n(667294),o=n(121151),s=n(966113),i=n(608575),a=n(898781),l=n(349700),h=n(883119),c=n(785893);const u=()=>{var e;const t=(0,a.ZP)(),{dismissWarning:n}=null!==(e=v())&&void 0!==e?e:{};return(0,c.jsx)(h.xu,{paddingX:3,children:(0,c.jsx)(h.zx,{fullWidth:!0,color:"red",onClick:n,text:t.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},d=()=>{const e=(0,a.ZP)();return(0,c.jsx)(h.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(h.rU,{target:"blank",href:s.Z.settings.POLICY_COMMUNITY_GUIDELINES_SPAM_AND_QUALITY,inline:!0,underline:"hover",children:e.bt("Learn more", "Learn more", "Link text leading to policy website", undefined, true)})})},p=({message:e,sanitized_url:t})=>{var n;const r=(0,a.ZP)(),{dismissWarning:s}=null!==(n=v())&&void 0!==n?n:{};return(0,c.jsx)(o.ZP,{accessibilityModalLabel:r.bt("We have blocked this link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:s,heading:r.bt("Heads up!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,c.jsx)(u,{}),children:(0,c.jsxs)(h.xu,{padding:6,children:[(0,c.jsx)(h.xv,{children:(0,l.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(d,{},"learnMoreLink")})}),(0,c.jsxs)(h.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(h.xu,{marginEnd:3,children:(0,c.jsx)(h.JO,{accessibilityLabel:r.bt("Blocked link address", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(h.xv,{inline:!0,lineClamp:1,weight:"bold",children:i.parse(t).hostname})]})]})})};var f=n(425288);const{Provider:m,useMaybeHook:v}=(0,f.Z)("SpammyClickthrough");function _({children:e}){const[t,n]=(0,r.useState)(null),o=(0,r.useCallback)((()=>{n(null)}),[n]),s=(0,r.useCallback)((e=>{n(e)}),[n]),i=(0,r.useMemo)((()=>({dismissWarning:o,showWarning:s})),[o,s]);return(0,c.jsxs)(m,{value:i,children:[t&&(0,c.jsx)(p,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/51612.en_IN-828eefd3f7ac0ed7.mjs.map