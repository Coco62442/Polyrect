<template>
	<router-view/>
</template>

<script>
// IMPORT pour les Toasts
import { defineComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default defineComponent({
  name: 'toast',
  setup () {
    const toast = (message, type) => {
        createToast(message, {
			type: type
		})
    }
	// Enregistrement dans une variable global l'url du serveur et le toast
	top.glob = {
		'serv': 'https://polyrecte-serveur.herokuapp.com/',
		'toast': toast
	};
    return { toast }
  }

})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a, a:visited, a:hover {
	color: rgb(61, 39, 80);
}

a:focus {
	color: #9147ff;
}

nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  margin: 2%;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
    background: #EEEEEE;
}

body * {
	margin: 1vh;
}

/* CSS Formulaire ##########################################################*/
#container{
    width:400px;
    margin:0 auto;
    margin-top:10%;
}
/* Bordered form */
.form {
    margin: auto;
    width:40%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    border-radius: 20px;
    background: rgb(199, 199, 199);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.container h1{
    width: 38%;
    margin: 0 auto;
    padding-bottom: 10px;
}

/* Full-width inputs */
.form input[type=text], .form input[type=password], .form input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid rgb(215, 221, 226);
    box-sizing: border-box;
	background-color: rgb(232, 236, 243);
}

/* Set a style for all buttons */
.form button {
    background-color: #535ef7;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: 1px solid #535ef7;
    cursor: pointer;
    width: 100%;
}
.form button:hover {
    background-color: rgb(157, 151, 211);
    color: #6cd5ff;
    border: 1px solid #6cd5ff;
}
/* CSS Formulaire ##########################################################*/
/* CSS <button> Deconnexion ################################################*/
.deconnexion {
	display: inline-block;
	outline: none;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	font-weight: 600;
	border-radius: 8px;
	padding: 14px 24px;
	border: none;
	transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
	background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
	color: #fff;
}
/* CSS <button> Deconnexion ################################################*/
/* CSS <input> No login and add ############################################*/
.input{
	font-size: 13px;
	border-radius: 4px;
	line-height: 1.5;
	padding: 5px 10px;
	transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
	border: 2px solid #dee1e2;
	color: rgb(14, 14, 16);
	background: #dee1e2;
}
.input:hover {
	border-color: #9147ff;
}
.input:focus{
	border-color: #9147ff;
	background: #fff;
}
/* CSS <input> No login and add ############################################*/
</style>
