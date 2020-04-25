import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.config.productionTip = false;

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

Vue.filter("dollar", dollarFilter);
Vue.filter("percentage", percentFilter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
