<template>
	<header class="py-6 flex justify-between items-center">
		<div>
			<nuxt-link
				:to="{ name: 'index' }"
				exact-active-class="text-blue-500"
			>
				Jobs
			</nuxt-link>
		</div>
		<div class="-mx-4">
			<nuxt-link :to="goTo" class="mx-4">Post a Job</nuxt-link>
			<template v-if="$auth.loggedIn">
				<a href="" class="mx-4 font-bold">{{ $auth.user.name }}</a>
				<nuxt-link :to="{ name:'user-listings' }" class="mx-4">Manage Listings</nuxt-link>
				<a href="" @click.prevent="signOut" class="mx-4">Logout</a>
			</template>
			<template v-else>
				<nuxt-link :to="{ name:'login' }" class="mx-4" exact-active-class="text-blue-500">
					Login
				</nuxt-link>
			</template>
			
			
		</div>
	</header>
</template>

<script type="text/javascript">
	export default {
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
			}
		}
	}
</script>