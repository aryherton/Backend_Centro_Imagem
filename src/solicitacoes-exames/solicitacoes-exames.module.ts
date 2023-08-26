import { Module } from '@nestjs/common';
import { SolicitacoesExamesService } from './solicitacoes-exames.service';
import { SolicitacoesExamesController } from './solicitacoes-exames.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SolicitacaoExameClass,
  SolicitacaoExameSchema,
} from './schemas/solicitacaoExame.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SolicitacaoExameClass.name, schema: SolicitacaoExameSchema },
    ]),
  ],
  controllers: [SolicitacoesExamesController],
  providers: [SolicitacoesExamesService],
})
export class SolicitacoesExamesModule {}
