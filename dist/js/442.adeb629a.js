"use strict";(self["webpackChunkpolyrecte"]=self["webpackChunkpolyrecte"]||[]).push([[442],{9442:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var n=o(3396),r=o(9242),l=o(7139);const a=(0,n.Uk)("Ajouter des Notes"),s=(0,n.Uk)("Modifier des Notes"),i=(0,n.Uk)("Ajouter des Absences"),u=(0,n.Uk)("Modifier des Absences"),c=(0,n.Uk)("Mettre à jour votre profil"),d=["onUpdate:modelValue"],p=(0,n._)("label",null,"Numéro du contrôle: ",-1),m=(0,n._)("input",{class:"input",type:"submit",id:"submit",value:"Valider"},null,-1);function f(e,t,o,f,h,g){const v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("nav",null,[(0,n.Wm)(v,{to:"/loginProf"},{default:(0,n.w5)((()=>[a])),_:1}),(0,n.Wm)(v,{to:"/modifNote"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(v,{to:"/ajoutAbsence"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(v,{to:"/modifAbsence"},{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)(v,{to:"/profilProf"},{default:(0,n.w5)((()=>[c])),_:1})]),(0,n._)("button",{onClick:t[0]||(t[0]=e=>g.profLogout()),class:"deconnexion"},"Déconnexion"),(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,r.iM)(((...e)=>g.creerNotes&&g.creerNotes(...e)),["prevent"]))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.listeEleve,((t,o)=>((0,n.wg)(),(0,n.iD)("div",{key:t._id},[(0,n._)("li",null,[(0,n._)("p",null,(0,l.zw)(t.prenom)+" "+(0,l.zw)(t.nom),1),(0,n.wy)((0,n._)("input",{class:"input","onUpdate:modelValue":t=>e.note[o]=t,type:"number",min:"0",max:"20",style:{width:"200px"},id:"note",placeholder:"Entrer la note"},null,8,d),[[r.nr,e.note[o]]])])])))),128)),(0,n._)("div",null,[p,(0,n.wy)((0,n._)("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=t=>e.num=t),type:"number",min:"1",style:{width:"200px"},id:"num",placeholder:"Entrer le numéro du contrôle"},null,512),[[r.nr,e.num]])]),m],32)])}const h=top.glob,g=h+"eleve",v=h+"matiere",w=h+"note";var y={name:"prof",data:()=>({idProf:localStorage.getItem("idProf"),idMat:String,listeEleve:[],note:[],num:Number}),beforeMount(){this.getListeEleves(),this.getIdMat()},methods:{profLogout(){localStorage.removeItem("tokenProf"),localStorage.removeItem("idProf"),localStorage.clear(),this.$router.push("/prof")},async getListeEleves(){try{let e=await fetch(g,{headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenProf")}});if(e.ok){let t=await e.json();this.listeEleve=t.eleves}else 401==e.status?this.$router.push("/prof"):(console.log("Erreur du serveur"),alert("Le chargement des donnés n'a pas pu être fait"))}catch(e){console.log(e)}},async getIdMat(){try{let e=await fetch(v+"/"+this.idProf,{headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenProf")}});if(e.ok){let t=await e.json();this.idMat=t.mat._id}else 401==e.status?this.$router.push("/prof"):(console.log("Erreur du serveur"),alert("Le chargement des donnés n'a pas pu être fait"))}catch(e){console.log(e)}},async creerNotes(){var e=0;for(let o=0;o<this.listeEleve.length;o++)try{let t=await fetch(w,{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.getItem("tokenProf")},body:JSON.stringify({note:this.note[o],matiere:this.idMat,eleve:this.listeEleve[o]._id,num:this.num})});t.ok?this.note[o]="":401==t.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/prof")):e+=1}catch(t){console.log(t)}e?alert("Problème de création là où le formulaire n'est pas vide"):(alert("Enregistrement efféctué avec succès!"),this.num="")}}},k=o(89);const b=(0,k.Z)(y,[["render",f]]);var _=b}}]);
//# sourceMappingURL=442.adeb629a.js.map