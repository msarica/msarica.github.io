"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9241],{9241:(G,u,n)=>{n.r(u),n.d(u,{TabsPageModule:()=>S});var i=n(7590),r=n(9808),g=n(4182),l=n(5470),h=n(655),a=n(2096),c=n(3629);let m=(()=>{class t{constructor(o,s){this.gameService=o,this.router=s}canActivate(o,s){return(0,h.mG)(this,void 0,void 0,function*(){return!!(yield this.gameService.getGame())||(this.router.navigate(["/"]),!1)})}}return t.\u0275fac=function(o){return new(o||t)(a.LFG(c.h),a.LFG(l.F0))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n(5529),f=n(7625),v=n(4725),T=n(7788);function P(t,e){1&t&&(a.TgZ(0,"ion-tab-button",5),a._UZ(1,"ion-icon",6),a.TgZ(2,"ion-label"),a._uU(3," Start "),a.qZA()())}function p(t,e){1&t&&(a.TgZ(0,"ion-tab-button",7),a._UZ(1,"ion-icon",8),a.TgZ(2,"ion-label"),a._uU(3," Game "),a.qZA()())}const d="/tabs/start",Z=[{path:"tabs",component:(()=>{class t{constructor(o,s,A,C,F){this.activatedRoute=o,this.router=s,this.gameService=A,this.info=C,this.utils=F,this.destroy$=new b.xQ,this.gameStarted=!1}ngOnInit(){this.gameService.gameSelected$.pipe((0,f.R)(this.destroy$)).subscribe(o=>{this.gameStarted=!!o})}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(l.gz),a.Y36(l.F0),a.Y36(c.h),a.Y36(v.C),a.Y36(T.F))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-tabs"]],decls:8,vars:2,consts:[["slot","bottom"],["tab","start",4,"ngIf"],["tab","map",4,"ngIf"],["tab","about"],["name","albums-outline"],["tab","start"],["name","log-in-outline"],["tab","map"],["name","game-controller-outline"]],template:function(o,s){1&o&&(a.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0),a.YNc(2,P,4,0,"ion-tab-button",1),a.YNc(3,p,4,0,"ion-tab-button",2),a.TgZ(4,"ion-tab-button",3),a._UZ(5,"ion-icon",4),a.TgZ(6,"ion-label"),a._uU(7,"About"),a.qZA()()()()),2&o&&(a.xp6(2),a.Q6J("ngIf",!s.gameStarted),a.xp6(1),a.Q6J("ngIf",s.gameStarted))},dependencies:[i.gu,i.Q$,i.yq,i.ZU,i.UN,r.O5]}),t})(),children:[{path:"start",loadChildren:()=>Promise.all([n.e(8592),n.e(1138)]).then(n.bind(n,1138)).then(t=>t.LoginPageModule)},{path:"map",loadChildren:()=>Promise.all([n.e(8592),n.e(6667)]).then(n.bind(n,6667)).then(t=>t.GameMapPageModule),canActivate:[m]},{path:"about",loadChildren:()=>n.e(197).then(n.bind(n,197)).then(t=>t.AboutPageModule)},{path:"",redirectTo:d,pathMatch:"full"}]},{path:"",redirectTo:d,pathMatch:"full"}];let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[l.Bz.forChild(Z)]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[i.Pc,r.ez,g.u5,M]}),t})()}}]);