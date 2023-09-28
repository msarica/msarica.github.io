"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[662],{662:(Z,v,a)=>{a.d(v,{v:()=>X});var C=a(5861),b=a(8645),y=a(1374),o=a(2181),w=a(9773),s=a(7027),d=a(95),g=a(6814),t=a(6689),h=a(6546),T=a(6593);function I(n,r){1&n&&t._UZ(0,"div",3),2&n&&t.Q6J("innerHTML",r.$implicit,t.oJD)}function _(n,r){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-label"),t.YNc(2,I,1,1,"div",2),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",i.bodyText)}}function m(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"ion-item",4),t.NdJ("click",function(){const l=t.CHM(i).$implicit,f=t.oxw(2);return t.KtG(f.optionSelected(l))}),t._uU(1),t.qZA()}if(2&n){const i=r.$implicit;t.xp6(1),t.hij(" ",i.text," ")}}function p(n,r){if(1&n&&(t.ynx(0),t.YNc(1,_,3,1,"ion-item",0),t.TgZ(2,"ion-list"),t.YNc(3,m,2,1,"ion-item",1),t.qZA(),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.bodyText?null:i.bodyText.length),t.xp6(2),t.Q6J("ngForOf",i.question.options)}}let u=(()=>{var n;class r{set point(e){var c;this._point=e,this.question=null===(c=this.point)||void 0===c?void 0:c.body,this.history=[]}get point(){return this._point}set question(e){if(this._question=e,!e)return;const c=Array.isArray(e.text)?e.text:[e.text];this.bodyText=c.map(l=>this.sanitizer.bypassSecurityTrustHtml(l.replace(/\n/g,"<br>")))}get question(){return this._question}constructor(e,c){this.gameService=e,this.sanitizer=c,this.history=[],this.bodyText=[]}ngOnInit(){}optionSelected(e){var c;if(!this.point)throw new Error("point not found");if(this.history.push({pointId:this.point.id,title:this.point.title+"-"+(null===(c=this.question)||void 0===c?void 0:c.text),selection:[e.text],time:Date.now()}),e.action)return this.gameService.closeMenu(""),this.gameService.addHistory(this.history),this.gameService.moveNext({pointId:this.point.id,...e.action}),void(this.question=void 0);e.item&&(this.question=e.item)}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(h.h),t.Y36(T.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-decision"]],inputs:{point:"point"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],["class","ion-text-wrap",3,"innerHTML",4,"ngFor","ngForOf"],[1,"ion-text-wrap",3,"innerHTML"],[1,"ion-text-wrap",3,"click"]],template:function(e,c){1&e&&t.YNc(0,p,4,2,"ng-container",0),2&e&&t.Q6J("ngIf",c.question)},dependencies:[s.Pc,s.Ie,s.Q$,s.q_,g.ez,g.sg,g.O5,d.u5]}),r})();class x{constructor(r){this.gameService=r}onSubmit(r){const i=this.isCorrect(r),e=Array.isArray(r)?r:[r];this.gameService.answerSelected(this.point,i?"correct":"incorrect",e)}}let S=(()=>{var n;class r extends x{set point(e){this._point=e,this.input=""}get point(){return this._point}constructor(e){super(e),this.input="",this._point=null}ngOnInit(){}submit(){var e;null!==(e=this.input)&&void 0!==e&&e.length&&this.onSubmit(this.input)}isCorrect(e){return!!e.length&&(e=e.trim().toLowerCase(),this.point.body.possibleAnswers.some(l=>l.trim().toLowerCase()===e))}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(h.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-short-answer"]],inputs:{point:"point"},standalone:!0,features:[t.qOj,t.jDz],decls:5,vars:3,consts:[["placeholder","Enter your answer",3,"ngModel","ngModelChange","keyup.enter"],["expand","block",3,"disabled","click"]],template:function(e,c){1&e&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-input",0),t.NdJ("ngModelChange",function(f){return c.input=f})("keyup.enter",function(){return c.submit()}),t.qZA()(),t.TgZ(3,"ion-button",1),t.NdJ("click",function(){return c.submit()}),t._uU(4),t.qZA(),t.BQk()),2&e&&(t.xp6(2),t.Q6J("ngModel",c.input),t.xp6(1),t.Q6J("disabled",!c.input.length),t.xp6(1),t.hij(" ","Submit"," "))},dependencies:[s.Pc,s.YG,s.pK,s.Ie,s.j9,d.u5,d.JJ,d.On,g.ez],encapsulation:2}),r})();function J(n,r){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-radio",4),t._uU(2),t.qZA()()),2&n){const i=r.$implicit;t.xp6(1),t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function A(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item-group")(2,"ion-radio-group",1),t.NdJ("ngModelChange",function(c){t.CHM(i);const l=t.oxw();return t.KtG(l.selected=c)}),t.YNc(3,J,3,2,"ion-item",2),t.qZA()(),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.select())}),t._uU(5),t.qZA()()}if(2&n){const i=t.oxw();t.xp6(2),t.Q6J("ngModel",i.selected),t.xp6(1),t.Q6J("ngForOf",i.body.choices),t.xp6(1),t.Q6J("disabled",!i.selected),t.xp6(1),t.hij(" ","Submit"," ")}}let P=(()=>{var n;class r extends x{set point(e){this._point=e,this.answered=!1}get point(){return this._point}get body(){return this._point.body}constructor(e){super(e),this._point=null,this.selected="",this.answered=!1}ngOnInit(){}select(){this.onSubmit(this.selected)}isCorrect(e){const c=this.point.body.possibleAnswers.includes(e);return c&&(this.answered=!0),c}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(h.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-multiple-choice"]],inputs:{point:"point"},standalone:!0,features:[t.qOj,t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["expand","block",3,"disabled","click"],["label","Option","slot","end",3,"value"]],template:function(e,c){1&e&&t.YNc(0,A,6,4,"ion-list",0),2&e&&t.Q6J("ngIf",!c.answered)},dependencies:[s.Pc,s.YG,s.Ie,s.Ub,s.q_,s.B7,s.se,s.U5,s.QI,g.ez,g.sg,g.O5,d.u5,d.JJ,d.On],encapsulation:2}),r})();var Q=a(8658),N=a(8939);function U(n,r){1&n&&(t.ynx(0),t.TgZ(1,"ion-item"),t._uU(2," This point is not active yet... Keep exploring! "),t.qZA(),t.BQk())}function M(n,r){1&n&&(t.ynx(0),t.TgZ(1,"ion-item"),t._uU(2," You are not close to this location! "),t.qZA(),t.BQk())}function Y(n,r){1&n&&t._UZ(0,"div",6),2&n&&t.Q6J("innerHTML",r.$implicit,t.oJD)}function G(n,r){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-label"),t.YNc(2,Y,1,1,"div",5),t.qZA()()),2&n){const i=t.oxw(3);t.xp6(2),t.Q6J("ngForOf",i.bodyText)}}function O(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-decision",8),t.BQk()),2&n){const i=t.oxw(4);t.xp6(1),t.Q6J("point",i.point)}}function k(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-short-answer",8),t.BQk()),2&n){const i=t.oxw(4);t.xp6(1),t.Q6J("point",i.point)}}function q(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-multiple-choice",8),t.BQk()),2&n){const i=t.oxw(4);t.xp6(1),t.Q6J("point",i.point)}}function H(n,r){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"ion-item",9),t.NdJ("click",function(){t.CHM(i);const c=t.oxw(4);return t.KtG(c.close())}),t._uU(2),t.qZA(),t.BQk()}2&n&&(t.xp6(2),t.hij(" ","OK"," "))}function F(n,r){if(1&n&&(t.ynx(0,1),t.YNc(1,O,2,1,"ng-container",2),t.YNc(2,k,2,1,"ng-container",2),t.YNc(3,q,2,1,"ng-container",2),t.YNc(4,H,3,1,"ng-container",7),t.BQk()),2&n){const i=t.oxw(3);t.Q6J("ngSwitch",i.point.body.type),t.xp6(1),t.Q6J("ngSwitchCase","choice"),t.xp6(1),t.Q6J("ngSwitchCase","shortanswer"),t.xp6(1),t.Q6J("ngSwitchCase","multiplechoice")}}function D(n,r){if(1&n&&(t.TgZ(0,"ion-card-content"),t._uU(1),t.qZA()),2&n){const i=t.oxw(5);t.xp6(1),t.hij(" ",i.messageIfCorrect," ")}}function B(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"ion-card",10)(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA()(),t.YNc(5,D,2,1,"ion-card-content",0),t.qZA(),t.TgZ(6,"ion-button",11),t.NdJ("click",function(){t.CHM(i);const c=t.oxw(4);return t.KtG(c.close())}),t._uU(7),t.qZA()()}if(2&n){const i=t.oxw(4);t.xp6(4),t.Oqu("Correct"),t.xp6(1),t.Q6J("ngIf",i.messageIfCorrect),t.xp6(2),t.hij(" ","Next"," ")}}function j(n,r){if(1&n&&(t.TgZ(0,"ion-card-content"),t._uU(1),t.qZA()),2&n){const i=t.oxw(5);t.xp6(1),t.hij(" ",i.messageIfIncorrect," ")}}function E(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"ion-button",11),t.NdJ("click",function(){t.CHM(i);const c=t.oxw(5);return t.KtG(c.giveUp())}),t._uU(1),t.qZA()}2&n&&(t.xp6(1),t.hij(" ","GiveUp"," "))}function $(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-card",12)(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA()(),t.YNc(5,j,2,1,"ion-card-content",0),t.qZA(),t.TgZ(6,"ion-footer"),t.YNc(7,E,2,1,"ion-button",13),t.qZA(),t.BQk()),2&n){const i=t.oxw(4);t.xp6(4),t.Oqu("Incorrect"),t.xp6(1),t.Q6J("ngIf",i.messageIfIncorrect),t.xp6(2),t.Q6J("ngIf",i.canGiveUp)}}function z(n,r){if(1&n&&(t.ynx(0),t.YNc(1,B,8,3,"div",0),t.YNc(2,$,8,3,"ng-container",0),t.BQk()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("ngIf",i.isCorrect),t.xp6(1),t.Q6J("ngIf",!i.isCorrect)}}function K(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-label",3)(3,"h1"),t._uU(4),t.qZA()()(),t.YNc(5,G,3,1,"ion-item",0),t.YNc(6,F,5,4,"ng-container",4),t.YNc(7,z,3,2,"ng-container",0),t.BQk()),2&n){const i=t.oxw(2);t.xp6(4),t.Oqu(i.point.title),t.xp6(1),t.Q6J("ngIf",null==i.bodyText?null:i.bodyText.length),t.xp6(1),t.Q6J("ngIf",!i.isCorrect),t.xp6(1),t.Q6J("ngIf",i.showFeedback)}}function L(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-story-history-item",14),t.BQk()),2&n){const i=t.oxw(2);t.xp6(1),t.Q6J("item",i.hist)}}function R(n,r){if(1&n&&(t.ynx(0)(1,1),t.YNc(2,U,3,0,"ng-container",2),t.YNc(3,M,3,0,"ng-container",2),t.YNc(4,K,8,4,"ng-container",2),t.BQk(),t.YNc(5,L,2,1,"ng-container",0),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngSwitch",i.status),t.xp6(1),t.Q6J("ngSwitchCase","not_selectable"),t.xp6(1),t.Q6J("ngSwitchCase","not_close"),t.xp6(1),t.Q6J("ngSwitchCase","close"),t.xp6(1),t.Q6J("ngIf",i.hist)}}let X=(()=>{var n;class r{getStatus(){const e=this.selectedPoint;return e.notSelectable?"not_selectable":e.explored?"explored":e.isClose?"close":"not_close"}set selectedPoint(e){if(this._selectedPoint=e,this.showFeedback=!1,this.isCorrect=!1,this.hist=void 0,!e)return;this.status=this.getStatus(),"explored"===this.status&&this.gameService.historyChanged$.pipe((0,y.P)()).subscribe(l=>{const f=l.history.find(W=>W.pointId===e.pointId);f&&(this.hist=Q.H.toHistItem(e.point,f))}),this.messageIfCorrect=e.point.body.messageIfCorrect,this.messageIfIncorrect=e.point.body.messageIfIncorrect,this.canGiveUp=!e.point.body.cannotGiveUp,console.log(e);const c=Array.isArray(e.point.body.text)?e.point.body.text:[e.point.body.text];this.bodyText="choice"===e.point.body.type?void 0:c.map(l=>this.sanitizer.bypassSecurityTrustHtml(l.replace(/\n/g,"<br>")))}get selectedPoint(){return this._selectedPoint}constructor(e,c,l){this.gameService=e,this.info=c,this.sanitizer=l,this.destroy$=new b.x,this._selectedPoint=null,this.showFeedback=!1,this.isCorrect=!1,this.canGiveUp=!0,this.status="not_close"}get point(){return this.selectedPoint.point}get isExplored(){return this._selectedPoint.explored}ngOnInit(){this.gameService.answerSelected$.pipe((0,o.h)(c=>!!c),(0,o.h)(c=>{var l;return c.id===(null===(l=this.point)||void 0===l?void 0:l.id)}),(0,w.R)(this.destroy$)).pipe((0,o.h)(c=>["correct","incorrect","giveUp"].includes(c.result))).subscribe(c=>{if(c){if("giveUp"===c.result)return void this.gameService.moveNext(this.point2MoveNext());this.showFeedback=!0,this.isCorrect="correct"===c.result,this.isCorrect&&this.gameService.moveNext(this.point2MoveNext())}})}close(){this.gameService.closeMenu(""),this.selectedPoint=null}point2MoveNext(){return{pointId:this.point.id,...this.point.body.action||{}}}giveUp(){var e=this;return(0,C.Z)(function*(){(yield e.info.confirmYesNo("Give up","Are you sure to give up?"))&&(e.gameService.answerSelected(e.point,"giveUp"),e.close())})()}ngOnDestroy(){console.log("destroy"),this.destroy$.next(),this.destroy$.unsubscribe()}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(h.h),t.Y36(N.C),t.Y36(T.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-point"]],inputs:{selectedPoint:"selectedPoint"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"ion-text-wrap"],[3,"ngSwitch",4,"ngIf"],["class","ion-text-wrap",3,"innerHTML",4,"ngFor","ngForOf"],[1,"ion-text-wrap",3,"innerHTML"],[4,"ngSwitchDefault"],[3,"point"],["button","",3,"click"],["color","success"],["expand","block",3,"click"],["color","danger"],["expand","block",3,"click",4,"ngIf"],[3,"item"]],template:function(e,c){1&e&&t.YNc(0,R,6,5,"ng-container",0),2&e&&t.Q6J("ngIf",c.selectedPoint)},dependencies:[s.Pc,s.YG,s.PM,s.FN,s.Zi,s.Dq,s.fr,s.Ie,s.Q$,d.u5,g.ez,g.sg,g.O5,g.RF,g.n9,g.ED,u,S,P,Q.H],styles:[".correct[_ngcontent-%COMP%]{padding:5px;border:1px solid green;border-radius:5px;color:green}.incorrect[_ngcontent-%COMP%]{padding:5px;border:1px solid red;border-radius:5px;color:red}"],changeDetection:0}),r})()},8658:(Z,v,a)=>{a.d(v,{H:()=>I});var C=a(6814),b=a(95),y=a(7027),o=a(6689);function w(_,m){if(1&_&&(o.TgZ(0,"ion-item",3)(1,"ion-label"),o._uU(2),o.qZA()()),2&_){const p=o.oxw(2);o.xp6(2),o.Oqu(p.item.title)}}function s(_,m){if(1&_&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&_){const p=m.$implicit;o.xp6(1),o.hij(" ",p," ")}}function d(_,m){if(1&_&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&_){const p=o.oxw(3);o.xp6(1),o.hij(" ",p.item.selection," ")}}function g(_,m){1&_&&(o.TgZ(0,"div"),o._uU(1," GAVE UP :( "),o.qZA())}function t(_,m){if(1&_&&(o.ynx(0),o.YNc(1,s,2,1,"div",4),o.TgZ(2,"h5"),o._uU(3,"Selection"),o.qZA(),o.YNc(4,d,2,1,"div",0),o.YNc(5,g,2,0,"div",0),o.BQk()),2&_){const p=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",p.item.question),o.xp6(3),o.Q6J("ngIf",!p.item.gaveUp),o.xp6(1),o.Q6J("ngIf",p.item.gaveUp)}}function h(_,m){if(1&_&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&_){const p=o.oxw(2);o.xp6(1),o.hij(" ",p.item.result," ")}}function T(_,m){if(1&_&&(o.ynx(0),o.YNc(1,w,3,1,"ion-item",1),o.TgZ(2,"div",2),o.YNc(3,t,6,3,"ng-container",0),o.YNc(4,h,2,1,"div",0),o.qZA(),o.BQk()),2&_){const p=o.oxw();o.xp6(1),o.Q6J("ngIf",p.showHeader),o.xp6(2),o.Q6J("ngIf",!p.item.result),o.xp6(1),o.Q6J("ngIf",p.item.result)}}let I=(()=>{var _;class m{constructor(){this.index=0,this.showHeader=!1}ngOnInit(){}static toHistItem(u,x){return{title:x.title,question:u&&(Array.isArray(u.body.text)?u.body.text:[u.body.text]),selection:x.selection.join(", "),gaveUp:x.gaveUp,result:x.result}}}return(_=m).\u0275fac=function(u){return new(u||_)},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-story-history-item"]],inputs:{item:"item",index:"index",showHeader:"showHeader"},standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["slot","header","color","light",4,"ngIf"],["slot","content",1,"ion-padding"],["slot","header","color","light"],[4,"ngFor","ngForOf"]],template:function(u,x){1&u&&o.YNc(0,T,5,3,"ng-container",0),2&u&&o.Q6J("ngIf",x.item)},dependencies:[y.Pc,y.Ie,y.Q$,C.ez,C.sg,C.O5,b.u5]}),m})()}}]);