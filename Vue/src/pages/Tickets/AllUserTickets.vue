<template>
	<div class="card">
		<div class="card-header d-flex justify-content-between">
			<div>
				<label for="ticketTypes" class="mr-3 mb-4"><h4>Ticket Type:</h4></label>
				<select v-model="selectedTicketType" name="ticketTypes" class="mr-5">
					<option :value="null">-</option>
					<option value="BUG">BUG</option>
					<option value="QUESTION">QUESTION</option>
					<option value="SUGGESTION">SUGGESTION</option>
				</select>
			</div>
			<div>
				<label for="status" class="mr-3 mb-4"><h4>Status:</h4></label>
				<select v-model="selectedTicketStatus" name="status" class="mr-5">
					<option :value="null">-</option>
					<option value="OPEN">OPEN</option>
					<option value="CLOSED">CLOSED</option>
					<option value="PENDING">PENDING</option>
					<option value="WAITING_FOR_USER">WAITING_FOR_USER</option>
				</select>
			</div>
			<div>
				<label for="productNames" class="mr-3 mb-4"
					><h4>Product Name:</h4></label
				>
				<select v-model="selectedProductName" name="productNames">
					<option :value="null">-</option>
					<option
						v-for="productName in allProductNamesWithSubmittedTickets"
						:value="productName"
					>
						{{ productName }}
					</option>
				</select>
			</div>
			<div class="ml-1">
				<p class="mr-4 h4">createdAfter:</p>
				<DatePicker v-model="createdAfter" valueType="format" class="mr-5" />
				<p class="mr-4 h4">createdBefore:</p>
				<DatePicker v-model="createdBefore" valueType="format" />
			</div>
			<button @click="doFilters" class="btn btn-primary">Do Filters</button>
		</div>
		<div class="card-body">
			<user-tickets v-if="tickets" :tickets="tickets" />
			<div class="mt-5" v-else><h1>There Is No Ticket ...</h1></div>
			<div v-show="tickets">
				<button class="btn btn-primary" :disabled="page == 0" @click="goback">
					Previous Page
				</button>
				<button class="btn btn-primary" @click="goforward">Next Page</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import UserTickets from "./UserTicket.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
	components: {
		UserTickets,
		DatePicker,
	},
	data() {
		return {
			tickets: "",
			createdAfter: "",
			createdBefore: "",
			selectedTicketStatus: "",
			selectedTicketType: "",
			selectedProductName: "",
			allProductNamesWithSubmittedTickets: "",
			page: 0,
		};
	},
	mounted() {
		axios
			.get("/ticket", {
				params: { page: this.page, pageSize: 8 },
			})
			.then((res) => {
				this.tickets = res.data.content;
			});
	},
	computed: {
		role() {
			const role = localStorage.getItem("role");
			return role == "null" ? "" : role;
		},
	},
	methods: {
		doFilters() {
			axios
				.get("/ticket", {
					params: {
						page: this.page,
						pageSize: 8,
						type: this.selectedTicketType ? this.selectedTicketType : null,
						productName: this.selectedProductName
							? this.selectedProductName
							: null,
						createdAfter: this.createdAfter ? this.createdAfter : null,
						createdBefore: this.createdBefore ? this.createdBefore : null,
						status: this.selectedTicketStatus
							? this.selectedTicketStatus
							: null,
					},
				})
				.then((res) => {
					this.tickets = res.data.content;
				});
		},
		goback() {
			this.page--;
			this.doFilters();
		},
		goforward() {
			this.page++;
			this.doFilters;
		},
	},
};
</script>
