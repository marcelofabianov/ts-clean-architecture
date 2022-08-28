import Email from '../../../src/domain/entities/user/value-objects/email.vo';

describe('Domain/Entities/User/ValueObjects/Email', function () {
  it('Deve criar um e-mail válido', function () {
    const email = Email.create('marcelo@example.com');
    expect(email).toBe('marcelo@example.com');
  });
  it('Não deve ser criado um e-mail inválido', function () {
    //
  });
});
