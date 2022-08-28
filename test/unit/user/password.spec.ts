import Password from '../../../src/domain/entities/user/value-objects/password.vo';

describe('Domain/Entities/User/ValueObjects/Password', function () {
  it('Deve ser criado um password válido', function () {
    const password = Password.create('fdaagffasAfas$23');
    expect(password).toBe('fdaagffasAfas$23');
  });
});
