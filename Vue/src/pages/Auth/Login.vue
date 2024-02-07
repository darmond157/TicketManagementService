<template style="background-color: #1e1d2e">
	<div class="w-25 mx-auto my-auto">
		<h1 class="mt-5 text-center mb-5" style="font-size: 80px">TicketMaster</h1>
		<div class="card py-4 px-4 mt-5">
			<h5 class="title mb-5 ml-auto h1">Login</h5>
			<div class="row mb-4">
				<div class="col-12">
					<label class="text-white">Username:</label>
					<input
						v-model="username"
						class="form-control"
						placeholder="Please Enter Your Username ..."
					/>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-12">
					<label class="text-white">Password:</label>
					<input
						v-model="password"
						class="form-control"
						placeholder="Please Enter Your Password ..."
						type="password"
					/>
				</div>
			</div>
			<button
				@click="Login"
				:disabled="!username || !password"
				class="btn btn-primary mr-5"
			>
				<div v-if="!loading">Login</div>
				<div v-else><i class="fa fa-spinner fa-spin"></i>&nbsp;Loading</div>
			</button>
			<router-link to="/signup">Create New Account</router-link>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import HandleLogin from "@/functions/Auth/loginFunctions.js";
export default {
	data() {
		return {
			username: "",
			password: "",
			loading: false,
		};
	},
	methods: {
		Login() {
			try {
				HandleLogin(
					this.username,
					this.password,
					this.loading,
					this.$toast,
					this.$router
				);
			} catch (error) {}
		},
	},
};
</script>
