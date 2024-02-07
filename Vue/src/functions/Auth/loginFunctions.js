import axios from "axios";

export default function HandleLogin(
	username,
	password,
	loading,
	toast,
	router
) {
	loading = true;
	axios
		.post("/auth/login", {
			username,
			password,
		})
		.then((res) => {
			SaveCurrentUserDataInLocalStorage(
				res.data.userId,
				res.data.username,
				res.data.role,
				res.data.productId
			);
			toast.success("Login Successfully!");
			setTimeout(() => {
				router.push("/dashboard");
			}, 500);
		})
		.catch(() => {
			loading = false;
			toast.error("Something Went Wrong ...");
		});
}

function SaveCurrentUserDataInLocalStorage(userId, username, role, productId) {
	localStorage.setItem("role", role);
	localStorage.setItem("userId", userId);
	localStorage.setItem("username", username);
	localStorage.setItem("productId", productId);
}
