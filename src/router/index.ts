import { createWebHistory, createRouter } from 'vue-router';

import { useAuthStore } from '@/stores';
import { PATHS } from '@/constants';
import { routes } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;

  // Redirect authenticated users away from login page
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    authStore.$resetLoginFormData(); // Reset login data
    return next(PATHS.LOGIN.PATH);
  }

  // Redirect authenticated users away from visitor-only pages
  if (to.matched.some((record) => record.meta.requiresVisitor) && isAuthenticated) {
    return next(PATHS.PAGE.PATH);
  }

  // Allow navigation to other routes
  next();
});

export default router;
