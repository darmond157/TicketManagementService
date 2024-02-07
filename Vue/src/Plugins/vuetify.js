import * as directives from "vuetify/directives";
import * as components from "vuetify/components";
import { createVuetify } from "vuetify";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default function (app) {
	const vuetify = createVuetify({ components, directives });
	app.use(vuetify);
}
