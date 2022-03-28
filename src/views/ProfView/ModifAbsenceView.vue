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
                    <form @submit.prevent="putAbsence(absence._id, absence.justification, absence.justifie, absence.date, eleve._id)">
                        <div>
                            <input v-model="absence.justification" class="input" type="text" id="justification" placeholder="Entrer une justification d'absence">
                        </div>
                        <div>
                            <input v-model="absence.justifie" class="input" type="checkbox" checked id="justifie">
                        </div>
                        <div>
                            <input v-model="absence.date" class="input" type="text" id="date">
                        </div>
                        <button class="input" type="submit">Mettre à jour</button>
                    </form>
                    <button v-on:click='delAbsence(absence._id, eleve._id, index1)' class="input" type="submit">Supprimer l'absence</button>
                </div>
            </li>
        </div>
    </div>
</template>

<script>

const SERV = 'https://polyrecte-serveur.herokuapp.com/';
const API_URL_ABSENCE = SERV + 'absence';
const API_URL_ELEVE = SERV + 'eleve';

export default {
    name: 'modifAbsence',
    data: () => ({
        listeEleve: [],
        listeAbsence: [],
        showFormAbsence: [],
        error: '',
    }),
    beforeMount() {
        this.getListeEleves()
        .then(() => {
            this.notShowAbsences();
        });
    },
    methods: {
        profLogout() {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.clear();
            this.$router.push('/prof');
        },

        async getListeEleves() {
            try {
                let repEleve = await fetch(API_URL_ELEVE, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('token'),
                    }
                });
                if (repEleve.ok) {
                    let data = await repEleve.json();
                    this.listeEleve = data.eleves;
                }
                else {
                    if (repEleve.status == 401) {
                            alert('Vous n\'êtes plus connecté');
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
                        'authorization': localStorage.getItem('token'),
                    }
                });
                if (repAbsences.ok) {
                    let data = await repAbsences.json();
                    this.listeAbsence = data.absence;
                    this.showFormAbsence[index] = true;
                    console.log(this.listeAbsence, this.listeAbsence[0].justification)
                }
                else {
                    if (repAbsences.status == 401) {
                        alert('Vous n\'êtes plus connecté');
                        this.$router.push('/prof');
                    }
                };
            }
            catch{
                console.log("err");
            }
            return false;
        },

        async putAbsence(id, justification, justifie, date, eleve) {
            await fetch(API_URL_ABSENCE + '/' + id, {
                method: "PUT",
                body: JSON.stringify({
                    justification: justification,
                    justifie: justifie,
                    date: date,
                    eleve: eleve
                }),
                headers: {
                    'content-type': 'application/json',
                    'authorization': localStorage.getItem('token'),
                }
            })
            .then(response => {
                if (response.ok) {
					alert("Absence mis à jour");
                }
                else {
                    if (response.status == 401) {
                            alert('Vous n\'êtes plus connecté');
                            this.$router.push('/prof');
                        }
                    else {
                        alert('Problème lors de la mise à jour de l\'absence');
                    };
                };
            })
            .catch((err) => {
                console.log(err);
            })
        },

        async delAbsence(idAbsence, idEleve, index) {
                const rep = confirm('Voulez-vous confirmez la supression?');
                if (rep) {
                    try {
                        let repDel = await fetch(API_URL_ABSENCE + '/' + idAbsence, {
                            method: "DELETE",
                            headers: {
                                'content-type': 'application/json',
                                'authorization': localStorage.getItem('token'),
                            }
                        });
                        if (repDel.ok) {
                            alert('Absence supprimée');
                            this.getAllAbsencesByEleve(idEleve, index);
                        }
                        else {
                            if (repEleve.status == 401) {
                                    alert('Vous n\'êtes plus connecté');
                                    this.$router.push('/prof');
                                }
                            else {
                                alert('Problème lors de la supression de l\'absence');
                            };
                        };
                    } catch (error) {
                        console.log(error);
                    };
                };
            },
    }
}

</script>