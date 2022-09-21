import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from 'primevue/config';

import DataTable from 'primevue/datatable';
import Dropdown from 'primevue/dropdown';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import Button from 'primevue/button';

import BadgeDirective from 'primevue/badgedirective';

createApp(App)
.use(router)
.use(store)
.use(PrimeVue)
.directive('badge', BadgeDirective)
.component('DataTable', DataTable)
.component('Dropdown', Dropdown)
.component('Column', Column)
.component('Card', Card)
.component('Badge', Badge)
.component('Button', Button)
.mount('#app')
