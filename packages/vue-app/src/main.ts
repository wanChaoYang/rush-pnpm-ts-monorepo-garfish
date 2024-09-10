import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vueBridge } from '@garfish/bridge-vue-v3';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router'
function newRouter(basename: string | undefined) {
    const router = createRouter({
        history: createWebHistory(basename),
        routes,
    });
    return router;
}

// Garfish 导出子应用生命周期
const bridge = vueBridge({
    // 传入 Vue 的根组件
    createApp,
    rootComponent: App,
    // 可选的 vue-router 配置
    handleInstance: (vueInstance, props) => {
        // 在这里可以对 app 实例做一些处理，比如添加插件或状态管理
        console.log(vueInstance, props);
        vueInstance.use(newRouter('apps/vue-app'))
    },
});

const bootstrap = async () => {
    if (!window.__GARFISH__) {
        const app = createApp(App);
        app.use(newRouter('/apps/vue-app'))
        app.mount('#__dtvue__');
    }
    // console.log('bootstrap')
};
bootstrap();

export const provider = bridge //主应用会探查到 provider 并渲染子应用
