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
                <a href="#" v-on:click='getAllNotesByEleve(eleve._id, index1)'>
                    <p>{{ eleve.prenom }} {{ eleve.nom }}</p>
                </a>
                <div v-for="note in notesMat" :key="note" v-show="showNotes[index1]">
                    <form @submit.prevent="putNote(note._id, note.note, note.num)">
                        <div>
                            <input v-model="note.note" class="input" type="number" min="0" max="20">
                        </div>
                        <div>
                            <input v-model="note.num" class="input" type="number" min="0">
                        </div>
                        <button class="input" type="submit">Mettre à jour</button>
                    </form>
                    <button v-on:click='delNote(note._id, eleve._id, index1)' class="input" type="submit">Supprimer la note</button>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
const SERV = top.glob.serv;
const API_URL_ELEVE = SERV + 'eleve';
const API_URL_MAT = SERV + 'matiere';
const API_URL_NOTE = SERV + 'note';

    export default {
        name: 'modifNote',
        data: () => ({
            idProf: localStorage.getItem('idProf'),
            idMat: String,
            listeEleve : [],
            notesMat: [],
            showNotes: [],
        }),
        beforeMount() {
            this.getListeEleves()
            .then(() => {
                this.notShowMessage();
            });
            this.getIdMat();
        },
        methods: {
            profLogout() {
                localStorage.removeItem('tokenProf');
                localStorage.removeItem('idProf');
                localStorage.clear();
                this.$router.push('/prof');
				top.glob.toast("Vous n'êtes pas connecté", "info");
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
                        	top.glob.toast("Le chargement des donnés n'a pas pu être fait", "warning");
                        };
                    };
                } catch (error) {
                    console.log(error);
					top.glob.toast("Erreur", "danger");
                }
            },

            notShowMessage() {
                for (let i = 0; i < this.listeEleve.length; i++) {
                    this.showNotes[i] = false;
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

            async getAllNotesByEleve(idEleve, index) {
                try {
                    this.notShowMessage();
                    let repNote = await fetch(API_URL_NOTE + '/note/' + idEleve + '/' + this.idMat, {
                        headers: {
                            'content-type': 'application/json',
                            'authorization': localStorage.getItem('tokenProf'),
                        }
                    });
                    if (repNote.ok) {
                        let data = await repNote.json();
                        this.notesMat = data.notes;
                        this.showNotes[index] = true;
                    }
                    else {
                        if (repNote.status == 401) {
                            this.$router.push('/prof');
							top.glob.toast("Vous n'êtes pas connecté", "info");
                        }
                    };
                }
                catch{
                    console.log("err");
					top.glob.toast("Erreur", "danger");
                }
                return false;
            },

            async putNote(id, note, num) {
                await fetch(API_URL_NOTE + '/' + id, {
                    method: "PUT",
                    body: JSON.stringify({
                        note: note,
                        num: num
                    }),
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('tokenProf'),
                    }
                })
                .then(response => {
                    if (response.ok) {
						top.glob.toast("Note mis à jour", "success");
                    }
                    else {
                        if (response.status == 401) {
                            this.$router.push('/prof');
							top.glob.toast("Vous n'êtes pas connecté", "info");
                        }
                        else {
                            top.glob.toast('Problème lors de la mise à jour de la note', 'warning');
                        };
                    };
                })
                .catch((err) => {
                    console.log(err);
					top.glob.toast("Erreur", "danger");
                })
            },

            async delNote(idNote, idEleve, index) {
                const rep = confirm('Voulez-vous confirmez la supression?');
                if (rep) {
                    try {
                        let repDel = await fetch(API_URL_NOTE + '/' + idNote, {
                            method: "DELETE",
                            headers: {
                                'content-type': 'application/json',
                                'authorization': localStorage.getItem('tokenProf'),
                            }
                        });
                        if (repDel.ok) {
                            top.glob.toast('Note supprimée', 'success');
                            this.getAllNotesByEleve(idEleve, index);
                        }
                        else {
                            if (repDel.status == 401) {
                                    this.$router.push('/prof');
									top.glob.toast("Vous n'êtes pas connecté", "info");
                                }
                            else {
                                top.glob.toast('Problème lors de la supression de la note', 'warning');
                            };
                        };
                    } catch (error) {
                        console.log(error);
						top.glob.toast('Erreur', 'danger');
                    };
                };
            },
        }
    }
</script>