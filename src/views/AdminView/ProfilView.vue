<template>
    <div>
        <nav>
            <router-link to="/loginAdmin">Gestion de la base de donnée</router-link>
            <router-link to="/profilAdmin">Mettre à jour votre profil</router-link>
        </nav>
        <button v-on:click='adminLogout()' class="deconnexion">Déconnexion</button>
        <hr>
        <div class="container">
            <form @submit.prevent="putAdmin">
                <h4>Formulaire pour mettre à jour tes informations:</h4>
                <input v-model="emailPut" type="email" placeholder="Entrer un email">
                <input v-model="mdpPut" type="password" placeholder="Entrer un mot de passe">
                <button type="submit">Mettre à jour</button>
            </form>
        </div>
    </div>
</template>

<script>

const SERV = 'http://localhost:4000/';
const API_URL_ADMIN = SERV + 'admin';

export default {
    name: 'admin',
    data: () => ({
        idAdmin: localStorage.getItem('id'),
        emailPut: null,
        mdpPut: null,
    }),
    methods: {
        adminLogout() {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.clear();
            this.$router.push('/admin');
        },

        async putAdmin() {
            await fetch(API_URL_ADMIN + '/' + this.idAdmin, {
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
                    alert('Informations mises à jour!');
                }
                else {
                    if (response.status == 401) {
                            alert('Vous n\'êtes plus connecté');
                            this.$router.push('/admin');
                        }
                    else {
                        alert('Problème lors de la mise à jour de l\'administrateur');
                    };
                };
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
}

</script>

<style scoped>
/* CSS Formulaire ##########################################################*/
.container{
    width:400px;
    margin:auto;
    margin-top: 5%;
}
/* Bordered form */
form {
    margin: auto;
    width:100%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.container h1{
    width: 60%;
    margin: 0 auto;
    padding-bottom: 10px;
}

/* Full-width inputs */
form input[type=text], form input[type=password], form input[type="email"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
form button[type=submit] {
    background-color: #535ef7;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: 1px solid #535ef7;
    cursor: pointer;
    width: 100%;
}
form button[type=submit]:hover {
    background-color: white;
    color: #6cd5ff;
    border: 1px solid #6cd5ff;
}
/* CSS Formulaire ##########################################################*/
</style>