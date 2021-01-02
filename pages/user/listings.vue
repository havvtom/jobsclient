<template>
	<div>
		<div class="text-center py-10">
	      <h1 class="text-4xl font-bold mb-2">My Job Listings</h1>
	      <p class="text-gray-600 font-medium">We are the best job board in the entire world.</p>
	    </div>
	    <div class="mt-10">
	      <job v-for="job in jobs" :key="job.id" :job="job">
	      	<template slot="action">
	      		<nuxt-link :to="{ name: 'jobs-edit-id', params: { id: job.id } }" class="inline-block border-2 border-blue-400 text-blue-400 font-bold rounded-lg px-3 py-1 bg-white">
	      			Edit
	      		</nuxt-link>
	      	</template>
	      </job>   
	    </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				jobs: []
			}
		},
		async asyncData ({ app, params }){
			let response = await app.$axios.get(`user/jobs`)

			return {
				jobs: response.data.data
			}
		}
	}
</script>