<template>
	<v-card
		class="mx-auto pa-12 mt-10"
		elevation="8"
		max-width="500"
		rounded="xl"
		:loading="loading"
	>
		<div class="text-h2 mb-10">Login</div>

		<v-text-field
			clearable
			density="comfortable"
			placeholder="username"
			prepend-inner-icon="mdi-account-outline"
			variant="outlined"
			v-model="username"
		></v-text-field>

		<v-text-field
			clearable
			type="password"
			density="comfortable"
			placeholder="password"
			prepend-inner-icon="mdi-lock-outline"
			variant="outlined"
			v-model="password"
		></v-text-field>

		<v-btn
			@click="login"
			block
			class="mb-5"
			color="blue"
			size="large"
			variant="elevated"
		>
			Log In
		</v-btn>

		<v-card-text class="text-center">
			<a class="text-blue text-decoration-none text-h6" href="/signup">
				Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
			</a>
		</v-card-text>
	</v-card>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			username: "",
			password: "",
			loading: false,
		};
	},
	methods: {
		login() {
			this.loading = true;
			axios
				.post("/auth/login", {
					username: this.username,
					password: this.password,
				})
				.then((res) => {
					this.loading = false;
					setTimeout(() => {
						this.$router.push("/dashboard");
					}, 500);
				})
				.catch((err) => {
					console.log(err);
					this.loading = false;
				});
		},
	},
};
</script>
