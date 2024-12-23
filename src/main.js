import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';
import {createApp} from 'vue'
import App from './App.vue'
import './style/main.less'

const app = createApp(App)
app.use(ElementPlus);
app.use(router)
app.mount('#app')
