import { defineStore } from 'pinia';
import { ref } from 'vue';

import { ERROR_MESSAGES } from '@/constants';
import { useLocalStorage } from '@/hooks';
import { ILoginData } from '@/interfaces';
import { USER_MOCK_DATA } from '@/mock';

export const defaultAuthState: ILoginData = {
  userName: '',
  password: ''
};

const LOGIN_FORM_DATA_KEY = 'loginFormData';

export const useAuthStore = defineStore('auth', () => {
  const { getLocalStorage, setLocalStorage, clearLocalStorage } = useLocalStorage();
  const localStoreState = getLocalStorage(LOGIN_FORM_DATA_KEY);

  const loginFormData = ref<ILoginData>(localStoreState || defaultAuthState);
  const isAuthenticated = ref(!!loginFormData.value.userName);

  const setLoginFormData = ({ userName, password }: ILoginData) => {
    if (password !== USER_MOCK_DATA.password && userName === USER_MOCK_DATA.userName) {
      return {
        errors: [
          {
            password: ERROR_MESSAGES.PASSWORD
          }
        ]
      };
    }

    if (password === USER_MOCK_DATA.password && userName !== USER_MOCK_DATA.userName) {
      return {
        errors: [
          {
            userName: ERROR_MESSAGES.USERNAME
          }
        ]
      };
    }

    if (password !== USER_MOCK_DATA.password && userName !== USER_MOCK_DATA.userName) {
      return {
        errors: [
          {
            userName: ERROR_MESSAGES.USERNAME,
            password: ERROR_MESSAGES.PASSWORD
          }
        ]
      };
    }

    loginFormData.value = { userName, password };
    isAuthenticated.value = true;
    setLocalStorage(LOGIN_FORM_DATA_KEY, loginFormData.value);

    return;
  };

  const $resetLoginFormData = () => {
    loginFormData.value = defaultAuthState;
    isAuthenticated.value = false;
    clearLocalStorage(LOGIN_FORM_DATA_KEY);
  };

  return { loginFormData, isAuthenticated, setLoginFormData, $resetLoginFormData };
});
