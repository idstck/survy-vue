<template>
	<div
		class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
	>
		<div class="max-w-md w-full space-y-8">
			<div>
				<img
					class="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
					alt="Workflow"
				/>
				<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Register
				</h2>
			</div>
			<form class="mt-8 space-y-6" action="#" @submit.prevent="register">
				<div class="rounded-md shadow-sm -space-y-px">
					<div>
						<label for="full-name" class="sr-only">Full Name</label>
						<input
							id="full-name"
							name="name"
							type="text"
							autocomplete="name"
							required=""
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Full Name"
							v-model="user.name"
						/>
					</div>
					<div>
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="email"
							required=""
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Email address"
							v-model="user.email"
						/>
					</div>
					<div>
						<label for="password" class="sr-only">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required=""
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Password"
							v-model="user.password"
						/>
					</div>
					<div>
						<label for="password" class="sr-only">Retype Password</label>
						<input
							id="password"
							name="password_confirmation"
							type="password"
							autocomplete="current-password"
							required=""
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Retype Password"
							v-model="user.password_confirmation"
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Register
					</button>
				</div>
				<div class="text-center">
					<div class="text-sm">
						<router-link
							:to="{ name: 'Login' }"
							class="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Already have an account? Login Here
						</router-link>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue';

const user = reactive({
	name: '',
	email: '',
	password: '',
	password_confirmation: '',
});

const register = async () => {
	alert(`
        name: ${user.name} 
        email: ${user.email} 
        password: ${user.password}
        password_confirmation: ${user.password_confirmation}
    `);
};
</script>
