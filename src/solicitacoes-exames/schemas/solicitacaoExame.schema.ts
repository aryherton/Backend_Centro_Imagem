import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'solicitacaoExame' })
export class SolicitacaoExameClass extends Document {
  @Prop()
  nome: string;

  @Prop()
  dataSolicitacao: Date;

  @Prop()
  exame: string;

  @Prop()
  guia: number;

  @Prop()
  aprovado: boolean;

  @Prop()
  logInterno: string;
}

export const SolicitacaoExameSchema = SchemaFactory.createForClass(
  SolicitacaoExameClass,
);
