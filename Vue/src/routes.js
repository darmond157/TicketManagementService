// Index
const ProductLink = () => import("@/pages/ProductLink.vue");

//Authentication
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

//Product
const MyProduct = () => import("@/pages/ProductProfile/MyProduct.vue");
const UniqueProductPage = () =>
	import("@/pages/ProductProfile/UniqueProductPage.vue");
const EditProduct = () => import("@/pages/ProductProfile/EditProduct.vue");

//User
const UserInfo = () => import("@/pages/UserProfile/UserInfo.vue");
const EditUser = () => import("@/pages/UserProfile/EditUser.vue");

//Tickets
const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const AllUserTickets = () => import("@/pages/Tickets/AllUserTickets.vue");
const CreateTicket = () => import("@/pages/Tickets/CreateTicket.vue");

//404 Page
const PageNotFound = () => import("@/pages/404/NotFoundPage.vue");

const routes = [
	{
		path: "/",
		name: "Home",
		redirect: "/login",
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/signup",
		name: "signup",
		component: Signup,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: ProductLink,
	},
	{
		path: "/userInfo",
		name: "My Profile",
		component: UserInfo,
	},
	{
		path: "/myTickets",
		name: "My Tickets",
		component: AllUserTickets,
	},
	{
		path: "/myProduct",
		name: "My Product",
		component: MyProduct,
	},
	{
		path: "/editProfile",
		name: "Edit Profile",
		component: EditUser,
	},
	{
		path: "/editProduct/:id",
		name: "Edit Product",
		component: EditProduct,
	},
	{
		path: "/product/:id/view",
		name: "Business Product",
		component: UniqueProductPage,
	},
	{
		path: "/submitTicket/:ticketType",
		name: "Submit New Ticket",
		component: CreateTicket,
	},
	{
		path: "/product/:productId/ticket/:ticketId",
		name: "ticket",
		component: Ticket,
	},
];

export default routes;
