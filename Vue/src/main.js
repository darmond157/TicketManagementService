//Main App
import { createApp } from "vue";
import App from "./App.vue";

//Styles
import "@/assets/sass/black-dashboard.scss";

//Initiate Plugins
import initPlugins from "@/Plugins/initPlugins.js"

//App Instantiate
const appInstance = createApp(App);
initPlugins(appInstance)
appInstance.mount("#app");
