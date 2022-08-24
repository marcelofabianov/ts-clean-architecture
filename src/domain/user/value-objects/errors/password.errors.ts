export type PasswordErrorsType = 'INVALID_PASSWORD' | 'EMPTY_PASSWORD';

export const PasswordErrors = async (
  error: PasswordErrorsType
): Promise<string> => {
  switch (error) {
    case 'EMPTY_PASSWORD': {
      return 'Empty password';
    }
    case 'INVALID_PASSWORD': {
      return 'Invalid password';
    }
    default: {
      throw new Error('Invalid password');
    }
  }
};
