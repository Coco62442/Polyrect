<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        
        <div class="container">
            <h1>Portail Administrateur</h1>
            <form @submit.prevent="redirect()" class="form">
                <label><b>Nom d'utilisateur</b></label>
                <input v-model="loginEmail" type="text" placeholder="Entrer le nom d'utilisateur" name="email" required>

                <label><b>Mot de passe</b></label>
                <input v-model="loginMdp" type="password" placeholder="Entrer le mot de passe" name="mdp" required>

                <button type="submit" id='submit'>Login</button>
            </form>
        </div>
    </div>
</template>

<script>
	const SERV = top.glob.serv;
    const API_URL = SERV + 'admin';

    export default {
        name: 'homeAdmin',
        data: () => ({
            loginEmail: '',
            loginMdp: ''
        }),
        methods: {
            async redirect() {
                try {
                    let repAdminLogin = await fetch(API_URL + '/login', {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'}, 
                        body: JSON.stringify({
                            email: this.loginEmail,
                            mdp: this.loginMdp,
                        })
                    });
                    if (repAdminLogin.ok) {
                        repAdminLogin = await repAdminLogin.json();
                        this.$router.push('./loginAdmin');
						top.glob.toast("Vous êtes connecté", "info");
                        localStorage.setItem('idAdmin', repAdminLogin._id);
                        localStorage.setItem('tokenAdmin', repAdminLogin.token);
                    }
                    else {
                        top.glob.toast('Mot de passe ou identifiant incorrect', 'default');
                    }
                }
                catch {
                    top.glob.toast('Erreur du serveur', 'danger');
                }
            },
        }
    };
</script>