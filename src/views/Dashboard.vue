<template>
	<div class="min-h-full">
		<Navigation />

		<Header> Dashboard </Header>

		<main>
			<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<DashboardContent />
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from '../components/layout/Navigation.vue';
import Header from '../components/layout/Header.vue';
import DashboardContent from '../components/dashboard/DashboardContent.vue';

export default {
	components: {
		Navigation,
		Header,
		DashboardContent,
	},
};
</script>
