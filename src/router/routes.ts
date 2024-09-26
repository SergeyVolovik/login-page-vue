/* v8 ignore next */
import { PATHS } from '@/constants';

export const routes = [
  {
    path: PATHS.LOGIN.PATH,
    name: PATHS.LOGIN.NAME,
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: PATHS.CREATE_ACCOUNT.PATH,
    name: PATHS.CREATE_ACCOUNT.NAME,
    component: () => null,
    meta: { requiresVisitor: true }
  },
  {
    path: PATHS.PAGE.PATH,
    name: PATHS.PAGE.NAME,
    component: () => import(/* webpackChunkName: "page" */ '@/views/Page.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: PATHS.NOT_FOUND.PATH,
    name: PATHS.NOT_FOUND.NAME,
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue')
  }
];
