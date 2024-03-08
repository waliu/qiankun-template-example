import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from "vite-plugin-qiankun";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    qiankun('flow-graph', {
      useDevMode: true
    })
  ],

  base: '/app-vue3-vite',
  server: {
    port: 3002,
    cors: true,
    origin: 'http://localhost:3002'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
