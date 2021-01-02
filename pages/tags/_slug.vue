<template>
	<div>
		<div class="text-center py-10">
	      <h1 class="text-4xl font-bold mb-2">{{tag.title}}</h1>
	      <p class="text-gray-600 font-medium">The best job in the entire world.</p>
	    </div>
	    <div class="mt-10">
	      <Job v-for="job in jobs" :key="job.id" :job="job"/>      
	    </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				jobs: [],
				tag: ''
			}
		},
		async asyncData({ app, params }) {
	      let jobs = await app.$axios.get(`jobs?tag=${params.slug}`)
	      let tag = await app.$axios.get(`tags/${params.slug}`)

	      return {
	        jobs: jobs.data.data,
	        tag: tag.data.data
	      }
	    }

	}
</script>