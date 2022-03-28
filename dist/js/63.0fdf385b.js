"use strict";(self["webpackChunkpolyrecte"]=self["webpackChunkpolyrecte"]||[]).push([[63],{1063:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var o=n(3396),l=n(9242);const a=(0,o.Uk)("Gestion de la base de donnée"),r=(0,o.Uk)("Mettre à jour votre profil"),i=(0,o._)("hr",null,null,-1),s=(0,o._)("h3",null,"Liste des Elèves:",-1),u=["onSubmit"],d=["onUpdate:modelValue"],p=["onUpdate:modelValue"],m=(0,o._)("button",{type:"submit",class:"input"},"Mettre à jour",-1),c=["onClick"],h=(0,o._)("hr",null,null,-1),f={class:"container"},_=(0,o._)("h3",null,"Formulaire de création d'élève:",-1),y=(0,o._)("label",{for:"email"},"Email",-1),v=(0,o._)("label",{for:"prenom"},"Prénom",-1),g=(0,o._)("label",{for:"nom"},"Nom",-1),b=(0,o._)("label",{for:"mdp"},"Mot de passe",-1),w=(0,o._)("button",{type:"submit"},"Ajouter un élève",-1),E=(0,o._)("hr",null,null,-1),k=(0,o._)("h3",null,"Liste des professeurs:",-1),V=["onSubmit"],S=["onUpdate:modelValue"],P=["onUpdate:modelValue"],j=["onUpdate:modelValue"],U=(0,o._)("button",{type:"submit",class:"input"},"Mettre à jour",-1),A=["onClick"],L=(0,o._)("hr",null,null,-1),z={class:"container"},x=(0,o._)("h3",null,"Formulaire de création de professeur:",-1),C=(0,o._)("label",{for:"email"},"Email",-1),M=(0,o._)("label",{for:"prenom"},"Prénom",-1),$=(0,o._)("label",{for:"nom"},"Nom",-1),I=(0,o._)("label",{for:"mdp"},"Mot de passe",-1),D=(0,o._)("label",{for:"dateFinContrat"},"Date de fin de contrat",-1),F=(0,o._)("button",{type:"submit"},"Ajouter un professeur",-1),N=(0,o._)("hr",null,null,-1),O=(0,o._)("h3",null,"Liste des administrateurs:",-1),T=["onSubmit"],J=["onUpdate:modelValue"],q=["onUpdate:modelValue"],Z=(0,o._)("button",{type:"submit",class:"input"},"Mettre à jour",-1),H=["onClick"],K=(0,o._)("hr",null,null,-1),Y={class:"container"},W=(0,o._)("h3",null,"Formulaire de création d'administrateur:",-1),G=(0,o._)("label",{for:"email"},"Email",-1),B=(0,o._)("label",{for:"prenom"},"Prénom",-1),Q=(0,o._)("label",{for:"nom"},"Nom",-1),R=(0,o._)("label",{for:"mdp"},"Mot de passe",-1),X=(0,o._)("button",{type:"submit"},"Ajouter un administrateur",-1);function ee(e,t,n,ee,te,ne){const oe=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("nav",null,[(0,o.Wm)(oe,{to:"/loginAdmin"},{default:(0,o.w5)((()=>[a])),_:1}),(0,o.Wm)(oe,{to:"/profilAdmin"},{default:(0,o.w5)((()=>[r])),_:1})]),(0,o._)("button",{onClick:t[0]||(t[0]=e=>ne.adminLogout()),class:"deconnexion"},"Déconnexion"),i,s,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.listeEleve,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e._id},[(0,o._)("li",null,[(0,o._)("form",{onSubmit:(0,l.iM)((t=>ne.putEleve(e._id,e.prenom,e.nom)),["prevent"])},[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.prenom=t,type:"text",class:"input"},null,8,d),[[l.nr,e.prenom]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.nom=t,type:"text",class:"input"},null,8,p),[[l.nr,e.nom]])]),m],40,u),(0,o._)("button",{onClick:t=>ne.delEleve(e._id),type:"submit",class:"input"},"Supprimer l'élève",8,c)])])))),128)),h,(0,o._)("div",f,[(0,o._)("form",{onSubmit:t[5]||(t[5]=(0,l.iM)(((...e)=>ne.addEleve&&ne.addEleve(...e)),["prevent"])),class:"form"},[_,(0,o._)("div",null,[y,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.eleve.email=t),type:"email",required:"",placeholder:"Entrer un email"},null,512),[[l.nr,e.eleve.email]])]),(0,o._)("div",null,[v,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.eleve.prenom=t),type:"text",placeholder:"Entrer un prénom",required:""},null,512),[[l.nr,e.eleve.prenom]])]),(0,o._)("div",null,[g,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.eleve.nom=t),type:"text",placeholder:"Entrer un nom"},null,512),[[l.nr,e.eleve.nom]])]),(0,o._)("div",null,[b,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.eleve.mdp=t),type:"password",pattern:"^([ a-zA-Z0-9@ *#]{3,15})$",placeholder:"Entrer un mot de passe"},null,512),[[l.nr,e.eleve.mdp]])]),w],32)]),E,k,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.listeProf,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e._id},[(0,o._)("li",null,[(0,o._)("form",{onSubmit:(0,l.iM)((t=>ne.putProf(e._id,e.prenom,e.nom,e.dateFinContrat)),["prevent"])},[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.prenom=t,type:"text",class:"input"},null,8,S),[[l.nr,e.prenom]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.nom=t,type:"text",class:"input"},null,8,P),[[l.nr,e.nom]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.dateFinContrat=t,type:"text",class:"input"},null,8,j),[[l.nr,e.dateFinContrat]])]),U],40,V),(0,o._)("button",{onClick:t=>ne.delProf(e._id),type:"submit",class:"input"},"Supprimer le professeur",8,A)])])))),128)),L,(0,o._)("div",z,[(0,o._)("form",{onSubmit:t[11]||(t[11]=(0,l.iM)(((...e)=>ne.addProf&&ne.addProf(...e)),["prevent"])),class:"form"},[x,(0,o._)("div",null,[C,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.prof.email=t),type:"email",required:"",placeholder:"Entrer un email"},null,512),[[l.nr,e.prof.email]])]),(0,o._)("div",null,[M,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[7]||(t[7]=t=>e.prof.prenom=t),type:"text",placeholder:"Entrer un prénom",required:""},null,512),[[l.nr,e.prof.prenom]])]),(0,o._)("div",null,[$,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[8]||(t[8]=t=>e.prof.nom=t),type:"text",placeholder:"Entrer un nom"},null,512),[[l.nr,e.prof.nom]])]),(0,o._)("div",null,[I,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[9]||(t[9]=t=>e.prof.mdp=t),type:"password",pattern:"^([ a-zA-Z0-9@ *#]{3,15})$",placeholder:"Entrer un mot de passe"},null,512),[[l.nr,e.prof.mdp]])]),(0,o._)("div",null,[D,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[10]||(t[10]=t=>e.prof.dateFinContrat=t),type:"text",placeholder:"Entrer une date de la forme 'JJ/MM'"},null,512),[[l.nr,e.prof.dateFinContrat]])]),F],32)]),N,O,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.listeAdmin,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e._id},[(0,o._)("li",null,[(0,o._)("form",{onSubmit:(0,l.iM)((t=>ne.putAdmin(e._id,e.prenom,e.nom)),["prevent"])},[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.prenom=t,type:"text",class:"input"},null,8,J),[[l.nr,e.prenom]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.nom=t,type:"text",class:"input"},null,8,q),[[l.nr,e.nom]])]),Z],40,T),(0,o._)("button",{onClick:t=>ne.delAdmin(e._id),type:"submit",class:"input"},"Supprimer l'administrateur",8,H)])])))),128)),K,(0,o._)("div",Y,[(0,o._)("form",{onSubmit:t[16]||(t[16]=(0,l.iM)(((...e)=>ne.addAdmin&&ne.addAdmin(...e)),["prevent"])),class:"form"},[W,(0,o._)("div",null,[G,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[12]||(t[12]=t=>e.admin.email=t),type:"email",required:"",placeholder:"Entrer un email"},null,512),[[l.nr,e.admin.email]])]),(0,o._)("div",null,[B,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[13]||(t[13]=t=>e.admin.prenom=t),type:"text",placeholder:"Entrer un prénom",required:""},null,512),[[l.nr,e.admin.prenom]])]),(0,o._)("div",null,[Q,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[14]||(t[14]=t=>e.admin.nom=t),type:"text",placeholder:"Entrer un nom"},null,512),[[l.nr,e.admin.nom]])]),(0,o._)("div",null,[R,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[15]||(t[15]=t=>e.admin.mdp=t),type:"password",pattern:"^([ a-zA-Z0-9@ *#]{3,15})$",placeholder:"Entrer un mot de passe"},null,512),[[l.nr,e.admin.mdp]])]),X],32)])])}const te="https://polyrecte-serveur.herokuapp.com/",ne=te+"eleve",oe=te+"prof",le=te+"admin";var ae={name:"admin",data:()=>({idAdmin:localStorage.getItem("id"),listeEleve:[],listeProf:[],listeAdmin:[],eleve:{email:"",prenom:"",nom:"",mdp:""},prof:{email:"",prenom:"",nom:"",mdp:""},admin:{email:"",prenom:"",nom:"",mdp:""}}),beforeMount(){this.getListeEleves(),this.getListeProfs(),this.getListeAdmins()},methods:{adminLogout(){localStorage.removeItem("token"),localStorage.removeItem("id"),localStorage.clear(),this.$router.push("/admin")},async getListeEleves(){try{let e=await fetch(ne,{headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});if(e.ok){let t=await e.json();this.listeEleve=t.eleves}else 401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):(console.log("Erreur du serveur"),alert("Le chargement des donnés n'a pas pu être fait"))}catch(e){console.log(e)}},async putEleve(e,t,n){console.log(e,t,n),await fetch(ne+"/"+e,{method:"PUT",body:JSON.stringify({prenom:t,nom:n}),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(alert("Eleve mis à jour"),this.getListeEleves()):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de la mise à jour de l'élève")})).catch((e=>{console.log(e)}))},async addEleve(){await fetch(ne,{method:"POST",body:JSON.stringify(this.eleve),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(this.getListeEleves(),this.eleve={email:"",prenom:"",nom:"",mdp:""},alert("Elève ajouté")):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de l'ajout de l'élève")}))},async delEleve(e){const t=confirm("Voulez-vous confirmez la supression?");if(t)try{let t=await fetch(ne+"/"+e,{method:"DELETE",headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});t.ok?(alert("Elève supprimé"),this.getListeEleves()):401==t.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de la supression de l'élève")}catch(n){console.log(n)}},async getListeProfs(){try{let e=await fetch(oe,{headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});if(e.ok){let t=await e.json();this.listeProf=t.profs}else 401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Le chargement des donnés n'a pas pu être fait")}catch(e){console.log(e)}},async putProf(e,t,n,o){await fetch(oe+"/"+e,{method:"PUT",body:JSON.stringify({prenom:t,nom:n,dateFinContrat:o}),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(alert("Prof mis à jour"),this.getListeProfs()):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de l'ajout du professeur")})).catch((e=>{console.log(e)}))},async addProf(){await fetch(oe,{method:"POST",body:JSON.stringify(this.prof),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(this.getListeProfs(),this.prof={email:"",prenom:"",nom:"",mdp:""},alert("Professeur ajouté")):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de l'ajout du professeur")})).catch((e=>{console.log(e)}))},async delProf(e){const t=confirm("Voulez-vous confirmez la supression?");if(t)try{let t=await fetch(oe+"/"+e,{method:"DELETE",headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});t.ok?(alert("Professeur supprimé"),this.getListeProfs()):401==t.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de la supression du professeur")}catch(n){console.log(n)}},async getListeAdmins(){try{let e=await fetch(le,{headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});if(e.ok){let t=await e.json();this.listeAdmin=t.admins}else 401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):(console.log("Erreur du serveur"),alert("Le chargement des donnés n'a pas pu être fait"))}catch(e){console.log(e)}},async putAdmin(e,t,n){await fetch(le+"/"+e,{method:"PUT",body:JSON.stringify({prenom:t,nom:n}),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(alert("Admin mis à jour"),this.getListeAdmins()):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de la mise à jour de l'administrateur")}))},async addAdmin(){await fetch(le+"/creer/"+this.idAdmin,{method:"POST",body:JSON.stringify(this.admin),headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{e.ok?(this.getListeAdmins(),this.admin={email:"",prenom:"",nom:"",mdp:""},alert("Administrateur ajouté")):401==e.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de l'ajout")})).catch((e=>{console.log(e)}))},async delAdmin(e){const t=confirm("Voulez-vous confirmez la supression?");if(t)try{let t=await fetch(le+"/"+e+"/"+this.idAdmin,{method:"DELETE",headers:{"content-type":"application/json",authorization:localStorage.getItem("token")}});t.ok?(alert("Administrateur supprimé"),this.getListeAdmins()):401==t.status?(alert("Vous n'êtes plus connecté"),this.$router.push("/admin")):alert("Problème lors de la supression de l'administrateur (il doit toujours exister au moins un admin!)")}catch(n){console.log(n)}}}},re=n(89);const ie=(0,re.Z)(ae,[["render",ee]]);var se=ie}}]);
//# sourceMappingURL=63.0fdf385b.js.map