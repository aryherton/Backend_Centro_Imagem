import { ApiProperty, PartialType } from '@nestjs/swagger';
import { SolicitacaoExameCreatedDTO } from './solicitacaoExame.created.dto';
import { Allow } from 'class-validator';

export class SolicitacaoExameUpdateDTO extends PartialType(
  SolicitacaoExameCreatedDTO,
) {
  @ApiProperty()
  @Allow()
  nome?: string;

  @ApiProperty()
  @Allow()
  dataSolicitacao?: Date;

  @ApiProperty()
  @Allow()
  exame?: string;

  @ApiProperty()
  @Allow()
  guia?: number;

  @ApiProperty()
  @Allow()
  aprovado?: boolean;

  @ApiProperty()
  @Allow()
  logInterno?: string;
}
