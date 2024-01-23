import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import scrollDirectiveApp from './directives/scrollDirective'

createApp(App).use(store).use(router).use(scrollDirectiveApp).mount('#app')
