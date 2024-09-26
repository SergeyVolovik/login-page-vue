import App from '@/App.vue';
import { registerPlugins } from '@/plugins';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createApp } from 'vue';

import './../../main';

describe('main.ts', () => {
  let appContainer: any;

  beforeEach(() => {
    appContainer = document.createElement('div');
    appContainer.id = 'app';
    document.body.appendChild(appContainer);
  });

  afterEach(() => {
    document.body.removeChild(appContainer);
    appContainer = null;
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it('calls registerPlugins with the app instance', () => {
    const registerPluginsMock = vi.fn();
    const app = createApp(App);
    registerPluginsMock(app);
    expect(registerPluginsMock).toHaveBeenCalledWith(app);
  });

  it('mounts the app instance to the #app element', () => {
    const app = createApp(App);
    registerPlugins(app);
    app.mount('#app');
    expect(document.getElementById('app')).toBeTruthy();
  });
});
