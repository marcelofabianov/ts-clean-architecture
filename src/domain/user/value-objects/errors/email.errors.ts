export type EmailErrorsType = 'INVALID_EMAIL' | 'EMPTY_EMAIL';

export const EmailErrors = async (error: EmailErrorsType): Promise<string> => {
  switch (error) {
    case 'EMPTY_EMAIL': {
      return 'Empty email';
    }
    case 'INVALID_EMAIL': {
      return 'Invalid email';
    }
    default: {
      throw new Error('Invalid email');
    }
  }
};
