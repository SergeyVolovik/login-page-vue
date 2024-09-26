import * as yup from 'yup';

import { VALIDATION_FIELD_MESSAGES } from '@/constants';

export const loginValidationSchema = yup.object({
  userName: yup.string().required(VALIDATION_FIELD_MESSAGES.REQUIRED).label('User Name'),
  password: yup.string().required(VALIDATION_FIELD_MESSAGES.REQUIRED).label('Password')
});
