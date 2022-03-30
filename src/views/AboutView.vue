<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="about">
      <h1>About Polyrecte</h1>
    </div>

	<h4>Polyrecte est un projet web réalisé en quelques semaines</h4>
	
	<p>
		C'est simplement un espace de type "Ecole Directe" ou "Pronote".
	</p>
	<p>
		C'est-à-dire, un espace où les élèves inscrient peuvent accéder à leurs notes dans leurs matières ainsi que leurs moyennes et leurs absences.
		Les professeurs peuvent gérer l'ajout, la modification des notes pour les élèves ainsi que l'ajout et la modification des absences.
		Enfin, les admins eux permettent de gérer la base de donnée des élèves, des professeurs, des matières et des administrateurs.
	</p>
	<p>
		Réalisé par Corentin CLEMENT dans le cadre d'un rendu de projet universitaire à Polytech Montpellier en 1ère année d'informatique et gestion.
	</p>
</template>

<style scoped>
h4 {
	margin-top: 4%;
}

p {
	margin: 3%;
}
</style>
