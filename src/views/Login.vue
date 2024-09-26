<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form class="w-full max-w-[25rem] p-4 flex flex-col gap-4" @submit.prevent="logInApp">
      <h1 class="text-3xl">Login</h1>
      <div class="flex flex-col gap-2">
        <FloatLabel class="w-full mt-6 flex flex-col gap-4">
          <InputText
            v-model="userName"
            :invalid="!!errors.userName"
            :disabled="isLoading"
            :inputId="LOGIN_FIELD_NAMES.USER_NAME"
            class="w-full"
            type="text"
          />
          <label :for="LOGIN_FIELD_NAMES.USER_NAME">User Name</label>
        </FloatLabel>
        <Message v-if="errors.userName" severity="error">{{ errors.userName }}</Message>
        <FloatLabel class="w-full mt-6 flex flex-col gap-4">
          <Password
            v-model="password"
            :class="{ 'p-invalid': !!errors.password }"
            :invalid="!!errors.password"
            :disabled="isLoading"
            :feedback="false"
            :inputId="LOGIN_FIELD_NAMES.PASSWORD"
            class="w-full"
            inputClass="w-full"
            toggleMask
          />
          <label :for="LOGIN_FIELD_NAMES.PASSWORD">Password</label>
        </FloatLabel>
        <Message v-if="errors.password" severity="error">{{ errors.password }}</Message>
      </div>
      <Button :loading="isLoading" id="login-button" class="mt-4" type="submit" label="Login" icon="pi pi-sign-in" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';

import { LOGIN_FIELD_NAMES } from '@/constants';
import { useAuthStore } from '@/stores';
import { ILoginData } from '@/interfaces';
import { useLoader, useLoginAction } from '@/hooks';
import { loginValidationSchema } from '@/validation';

const { setLoginFormData } = useAuthStore();
const { handleLogInClick } = useLoginAction();
const { isLoading, setLoading } = useLoader();
const { errors, handleSubmit } = useForm({
  validationSchema: loginValidationSchema
});
const { value: userName } = useField<string>(LOGIN_FIELD_NAMES.USER_NAME);
const { value: password } = useField<string>(LOGIN_FIELD_NAMES.PASSWORD);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const logInApp = handleSubmit(async (_, actions): Promise<void> => {
  const loginStoreData = { userName: userName.value, password: password.value };

  setLoading(true);
  await delay(5000);

  const res = setLoginFormData(loginStoreData as ILoginData);
  if (res?.errors?.length) actions.setErrors(res?.errors[0]);

  setLoading(false);
  handleLogInClick();
});
</script>
