<template>
  <div :class="stylesByVariants">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { PLACEHOLDER } from '@/constants';

const { variant } = defineProps<{ variant?: string }>();

const stylesByVariants = computed(() => {
  switch (variant) {
    case PLACEHOLDER.SECTION.VARIANT:
      return 'w-full max-w-[25rem] mb-4 p-4 text-black bg-gray-200 rounded';
    default:
      return 'w-full h-full';
  }
});
</script>
