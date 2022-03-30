"use strict";(self["webpackChunkpolyrecte"]=self["webpackChunkpolyrecte"]||[]).push([[137],{7137:function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var s=l(3396),o=l(7139),i=l(9242);const a=e=>((0,s.dD)("data-v-75c05634"),e=e(),(0,s.Cn)(),e),n={class:"notesMat"},r={key:0},u=(0,s.Uk)("Moyenne générale: "),c={key:0},h=a((()=>(0,s._)("h4",null,"Tes absences:",-1))),m={class:"container"},d=a((()=>(0,s._)("h4",null,"Formulaire pour mettre à jour tes informations: ",-1))),p=a((()=>(0,s._)("button",{type:"submit"},"Mettre à jour",-1)));function g(e,t,l,a,g,v){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("button",{onClick:t[0]||(t[0]=e=>v.eleveLogout()),class:"deconnexion"},"Déconnexion"),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.matieres,((t,l)=>((0,s.wg)(),(0,s.iD)("ul",{class:"ulGlobal",key:t},[(0,s._)("li",null,(0,o.zw)(t.nom),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.notesParMatiere[l],(e=>((0,s.wg)(),(0,s.iD)("ul",{class:"notesMat",key:e},[(0,s._)("li",n,(0,o.zw)(e.note),1)])))),128)),void 0!=e.moyMat[l]?((0,s.wg)(),(0,s.iD)("li",r," Moyenne: "+(0,o.zw)(e.moyMat[l]),1)):(0,s.kq)("",!0)])))),128)),(0,s._)("li",null,[u,void 0!=v.moy?((0,s.wg)(),(0,s.iD)("span",c,(0,o.zw)(v.moy),1)):(0,s.kq)("",!0)]),h,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.listeAbsence,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e._id,class:"absence"},[(0,s._)("ul",null,[(0,s._)("li",null," Date: "+(0,o.zw)(e.date),1),(0,s._)("li",null," Justifie: "+(0,o.zw)(e.justifie),1),(0,s._)("li",null," Justification: "+(0,o.zw)(e.justification),1)])])))),128)),(0,s._)("div",m,[(0,s._)("form",{onSubmit:t[3]||(t[3]=(0,i.iM)(((...e)=>v.putEleve&&v.putEleve(...e)),["prevent"])),class:"form"},[d,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.emailPut=t),type:"email",placeholder:"Entrer un email"},null,512),[[i.nr,e.emailPut]])]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.mdpPut=t),type:"password",placeholder:"Entrer un mot de passe"},null,512),[[i.nr,e.mdpPut]])]),p],32)])])}const v=top.glob,y=v+"matiere",f=v+"note",w=v+"eleve",b=v+"absence";var M={name:"eleve",data:()=>({id:localStorage.getItem("idEleve"),eleve:[],matieres:[],notesParMatiere:[],moyMat:[],emailPut:null,mdpPut:null,listeAbsence:[]}),beforeMount(){this.getListeAbsence(),this.getListMatieres().then((()=>{this.getNotesByMatiere()}))},computed:{moy(){var e=0,t=0;for(let o=0;o<this.notesParMatiere.length;o++)if(this.notesParMatiere[o].length>0){var l=0,s=0;for(let e=0;e<this.notesParMatiere[o].length;e++)l+=this.notesParMatiere[o][e].note,s+=1;this.moyMat[o]=l/s,e+=this.moyMat[o]}else t+=1;return e/(this.notesParMatiere.length-t)}},methods:{eleveLogout(){localStorage.removeItem("tokenEleve"),localStorage.removeItem("idEleve"),localStorage.clear(),this.$router.push("/eleve")},async getListMatieres(){try{let e=await fetch(y,{headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenEleve")}});if(e.ok){let t=await e.json();this.matieres=t.mats}else 401==e.status?this.$router.push("/eleve"):(console.log("Erreur du serveur"),alert("Le chargement des donnés n'a pas pu être fait"))}catch(e){console.log(err)}},async getNotesByMatiere(){for(let e=0;e<this.matieres.length;e++)try{let t=await fetch(f+"/note/"+this.id+"/"+this.matieres[e]._id,{headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenEleve")}});if(t.ok){let l=await t.json();this.notesParMatiere[e]=l.notes}else 401==t.status?this.$router.push("/eleve"):alert("Problème du serveur")}catch{console.log("err")}},async putEleve(){await fetch(w+"/"+this.id,{method:"PUT",body:JSON.stringify({email:this.emailPut,mdp:this.mdpPut}),headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenEleve")}}).then((e=>{e.ok?(alert("Informations mise à jour"),this.emailPut="",this.mdpPut=""):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/eleve")):alert("Problème lors de la mise à jour de l'élève")}))},async getListeAbsence(){try{let e=await fetch(b+"/"+this.id,{headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenEleve")}});if(e.ok){let t=await e.json();this.listeAbsence=t.absence;for(let e=0;e<this.listeAbsence.length;e++)this.listeAbsence[e].justifie?this.listeAbsence[e].justifie="Oui":this.listeAbsence[e].justifie="Non"}else 401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/eleve")):alert("Problème du serveur")}catch(e){console.log(e)}}}},k=l(89);const P=(0,k.Z)(M,[["render",g],["__scopeId","data-v-75c05634"]]);var _=P}}]);
//# sourceMappingURL=137.31767fc4.js.map