import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('../views/StartView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/eleve',
    name: 'homeEleve',
    component: () => import('../views/EleveView/HomeEleveView.vue'),
  },
  {
    path: '/loginEleve',
    name: 'loginEleve',
    component: () => import('../views/EleveView/EleveView.vue'),
  },
  {
    path: '/prof',
    name: 'homeProf',
    component: () => import('../views/ProfView/HomeProfView.vue'),
  },
  {
    path: '/loginProf',
    name: 'ajoutNote',
    component: () => import('../views/ProfView/ProfView.vue'),
  },
  {
    path: '/profilProf',
    name: 'profilProf',
    component: () => import('../views/ProfView/ProfilView.vue'),
  },
  {
    path: '/modifNote',
    name: 'modifNote',
    component: () => import('../views/ProfView/ModifNoteView.vue'),
  },
  {
    path: '/ajoutAbsence',
    name: 'ajoutAbsence',
    component: () => import('../views/ProfView/AjoutAbsencesView.vue'),
  },
  {
    path: '/modifAbsence',
    name: 'modifAbsence',
    component: () => import('../views/ProfView/ModifAbsenceView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView/HomeAdminView.vue'),
  },
  {
    path: '/loginAdmin',
    name: 'loginAdmin',
    component: () => import('../views/AdminView/AdminView.vue'),
  },
  {
    path: '/profilAdmin',
    name: 'profilAdmin',
    component: () => import('../views/AdminView/ProfilView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
