import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import Icon from 'iconify'

const app = createApp(App);

app.component(Icon)
app.use(router);
app.mount("#app");
