<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 2%;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
    background: #c7c7c7;
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
    background: #fff;
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
    border: 1px solid #ccc;
    box-sizing: border-box;
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
    background-color: white;
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
