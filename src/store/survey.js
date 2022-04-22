import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useSurvey = defineStore('survey-store', () => {
	const surveys = ref([]);

	const getSurveys = async () => {
		try {
			surveys.value.loading = true;
			const result = await axios.get(`/api/survey`);
			surveys.value.data = await result.data.data;
			surveys.value.loading = false;
			return result.data.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const deleteSurvey = async (id) => {
		try {
			return axios.delete(`/api/survey/${id}`);
		} catch (error) {
			throw error.response;
		}
	};

	return {
		surveys,
		getSurveys,
		deleteSurvey,
	};
});
