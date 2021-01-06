<template>
	<div class="relative">
		<svg xmlns="http://www.w3.org/2000/svg" @click="isOpen = !isOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 text-gray-900 mr-1">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>

		<ul v-show="isOpen" class="bg-white shadow-xl absolute rounded overflow-hidden z-50 w-40 mt-2">
			<li v-for="(item, index) in items" :key="index">
				<a 
					href="" 
					class="block p-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
					:class="{ 'bg-gray-200': current.slug === item.slug }"
					@click.prevent="select(item)"
				>
					{{ item.title }}
				</a>
			</li>
			
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			items: {
				required: true,
				type: Array
			},
			selected: {
				required: false,
				type: String
			}
		},
		computed: {
			current () {
				return this.items.find( (i) => i.slug === this.selected )
			}
		},
		data () {
			return {
				isOpen: false
			}
		},
		methods: {
			select (item) {				
				this.$emit('change', item)
				this.isOpen = false
			}
		}

	}
</script>