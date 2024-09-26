import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import ProgressSpinner from 'primevue/progressspinner';

import { ConditionContent } from '@/components';

describe('ConditionContent', () => {
  it('displays ProgressSpinner when isLoading is true', () => {
    const wrapper = mount(ConditionContent, {
      components: {
        ProgressSpinner
      },
      props: {
        isLoading: true,
        isVisible: false
      }
    });
    const spinner = wrapper.findComponent(ProgressSpinner);
    console.log(spinner);

    expect(spinner.exists()).toBe(true);
  });

  it('displays content slot when isLoading is false and isVisible is true', () => {
    const wrapper = mount(ConditionContent, {
      props: {
        isLoading: false,
        isVisible: true
      },
      slots: {
        content: '<div class="content">Content</div>'
      }
    });
    const content = wrapper.find('.content');

    expect(content.exists()).toBe(true);
  });

  it('displays placeholder slot when isLoading is false and isVisible is false', () => {
    const wrapper = mount(ConditionContent, {
      props: {
        isLoading: false,
        isVisible: false
      },
      slots: {
        placeholder: '<div class="placeholder">Placeholder</div>'
      }
    });
    const placeholder = wrapper.find('.placeholder');

    expect(placeholder.exists()).toBe(true);
  });
});
