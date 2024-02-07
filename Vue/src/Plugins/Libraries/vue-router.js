import routes from "@/routes.js";
import { createRouter, createWebHistory } from "vue-router";

const routerInstance = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to) => {
		return to.hash ? { selector: to.hash } : { x: 0, y: 0 };
	},
});

export default function (app) {
	app.use(routerInstance);
}
