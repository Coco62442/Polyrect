<template>
    <div>
        <nav>
            <router-link to="/loginProf">Ajouter des Notes</router-link>
            <router-link to="/modifNote">Modifier des Notes</router-link>
            <router-link to="/ajoutAbsence">Ajouter des Absences</router-link>
            <router-link to="/modifAbsence">Modifier des Absences</router-link>
            <router-link to="/profilProf">Mettre à jour votre profil</router-link>
        </nav>
        <button v-on:click='profLogout()' class="deconnexion">Déconnexion</button>
        <form @submit.prevent="creerNotes">
            <div v-for="(item, index) in listeEleve" :key="item._id">
                <li>
                    <p>{{ item.prenom }} {{ item.nom }}</p>
                    <input class="input" v-model="note[index]" type="number" min="0" max="20" style="width:200px" id="note" placeholder="Entrer la note">
                </li>
            </div>
            <div>
				<label>Numéro du contrôle: </label>
                <input class="input" v-model="num" type="number" min="1" style="width: 200px" id="num" placeholder="Entrer le numéro du contrôle">
                <!-- <label for="coef">Coefficient du contrôle</label>
                <input class="input" type="number" min="1" value="1" id="coef" placeholder="Entrer le coefficient"> -->
            </div>
            <input class="input" type="submit" id='submit' value='Valider'>
        </form>
    </div>
</template>

<script>

const SERV = top.glob.serv;
const API_URL_ELEVE = SERV + 'eleve';
const API_URL_MAT = SERV + 'matiere';
const API_URL_NOTE = SERV + 'note';



export default {
    name: 'prof',
    data: () => ({
        idProf: localStorage.getItem('idProf'),
        idMat: String,
        listeEleve: [],
        note: [],
        num: Number
    }),
    beforeMount() {
        this.getListeEleves();
        this.getIdMat();
    },
    methods: {

        profLogout() {
            localStorage.removeItem('tokenProf');
            localStorage.removeItem('idProf');
            localStorage.clear();
            this.$router.push('/prof');
        },

        async getListeEleves() {
            try {
                let repEleve = await fetch(API_URL_ELEVE, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('tokenProf'),
                    }
                });
                if (repEleve.ok) {
                let data = await repEleve.json();
                this.listeEleve = data.eleves;
                }
                else {
                    if (repEleve.status == 401) {
                        this.$router.push('/prof');
						top.glob.toast("Vous n'êtes pas connecté", "info");
                    }
                    else {
                        console.log("Erreur du serveur");
                        top.glob.toast("Le chargement des donnés n'a pas pu être fait", "danger");
                    };
                };
            } catch (error) {
                console.log(error);
				top.glob.toast("Erreur", "danger");
            }
        },

        async getIdMat() {
            try {
                let repMat = await fetch(API_URL_MAT + '/' + this.idProf, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('tokenProf'),
                    }
                });
                if (repMat.ok) {
                    let data = await repMat.json();
                    this.idMat = data.mat._id;
                }
                else {
                    if (repMat.status == 401) {
                        this.$router.push('/prof');
						top.glob.toast("Vous n'êtes pas connecté", "info");
                    }
                    else {
                        console.log("Erreur du serveur");
                        top.glob.toast("Le chargement des donnés n'a pas pu être fait", "warning");
                    };
                };
            } catch (error) {
                console.log(error);
				top.glob.toast("Erreur", "danger");
            }
        },

        async creerNotes() {
            var problem = 0;
            for (let i = 0; i < this.listeEleve.length; i++) {
                try {
                    let repNote = await fetch(API_URL_NOTE, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': localStorage.getItem('tokenProf'),
                        },
                        body: JSON.stringify({
                            note: this.note[i],
                            matiere: this.idMat,
                            eleve: this.listeEleve[i]._id,
                            num: this.num
                        })
                    });
                    if (repNote.ok) {
                        this.note[i] = "";
                    }
                    else {
                        if (repNote.status == 401) {
                            this.$router.push('/prof');
							top.glob.toast("Vous n'êtes pas connecté", "info");
                        }
                        else {
                            problem += 1;
                        };
                    }
                } catch (erreur) {
                    console.log(erreur);
					top.glob.toast("Erreur", "danger");
                };
            };
            if (problem) {
                top.glob.toast("Problème de création là où le formulaire n'est pas vide", "warning");
            }
            else {
                top.glob.toast("Enregistrement efféctué avec succès!", "default");
                this.num = "";
            };
        }
    }
}
</script>