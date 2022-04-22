<template>
	<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
		<SurveyListItem 
			v-for="survey in data" 
			:key="survey.id" 
			:survey="survey" />
	</div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted } from '@vue/runtime-core';
import { useSurvey } from '../../store/survey';
import SurveyListItem from './SurveyListItem.vue';

const survey = useSurvey();
survey.getSurveys();

let data = computed(() => survey.surveys.data);
</script>

<style></style>
