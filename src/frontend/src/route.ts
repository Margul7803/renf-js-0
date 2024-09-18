import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Home.vue';
import AddTaskPage from './pages/AddTask.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/add-tasks', component: AddTaskPage, name: 'tasks' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
