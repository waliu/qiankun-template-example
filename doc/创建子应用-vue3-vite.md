# 创建 qiankun vue3-vite子应用 
1. 新建项目
````shell
npm create vue@latest
````
2. 依赖qiankun vite 插件
````shell
npm i vite-plugin-qiankun
````
3. 修改main.ts
```ts
import './assets/main.css'
import routes from '@/router'
import { createApp } from 'vue'
import App from './App.vue'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import type { QiankunProps } from "vite-plugin-qiankun/es/helper";
import { createPinia } from "pinia";

let instance: any = null;
instance = createApp(App)

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

function render(props: QiankunProps = {}) {
  const {container} = props as any;
  instance = createApp(App)
  instance.use(routes)
  instance.use(createPinia())
  instance.mount(
    container ? container.querySelector('#app') : document.getElementById('app')
  )
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}

// some code
renderWithQiankun({
  bootstrap: function (): void | Promise<void> {
  },
  mount: function (props: QiankunProps): void | Promise<void> {
    render(props)
  },
  unmount: function (props: QiankunProps): void | Promise<void> {
    instance.unmount()
    instance._container = null
    instance = null;
  },
  update: function (props: QiankunProps): void {
  }
})
```
4. 配置vite 乾坤启动的相关配置
````ts
// vite.config.ts
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
````
5. 启动子应用 
6. 加入交流群
    <br>
    qq 群763367896