import { createApp } from "vue";

// Style
import "./style/index.css";

// App
import App from "./App.vue";

// Router
import router from "./router";

createApp(App).use(router).mount("#app");
