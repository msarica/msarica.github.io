(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9593],{5876:(N,i,s)=>{const o=s(532),e=s(7554),n=s(179),t=s(1036);function a(l,u,g,B,R){const E=[].slice.call(arguments,1),C=E.length,M="function"==typeof E[C-1];if(!M&&!o())throw new Error("Callback required as last argument");if(!M){if(C<1)throw new Error("Too few arguments provided");return 1===C?(g=u,u=B=void 0):2===C&&!u.getContext&&(B=g,g=u,u=void 0),new Promise(function(b,U){try{const S=e.create(g,B);b(l(S,u,B))}catch(S){U(S)}})}if(C<2)throw new Error("Too few arguments provided");2===C?(R=g,g=u,u=B=void 0):3===C&&(u.getContext&&void 0===R?(R=B,B=void 0):(R=B,B=g,g=u,u=void 0));try{const b=e.create(g,B);R(null,l(b,u,B))}catch(b){R(b)}}i.rT=a.bind(null,n.render),i.hz=a.bind(null,n.renderToDataURL),i.toString=a.bind(null,function(l,u,g){return t.render(l,g)})},532:N=>{N.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},3012:(N,i,s)=>{const r=s(4860).getSymbolSize;i.getRowColCoords=function(e){if(1===e)return[];const n=Math.floor(e/7)+2,t=r(e),a=145===t?26:2*Math.ceil((t-13)/(2*n-2)),l=[t-7];for(let u=1;u<n-1;u++)l[u]=l[u-1]-a;return l.push(6),l.reverse()},i.getPositions=function(e){const n=[],t=i.getRowColCoords(e),a=t.length;for(let l=0;l<a;l++)for(let u=0;u<a;u++)0===l&&0===u||0===l&&u===a-1||l===a-1&&0===u||n.push([t[l],t[u]]);return n}},812:(N,i,s)=>{const r=s(6906),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(n){this.mode=r.ALPHANUMERIC,this.data=n}e.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){let a;for(a=0;a+2<=this.data.length;a+=2){let l=45*o.indexOf(this.data[a]);l+=o.indexOf(this.data[a+1]),t.put(l,11)}this.data.length%2&&t.put(o.indexOf(this.data[a]),6)},N.exports=e},3044:N=>{function i(){this.buffer=[],this.length=0}i.prototype={get:function(s){const r=Math.floor(s/8);return 1==(this.buffer[r]>>>7-s%8&1)},put:function(s,r){for(let o=0;o<r;o++)this.putBit(1==(s>>>r-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(s){const r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),s&&(this.buffer[r]|=128>>>this.length%8),this.length++}},N.exports=i},1973:N=>{function i(s){if(!s||s<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=s,this.data=new Uint8Array(s*s),this.reservedBit=new Uint8Array(s*s)}i.prototype.set=function(s,r,o,e){const n=s*this.size+r;this.data[n]=o,e&&(this.reservedBit[n]=!0)},i.prototype.get=function(s,r){return this.data[s*this.size+r]},i.prototype.xor=function(s,r,o){this.data[s*this.size+r]^=o},i.prototype.isReserved=function(s,r){return this.reservedBit[s*this.size+r]},N.exports=i},1824:(N,i,s)=>{const r=s(8419),o=s(6906);function e(n){this.mode=o.BYTE,this.data=new Uint8Array(r(n))}e.getBitsLength=function(t){return 8*t},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){for(let t=0,a=this.data.length;t<a;t++)n.put(this.data[t],8)},N.exports=e},6194:(N,i,s)=>{const r=s(9020),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];i.getBlocksCount=function(t,a){switch(a){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},i.getTotalCodewordsCount=function(t,a){switch(a){case r.L:return e[4*(t-1)+0];case r.M:return e[4*(t-1)+1];case r.Q:return e[4*(t-1)+2];case r.H:return e[4*(t-1)+3];default:return}}},9020:(N,i)=>{i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2},i.isValid=function(o){return o&&void 0!==o.bit&&o.bit>=0&&o.bit<4},i.from=function(o,e){if(i.isValid(o))return o;try{return function s(r){if("string"!=typeof r)throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+r)}}(o)}catch(n){return e}}},9172:(N,i,s)=>{const r=s(4860).getSymbolSize;i.getPositions=function(n){const t=r(n);return[[0,0],[t-7,0],[0,t-7]]}},611:(N,i,s)=>{const r=s(4860),n=r.getBCHDigit(1335);i.getEncodedBits=function(a,l){const u=a.bit<<3|l;let g=u<<10;for(;r.getBCHDigit(g)-n>=0;)g^=1335<<r.getBCHDigit(g)-n;return 21522^(u<<10|g)}},7794:(N,i)=>{const s=new Uint8Array(512),r=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)s[n]=e,r[e]=n,e<<=1,256&e&&(e^=285);for(let n=255;n<512;n++)s[n]=s[n-255]})(),i.log=function(e){if(e<1)throw new Error("log("+e+")");return r[e]},i.exp=function(e){return s[e]},i.mul=function(e,n){return 0===e||0===n?0:s[r[e]+r[n]]}},8043:(N,i,s)=>{const r=s(6906),o=s(4860);function e(n){this.mode=r.KANJI,this.data=n}e.getBitsLength=function(t){return 13*t},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let a=o.toSJIS(this.data[t]);if(a>=33088&&a<=40956)a-=33088;else{if(!(a>=57408&&a<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");a-=49472}a=192*(a>>>8&255)+(255&a),n.put(a,13)}},N.exports=e},7135:(N,i)=>{i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function r(o,e,n){switch(o){case i.Patterns.PATTERN000:return(e+n)%2==0;case i.Patterns.PATTERN001:return e%2==0;case i.Patterns.PATTERN010:return n%3==0;case i.Patterns.PATTERN011:return(e+n)%3==0;case i.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case i.Patterns.PATTERN101:return e*n%2+e*n%3==0;case i.Patterns.PATTERN110:return(e*n%2+e*n%3)%2==0;case i.Patterns.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}}i.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},i.from=function(e){return i.isValid(e)?parseInt(e,10):void 0},i.getPenaltyN1=function(e){const n=e.size;let t=0,a=0,l=0,u=null,g=null;for(let B=0;B<n;B++){a=l=0,u=g=null;for(let R=0;R<n;R++){let E=e.get(B,R);E===u?a++:(a>=5&&(t+=a-5+3),u=E,a=1),E=e.get(R,B),E===g?l++:(l>=5&&(t+=l-5+3),g=E,l=1)}a>=5&&(t+=a-5+3),l>=5&&(t+=l-5+3)}return t},i.getPenaltyN2=function(e){const n=e.size;let t=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const u=e.get(a,l)+e.get(a,l+1)+e.get(a+1,l)+e.get(a+1,l+1);(4===u||0===u)&&t++}return 3*t},i.getPenaltyN3=function(e){const n=e.size;let t=0,a=0,l=0;for(let u=0;u<n;u++){a=l=0;for(let g=0;g<n;g++)a=a<<1&2047|e.get(u,g),g>=10&&(1488===a||93===a)&&t++,l=l<<1&2047|e.get(g,u),g>=10&&(1488===l||93===l)&&t++}return 40*t},i.getPenaltyN4=function(e){let n=0;const t=e.data.length;for(let l=0;l<t;l++)n+=e.data[l];return 10*Math.abs(Math.ceil(100*n/t/5)-10)},i.applyMask=function(e,n){const t=n.size;for(let a=0;a<t;a++)for(let l=0;l<t;l++)n.isReserved(l,a)||n.xor(l,a,r(e,l,a))},i.getBestMask=function(e,n){const t=Object.keys(i.Patterns).length;let a=0,l=1/0;for(let u=0;u<t;u++){n(u),i.applyMask(u,e);const g=i.getPenaltyN1(e)+i.getPenaltyN2(e)+i.getPenaltyN3(e)+i.getPenaltyN4(e);i.applyMask(u,e),g<l&&(l=g,a=u)}return a}},6906:(N,i,s)=>{const r=s(2316),o=s(4677);i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(t,a){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?t.ccBits[0]:a<27?t.ccBits[1]:t.ccBits[2]},i.getBestModeForData=function(t){return o.testNumeric(t)?i.NUMERIC:o.testAlphanumeric(t)?i.ALPHANUMERIC:o.testKanji(t)?i.KANJI:i.BYTE},i.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},i.isValid=function(t){return t&&t.bit&&t.ccBits},i.from=function(t,a){if(i.isValid(t))return t;try{return function e(n){if("string"!=typeof n)throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+n)}}(t)}catch(l){return a}}},6002:(N,i,s)=>{const r=s(6906);function o(e){this.mode=r.NUMERIC,this.data=e.toString()}o.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(n){let t,a,l;for(t=0;t+3<=this.data.length;t+=3)a=this.data.substr(t,3),l=parseInt(a,10),n.put(l,10);const u=this.data.length-t;u>0&&(a=this.data.substr(t),l=parseInt(a,10),n.put(l,3*u+1))},N.exports=o},7793:(N,i,s)=>{const r=s(7794);i.mul=function(e,n){const t=new Uint8Array(e.length+n.length-1);for(let a=0;a<e.length;a++)for(let l=0;l<n.length;l++)t[a+l]^=r.mul(e[a],n[l]);return t},i.mod=function(e,n){let t=new Uint8Array(e);for(;t.length-n.length>=0;){const a=t[0];for(let u=0;u<n.length;u++)t[u]^=r.mul(n[u],a);let l=0;for(;l<t.length&&0===t[l];)l++;t=t.slice(l)}return t},i.generateECPolynomial=function(e){let n=new Uint8Array([1]);for(let t=0;t<e;t++)n=i.mul(n,new Uint8Array([1,r.exp(t)]));return n}},7554:(N,i,s)=>{const r=s(4860),o=s(9020),e=s(3044),n=s(1973),t=s(3012),a=s(9172),l=s(7135),u=s(6194),g=s(8098),B=s(6602),R=s(611),E=s(6906),C=s(9465);function P(c,y,f){const h=c.size,I=R.getEncodedBits(y,f);let p,w;for(p=0;p<15;p++)w=1==(I>>p&1),c.set(p<6?p:p<8?p+1:h-15+p,8,w,!0),c.set(8,p<8?h-p-1:p<9?15-p-1+1:15-p-1,w,!0);c.set(h-8,8,1,!0)}function m(c,y,f,h){let I;if(Array.isArray(c))I=C.fromArray(c);else{if("string"!=typeof c)throw new Error("Invalid data");{let z=y;if(!z){const J=C.rawSplit(c);z=B.getBestVersionForData(J,f)}I=C.fromString(c,z||40)}}const p=B.getBestVersionForData(I,f);if(!p)throw new Error("The amount of data is too big to be stored in a QR Code");if(y){if(y<p)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+p+".\n")}else y=p;const w=function d(c,y,f){const h=new e;f.forEach(function(L){h.put(L.mode.bit,4),h.put(L.getLength(),E.getCharCountIndicator(L.mode,c)),L.write(h)});const w=8*(r.getSymbolTotalCodewords(c)-u.getTotalCodewordsCount(c,y));for(h.getLengthInBits()+4<=w&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(0);const T=(w-h.getLengthInBits())/8;for(let L=0;L<T;L++)h.put(L%2?17:236,8);return function v(c,y,f){const h=r.getSymbolTotalCodewords(y),p=h-u.getTotalCodewordsCount(y,f),w=u.getBlocksCount(y,f),L=w-h%w,z=Math.floor(h/w),J=Math.floor(p/w),Z=J+1,Y=z-J,q=new g(Y);let V=0;const k=new Array(w),G=new Array(w);let Q=0;const x=new Uint8Array(c.buffer);for(let H=0;H<w;H++){const K=H<L?J:Z;k[H]=x.slice(V,V+K),G[H]=q.encode(k[H]),V+=K,Q=Math.max(Q,K)}const O=new Uint8Array(h);let D,F,j=0;for(D=0;D<Q;D++)for(F=0;F<w;F++)D<k[F].length&&(O[j++]=k[F][D]);for(D=0;D<Y;D++)for(F=0;F<w;F++)O[j++]=G[F][D];return O}(h,c,y)}(y,f,I),T=r.getSymbolSize(y),L=new n(T);return function M(c,y){const f=c.size,h=a.getPositions(y);for(let I=0;I<h.length;I++){const p=h[I][0],w=h[I][1];for(let T=-1;T<=7;T++)if(!(p+T<=-1||f<=p+T))for(let L=-1;L<=7;L++)w+L<=-1||f<=w+L||c.set(p+T,w+L,T>=0&&T<=6&&(0===L||6===L)||L>=0&&L<=6&&(0===T||6===T)||T>=2&&T<=4&&L>=2&&L<=4,!0)}}(L,y),function b(c){const y=c.size;for(let f=8;f<y-8;f++){const h=f%2==0;c.set(f,6,h,!0),c.set(6,f,h,!0)}}(L),function U(c,y){const f=t.getPositions(y);for(let h=0;h<f.length;h++){const I=f[h][0],p=f[h][1];for(let w=-2;w<=2;w++)for(let T=-2;T<=2;T++)c.set(I+w,p+T,-2===w||2===w||-2===T||2===T||0===w&&0===T,!0)}}(L,y),P(L,f,0),y>=7&&function S(c,y){const f=c.size,h=B.getEncodedBits(y);let I,p,w;for(let T=0;T<18;T++)I=Math.floor(T/3),p=T%3+f-8-3,w=1==(h>>T&1),c.set(I,p,w,!0),c.set(p,I,w,!0)}(L,y),function A(c,y){const f=c.size;let h=-1,I=f-1,p=7,w=0;for(let T=f-1;T>0;T-=2)for(6===T&&T--;;){for(let L=0;L<2;L++)if(!c.isReserved(I,T-L)){let z=!1;w<y.length&&(z=1==(y[w]>>>p&1)),c.set(I,T-L,z),p--,-1===p&&(w++,p=7)}if(I+=h,I<0||f<=I){I-=h,h=-h;break}}}(L,w),isNaN(h)&&(h=l.getBestMask(L,P.bind(null,L,f))),l.applyMask(h,L),P(L,f,h),{modules:L,version:y,errorCorrectionLevel:f,maskPattern:h,segments:I}}i.create=function(y,f){if(void 0===y||""===y)throw new Error("No input text");let I,p,h=o.M;return void 0!==f&&(h=o.from(f.errorCorrectionLevel,o.M),I=B.from(f.version),p=l.from(f.maskPattern),f.toSJISFunc&&r.setToSJISFunction(f.toSJISFunc)),m(y,I,h,p)}},8098:(N,i,s)=>{const r=s(7793);function o(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(n.length+this.degree);t.set(n);const a=r.mod(t,this.genPoly),l=this.degree-a.length;if(l>0){const u=new Uint8Array(this.degree);return u.set(a,l),u}return a},N.exports=o},4677:(N,i)=>{const s="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";i.KANJI=new RegExp(o,"g"),i.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),i.BYTE=new RegExp(e,"g"),i.NUMERIC=new RegExp(s,"g"),i.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+o+"$"),t=new RegExp("^"+s+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");i.testKanji=function(u){return n.test(u)},i.testNumeric=function(u){return t.test(u)},i.testAlphanumeric=function(u){return a.test(u)}},9465:(N,i,s)=>{const r=s(6906),o=s(6002),e=s(812),n=s(1824),t=s(8043),a=s(4677),l=s(4860),u=s(4901);function g(S){return unescape(encodeURIComponent(S)).length}function B(S,P,A){const d=[];let v;for(;null!==(v=S.exec(A));)d.push({data:v[0],index:v.index,mode:P,length:v[0].length});return d}function R(S){const P=B(a.NUMERIC,r.NUMERIC,S),A=B(a.ALPHANUMERIC,r.ALPHANUMERIC,S);let d,v;return l.isKanjiModeEnabled()?(d=B(a.BYTE,r.BYTE,S),v=B(a.KANJI,r.KANJI,S)):(d=B(a.BYTE_KANJI,r.BYTE,S),v=[]),P.concat(A,d,v).sort(function(c,y){return c.index-y.index}).map(function(c){return{data:c.data,mode:c.mode,length:c.length}})}function E(S,P){switch(P){case r.NUMERIC:return o.getBitsLength(S);case r.ALPHANUMERIC:return e.getBitsLength(S);case r.KANJI:return t.getBitsLength(S);case r.BYTE:return n.getBitsLength(S)}}function U(S,P){let A;const d=r.getBestModeForData(S);if(A=r.from(P,d),A!==r.BYTE&&A.bit<d.bit)throw new Error('"'+S+'" cannot be encoded with mode '+r.toString(A)+".\n Suggested mode is: "+r.toString(d));switch(A===r.KANJI&&!l.isKanjiModeEnabled()&&(A=r.BYTE),A){case r.NUMERIC:return new o(S);case r.ALPHANUMERIC:return new e(S);case r.KANJI:return new t(S);case r.BYTE:return new n(S)}}i.fromArray=function(P){return P.reduce(function(A,d){return"string"==typeof d?A.push(U(d,null)):d.data&&A.push(U(d.data,d.mode)),A},[])},i.fromString=function(P,A){const v=function M(S){const P=[];for(let A=0;A<S.length;A++){const d=S[A];switch(d.mode){case r.NUMERIC:P.push([d,{data:d.data,mode:r.ALPHANUMERIC,length:d.length},{data:d.data,mode:r.BYTE,length:d.length}]);break;case r.ALPHANUMERIC:P.push([d,{data:d.data,mode:r.BYTE,length:d.length}]);break;case r.KANJI:P.push([d,{data:d.data,mode:r.BYTE,length:g(d.data)}]);break;case r.BYTE:P.push([{data:d.data,mode:r.BYTE,length:g(d.data)}])}}return P}(R(P,l.isKanjiModeEnabled())),m=function b(S,P){const A={},d={start:{}};let v=["start"];for(let m=0;m<S.length;m++){const c=S[m],y=[];for(let f=0;f<c.length;f++){const h=c[f],I=""+m+f;y.push(I),A[I]={node:h,lastCount:0},d[I]={};for(let p=0;p<v.length;p++){const w=v[p];A[w]&&A[w].node.mode===h.mode?(d[w][I]=E(A[w].lastCount+h.length,h.mode)-E(A[w].lastCount,h.mode),A[w].lastCount+=h.length):(A[w]&&(A[w].lastCount=h.length),d[w][I]=E(h.length,h.mode)+4+r.getCharCountIndicator(h.mode,P))}}v=y}for(let m=0;m<v.length;m++)d[v[m]].end=0;return{map:d,table:A}}(v,A),c=u.find_path(m.map,"start","end"),y=[];for(let f=1;f<c.length-1;f++)y.push(m.table[c[f]].node);return i.fromArray(function C(S){return S.reduce(function(P,A){const d=P.length-1>=0?P[P.length-1]:null;return d&&d.mode===A.mode?(P[P.length-1].data+=A.data,P):(P.push(A),P)},[])}(y))},i.rawSplit=function(P){return i.fromArray(R(P,l.isKanjiModeEnabled()))}},4860:(N,i)=>{let s;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];i.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},i.getSymbolTotalCodewords=function(e){return r[e]},i.getBCHDigit=function(o){let e=0;for(;0!==o;)e++,o>>>=1;return e},i.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');s=e},i.isKanjiModeEnabled=function(){return void 0!==s},i.toSJIS=function(e){return s(e)}},2316:(N,i)=>{i.isValid=function(r){return!isNaN(r)&&r>=1&&r<=40}},6602:(N,i,s)=>{const r=s(4860),o=s(6194),e=s(9020),n=s(6906),t=s(2316),l=r.getBCHDigit(7973);function g(E,C){return n.getCharCountIndicator(E,C)+4}function B(E,C){let M=0;return E.forEach(function(b){M+=g(b.mode,C)+b.getBitsLength()}),M}i.from=function(C,M){return t.isValid(C)?parseInt(C,10):M},i.getCapacity=function(C,M,b){if(!t.isValid(C))throw new Error("Invalid QR Code version");void 0===b&&(b=n.BYTE);const P=8*(r.getSymbolTotalCodewords(C)-o.getTotalCodewordsCount(C,M));if(b===n.MIXED)return P;const A=P-g(b,C);switch(b){case n.NUMERIC:return Math.floor(A/10*3);case n.ALPHANUMERIC:return Math.floor(A/11*2);case n.KANJI:return Math.floor(A/13);default:return Math.floor(A/8)}},i.getBestVersionForData=function(C,M){let b;const U=e.from(M,e.M);if(Array.isArray(C)){if(C.length>1)return function R(E,C){for(let M=1;M<=40;M++)if(B(E,M)<=i.getCapacity(M,C,n.MIXED))return M}(C,U);if(0===C.length)return 1;b=C[0]}else b=C;return function u(E,C,M){for(let b=1;b<=40;b++)if(C<=i.getCapacity(b,M,E))return b}(b.mode,b.getLength(),U)},i.getEncodedBits=function(C){if(!t.isValid(C)||C<7)throw new Error("Invalid QR Code version");let M=C<<12;for(;r.getBCHDigit(M)-l>=0;)M^=7973<<r.getBCHDigit(M)-l;return C<<12|M}},179:(N,i,s)=>{const r=s(714);i.render=function(t,a,l){let u=l,g=a;void 0===u&&(!a||!a.getContext)&&(u=a,a=void 0),a||(g=function e(){try{return document.createElement("canvas")}catch(n){throw new Error("You need to specify a canvas element")}}()),u=r.getOptions(u);const B=r.getImageWidth(t.modules.size,u),R=g.getContext("2d"),E=R.createImageData(B,B);return r.qrToImageData(E.data,t,u),function o(n,t,a){n.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=a,t.width=a,t.style.height=a+"px",t.style.width=a+"px"}(R,g,B),R.putImageData(E,0,0),g},i.renderToDataURL=function(t,a,l){let u=l;return void 0===u&&(!a||!a.getContext)&&(u=a,a=void 0),u||(u={}),i.render(t,a,u).toDataURL(u.type||"image/png",(u.rendererOpts||{}).quality)}},1036:(N,i,s)=>{const r=s(714);function o(t,a){const l=t.a/255,u=a+'="'+t.hex+'"';return l<1?u+" "+a+'-opacity="'+l.toFixed(2).slice(1)+'"':u}function e(t,a,l){let u=t+a;return void 0!==l&&(u+=" "+l),u}i.render=function(a,l,u){const g=r.getOptions(l),B=a.modules.size,R=a.modules.data,E=B+2*g.margin,C=g.color.light.a?"<path "+o(g.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",M="<path "+o(g.color.dark,"stroke")+' d="'+function n(t,a,l){let u="",g=0,B=!1,R=0;for(let E=0;E<t.length;E++){const C=Math.floor(E%a),M=Math.floor(E/a);!C&&!B&&(B=!0),t[E]?(R++,E>0&&C>0&&t[E-1]||(u+=B?e("M",C+l,.5+M+l):e("m",g,0),g=0,B=!1),C+1<a&&t[E+1]||(u+=e("h",R),R=0)):g++}return u}(R,B,g.margin)+'"/>',S='<svg xmlns="http://www.w3.org/2000/svg" '+(g.width?'width="'+g.width+'" height="'+g.width+'" ':"")+'viewBox="0 0 '+E+" "+E+'" shape-rendering="crispEdges">'+C+M+"</svg>\n";return"function"==typeof u&&u(null,S),S}},714:(N,i)=>{function s(r){if("number"==typeof r&&(r=r.toString()),"string"!=typeof r)throw new Error("Color should be defined as hex string");let o=r.slice().replace("#","").split("");if(o.length<3||5===o.length||o.length>8)throw new Error("Invalid hex color: "+r);(3===o.length||4===o.length)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),6===o.length&&o.push("F","F");const e=parseInt(o.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+o.slice(0,6).join("")}}i.getOptions=function(o){o||(o={}),o.color||(o.color={});const n=o.width&&o.width>=21?o.width:void 0;return{width:n,scale:n?4:o.scale||4,margin:null==o.margin||o.margin<0?4:o.margin,color:{dark:s(o.color.dark||"#000000ff"),light:s(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},i.getScale=function(o,e){return e.width&&e.width>=o+2*e.margin?e.width/(o+2*e.margin):e.scale},i.getImageWidth=function(o,e){const n=i.getScale(o,e);return Math.floor((o+2*e.margin)*n)},i.qrToImageData=function(o,e,n){const t=e.modules.size,a=e.modules.data,l=i.getScale(t,n),u=Math.floor((t+2*n.margin)*l),g=n.margin*l,B=[n.color.light,n.color.dark];for(let R=0;R<u;R++)for(let E=0;E<u;E++){let C=4*(R*u+E),M=n.color.light;R>=g&&E>=g&&R<u-g&&E<u-g&&(M=B[a[Math.floor((R-g)/l)*t+Math.floor((E-g)/l)]?1:0]),o[C++]=M.r,o[C++]=M.g,o[C++]=M.b,o[C]=M.a}}},9593:(N,i,s)=>{"use strict";s.r(i),s.d(i,{StoryPageModule:()=>A});var r=s(9808),o=s(4182),e=s(7590),n=s(5470),t=s(2096),a=s(3629),l=s(7788),u=s(4725),g=s(655),B=s(5876),R=s(2313);const E=["qrcElement"];let C=(()=>{class d{constructor(m,c){this.renderer=m,this.sanitizer=c,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new t.vpe,this.context=null}ngOnChanges(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.createQRCode()})}isValidQrCodeText(m){return!1===this.allowEmptyString?!(void 0===m||""===m||"null"===m||null===m):void 0!==m}toDataURL(m){return new Promise((c,y)=>{B.hz(this.qrdata,m,(f,h)=>{f?y(f):c(h)})})}toCanvas(m,c){return new Promise((y,f)=>{B.rT(m,this.qrdata,c,h=>{h?f(h):y("success")})})}toSVG(m){return new Promise((c,y)=>{B.toString(this.qrdata,m,(f,h)=>{f?y(f):c(h)})})}renderElement(m){for(const c of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,c);this.renderer.appendChild(this.qrcElement.nativeElement,m)}createQRCode(){return(0,g.mG)(this,void 0,void 0,function*(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):void 0!==this.version&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");this.isValidQrCodeText(this.qrdata)&&""===this.qrdata&&(this.qrdata=" ");const m={color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,type:this.elementType,version:this.version,width:this.width},c=this.imageSrc,y=this.imageHeight||40,f=this.imageWidth||40;switch(this.elementType){case"canvas":const h=this.renderer.createElement("canvas");this.context=h.getContext("2d"),this.toCanvas(h,m).then(()=>{if(this.ariaLabel&&this.renderer.setAttribute(h,"aria-label",`${this.ariaLabel}`),this.title&&this.renderer.setAttribute(h,"title",`${this.title}`),c&&this.context){this.centerImage=new Image(f,y),c!==this.centerImage.src&&(this.centerImage.src=c),y!==this.centerImage.height&&(this.centerImage.height=y),f!==this.centerImage.width&&(this.centerImage.width=f);const w=this.centerImage;w&&(w.onload=()=>{var T;null===(T=this.context)||void 0===T||T.drawImage(w,h.width/2-f/2,h.height/2-y/2,f,y)})}this.renderElement(h),this.emitQRCodeURL(h)}).catch(w=>{console.error("[angularx-qrcode] canvas error:",w)});break;case"svg":const I=this.renderer.createElement("div");this.toSVG(m).then(w=>{this.renderer.setProperty(I,"innerHTML",w);const T=I.firstChild;this.renderer.setAttribute(T,"height",`${this.width}`),this.renderer.setAttribute(T,"width",`${this.width}`),this.renderElement(T),this.emitQRCodeURL(T)}).catch(w=>{console.error("[angularx-qrcode] svg error:",w)});break;default:const p=this.renderer.createElement("img");this.toDataURL(m).then(w=>{this.alt&&p.setAttribute("alt",this.alt),this.ariaLabel&&p.setAttribute("aria-label",this.ariaLabel),p.setAttribute("src",w),this.title&&p.setAttribute("title",this.title),this.renderElement(p),this.emitQRCodeURL(p)}).catch(w=>{console.error("[angularx-qrcode] img/url error:",w)})}}catch(m){console.error("[angularx-qrcode] Error generating QR Code:",m.message)}})}emitQRCodeURL(m){const c=m.constructor.name;if(c===SVGSVGElement.name){const h=new Blob([m.outerHTML],{type:"image/svg+xml"}),I=URL.createObjectURL(h),p=this.sanitizer.bypassSecurityTrustUrl(I);return void this.qrCodeURL.emit(p)}let y="";c===HTMLCanvasElement.name&&(y=m.toDataURL("image/png")),c===HTMLImageElement.name&&(y=m.src),fetch(y).then(f=>f.blob()).then(f=>URL.createObjectURL(f)).then(f=>this.sanitizer.bypassSecurityTrustUrl(f)).then(f=>{this.qrCodeURL.emit(f)}).catch(f=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+f)})}}return d.\u0275fac=function(m){return new(m||d)(t.Y36(t.Qsj),t.Y36(R.H7))},d.\u0275cmp=t.Xpm({type:d,selectors:[["qrcode"]],viewQuery:function(m,c){if(1&m&&t.Gf(E,7),2&m){let y;t.iGM(y=t.CRH())&&(c.qrcElement=y.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[t.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(m,c){1&m&&t._UZ(0,"div",null,0),2&m&&t.Tol(c.cssClass)},encapsulation:2,changeDetection:0}),d})(),M=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({providers:[]}),d})();function b(d,v){if(1&d&&(t.TgZ(0,"ion-item"),t._UZ(1,"qrcode",3),t.qZA()),2&d){const m=t.oxw();t.xp6(1),t.Q6J("qrdata",m.qrData)("width",256)("errorCorrectionLevel","M")}}const S=[{path:"",component:(()=>{class d{constructor(m,c,y){this.gameService=m,this.utils=c,this.info=y,this.storyText=""}ngOnInit(){}generate(){try{this.qrData=null;const m=JSON.stringify(JSON.parse(this.storyText)),c=this.utils.compress(m);this.qrData="https://msarica.github.io/scv/#/?story="+c}catch(m){this.info.alert(m.message)}}}return d.\u0275fac=function(m){return new(m||d)(t.Y36(a.h),t.Y36(l.F),t.Y36(u.C))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-story"]],decls:10,vars:3,consts:[["placeholder","",3,"autoGrow","ngModel","ngModelChange"],["button","",3,"click"],[4,"ngIf"],[3,"qrdata","width","errorCorrectionLevel"]],template:function(m,c){1&m&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Create your story"),t.qZA()()(),t.TgZ(4,"ion-content")(5,"ion-item")(6,"ion-textarea",0),t.NdJ("ngModelChange",function(f){return c.storyText=f}),t.qZA()(),t.TgZ(7,"ion-item",1),t.NdJ("click",function(){return c.generate()}),t._uU(8," Generate "),t.qZA(),t.YNc(9,b,2,3,"ion-item",2),t.qZA()),2&m&&(t.xp6(6),t.Q6J("autoGrow",!0)("ngModel",c.storyText),t.xp6(3),t.Q6J("ngIf",c.qrData))},dependencies:[r.O5,o.JJ,o.On,e.W2,e.Gu,e.Ie,e.g2,e.wd,e.sr,e.j9,C],encapsulation:2}),d})()}];let P=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[n.Bz.forChild(S),n.Bz]}),d})(),A=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[r.ez,o.u5,e.Pc,P,M]}),d})()},4901:N=>{"use strict";var i={single_source_shortest_paths:function(s,r,o){var e={},n={};n[r]=0;var a,l,u,g,B,E,t=i.PriorityQueue.make();for(t.push(r,0);!t.empty();)for(u in g=(a=t.pop()).cost,B=s[l=a.value]||{})B.hasOwnProperty(u)&&(E=g+B[u],(void 0===n[u]||n[u]>E)&&(n[u]=E,t.push(u,E),e[u]=l));if(void 0!==o&&void 0===n[o]){var b=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(b)}return e},extract_shortest_path_from_predecessor_list:function(s,r){for(var o=[],e=r;e;)o.push(e),e=s[e];return o.reverse(),o},find_path:function(s,r,o){var e=i.single_source_shortest_paths(s,r,o);return i.extract_shortest_path_from_predecessor_list(e,o)},PriorityQueue:{make:function(s){var e,r=i.PriorityQueue,o={};for(e in s=s||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=s.sorter||r.default_sorter,o},default_sorter:function(s,r){return s.cost-r.cost},push:function(s,r){this.queue.push({value:s,cost:r}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};N.exports=i},8419:N=>{"use strict";N.exports=function(s){for(var r=[],o=s.length,e=0;e<o;e++){var n=s.charCodeAt(e);if(n>=55296&&n<=56319&&o>e+1){var t=s.charCodeAt(e+1);t>=56320&&t<=57343&&(n=1024*(n-55296)+t-56320+65536,e+=1)}n<128?r.push(n):n<2048?(r.push(n>>6|192),r.push(63&n|128)):n<55296||n>=57344&&n<65536?(r.push(n>>12|224),r.push(n>>6&63|128),r.push(63&n|128)):n>=65536&&n<=1114111?(r.push(n>>18|240),r.push(n>>12&63|128),r.push(n>>6&63|128),r.push(63&n|128)):r.push(239,191,189)}return new Uint8Array(r).buffer}}}]);