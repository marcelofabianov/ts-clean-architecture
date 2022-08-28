import User from '../../../src/domain/entities/user/user.entity';
import { userType } from '../../../src/domain/entities/user/type/user.type';

describe('Domain/Entities/User', function () {
  it('Deve ser criado um usuario valido', function () {
    const userData: userType = {
      name: 'Marcelo',
      email: 'marcelo@example.com',
      password: 'password'
    };

    const user = new User(userData);

    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
    expect(user.password).toBe(userData.password);
    expect(Boolean(user.id)).toBe(true);
  });
  // não deve ser criado um usuário com email invalido
  // não deve ser criado um usuário com password invalido
  // não deve ser criado um usuário com email de outro usuário
});
