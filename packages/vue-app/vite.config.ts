import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 确保静态资源能够被正确加载
  server: {
    host: '0.0.0.0',
    port: 8082,
    cors: true,  // 允许跨域
    proxy: {
      '/api': {
        target: 'http://example:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // 输出目录
    target: 'esnext', // 确保支持 ES 模块
  },
})
