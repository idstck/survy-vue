<template>
	<Header>
		Survey
		<template v-slot:button>
			<router-link
				to="#"
				class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 -mt-1 inline-block"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 4v16m8-8H4"
					/>
				</svg>
				Add Survey
			</router-link>
		</template>
	</Header>

	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<SurveyContent />
		</div>
	</main>
</template>

<script>
import Header from '../components/layout/Header.vue';
import SurveyContent from '../components/survey/SurveyContent.vue';

export default {
	components: {
		Header,
		SurveyContent,
	},
};
</script>
