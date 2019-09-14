// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        hd: true,
        antd: false,
        dva: false,
        dynamicImport: { webpackChunkName: true, loadingComponent: './components/loading.js' },
        title: 'h501',
        dll: true,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
