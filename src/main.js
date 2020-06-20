import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMarkdown from "vue-markdown";
import VueClipboard from "vue-clipboard2";
import Toasted from "vue-toasted";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.component("vue-markdown", VueMarkdown);

Vue.use(VueClipboard);

Vue.use(Toasted);

import "@/plugins/global-components-loader";
import "@/plugins/vue-icons-loader";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
