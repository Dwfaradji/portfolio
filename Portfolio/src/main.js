import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSmoothScroll from "vue3-smooth-scroll";

createApp(App).use(store).use(VueSmoothScroll).use(router).mount('#app')
