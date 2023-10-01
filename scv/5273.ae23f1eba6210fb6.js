"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5273],{5273:(ae,P,i)=>{i.r(P),i.d(P,{GamePage:()=>re});var v=i(5861),y=i(6814),b=i(95),l=i(7027),$=i(4475),E=i(1828),A=i(902),L=i(5311),w=i(2620),N=i(8039),O=i(9489),C=i(8645),g=i(9773),Q=i(6306),Y=i(2096),H=i(8536),R=i(9593),D=i(8182),I=i(6093),J=i(3822),Z=i(7285),k=i(2064),e=i(6689),z=i(7157),x=i(6546),G=i(8939),j=i(8001);const B=["mapElementRef"];let V=(()=>{var s;class m{constructor(t,o,n,r,c){this.locationService=t,this.gameService=o,this.info=n,this.loading=r,this.menuController=c,this.destroy$=new C.x,this.playerFeature=null,this.markerSource=null,this.features={},this.points=null,this.game$=this.gameService.gameLoaded$.pipe((0,g.R)(this.destroy$)).subscribe(a=>{this.points=null,this.setUpMap(a),this.points={},a.points.forEach(h=>{this.points[h.id]={point:h}}),this.updateMarkers()}),this.pointChanges$=this.gameService.pointsSnapshot$.pipe((0,g.R)(this.destroy$)).subscribe(a=>{this.latestUpdate=a,this.updateMarkers()})}updateMarkers(){if(!this.points||!this.latestUpdate)return;const t=this.latestUpdate;Object.keys(t).forEach(o=>{const n=t[o],r=this.points[o];if(!r)return void console.debug(o," not found");const c=r.point,a=c.id,h=c.img||Z.P.point,u=n.explored?Z.P.explored:n.selectable?h:Z.P.notSelectable;var p;if(!n.enabled||this.features[a])if(n.enabled||!this.features[a])if(n.explored&&this.features[a])null===(p=this.features[a])||void 0===p||p.setStyle(this.getStyle(Z.P.explored));else if(n.selectable&&this.features[a]){var f,S;null===(f=this.features[a])||void 0===f||f.setStyle(this.getStyle(h)),(null===(S=this.features[a])||void 0===S?void 0:S.get("data")).notSelectable=!1}else if(n.selectable||!this.features[a]);else{var T,U;null===(T=this.features[a])||void 0===T||T.setStyle(this.getStyle(Z.P.notSelectable)),(null===(U=this.features[a])||void 0===U?void 0:U.get("data")).notSelectable=!0}else this.removeMarker(a);else this.addMarker(c.location,{img:u,clickable:!0,pointId:a,location:c.location,notSelectable:!n.selectable})})}ngOnInit(){var t=this;return(0,v.Z)(function*(){t.setupSubscriptions()})()}setupSubscriptions(){var t=this;return(0,v.Z)(function*(){const o=yield t.loading.present2("Loading...\nSetting up markers",2e5);t.locationService.watchLocation().pipe((0,g.R)(t.destroy$),(0,Q.K)(r=>(console.log(r),o.dismiss(),(0,Y.of)(null)))).subscribe(r=>{r&&(t.lastUserLocation||o.dismiss(),t.lastUserLocation=r,t.playerFeature&&t.updateUserLocation(r))}),t.gameService.gameEnded$.pipe((0,g.R)(t.destroy$)).subscribe(r=>{t.info.alert(r.finishMessage,"END")})})()}setUpMap(t){this.map&&(this.map.dispose(),this.features={},this.markerSource=null,this.playerFeature=null),(0,k.eL)();const o=t.zoom,n=t.location,r=new N.Z({collapsible:!0});this.map=new $.Z({view:new E.ZP({center:n,zoom:o}),layers:[new w.Z({source:new H.Z})],target:"ol-map",controls:(0,O.c)({attribution:!1}).extend([r])}),r.setCollapsible(!0),r.setCollapsed(!0);const c=new R.Z({features:[]});this.markerSource=c;const a=new D.Z({source:c});this.map.addLayer(a),this.playerFeature=this.setUpUser(),this.lastUserLocation&&this.updateUserLocation(this.lastUserLocation),this.map.on("moveend",h=>{var u;null===(u=this.map)||void 0===u||u.getView().getZoom()}),this.map.on("click",h=>{var u;const p=null===(u=this.map)||void 0===u?void 0:u.forEachFeatureAtPixel(h.pixel,f=>f);p&&this.onFeatureClicked(h,p)}),setTimeout(()=>{var h,u;null===(h=this.map)||void 0===h||h.setTarget(null===(u=this.mapElementRef)||void 0===u?void 0:u.nativeElement)})}onFeatureClicked(t,o){var n,r;if(!o)throw new Error("feature not found");if(!this.playerFeature)throw new Error("user location not found yet");const c=o.get("data");if(!c.clickable)return;const a=null===(n=o.getGeometry())||void 0===n?void 0:n.getCoordinates(),h=null===(r=this.playerFeature.getGeometry())||void 0===r?void 0:r.getCoordinates();if(!a||!h)throw new Error(`featureCoord ${a} userCoord ${h}`);const f=this.locationService.distance(a[1],h[1],a[0],h[0]),S=this.gameService.isCloseEnough(f);console.log(f,S),this.gameService.pointSelected({pointId:c.pointId,point:this.points[c.pointId].point,distance:f,isClose:S,notSelectable:c.notSelectable})}setUpUser(t){return this.addMarker([0,0],{clickable:!1,img:Z.P.current})}ngOnDestroy(){console.debug("destroying map component"),this.destroy$.next(),this.destroy$.unsubscribe()}getStyle(t){return new I.ZP({image:new J.Z({anchor:[.5,.5],anchorXUnits:"fraction",anchorYUnits:"fraction",size:[70,70],src:t})})}addMarker(t,o){if(!o)throw new Error("Data not found");const[n,r]=t,a=new A.Z({geometry:new L.Z([n,r]),data:o}),h=this.getStyle(o.img);a.setStyle(h),this.markerSource.addFeature(a);const u=o.pointId;return this.features[u]&&this.markerSource.removeFeature(this.features[u]),this.features[u]=a,a}removeMarker(t){if(!t)throw new Error("pointid cannot be null");const o=this.features[t];if(!o)throw new Error("feature not found");this.markerSource.removeFeature(o),delete this.features[t]}updateUserLocation(t){var o;if(!this.playerFeature)throw new Error("player not present");console.log(t);const n=this.locationService.transformFromGeoLocation(t);null===(o=this.playerFeature.getGeometry())||void 0===o||o.setCoordinates(n)}}return(s=m).\u0275fac=function(t){return new(t||s)(e.Y36(z.a),e.Y36(x.h),e.Y36(G.C),e.Y36(j.b),e.Y36(l._q))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-map"]],viewQuery:function(t,o){if(1&t&&e.Gf(B,7),2&t){let n;e.iGM(n=e.CRH())&&(o.mapElementRef=n.first)}},standalone:!0,features:[e.jDz],decls:3,vars:0,consts:[["id","ol-map",1,"map-container"],["mapElementRef",""]],template:function(t,o){1&t&&(e.ynx(0),e._UZ(1,"div",0,1),e.BQk())},dependencies:[l.Pc,b.u5,y.ez],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column;height:86vh}.map-container[_ngcontent-%COMP%]{flex-grow:1}"],changeDetection:0}),m})();var X=i(5619),F=i(8658),K=i(9025);const W=["accordionGroup"];function q(s,m){if(1&s&&(e.TgZ(0,"ion-accordion",8)(1,"ion-item",1)(2,"ion-label"),e._uU(3),e.qZA()(),e.TgZ(4,"div",9),e._UZ(5,"app-story-history-item",10),e.qZA()()),2&s){const d=m.$implicit,t=m.index;e.Q6J("value",t),e.xp6(3),e.Oqu(d.title),e.xp6(2),e.Q6J("item",d)("index",t)("showHeader",!1)}}function _(s,m){1&s&&(e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3,"No History"),e.qZA()(),e.TgZ(4,"ion-card-content"),e._uU(5," No history found yet "),e.qZA()())}let ee=(()=>{var s;class m{constructor(t){this.gameService=t,this.destroy$=new C.x,this.points={},this.gameName="",this.hist=[],this.game$=this.gameService.gameLoaded$.pipe((0,g.R)(this.destroy$)).subscribe(o=>{this.gameName=o.name,this.gameDescription=o.description,this.points={},o.points.forEach(n=>{this.points[n.id]=n})}),this.gameHistory$=this.gameService.historyChanged$.pipe((0,g.R)(this.destroy$)).subscribe(o=>{this.hist=[],o.history.forEach(n=>{this.hist.push(F.H.toHistItem(this.points[n.pointId],n))})})}ngOnInit(){}ngOnDestroy(){console.debug("destroying story-history"),this.destroy$.next(),this.destroy$.unsubscribe()}}return(s=m).\u0275fac=function(t){return new(t||s)(e.Y36(x.h))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-story-history"]],viewQuery:function(t,o){if(1&t&&e.Gf(W,7),2&t){let n;e.iGM(n=e.CRH())&&(o.accordionGroup=n.first)}},standalone:!0,features:[e.jDz],decls:12,vars:4,consts:[["value","first"],["slot","header","color","light"],["slot","content",1,"ion-padding"],[3,"bodyText"],["multiple","true"],["accordionGroup",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["slot","content"],[3,"item","index","showHeader"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-accordion-group")(1,"ion-accordion",0)(2,"ion-item",1)(3,"ion-label"),e._uU(4),e.qZA()(),e.TgZ(5,"div",2),e._UZ(6,"app-html-show",3),e.qZA()()(),e._UZ(7,"hr"),e.TgZ(8,"ion-accordion-group",4,5),e.YNc(10,q,6,5,"ion-accordion",6),e.qZA(),e.YNc(11,_,6,0,"ion-card",7)),2&t&&(e.xp6(4),e.Oqu(o.gameName),e.xp6(2),e.Q6J("bodyText",o.gameDescription),e.xp6(4),e.Q6J("ngForOf",o.hist),e.xp6(1),e.Q6J("ngIf",!(null!=o.hist&&o.hist.length)))},dependencies:[l.Pc,l.We,l.eh,l.PM,l.FN,l.Zi,l.Dq,l.Ie,l.Q$,y.ez,y.sg,y.O5,b.u5,F.H,K.u]}),m})();var te=i(662),oe=i(3308);function ne(s,m){if(1&s&&(e.ynx(0),e._UZ(1,"app-game-point",13),e.BQk()),2&s){const d=e.oxw();e.xp6(1),e.Q6J("selectedPoint",d.selectedPoint)}}function ie(s,m){if(1&s){const d=e.EpF();e.TgZ(0,"ion-button",9),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.goBack2Builder())}),e._uU(1," To Builder "),e.qZA()}}function se(s,m){1&s&&(e.ynx(0),e._UZ(1,"app-map"),e.BQk())}let re=(()=>{var s;class m{constructor(t,o,n,r){this.gameService=t,this.menuController=o,this.info=n,this.storage=r,this.gameName="",this.destroy$=new C.x,this.title$=new X.X("Menu"),this.isTestingGame=!1,this.askForExit=!0,this.pointSelected$=this.gameService.pointSelected$.pipe((0,g.R)(this.destroy$)).subscribe(c=>{this.selectedPoint=c,this.openPointMenu()})}ngOnInit(){this.gameService.gameLoaded$.pipe((0,g.R)(this.destroy$)).subscribe(t=>{this.gameName=t.name,this.game=t}),this.gameService.closeMenu$.pipe((0,g.R)(this.destroy$)).subscribe(()=>{this.closeMenu()})}ngOnDestroy(){console.debug("destroying gamepage"),this.destroy$.next(),this.destroy$.unsubscribe()}openMenu(t){var o=this;return(0,v.Z)(function*(){const r=["point","story"].map(c=>o.menuController.enable(c===t,c));yield Promise.all(r),o.menuController.open()})()}openStory(){var t=this;return(0,v.Z)(function*(){yield t.closeMenu(),t.openMenu("story")})()}openPointMenu(){var t=this;return(0,v.Z)(function*(){yield t.closeMenu(),t.openMenu("point")})()}ionViewDidEnter(){var t=this;return(0,v.Z)(function*(){t.closeMenu(),t.isTestingGame=t.gameService.isTestingGame,t.askForExit=!0})()}goBack2Builder(){this.askForExit=!1,this.gameService.endTestGame()}closeMenu(){var t=this;return(0,v.Z)(function*(){const o="point";yield t.menuController.enable(!0,o),yield t.menuController.close(o)})()}canLeave(){var t=this;return(0,v.Z)(function*(){var o;return!t.askForExit||!!(yield t.info.confirmYesNo("Leave Game",`Are you sure to leave ${null===(o=t.game)||void 0===o?void 0:o.name}`))})()}}return(s=m).\u0275fac=function(t){return new(t||s)(e.Y36(x.h),e.Y36(l._q),e.Y36(G.C),e.Y36(oe.V))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-game"]],standalone:!0,features:[e.jDz],decls:37,vars:11,consts:[["menuId","point","contentId","main-content"],[1,"ion-text-center"],["slot","secondary"],[4,"ngIf"],["menuId","story","contentId","main-content"],[1,"ion-padding"],["id","main-content",3,"translucent"],["slot","primary"],[3,"click",4,"ngIf"],[3,"click"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"selectedPoint"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-menu",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-buttons",2)(4,"ion-menu-toggle")(5,"ion-button"),e._uU(6,"Close"),e.qZA()()(),e.TgZ(7,"ion-title"),e._uU(8),e.ALo(9,"async"),e.qZA()()(),e.TgZ(10,"ion-content"),e.YNc(11,ne,2,1,"ng-container",3),e.qZA()(),e.TgZ(12,"ion-menu",4)(13,"ion-header",1)(14,"ion-toolbar")(15,"ion-buttons",2)(16,"ion-menu-toggle")(17,"ion-button"),e._uU(18,"Close"),e.qZA()()(),e.TgZ(19,"ion-title"),e._uU(20),e.qZA()()(),e.TgZ(21,"ion-content",5),e._UZ(22,"app-story-history"),e.qZA()(),e.TgZ(23,"ion-header",6)(24,"ion-toolbar")(25,"ion-title"),e._uU(26),e.qZA(),e.TgZ(27,"ion-buttons",7),e.YNc(28,ie,2,0,"ion-button",8),e.TgZ(29,"ion-button",9),e.NdJ("click",function(){return o.openStory()}),e._uU(30," Story "),e.qZA()()()(),e.TgZ(31,"ion-content",10)(32,"ion-header",11)(33,"ion-toolbar")(34,"ion-title",12),e._uU(35),e.qZA()()(),e.YNc(36,se,2,0,"ng-container",3),e.qZA()),2&t&&(e.xp6(8),e.Oqu(e.lcZ(9,9,o.title$)),e.xp6(3),e.Q6J("ngIf",o.selectedPoint),e.xp6(9),e.Oqu(null==o.game?null:o.game.name),e.xp6(3),e.Q6J("translucent",!0),e.xp6(3),e.hij(" ",o.gameName," "),e.xp6(2),e.Q6J("ngIf",o.isTestingGame),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(4),e.hij(" ",o.gameName," "),e.xp6(1),e.Q6J("ngIf",o.game))},dependencies:[l.Pc,l.YG,l.Sm,l.W2,l.Gu,l.z0,l.zc,l.wd,l.sr,y.ez,y.O5,y.Ov,b.u5,V,ee,te.v]}),m})()}}]);