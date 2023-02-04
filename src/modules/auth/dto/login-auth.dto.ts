import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/modules/user/entity/user.entity';

export class LoginAuthDto extends PickType(User, ['email', 'password']) {}
