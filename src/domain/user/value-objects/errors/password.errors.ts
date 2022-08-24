export const ERROR_INVALID_PASSWORD = {
  type: 'ERROR_INVALID_PASSWORD',
  message: 'Invalid password'
};

export const ERROR_EMPTY_PASSWORD = {
  type: 'ERROR_EMPTY_PASSWORD',
  message: 'Empty password'
};

export type PasswordErrors = 'ERROR_INVALID_PASSWORD' | 'ERROR_EMPTY_PASSWORD';
