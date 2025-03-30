<template>
  <div class="w-screen h-screen flex flex-col gap-4 items-start">
    <ConditionContent :isLoading="isLoading" :isVisible="!!loginFormData.userName">
      <template #content>
        <nav class="w-full p-2 flex justify-between items-center gap-4">
          <h1>Page: Hello, {{ loginFormData.userName }}</h1>
          <Button
            v-if="!isLoading"
            label="Log out"
            icon="pi pi-sign-out"
            @click="handleLogOutClick($resetLoginFormData)"
          />
        </nav>
      </template>
      <template #placeholder>
        <Placeholder :variant="PLACEHOLDER.SECTION.VARIANT">{{ PLACEHOLDER.SECTION.TEXT }}</Placeholder>
      </template>
    </ConditionContent>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { ConditionContent, Placeholder } from '@/components';
import { PLACEHOLDER } from '@/constants';
import { useLoader, useLoginAction } from '@/hooks';
import { useAuthStore } from '@/stores';

const { handleLogOutClick } = useLoginAction();
const { isLoading, setLoading } = useLoader();

const store = useAuthStore();
const { loginFormData } = storeToRefs(store);
const { $resetLoginFormData } = store;

onMounted(() => {
  setTimeout(() => {
    setLoading(false);
  }, 3000);
});
</script>
