"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[662],{662:(Z,I,a)=>{a.d(I,{v:()=>R});var C=a(5861),b=a(8645),T=a(1374),o=a(2181),Q=a(9773),r=a(7027),u=a(95),p=a(6814),f=a(9025),t=a(6689),m=a(6546);function v(n,s){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-label"),t._UZ(2,"app-html-show",2),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(2),t.Q6J("bodyText",i.bodyText)}}function _(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"ion-item",3),t.NdJ("click",function(){const g=t.CHM(i).$implicit,x=t.oxw(2);return t.KtG(x.optionSelected(g))}),t._uU(1),t.qZA()}if(2&n){const i=s.$implicit;t.xp6(1),t.hij(" ",i.text," ")}}function d(n,s){if(1&n&&(t.ynx(0),t.YNc(1,v,3,1,"ion-item",0),t.TgZ(2,"ion-list"),t.YNc(3,_,2,1,"ion-item",1),t.qZA(),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.bodyText?null:i.bodyText.length),t.xp6(2),t.Q6J("ngForOf",i.question.options)}}let l=(()=>{var n;class s{set point(e){var c;this._point=e,this.question=null===(c=this.point)||void 0===c?void 0:c.body,this.history=[]}get point(){return this._point}set question(e){this._question=e,e&&(this.bodyText=e.text)}get question(){return this._question}constructor(e){this.gameService=e,this.history=[]}ngOnInit(){}optionSelected(e){if(!this.point)throw new Error("point not found");if(this.history.push({pointId:this.point.id,title:this.point.title+"-"+(this.history.length+1),selection:[e.text],time:Date.now()}),e.action)return this.gameService.closeMenu(""),this.gameService.addHistory(this.history),this.gameService.moveNext({pointId:this.point.id,...e.action}),void(this.question=void 0);e.item&&(this.question=e.item)}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-decision"]],inputs:{point:"point"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],[3,"bodyText"],[1,"ion-text-wrap",3,"click"]],template:function(e,c){1&e&&t.YNc(0,d,4,2,"ng-container",0),2&e&&t.Q6J("ngIf",c.question)},dependencies:[r.Pc,r.Ie,r.Q$,r.q_,p.ez,p.sg,p.O5,u.u5,f.u]}),s})();class h{constructor(s){this.gameService=s}onSubmit(s){const i=this.isCorrect(s),e=Array.isArray(s)?s:[s];this.gameService.answerSelected(this.point,i?"correct":"incorrect",e)}}let y=(()=>{var n;class s extends h{set point(e){this._point=e,this.input=""}get point(){return this._point}constructor(e){super(e),this.input="",this._point=null}ngOnInit(){}submit(){var e;null!==(e=this.input)&&void 0!==e&&e.length&&this.onSubmit(this.input)}isCorrect(e){return!!e.length&&(e=e.trim().toLowerCase(),this.point.body.possibleAnswers.map(x=>new RegExp(x.trim(),"gi")).some(x=>!!e.match(x)))}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-short-answer"]],inputs:{point:"point"},standalone:!0,features:[t.qOj,t.jDz],decls:5,vars:3,consts:[["placeholder","Enter your answer",3,"ngModel","ngModelChange","keyup.enter"],["expand","block",3,"disabled","click"]],template:function(e,c){1&e&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-input",0),t.NdJ("ngModelChange",function(x){return c.input=x})("keyup.enter",function(){return c.submit()}),t.qZA()(),t.TgZ(3,"ion-button",1),t.NdJ("click",function(){return c.submit()}),t._uU(4),t.qZA(),t.BQk()),2&e&&(t.xp6(2),t.Q6J("ngModel",c.input),t.xp6(1),t.Q6J("disabled",!c.input.length),t.xp6(1),t.hij(" ","Submit"," "))},dependencies:[r.Pc,r.YG,r.pK,r.Ie,r.j9,u.u5,u.JJ,u.On,p.ez],encapsulation:2}),s})();function S(n,s){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-radio",4),t._uU(2),t.qZA()()),2&n){const i=s.$implicit;t.xp6(1),t.Q6J("value",i),t.xp6(1),t.hij(" ",i," ")}}function A(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item-group")(2,"ion-radio-group",1),t.NdJ("ngModelChange",function(c){t.CHM(i);const g=t.oxw();return t.KtG(g.selected=c)}),t.YNc(3,S,3,2,"ion-item",2),t.qZA()(),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.select())}),t._uU(5),t.qZA()()}if(2&n){const i=t.oxw();t.xp6(2),t.Q6J("ngModel",i.selected),t.xp6(1),t.Q6J("ngForOf",i.body.choices),t.xp6(1),t.Q6J("disabled",!i.selected),t.xp6(1),t.hij(" ","Submit"," ")}}let J=(()=>{var n;class s extends h{set point(e){this._point=e,this.answered=!1}get point(){return this._point}get body(){return this._point.body}constructor(e){super(e),this._point=null,this.selected="",this.answered=!1}ngOnInit(){}select(){this.onSubmit(this.selected)}isCorrect(e){const c=this.point.body.possibleAnswers.includes(e);return c&&(this.answered=!0),c}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-multiple-choice"]],inputs:{point:"point"},standalone:!0,features:[t.qOj,t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["expand","block",3,"disabled","click"],["label","Option","slot","end",3,"value"]],template:function(e,c){1&e&&t.YNc(0,A,6,4,"ion-list",0),2&e&&t.Q6J("ngIf",!c.answered)},dependencies:[r.Pc,r.YG,r.Ie,r.Ub,r.q_,r.B7,r.se,r.U5,r.QI,p.ez,p.sg,p.O5,u.u5,u.JJ,u.On],encapsulation:2}),s})();var P=a(8658),w=a(7285),M=a(8939);function O(n,s){1&n&&(t.ynx(0),t.TgZ(1,"ion-item"),t._uU(2," This point is not active yet... Keep exploring! "),t.qZA(),t.BQk())}function U(n,s){1&n&&(t.ynx(0),t.TgZ(1,"ion-item"),t._uU(2," You are not close to this location! "),t.qZA(),t.BQk())}function N(n,s){if(1&n&&(t.TgZ(0,"ion-item")(1,"ion-label"),t._UZ(2,"app-html-show",5),t.qZA()()),2&n){const i=t.oxw(3);t.xp6(2),t.Q6J("bodyText",i.bodyText)}}function Y(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-decision",7),t.BQk()),2&n){const i=t.oxw(4);t.xp6(1),t.Q6J("point",i.point)}}function D(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-short-answer",7),t.BQk()),2&n){const i=t.oxw(4);t.xp6(1),t.Q6J("point",i.point)}}function G(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-multiple-choice",7),t.BQk()),2&n){const i=t.oxw(4);t.xp6(1),t.Q6J("point",i.point)}}function E(n,s){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"ion-item",8),t.NdJ("click",function(){t.CHM(i);const c=t.oxw(4);return t.KtG(c.noteOk())}),t._uU(2),t.qZA(),t.BQk()}2&n&&(t.xp6(2),t.hij(" ","OK"," "))}function H(n,s){if(1&n&&(t.ynx(0,1),t.YNc(1,Y,2,1,"ng-container",2),t.YNc(2,D,2,1,"ng-container",2),t.YNc(3,G,2,1,"ng-container",2),t.YNc(4,E,3,1,"ng-container",6),t.BQk()),2&n){const i=t.oxw(3);t.Q6J("ngSwitch",i.point.body.type),t.xp6(1),t.Q6J("ngSwitchCase","choice"),t.xp6(1),t.Q6J("ngSwitchCase","shortanswer"),t.xp6(1),t.Q6J("ngSwitchCase","multiplechoice")}}function k(n,s){if(1&n&&(t.TgZ(0,"ion-card-content"),t._uU(1),t.qZA()),2&n){const i=t.oxw(5);t.xp6(1),t.hij(" ",i.messageIfCorrect," ")}}function B(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"ion-card",9)(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA()(),t.YNc(5,k,2,1,"ion-card-content",0),t.qZA(),t.TgZ(6,"ion-button",10),t.NdJ("click",function(){t.CHM(i);const c=t.oxw(4);return t.KtG(c.close())}),t._uU(7),t.qZA()()}if(2&n){const i=t.oxw(4);t.xp6(4),t.Oqu("Correct"),t.xp6(1),t.Q6J("ngIf",i.messageIfCorrect),t.xp6(2),t.hij(" ","Next"," ")}}function F(n,s){if(1&n&&(t.TgZ(0,"ion-card-content"),t._uU(1),t.qZA()),2&n){const i=t.oxw(5);t.xp6(1),t.hij(" ",i.messageIfIncorrect," ")}}function q(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"ion-button",10),t.NdJ("click",function(){t.CHM(i);const c=t.oxw(5);return t.KtG(c.giveUp())}),t._uU(1),t.qZA()}2&n&&(t.xp6(1),t.hij(" ","GiveUp"," "))}function j(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-card",11)(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA()(),t.YNc(5,F,2,1,"ion-card-content",0),t.qZA(),t.TgZ(6,"ion-footer"),t.YNc(7,q,2,1,"ion-button",12),t.qZA(),t.BQk()),2&n){const i=t.oxw(4);t.xp6(4),t.Oqu("Incorrect"),t.xp6(1),t.Q6J("ngIf",i.messageIfIncorrect),t.xp6(2),t.Q6J("ngIf",i.canGiveUp)}}function K(n,s){if(1&n&&(t.ynx(0),t.YNc(1,B,8,3,"div",0),t.YNc(2,j,8,3,"ng-container",0),t.BQk()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("ngIf",i.isCorrect),t.xp6(1),t.Q6J("ngIf",!i.isCorrect)}}function $(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-label",3)(3,"h1"),t._uU(4),t.qZA()()(),t.YNc(5,N,3,1,"ion-item",0),t.YNc(6,H,5,4,"ng-container",4),t.YNc(7,K,3,2,"ng-container",0),t.BQk()),2&n){const i=t.oxw(2);t.xp6(4),t.Oqu(i.point.title),t.xp6(1),t.Q6J("ngIf",null==i.bodyText?null:i.bodyText.length),t.xp6(1),t.Q6J("ngIf",!i.isCorrect),t.xp6(1),t.Q6J("ngIf",i.showFeedback)}}function L(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-story-history-item",13),t.BQk()),2&n){const i=t.oxw(2);t.xp6(1),t.Q6J("item",i.hist)}}function z(n,s){if(1&n&&(t.ynx(0)(1,1),t.YNc(2,O,3,0,"ng-container",2),t.YNc(3,U,3,0,"ng-container",2),t.YNc(4,$,8,4,"ng-container",2),t.BQk(),t.YNc(5,L,2,1,"ng-container",0),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngSwitch",i.status),t.xp6(1),t.Q6J("ngSwitchCase","not_selectable"),t.xp6(1),t.Q6J("ngSwitchCase","not_close"),t.xp6(1),t.Q6J("ngSwitchCase","close"),t.xp6(1),t.Q6J("ngIf",i.hist)}}let R=(()=>{var n;class s{getStatus(){const e=this.selectedPoint;return e.notSelectable?"not_selectable":e.explored?"explored":e.isClose?"close":"not_close"}set selectedPoint(e){if(this._selectedPoint=e,this.showFeedback=!1,this.isCorrect=!1,this.hist=void 0,!e)return;this.status=this.getStatus(),"explored"===this.status&&this.gameService.historyChanged$.pipe((0,T.P)()).subscribe(g=>{const x=g.history.find(W=>W.pointId===e.pointId);x&&(this.hist=P.H.toHistItem(e.point,x))}),this.messageIfCorrect=e.point.body.messageIfCorrect,this.messageIfIncorrect=e.point.body.messageIfIncorrect,this.canGiveUp=!e.point.body.cannotGiveUp;const c=Array.isArray(e.point.body.text)?e.point.body.text:[e.point.body.text];this.bodyText="choice"===e.point.body.type?void 0:c}get selectedPoint(){return this._selectedPoint}constructor(e,c){this.gameService=e,this.info=c,this.destroy$=new b.x,this._selectedPoint=null,this.showFeedback=!1,this.isCorrect=!1,this.canGiveUp=!0,this.status="not_close"}get point(){return this.selectedPoint.point}get isExplored(){return this._selectedPoint.explored}ngOnInit(){this.gameService.answerSelected$.pipe((0,o.h)(c=>!!c),(0,o.h)(c=>{var g;return c.id===(null===(g=this.point)||void 0===g?void 0:g.id)}),(0,Q.R)(this.destroy$)).pipe((0,o.h)(c=>["correct","incorrect",w.j3,w.oY].includes(c.result))).subscribe(c=>{if(c){if([w.j3,w.oY].includes(c.result))return void this.gameService.moveNext(this.point2MoveNext());this.showFeedback=!0,this.isCorrect="correct"===c.result,this.isCorrect&&this.gameService.moveNext(this.point2MoveNext())}})}close(){this.gameService.closeMenu(""),this.selectedPoint=null}noteOk(){this.gameService.answerSelected(this.point,w.j3),this.close()}point2MoveNext(){return{pointId:this.point.id,...this.point.body.action||{}}}giveUp(){var e=this;return(0,C.Z)(function*(){(yield e.info.confirmYesNo("Give up","Are you sure to give up?"))&&(e.gameService.answerSelected(e.point,w.oY),e.close())})()}ngOnDestroy(){console.log("destroy"),this.destroy$.next(),this.destroy$.unsubscribe()}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(m.h),t.Y36(M.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-point"]],inputs:{selectedPoint:"selectedPoint"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"ion-text-wrap"],[3,"ngSwitch",4,"ngIf"],[3,"bodyText"],[4,"ngSwitchDefault"],[3,"point"],["button","",3,"click"],["color","success"],["expand","block",3,"click"],["color","danger"],["expand","block",3,"click",4,"ngIf"],[3,"item"]],template:function(e,c){1&e&&t.YNc(0,z,6,5,"ng-container",0),2&e&&t.Q6J("ngIf",c.selectedPoint)},dependencies:[r.Pc,r.YG,r.PM,r.FN,r.Zi,r.Dq,r.fr,r.Ie,r.Q$,u.u5,p.ez,p.O5,p.RF,p.n9,p.ED,l,y,J,P.H,f.u],styles:[".correct[_ngcontent-%COMP%]{padding:5px;border:1px solid green;border-radius:5px;color:green}.incorrect[_ngcontent-%COMP%]{padding:5px;border:1px solid red;border-radius:5px;color:red}"],changeDetection:0}),s})()},9025:(Z,I,a)=>{a.d(I,{u:()=>u});var C=a(6814),b=a(95),T=a(7027),o=a(6689),Q=a(6593);function r(p,f){1&p&&o._UZ(0,"div",1),2&p&&o.Q6J("innerHTML",f.$implicit,o.oJD)}let u=(()=>{var p;class f{set bodyText(m){if(m){const v=Array.isArray(m)?m:[m];this.html=v.map(_=>this.sanitizer.bypassSecurityTrustHtml(_.replace(/\n/g,"<br>")))}}constructor(m){this.sanitizer=m,this.html=[]}ngOnInit(){}}return(p=f).\u0275fac=function(m){return new(m||p)(o.Y36(Q.H7))},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-html-show"]],inputs:{bodyText:"bodyText"},standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[["class","ion-text-wrap",3,"innerHTML",4,"ngFor","ngForOf"],[1,"ion-text-wrap",3,"innerHTML"]],template:function(m,v){1&m&&o.YNc(0,r,1,1,"div",0),2&m&&o.Q6J("ngForOf",v.html)},dependencies:[T.Pc,b.u5,C.ez,C.sg],changeDetection:0}),f})()},8658:(Z,I,a)=>{a.d(I,{H:()=>v});var C=a(6814),b=a(95),T=a(7027),o=a(6689);function Q(_,d){if(1&_&&(o.TgZ(0,"ion-item",3)(1,"ion-label"),o._uU(2),o.qZA()()),2&_){const l=o.oxw(2);o.xp6(2),o.Oqu(l.item.title)}}function r(_,d){1&_&&o._UZ(0,"div",5),2&_&&o.Q6J("innerHTML",d.$implicit,o.oJD)}function u(_,d){if(1&_&&(o.ynx(0),o.TgZ(1,"h5"),o._uU(2,"Selection"),o.qZA(),o.TgZ(3,"div"),o._uU(4),o.qZA(),o.BQk()),2&_){const l=o.oxw(3);o.xp6(4),o.hij(" ",l.item.selection," ")}}function p(_,d){1&_&&(o.TgZ(0,"div"),o._UZ(1,"hr"),o.TgZ(2,"h5"),o._uU(3," GAVE UP :( "),o.qZA()())}function f(_,d){if(1&_&&(o.ynx(0),o.YNc(1,r,1,1,"div",4),o.YNc(2,u,5,1,"ng-container",0),o.YNc(3,p,4,0,"div",0),o.BQk()),2&_){const l=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",l.item.question),o.xp6(1),o.Q6J("ngIf",l.item.selection),o.xp6(1),o.Q6J("ngIf",l.item.gaveUp)}}function t(_,d){if(1&_&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&_){const l=o.oxw(2);o.xp6(1),o.hij(" ",l.item.result," ")}}function m(_,d){if(1&_&&(o.ynx(0),o.YNc(1,Q,3,1,"ion-item",1),o.TgZ(2,"div",2),o.YNc(3,f,4,3,"ng-container",0),o.YNc(4,t,2,1,"div",0),o.qZA(),o.BQk()),2&_){const l=o.oxw();o.xp6(1),o.Q6J("ngIf",l.showHeader),o.xp6(2),o.Q6J("ngIf",!l.item.result),o.xp6(1),o.Q6J("ngIf",l.item.result)}}let v=(()=>{var _;class d{constructor(){this.index=0,this.showHeader=!1}ngOnInit(){}static toHistItem(h,y){var S;return{title:y.title,question:h&&(Array.isArray(h.body.text)?h.body.text:[h.body.text]),selection:null===(S=y.selection)||void 0===S?void 0:S.join(", "),gaveUp:y.gaveUp,result:y.result}}}return(_=d).\u0275fac=function(h){return new(h||_)},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-story-history-item"]],inputs:{item:"item",index:"index",showHeader:"showHeader"},standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["slot","header","color","light",4,"ngIf"],["slot","content",1,"ion-padding"],["slot","header","color","light"],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(h,y){1&h&&o.YNc(0,m,5,3,"ng-container",0),2&h&&o.Q6J("ngIf",y.item)},dependencies:[T.Pc,T.Ie,T.Q$,C.ez,C.sg,C.O5,b.u5]}),d})()}}]);