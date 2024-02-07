<template>
	<div class="card mx-auto mt-4" style="width: 45%">
		<div class="author mb-5 w-100">
			<h1 class="mb-5">Register My Product</h1>
			<div class="row mb-5">
				<div class="col-9 mx-auto">
					<input
						v-model="productName"
						class="form-control"
						placeholder="Please Enter Your product Name ..."
					/>
				</div>
			</div>

			<textarea
				v-model="productDescription"
				class="form-control w-75 mx-auto"
				placeholder="Please Write a Brief Description of Your product .."
			/>

			<div>
				<button class="btn mt-5" @click="triggerPicturePickerInput">
					Upload profile picture
				</button>
				<input
					type="file"
					class="d-none"
					ref="fileInput"
					accept="image/*"
					@change="handlePickedFile"
				/>
			</div>
		</div>
		<button
			:disabled="!productName"
			@click="registerNewProduct"
			class="btn btn-primary w-100"
		>
			Register Product
		</button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			productName: "",
			productDescription: "",
			imageUrl: null,
		};
	},
	methods: {
		registerNewProduct() {
			axios
				.post("/product", {
					name: this.productName,
					description: this.productDescription,
					imageId: this.imageUrl,
				})
				.then((res) => {
					this.$toast.success("Product Registered Successfully");
					localStorage.setItem("role", "ADMIN");
					localStorage.setItem("productId", res.data.id);
					this.$router.push("/dashboard");
				})
				.catch((e) => {
					console.log(e);
					this.$toast.error("Something went wrong!");
				});
		},
		triggerPicturePickerInput() {
			this.$refs.fileInput.click();
		},
		handlePickedFile(event) {
			const file = event.target.files[0];
			const fileReader = new FileReader();

			fileReader.addEventListener("load", () => {
				this.imageUrl = fileReader.result;
			});

			fileReader.readAsDataURL(file);

			axios.post("/s3/pre-sign", {
				bucketName: "ticket",
				objectName: "product-" + this.productName,
			});
		},
	},
};
</script>
