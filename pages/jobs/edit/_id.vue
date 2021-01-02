<template>
	<div>
		{{ job }}
		<form class="w-6/12 mx-auto" v-if="$auth.user" @submit.prevent="updateJob">
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
						v-model="job.job_title"
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
						v-model="job.job_location"
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
						v-model="job.job_link"
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
					<v-select inputId="tags" :options="tags" label="title" :reduce="tag => tag.id" multiple v-model="job.tags" class="border-2 border-gray-200 rounded-lg" :class="{ 'border-red-500':validation.tags }"></v-select>
					
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
						v-model="job.company_name"
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
						v-model="job.company_logo"
					>
					<div v-if="validation.company_logo" class="mt-1 text-sm text-red-500">
						{{ validation.company_logo[0] }}
					</div>
				</div>
				<div class="mb-4">
					<input type="checkbox" v-model="job.highlited" id="highlited">
					<label for="highlited">Highlite Listing</label>
				</div>
				<div class="mb-4">
					<input type="checkbox" v-model="job.pinned" id="pinned">
					<label for="pinned">Pinned</label>
				</div>			
				<button type="submit" class="p-2 bg-blue-500 text-white font-medium text-white uppercase w-full rounded-lg">
					Update Listing
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
				job: {},
				validation: {},
			}
		},
		mounted () {
			this.job.tags = this.job.tags.data.map( (t) => t.id ) 
			
		},
		methods: {
			async updateJob () {
				let response = await this.$axios.patch(`jobs/${this.job.id}`, this.job)
				console.log(response)
			}
		},
		async asyncData ({ app, params }) {
			let job = await app.$axios.get(`jobs/${params.id}`)
			let tags = await app.$axios.get(`tags`)

			return {
				job: job.data.data,
				tags: tags.data.data
			}
		}
	}
</script>