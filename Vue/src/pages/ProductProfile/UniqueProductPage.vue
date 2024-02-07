<template>
		<div type="user" class="mx-auto mt-4 mb-5" style="width: 45%">
			<div class="author mb-5 w-100">
				<img
					class="mb-5"
					src="https://fastly.picsum.photos/id/450/200/300.jpg?hmac=EAnz3Z3i5qXfaz54l0aegp_-5oN4HTwiZG828ZGD7GM"
					alt="..."
				/>
				<h3 class="title mb-3">Title: {{ thisProductTitle }}</h3>
				<p class="description">Description: {{ thisProductDescription }}</p>
				<div class="row justify-content-center mt-4">
					<router-link
						:to="`/dashboard/submitTicket/SUGGESTION`"
						class="btn btn-primary mr-4"
						title="information"
						><i class="fa fa-info"></i
					></router-link>
					<router-link
						:to="`/dashboard/submitTicket/QUESTION`"
						class="btn mr-4"
						title="question"
						><i class="fa fa-question"></i
					></router-link>
					<router-link
						:to="`/dashboard/submitTicket/BUG`"
						class="btn btn-danger"
						title="bug"
						><i class="fa fa-bug"></i
					></router-link>
				</div>
			</div>
		</div>
</template>

<script>
import { SaveThisProductDataInLocalStorage } from "@/functions/Product/UniqueProductPageFunctions";
import axios from "axios";
export default {
	data() {
		return {
			thisProductTitle: "",
			thisProductDescription: "",
			thisProductPicture: "",
		};
	},
	mounted() {
		const thisProductId = this.$route.params.id;
		axios.get(`/product/${thisProductId}`).then((res) => {
			this.thisProductTitle = res.data.name;
			this.thisProductDescription = res.data.description;
			this.thisProductPicture = res.data.imageId;
		});
		SaveThisProductDataInLocalStorage(
			thisProductId,
			this.thisProductTitle,
			this.thisProductDescription,
			this.thisProductPicture
		);
	},
};
</script>
