<template>
	<div class="card mx-auto mt-4" style="width: 45%">
		<div class="author mb-5 w-100">
			<img
				class="mb-5"
				src="https://fastly.picsum.photos/id/450/200/300.jpg?hmac=EAnz3Z3i5qXfaz54l0aegp_-5oN4HTwiZG828ZGD7GM"
				alt="..."
			/>

			<h3 class="title mb-3">{{ username }}</h3>

			<span>{{ !role ? "USER" : "ADMIN" }}</span>
		</div>

		<router-link to="/dashboard/editProfile" class="btn btn-primary w-100"
			>Edit</router-link
		>
	</div>
</template>

<script>
export default {
	computed: {
		username() {
			return localStorage.getItem("username");
		},
		role() {
			const role = localStorage.getItem("role");
			return role == "null" ? "" : role;
		},
	},
};
</script>
