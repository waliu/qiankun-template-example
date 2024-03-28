const {name} = require('./package');

module.exports = {

    webpack: (config) => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';
        config.output.publicPath=`http://localhost:3000/`
        console.log(config)
        return config;
    },

    devServer: (_) => {
        const config = _;
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.liveReload = false;
        return config;
    },
};