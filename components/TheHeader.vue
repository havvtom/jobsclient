<template>
	<header class="py-6 flex justify-between items-center bg-gray-200 sm:bg-white">
		<Snack/>
		<div>
			<nuxt-link
				:to="{ name: 'index' }"
				exact-active-class="text-blue-500"
			>
				Jobs
			</nuxt-link>
		</div>
		<div class="sm:-mx-4 flex">
			<a href="" class="mx-4 font-bold">{{ $auth.user.name }}</a>
			<div class="hidden sm:block ">
				<nuxt-link :to="goTo" class="mx-4">Post a Job</nuxt-link>
				<template v-if="$auth.loggedIn">
					<nuxt-link class="mx-4" :to="{ name: 'tags-create' }" v-if="$auth.user.email == 'havvtom@gmail.com'">Add Tags</nuxt-link>
					
					<nuxt-link :to="{ name:'user-listings' }" class="mx-4">Manage Listings</nuxt-link>
					<a href="" @click.prevent="signOut" class="mx-4">Logout</a>
				</template>
				<template v-else>
					<nuxt-link :to="{ name:'login' }" class="mx-4" exact-active-class="text-blue-500">
						Login
					</nuxt-link>
				</template>
			</div>	
			<div class="sm:hidden">
				<div class="relative">
					<svg xmlns="http://www.w3.org/2000/svg" v-if="!isOpen" @click="isOpen = true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 text-gray-900 mr-1">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" v-else @click="isOpen=false" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 text-gray-900 mr-1">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>

					<ul v-show="isOpen" v-click-outside="hide" @click=" isOpen = !isOpen " class="bg-white shadow-xl absolute top-10 right-0 rounded overflow-hidden z-50 w-40 mt-2 mr-2">
						<li>
							<nuxt-link :to="goTo" class="mx-4">Post a Job</nuxt-link>
						</li>
						<template v-if="$auth.loggedIn">
							<li>
								<nuxt-link class="block p-2 px-4 text-sm text-gray-800 hover:bg-gray-100" 
								:to="{ name: 'tags-create' }" 
								v-if="$auth.user.email == 'havvtom@gmail.com'">
									Add Tags
								</nuxt-link>
							</li>							
							<li>
								<nuxt-link 
									:to="{ name:'user-listings' }" 
									class="block p-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
								>
									Manage Listings
								</nuxt-link>					
							</li>
							<li>
								<a 
									href="" 
									@click.prevent="signOut" 
									class="block p-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
								>
									Logout
								</a>
							</li>
						</template>
						<template v-else>
							<li>
								<nuxt-link 
									:to="{ name:'login' }" 
									class="block p-2 px-4 text-sm text-gray-800 hover:bg-gray-100"		
								>
									Login
								</nuxt-link>
							</li>
						</template>
					</ul>
				</div>
			</div>
			
		</div>
	</header>
</template>

<script type="text/javascript">
	import ClickOutside from 'vue-click-outside'
	export default {
		data () {
			return {
				isOpen: false
			}
		},
		computed: {
			goTo () {
				if( this.$auth.loggedIn ) {
					return {
						name: 'jobs-create'
					}
				}
				return {
					name: 'jobs-account'
				}
			}
		},
		methods: {	
			async signOut () {
				await this.$auth.logout()
				this.$router.push({name:'index'})
			},
			hide () {
				this.isOpen = false
			}
		},
		directives: {
		    ClickOutside
		  }
	}
</script>