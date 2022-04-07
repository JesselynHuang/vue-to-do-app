/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router';
import ListTask from '../views/ListTask.vue';
import AddTask from '../views/AddTask.vue';

const routes = [
	{
		path: '/',
		name: 'List',
		component: ListTask,
	},
	{
		path: '/addtask',
		name: 'AddTask',
		component: AddTask,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
