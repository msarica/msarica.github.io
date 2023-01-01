"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9724],{9724:(Xe,U,l)=>{l.r(U),l.d(U,{GameMapPageModule:()=>De});var u=l(7590),g=l(9808),C=l(3075),G=l(4005),T=l(655),K=l(591),Z=l(8929),x=l(7625),E=l(3629),e=l(2096),R=l(4725),L=l(2313),B=l(5485),H=l(2811),j=l(3632),Q=l(9972),I=l(1911),v=l(1729);class M extends j.Z{constructor(n){super(),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),n&&("function"==typeof n.getSimplifiedGeometry?this.setGeometry(n):this.setProperties(n))}clone(){const n=new M(this.hasProperties()?this.getProperties():null);n.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&n.setGeometry(t.clone());const i=this.getStyle();return i&&n.setStyle(i),n}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&((0,v.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);const n=this.getGeometry();n&&(this.geometryChangeKey_=(0,v.oL)(n,Q.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(n){this.set(this.geometryName_,n)}setStyle(n){this.style_=n,this.styleFunction_=n?function z(s){if("function"==typeof s)return s;{let n;return Array.isArray(s)?n=s:((0,I.h)("function"==typeof s.getZIndex,41),n=[s]),function(){return n}}}(n):void 0,this.changed()}setId(n){this.id_=n,this.changed()}setGeometryName(n){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=n,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}const q=M;var V=l(187),W=l(5672),ee=l(4848),te=l(759),ne=l(109),ie=l(9570),se=l(2815),N=l(9889),oe=l(8214),re=l(4587),ae=l(2402),F=l(760),f=l(119),w=l(9466);const Y=class ce{constructor(n){this.rbush_=new ae(n),this.items_={}}insert(n,t){const i={minX:n[0],minY:n[1],maxX:n[2],maxY:n[3],value:t};this.rbush_.insert(i),this.items_[(0,f.sq)(t)]=i}load(n,t){const i=new Array(t.length);for(let o=0,r=t.length;o<r;o++){const c=n[o],a=t[o],h={minX:c[0],minY:c[1],maxX:c[2],maxY:c[3],value:a};i[o]=h,this.items_[(0,f.sq)(a)]=h}this.rbush_.load(i)}remove(n){const t=(0,f.sq)(n),i=this.items_[t];return delete this.items_[t],null!==this.rbush_.remove(i)}update(n,t){const i=this.items_[(0,f.sq)(t)];(0,F.fS)([i.minX,i.minY,i.maxX,i.maxY],n)||(this.remove(t),this.insert(n,t))}getAll(){return this.rbush_.all().map(function(t){return t.value})}getInExtent(n){return this.rbush_.search({minX:n[0],minY:n[1],maxX:n[2],maxY:n[3]}).map(function(o){return o.value})}forEach(n){return this.forEach_(this.getAll(),n)}forEachInExtent(n,t){return this.forEach_(this.getInExtent(n),t)}forEach_(n,t){let i;for(let o=0,r=n.length;o<r;o++)if(i=t(n[o]),i)return i;return i}isEmpty(){return(0,w.x)(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(n){const t=this.rbush_.toJSON();return(0,F.T9)(t.minX,t.minY,t.maxX,t.maxY,n)}concat(n){this.rbush_.load(n.rbush_.all());for(const t in n.items_)this.items_[t]=n.items_[t]}};var le=l(4702);var P=l(1345);function ue(s,n){return[[-1/0,-1/0,1/0,1/0]]}l(6003);var he=l(2456);function O(s,n){return function(t,i,o,r,c){const a=this;!function de(s,n,t,i,o,r,c){const a=new XMLHttpRequest;a.open("GET","function"==typeof s?s(t,i,o):s,!0),"arraybuffer"==n.getType()&&(a.responseType="arraybuffer"),a.withCredentials=false,a.onload=function(h){if(!a.status||a.status>=200&&a.status<300){const d=n.getType();let m;"json"==d||"text"==d?m=a.responseText:"xml"==d?(m=a.responseXML,m||(m=(new DOMParser).parseFromString(a.responseText,"application/xml"))):"arraybuffer"==d&&(m=a.response),m?r(n.readFeatures(m,{extent:t,featureProjection:o}),n.readProjection(m)):c()}else c()},a.onerror=c,a.send()}(s,n,t,i,o,function(h,d){a.addFeatures(h),void 0!==r&&r(h)},c||P.Zn)}}class _ extends oe.ZP{constructor(n,t,i){super(n),this.feature=t,this.features=i}}const ge=class me extends le.Z{constructor(n){super({attributions:(n=n||{}).attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:void 0===n.wrapX||n.wrapX}),this.loader_=P.Zn,this.format_=n.format,this.overlaps_=void 0===n.overlaps||n.overlaps,this.url_=n.url,void 0!==n.loader?this.loader_=n.loader:void 0!==this.url_&&((0,I.h)(this.format_,7),this.loader_=O(this.url_,this.format_)),this.strategy_=void 0!==n.strategy?n.strategy:ue;const t=void 0===n.useSpatialIndex||n.useSpatialIndex;let i,o;this.featuresRtree_=t?new Y:null,this.loadedExtentsRtree_=new Y,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(n.features)?o=n.features:n.features&&(i=n.features,o=i.getArray()),!t&&void 0===i&&(i=new se.Z(o)),void 0!==o&&this.addFeaturesInternal(o),void 0!==i&&this.bindFeaturesCollection_(i)}addFeature(n){this.addFeatureInternal(n),this.changed()}addFeatureInternal(n){const t=(0,f.sq)(n);if(!this.addToIndex_(t,n))return void(this.featuresCollection_&&this.featuresCollection_.remove(n));this.setupChangeEvents_(t,n);const i=n.getGeometry();if(i){const o=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(o,n)}else this.nullGeometryFeatures_[t]=n;this.dispatchEvent(new _("addfeature",n))}setupChangeEvents_(n,t){this.featureChangeKeys_[n]=[(0,v.oL)(t,Q.Z.CHANGE,this.handleFeatureChange_,this),(0,v.oL)(t,re.Z.PROPERTYCHANGE,this.handleFeatureChange_,this)]}addToIndex_(n,t){let i=!0;const o=t.getId();return void 0!==o&&(o.toString()in this.idIndex_?i=!1:this.idIndex_[o.toString()]=t),i&&((0,I.h)(!(n in this.uidIndex_),30),this.uidIndex_[n]=t),i}addFeatures(n){this.addFeaturesInternal(n),this.changed()}addFeaturesInternal(n){const t=[],i=[],o=[];for(let r=0,c=n.length;r<c;r++){const a=n[r],h=(0,f.sq)(a);this.addToIndex_(h,a)&&i.push(a)}for(let r=0,c=i.length;r<c;r++){const a=i[r],h=(0,f.sq)(a);this.setupChangeEvents_(h,a);const d=a.getGeometry();if(d){const m=d.getExtent();t.push(m),o.push(a)}else this.nullGeometryFeatures_[h]=a}if(this.featuresRtree_&&this.featuresRtree_.load(t,o),this.hasListener("addfeature"))for(let r=0,c=i.length;r<c;r++)this.dispatchEvent(new _("addfeature",i[r]))}bindFeaturesCollection_(n){let t=!1;this.addEventListener("addfeature",function(i){t||(t=!0,n.push(i.feature),t=!1)}),this.addEventListener("removefeature",function(i){t||(t=!0,n.remove(i.feature),t=!1)}),n.addEventListener(N.Z.ADD,function(i){t||(t=!0,this.addFeature(i.element),t=!1)}.bind(this)),n.addEventListener(N.Z.REMOVE,function(i){t||(t=!0,this.removeFeature(i.element),t=!1)}.bind(this)),this.featuresCollection_=n}clear(n){if(n){for(const i in this.featureChangeKeys_)this.featureChangeKeys_[i].forEach(v.bN);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const i=function(o){this.removeFeatureInternal(o)}.bind(this);this.featuresRtree_.forEach(i);for(const o in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[o])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const t=new _("clear");this.dispatchEvent(t),this.changed()}forEachFeature(n){if(this.featuresRtree_)return this.featuresRtree_.forEach(n);this.featuresCollection_&&this.featuresCollection_.forEach(n)}forEachFeatureAtCoordinateDirect(n,t){return this.forEachFeatureInExtent([n[0],n[1],n[0],n[1]],function(o){if(o.getGeometry().intersectsCoordinate(n))return t(o)})}forEachFeatureInExtent(n,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(n,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(n,t){return this.forEachFeatureInExtent(n,function(i){if(i.getGeometry().intersectsExtent(n)){const r=t(i);if(r)return r}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let n;return this.featuresCollection_?n=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(n=this.featuresRtree_.getAll(),(0,w.x)(this.nullGeometryFeatures_)||(0,he.l7)(n,Object.values(this.nullGeometryFeatures_))),n}getFeaturesAtCoordinate(n){const t=[];return this.forEachFeatureAtCoordinateDirect(n,function(i){t.push(i)}),t}getFeaturesInExtent(n,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(n);const o=(0,F.MV)(n,t);return[].concat(...o.map(r=>this.featuresRtree_.getInExtent(r)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(n,t){const i=n[0],o=n[1];let r=null;const c=[NaN,NaN];let a=1/0;const h=[-1/0,-1/0,1/0,1/0];return t=t||P.uX,this.featuresRtree_.forEachInExtent(h,function(d){if(t(d)){const m=d.getGeometry(),ke=a;if(a=m.closestPointXY(i,o,c,a),a<ke){r=d;const b=Math.sqrt(a);h[0]=i-b,h[1]=o-b,h[2]=i+b,h[3]=o+b}}}),r}getExtent(n){return this.featuresRtree_.getExtent(n)}getFeatureById(n){const t=this.idIndex_[n.toString()];return void 0!==t?t:null}getFeatureByUid(n){const t=this.uidIndex_[n];return void 0!==t?t:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(n){const t=n.target,i=(0,f.sq)(t),o=t.getGeometry();if(o){const c=o.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(c,t)):this.featuresRtree_&&this.featuresRtree_.update(c,t)}else i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[i]=t);const r=t.getId();if(void 0!==r){const c=r.toString();this.idIndex_[c]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[c]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[i]=t;this.changed(),this.dispatchEvent(new _("changefeature",t))}hasFeature(n){const t=n.getId();return void 0!==t?t in this.idIndex_:(0,f.sq)(n)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&(0,w.x)(this.nullGeometryFeatures_):!this.featuresCollection_||0===this.featuresCollection_.getLength()}loadFeatures(n,t,i){const o=this.loadedExtentsRtree_,r=this.strategy_(n,t,i);for(let c=0,a=r.length;c<a;++c){const h=r[c];o.forEachInExtent(h,function(m){return(0,F.r4)(m.extent,h)})||(++this.loadingExtentsCount_,this.dispatchEvent(new _("featuresloadstart")),this.loader_.call(this,h,t,i,function(m){--this.loadingExtentsCount_,this.dispatchEvent(new _("featuresloadend",void 0,m))}.bind(this),function(){--this.loadingExtentsCount_,this.dispatchEvent(new _("featuresloaderror"))}.bind(this)),o.insert(h,{extent:h.slice()}))}this.loading=!(this.loader_.length<4)&&this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(n){const t=this.loadedExtentsRtree_;let i;t.forEachInExtent(n,function(o){if((0,F.fS)(o.extent,n))return i=o,!0}),i&&t.remove(i)}removeFeature(n){if(!n)return;const t=(0,f.sq)(n);t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(n),this.removeFeatureInternal(n)&&this.changed()}removeFeatureInternal(n){const t=(0,f.sq)(n),i=this.featureChangeKeys_[t];if(!i)return;i.forEach(v.bN),delete this.featureChangeKeys_[t];const o=n.getId();return void 0!==o&&delete this.idIndex_[o.toString()],delete this.uidIndex_[t],this.dispatchEvent(new _("removefeature",n)),n}removeFromIdIndex_(n){let t=!1;for(const i in this.idIndex_)if(this.idIndex_[i]===n){delete this.idIndex_[i],t=!0;break}return t}setLoader(n){this.loader_=n}setUrl(n){(0,I.h)(this.format_,7),this.url_=n,this.setLoader(O(n,this.format_))}};var A=l(4974),fe=l(7224),pe=l(2868),_e=l(2780),xe=l(8029);const ye=["mapElementRef"];let Ce=(()=>{class s{constructor(t,i,o,r){this.locationService=t,this.gameService=i,this.info=o,this.loading=r,this.destroy$=new Z.xQ,this.features={}}ngOnInit(){return(0,T.mG)(this,void 0,void 0,function*(){!this.game||(this.setUpMap(),this.setupSubscriptions())})}setupSubscriptions(){return(0,T.mG)(this,void 0,void 0,function*(){const t=yield this.loading.present2("Loading...\nSetting up markers"),i=this.locationService.watchLocation();i.pipe((0,fe.P)()).subscribe(()=>{console.log("dismising"),t.dismiss(),this.setUpMarkers(),this.playerFeature=this.setUpUser()}),i.pipe((0,x.R)(this.destroy$)).subscribe(o=>{this.updateUserLocation(o)}),this.gameService.pointExplored$.pipe((0,x.R)(this.destroy$),(0,pe.b)(o=>{const r=this.features[o.name];!r||r.forEach(c=>{c.setStyle(this.getStyle("assets/x_marker_explored.png"))})})).subscribe(),this.gameService.enablePoints$.pipe((0,x.R)(this.destroy$)).subscribe(o=>{this.enableMarkers(o)}),this.gameService.disablePoints$.pipe((0,x.R)(this.destroy$)).subscribe(o=>{this.disableMarkers(o)})})}setUpMap(){const[t,i]=this.game.location,o=this.game.zoom,r=(0,A.xA)([i,t]);this.map=new B.Z({view:new H.ZP({center:r,zoom:o}),layers:[new ee.Z({source:new W.Z})],target:"ol-map"});const c=new ge({features:[]});this.markerSource=c;const a=new te.Z({source:c});this.map.addLayer(a),this.map.on("moveend",h=>{const d=this.map.getView().getZoom();console.log(d)}),this.map.on("click",h=>{const d=this.map.forEachFeatureAtPixel(h.pixel,m=>m);!d||this.onFeatureClicked(h,d)}),setTimeout(()=>{this.map.setTarget(this.mapElementRef.nativeElement)})}onFeatureClicked(t,i){console.log(i);const o=i.get("data");if(!o.clickable)return;const r=(0,A.FY)(i.getGeometry().getCoordinates()),c=(0,A.FY)(this.playerFeature.getGeometry().getCoordinates()),a=this.locationService.distance(r[1],c[1],r[0],c[0]),h=this.gameService.isCloseEnough(a);console.log(a),this.gameService.pointSelected({point:o,distance:a,isClose:h})}setUpMarkers(){const t=this.gameService.getPoints();console.log(t),this.game.points.forEach(i=>{var o,r,c;if(null===(o=t[i.name])||void 0===o||!o.visible)return;console.log(i.name,null===(r=t[i.name])||void 0===r?void 0:r.visible);const a=null===(c=t[i.name])||void 0===c?void 0:c.explored;this.showMarker(i,{explored:a})})}showMarker(t,i={}){const[o,r]=t.location,c=(0,A.xA)([r,o]);this.addMarker(c,Object.assign({clickable:!0,img:i.explored?"assets/x_marker_explored.png":t.img||"assets/x_marker.png"},t))}getRegexExpr(t){return t.map(i=>{const o=i.replace(/\*/g,".*");return new RegExp(o,"g")})}enableMarkers(t){const i=this.getRegexExpr(t);this.game.points.filter(o=>i.some(r=>o.name.match(r))).forEach(o=>{o.visible=!0,this.showMarker(o)})}disableMarkers(t){const i=this.getRegexExpr(t),o=this.game.points.filter(r=>i.some(c=>r.name.match(c))).map(r=>r.name);for(const r of o){const c=this.features[r];!c||(c.forEach(a=>this.markerSource.removeFeature(a)),delete this.features[r])}}setUpUser(){return this.addMarker([0,0],{clickable:!1,img:"assets/current_location.png"})}ngOnDestroy(){console.log("destroying"),this.destroy$.next(),this.destroy$.unsubscribe()}getStyle(t){return new ne.ZP({image:new ie.Z({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",size:[65,65],src:t})})}addMarker(t,i){const o=new q({geometry:new V.Z(t),data:i}),r=this.getStyle(i.img);return o.setStyle(r),this.markerSource.addFeature(o),this.features[i.name]=[...this.features[i.name]||[],o],o}updateUserLocation(t){!this.playerFeature||this.playerFeature.getGeometry().setCoordinates((0,A.Z_)(t))}ngAfterContentInit(){}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(_e.a),e.Y36(E.h),e.Y36(R.C),e.Y36(xe.b))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-map"]],viewQuery:function(t,i){if(1&t&&e.Gf(ye,7),2&t){let o;e.iGM(o=e.CRH())&&(i.mapElementRef=o.first)}},inputs:{game:"game"},decls:3,vars:0,consts:[["id","ol-map",1,"map-container"],["mapElementRef",""]],template:function(t,i){1&t&&(e.ynx(0),e._UZ(1,"div",0,1),e.BQk())},styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column;height:100vh}.map-container[_ngcontent-%COMP%]{flex-grow:1}"],changeDetection:0}),s})();var D=l(2198),y=l(5970);class k{constructor(n){this.gameService=n}onSubmit(n){const t=this.isCorrect(n),i=Array.isArray(n)?n:[n];this.gameService.answerSelected(this.point,t?"correct":"incorrect",i)}}function ve(s,n){if(1&s&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA(),e._UZ(3,"ion-radio",4),e.qZA()),2&s){const t=n.$implicit;e.xp6(2),e.Oqu(t),e.xp6(1),e.Q6J("value",t)}}function Ee(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"ion-list")(1,"ion-item-group")(2,"ion-item-divider")(3,"ion-label"),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"ion-radio-group",1),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.selected=o)}),e.YNc(7,ve,4,2,"ion-item",2),e.qZA()(),e.TgZ(8,"ion-button",3),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.select())}),e._uU(9),e.ALo(10,"translate"),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,5,"Options")," "),e.xp6(2),e.Q6J("ngModel",t.selected),e.xp6(1),e.Q6J("ngForOf",t.point.body.choices),e.xp6(1),e.Q6J("disabled",!t.selected),e.xp6(1),e.hij(" ",e.lcZ(10,7,"Submit")," ")}}let X=(()=>{class s extends k{constructor(t){super(t),this.answered=!1}set point(t){this._point=t,this.answered=!1}get point(){return this._point}ngOnInit(){}select(){this.onSubmit(this.selected)}isCorrect(t){const i=this.point.body.possibleAnswers.includes(t);return i&&(this.answered=!0),i}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(E.h))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-multiple-choice"]],inputs:{point:"point"},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["expand","block",3,"disabled","click"],["slot","end",3,"value"]],template:function(t,i){1&t&&e.YNc(0,Ee,11,9,"ion-list",0),2&t&&e.Q6J("ngIf",!i.answered)},dependencies:[u.YG,u.Ie,u.rH,u.Ub,u.Q$,u.q_,u.B7,u.se,u.U5,u.QI,g.sg,g.O5,C.JJ,C.On,y.X$],encapsulation:2}),s})();function Fe(s,n){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-item")(2,"ion-input",1),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.input=o)})("keyup.enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e.qZA()(),e.TgZ(3,"ion-button",2),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.input),e.xp6(1),e.Q6J("disabled",!(null!=t.input&&t.input.length)),e.xp6(1),e.hij(" ",e.lcZ(5,3,"Submit")," ")}}let $=(()=>{class s extends k{constructor(t){super(t),this.input="",this.found=!1}set point(t){this._point=t,this.found=!1,this.input=""}get point(){return this._point}ngOnInit(){}submit(){var t;null!==(t=this.input)&&void 0!==t&&t.length&&this.onSubmit(this.input)}isCorrect(t){if(!t.length)return;t=t.trim().toLowerCase();const i=this.point.body.possibleAnswers.some(o=>o.trim().toLowerCase()===t);return this.found=i,i}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(E.h))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-short-answer"]],inputs:{point:"point"},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],["placeholder","Enter your answer",3,"ngModel","ngModelChange","keyup.enter"],["expand","block",3,"disabled","click"]],template:function(t,i){1&t&&e.YNc(0,Fe,6,5,"ng-container",0),2&t&&e.Q6J("ngIf",!i.found)},dependencies:[u.YG,u.pK,u.Ie,u.j9,g.O5,C.JJ,C.On,y.X$],encapsulation:2}),s})();function Ae(s,n){1&s&&(e.ynx(0),e.TgZ(1,"ion-item"),e._uU(2," You are not close to this location! "),e.qZA(),e.BQk())}function Te(s,n){if(1&s&&(e.ynx(0),e._UZ(1,"app-short-answer",5),e.BQk()),2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("point",t.pointAny)}}function Ie(s,n){if(1&s&&(e.ynx(0),e._UZ(1,"app-multiple-choice",5),e.BQk()),2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("point",t.pointAny)}}function Se(s,n){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-item",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.ok())}),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.BQk()}2&s&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"OK")," "))}function be(s,n){if(1&s&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&s){const t=e.oxw(5);e.xp6(1),e.hij(" ",t.point.body.messageIfCorrect," ")}}function Ge(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"div")(1,"ion-card",7)(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.ALo(5,"translate"),e.qZA()()(),e.YNc(6,be,2,1,"p",0),e.TgZ(7,"ion-button",8),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.ok())}),e._uU(8),e.ALo(9,"translate"),e.qZA()()}if(2&s){const t=e.oxw(4);e.xp6(4),e.Oqu(e.lcZ(5,3,"Correct")),e.xp6(2),e.Q6J("ngIf",t.point.body.messageIfCorrect),e.xp6(2),e.hij(" ",e.lcZ(9,5,"Next")," ")}}function Ze(s,n){if(1&s&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&s){const t=e.oxw(5);e.xp6(1),e.hij(" ",t.point.body.messageIfIncorrect," ")}}function Re(s,n){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-card",9)(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.ALo(5,"translate"),e.qZA()()(),e.YNc(6,Ze,2,1,"p",0),e.TgZ(7,"ion-footer")(8,"ion-button",8),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.giveUp())}),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.BQk()}if(2&s){const t=e.oxw(4);e.xp6(4),e.Oqu(e.lcZ(5,3,"Incorrect")),e.xp6(2),e.Q6J("ngIf",t.point.body.messageIfIncorrect),e.xp6(3),e.hij(" ",e.lcZ(10,5,"GiveUp")," ")}}function Me(s,n){if(1&s&&(e.ynx(0),e.YNc(1,Ge,10,7,"div",0),e.YNc(2,Re,11,7,"ng-container",0),e.BQk()),2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.isCorrect),e.xp6(1),e.Q6J("ngIf",!t.isCorrect)}}function we(s,n){if(1&s&&(e.ynx(0),e.TgZ(1,"ion-item-group")(2,"ion-item-divider")(3,"ion-label"),e._uU(4),e.qZA()(),e._UZ(5,"div",3),e.qZA(),e.ynx(6,1),e.YNc(7,Te,2,1,"ng-container",2),e.YNc(8,Ie,2,1,"ng-container",2),e.YNc(9,Se,4,3,"ng-container",4),e.BQk(),e.YNc(10,Me,3,2,"ng-container",0),e.BQk()),2&s){const t=e.oxw(2);e.xp6(4),e.hij(" ",t.point.body.title," "),e.xp6(1),e.Q6J("innerHTML",t.bodyText,e.oJD),e.xp6(1),e.Q6J("ngSwitch",t.point.body.type),e.xp6(1),e.Q6J("ngSwitchCase","shortanswer"),e.xp6(1),e.Q6J("ngSwitchCase","multiplechoice"),e.xp6(2),e.Q6J("ngIf",t.showFeedback)}}function Pe(s,n){if(1&s&&(e.ynx(0),e.TgZ(1,"ion-item")(2,"ion-label"),e._uU(3),e.qZA()(),e.BQk()),2&s){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.point.body.afterExplored," ")}}function Ue(s,n){if(1&s&&(e.ynx(0)(1,1),e.YNc(2,Ae,3,0,"ng-container",2),e.YNc(3,we,11,6,"ng-container",2),e.YNc(4,Pe,4,1,"ng-container",2),e.BQk()()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngSwitch",t.status),e.xp6(1),e.Q6J("ngSwitchCase","not_close"),e.xp6(1),e.Q6J("ngSwitchCase","close"),e.xp6(1),e.Q6J("ngSwitchCase","explored")}}let Le=(()=>{class s{constructor(t,i,o,r,c){this.gameService=t,this.menuController=i,this.info=o,this.translate=r,this.sanitizer=c,this.destroy$=new Z.xQ,this.showFeedback=!1,this.isCorrect=!1,this.status="not_close"}set selectedPoint(t){this._selectedPoint=t,this.showFeedback=!1,t&&(this.status=t.explored?"explored":t.isClose?"close":"not_close",this.bodyText=this.sanitizer.bypassSecurityTrustHtml(t.point.body.text.replace(/\n/g,"<br>")))}get selectedPoint(){return this._selectedPoint}get pointAny(){return this.point}get point(){return this._selectedPoint.point}ngOnInit(){const t=this.gameService.answerSelected$.pipe((0,x.R)(this.destroy$));t.pipe((0,D.h)(i=>["correct","incorrect"].includes(i.result))).subscribe(i=>{this.showFeedback=!0,this.isCorrect="correct"===i.result}),t.pipe((0,D.h)(i=>"ok"===i.result)).subscribe(i=>{this.gameService.moveNext(this.point),this.menuController.close()})}ok(){this.gameService.answerSelected(this.point,"ok")}giveUp(){return(0,T.mG)(this,void 0,void 0,function*(){!(yield this.info.confirm("Give up","Are you sure to give up?"))||this.ok()})}ngOnDestroy(){console.log("destro"),this.destroy$.next(),this.destroy$.unsubscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(E.h),e.Y36(u._q),e.Y36(R.C),e.Y36(y.sK),e.Y36(L.H7))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-game-point"]],inputs:{selectedPoint:"selectedPoint"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"innerHTML"],[4,"ngSwitchDefault"],[3,"point"],["button","",3,"click"],["color","success"],["expand","block",3,"click"],["color","danger"]],template:function(t,i){1&t&&e.YNc(0,Ue,5,4,"ng-container",0),2&t&&e.Q6J("ngIf",i.selectedPoint)},dependencies:[u.YG,u.PM,u.Zi,u.Dq,u.fr,u.Ie,u.rH,u.Ub,u.Q$,g.O5,g.RF,g.n9,g.ED,X,$,y.X$],styles:[".correct[_ngcontent-%COMP%]{padding:5px;border:1px solid green;border-radius:5px;color:green}.incorrect[_ngcontent-%COMP%]{padding:5px;border:1px solid red;border-radius:5px;color:red}"]}),s})();function Qe(s,n){if(1&s&&(e.ynx(0),e._UZ(1,"app-map",15),e.BQk()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("game",t.game)}}function Ne(s,n){1&s&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"GameNotLoaded")," "))}const Ye=[{path:"",component:(()=>{class s{constructor(t,i,o,r,c){this.menuController=t,this.gameService=i,this.router=o,this.info=r,this.sanitizer=c,this.title$=new K.X("Menu"),this.destroy$=new Z.xQ}ngOnInit(){this.menuController.swipeGesture(!1),this.gameService.pointSelected$.pipe((0,x.R)(this.destroy$)).subscribe(t=>{!t||(console.log(t),this.selectedPoint=t,this.title$.next(t.point.title),this.openMenu("point"))}),this.gameService.gameSelected$.pipe((0,x.R)(this.destroy$)).subscribe(t=>{!t||(this.game=t,this.storyDescription=this.sanitizer.bypassSecurityTrustHtml(this.game.description),this.openMenu("story"))})}openMenu(t){return(0,T.mG)(this,void 0,void 0,function*(){const o=["point","story"].map(r=>this.menuController.enable(r===t,r));yield Promise.all(o),this.menuController.open()})}openStory(){this.openMenu("story")}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u._q),e.Y36(E.h),e.Y36(G.F0),e.Y36(R.C),e.Y36(L.H7))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-game-map"]],features:[e._Bn([u._q])],decls:40,vars:16,consts:[["menuId","point","contentId","main-content"],[1,"ion-text-center"],["slot","secondary"],[1,"ion-padding"],[3,"selectedPoint"],["menuId","story","contentId","main-content"],[3,"innerHTML"],["id","main-content",1,"ion-page"],[3,"translucent"],["slot","primary"],[3,"click"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],[3,"game"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-menu",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-buttons",2)(4,"ion-menu-toggle")(5,"ion-button"),e._uU(6,"Close"),e.qZA()()(),e.TgZ(7,"ion-title"),e._uU(8),e.ALo(9,"async"),e.qZA()()(),e.TgZ(10,"ion-content",3),e._UZ(11,"app-game-point",4),e.qZA()(),e.TgZ(12,"ion-menu",5)(13,"ion-header",1)(14,"ion-toolbar")(15,"ion-buttons",2)(16,"ion-menu-toggle")(17,"ion-button"),e._uU(18,"Close"),e.qZA()()(),e.TgZ(19,"ion-title"),e._uU(20),e.qZA()()(),e.TgZ(21,"ion-content",3),e._UZ(22,"div",6),e.qZA()(),e.TgZ(23,"div",7)(24,"ion-header",8)(25,"ion-toolbar")(26,"ion-title"),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"ion-buttons",9)(30,"ion-button",10),e.NdJ("click",function(){return i.openStory()}),e._uU(31," Story "),e.qZA()()()(),e.TgZ(32,"ion-content",11)(33,"ion-header",12)(34,"ion-toolbar")(35,"ion-title",13),e._uU(36),e.ALo(37,"translate"),e.qZA()()(),e.YNc(38,Qe,2,1,"ng-container",14),e.YNc(39,Ne,3,3,"div",14),e.qZA()()),2&t&&(e.xp6(8),e.Oqu(e.lcZ(9,10,i.title$)),e.xp6(3),e.Q6J("selectedPoint",i.selectedPoint),e.xp6(9),e.Oqu(i.game.name),e.xp6(2),e.Q6J("innerHTML",i.storyDescription,e.oJD),e.xp6(2),e.Q6J("translucent",!0),e.xp6(3),e.hij(" ",e.lcZ(28,12,"Map")," "),e.xp6(5),e.Q6J("fullscreen",!0),e.xp6(4),e.Oqu(e.lcZ(37,14,"Game")),e.xp6(2),e.Q6J("ngIf",i.game),e.xp6(1),e.Q6J("ngIf",!i.game))},dependencies:[u.YG,u.Sm,u.W2,u.Gu,u.z0,u.zc,u.wd,u.sr,g.O5,Ce,Le,g.Ov,y.X$]}),s})()}];let Je=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[G.Bz.forChild(Ye),G.Bz]}),s})(),Oe=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.Pc,g.ez,C.u5,y.aw]}),s})(),De=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.Pc,g.ez,C.u5,Je,Oe,y.aw]}),s})()}}]);