import vue from '@vitejs/plugin-vue'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
  },
  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
