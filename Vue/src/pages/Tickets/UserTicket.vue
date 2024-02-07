<template>
	<div class="row">
		<div v-for="i in tickets" class="font-icon-list col-3">
			<div id="cardBodyDetails">
				<p class="h3 mb-2">{{ resizeText(i.title, "title") }}</p>
				<div class="dflex">
					<i class="fa fa-clock"></i>&nbsp;
					<span>Created: {{ i.created }}</span>
				</div>
				<div class="dflex">
					<i class="fa fa-window-close"></i>&nbsp;
					<span>DueDate: {{ i.deadline }}</span>
				</div>
				<i
					v-if="i.type == 'BUG'"
					title="bug"
					class="text-white fa fa-bug mt-3"
				></i>
				<i
					v-else-if="i.type == 'QUESTION'"
					title="question"
					class="text-white fa fa-question mt-3"
				></i>
				<i
					v-else-if="i.type == 'SUGGESTION'"
					title="suggestion"
					class="text-white fa fa-info mt-3"
				></i>
				<p></p>
				<router-link
					:to="`product/${i.productId}/ticket/${i.ticketId}`"
					class="btn btn-primary mt-3"
					>Show</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tickets: {
			type: Array,
		},
	},
	methods: {
		resizeText(text) {
			return text.length >= 27 ? text.substr(0, 20) + "..." : text;
		},
	},
};
</script>

<style>
#cardBodyDetails {
	text-align: center;
	padding: 45px 0 30px;
	border: 1px solid #e44cc4;
	border-radius: 0.1875rem;
	margin: 15px 0;
	min-height: 168px;
}
</style>
