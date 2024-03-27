import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


let root!: ReactDOM.Root;

function render(props: any) {
  const {container} = props;
  root = ReactDOM.createRoot(
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react-18' : '/'}>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
}


if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: any) {
  const {container} = props;
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
