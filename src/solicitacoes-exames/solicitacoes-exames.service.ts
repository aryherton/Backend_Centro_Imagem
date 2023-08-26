import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SolicitacaoExameCreatedDTO } from './dto/solicitacaoExame.created.dto';
import { SolicitacaoExameUpdateDTO } from './dto/solicitacaoExame.update.dto';
import { SolicitacaoExameClass } from './schemas/solicitacaoExame.schema';

@Injectable()
export class SolicitacoesExamesService {
  constructor(
    @InjectModel(SolicitacaoExameClass.name)
    private solicitacaoExameModel: Model<SolicitacaoExameClass>,
  ) {}

  async create(solicitacaoExameCreatedDTO: SolicitacaoExameCreatedDTO) {
    const checkSolicitacaoExame = await this.solicitacaoExameModel
      .findOne({
        nome: solicitacaoExameCreatedDTO.guia,
      })
      .exec();

    if (checkSolicitacaoExame) {
      throw new NotFoundException('Solicitacao Exame already exists');
    }
    const createdSolicitacaoExame = new this.solicitacaoExameModel(
      solicitacaoExameCreatedDTO,
    );
    return await createdSolicitacaoExame.save();
  }

  async findAll() {
    return await this.solicitacaoExameModel.find().exec();
  }

  async findOne(id: string) {
    return await this.solicitacaoExameModel.findById(id).exec();
  }

  async update(
    id: string,
    solicitacaoExameUpdateDTO: SolicitacaoExameUpdateDTO,
  ) {
    return await this.solicitacaoExameModel
      .findByIdAndUpdate(id, solicitacaoExameUpdateDTO)
      .exec();
  }

  async delete(id: string) {
    return await this.solicitacaoExameModel.findByIdAndDelete(id).exec();
  }
}
