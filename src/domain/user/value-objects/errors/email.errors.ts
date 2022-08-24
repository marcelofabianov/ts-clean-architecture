export const ERROR_INVALID_EMAIL = {
  type: 'ERROR_INVALID_EMAIL',
  message: 'Invalid email address'
};

export const ERROR_EMPTY_EMAIL = {
  type: 'ERROR_EMPTY_EMAIL',
  message: 'Empty email address'
};

export type EmailErrorsType = 'ERROR_INVALID_EMAIL' | 'ERROR_EMPTY_EMAIL';

export const EmailErrors = async (error: EmailErrorsType): Promise<string> => {
  switch (error) {
    case ERROR_EMPTY_EMAIL.type: {
      return ERROR_EMPTY_EMAIL.message;
    }
    case ERROR_INVALID_EMAIL.type: {
      return ERROR_INVALID_EMAIL.message;
    }
    default: {
      return 'error';
    }
  }
};
