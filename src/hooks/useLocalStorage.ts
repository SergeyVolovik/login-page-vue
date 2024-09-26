export const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));

  const getLocalStorage = (key: string) => {
    const storeState = localStorage.getItem(key);

    if (!storeState) return null;
    return JSON.parse(storeState);
  };

  const clearLocalStorage = (key: string) => localStorage.removeItem(key);

  return {
    setLocalStorage,
    getLocalStorage,
    clearLocalStorage
  };
};
