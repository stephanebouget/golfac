(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{t68Q:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("21Lb"),a=t("OzfB"),r=t("NvT6"),b=t("Blfk"),c=t("dWZg"),f=t("Ip0R"),s=t("wFw1"),p=t("oBZk"),m=t("ZZ/e"),d=function(){function n(n,l){this.platform=n,this.sanitizer=l,this.loadingDatas=!1,this.iframeUrl="https://web.ffgolf.org/ffgolf/tee/tee.php?gk=9fa9379b2460c7c99b3ce48face442d6&"}return n.prototype.ngAfterViewInit=function(){this.backButtonSubscription=this.platform.backButton.subscribe(function(){navigator.app.exitApp()})},n.prototype.ngOnDestroy=function(){this.backButtonSubscription.unsubscribe()},n.prototype.ionViewDidEnter=function(){var n=this;this.loadingDatas=!0,this.iframeUrl=this.iframeUrl+Date.now(),console.log("TCL: Tab4Page -> ionViewDidEnter -> this.iframeUrl",this.iframeUrl),setTimeout(function(){n.loadingDatas=!1},1e3)},n.prototype.ngOnInit=function(){},n}(),g=t("ZYjt"),h=e.pb({encapsulation:0,styles:[["iframe[_ngcontent-%COMP%]{border:none}"]],data:{}});function z(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["fxFlexFill",""],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.qb(1,737280,null,0,o.e,[a.h,e.k,a.l],{layout:[0,"layout"]},null),e.qb(2,737280,null,0,o.d,[a.h,e.k,[6,o.e],a.l],{align:[0,"align"]},null),e.qb(3,737280,null,0,o.b,[a.h,e.k,a.l],null,null),(n()(),e.rb(4,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["color","primary"],["diameter","40"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,r.b,r.a)),e.qb(5,49152,null,0,b.d,[e.k,c.a,[2,f.c],[2,s.a],b.a],{color:[0,"color"],diameter:[1,"diameter"],mode:[2,"mode"]},null)],function(n,l){n(l,1,0,"column"),n(l,2,0,"center center"),n(l,3,0),n(l,5,0,"primary","40","indeterminate")},function(n,l){n(l,4,0,e.Bb(l,5)._noopAnimations,e.Bb(l,5).diameter,e.Bb(l,5).diameter)})}function k(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,6,"ion-content",[["fxFlexFill",""],["overflow-scroll","true"]],null,null,null,p.l,p.b)),e.qb(1,737280,null,0,o.b,[a.h,e.k,a.l],null,null),e.qb(2,49152,null,0,m.r,[e.h,e.k],null,null),(n()(),e.ib(16777216,null,0,1,null,z)),e.qb(4,16384,null,0,f.j,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(5,0,null,0,1,"iframe",[["fxFlexFill",""]],[[8,"hidden",0],[8,"src",5]],null,null,null,null)),e.qb(6,737280,null,0,o.b,[a.h,e.k,a.l],null,null)],function(n,l){var t=l.component;n(l,1,0),n(l,4,0,t.loadingDatas),n(l,6,0)},function(n,l){var t=l.component;n(l,5,0,t.loadingDatas,t.sanitizer.bypassSecurityTrustResourceUrl(t.iframeUrl))})}function y(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"app-home",[],null,null,null,k,h)),e.qb(1,4440064,null,0,d,[m.Eb,g.b],null,null)],function(n,l){n(l,1,0)},null)}var w=e.nb("app-home",d,y,{},{},[]),q=t("gIcY"),x=t("Fzqc"),v=t("hUWP"),B=t("3pJQ"),F=t("V9q+"),D=t("d2mR"),U=t("Wf4p"),j=t("ZYCi");t.d(l,"Tab4PageModuleNgFactory",function(){return A});var A=e.ob(u,[],function(n){return e.yb([e.zb(512,e.j,e.db,[[8,[i.a,w]],[3,e.j],e.x]),e.zb(4608,a.j,a.i,[a.d,a.g]),e.zb(5120,e.b,function(n,l){return[a.m(n,l)]},[f.c,e.B]),e.zb(4608,f.l,f.k,[e.u,[2,f.v]]),e.zb(4608,q.c,q.c,[]),e.zb(4608,m.a,m.a,[e.z,e.g]),e.zb(4608,m.Cb,m.Cb,[m.a,e.j,e.q,f.c]),e.zb(4608,m.Fb,m.Fb,[m.a,e.j,e.q,f.c]),e.zb(1073742336,a.e,a.e,[]),e.zb(1073742336,x.a,x.a,[]),e.zb(1073742336,o.c,o.c,[]),e.zb(1073742336,v.a,v.a,[]),e.zb(1073742336,B.a,B.a,[]),e.zb(1073742336,F.a,F.a,[[2,a.k],e.B]),e.zb(1073742336,f.b,f.b,[]),e.zb(1073742336,D.a,D.a,[]),e.zb(1073742336,q.b,q.b,[]),e.zb(1073742336,q.a,q.a,[]),e.zb(1073742336,U.b,U.b,[[2,U.a],[2,g.f]]),e.zb(1073742336,b.c,b.c,[]),e.zb(1073742336,m.Ab,m.Ab,[]),e.zb(1073742336,j.n,j.n,[[2,j.t],[2,j.m]]),e.zb(1073742336,u,u,[]),e.zb(1024,j.k,function(){return[[{path:"",component:d}]]},[])])})}}]);