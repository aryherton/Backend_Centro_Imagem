import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserCreatedDTO } from './dto/user.created.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiBody({ type: UserCreatedDTO })
  @ApiCreatedResponse({ description: 'User created succes' })
  @ApiUnprocessableEntityResponse({ description: 'User already exists' })
  async create(@Body() userCreatedDTO: UserCreatedDTO) {
    return await this.userService.create(userCreatedDTO);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() userCreatedDTO: UserCreatedDTO,
  ) {
    return await this.userService.update(id, userCreatedDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }

  @Put(':id')
  async put(@Param('id') id: string, @Body() userCreatedDTO: UserCreatedDTO) {
    return await this.userService.put(id, userCreatedDTO);
  }
}
