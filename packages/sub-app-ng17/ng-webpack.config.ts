import { Configuration } from 'webpack';
export default {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  output: {
    library: `sub-app-ng17-[name]`,
    libraryTarget: 'umd',
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    chunkLoadingGlobal: `webpackJsonp_sub-app-ng17`,
  }
} as Configuration;
