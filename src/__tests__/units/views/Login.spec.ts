import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LOGIN_FIELD_NAMES } from '@/constants';
import { Login } from '@/views';

vi.mock('@/stores', () => ({
  useAuthStore: () => ({
    setLoginFormData: vi.fn()
  })
}));

vi.mock('@/hooks', () => ({
  useLoader: () => ({
    isLoading: false,
    setLoading: vi.fn()
  }),
  useLoginAction: () => ({
    handleLogInClick: vi.fn()
  })
}));

describe('Login.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Login);
  });

  it('renders the login form', () => {
    expect(wrapper.find('h1').text()).toBe('Login');
    console.log(wrapper.html());
    expect(wrapper.find(`[inputId="${LOGIN_FIELD_NAMES.USER_NAME}"]`).exists()).toBe(true);
    expect(wrapper.find(`[inputId="${LOGIN_FIELD_NAMES.PASSWORD}"]`).exists()).toBe(true);
    expect(wrapper.find('button[id="login-button"]').exists()).toBe(true);
  });
});
