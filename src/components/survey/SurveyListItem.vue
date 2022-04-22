<template>
	<div
		class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px] rounded-lg"
	>
		<img :src="survey.image" alt="#" class="w-full h-48 object-cover" />
		<h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
		<div v-html="survey.description" class="overflow-hidden flex-1"></div>

		<div class="flex justify-between items-center mt-3">
			<router-link
				to="#"
				class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
					/>
				</svg>
				Edit
			</router-link>
			<button
				@click="emit('delete', survey)"
				class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 -mt-1 inline-block"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
const { survey } = defineProps({
	survey: Object,
});

const emit = defineEmits(['delete']);
</script>

<style></style>
