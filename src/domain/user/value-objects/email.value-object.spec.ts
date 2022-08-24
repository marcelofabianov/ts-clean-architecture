import { Email } from './email.value-object';

describe('Domain User value object email', () => {
  it('Deve criar uma novo email válido', () => {
    const email = Email.create('john@email.com');
    expect(email.value).toEqual('john@email.com');
  });
});
