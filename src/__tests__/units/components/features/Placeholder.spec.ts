import { it, expect, describe } from 'vitest';
import { mount } from '@vue/test-utils';

import { Placeholder } from '@/components';
import { PLACEHOLDER } from '@/constants';

describe('Placeholder', () => {
  it('renders placeholder text with default styles', () => {
    const wrapper = mount(Placeholder, {
      slots: {
        default: '<p>Placeholder text</p>'
      }
    });

    expect(wrapper.find('p').text()).toBe('Placeholder text');
    expect(wrapper.classes()).toEqual(['w-full', 'h-full']);
  });

  it('renders placeholder text with section styles', () => {
    const wrapper = mount(Placeholder, {
      props: {
        variant: PLACEHOLDER.SECTION.VARIANT
      },
      slots: {
        default: '<p class="placeholder">Placeholder text</p>'
      }
    });

    expect(wrapper.find('.placeholder').text()).toBe('Placeholder text');
    expect(wrapper.classes()).toEqual([
      'w-full',
      'max-w-[25rem]',
      'mb-4',
      'p-4',
      'text-black',
      'bg-gray-200',
      'rounded'
    ]);
  });

  it('renders with slot content', async () => {
    const wrapper = mount(Placeholder, {
      slots: {
        default: '<span class="content">Content</span>'
      }
    });

    expect(wrapper.find('.content').text()).toBe('Content');
  });
});
