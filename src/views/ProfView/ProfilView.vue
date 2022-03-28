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
		<div class="container">
			<h4>Formulaire pour mettre à jour tes informations:</h4>
			<form @submit.prevent="putProf" class="form">
			<div>
			<label for="emailPut">Email</label>
			<input v-model="emailPut" type="email" placeholder="Entrer un email">
			</div>
			<div>
			<label for="mdpPut">Mot de passe</label>
			<input v-model="mdpPut" type="password" placeholder="Entrer un mot de passe">
			</div>
			<button type="submit">Mettre à jour</button>
			</form>
		</div>
    </div>
</template>

<script>

const SERV = 'http:localhost/4000/';

const API_URL_PROF = SERV + 'prof';


export default {

    name: 'profProfil',
    data: () => ({
        id: localStorage.getItem('id'),
        emailPut: null,
        mdpPut: null,
        prof: [],
        error: '',
    }),
    methods: {
        profLogout() {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.clear();
            this.$router.push('/prof');
        },

        async putProf() {
            await fetch(API_URL_PROF + '/' + this.id, {
                method: "PUT",
                body: JSON.stringify({
                    email: this.emailPut,
                    mdp: this.mdpPut
                }),
                headers: {
                    'content-type': 'application/json',
                    'authorization': localStorage.getItem('token'),
                }
            })
            .then(response => {
                if (response.ok) {
                    response.json()
                    .then(result => {
                        if (result.details) {
                            // there was an error...
                            const error = result.details
                            .map(detail => detail.prof)
                            .join(". ");
                            this.error = error;
                        } else {
                            this.error = "";
                            this.showProfForm = false;
                            this.profs.push(result);
                        }
                    });
                }
                else {
                    if (response.status == 401) {
                        alert('Vous n\'êtes plus connecté');
                        this.$router.push('/prof');
                    }
                    else {
                        alert('Les informations n\'ont pas pu être mises à jour');
                    };
                };
            })
            .catch((err) => {
                console.log(err);
            });
        },
    },
};

</script>