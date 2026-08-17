import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles.css'

createApp(App).use(router).use(i18n).use(ui).mount('#app')
