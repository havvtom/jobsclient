<template>
	<div class="mt-10 flex justify-center">
		<form class="w-10/12 sm:w-6/12" @submit.prevent="saveTag">
			<h2 class="mb-4 text-2xl font-bold">Create a tag</h2>
			<div class="mb-4">
				<label 
					class="mb-1 inline-block font-medium"
					:class="{ 'text-red-500':validation.title }"
				>
					Tag Title
				</label>
				<input 
					type="title" 
					name="" 
					class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4 py-2" 
					:class="{ 'border-red-500':validation.title }" 
					v-model="form.title"
				>
				<div v-if="validation.title" class="mt-1 text-sm text-red-500">
					{{ validation.title[0] }}
				</div>
			</div>			
			<button type="submit" class="p-2 bg-blue-500 text-white font-medium text-white uppercase w-full rounded-lg">
				Save
			</button>
		</form>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				form: {},
				validation: {}
			}
		},
		methods: {
			saveTag () {

			}
		}
	}
</script>