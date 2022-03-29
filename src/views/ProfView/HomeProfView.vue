<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        
        <div class="container">
            <h1>Portail Professeur</h1>
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

    const SERV = top.glob;
	const API_URL = SERV + 'prof';

    export default {
        name: 'homeProf',
        data: () => ({
            loginEmail: '',
            loginMdp: ''
        }),
        methods: {
            async redirect() {
                try {
                    let repProfLogin = await fetch(API_URL + '/login', {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'}, 
                        body: JSON.stringify({
                            email: this.loginEmail,
                            mdp: this.loginMdp,
                        })
                    });
                    
                    if (repProfLogin.ok) {
                    repProfLogin = await repProfLogin.json();
                    this.$router.push('./loginProf');
                    localStorage.setItem('idProf', repProfLogin._id);
                    localStorage.setItem('tokenProf', repProfLogin.token);
                    }
                    else {
                    alert('Mot de passe ou identifiant incorrect');
                    }
                }
                catch {
                    alert('Erreur du serveur');
                }
            },
        }
    };
</script>