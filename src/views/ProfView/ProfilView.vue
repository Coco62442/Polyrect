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

const SERV = top.glob.serv;

const API_URL_PROF = SERV + 'prof';


export default {

    name: 'profProfil',
    data: () => ({
        id: localStorage.getItem('idProf'),
        emailPut: null,
        mdpPut: null,
        prof: [],
        error: '',
    }),
    methods: {
        profLogout() {
            localStorage.removeItem('tokenProf');
            localStorage.removeItem('idProf');
            localStorage.clear();
            this.$router.push('/prof');
			top.glob.toast("Vous êtes déconnecté", "info");
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
                    'authorization': localStorage.getItem('tokenProf'),
                }
            })
            .then(response => {
                if (response.ok) {
                    top.glob.toast("Professeur mis à jour", "success");
                }
                else {
                    if (response.status == 401) {
                        this.$router.push('/prof');
						top.glob.toast("Vous êtes déconnecté", "info");
                    }
                    else {
                        top.glob.toast('Les informations n\'ont pas pu être mises à jour', "warning");
                    };
                };
            })
            .catch((err) => {
                console.log(err);
				top.glob.toast("Erreur", "warning");
            });
        },
    },
};

</script>