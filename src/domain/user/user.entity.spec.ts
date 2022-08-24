import { UserData } from './dto/user.data';
import { User } from './user.entity';
import { Password } from './value-objects/password.value-object';
import { Email } from './value-objects/email.value-object';

describe('Domain User', () => {
  it('Deve criar um usuário com dados válidos', () => {
    const userData: UserData = {
      name: 'John',
      email: Email.create('john@example.com'),
      password: Password.create('password'),
      active: true
    };

    const user = User.create(userData);

    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
  });
});
