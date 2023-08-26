import { PartialType, ApiProperty } from '@nestjs/swagger';
import { UserCreatedDTO } from './user.created.dto';
import { Allow } from 'class-validator';

export class UserUpdateDTO extends PartialType(UserCreatedDTO) {
  @ApiProperty()
  @Allow()
  name?: string;

  @ApiProperty()
  @Allow()
  email?: string;

  @ApiProperty()
  @Allow()
  password?: string;

  @ApiProperty()
  @Allow()
  level?: number;
}
