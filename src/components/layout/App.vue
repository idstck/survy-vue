<template>
	<div class="min-h-full">
		<Navigation />
		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	components: {
		Navigation,
	},
};
</script>
