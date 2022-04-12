import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useAuth = defineStore('auth-store', () => {
	const user = ref(null);

	const register = async function (credentials) {
		try {
			await axios.get('/sanctum/csrf-cookie');
			await axios.post('/register', credentials);
			getUser();
		} catch (err) {
			user.value = null;
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	const login = async function (credentials) {
		try {
			await axios.get('/sanctum/csrf-cookie');
			await axios.post('/login', credentials);
			getUser();
		} catch (err) {
			authenticated.value = false;
			user.value = null;
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	const logout = async function () {
		try {
			await axios.post('/logout');
			user.value = null;
		} catch (err) {
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	const getUser = async function () {
		try {
			const response = await axios.get('/api/user');
			user.value = response.data;
		} catch (err) {
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	return {
		user,
		register,
		login,
		getUser,
		logout,
	};
});
