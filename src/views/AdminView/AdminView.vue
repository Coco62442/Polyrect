<template>
    <div>
        <nav>
            <router-link to="/loginAdmin">Gestion de la base de donnée</router-link>
            <router-link to="/profilAdmin">Mettre à jour votre profil</router-link>
        </nav>
        <button v-on:click='adminLogout()' class="deconnexion">Déconnexion</button>
        <hr>
		<h3>Liste des Elèves:</h3>
        <div v-for="eleve in listeEleve" :key="eleve._id">
            <li>
                <form @submit.prevent="putEleve(eleve._id, eleve.prenom, eleve.nom)">
                    <div>
                        <input v-model="eleve.prenom" type="text" class="input">
                    </div>
                    <div>
                        <input v-model="eleve.nom" type="text" class="input">
                    </div>
                    <button type="submit" class="input">Mettre à jour</button>
                </form>
                <button v-on:click='delEleve(eleve._id)' type="submit" class="input">Supprimer l'élève</button>
            </li>
        </div>
        <hr>
        <div class="container">
            <form @submit.prevent="addEleve" class="form">
				<h3>Formulaire de création d'élève:</h3>
                <div>
                <label for="email">Email</label>
                <input v-model="eleve.email" type="email" required placeholder="Entrer un email">
                </div>
                <div>
                <label for="prenom">Prénom</label>
                <input v-model="eleve.prenom" type="text" placeholder="Entrer un prénom" required>
                </div>
                <div>
                <label for="nom">Nom</label>
                <input v-model="eleve.nom" type="text" placeholder="Entrer un nom">
                </div>
                <div>
                <label for="mdp">Mot de passe</label>
                <input v-model="eleve.mdp" type="password" pattern="^([ a-zA-Z0-9@ *#]{3,15})$" placeholder="Entrer un mot de passe">
                </div>
                <button type="submit">Ajouter un élève</button>
            </form>
        </div>
        <hr>
		<h3>Liste des professeurs:</h3>
        <div v-for="prof in listeProf" :key="prof._id">
            <li>
                <form @submit.prevent="putProf(prof._id, prof.prenom, prof.nom, prof.dateFinContrat)">
                    <div>
                        <input v-model="prof.prenom" type="text" class="input">
                    </div>
                    <div>
                        <input v-model="prof.nom" type="text" class="input">
                    </div>
                    <div>
                        <input v-model="prof.dateFinContrat" type="text" class="input">
                    </div>
                    <button type="submit" class="input">Mettre à jour</button>
                </form>
                <button v-on:click='delProf(prof._id)' type="submit" class="input">Supprimer le professeur</button>
            </li>
        </div>
        <hr>
        <div class="container">
            <form @submit.prevent="addProf" class="form">
				<h3>Formulaire de création de professeur:</h3>
                <div>
                <label for="email">Email</label>
                <input v-model="prof.email" type="email" required placeholder="Entrer un email">
                </div>
                <div>
                <label for="prenom">Prénom</label>
                <input v-model="prof.prenom" type="text" placeholder="Entrer un prénom" required>
                </div>
                <div>
                <label for="nom">Nom</label>
                <input v-model="prof.nom" type="text" placeholder="Entrer un nom">
                </div>
                <div>
                <label for="mdp">Mot de passe</label>
                <input v-model="prof.mdp" type="password" pattern="^([ a-zA-Z0-9@ *#]{3,15})$" placeholder="Entrer un mot de passe">
                </div>
                <div>
                <label for="dateFinContrat">Date de fin de contrat</label>
                <input v-model="prof.dateFinContrat" type="text" placeholder="Entrer une date de la forme 'JJ/MM'">
                </div>
                <button type="submit">Ajouter un professeur</button>
            </form>
        </div>
        <hr>
		<h3>Liste des administrateurs:</h3>
        <div v-for="admin in listeAdmin" :key="admin._id">
            <li>
                <form @submit.prevent="putAdmin(admin._id, admin.prenom, admin.nom)">
                    <div>
                        <input v-model="admin.prenom" type="text" class="input">
                    </div>
                    <div>
                        <input v-model="admin.nom" type="text" class="input">
                    </div>
                    <button type="submit" class="input">Mettre à jour</button>
                </form>
                <button v-on:click='delAdmin(admin._id)' type="submit" class="input">Supprimer l'administrateur</button>
            </li>
        </div>
        <hr>
        <div class="container">
            <form @submit.prevent="addAdmin" class="form">
				<h3>Formulaire de création d'administrateur:</h3>
                <div>
                <label for="email">Email</label>
                <input v-model="admin.email" type="email" required placeholder="Entrer un email">
                </div>
                <div>
                <label for="prenom">Prénom</label>
                <input v-model="admin.prenom" type="text" placeholder="Entrer un prénom" required>
                </div>
                <div>
                <label for="nom">Nom</label>
                <input v-model="admin.nom" type="text" placeholder="Entrer un nom">
                </div>
                <div>
                <label for="mdp">Mot de passe</label>
                <input v-model="admin.mdp" type="password" pattern="^([ a-zA-Z0-9@ *#]{3,15})$" placeholder="Entrer un mot de passe">
                </div>
                <button type="submit">Ajouter un administrateur</button>
            </form>
        </div>
    </div>
</template>

<script>

const SERV = 'https://polyrecte-serveur.herokuapp.com/';
const API_URL_ELEVE = SERV + 'eleve';
const API_URL_PROF = SERV + 'prof';
const API_URL_ADMIN = SERV + 'admin';

    export default {
        name: 'admin',
        data: () => ({
            idAdmin: localStorage.getItem('id'),
            listeEleve : [],
            listeProf: [],
            listeAdmin: [],
            eleve: {
                email: "",
                prenom: "",
                nom: "",
                mdp: ""
            },
            prof: {
                email: '',
                prenom: '',
                nom: '',
                mdp: '',
            },
            admin: {
                email: '',
                prenom: '',
                nom: '',
                mdp: ''
            },
        }),
        beforeMount() {
            this.getListeEleves();
            this.getListeProfs();
            this.getListeAdmins();
        },
        methods: {
            adminLogout() {
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                localStorage.clear();
                this.$router.push('/admin');
            },

            async getListeEleves() {
                try {
                    let repEleve = await fetch(API_URL_ELEVE, {
                        headers: {
                            "content-type": "application/json",
                            'authorization': localStorage.getItem('token'),
                        }
                    });
                    if (repEleve.ok) {
                        let data = await repEleve.json();
                        this.listeEleve = data.eleves;
                    }
                    else {
                        if (repEleve.status == 401) {
                                alert('Vous n\'êtes plus connecté')
                                this.$router.push('/admin');
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

            async putEleve(id, prenom, nom) {
                console.log(id,prenom,nom)
                await fetch(API_URL_ELEVE + '/' + id, {
                    method: "PUT",
                    body: JSON.stringify({
                        prenom: prenom,
                        nom: nom
                    }),
                    headers: {
                        "content-type": "application/json",
                        'authorization': localStorage.getItem('token'),
                    }
                })
                .then(response => {
                    if (response.ok) {
                        alert("Eleve mis à jour");
                        this.getListeEleves();
                    }
                    else {
                        if (response.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert('Problème lors de la mise à jour de l\'élève');
                        };
                    };
                })
                .catch((err) => {
                    console.log(err);
                })
            },

            async addEleve() {
                await fetch(API_URL_ELEVE, {
                    method: "POST",
                    body: JSON.stringify(this.eleve),
                    headers: {
                        "content-type": "application/json",
                        'authorization': localStorage.getItem('token'),
                    }
                })
                .then(response => {
                    if (response.ok) {
                        this.getListeEleves();
                        this.eleve = {
                            email: "",
                            prenom: "",
                            nom: "",
                            mdp: ""
                        };
                        alert("Elève ajouté");
                    }
                    else {
                        if (response.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert('Problème lors de l\'ajout de l\'élève');
                        };
                    };
                });
            },

            async delEleve(idEleve) {
                const rep = confirm('Voulez-vous confirmez la supression?');
                if (rep) {
                    try {
                        let repDel = await fetch(API_URL_ELEVE + '/' + idEleve, {
                            method: "DELETE",
                            headers: {
                                "content-type": "application/json",
                                'authorization': localStorage.getItem('token'),
                            }
                        });
                        if (repDel.ok) {
                            alert('Elève supprimé');
                            this.getListeEleves();
                        }
                        else {
                            if (repDel.status == 401) {
                                    alert('Vous n\'êtes plus connecté');
                                    this.$router.push('/admin');
                                }
                            else {
                                alert('Problème lors de la supression de l\'élève');
                            };
                        };
                    } catch (error) {
                        console.log(error);
                    };
                };
            },

            async getListeProfs() {
                try {
                    let repProf = await fetch(API_URL_PROF, {
                        headers: {
                            "content-type": "application/json",
                            'authorization': localStorage.getItem('token'),
                        }
                    });
                    if (repProf.ok) {
                        let data = await repProf.json();
                        this.listeProf = data.profs;
                        }
                    else {
                        if (repProf.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert("Le chargement des donnés n'a pas pu être fait");
                        };
                    };
                } catch (error) {
                    console.log(error);
                }
            },

            async putProf(id, prenom, nom, dateFinContrat) {
                await fetch(API_URL_PROF + '/' + id, {
                    method: "PUT",
                    body: JSON.stringify({
                        prenom: prenom,
                        nom: nom,
                        dateFinContrat : dateFinContrat
                    }),
                    headers: {
                        "content-type": "application/json",
                        'authorization': localStorage.getItem('token'),
                    }
                })
                .then(response => {
                    if (response.ok) {
                        alert("Prof mis à jour");
                        this.getListeProfs();
                    }
                    else {
                        if (response.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert('Problème lors de l\'ajout du professeur');
                        };
                    };
                })
                .catch((err) => {
                    console.log(err);
                });                    
            },

            async addProf() {
                await fetch(API_URL_PROF, {
                    method: "POST",
                    body: JSON.stringify(this.prof),
                    headers: {
                        "content-type": "application/json",
                        'authorization': localStorage.getItem('token'),
                    }
                })
                .then(response => {
                    if (response.ok) {
                        this.getListeProfs();
                        this.prof = {
                            email: "",
                            prenom: "",
                            nom: "",
                            mdp: ""
                        };
                        alert("Professeur ajouté");
                    }
                    else {
                        if (response.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert('Problème lors de l\'ajout du professeur');
                        };
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
            },

            async delProf(idProf) {
                const rep = confirm('Voulez-vous confirmez la supression?');
                if (rep) {
                    try {
                        let repDel = await fetch(API_URL_PROF + '/' + idProf, {
                            method: "DELETE",
                            headers: {
                                "content-type": "application/json",
                                'authorization': localStorage.getItem('token'),
                            }
                        });
                        if (repDel.ok) {
                            alert('Professeur supprimé');
                            this.getListeProfs();
                        }
                        else {
                            if (repDel.status == 401) {
                                    alert('Vous n\'êtes plus connecté');
                                    this.$router.push('/admin');
                                }
                            else {
                                alert('Problème lors de la supression du professeur');
                            };
                        };
                    } catch (error) {
                        console.log(error);
                    };
                };
            },

            async getListeAdmins() {
                try {
                    let repAdmin = await fetch(API_URL_ADMIN, {
                        headers: {
                        "content-type": "application/json",
                        'authorization': localStorage.getItem('token'),
                        }
                    });
                    if (repAdmin.ok) {
                        let data = await repAdmin.json();
                        this.listeAdmin = data.admins;
                    }
                    else {
                        if (repAdmin.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            console.log("Erreur du serveur");
                            alert("Le chargement des donnés n'a pas pu être fait");
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            },

            async putAdmin(id, prenom, nom) {
                await fetch(API_URL_ADMIN + '/' + id, {
                    method: "PUT",
                    body: JSON.stringify({
                        prenom: prenom,
                        nom: nom,
                    }),
                    headers: {
                    "content-type": "application/json",
                    'authorization': localStorage.getItem('token'),
                    }
                })
                .then(response => {
                    if (response.ok) {
                        alert("Admin mis à jour");
                        this.getListeAdmins();
                    }
                    else {
                        if (response.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert('Problème lors de la mise à jour de l\'administrateur');
                        }
                    };
                });
            },

            async addAdmin() {
                await fetch(API_URL_ADMIN + '/creer/' + this.idAdmin, {
                    method: "POST",
                    body: JSON.stringify(this.admin),
                    headers: {
                    'content-type': 'application/json',
                    'authorization': localStorage.getItem('token'),
                    },
                })
                .then((response) => {
                    if (response.ok) {
                        this.getListeAdmins();
                        this.admin = {
                            email: "",
                            prenom: "",
                            nom: "",
                            mdp: ""
                        };
                        alert("Administrateur ajouté");
                    }
                    else {
                        if (response.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                        else {
                            alert('Problème lors de l\'ajout');
                        };
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
            },

            async delAdmin(idAdminSuppr) {
                const rep = confirm('Voulez-vous confirmez la supression?');
                if (rep) {
                    try {
                        let repDel = await fetch(API_URL_ADMIN + '/' + idAdminSuppr + '/' + this.idAdmin, {
                            method: "DELETE",
                            headers: {
                            "content-type": "application/json",
                            'authorization': localStorage.getItem('token'),
                            }
                        });
                        if (repDel.ok) {
                            alert('Administrateur supprimé');
                            this.getListeAdmins();
                        }
                        else {
                            if (repDel.status == 401) {
                                alert('Vous n\'êtes plus connecté');
                                this.$router.push('/admin');
                            }
                            else {
                                alert('Problème lors de la supression de l\'administrateur (il doit toujours exister au moins un admin!)');
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