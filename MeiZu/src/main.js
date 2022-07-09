import { createApp } from 'vue'
// import {DatePicker} from "ant-design-vue"
import App from './App.vue'

// import VueResource from 'vue-resource'
// import router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// createApp(App).use(VueAxios, axios,router).mount('#app')
import router from './router/index'
createApp(App).use(router,VueAxios,axios).mount('#app')
