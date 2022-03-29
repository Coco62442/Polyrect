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
        <hr>
        <div v-for="(eleve, index1) in listeEleve" :key="eleve._id">
            <li>
                <a href="#" v-on:click='getAllAbsencesByEleve(eleve._id, index1)'>
                    {{ eleve.prenom }} {{ eleve.nom }}
                </a>
                <div v-for="absence in listeAbsence" :key="absence" v-show="showFormAbsence[index1]">
                    <li>
                        Date: {{ absence.date }}
                        Justifié: {{ absence.justifie }}
                        Justification: {{ absence.justification }}
                    </li>
                </div>
            </li>
            <div v-show="showFormAbsence[index1]">
                <form @submit.prevent="creerAbsence(eleve._id, index1)">
                    <div>
                        <input v-model="justification" class="input" type="text" id="justification" placeholder="Entrer une justification d'absence">
                    </div>
                    <div>
                        <input v-model="justifie" class="input" type="checkbox" checked id="justifie">
                    </div>
                    <div>
                        <input v-model="date" class="input" type="text" id="date">
                    </div>
                    <button type="submit" class="input">Mettre à jour</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

const SERV = top.glob;
const API_URL_ELEVE = SERV + 'eleve';
const API_URL_ABSENCE = SERV + 'absence';

export default {
    name: 'abscence',
    data: () => ({
        listeEleve: [],
        listeAbsence: [],
        showFormAbsence: [],
        justification: '',
        justifie: Boolean,
        date: '',
    }),
    beforeMount() {
        this.getListeEleves()
        .then(() => {
            this.notShowAbsences()
        })
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
                        }
                    else {
                        console.log("Erreur du serveur");
                    alert("Le chargement des donnés n'a pas pu être fait");
                    };
                };
            } catch (error) {
                console.log(error);
            }
        },

        notShowAbsences() {
            for (let i = 0; i < this.listeEleve.length; i++) {
                this.showFormAbsence[i] = false;
            }
        },

        async getAllAbsencesByEleve(idEleve, index) {
            try {
                this.notShowAbsences();
                let repAbsences = await fetch(API_URL_ABSENCE + '/' + idEleve, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('tokenProf'),
                    }
                });
                if (repAbsences.ok) {
                    let data = await repAbsences.json();
                    this.listeAbsence = data.absence;
                    this.showFormAbsence[index] = true;
                    for (let i = 0; i < this.listeAbsence.length; i++) {
                        if (this.listeAbsence[i].justifie){
                            this.listeAbsence[i].justifie = 'Oui';
                        }
                        else {
                            this.listeAbsence[i].justifie = 'Non';
                        };
                    }
                }
                else {
                    if (repAbsences.status == 401) {
                            alert('Vous n\'êtes plus connecté');
                            this.$router.push('/prof');
                        }
                    else {
                        alert('Erreur lors de la récupération des données');
                    };
                };
            }
            catch{
                console.log("err");
            }
            return false;
        },

        async creerAbsence(id, index) {
            try {
                let repAbsence = await fetch(API_URL_ABSENCE, {
                    method: "POST",
                    body: JSON.stringify({
                        justifie: this.justifie,
                        justification: this.justification,
                        date: this.date,
                        eleve: id,
                    }),
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('tokenProf'),
                    }
                });
                if (repAbsence.ok) {
                    this.justification = '';
                    this.justifie = '';
                    this.date = '';
                    this.getAllAbsencesByEleve(id, index)
                    alert("Absence ajouté à l'élève")
                }
                else {
                    if (repAbsence.status == 401) {
                            alert('Vous n\'êtes plus connecté');
                            this.$router.push('/prof');
                        }
                    else {
                        alert('Erreur lors de la création de l\'absence');
                    };
                };
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>