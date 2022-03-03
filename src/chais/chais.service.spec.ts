import { Test, TestingModule } from '@nestjs/testing';
import { ChaisService } from './chais.service';

describe('ChaisService', () => {
  let service: ChaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChaisService],
    }).compile();

    service = module.get<ChaisService>(ChaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
