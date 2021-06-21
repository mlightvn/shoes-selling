import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/layouts/sb-admin-2.min.css"

createApp(App).use(store).use(router).mount("#app");
