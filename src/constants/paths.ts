export const PATHS = {
  LOGIN: { PATH: '/', NAME: 'Login' },
  CREATE_ACCOUNT: { PATH: '/create-account', NAME: 'Create Account' },
  PAGE: { PATH: '/page', NAME: 'Page' },
  NOT_FOUND: { PATH: '/:catchAll(.*)', NAME: '404' }
} as const;
