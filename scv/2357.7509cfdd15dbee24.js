"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2357],{2357:(L,_,l)=>{l.r(_),l.d(_,{StoryBuilderPageModule:()=>R});var g=l(9808),c=l(4182),a=l(7590),f=l(5010),t=l(2096),U=l(5485),N=l(2811),x=l(4848),A=l(759),P=l(5672),h=l(4974);const q=["mapElementRef"];let Z=(()=>{class n{constructor(){this.startPoint=[0,0],this.coordinateClick=new t.vpe}ngOnInit(){this.setUpMap()}setUpMap(){const[e,o]=this.startPoint,s=(0,h.xA)([o,e]);this.map=new U.Z({view:new N.ZP({center:s,zoom:18}),layers:[new x.Z({source:new P.Z})],target:"ol-map"});const u=new A.Z({});this.map.addLayer(u),this.map.on("click",d=>{const p=this.map.getCoordinateFromPixel(d.pixel),S=(0,h.FY)(p);this.coordinateClick.emit({coordinate:[S[1],S[0]],event:d})}),setTimeout(()=>{this.map.setTarget(this.mapElementRef.nativeElement)})}goToPoint(e,o=18){const r=(0,h.xA)([e[1],e[0]]),s=this.map.getView();s.setCenter(r),s.setZoom(o)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-coordinate-selection"]],viewQuery:function(e,o){if(1&e&&t.Gf(q,7),2&e){let r;t.iGM(r=t.CRH())&&(o.mapElementRef=r.first)}},inputs:{startPoint:"startPoint"},outputs:{coordinateClick:"coordinateClick"},decls:3,vars:0,consts:[["id","ol-map",1,"map-container"],["mapElementRef",""]],template:function(e,o){1&e&&(t.ynx(0),t._UZ(1,"div",0,1),t.BQk())},styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column;height:100vh}.map-container[_ngcontent-%COMP%]{flex-grow:1}"]}),n})(),y=(()=>{class n{constructor(){this.coordinateSelected=new t.vpe,this.startPoint=[0,0]}ngOnInit(){}onCoordinateClick(e){console.log(e.coordinate),this.coordinate=e.coordinate}go(){try{const e=this.coord.replace(/\[|\]/g,"").split(",").map(o=>parseFloat(o.trim()));this.coordinate=e,this.coordinateSelect.goToPoint(e)}catch(e){console.log(e.message)}}copy(){navigator.clipboard.writeText(JSON.stringify(this.coordinate))}select(){this.coordinateSelected.emit(this.coordinate)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-coordinate-select-wrapper"]],viewQuery:function(e,o){if(1&e&&t.Gf(Z,7),2&e){let r;t.iGM(r=t.CRH())&&(o.coordinateSelect=r.first)}},inputs:{startPoint:"startPoint"},outputs:{coordinateSelected:"coordinateSelected"},decls:10,vars:4,consts:[["placeholder","Enter coordinates",3,"ngModel","ngModelChange","keyup.enter"],[3,"click"],[3,"startPoint","coordinateClick"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-item")(1,"ion-input",0),t.NdJ("ngModelChange",function(s){return o.coord=s})("keyup.enter",function(){return o.go()}),t.qZA()(),t.TgZ(2,"ion-item")(3,"ion-button",1),t.NdJ("click",function(){return o.go()}),t._uU(4," Go "),t.qZA(),t.TgZ(5,"ion-button",1),t.NdJ("click",function(){return o.copy()}),t._uU(6),t.qZA(),t.TgZ(7,"ion-button",1),t.NdJ("click",function(){return o.select()}),t._uU(8),t.qZA()(),t.TgZ(9,"app-coordinate-selection",2),t.NdJ("coordinateClick",function(s){return o.onCoordinateClick(s)}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngModel",o.coord),t.xp6(5),t.hij(" Copy [",o.coordinate,"] "),t.xp6(2),t.hij(" Select [",o.coordinate,"] "),t.xp6(1),t.Q6J("startPoint",o.startPoint))},dependencies:[c.JJ,c.On,a.YG,a.pK,a.Ie,a.j9,Z]}),n})();var b=l(655),v=l(5529),C=l(7224),w=l(7625);function m(n){return n?n.split(",").map(i=>i.trim()).filter(i=>!!i).map(i=>{const e="^"+i.replace("*",".+")+"$";return new RegExp(e,"g")}):null}var k=l(9258);function F(n,i){1&n&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-label"),t._uU(3," Choices "),t.qZA(),t._UZ(4,"ion-textarea",23),t.TgZ(5,"span",6),t._uU(6,"Not valid"),t.qZA()(),t.BQk())}function M(n,i){1&n&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-label"),t._uU(3," Possible Answers "),t.qZA(),t._UZ(4,"ion-textarea",24),t.TgZ(5,"span",6),t._uU(6,"Not valid"),t.qZA()(),t.TgZ(7,"ion-item")(8,"ion-label"),t._uU(9," Message If Correct "),t.qZA(),t._UZ(10,"ion-textarea",25),t.TgZ(11,"span",6),t._uU(12,"Not valid"),t.qZA()(),t.TgZ(13,"ion-item")(14,"ion-label"),t._uU(15," Message If Not Correct "),t.qZA(),t._UZ(16,"ion-textarea",26),t.TgZ(17,"span",6),t._uU(18,"Not valid"),t.qZA()(),t.BQk())}const I=function(){return["multiplechoice","shortanswer"]};function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"ion-accordion",14)(1,"ion-item",3)(2,"ion-label"),t._uU(3),t.qZA()(),t.TgZ(4,"div",4)(5,"ion-item-group",15),t._uU(6),t.TgZ(7,"ion-item")(8,"ion-label"),t._uU(9," Name "),t.qZA(),t._UZ(10,"ion-input",5),t.TgZ(11,"span",6),t._uU(12,"Not valid"),t.qZA()(),t.TgZ(13,"ion-item")(14,"ion-label"),t._uU(15," Title "),t.qZA(),t._UZ(16,"ion-textarea",16),t.TgZ(17,"span",6),t._uU(18,"Not valid"),t.qZA()(),t.TgZ(19,"ion-item")(20,"ion-label"),t._uU(21," Location "),t.qZA(),t._UZ(22,"ion-input",8),t.TgZ(23,"ion-button",0),t.NdJ("click",function(){const s=t.CHM(e).index,u=t.oxw();return t.KtG(u.selectPointLocation(s))}),t._uU(24,"select"),t.qZA(),t.TgZ(25,"span",6),t._uU(26,"Not valid"),t.qZA()(),t.TgZ(27,"ion-item"),t._UZ(28,"ion-checkbox",17),t.TgZ(29,"ion-label"),t._uU(30," Visible "),t.qZA()(),t.ynx(31,18),t.TgZ(32,"ion-item")(33,"ion-label"),t._uU(34," Text "),t.qZA(),t._UZ(35,"ion-textarea",19),t.TgZ(36,"span",6),t._uU(37,"Not valid"),t.qZA()(),t.YNc(38,F,7,0,"ng-container",13),t.YNc(39,M,19,0,"ng-container",13),t.TgZ(40,"ion-item")(41,"ion-label"),t._uU(42," After Explored "),t.qZA(),t._UZ(43,"ion-textarea",20),t.TgZ(44,"span",6),t._uU(45,"Not valid"),t.qZA()(),t.TgZ(46,"ion-item")(47,"ion-label"),t._uU(48," Enables "),t.qZA(),t._UZ(49,"ion-textarea",21),t.TgZ(50,"span",6),t._uU(51,"Not valid"),t.qZA()(),t.TgZ(52,"ion-item")(53,"ion-label"),t._uU(54," Disables "),t.qZA(),t._UZ(55,"ion-textarea",22),t.TgZ(56,"span",6),t._uU(57,"Not valid"),t.qZA()(),t.BQk(),t.qZA()()()}if(2&n){const e=i.$implicit,o=i.index;t.Q6J("value",o),t.xp6(3),t.hij(" ",e.value.name,""),t.xp6(2),t.Q6J("formGroupName",o),t.xp6(1),t.hij(" ",e.value.type," "),t.xp6(32),t.Q6J("ngIf","multiplechoice"===e.value.type),t.xp6(1),t.Q6J("ngIf",t.DdM(6,I).includes(e.value.type))}}function O(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",27)(1,"app-coordinate-select-wrapper",28),t.NdJ("coordinateSelected",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.coordinateSelected(r))}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("startPoint",e.lastUsed)}}function Q(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," Point name(s) doesn't exists "),t.qZA())}function j(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,Q,2,0,"div",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.gameForm.errors.nameNotExist)}}function G(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"ion-button",0),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.copy())}),t._uU(2," Copy "),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"code"),t._uU(5),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.jsonStory," ")}}const W=[{path:"",component:(()=>{class n{constructor(e,o,r){this.fb=e,this.gameBuilderService=o,this.router=r,this.destroy$=new v.xQ,this.coordinateSelected$=new v.xQ,this.pointForms=this.fb.array([]),this.lastUsed=[0,0],this.showMap=!1,this.gameForm=this.fb.group({name:this.fb.control(null,[c.kI.required]),description:this.fb.control(null,[c.kI.required]),location:this.fb.control(null,[c.kI.required,n=>{const i=n.value;return!i||i.match(/\[\s*-?\d+\.\d+,\s*-?\d+\.\d+\s*\]/g)?null:{notValid:!0}}]),points:this.pointForms},{validators:[n=>{const i=n.get("points");if(!i)return null;const e=i.value,o=e.map(s=>s.name.trim()).filter(s=>!!s);let r=-1;for(const s of e){r++;let u=m(s.body.enables);if(console.log(u,o),u&&u.some(d=>o.some(p=>!p.match(d))))return i.at(r).get("body").get("enables").setErrors({nameNotExist:!0}),{nameNotExist:!0};if(u=m(s.body.disables),u&&u.some(d=>o.some(p=>!!p.match(d))))return i.at(r).get("body").get("disables").setErrors({nameNotExist:!0}),{nameNotExist:!0}}return null},n=>{const i=n.get("points");if(!i)return null;const e=i.value;let o=-1;for(const r of e)if(o++,"multiplechoice"===r.body.type){const s=r.body,u=m(s.choices),d=m(s.possibleAnswers);u&&d?!1===d.every(p=>u.includes(p))&&(i.at(o).get("body").get("choices").setErrors({noChoiceFound:!0}),i.at(o).get("body").get("possibleAnswers").setErrors({noChoiceFound:!0})):(i.at(o).get("body").get("choices").setErrors({noChoiceFound:!0}),i.at(o).get("body").get("possibleAnswers").setErrors({noChoiceFound:!0}))}return null}],updateOn:"blur"})}ngOnInit(){console.log(this.pointForms),this.coordinateSelected$.pipe((0,w.R)(this.destroy$)).subscribe(e=>{this.lastUsed=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}selectLocation(e){return(0,b.mG)(this,void 0,void 0,function*(){this.showMap=!0;const o=yield this.coordinateSelected$.pipe((0,C.P)()).toPromise();this.gameForm.controls.location.patchValue(JSON.stringify(o)),this.showMap=!1})}selectPointLocation(e){return(0,b.mG)(this,void 0,void 0,function*(){this.showMap=!0;const o=yield this.coordinateSelected$.pipe((0,C.P)()).toPromise();this.showMap=!1,this.pointForms.at(e).patchValue({location:JSON.stringify(o)})})}getPoint(e){const o={type:e,text:this.fb.control(null,[c.kI.required]),afterExplored:this.fb.control(null,[c.kI.required]),enables:this.fb.control(null,[]),disables:this.fb.control(null,[])},r={possibleAnswers:this.fb.control(null,[c.kI.required]),messageIfCorrect:this.fb.control(null,[]),messageIfIncorrect:this.fb.control(null,[])};switch(e){case"note":case"shortanswer":return this.fb.group(Object.assign(Object.assign({},o),r));case"multiplechoice":return this.fb.group(Object.assign(Object.assign(Object.assign({},o),r),{choices:this.fb.control(null,[c.kI.required])}))}}addPoint(e){const o=this.fb.group({name:this.fb.control(`point${this.pointForms.length+1}`,[]),title:this.fb.control(null,[]),location:this.fb.control(null,[c.kI.required,n=>{const i=n.value;return!i||i.match(/\[\s*-?\d+\.\d+,\s*-?\d+\.\d+\s*\]/g)?null:{notValid:!0}}]),visible:this.fb.control(!0,[]),type:e,body:this.getPoint(e)});this.pointForms.push(o)}coordinateSelected(e){this.coordinateSelected$.next(e)}copy(){navigator.clipboard.writeText(JSON.stringify(this.jsonStory))}onSubmit(){console.log(this.gameForm.valid),!1===this.gameForm.valid?(console.log(this.gameForm.errors),this.jsonStory=null):(this.jsonStory=JSON.stringify(this.gameForm.value),this.gameBuilderService.storyJson=this.jsonStory,this.router.navigate(["story"])),console.log(this.gameForm.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(k.y),t.Y36(f.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-story-builder"]],decls:50,vars:6,consts:[[3,"click"],[3,"formGroup","hidden"],["value","first"],["slot","header","color","light"],["slot","content",1,"ion-padding"],["type","text","formControlName","name"],["slot","error"],["formControlName","description"],["type","text","formControlName","location"],["formArrayName","points"],[3,"value",4,"ngFor","ngForOf"],["style","width: 70%",4,"ngIf"],["style","color: red;",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"formGroupName"],["formControlName","title"],["slot","start","formControlName","visible"],["formGroupName","body"],["formControlName","text"],["formControlName","afterExplored"],["formControlName","enables"],["formControlName","disables"],["formControlName","choices"],["formControlName","possibleAnswers"],["formControlName","messageIfCorrect"],["formControlName","messageIfIncorrect"],[2,"width","70%"],[3,"startPoint","coordinateSelected"],[2,"color","red"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"story-builder"),t.qZA()()(),t.TgZ(4,"ion-content")(5,"ion-item-divider")(6,"ion-label"),t._uU(7," Points "),t.qZA(),t.TgZ(8,"ion-button",0),t.NdJ("click",function(){return o.addPoint("note")}),t._uU(9," Note "),t.qZA(),t.TgZ(10,"ion-button",0),t.NdJ("click",function(){return o.addPoint("shortanswer")}),t._uU(11," Short Answer "),t.qZA(),t.TgZ(12,"ion-button",0),t.NdJ("click",function(){return o.addPoint("multiplechoice")}),t._uU(13," Multiple Choice "),t.qZA()(),t.TgZ(14,"ion-accordion-group",1)(15,"ion-accordion",2)(16,"ion-item",3)(17,"ion-label"),t._uU(18,"Game Details"),t.qZA()(),t.TgZ(19,"div",4)(20,"ion-item-group")(21,"ion-item")(22,"ion-label"),t._uU(23," Name "),t.qZA(),t._UZ(24,"ion-input",5),t.TgZ(25,"span",6),t._uU(26,"Not valid"),t.qZA()(),t.TgZ(27,"ion-item")(28,"ion-label"),t._uU(29," Description "),t.qZA(),t._UZ(30,"ion-textarea",7),t.TgZ(31,"span",6),t._uU(32,"Not valid"),t.qZA()(),t.TgZ(33,"ion-item")(34,"ion-label"),t._uU(35," Location "),t.qZA(),t._UZ(36,"ion-input",8),t.TgZ(37,"ion-button",0),t.NdJ("click",function(){return o.selectLocation("location")}),t._uU(38,"select"),t.qZA(),t.TgZ(39,"span",6),t._uU(40,"Not valid"),t.qZA()()()()(),t.ynx(41,9),t.YNc(42,E,58,7,"ion-accordion",10),t.BQk(),t.qZA(),t.YNc(43,O,2,1,"div",11),t.YNc(44,j,2,1,"div",12),t.TgZ(45,"ion-button",0),t.NdJ("click",function(){return o.onSubmit()}),t._uU(46," Submit "),t.qZA(),t.YNc(47,G,6,1,"div",13),t._UZ(48,"br")(49,"br"),t.qZA()),2&e&&(t.xp6(14),t.Q6J("formGroup",o.gameForm)("hidden",o.showMap),t.xp6(28),t.Q6J("ngForOf",o.pointForms.controls),t.xp6(1),t.Q6J("ngIf",o.showMap),t.xp6(1),t.Q6J("ngIf",o.gameForm.errors),t.xp6(3),t.Q6J("ngIf",o.jsonStory))},dependencies:[g.sg,g.O5,c.JJ,c.JL,a.We,a.eh,a.YG,a.nz,a.W2,a.Gu,a.pK,a.Ie,a.rH,a.Ub,a.Q$,a.g2,a.wd,a.sr,a.w,a.j9,c.sg,c.u,c.x0,c.CE,y],styles:[".pointsDiv[_ngcontent-%COMP%]{padding-left:10px}"]}),n})()},{path:"map",component:y}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.Bz.forChild(W),f.Bz]}),n})();var $=l(520);let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,c.u5,a.Pc,Y,c.UX,$.JF]}),n})()}}]);