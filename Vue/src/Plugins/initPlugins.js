import initLibraries from "@/Plugins/Libraries/initLibraries.js";
import initComponents from "@/Plugins/Components/initComponents.js";

export default (appInstance) => {
	initLibraries(appInstance);
	initComponents(appInstance);
};
