<template>
	<div class="mt-10 flex justify-center">
		<form class="w-10/12 sm:w-6/12" @submit.prevent="submit">
			<h2 class="mb-4 text-2xl font-bold">Login</h2>
			<div class="mb-4">
				<label 
					class="mb-1 inline-block font-medium"
					:class="{ 'text-red-500':validation.email }"
				>
					Email
				</label>
				<input 
					type="email" 
					name="" 
					class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
					:class="{ 'border-red-500':validation.email }"
					placeholder="you@email.com" 
					v-model="form.email"
				>
				<div v-if="validation.email" class="mt-1 text-sm text-red-500">
					{{ validation.email[0] }}
				</div>
			</div>
			<div class="mb-4">
				<label 
					class="mb-1 inline-block font-medium"
					:class="{ 'text-red-500':validation.password }"
				>
					Password
				</label>
				<input 
					type="password" 
					name="" 
					class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
					:class="{ 'border-red-500':validation.password }"
					v-model="form.password"
				>
				<div v-if="validation.password" class="mt-1 text-sm text-red-500">
					{{ validation.password[0] }}
				</div>
			</div>
			<button type="submit" class="p-2 bg-blue-500 text-white font-medium text-white uppercase w-full rounded-lg">
				Login
			</button>
		</form>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				form: {
					email: '',
					password: ''
				},
				validation: {}
			}
		},
		methods: {
			async submit () {
				try {
					await this.$auth.loginWith( 'local', {
					data: this.form
					} )
				} catch (e) {
					if(e.response.status ===422) {
						this.validation = e.response.data.errors
					}
				}
				
			}
		}
	}
</script>