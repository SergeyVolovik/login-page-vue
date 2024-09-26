import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { useRouter } from 'vue-router';

import { PATHS } from '@/constants';
import { useLoginAction } from '@/hooks';

vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}));

describe('useLoginAction', () => {
  // Set up a new mock for each test
  let mockPush: ReturnType<typeof vi.fn>;
  let mockBack: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Create new mock functions before each test
    mockPush = vi.fn();
    mockBack = vi.fn();

    // Mock the useRouter to return our mocks
    (useRouter as Mock).mockReturnValue({
      push: mockPush,
      back: mockBack
    });
  });

  it('handleLogInClick pushes the correct path to the router', async () => {
    const router = useRouter();
    const { handleLogInClick } = useLoginAction();
    handleLogInClick();
    expect(router.push).toHaveBeenCalledOnce();
    expect(router.push).toHaveBeenCalledWith(PATHS.PAGE.PATH);
  });

  it('handleBackToClick calls the back method on the router', async () => {
    const router = useRouter();
    const { handleBackToClick } = useLoginAction();
    handleBackToClick();
    expect(router.back).toHaveBeenCalledOnce();
  });

  it('handleLogOutClick pushes the correct path to the router', async () => {
    const router = useRouter();
    const { handleLogOutClick } = useLoginAction();
    handleLogOutClick();
    expect(router.push).toHaveBeenCalledOnce();
    expect(router.push).toHaveBeenCalledWith(PATHS.LOGIN.PATH);
  });

  it('handleLogOutClick calls the provided callback function', () => {
    const callback = vi.fn();
    const { handleLogOutClick } = useLoginAction();
    handleLogOutClick(callback);
    expect(callback).toHaveBeenCalledOnce();
  });

  it('handleLogOutClick does not call the callback function if none is provided', () => {
    const callback = vi.fn();
    const { handleLogOutClick } = useLoginAction();
    handleLogOutClick();
    expect(callback).not.toHaveBeenCalled();
  });

  it('handleLogOutClick does not throw an error if no callback is provided', () => {
    const { handleLogOutClick } = useLoginAction();
    expect(() => handleLogOutClick()).not.toThrow();
  });
});
