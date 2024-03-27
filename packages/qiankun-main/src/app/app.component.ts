import { Component, NgZone, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { registerMicroApps, start } from "qiankun";

@Component({
  selector: 'q-k-main-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    registerMicroApps([
      {
        name: 'app-vue3-vite',
        entry: 'http://localhost:3002/',
        container: '#container',
        activeRule: '/app-vue3-vite',
      },
      {
        name: 'app-ng-17',
        entry: 'http://localhost:3003/',
        container: '#container',
        activeRule: '/app-ng17',
      },
      {
        name: 'app-react-18',
        entry: 'http://localhost:3000/',
        container: '#container',
        activeRule: '/app-react-18',
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
