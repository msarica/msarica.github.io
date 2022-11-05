"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4319],{4319:(x,d,a)=>{a.r(d),a.d(d,{StoryBuilderPageModule:()=>G});var f=a(9808),s=a(4182),c=a(7590),u=a(5010),e=a(2096),y=a(5485),h=a(2811),S=a(4848),v=a(759),P=a(5672),p=a(4974);const M=["mapElementRef"];let m=(()=>{class o{constructor(){this.startPoint=[0,0],this.coordinateClick=new e.vpe}ngOnInit(){this.setUpMap()}setUpMap(){const[t,n]=this.startPoint,l=(0,p.xA)([n,t]);this.map=new y.Z({view:new h.ZP({center:l,zoom:18}),layers:[new S.Z({source:new P.Z})],target:"ol-map"});const J=new v.Z({});this.map.addLayer(J),this.map.on("click",g=>{const R=this.map.getCoordinateFromPixel(g.pixel),C=(0,p.FY)(R);this.coordinateClick.emit({coordinate:[C[1],C[0]],event:g})}),setTimeout(()=>{this.map.setTarget(this.mapElementRef.nativeElement)})}goToPoint(t,n=18){const r=(0,p.xA)([t[1],t[0]]),l=this.map.getView();l.setCenter(r),l.setZoom(n)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-coordinate-selection"]],viewQuery:function(t,n){if(1&t&&e.Gf(M,7),2&t){let r;e.iGM(r=e.CRH())&&(n.mapElementRef=r.first)}},inputs:{startPoint:"startPoint"},outputs:{coordinateClick:"coordinateClick"},decls:3,vars:0,consts:[["id","ol-map",1,"map-container"],["mapElementRef",""]],template:function(t,n){1&t&&(e.ynx(0),e._UZ(1,"div",0,1),e.BQk())},styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column;height:100vh}.map-container[_ngcontent-%COMP%]{flex-grow:1}"]}),o})(),T=(()=>{class o{constructor(){}ngOnInit(){}onCoordinateClick(t){console.log(t.coordinate),this.coordinate=t.coordinate}go(){try{const t=this.coord.replace(/\[|\]/g,"").split(",").map(n=>parseFloat(n.trim()));this.coordinate=t,this.coordinateSelect.goToPoint(t)}catch(t){console.log(t.message)}}copy(){navigator.clipboard.writeText(JSON.stringify(this.coordinate))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-coordinate-select-wrapper"]],viewQuery:function(t,n){if(1&t&&e.Gf(m,7),2&t){let r;e.iGM(r=e.CRH())&&(n.coordinateSelect=r.first)}},decls:8,vars:2,consts:[["placeholder","Enter coordinates",3,"ngModel","ngModelChange","keyup.enter"],[3,"click"],[3,"coordinateClick"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-item")(1,"ion-input",0),e.NdJ("ngModelChange",function(l){return n.coord=l})("keyup.enter",function(){return n.go()}),e.qZA()(),e.TgZ(2,"ion-item")(3,"ion-button",1),e.NdJ("click",function(){return n.go()}),e._uU(4," Go "),e.qZA(),e.TgZ(5,"ion-button",1),e.NdJ("click",function(){return n.copy()}),e._uU(6),e.qZA()(),e.TgZ(7,"app-coordinate-selection",2),e.NdJ("coordinateClick",function(l){return n.onCoordinateClick(l)}),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngModel",n.coord),e.xp6(5),e.hij(" Copy [",n.coordinate,"] "))},dependencies:[s.JJ,s.On,c.YG,c.pK,c.Ie,c.j9,m]}),o})();var Z=a(655);class B{constructor(i){this.info=i}getGameDetails(){return{}}validate(){}generate(){return(0,Z.mG)(this,void 0,void 0,function*(){return null})}}var w=a(4725);const W=[{path:"",component:(()=>{class o{constructor(t,n,r){this.fb=t,this.viewContainerRef=n,this.info=r,this.game=new B(this.info)}ngOnInit(){}onSubmit(){}addPoint(t){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.qu),e.Y36(e.s_b),e.Y36(w.C))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-story-builder"]],decls:7,vars:0,consts:[["json",""]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"story-builder"),e.qZA()()(),e.TgZ(4,"ion-content"),e._UZ(5,"div",null,0),e.qZA())},dependencies:[c.W2,c.Gu,c.wd,c.sr],styles:[".pointsDiv[_ngcontent-%COMP%]{padding-left:10px}"]}),o})()},{path:"map",component:T}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(W),u.Bz]}),o})(),G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,s.u5,c.Pc,A,s.UX]}),o})()}}]);