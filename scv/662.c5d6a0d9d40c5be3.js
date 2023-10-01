"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[662],{662:(Q,I,a)=>{a.d(I,{v:()=>z});var f=a(5861),w=a(8645),y=a(1374),i=a(2181),b=a(9773),r=a(7027),g=a(95),p=a(6814),x=a(9025),t=a(6689),m=a(6546);function T(n,s){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-label"),t._UZ(2,"app-html-show",2),t.qZA()()),2&n){const o=t.oxw(2);t.xp6(2),t.Q6J("bodyText",o.bodyText)}}function _(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"ion-item",3),t.NdJ("click",function(){const u=t.CHM(o).$implicit,v=t.oxw(2);return t.KtG(v.optionSelected(u))}),t._uU(1),t.qZA()}if(2&n){const o=s.$implicit;t.xp6(1),t.hij(" ",o.text," ")}}function d(n,s){if(1&n&&(t.ynx(0),t.YNc(1,T,3,1,"ion-item",0),t.TgZ(2,"ion-list"),t.YNc(3,_,2,1,"ion-item",1),t.qZA(),t.BQk()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.bodyText?null:o.bodyText.length),t.xp6(2),t.Q6J("ngForOf",o.question.options)}}let l=(()=>{var n;class s{set point(e){var c;this._point=e,this.question=null===(c=this.point)||void 0===c?void 0:c.body,this.history=[]}get point(){return this._point}set question(e){this._question=e,e&&(this.bodyText=e.text)}get question(){return this._question}constructor(e){this.gameService=e,this.history=[]}ngOnInit(){}optionSelected(e){if(!this.point)throw new Error("point not found");if(this.history.push({pointId:this.point.id,title:this.point.title+"-"+(this.history.length+1),selection:[e.text],time:Date.now()}),e.action)return this.gameService.closeMenu(""),this.gameService.addHistory(this.history),this.gameService.moveNext({pointId:this.point.id,...e.action}),void(this.question=void 0);e.item&&(this.question=e.item)}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-decision"]],inputs:{point:"point"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],[3,"bodyText"],[1,"ion-text-wrap",3,"click"]],template:function(e,c){1&e&&t.YNc(0,d,4,2,"ng-container",0),2&e&&t.Q6J("ngIf",c.question)},dependencies:[r.Pc,r.Ie,r.Q$,r.q_,p.ez,p.sg,p.O5,g.u5,x.u]}),s})();class h{constructor(s){this.gameService=s}onSubmit(s){const o=this.isCorrect(s),e=Array.isArray(s)?s:[s];this.gameService.answerSelected(this.point,o?"correct":"incorrect",e)}}let C=(()=>{var n;class s extends h{set point(e){this._point=e,this.input=""}get point(){return this._point}constructor(e){super(e),this.input="",this._point=null}ngOnInit(){}submit(){var e;null!==(e=this.input)&&void 0!==e&&e.length&&this.onSubmit(this.input)}isCorrect(e){return!!e.length&&(e=e.trim().toLowerCase(),this.point.body.possibleAnswers.some(u=>u.trim().toLowerCase()===e))}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-short-answer"]],inputs:{point:"point"},standalone:!0,features:[t.qOj,t.jDz],decls:5,vars:3,consts:[["placeholder","Enter your answer",3,"ngModel","ngModelChange","keyup.enter"],["expand","block",3,"disabled","click"]],template:function(e,c){1&e&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-input",0),t.NdJ("ngModelChange",function(v){return c.input=v})("keyup.enter",function(){return c.submit()}),t.qZA()(),t.TgZ(3,"ion-button",1),t.NdJ("click",function(){return c.submit()}),t._uU(4),t.qZA(),t.BQk()),2&e&&(t.xp6(2),t.Q6J("ngModel",c.input),t.xp6(1),t.Q6J("disabled",!c.input.length),t.xp6(1),t.hij(" ","Submit"," "))},dependencies:[r.Pc,r.YG,r.pK,r.Ie,r.j9,g.u5,g.JJ,g.On,p.ez],encapsulation:2}),s})();function S(n,s){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-radio",4),t._uU(2),t.qZA()()),2&n){const o=s.$implicit;t.xp6(1),t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function Z(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item-group")(2,"ion-radio-group",1),t.NdJ("ngModelChange",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.selected=c)}),t.YNc(3,S,3,2,"ion-item",2),t.qZA()(),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.select())}),t._uU(5),t.qZA()()}if(2&n){const o=t.oxw();t.xp6(2),t.Q6J("ngModel",o.selected),t.xp6(1),t.Q6J("ngForOf",o.body.choices),t.xp6(1),t.Q6J("disabled",!o.selected),t.xp6(1),t.hij(" ","Submit"," ")}}let A=(()=>{var n;class s extends h{set point(e){this._point=e,this.answered=!1}get point(){return this._point}get body(){return this._point.body}constructor(e){super(e),this._point=null,this.selected="",this.answered=!1}ngOnInit(){}select(){this.onSubmit(this.selected)}isCorrect(e){const c=this.point.body.possibleAnswers.includes(e);return c&&(this.answered=!0),c}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-multiple-choice"]],inputs:{point:"point"},standalone:!0,features:[t.qOj,t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["expand","block",3,"disabled","click"],["label","Option","slot","end",3,"value"]],template:function(e,c){1&e&&t.YNc(0,Z,6,4,"ion-list",0),2&e&&t.Q6J("ngIf",!c.answered)},dependencies:[r.Pc,r.YG,r.Ie,r.Ub,r.q_,r.B7,r.se,r.U5,r.QI,p.ez,p.sg,p.O5,g.u5,g.JJ,g.On],encapsulation:2}),s})();var P=a(8658),J=a(8939);function M(n,s){1&n&&(t.ynx(0),t.TgZ(1,"ion-item"),t._uU(2," This point is not active yet... Keep exploring! "),t.qZA(),t.BQk())}function U(n,s){1&n&&(t.ynx(0),t.TgZ(1,"ion-item"),t._uU(2," You are not close to this location! "),t.qZA(),t.BQk())}function O(n,s){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-label"),t._UZ(2,"app-html-show",5),t.qZA()()),2&n){const o=t.oxw(3);t.xp6(2),t.Q6J("bodyText",o.bodyText)}}function N(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-decision",7),t.BQk()),2&n){const o=t.oxw(4);t.xp6(1),t.Q6J("point",o.point)}}function D(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-short-answer",7),t.BQk()),2&n){const o=t.oxw(4);t.xp6(1),t.Q6J("point",o.point)}}function G(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-multiple-choice",7),t.BQk()),2&n){const o=t.oxw(4);t.xp6(1),t.Q6J("point",o.point)}}function Y(n,s){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"ion-item",8),t.NdJ("click",function(){t.CHM(o);const c=t.oxw(4);return t.KtG(c.close())}),t._uU(2),t.qZA(),t.BQk()}2&n&&(t.xp6(2),t.hij(" ","OK"," "))}function H(n,s){if(1&n&&(t.ynx(0,1),t.YNc(1,N,2,1,"ng-container",2),t.YNc(2,D,2,1,"ng-container",2),t.YNc(3,G,2,1,"ng-container",2),t.YNc(4,Y,3,1,"ng-container",6),t.BQk()),2&n){const o=t.oxw(3);t.Q6J("ngSwitch",o.point.body.type),t.xp6(1),t.Q6J("ngSwitchCase","choice"),t.xp6(1),t.Q6J("ngSwitchCase","shortanswer"),t.xp6(1),t.Q6J("ngSwitchCase","multiplechoice")}}function E(n,s){if(1&n&&(t.TgZ(0,"ion-card-content"),t._uU(1),t.qZA()),2&n){const o=t.oxw(5);t.xp6(1),t.hij(" ",o.messageIfCorrect," ")}}function k(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"div")(1,"ion-card",9)(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA()(),t.YNc(5,E,2,1,"ion-card-content",0),t.qZA(),t.TgZ(6,"ion-button",10),t.NdJ("click",function(){t.CHM(o);const c=t.oxw(4);return t.KtG(c.close())}),t._uU(7),t.qZA()()}if(2&n){const o=t.oxw(4);t.xp6(4),t.Oqu("Correct"),t.xp6(1),t.Q6J("ngIf",o.messageIfCorrect),t.xp6(2),t.hij(" ","Next"," ")}}function q(n,s){if(1&n&&(t.TgZ(0,"ion-card-content"),t._uU(1),t.qZA()),2&n){const o=t.oxw(5);t.xp6(1),t.hij(" ",o.messageIfIncorrect," ")}}function F(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"ion-button",10),t.NdJ("click",function(){t.CHM(o);const c=t.oxw(5);return t.KtG(c.giveUp())}),t._uU(1),t.qZA()}2&n&&(t.xp6(1),t.hij(" ","GiveUp"," "))}function B(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-card",11)(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA()(),t.YNc(5,q,2,1,"ion-card-content",0),t.qZA(),t.TgZ(6,"ion-footer"),t.YNc(7,F,2,1,"ion-button",12),t.qZA(),t.BQk()),2&n){const o=t.oxw(4);t.xp6(4),t.Oqu("Incorrect"),t.xp6(1),t.Q6J("ngIf",o.messageIfIncorrect),t.xp6(2),t.Q6J("ngIf",o.canGiveUp)}}function j(n,s){if(1&n&&(t.ynx(0),t.YNc(1,k,8,3,"div",0),t.YNc(2,B,8,3,"ng-container",0),t.BQk()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("ngIf",o.isCorrect),t.xp6(1),t.Q6J("ngIf",!o.isCorrect)}}function K(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-label",3)(3,"h1"),t._uU(4),t.qZA()()(),t.YNc(5,O,3,1,"ion-item",0),t.YNc(6,H,5,4,"ng-container",4),t.YNc(7,j,3,2,"ng-container",0),t.BQk()),2&n){const o=t.oxw(2);t.xp6(4),t.Oqu(o.point.title),t.xp6(1),t.Q6J("ngIf",null==o.bodyText?null:o.bodyText.length),t.xp6(1),t.Q6J("ngIf",!o.isCorrect),t.xp6(1),t.Q6J("ngIf",o.showFeedback)}}function L(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-story-history-item",13),t.BQk()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("item",o.hist)}}function $(n,s){if(1&n&&(t.ynx(0)(1,1),t.YNc(2,M,3,0,"ng-container",2),t.YNc(3,U,3,0,"ng-container",2),t.YNc(4,K,8,4,"ng-container",2),t.BQk(),t.YNc(5,L,2,1,"ng-container",0),t.BQk()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngSwitch",o.status),t.xp6(1),t.Q6J("ngSwitchCase","not_selectable"),t.xp6(1),t.Q6J("ngSwitchCase","not_close"),t.xp6(1),t.Q6J("ngSwitchCase","close"),t.xp6(1),t.Q6J("ngIf",o.hist)}}let z=(()=>{var n;class s{getStatus(){const e=this.selectedPoint;return e.notSelectable?"not_selectable":e.explored?"explored":e.isClose?"close":"not_close"}set selectedPoint(e){if(this._selectedPoint=e,this.showFeedback=!1,this.isCorrect=!1,this.hist=void 0,!e)return;this.status=this.getStatus(),"explored"===this.status&&this.gameService.historyChanged$.pipe((0,y.P)()).subscribe(u=>{const v=u.history.find(R=>R.pointId===e.pointId);v&&(this.hist=P.H.toHistItem(e.point,v))}),this.messageIfCorrect=e.point.body.messageIfCorrect,this.messageIfIncorrect=e.point.body.messageIfIncorrect,this.canGiveUp=!e.point.body.cannotGiveUp;const c=Array.isArray(e.point.body.text)?e.point.body.text:[e.point.body.text];this.bodyText="choice"===e.point.body.type?void 0:c}get selectedPoint(){return this._selectedPoint}constructor(e,c){this.gameService=e,this.info=c,this.destroy$=new w.x,this._selectedPoint=null,this.showFeedback=!1,this.isCorrect=!1,this.canGiveUp=!0,this.status="not_close"}get point(){return this.selectedPoint.point}get isExplored(){return this._selectedPoint.explored}ngOnInit(){this.gameService.answerSelected$.pipe((0,i.h)(c=>!!c),(0,i.h)(c=>{var u;return c.id===(null===(u=this.point)||void 0===u?void 0:u.id)}),(0,b.R)(this.destroy$)).pipe((0,i.h)(c=>["correct","incorrect","giveUp"].includes(c.result))).subscribe(c=>{if(c){if("giveUp"===c.result)return void this.gameService.moveNext(this.point2MoveNext());this.showFeedback=!0,this.isCorrect="correct"===c.result,this.isCorrect&&this.gameService.moveNext(this.point2MoveNext())}})}close(){this.gameService.closeMenu(""),this.selectedPoint=null}point2MoveNext(){return{pointId:this.point.id,...this.point.body.action||{}}}giveUp(){var e=this;return(0,f.Z)(function*(){(yield e.info.confirmYesNo("Give up","Are you sure to give up?"))&&(e.gameService.answerSelected(e.point,"giveUp"),e.close())})()}ngOnDestroy(){console.log("destroy"),this.destroy$.next(),this.destroy$.unsubscribe()}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h),t.Y36(J.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-point"]],inputs:{selectedPoint:"selectedPoint"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"ion-text-wrap"],[3,"ngSwitch",4,"ngIf"],[3,"bodyText"],[4,"ngSwitchDefault"],[3,"point"],["button","",3,"click"],["color","success"],["expand","block",3,"click"],["color","danger"],["expand","block",3,"click",4,"ngIf"],[3,"item"]],template:function(e,c){1&e&&t.YNc(0,$,6,5,"ng-container",0),2&e&&t.Q6J("ngIf",c.selectedPoint)},dependencies:[r.Pc,r.YG,r.PM,r.FN,r.Zi,r.Dq,r.fr,r.Ie,r.Q$,g.u5,p.ez,p.O5,p.RF,p.n9,p.ED,l,C,A,P.H,x.u],styles:[".correct[_ngcontent-%COMP%]{padding:5px;border:1px solid green;border-radius:5px;color:green}.incorrect[_ngcontent-%COMP%]{padding:5px;border:1px solid red;border-radius:5px;color:red}"],changeDetection:0}),s})()},9025:(Q,I,a)=>{a.d(I,{u:()=>g});var f=a(6814),w=a(95),y=a(7027),i=a(6689),b=a(6593);function r(p,x){1&p&&i._UZ(0,"div",1),2&p&&i.Q6J("innerHTML",x.$implicit,i.oJD)}let g=(()=>{var p;class x{set bodyText(m){if(m){const T=Array.isArray(m)?m:[m];this.html=T.map(_=>this.sanitizer.bypassSecurityTrustHtml(_.replace(/\n/g,"<br>")))}}constructor(m){this.sanitizer=m,this.html=[]}ngOnInit(){}}return(p=x).\u0275fac=function(m){return new(m||p)(i.Y36(b.H7))},p.\u0275cmp=i.Xpm({type:p,selectors:[["app-html-show"]],inputs:{bodyText:"bodyText"},standalone:!0,features:[i.jDz],decls:1,vars:1,consts:[["class","ion-text-wrap",3,"innerHTML",4,"ngFor","ngForOf"],[1,"ion-text-wrap",3,"innerHTML"]],template:function(m,T){1&m&&i.YNc(0,r,1,1,"div",0),2&m&&i.Q6J("ngForOf",T.html)},dependencies:[y.Pc,w.u5,f.ez,f.sg],changeDetection:0}),x})()},8658:(Q,I,a)=>{a.d(I,{H:()=>T});var f=a(6814),w=a(95),y=a(7027),i=a(6689);function b(_,d){if(1&_&&(i.TgZ(0,"ion-item",3)(1,"ion-label"),i._uU(2),i.qZA()()),2&_){const l=i.oxw(2);i.xp6(2),i.Oqu(l.item.title)}}function r(_,d){1&_&&i._UZ(0,"div",5),2&_&&i.Q6J("innerHTML",d.$implicit,i.oJD)}function g(_,d){if(1&_&&(i.TgZ(0,"div"),i._uU(1),i.qZA()),2&_){const l=i.oxw(3);i.xp6(1),i.hij(" ",l.item.selection," ")}}function p(_,d){1&_&&(i.TgZ(0,"div"),i._uU(1," GAVE UP :( "),i.qZA())}function x(_,d){if(1&_&&(i.ynx(0),i.YNc(1,r,1,1,"div",4),i.TgZ(2,"h5"),i._uU(3,"Selection"),i.qZA(),i.YNc(4,g,2,1,"div",0),i.YNc(5,p,2,0,"div",0),i.BQk()),2&_){const l=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",l.item.question),i.xp6(3),i.Q6J("ngIf",!l.item.gaveUp),i.xp6(1),i.Q6J("ngIf",l.item.gaveUp)}}function t(_,d){if(1&_&&(i.TgZ(0,"div"),i._uU(1),i.qZA()),2&_){const l=i.oxw(2);i.xp6(1),i.hij(" ",l.item.result," ")}}function m(_,d){if(1&_&&(i.ynx(0),i.YNc(1,b,3,1,"ion-item",1),i.TgZ(2,"div",2),i.YNc(3,x,6,3,"ng-container",0),i.YNc(4,t,2,1,"div",0),i.qZA(),i.BQk()),2&_){const l=i.oxw();i.xp6(1),i.Q6J("ngIf",l.showHeader),i.xp6(2),i.Q6J("ngIf",!l.item.result),i.xp6(1),i.Q6J("ngIf",l.item.result)}}let T=(()=>{var _;class d{constructor(){this.index=0,this.showHeader=!1}ngOnInit(){}static toHistItem(h,C){return{title:C.title,question:h&&(Array.isArray(h.body.text)?h.body.text:[h.body.text]),selection:C.selection.join(", "),gaveUp:C.gaveUp,result:C.result}}}return(_=d).\u0275fac=function(h){return new(h||_)},_.\u0275cmp=i.Xpm({type:_,selectors:[["app-story-history-item"]],inputs:{item:"item",index:"index",showHeader:"showHeader"},standalone:!0,features:[i.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["slot","header","color","light",4,"ngIf"],["slot","content",1,"ion-padding"],["slot","header","color","light"],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(h,C){1&h&&i.YNc(0,m,5,3,"ng-container",0),2&h&&i.Q6J("ngIf",C.item)},dependencies:[y.Pc,y.Ie,y.Q$,f.ez,f.sg,f.O5,w.u5]}),d})()}}]);