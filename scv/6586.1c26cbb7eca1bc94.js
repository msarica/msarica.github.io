"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6586],{6586:(y,u,s)=>{s.r(u),s.d(u,{StoryBuilderPageModule:()=>U});var c=s(9808),n=s(4182),i=s(7590),m=s(1393),p=s(655);class d{constructor(l){this.info=l}getGameDetails(){return{}}validate(){}generate(){return(0,p.mG)(this,void 0,void 0,function*(){return null})}}var t=s(2096),g=s(4725);let f=(()=>{class e{constructor(o){this.fb=o,this.gameDetails=this.fb.group({name:this.fb.control(null,[]),description:this.fb.control(null,[]),location:this.fb.control(null,[])})}ngOnInit(){this.game.generateDetailFn=this.getGameDetails.bind(this)}getGameDetails(){return Object.assign({},this.gameDetails.value)}writeValue(o){this.gameDetails.patchValue(o)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){o?this.gameDetails.enable():this.gameDetails.disable()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-game-details"]],inputs:{game:"game"},features:[t._Bn([{provide:n.JU,useExisting:(0,t.Gpc)(()=>e),multi:!0}])],decls:16,vars:1,consts:[[3,"formGroup"],["type","text","formControlName","name"],["formControlName","description"],["type","text","formControlName","location"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-item-divider")(1,"ion-label"),t._uU(2," Game "),t.qZA()(),t.TgZ(3,"ion-item-group",0)(4,"ion-item")(5,"ion-label"),t._uU(6," Name "),t.qZA(),t._UZ(7,"ion-input",1),t.qZA(),t.TgZ(8,"ion-item")(9,"ion-label"),t._uU(10," Description "),t.qZA(),t._UZ(11,"ion-textarea",2),t.qZA(),t.TgZ(12,"ion-item")(13,"ion-label"),t._uU(14," Location "),t.qZA(),t._UZ(15,"ion-input",3),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.gameDetails))},dependencies:[n.JJ,n.JL,i.pK,i.Ie,i.rH,i.Ub,i.Q$,i.g2,i.j9,n.sg,n.u]}),e})(),Z=(()=>{class e{constructor(o){this.fb=o,this.controls={title:this.fb.control(null,[]),text:this.fb.control(null,[]),afterExplored:this.fb.control(null,[]),choices:this.fb.control(null,[]),disables:this.fb.control(null,[]),enables:this.fb.control(null,[]),possibleAnswers:this.fb.control(null,[]),messageIfCorrect:this.fb.control(null,[]),messageIfIncorrect:this.fb.control(null,[]),type:null},this.form=this.fb.group(this.controls)}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-multiplechoice-details"]],decls:40,vars:1,consts:[[3,"formGroup"],["type","text","formControlName","title"],["formControlName","text"],["formControlName","afterExplored"],["type","text","formControlName","choices"],["type","text","formControlName","possibleAnswers"],["type","text","formControlName","messageIfCorrect"],["type","text","formControlName","messageIfIncorrect"],["type","text","formControlName","disables"],["type","text","formControlName","enables"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-item-divider")(1,"ion-label"),t._uU(2," Multiple Choice "),t.qZA()(),t.TgZ(3,"ion-item-group",0)(4,"ion-item")(5,"ion-label"),t._uU(6," Title "),t.qZA(),t._UZ(7,"ion-input",1),t.qZA(),t.TgZ(8,"ion-item")(9,"ion-label"),t._uU(10," Text "),t.qZA(),t._UZ(11,"ion-textarea",2),t.qZA(),t.TgZ(12,"ion-item")(13,"ion-label"),t._uU(14," AfterExplored "),t.qZA(),t._UZ(15,"ion-textarea",3),t.qZA(),t.TgZ(16,"ion-item")(17,"ion-label"),t._uU(18," Choices "),t.qZA(),t._UZ(19,"ion-input",4),t.qZA(),t.TgZ(20,"ion-item")(21,"ion-label"),t._uU(22," Possible Answers "),t.qZA(),t._UZ(23,"ion-input",5),t.qZA(),t.TgZ(24,"ion-item")(25,"ion-label"),t._uU(26," When Answer Correct "),t.qZA(),t._UZ(27,"ion-input",6),t.qZA(),t.TgZ(28,"ion-item")(29,"ion-label"),t._uU(30," When Answer Not Correct "),t.qZA(),t._UZ(31,"ion-input",7),t.qZA(),t.TgZ(32,"ion-item")(33,"ion-label"),t._uU(34," Disables "),t.qZA(),t._UZ(35,"ion-input",8),t.qZA(),t.TgZ(36,"ion-item")(37,"ion-label"),t._uU(38," Enables "),t.qZA(),t._UZ(39,"ion-input",9),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.form))},dependencies:[n.JJ,n.JL,i.pK,i.Ie,i.rH,i.Ub,i.Q$,i.g2,i.j9,n.sg,n.u]}),e})(),b=(()=>{class e{constructor(o){this.fb=o,this.controls={name:this.fb.control(null,[]),title:this.fb.control(null,[]),location:this.fb.control(null,[]),visible:this.fb.control(null,[]),body:void 0,img:void 0},this.pointDetails=this.fb.group(this.controls)}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-point-details"]],features:[t._Bn([{provide:n.JU,multi:!0,useExisting:e}])],decls:20,vars:1,consts:[[3,"formGroup"],["type","text","formControlName","name"],["type","text","formControlName","title"],["type","text","formControlName","location"],["formControlName","visible"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-item-divider")(1,"ion-label"),t._uU(2," Point "),t.qZA()(),t.TgZ(3,"ion-item-group",0)(4,"ion-item")(5,"ion-label"),t._uU(6," Name "),t.qZA(),t._UZ(7,"ion-input",1),t.qZA(),t.TgZ(8,"ion-item")(9,"ion-label"),t._uU(10," Title "),t.qZA(),t._UZ(11,"ion-input",2),t.qZA(),t.TgZ(12,"ion-item")(13,"ion-label"),t._uU(14," Location "),t.qZA(),t._UZ(15,"ion-input",3),t.qZA(),t.TgZ(16,"ion-item")(17,"ion-label"),t._uU(18," Visible "),t.qZA(),t._UZ(19,"ion-checkbox",4),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.pointDetails))},dependencies:[n.JJ,n.JL,i.nz,i.pK,i.Ie,i.rH,i.Ub,i.Q$,i.w,i.j9,n.sg,n.u]}),e})();const h=[{path:"",component:(()=>{class e{constructor(o,r,a){this.fb=o,this.viewContainerRef=r,this.info=a,this.game=new d(this.info)}ngOnInit(){}onSubmit(){}addPoint(o){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(t.s_b),t.Y36(g.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-story-builder"]],decls:21,vars:1,consts:[["json",""],[3,"game"],[3,"click"],["button","","type","submit",1,"btn","btn-danger",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"story-builder"),t.qZA()()(),t.TgZ(4,"ion-content"),t._UZ(5,"div",null,0)(7,"app-game-details",1),t.TgZ(8,"ion-item-divider")(9,"ion-label"),t._uU(10," Points "),t.qZA(),t.TgZ(11,"ion-button",2),t.NdJ("click",function(){return r.addPoint("note")}),t._uU(12," Note "),t.qZA(),t.TgZ(13,"ion-button",2),t.NdJ("click",function(){return r.addPoint("shortanswer")}),t._uU(14," Short Answer "),t.qZA(),t.TgZ(15,"ion-button",2),t.NdJ("click",function(){return r.addPoint("multiplechoice")}),t._uU(16," Multiple Choice "),t.qZA()(),t._UZ(17,"app-point-details")(18,"app-multiplechoice-details"),t.TgZ(19,"ion-item",3),t.NdJ("click",function(){return r.onSubmit()}),t._uU(20,"Submit"),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("game",r.game))},dependencies:[i.YG,i.W2,i.Gu,i.Ie,i.rH,i.Q$,i.wd,i.sr,f,Z,b],styles:[".pointsDiv[_ngcontent-%COMP%]{padding-left:10px}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(h),m.Bz]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,n.u5,i.Pc,A,n.UX]}),e})()}}]);