import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/chapter/:name', component: '@/pages/Chapter' },
    { path: '/player/:current', component: '@/pages/Player' },
  ],
  dynamicImport: {

  },
  fastRefresh: {},
  lessLoader: {
    modifyVars: {
      'primary-color': '#B53230',
    },
    javascriptEnabled: true,
  },
});
