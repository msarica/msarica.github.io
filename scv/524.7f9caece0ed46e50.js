"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[524],{524:(T,g,n)=>{n.r(g),n.d(g,{routes:()=>u});var a=n(6689),l=n(7027),h=n(6814),b=n(8399);function c(t,o){1&t&&(a.TgZ(0,"ion-tab-button",5),a._UZ(1,"ion-icon",6),a.TgZ(2,"ion-label"),a._uU(3,"Start"),a.qZA()())}function d(t,o){1&t&&(a.TgZ(0,"ion-tab-button",7),a._UZ(1,"ion-icon",8),a.TgZ(2,"ion-label"),a._uU(3,"Game"),a.qZA()())}let f=(()=>{var t;class o{constructor(s){this.auth=s,this.environmentInjector=(0,a.f3M)(a.lqb),this.isLoggedIn=!1}ngOnInit(){this.auth.loggedInUser$.subscribe(s=>{this.isLoggedIn=!!s})}}return(t=o).\u0275fac=function(s){return new(s||t)(a.Y36(b.e))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-tabs"]],standalone:!0,features:[a.jDz],decls:8,vars:2,consts:[["slot","bottom"],["tab","start","href","/tabs/start",4,"ngIf"],["tab","game","href","/tabs/game",4,"ngIf"],["tab","about","href","/tabs/about"],["name","albums-outline"],["tab","start","href","/tabs/start"],["name","log-in-outline"],["tab","game","href","/tabs/game"],["name","game-controller-outline"]],template:function(s,m){1&s&&(a.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0),a.YNc(2,c,4,0,"ion-tab-button",1),a.YNc(3,d,4,0,"ion-tab-button",2),a.TgZ(4,"ion-tab-button",3),a._UZ(5,"ion-icon",4),a.TgZ(6,"ion-label"),a._uU(7,"About"),a.qZA()()()()),2&s&&(a.xp6(2),a.Q6J("ngIf",!m.isLoggedIn),a.xp6(1),a.Q6J("ngIf",m.isLoggedIn))},dependencies:[l.Pc,l.gu,l.Q$,l.yq,l.ZU,l.UN,h.ez,h.O5]}),o})();var e=n(7803);const u=[{path:"tabs",component:f,children:[{path:"start",loadComponent:()=>n.e(4061).then(n.bind(n,4061)).then(t=>t.StartPage),canActivate:[(t,o)=>(0,e.HB)(t,o)]},{path:"about",loadComponent:()=>n.e(8404).then(n.bind(n,8404)).then(t=>t.AboutPage)},{path:"game",loadComponent:()=>n.e(7005).then(n.bind(n,7005)).then(t=>t.GameSelectionPage),canActivate:[(t,o)=>(0,e.cB)(t,o)]},{path:"demo",loadComponent:()=>Promise.all([n.e(662),n.e(3909)]).then(n.bind(n,3909)).then(t=>t.DemoPage),canActivate:[(t,o)=>(0,e.cB)(t,o),(t,o)=>(0,e.g3)(t,o)]},{path:"game-play",loadComponent:()=>Promise.all([n.e(662),n.e(2200),n.e(5273)]).then(n.bind(n,5273)).then(t=>t.GamePage),canActivate:[(t,o)=>(0,e.cB)(t,o),(t,o)=>(0,e.g3)(t,o)],canDeactivate:[t=>(0,e.H$)(t)]},{path:"",redirectTo:"/tabs/start",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/start",pathMatch:"full"}]}}]);