<template>
	<div class="fixed w-full top-0 left-0 flex justify-center">
		<transition name="snack">
			<div class="bg-green-400 mt-6 text-white pc-8 px-4 py-2 rounded-lg text-sm" v-if="snack">
				{{ snack }}
			</div>
		</transition>
	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters({ 
				snack: 'snack'
			 })
		}
	}
</script>