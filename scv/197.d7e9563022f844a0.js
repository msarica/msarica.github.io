"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[197],{197:(J,c,i)=>{i.r(c),i.d(c,{AboutPageModule:()=>v});var g=i(9808),u=i(4182),r=i(7590),d=i(5470),l=i(655),m=i(8328),h=i(7788),e=i(2096),p=i(4725);const f=[{path:"",component:(()=>{class o{constructor(t,n,a){this.gameService=t,this.utils=n,this.info=a,this.zipped=""}ngOnInit(){}generate(){return(0,l.mG)(this,void 0,void 0,function*(){try{this.zipped=yield this.gameService.getCompressedGame(),console.log(this.zipped.length)}catch(t){this.info.alert(t.message)}})}restore(){return(0,l.mG)(this,void 0,void 0,function*(){try{yield this.gameService.loadStory(this.zipped)}catch(t){console.error(t),this.info.alert(t.message)}})}getAsJson(){return(0,l.mG)(this,void 0,void 0,function*(){try{this.zipped=yield this.gameService.getGameAsJson(),console.log(this.zipped.length)}catch(t){this.info.alert(t.message)}})}loadFromJson(){return(0,l.mG)(this,void 0,void 0,function*(){let t;try{t=JSON.stringify(JSON.parse(this.zipped))}catch(n){return void this.info.alert("Not a valid json")}try{yield this.gameService.loadStoryFromJson(t)}catch(n){console.error(n),this.info.alert(n.message)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.h),e.Y36(h.F),e.Y36(p.C))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-about"]],decls:21,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],["placeholder","",3,"autoGrow","ngModel","ngModelChange"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," About "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8," About "),e.qZA()()(),e.TgZ(9,"ion-button",4),e.NdJ("click",function(){return n.generate()}),e._uU(10," Generate Compressed "),e.qZA(),e.TgZ(11,"ion-button",4),e.NdJ("click",function(){return n.restore()}),e._uU(12," Restore From Compressed "),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"ion-button",4),e.NdJ("click",function(){return n.getAsJson()}),e._uU(15," Get As JSON "),e.qZA(),e.TgZ(16,"ion-button",4),e.NdJ("click",function(){return n.loadFromJson()}),e._uU(17," Load From JSON "),e.qZA(),e._UZ(18,"br"),e.TgZ(19,"ion-item")(20,"ion-textarea",5),e.NdJ("ngModelChange",function(b){return n.zipped=b}),e.qZA()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(16),e.Q6J("autoGrow",!0)("ngModel",n.zipped))},dependencies:[u.JJ,u.On,r.YG,r.W2,r.Gu,r.Ie,r.g2,r.wd,r.sr,r.j9]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,u.u5,r.Pc,A]}),o})()}}]);