import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerMicroApps, start } from "qiankun";

@Component({
  selector: 'qiankun-main-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    registerMicroApps([
      {
        name: 'app-vue3',
        entry: 'http://localhost:4202/child/app-vue3/',
        container: '#container',
        activeRule: '/app-vue3',
      },
      {
        name: 'app-vue3-vite',
        entry: 'http://localhost:3002/',
        container: '#container',
        activeRule: '/app-vue3-vite',
      },
      {
        name: 'app-ng17',
        entry: 'http://localhost:3003/',
        container: '#container',
        activeRule: '/app-ng17',
      }
    ]);
    start();
  }

  /**
   * 子应用准备安装
   * @param app
   * @version 1.0.0
   */
  beforeLoad(app: any) {
    return Promise.resolve();
  }

  /**
   * 子应用安装前
   * @param app
   * @version 1.0.0
   */
  beforeMount(app: any) {
    return Promise.resolve();
  }

  /**
   * 子应用安装后
   * @param app
   * @version 1.0.0
   */
  afterMount(app: any) {
    return Promise.resolve();
  }

  /**
   * 子应用准备卸载
   * @param app
   * @version 1.0.0
   */
  beforeUnmount(app: any) {
    return Promise.resolve();
  }

  /**
   * 子应用卸载后
   * @param app
   * @version 1.0.0
   */
  afterUnmount(app: any) {
    return Promise.resolve();
  }

}
