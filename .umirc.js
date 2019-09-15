// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  base: 'https://beysong.github.io/h501/dist/',
  // publicPath: 'https://beysong.github.io/h501/dist/',
  history: 'browser',
  hash: true,
  // exportStatic: {
  //   dynamicRoot: true,
  // },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        hd: true,
        antd: false,
        dva: false,
        dynamicImport: { webpackChunkName: true, loadingComponent: './components/loading.js' },
        title: '加入远景',
        dll: true,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
