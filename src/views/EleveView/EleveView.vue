<template>
    <div>
        <button v-on:click='eleveLogout()' class="deconnexion">Déconnexion</button>

        <ul class="ulGlobal" v-for="(mat, index) in matieres" v-bind:key="mat">
            <li>{{ mat.nom }}</li>
            <ul class="notesMat" v-for="note in notesParMatiere[index]" v-bind:key="note">
                <li class="notesMat">{{ note.note }}</li>
            </ul>
            <li v-if="moyMat[index] != undefined"> Moyenne: {{ moyMat[index] }}</li>
        </ul>
        <li>Moyenne générale: <span v-if="moy != undefined">{{ moy }}</span></li>
        <h4>Tes absences:</h4>
        <div v-for="absence in listeAbsence" :key="absence._id" class="absence">
            <ul>
				<li>
                	Date: {{ absence.date }}
            	</li>
				<li>
					Justifie: {{ absence.justifie }}
				</li>
				<li>
					Justification: {{ absence.justification }}
				</li>
			</ul>
        </div>
		<div class="container">
			<form @submit.prevent="putEleve" class="form">
				<h4>Formulaire pour mettre à jour tes informations: </h4>
				<div>
				<input v-model="emailPut" type="email" placeholder="Entrer un email">
				</div>
				<div>
				<input v-model="mdpPut" type="password" placeholder="Entrer un mot de passe">
				</div>
				<button type="submit">Mettre à jour</button>
			</form>
		</div>
    </div>
</template>


<script>

    const SERV = top.glob.serv;

    const API_URL_MAT = SERV + 'matiere';
    const API_URL_NOTE = SERV + 'note';
    const API_URL_ELEVE = SERV + 'eleve';
    const API_URL_ABSENCE = SERV + 'absence';

    export default {
        name: 'eleve',
        data: () => ({
            id: localStorage.getItem('idEleve'),
            eleve: [],
            matieres: [],
            notesParMatiere: [],
            moyMat: [],
            emailPut: null,
            mdpPut: null,
            listeAbsence: [],
        }),
        beforeMount(){
			this.getListeAbsence();
            this.getListMatieres()
            .then(() => {
                this.getNotesByMatiere();
            });
        },
        computed: {
            moy() {
                var moyTotal = 0;
                var vide = 0;
                for (let i = 0; i < this.notesParMatiere.length; i++) {
                    if (this.notesParMatiere[i].length > 0) {
                        var total = 0;
                        var nbr = 0;
                    
                        for (let j = 0; j < this.notesParMatiere[i].length; j++) {
                            total += this.notesParMatiere[i][j].note;
                            nbr += 1;
                        };
                        this.moyMat[i] = total/nbr;
                        moyTotal += this.moyMat[i];
                    }
                    else {
                        vide += 1;
                    };
                };
                return moyTotal/(this.notesParMatiere.length - vide);
            }
        },
        methods: {
            eleveLogout() {
                localStorage.removeItem('tokenEleve');
                localStorage.removeItem('idEleve');
                localStorage.clear();
                this.$router.push('/eleve');
				top.glob.toast("Vous n'êtes pas connecté", "info");
            },

            async getListMatieres() {
                try {
                    let repMatiere = await fetch(API_URL_MAT, {
                        headers: {
                            'content-type': 'application/json',
                            'authorization': localStorage.getItem('tokenEleve'),
                        }
                    });
                    if (repMatiere.ok) {
                        let data = await repMatiere.json();
                        this.matieres = data.mats;
                    }
                    else {
                        if (repMatiere.status == 401) {
                                this.$router.push('/eleve');
								top.glob.toast("Vous n'êtes pas connecté", "info");
                            }
                        else {
                            console.log("Erreur du serveur");
                            top.glob.toast("Le chargement des donnés n'a pas pu être fait", "warning");
                        };
                    };
                } catch (error) {
                    console.log(err);
					top.glob.toast('Erreur', 'danger');
                }
            },

            async getNotesByMatiere() {
                for (let i = 0; i < this.matieres.length; i++) {
                    try {
                        let repNote = await fetch(API_URL_NOTE + '/note/' + this.id + '/' + this.matieres[i]._id, {
                            headers: {
                                'content-type': 'application/json',
                                'authorization': localStorage.getItem('tokenEleve'),
                            }
                        });
                        if (repNote.ok) {
                            let data = await repNote.json();
                            this.notesParMatiere[i] = data.notes;
                        }
                        else {
                            if (repNote.status == 401) {
                                    this.$router.push('/eleve');
									top.glob.toast("Vous n'êtes pas connecté", "info");
                                }
                            else {
                                top.glob.toast('Problème du serveur', 'warning');
                            };
                        };
                    }
                    catch{
                        console.log("err");
						top.glob.toast('Erreur', 'danger');
                    }
                }
            },

            async putEleve() {
                await fetch(API_URL_ELEVE + '/' + this.id, {
                    method: "PUT",
                    body: JSON.stringify({
                        email: this.emailPut,
                        mdp: this.mdpPut
                    }),
                    headers: {
                        'content-type': 'application/json',
                        'authorization': localStorage.getItem('tokenEleve'),
                    }
                })
                .then(response => {
                    if (response.ok) {
                        top.glob.toast('Informations mise à jour', 'success');
						this.emailPut = '';
						this.mdpPut = '';
                    }
                    else {
                        if (response.status == 401) {
                                this.$router.push('/eleve');
								top.glob.toast("Vous n'êtes pas connecté", "info");
                            }
                        else {
                            top.glob.toast('Problème lors de la mise à jour de l\'élève', 'warning');
                        };
                    };
                });
            },

            async getListeAbsence() {
                try {
                    let repAbsence = await fetch(API_URL_ABSENCE + '/' + this.id, {
                        headers: {
                            'content-type': 'application/json',
                            'authorization': localStorage.getItem('tokenEleve'),
                        }
                    });
                    if (repAbsence.ok) {
                        let data = await repAbsence.json();
                        this.listeAbsence = data.absence;
                        for (let i = 0; i < this.listeAbsence.length; i++) {
                            if (this.listeAbsence[i].justifie) {
                                this.listeAbsence[i].justifie = 'Oui';
                            }
                            else {
                                this.listeAbsence[i].justifie = 'Non';
                            };
                        };
                    }
                    else {
                        if (repAbsence.status == 401) {
							this.$router.push('/eleve');
							top.glob.toast("Vous n'êtes pas connecté", "info");
						}
                        else {
                            top.glob.toast('Problème du serveur', 'warning');
                        };
                    };
                } catch (error) {
                    console.log(error);
					top.glob.toast('Erreur', 'danger');
                }
            }
        },
    }
</script>

<style scoped>
.absence {
    display: inline-block;
}

.ulGlobal {
	margin: 3% auto;
	width: 30%;
}

.notesMat {
	margin: auto;
	display: inline;
}

</style>