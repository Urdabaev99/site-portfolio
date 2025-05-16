import "./assets/styles/global.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";
// import gsap from "./plugins/gsap";

const app = createApp(App);

// app.config.globalProperties.$gsap = gsap;

app.use(createPinia()).use(router);

app.mount("#app");
