<template>
	<div class="card w-50 mx-auto">
		<p class="h1 text-center mt-3">{{ productTitle }}</p>

		<div class="col-8 mb-4 mx-auto">
			<label class="text-white">Ticket Title:</label>
			<input
				v-model="ticketTitle"
				class="form-control"
				placeholder="Please enter the title of ticket you want to submit ..."
			/>
		</div>

		<textarea
			v-model="ticketDescription"
			class="form-control w-75 mx-auto mb-5"
			placeholder="Please Write a Brief Description of Your Business ..."
		/>

		<button class="btn btn-primary w-100 mx-auto" @click="submitTicket">
			Submit Ticket
		</button>
	</div>
</template>

<script>
//DATE PICKER

import submitNewTicket from "@/functions/Ticket/createTicket.js";

export default {
	data() {
		return {
			ticketTitle: "",
			ticketDescription: "",
			ticketDeadline: "",
		};
	},
	methods: {
		submitTicket() {
			submitNewTicket(
				this.ticketTitle,
				this.ticketDescription,
				this.ticketDeadline,
				this.$route.params.ticketType,
				this.productTitle,
				this.$toast,
				this.$router
			);
		},
	},
	computed: {
		productTitle() {
			return localStorage.getItem("thisProductTitle");
		},
	},
};
</script>
