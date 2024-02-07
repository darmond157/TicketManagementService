<template>
	<div>
		<div class="card h-50 w-75 mx-auto" style="margin-top: 90px">
			<div class="author">
				<div class="block block-one"></div>

				<div class="block block-two"></div>

				<div class="block block-three"></div>

				<div class="block block-four"></div>

				<h2 style="margin-top: 100px">Product Link:</h2>

				<textarea
					class="form-control w-50 mx-auto"
					rows="1"
					placeholder="Enter Product Link Here ..."
					v-model="productLink"
				/>

				<button
					@click="navigateToProductPage"
					:disabled="productLink === ''"
					class="btn btn-primary mt-5"
				>
					GO
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			productLink: "",
		};
	},
	methods: {
		navigateToProductPage() {
			if (this.productLink.includes("https://"))
				window.location.replace(this.productLink);
			else window.location.replace("https://" + this.productLink);
		},
	},
};
</script>
