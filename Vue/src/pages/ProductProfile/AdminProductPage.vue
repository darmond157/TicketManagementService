<template>
	<div>
		<div class="card mx-auto mt-4 mb-5" style="width: 45%">
			<div class="author mb-5 w-100">
				<img class="mb-5" src="https://fastly.picsum.photos/id/450/200/300.jpg?hmac=EAnz3Z3i5qXfaz54l0aegp_-5oN4HTwiZG828ZGD7GM" alt="..." />

				<h3 class="title mb-3">{{ myProductTitle }}</h3>

				<p class="description">{{ myProductDescription }}</p>
			</div>

			<router-link :to="`editProduct/${myProductId}`" class="btn btn-primary w-100"
				>Edit</router-link
			>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "admin-product-page",
	data() {
		return {
			myProductPicture: "",
			myProductTitle: "",
			myProductDescription: "",
			myProductId: "",
		};
	},
	mounted() {
		this.myProductId = localStorage.getItem("productId");
		axios.get(`/product/${this.myProductId}`).then((res) => {
			this.myProductPicture = res.data.imageId;
			this.myProductTitle = res.data.name;
			this.myProductDescription = res.data.description;
		});
	},
};
</script>
