import "@/Plugins/axios.js";
import router from "@/Plugins/vue-router.js";
import toast from "@/Plugins/vue-toast.js";

export default (appInstance) => {
	router(appInstance);
	toast(appInstance);
};
