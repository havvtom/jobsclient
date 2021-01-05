<template>
	<form class="w-10/12 sm:w-6/12 mx-auto" v-else @submit.prevent="createAccount">
				<div class="mb-10">
					<h2 class="mb-4 text-2xl font-bold">Create an account to manage your listings or 
						<nuxt-link class="text-blue-500" :to="{ name: 'login' }">login</nuxt-link> if you already have an account
					</h2>
					<div class="mb-8 bg-gray-400 p-6 rounded-lg">
						<div class="mb-4">
							<label 
								class="mb-1 inline-block font-medium"
								:class="{ 'text-red-500':createAccountValidation.email }"
							>
								Email
							</label>
							<input 
								type="text" 
								name="" 
								class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
								:class="{ 'border-red-500':createAccountValidation.email }"
								v-model="createAccountForm.email"
							>
							<div v-if="createAccountValidation.email" class="mt-1 text-sm text-red-500">
								{{ createAccountValidation.email[0] }}
							</div>
						</div>
						<div class="mb-4">
							<label 
								class="mb-1 inline-block font-medium"
								:class="{ 'text-red-500':createAccountValidation.name }"
							>
								Name
							</label>
							<input 
								type="name" 
								name="" 
								class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
								:class="{ 'border-red-500':createAccountValidation.name }"
								v-model="createAccountForm.name"
							>
							<div v-if="createAccountValidation.name" class="mt-1 text-sm text-red-500">
								{{ createAccountValidation.name[0] }}
							</div>
						</div>
						<div class="mb-4">
							<label 
								class="mb-1 inline-block font-medium"
								:class="{ 'text-red-500':createAccountValidation.password }"
							>
								Password
							</label>
							<input 
								type="password" 
								name="" 
								class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
								:class="{ 'border-red-500':createAccountValidation.password }"
								v-model="createAccountForm.password"
							>
							<div v-if="createAccountValidation.password" class="mt-1 text-sm text-red-500">
								{{ createAccountValidation.password[0] }}
							</div>
						</div>
					</div>
					<button type="submit" class="p-2 bg-blue-500 text-white font-medium text-white uppercase w-full rounded-lg">
						Create an account
					</button>
				</div>
			</form>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				createAccountForm: {
					email: '',
					name:'',
					password: '',
				},
				createAccountValidation: {}
			}
		},
		methods: {
			async createAccount () {
				try {
					let response = await this.$axios.post('user', this.createAccountForm)
					this.$auth.loginWith( 'local', {
						data: {
							email: this.createAccountForm.email,
							password: this.createAccountForm.password
						}
					} ).then( () => {
						this.$router.push("/jobs/create")
						this.createAccountForm = {}						
					} )
					 
					// console.log(response.data.data)

				} catch (e) {
					if( e.response.status === 422 ){
						this.createAccountValidation = e.response.data.errors
					}
				}
			},
		}

	}
</script>