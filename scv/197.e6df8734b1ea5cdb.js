"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[197],{197:(b,s,n)=>{n.r(s),n.d(s,{AboutPageModule:()=>h});var c=n(9808),d=n(4182),u=n(7590),a=n(5470),l=n(655),t=n(2096),g=n(3629),p=n(7788);const m=[{path:"",component:(()=>{class e{constructor(o,r){this.gameService=o,this.utils=r,this.zipped=""}ngOnInit(){}generate(){return(0,l.mG)(this,void 0,void 0,function*(){try{this.zipped=yield this.utils.getCompressedGame(),console.log(this.zipped.length)}catch(o){this.zipped=o.message}})}restore(){return(0,l.mG)(this,void 0,void 0,function*(){try{yield this.utils.loadStory(this.zipped)}catch(o){console.error(o)}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.h),t.Y36(p.F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about"]],decls:16,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],["name","","id","","cols","30","rows","10"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," About "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8," About "),t.qZA()()(),t.TgZ(9,"ion-button",4),t.NdJ("click",function(){return r.generate()}),t._uU(10," Generate "),t.qZA(),t.TgZ(11,"ion-button",4),t.NdJ("click",function(){return r.restore()}),t._uU(12," Restore "),t.qZA(),t._UZ(13,"br"),t.TgZ(14,"textarea",5),t._uU(15),t.qZA()()),2&o&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(11),t.Oqu(r.zipped))},dependencies:[u.YG,u.W2,u.Gu,u.wd,u.sr]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(m),a.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,d.u5,u.Pc,A]}),e})()}}]);