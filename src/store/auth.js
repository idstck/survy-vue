import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useAuth = defineStore('auth-store', () => {
	const user = ref({});
	const authenticated = ref(false);

	const register = async function (credentials) {
		try {
			await axios.get('/sanctum/csrf-cookie');
			await axios.post('/register', credentials);
			authenticated.value = true;
			getUser();
		} catch (err) {
			user.value = {};
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	const login = async function (credentials) {
		try {
			await axios.get('/sanctum/csrf-cookie');
			await axios.post('/login', credentials);
			authenticated.value = true;
			getUser();
		} catch (err) {
			authenticated.value = false;
			user.value = {};
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	const logout = async function () {
		try {
			await axios.post('/logout');
			authenticated.value = false;
			user.value = {};
		} catch (err) {
			console.error('Error loading new arrivals:', err);
			return err;
		}
	};

	const getUser = async function () {
		try {
			const response = await axios.get('/api/user');
			const result = await response;
			user.value = response.data;
			console.log(user.value);
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
