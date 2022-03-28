<template>

    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <button class="start" v-on:click='eleve()'>Eleve</button>
        <button class="start" v-on:click='prof()'>Professeur</button>
        <button class="start" v-on:click='admin()'>Admin</button>
    </div>
</template>
        

<script>
    export default {
        methods: {
            async eleve() {
            this.$router.push('./eleve');
            },
            async prof() {
                this.$router.push('./prof');
            },
            async admin() {
                this.$router.push('./admin');
            }
    }
    }
</script>

<style scoped>

.start {
	display: inline-block;
	outline: none;
	cursor: pointer;
	font-size: 14px;
	line-height: 1;
	border-radius: 500px;
	transition-property: background-color,border-color,color,box-shadow,filter;
	transition-duration: .3s;
	border: 1px solid transparent;
	letter-spacing: 2px;
	min-width: 160px;
	text-transform: uppercase;
	white-space: normal;
	font-weight: 700;
	text-align: center;
	padding: 16px 14px 18px;
	color: #616467;
	box-shadow: inset 0 0 0 2px #616467;
	background-color: transparent;
	height: 48px;
}

.start:hover{
	color: #fff;
	background-color: #616467;
}
                
</style>

