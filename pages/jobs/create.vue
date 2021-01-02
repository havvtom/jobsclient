<template>
	<div>
		<form class="w-6/12 mx-auto" v-if="$auth.user" @submit.prevent="createJob">
			<div class="mb-10">
				<h2 class="mb-4 text-2xl font-bold">Listing Details</h2>
				<div class="mb-4">
					<label 
						class="mb-1 inline-block font-medium"
						:class="{ 'text-red-500':validation.job_title }"
					>
						Job Title
					</label>
					<input 
						type="text" 
						name="" 
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
						:class="{ 'border-red-500':validation.job_title }"
						placeholder="Software Engineer" 
						v-model="form.job_title"
					>
					<div v-if="validation.title" class="mt-1 text-sm text-red-500">
						{{ validation.title[0] }}
					</div>
				</div>
				<div class="mb-4">
					<label 
						class="mb-1 inline-block font-medium"
						:class="{ 'text-red-500':validation.title }"
					>
						Job Location
					</label>
					<input 
						type="text" 
						name="" 
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
						:class="{ 'border-red-500':validation.job_location }"
						v-model="form.job_location"
					>
					<div v-if="validation.job_location" class="mt-1 text-sm text-red-500">
						{{ validation.job_location[0] }}
					</div>
				</div>
				<div class="mb-4">
					<label 
						class="mb-1 inline-block font-medium"
						:class="{ 'text-red-500':validation.job_link }"
					>
						Job Application URL
					</label>
					<input 
						type="text" 
						name="" 
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
						:class="{ 'border-red-500':validation.job_link }"
						v-model="form.job_link"
					>
					<div v-if="validation.job_link" class="mt-1 text-sm text-red-500">
						{{ validation.job_link[0] }}
					</div>
				</div>
				<div class="mb-4">
					<label 
						class="mb-1 inline-block font-medium"
						:class="{ 'text-red-500':validation.tags }"
					>
						Tags
					</label>
					<v-select inputId="tags" :options="tags" label="title" :reduce="tag => tag.id" multiple v-model="form.tags" class="border-2 border-gray-200 rounded-lg" :class="{ 'border-red-500':validation.tags }"></v-select>
					
					<div v-if="validation.tags" class="mt-1 text-sm text-red-500">
						{{ validation.tags[0] }}
					</div>
				</div>
				<div class="mb-4">
					<label 
						class="mb-1 inline-block font-medium"
						:class="{ 'text-red-500':validation.company_name }"
					>
						Company Name
					</label>
					<input 
						type="text" 
						name="" 
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
						:class="{ 'border-red-500':validation.company_name }"
						v-model="form.company_name"
					>
					<div v-if="validation.company_name" class="mt-1 text-sm text-red-500">
						{{ validation.company_name[0] }}
					</div>
				</div>
				<div class="mb-4">
					<label 
						class="mb-1 inline-block font-medium"
						:class="{ 'text-red-500':validation.company_logo }"
					>
						Company Logo URL
					</label>
					<input 
						type="text" 
						name="" 
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
						:class="{ 'border-red-500':validation.company_logo }"
						v-model="form.company_logo"
					>
					<div v-if="validation.company_logo" class="mt-1 text-sm text-red-500">
						{{ validation.company_logo[0] }}
					</div>
				</div>
				<div class="mb-4">
					<input type="checkbox" v-model="form.highlited" id="highlited">
					<label for="highlited">Highlite Listing</label>
				</div>
				<div class="mb-4">
					<input type="checkbox" v-model="form.pinned" id="pinned">
					<label for="pinned">Pinned</label>
				</div>			
				<button type="submit" class="p-2 bg-blue-500 text-white font-medium text-white uppercase w-full rounded-lg">
					Create Listing
				</button>
			</div>
		</form>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				tags: [],
				
				form: {
					job_title: '',
					job_location: '',
					job_link: '',
					tags: [],
					company_name: '',
					company_logo: '',					
					highlited: '',
					pinned: '',
					user_id: this.$auth.user.id

				},
				validation: {},
				
			}
		},
		methods: {
			
			async createJob () {
				try {
					let response = await this.$axios.post('jobs', this.form)
					this.$router.push({ name: 'index' })
					this.form = {}
					// console.log(response.data)

				} catch (e) {
					if( e.response.status === 422 ) {
						this.validation = e.response.data.errors
					}

				}
			}
		},		
		async asyncData({ app }){
			let response = await app.$axios.get('tags')

			return {
				tags: response.data.data
			}
		}
	}
</script>