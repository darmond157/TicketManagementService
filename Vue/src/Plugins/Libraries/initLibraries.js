import "@/Plugins/Libraries/axios.js";
import router from "@/Plugins/Libraries/vue-router.js";
import toast from "@/Plugins/Libraries/vue-toast.js";

export default (appInstance) => {
	router(appInstance);
	toast(appInstance);
};
