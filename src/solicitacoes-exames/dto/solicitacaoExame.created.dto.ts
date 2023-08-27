import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class SolicitacaoExameCreatedDTO {
  @ApiProperty()
  @Allow()
  nome: string;

  @ApiProperty()
  @Allow()
  dataSolicitacao: Date;

  @ApiProperty()
  @Allow()
  exame: string;

  @ApiProperty()
  @Allow()
  guia: number;

  @ApiProperty()
  @Allow()
  aprovado: boolean;

  @ApiProperty()
  @Allow()
  observacao: string;

  @ApiProperty()
  @Allow()
  logInterno: string;
}
