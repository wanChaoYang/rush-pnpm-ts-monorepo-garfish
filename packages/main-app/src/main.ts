import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import Garfish from 'garfish';
const app = createApp(App);
app.use(router);

Garfish.run({
    basename: '/',
    domGetter: '#subApp', // 子用挂载的 DOM 容器
    apps: [
        {
            name: 'vue-app',
            activeWhen: '/apps/vue-app', // 当路由匹配 '/vue-app' 时加载子应用
            entry: 'http://localhost:8082', // html入口
            domGetter: '#subApp', 
        },
        // {
        //     name: 'react-app',
        //     activeWhen: '/react-app',
        //     entry: 'http://localhost:8081', // js入口
        //     // domGetter: '#subApp', 
        // },
    ],
});

app.mount('#app');
