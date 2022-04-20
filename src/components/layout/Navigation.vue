<template>
	<Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<img
							class="h-8 w-8"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
							alt="Workflow"
						/>
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<router-link
								v-for="item in navigation"
								:key="item.name"
								:to="item.to"
								:class="[
									this.$router.name === item.to.name
										? ''
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'px-3 py-2 rounded-md text-sm font-medium',
								]"
								active-class="bg-gray-900 text-white"
								:aria-current="item.current ? 'page' : undefined"
							>
								{{ item.name }}
							</router-link>
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-4 flex items-center md:ml-6">
						<!-- Profile dropdown -->
						<Menu as="div" class="ml-3 relative">
							<div>
								<MenuButton
									class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span class="sr-only">Open user menu</span>
									<img
										class="h-8 w-8 rounded-full"
										:src="user.imageUrl"
										alt=""
									/>
								</MenuButton>
							</div>
							<transition
								enter-active-class="transition ease-out duration-100"
								enter-from-class="transform opacity-0 scale-95"
								enter-to-class="transform opacity-100 scale-100"
								leave-active-class="transition ease-in duration-75"
								leave-from-class="transform opacity-100 scale-100"
								leave-to-class="transform opacity-0 scale-95"
							>
								<MenuItems
									class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								>
									<MenuItem>
										<a
											@click="logout"
											href="#"
											class="block px-4 py-2 text-sm text-gray-700"
										>
											Logout
										</a>
									</MenuItem>
								</MenuItems>
							</transition>
						</Menu>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<DisclosureButton
						class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
						<span class="sr-only">Open main menu</span>
						<MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
						<XIcon v-else class="block h-6 w-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
			</div>
		</div>

		<DisclosurePanel class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<router-link
					v-for="item in navigation"
					:key="item.name"
					as="a"
					:to="item.to"
					active-class="bg-gray-900 text-white"
					:class="[
						this.$route.name !== item.to.name
							? ''
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block px-3 py-2 rounded-md text-base font-medium',
					]"
					:aria-current="item.current ? 'page' : undefined"
				>
					{{ item.name }}
				</router-link>
			</div>
			<div class="pt-4 pb-3 border-t border-gray-700">
				<div class="flex items-center px-5">
					<div class="flex-shrink-0">
						<img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
					</div>
					<div class="ml-3">
						<div class="text-base font-medium leading-none text-white">
							{{ user.name }}
						</div>
						<div class="text-sm font-medium leading-none text-gray-400">
							{{ user.email }}
						</div>
					</div>
				</div>
				<div class="mt-3 px-2 space-y-1">
					<DisclosureButton
						as="a"
						href="#"
						@click="logout"
						class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
						>Logout</DisclosureButton
					>
				</div>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script>
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../../store/auth';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
	{ name: 'Dashboard', to: { name: 'Dashboard' } },
	{ name: 'Survey', to: { name: 'Survey' }  },
];

export default {
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		BellIcon,
		MenuIcon,
		XIcon,
	},

	setup() {
		const router = useRouter();
		const auth = useAuth();

		const logout = async () => {
			await auth.logout();
			router.replace({
				name: 'Login',
			});
		};

		return {
			user,
			navigation,
			logout,
		};
	},
};
</script>

<style></style>
