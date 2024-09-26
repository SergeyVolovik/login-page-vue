<template>
  <template v-if="isLoading">
    <ProgressSpinner />
  </template>
  <template v-else-if="!isLoading && isVisible">
    <slot name="content" />
  </template>
  <template v-else>
    <slot name="placeholder" />
  </template>
</template>

<script setup lang="ts">
defineProps<{ isLoading: boolean; isVisible: boolean }>();
</script>
