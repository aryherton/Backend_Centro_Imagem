import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacoesExamesService } from './solicitacoes-exames.service';

describe('SolicitacoesExamesService', () => {
  let service: SolicitacoesExamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitacoesExamesService],
    }).compile();

    service = module.get<SolicitacoesExamesService>(SolicitacoesExamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
