import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import aUI from './components'

createApp(App).use(router).use(Antd).use(aUI).mount('#app')
