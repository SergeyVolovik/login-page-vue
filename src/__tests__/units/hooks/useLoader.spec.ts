import { describe, expect, it } from 'vitest';

import { useLoader } from '@/hooks/useLoader';

describe('useLoader', () => {
  it('initial state of isLoading is false', () => {
    const { isLoading } = useLoader();
    expect(isLoading.value).toBe(false);
  });

  it('setLoading sets isLoading to true', () => {
    const { isLoading, setLoading } = useLoader();
    setLoading(true);
    expect(isLoading.value).toBe(true);
  });

  it('setLoading sets isLoading to false', () => {
    const { isLoading, setLoading } = useLoader();
    setLoading(true);
    setLoading(false);
    expect(isLoading.value).toBe(false);
  });

  it('multiple calls to setLoading update isLoading correctly', () => {
    const { isLoading, setLoading } = useLoader();
    setLoading(true);
    setLoading(false);
    setLoading(true);
    expect(isLoading.value).toBe(true);
  });
});
