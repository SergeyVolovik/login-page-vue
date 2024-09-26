<template>
  <div class="p-2 flex items-center gap-4">
    <h1>Not Found</h1>
    <Button label="Back" @click="handleBackToClick" />
  </div>
</template>

<script setup lang="ts">
import { useLoginAction } from '@/hooks';

const { handleBackToClick } = useLoginAction();
</script>
