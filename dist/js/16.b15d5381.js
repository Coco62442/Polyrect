"use strict";(self["webpackChunkpolyrecte"]=self["webpackChunkpolyrecte"]||[]).push([[16],{2016:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var o=s(3396),l=s(7139),a=s(9242);const i=e=>((0,o.dD)("data-v-0f3da527"),e=e(),(0,o.Cn)(),e),n={class:"notesMat"},r={key:0},u=(0,o.Uk)("Moyenne générale: "),c={key:0},h=i((()=>(0,o._)("h4",null,"Tes absences:",-1))),m={class:"container"},p=i((()=>(0,o._)("h4",null,"Formulaire pour mettre à jour tes informations: ",-1))),d=i((()=>(0,o._)("button",{type:"submit"},"Mettre à jour",-1)));function g(e,t,s,i,g,y){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>y.eleveLogout()),class:"deconnexion"},"Déconnexion"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.matieres,((t,s)=>((0,o.wg)(),(0,o.iD)("ul",{class:"ulGlobal",key:t},[(0,o._)("li",null,(0,l.zw)(t.nom),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.notesParMatiere[s],(e=>((0,o.wg)(),(0,o.iD)("ul",{class:"notesMat",key:e},[(0,o._)("li",n,(0,l.zw)(e.note),1)])))),128)),void 0!=e.moyMat[s]?((0,o.wg)(),(0,o.iD)("li",r," Moyenne: "+(0,l.zw)(e.moyMat[s]),1)):(0,o.kq)("",!0)])))),128)),(0,o._)("li",null,[u,void 0!=y.moy?((0,o.wg)(),(0,o.iD)("span",c,(0,l.zw)(y.moy),1)):(0,o.kq)("",!0)]),h,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.listeAbsence,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e._id,class:"absence"},[(0,o._)("ul",null,[(0,o._)("li",null," Date: "+(0,l.zw)(e.date),1),(0,o._)("li",null," Justifie: "+(0,l.zw)(e.justifie),1),(0,o._)("li",null," Justification: "+(0,l.zw)(e.justification),1)])])))),128)),(0,o._)("div",m,[(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>y.putEleve&&y.putEleve(...e)),["prevent"])),class:"form"},[p,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.emailPut=t),type:"email",placeholder:"Entrer un email"},null,512),[[a.nr,e.emailPut]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.mdpPut=t),type:"password",placeholder:"Entrer un mot de passe"},null,512),[[a.nr,e.mdpPut]])]),d],32)])])}const y="https://polyrecte-serveur.herokuapp.com/",v=y+"matiere",f=y+"note",w=y+"eleve",b=y+"absence";var M={name:"eleve",data:()=>({id:localStorage.getItem("id"),eleve:[],matieres:[],notesParMatiere:[],moyMat:[],emailPut:null,mdpPut:null,listeAbsence:[]}),beforeMount(){this.getListMatieres().then((()=>{this.getNotesByMatiere()})),this.getListeAbsence()},computed:{moy(){var e=0,t=0;for(let l=0;l<this.notesParMatiere.length;l++)if(this.notesParMatiere[l].length>0){var s=0,o=0;for(let e=0;e<this.notesParMatiere[l].length;e++)s+=this.notesParMatiere[l][e].note,o+=1;this.moyMat[l]=s/o,e+=this.moyMat[l]}else t+=1;return e/(this.notesParMatiere.length-t)}},methods:{eleveLogout(){localStorage.removeItem("token"),localStorage.removeItem("id"),localStorage.clear(),this.$router.push("/eleve")},async getListMatieres(){try{let e=await fetch(v,{headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});if(e.ok){let t=await e.json();this.matieres=t.mats}else 401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/eleve")):(console.log("Erreur du serveur"),alert("Le chargement des donnés n'a pas pu être fait"))}catch(e){console.log(err)}},async getNotesByMatiere(){for(let e=0;e<this.matieres.length;e++)try{let t=await fetch(f+"/note/"+this.id+"/"+this.matieres[e]._id,{headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});if(t.ok){let s=await t.json();this.notesParMatiere[e]=s.notes}else 401==t.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/eleve")):alert("Problème du serveur")}catch{console.log("err")}},async putEleve(){await fetch(w+"/"+this.id,{method:"PUT",body:JSON.stringify({email:this.emailPut,mdp:this.mdpPut}),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(alert("Informations mise à jour"),this.emailPut="",this.mdpPut=""):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/eleve")):alert("Problème lors de la mise à jour de l'élève")}))},async getListeAbsence(){try{let e=await fetch(b,{headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});if(e.ok){let t=await e.json();this.listeAbsence=t.absences;for(let e=0;e<this.listeAbsence.length;e++)this.listeAbsence[e].justifie?this.listeAbsence[e].justifie="Oui":this.listeAbsence[e].justifie="Non"}else 401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/eleve")):alert("Problème du serveur")}catch(e){console.log(e)}}}},k=s(89);const P=(0,k.Z)(M,[["render",g],["__scopeId","data-v-0f3da527"]]);var _=P}}]);
//# sourceMappingURL=16.b15d5381.js.map