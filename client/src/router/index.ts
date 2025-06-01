import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from "/src/views/MainView.vue";
import BooksView from "/src/views/BooksView.vue";
import BookShowcaseView from "/src/views/BookShowcaseView.vue";
import LoginView from "/src/views/LoginView.vue";
import RegistrationView from "/src/views/RegistrationView.vue";
import ProjectsView from "/src/views/ProjectsView.vue";
import ProjectView from "/src/views/ProjectView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component:MainView,
    meta: { layout: 'auth' }
  },
  {
    path: '/books',
    name: 'books',
    component:BooksView,
    meta: { layout: 'main' }
  },
  {
    path: '/book/:book_id',
    name: 'book',
    component:BookShowcaseView,
    meta: { layout: 'auth' }
  },
  {
    path: '/login',
    name: 'login',
    component:LoginView,
    meta: { layout: 'auth' }
  },
  {
    path: '/registration',
    name: 'registration',
    component:RegistrationView,
    meta: { layout: 'auth' }
  },
  {
    path: '/projects',
    name: 'projects',
    component:ProjectsView,
    meta: { layout: 'main' }
  }, {
    name: 'project',
    path: "/project/:project_id",
    component: ProjectView,
    meta: { layout: 'main' }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
