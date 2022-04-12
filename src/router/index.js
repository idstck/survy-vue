import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../store/auth';

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
		meta: {
			requireAuth: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			authPage: true
		},
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			authPage: true
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	if (to.meta.requireAuth) {
		const auth = useAuth();
		await auth.getUser()
		if (auth.user) {
			next()
		} else {
			next({
				name: 'Login'
			})
		}
	}

	if (to.meta.authPage) {
		const auth = useAuth();
		await auth.getUser()
		if (!auth.user) {
			next()
		} else {
			next(from)
		}
	}

	
})

export default router;
