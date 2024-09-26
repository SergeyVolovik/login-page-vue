import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import { ERROR_MESSAGES } from '@/constants';
import { useAuthStore } from '@/stores';
import { useLocalStorage } from '@/hooks';

vi.mock('@/hooks', () => ({
  useLocalStorage: vi.fn(() => ({
    getLocalStorage: vi.fn(),
    setLocalStorage: vi.fn(),
    clearLocalStorage: vi.fn()
  }))
}));

describe('useAuthStore', () => {
  let store: ReturnType<typeof useAuthStore>;
  let localStorageMocks: any;

  beforeEach(() => {
    setActivePinia(createPinia());

    localStorageMocks = {
      getLocalStorage: vi.fn().mockReturnValue(null),
      setLocalStorage: vi.fn(),
      clearLocalStorage: vi.fn()
    };

    vi.mocked(useLocalStorage).mockReturnValue(localStorageMocks);
    store = useAuthStore();
  });

  it('initializes with default state', () => {
    expect(store.loginFormData).toEqual({
      userName: '',
      password: ''
    });
    expect(store.isAuthenticated).toBe(false);
  });

  it('sets login data and updates authentication status', () => {
    store.setLoginFormData({ userName: 'admin', password: 'password' });

    expect(store.loginFormData).toEqual({
      userName: 'admin',
      password: 'password'
    });
    expect(store.isAuthenticated).toBe(true);
    expect(localStorageMocks.setLocalStorage).toHaveBeenCalledWith('loginFormData', {
      userName: 'admin',
      password: 'password'
    });
  });

  it('returns error if password is incorrect and username is admin', () => {
    const result = store.setLoginFormData({ userName: 'admin', password: 'wrongPassword' });

    expect(result).toEqual({
      errors: [{ password: ERROR_MESSAGES.PASSWORD }]
    });
    expect(store.isAuthenticated).toBe(false);
  });

  it('returns error if username is incorrect and password is correct', () => {
    const result = store.setLoginFormData({ userName: 'wrongUser', password: 'password' });

    expect(result).toEqual({
      errors: [{ userName: ERROR_MESSAGES.USERNAME }]
    });
    expect(store.isAuthenticated).toBe(false);
  });

  it('returns errors if both username and password are incorrect', () => {
    const result = store.setLoginFormData({ userName: 'wrongUser', password: 'wrongPassword' });

    expect(result).toEqual({
      errors: [{ userName: ERROR_MESSAGES.USERNAME, password: ERROR_MESSAGES.PASSWORD }]
    });
    expect(store.isAuthenticated).toBe(false);
  });

  it('resets login form data', () => {
    store.$resetLoginFormData();

    expect(store.loginFormData).toEqual({
      userName: '',
      password: ''
    });
    expect(store.isAuthenticated).toBe(false);
    expect(localStorageMocks.clearLocalStorage).toHaveBeenCalledWith('loginFormData');
  });
});
