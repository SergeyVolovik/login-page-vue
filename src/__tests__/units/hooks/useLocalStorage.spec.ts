import { describe, expect, it } from 'vitest';

import { useLocalStorage } from '@/hooks/useLocalStorage';

describe('useLocalStorage', () => {
  it('should set value to localStorage', () => {
    const { setLocalStorage, getLocalStorage } = useLocalStorage();
    setLocalStorage('test', 'value');
    expect(getLocalStorage('test')).toBe('value');
  });

  it('should clear value from localStorage', () => {
    const { setLocalStorage, clearLocalStorage, getLocalStorage } = useLocalStorage();
    setLocalStorage('test', 'value');
    clearLocalStorage('test');
    expect(getLocalStorage('test')).toBeNull();
  });
});
