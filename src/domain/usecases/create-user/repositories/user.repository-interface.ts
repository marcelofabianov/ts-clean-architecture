import CreateUserDto from '../dto/create-user.dto';
import User from '../../../entities/user/user.entity';

export default interface UserRepositoryInterface {
  create(createUserDto: CreateUserDto): User;
}
