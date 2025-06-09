const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Путь, по которому будет доступен сайт после сборки
  publicPath: '/',

  // Куда складывать результат сборки
  outputDir: 'dist',

  // Отключить source map'ы в production
  productionSourceMap: false,

  // Прокси для API-запросов на бэкенд (например, Node.js на localhost:5000)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.25:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/pdfjs-dist/legacy/build'),
            to: 'pdfjs', // куда в dist/ скопировать .wasm файлы
            globOptions: {
              ignore: ['**/*.js'], // если не хочешь копировать весь JS
            },
          },
        ],
      }),
    ],
  },
});
