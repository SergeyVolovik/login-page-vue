import { useRouter } from 'vue-router';
import { describe, it, vi, beforeEach, expect, Mock } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from 'primevue/button';

import { NotFound } from '@/views';

vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}));

describe('NotFound', () => {
  let mockBack: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Create new mock functions before each test
    mockBack = vi.fn();

    // Mock the useRouter to return our mocks
    (useRouter as Mock).mockReturnValue({
      back: mockBack
    });
  });

  it('handleBackToClick calls the back method on the router', () => {
    const router = useRouter();
    const wrapper = mount(NotFound, {
      components: [Button]
    });
    const handleBackToClickSpy = vi.spyOn(router, 'back');

    wrapper.find('button').trigger('click');

    expect(handleBackToClickSpy).toHaveBeenCalledOnce();
  });
});
