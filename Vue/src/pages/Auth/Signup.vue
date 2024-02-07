<template style="background-color: #1e1d2e">
	<div class="w-25 mx-auto my-auto">
		<h1 class="mt-5 text-center mb-5" style="font-size: 80px">TicketMaster</h1>
		<div class="card py-4 px-4 mt-5">
			<h5 class="title mb-5 ml-auto h1">Signup</h5>
			<div class="row mb-4">
				<div class="col-12">
					<label class="text-white">Username:</label>
					<input
						v-model="username"
						class="form-control"
						placeholder="Please Choose a Username ..."
						type="username"
					/>
				</div>
			</div>
			<div class="row mb-4">
				<div class="col-12">
					<label class="text-white">Password:</label>
					<input
						v-model="password"
						class="form-control"
						placeholder="Please Choose a Password ..."
						type="password"
					/>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-12">
					<label class="text-white">reEnter Password:</label>
					<input
						v-model="rePassword"
						class="form-control"
						placeholder="Please reEnter Your Password ..."
						type="password"
					/>
				</div>
			</div>
			<button
				@click="Signup"
				:disabled="!username || !password || !rePassword"
				class="btn btn-primary mr-3"
			>
				<div v-if="!loading">SignUp</div>
				<div v-else><i class="fa fa-spinner fa-spin"></i>Loading</div>
			</button>
			<router-link to="/login">Already have an Account!</router-link>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import HandleSignup from "@/functions/Auth/signupFunctions.js";
export default {
	data() {
		return {
			username: "",
			password: "",
			rePassword: "",
			loading: false,
		};
	},
	methods: {
		Signup() {
			try {
				HandleSignup(
					this.username,
					this.password,
					this.rePassword,
					this.loading,
					this.$toast,
					this.$router
				);
			} catch (error) {
				this.loading = false;
				this.$toast.error(error);
			}
		},
	},
};
</script>
