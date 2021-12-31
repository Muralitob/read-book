import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/chapter/:name', component: '@/pages/Chapter' },
    { path: '/player/:name', component: '@/pages/Player' },
  ],
  fastRefresh: {},
  lessLoader: {
    modifyVars: {
      'primary-color': '#B53230',
    },
    javascriptEnabled: true,
  },
});
