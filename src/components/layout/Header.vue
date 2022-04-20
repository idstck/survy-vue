<template>
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center">
				<h1 class="text-3xl font-bold text-gray-900">
					<slot></slot>
				</h1>
				<slot name="button"></slot>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style></style>
