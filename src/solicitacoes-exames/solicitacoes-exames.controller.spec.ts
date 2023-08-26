import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacoesExamesController } from './solicitacoes-exames.controller';

describe('SolicitacoesExamesController', () => {
  let controller: SolicitacoesExamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitacoesExamesController],
    }).compile();

    controller = module.get<SolicitacoesExamesController>(SolicitacoesExamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
