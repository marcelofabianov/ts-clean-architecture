import { Email } from './value-objects/email.value-object';
import { Password } from './value-objects/password.value-object';

export interface UserData {
  name: string;
  email: Email;
  password: Password;
  active: boolean;
}
