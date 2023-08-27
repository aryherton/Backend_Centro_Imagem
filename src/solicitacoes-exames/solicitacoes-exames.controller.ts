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
import { SolicitacaoExameCreatedDTO } from './dto/solicitacaoExame.created.dto';
import { SolicitacoesExamesService } from './solicitacoes-exames.service';

@Controller('solicitacoes-exames')
export class SolicitacoesExamesController {
  constructor(private readonly solicitacaoService: SolicitacoesExamesService) {}

  @Post()
  @ApiBody({ type: SolicitacaoExameCreatedDTO })
  @ApiCreatedResponse({ description: 'SolicitacaoExame created succes' })
  @ApiUnprocessableEntityResponse({
    description: 'SolicitacaoExame already exists',
  })
  async create(@Body() solicitacaoExameCreatedDTO: SolicitacaoExameCreatedDTO) {
    return await this.solicitacaoService.create(solicitacaoExameCreatedDTO);
  }

  @Get()
  async findAll() {
    return await this.solicitacaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.solicitacaoService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() solicitacaoExameCreatedDTO: SolicitacaoExameCreatedDTO,
  ) {
    return await this.solicitacaoService.update(id, solicitacaoExameCreatedDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.solicitacaoService.delete(id);
  }

  @Put(':id')
  async put(
    @Param('id') id: string,
    @Body() solicitacaoExameCreatedDTO: SolicitacaoExameCreatedDTO,
  ) {
    return await this.solicitacaoService.put(id, solicitacaoExameCreatedDTO);
  }
}
