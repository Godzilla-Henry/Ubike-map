import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import naive from 'naive-ui'

createApp(App)
.use(router)
.use(store)
.use(naive)
.mount('#app')
