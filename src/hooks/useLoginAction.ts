import { useRouter } from 'vue-router';

import { PATHS } from '@/constants';

export const useLoginAction = () => {
  const router = useRouter();

  const handleLogInClick = () => router.push(PATHS.PAGE.PATH);
  const handleBackToClick = () => router.back();

  const handleLogOutClick = (callBack?: () => void): void => {
    router.push(PATHS.LOGIN.PATH);
    if (callBack) callBack();
  };

  return {
    handleLogInClick,
    handleBackToClick,
    handleLogOutClick
  };
};
