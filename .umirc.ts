import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/chapter/:name', component: '@/pages/Chapter' },
  ],
  fastRefresh: {},
  lessLoader: {}
});
