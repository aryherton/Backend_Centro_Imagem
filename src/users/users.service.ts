import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreatedDTO } from './dto/user.created.dto';
import { UserClass } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserClass.name) private userModel: Model<UserClass>,
  ) {}
  async create(userCreatedDTO: UserCreatedDTO) {
    const existingUser = await this.userModel
      .findOne({
        email: userCreatedDTO.email,
      })
      .exec();

    if (existingUser) {
      throw new Error('User already exists');
    }

    const createdUser = new this.userModel(userCreatedDTO);
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, userCreatedDTO: UserCreatedDTO) {
    return await this.userModel.findByIdAndUpdate(id, userCreatedDTO).exec();
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async put(id: string, userCreatedDTO: UserCreatedDTO) {
    return await this.userModel.findByIdAndUpdate(id, userCreatedDTO).exec();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email: email }).exec();
  }
}
