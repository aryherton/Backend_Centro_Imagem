import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class UserCreatedDTO {
  @ApiProperty()
  @Allow()
  name: string;

  @ApiProperty()
  @Allow()
  email: string;

  @ApiProperty()
  @Allow()
  password: string;

  @Allow()
  @ApiProperty({
    enum: [1, 2, 3],
  })
  level: number;
}
