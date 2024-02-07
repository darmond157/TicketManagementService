import "@/Plugins/axios.js";
import router from "@/Plugins/vue-router.js";
import vuetify from "@/Plugins/vuetify.js";

export default (appInstance) => {
	router(appInstance);
	vuetify(appInstance)
};
