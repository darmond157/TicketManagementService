import axios from "axios";

export default function HandleSignup(
	username,
	password,
	repassword,
	loading,
	toast,
	router
) {
	loading = true;
	validatePassword(password, repassword);
	axios
		.post("/auth/register", {
			username,
			password,
		})
		.then(() => {
			toast.success("Registered Successfully!");
			setTimeout(() => {
				router.push("/login");
			}, 1000);
		})
		.catch(() => {
			toast.error("Something went wrong!");
		});
}

function validatePassword(password, repassword) {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
	if (!regex.test(password)) throw "please choose a stronger password!";
	if (password !== repassword) throw "confirmation password does not match!";
}
