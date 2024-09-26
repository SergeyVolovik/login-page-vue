import { ref } from 'vue';

export const useLoader = () => {
  const isLoading = ref(false);

  const setLoading = (newLoadingValue: boolean) => {
    isLoading.value = newLoadingValue;
  };

  return { isLoading, setLoading };
};
