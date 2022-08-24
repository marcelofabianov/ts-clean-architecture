export const ERROR_INVALID_EMAIL = {
  type: 'ERROR_INVALID_EMAIL',
  message: 'Invalid email address'
};

export const ERROR_EMPTY_EMAIL = {
  type: 'ERROR_EMPTY_EMAIL',
  message: 'Empty email address'
};

export type EmailErrors = 'ERROR_INVALID_EMAIL' | 'ERROR_EMPTY_EMAIL';
