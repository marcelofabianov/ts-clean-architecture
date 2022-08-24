import { Password } from './password.value-object';

describe('Domain User value object passwords', () => {
  it('Deve criar uma nova senha com dado válido', () => {
    const password = Password.create('my-secured-password');
    expect(password.value).toEqual('my-secured-password');
  });
});
