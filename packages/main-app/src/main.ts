import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import Garfish from 'garfish';
import { GarfishEsModule } from '@garfish/es-module';

const app = createApp(App);
app.use(router);

Garfish.run({
    basename: '/',
    plugins: [GarfishEsModule()], // 使用 ES 模块加载器
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
    beforeLoad(appInfo) {
        console.log('子应用开始加载', appInfo);
    },
    afterLoad(appInfo) {
        console.log('子应用加载完成', appInfo.name);
    },
    errorLoadApp(error, appInfo) {
        console.log('子应用加载异常', appInfo.name);
        console.error(error);
    },
    beforeMount(appInfo) {
        console.log('子应用开始渲染', appInfo.name);
    },
    afterMount(appInfo) {
        console.log('子应用渲染结束', appInfo.name);
    },
    // 提供了该 hook，错误将不会 throw 到文档流中（不会被全局错误监听到），提供给开发者决定如何处理错误
    errorMountApp(error, appInfo) {
        console.log('子应用渲染异常', appInfo.name);
        console.error('xxxx', error);
    },
    beforeUnmount(appInfo) {
        console.log('子应用开始销毁', appInfo.name);
    },
    afterUnmount(appInfo) {
        console.log('子应用销毁结束', appInfo.name);
    },
    // 提供了该 hook，错误将不会 throw 到文档流中（不会被全局错误监听到），提供给开发者决定如何处理错误
    errorUnmountApp(error, appInfo) {
        console.log('子应用销毁异常', appInfo.name);
        console.error(error);
    },
    //   // 在路由发生变化时并且未匹配到任何子应用时触发
    //   onNotMatchRouter(path: string) {
    //     console.log('子应用路由未匹配', path);
    //   },
});

app.mount('#app');
