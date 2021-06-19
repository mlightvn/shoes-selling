import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import "@/assets/css/layouts/sb-admin-2.min.css"
import "@/assets/js/layouts/jquery.min.js"
import "@/assets/js/layouts/bootstrap.bundle.min.js"
import "@/assets/js/layouts/jquery.easing.min.js"
import "@/assets/js/layouts/sb-admin-2.min.js"
import "@/assets/js/layouts/chart.js/Chart.min.js"
import "@/assets/js/layouts/demo/chart-area-demo.js"
import "@/assets/js/layouts/demo/chart-pie-demo.js"

createApp(App)
.use(store)
.use(router)
.mount("#app");
