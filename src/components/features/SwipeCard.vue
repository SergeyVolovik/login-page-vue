<template>
  <div
    class="w-80 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    :style="{
      transform: `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX / 10}deg)`
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSwipe } from '@/hooks';

const { offsetX, offsetY, onTouchStart, onTouchMove, onTouchEnd, onMouseDown, onMouseMove, onMouseUp } = useSwipe();
</script>
