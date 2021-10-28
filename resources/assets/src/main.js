// Additional polyfills
import "custom-event-polyfill";
import "url-polyfill";

import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./Store";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
import numeral from "numeral";
// import VueNumerals from "vue-numerals";
Vue.use(numeral);
// Vue.use(VueNumerals);
import FormActionBar from "./components/FormActionBar";
import Vuelidate from "vuelidate";
import InstantSearch from "vue-instantsearch";

Vue.use(InstantSearch);
Vue.use(Vuelidate);
Vue.component("FormActionBar", FormActionBar);

Vue.use(VueMoment, {
    moment
});

import BootstrapVue from "bootstrap-vue";

import globals from "./globals";
import Popper from "popper.js";
import { ServerTable } from "vue-tables-2";
import { ClientTable } from "vue-tables-2";
import { Multiselect } from "vue-multiselect";
import LaddaBtn from "@/vendor/libs/ladda/Ladda";

Vue.use(ServerTable);
Vue.use(ClientTable);
import "@/vendor/libs/vue-data-tables/vue-data-tables.scss";

import "./fontawesome/all.css";

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("LaddaBtn", LaddaBtn);
Vue.component("Multiselect", Multiselect);
// Global RTL flag
Vue.mixin({
    data: globals
});

Vue.filter("formatNumber", function(value, format = "0,0") {
    return numeral(value).format(format);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
