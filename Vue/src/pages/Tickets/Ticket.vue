<template>
		<div class="card w-75 mx-auto text-center">
			<h1>Title: {{ ticketDetails.title }}</h1>
			<h4>Created: {{ ticketDetails.created }}</h4>
			<h4>DueDate: {{ ticketDetails.deadline }}</h4>
			<h2>Status: {{ ticketDetails.status }}</h2>

			<div v-if="role == 'ADMIN' && ticketDetails.productId == productId">
				<label for="status" class="mr-3 mb-4"><h4>Change Status:</h4></label>
				<select v-model="changedStatus" name="changeStatus">
					<option :value="null">-</option>
					<option value="OPEN">OPEN</option>
					<option value="CLOSED">CLOSED</option>
					<option value="PENDING">PENDING</option>
					<option value="WAITING_FOR_USER">WAITING_FOR_USER</option>
				</select>
				<button @click="changeStatus" class="btn btn-primary ml-4">
					Change
				</button>
			</div>

			<div class="row text-center mx-auto">
				<div class="card mr-5 ml-4" style="width: 60%">
					{{ ticketDetails.description }}
				</div>
				<div class="dflex flex-column" style="width: 30%">
					<div class="card" style="height: 380px; overflow-y: auto">
						<p class="mb-4">ChatBox</p>
						<p
							v-for="(message, index) in chats"
							:class="[
								index % 2 == 0
									? 'text-left text-primary'
									: 'text-right text-info',
							]"
						>
							{{ message.content }}
						</p>
					</div>
					<div class="dflex row justify-content-center">
						<textarea
							v-model="newContent"
							class="form-control mr-3"
							placeholder="Enter Your Text Here ..."
							>{{ value }}</textarea
						>

						<button @click="sendText" class="btn btn-primary h-50 my-auto">
							<i class="fa fa-send"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			newContent: "",
			ticketDetails: "",
			chats: "",
			changedStatus: "",
		};
	},
	mounted() {
		const productId = this.$route.params.productId;
		const ticketId = this.$route.params.ticketId;
		axios.get(`/product/${productId}/ticket/${ticketId}`).then((res) => {
			this.ticketDetails = res.data;
			this.chats = res.data.messages;
		});
	},
	methods: {
		sendText() {
			axios.post(`/message/${this.$route.params.ticketId}`, {
				content: this.newContent,
			});
			this.newContent = "";
		},
		changeStatus() {
			const productId = this.$route.params.productId;
			const ticketId = this.$route.params.ticketId;
			axios
				.post(`/product/${productId}/ticket/${ticketId}/update`, {
					status: this.changedStatus,
				})
				.then(() => {
					this.$toast.succes("Changed ...");
				})
				.catch(() => {
					this.$toast.error("Something went wrong!");
				});
		},
	},
	computed: {
		role() {
			const role = localStorage.getItem("role");
			return role == "null" ? "" : "ADMIN";
		},
		productId() {
			return localStorage.getItem("productId");
		},
	},
};
</script>
