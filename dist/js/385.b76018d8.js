"use strict";(self["webpackChunkpolyrecte"]=self["webpackChunkpolyrecte"]||[]).push([[385],{5385:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var o=n(3396),l=n(9242);const i=(0,o.Uk)("Home"),a=(0,o.Uk)("About"),r={class:"container"},u=(0,o._)("h1",null,"Portail Administrateur",-1),d=(0,o._)("label",null,[(0,o._)("b",null,"Nom d'utilisateur")],-1),s=(0,o._)("label",null,[(0,o._)("b",null,"Mot de passe")],-1),m=(0,o._)("button",{type:"submit",id:"submit"},"Login",-1);function p(t,e,n,p,c,g){const b=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("nav",null,[(0,o.Wm)(b,{to:"/"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(b,{to:"/about"},{default:(0,o.w5)((()=>[a])),_:1})]),(0,o._)("div",r,[u,(0,o._)("form",{onSubmit:e[2]||(e[2]=(0,l.iM)((t=>g.redirect()),["prevent"])),class:"form"},[d,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.loginEmail=e),type:"text",placeholder:"Entrer le nom d'utilisateur",name:"email",required:""},null,512),[[l.nr,t.loginEmail]]),s,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.loginMdp=e),type:"password",placeholder:"Entrer le mot de passe",name:"mdp",required:""},null,512),[[l.nr,t.loginMdp]]),m],32)])])}const c=top.glob.serv,g=c+"admin";var b={name:"homeAdmin",data:()=>({loginEmail:"",loginMdp:""}),methods:{async redirect(){try{let t=await fetch(g+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.loginEmail,mdp:this.loginMdp})});t.ok?(t=await t.json(),this.$router.push("./loginAdmin"),top.glob.toast("Vous êtes connecté","info"),localStorage.setItem("idAdmin",t._id),localStorage.setItem("tokenAdmin",t.token)):top.glob.toast("Mot de passe ou identifiant incorrect","default")}catch{top.glob.toast("Erreur du serveur","danger")}}}},h=n(89);const f=(0,h.Z)(b,[["render",p]]);var _=f}}]);
//# sourceMappingURL=385.b76018d8.js.map